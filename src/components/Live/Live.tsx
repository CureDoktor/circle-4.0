import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterOption, FilterCondition } from '../ui/filter-modal';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';
import { applyFilters } from '../../utils/filterHelpers';

interface LiveStream {
  id: string;
  title: string;
  host: {
    name: string;
    initials: string;
    color: string;
  };
  status: 'Live' | 'Ended' | 'Scheduled';
  duration: string;
  viewers: number;
  startedAt: string;
}

interface LiveProps {
  onToggleSidebar: () => void;
}

const Live: React.FC<LiveProps> = ({ onToggleSidebar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStreams, setSelectedStreams] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  // Mock data for live streams
  const mockLiveStreams: LiveStream[] = [
    {
      id: '1',
      title: 'Community Q&A Session',
      host: {
        name: 'John Doe',
        initials: 'JD',
        color: 'bg-blue-500',
      },
      status: 'Live',
      duration: '1h 23m',
      viewers: 156,
      startedAt: '2 hours ago',
    },
    {
      id: '2',
      title: 'Product Demo Live',
      host: {
        name: 'Jane Smith',
        initials: 'JS',
        color: 'bg-green-500',
      },
      status: 'Ended',
      duration: '45m',
      viewers: 89,
      startedAt: '1 day ago',
    },
    {
      id: '3',
      title: 'Weekly Community Update',
      host: {
        name: 'Mike Johnson',
        initials: 'MJ',
        color: 'bg-purple-500',
      },
      status: 'Scheduled',
      duration: '0m',
      viewers: 0,
      startedAt: 'Tomorrow 2:00 PM',
    },
    {
      id: '4',
      title: 'Expert Interview Series',
      host: {
        name: 'Sarah Wilson',
        initials: 'SW',
        color: 'bg-orange-500',
      },
      status: 'Ended',
      duration: '1h 15m',
      viewers: 234,
      startedAt: '3 days ago',
    },
  ];

  // Filter and pagination logic
  const getFilteredData = () => {
    return applyFilters(mockLiveStreams, activeFilters);
  };

  const filteredData = getFilteredData();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedStreams.length === paginatedData.length) {
      setSelectedStreams([]);
    } else {
      setSelectedStreams(paginatedData.map(stream => stream.id));
    }
  };

  const handleSelectItem = (streamId: string) => {
    setSelectedStreams(prev =>
      prev.includes(streamId)
        ? prev.filter(id => id !== streamId)
        : [...prev, streamId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected streams');
    setSelectedStreams([]);
  };

  const filterOptions: FilterOption[] = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'status', label: 'Status', type: 'text' },
    { id: 'type', label: 'Type', type: 'text' },
    { id: 'participants', label: 'Participants', type: 'text' },
  ];

  const tableColumns: TableColumn<LiveStream>[] = [
    {
      key: 'title',
      label: 'TITLE',
      render: (stream: LiveStream) => (
        <span className="text-sm text-gray-900 font-medium">
          {stream.title}
        </span>
      ),
    },
    {
      key: 'host',
      label: 'HOST',
      render: (stream: LiveStream) => (
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full ${stream.host.color} flex items-center justify-center`}
          >
            <span className="text-xs text-white font-medium">
              {stream.host.initials}
            </span>
          </div>
          <span className="text-sm text-gray-900">{stream.host.name}</span>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (stream: LiveStream) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            stream.status === 'Live'
              ? 'bg-red-100 text-red-800'
              : stream.status === 'Ended'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {stream.status}
        </span>
      ),
    },
    {
      key: 'duration',
      label: 'DURATION',
      render: (stream: LiveStream) => (
        <span className="text-sm text-gray-600">{stream.duration}</span>
      ),
    },
    {
      key: 'viewers',
      label: 'VIEWERS',
      render: (stream: LiveStream) => (
        <span className="text-sm text-gray-600">{stream.viewers}</span>
      ),
    },
    {
      key: 'startedAt',
      label: 'STARTED AT',
      render: (stream: LiveStream) => (
        <span className="text-sm text-gray-600">{stream.startedAt}</span>
      ),
    },
  ];

  // Statistics cards
  const stats = [
    {
      label: 'Total Streams',
      value: mockLiveStreams.length,
      change: '+12%',
      changeType: 'positive' as const,
    },
    {
      label: 'Active Viewers',
      value: mockLiveStreams
        .filter(s => s.status === 'Live')
        .reduce((sum, s) => sum + s.viewers, 0),
      change: '+5%',
      changeType: 'positive' as const,
    },
    {
      label: 'Avg. Duration',
      value: '45m',
      change: '-2%',
      changeType: 'negative' as const,
    },
    {
      label: 'Engagement Rate',
      value: '78%',
      change: '+8%',
      changeType: 'positive' as const,
    },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Live"
      actions={<Button variant="default">Start live stream</Button>}
    >
      {/* Statistics Cards */}
      <div className="flex-shrink-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div
                  className={`text-sm font-medium ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <EnhancedFilters
        filters={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      {/* Actions */}
      <Actions
        selectedCount={selectedStreams.length}
        totalCount={filteredData.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-200">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedStreams}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={filteredData.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        onNextPage={() =>
          setCurrentPage(prev => Math.min(prev + 1, totalPages))
        }
      />
    </ContentContainer>
  );
};

export default Live;
