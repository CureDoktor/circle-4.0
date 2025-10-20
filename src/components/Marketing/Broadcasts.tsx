import React, { useState } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import { Button } from '../ui/button';
import Tabs from '../Tabs/Tabs';
import TableEnhanced, { TableColumn } from '../ui/table-enhanced';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { exportToCSV } from '../../utils/csvExport';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterCondition } from '../ui/filter-modal';

interface Broadcast {
  id: string;
  name: string;
  status: 'Draft' | 'Sent' | 'Scheduled';
  sent: string;
  delivered: string;
  opened: string;
  clicked: string;
  unsubscribed: string;
  sendDate: string;
}

interface BroadcastsProps {
  onToggleSidebar: () => void;
}

const Broadcasts: React.FC<BroadcastsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedBroadcasts, setSelectedBroadcasts] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  const tabs = [
    { id: 'all', label: 'All', count: 366 },
    { id: 'sent', label: 'Sent', count: 57 },
    { id: 'draft', label: 'Draft', count: 307 },
    { id: 'scheduled', label: 'Scheduled', count: 1 },
  ];

  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([
    {
      id: '1',
      name: 'Test logo',
      status: 'Draft',
      sent: '-',
      delivered: '-',
      opened: '-',
      clicked: '-',
      unsubscribed: '-',
      sendDate: '-',
    },
    {
      id: '2',
      name: 'linkpersist',
      status: 'Draft',
      sent: '-',
      delivered: '-',
      opened: '-',
      clicked: '-',
      unsubscribed: '-',
      sendDate: '-',
    },
    {
      id: '3',
      name: 'testt',
      status: 'Draft',
      sent: '-',
      delivered: '-',
      opened: '-',
      clicked: '-',
      unsubscribed: '-',
      sendDate: '-',
    },
    {
      id: '4',
      name: 'fdsdf',
      status: 'Draft',
      sent: '-',
      delivered: '-',
      opened: '-',
      clicked: '-',
      unsubscribed: '-',
      sendDate: '-',
    },
    {
      id: '5',
      name: 'scheduleBroadcast',
      status: 'Sent',
      sent: '1',
      delivered: '100%',
      opened: '100%',
      clicked: '-',
      unsubscribed: '-',
      sendDate: 'August 28, 2025',
    },
    {
      id: '6',
      name: 'hyperlink_image',
      status: 'Draft',
      sent: '-',
      delivered: '-',
      opened: '-',
      clicked: '-',
      unsubscribed: '-',
      sendDate: '-',
    },
  ]);

  // Filter configuration
  const filters = [
    {
      id: 'status',
      label: 'Status',
      type: 'select' as const,
      options: ['Sent', 'Draft', 'Scheduled'],
    },
    {
      id: 'name',
      label: 'Name',
      type: 'text' as const,
    },
  ];

  // Apply tab and custom filters
  const filteredBroadcasts = broadcasts.filter(broadcast => {
    // Apply tab filter
    const tabMatch = (() => {
      switch (activeTab) {
        case 'sent':
          return broadcast.status === 'Sent';
        case 'draft':
          return broadcast.status === 'Draft';
        case 'scheduled':
          return broadcast.status === 'Scheduled';
        default:
          return true;
      }
    })();

    // Apply custom filters
    const customFiltersMatch = activeFilters.every(filter => {
      switch (filter.field) {
        case 'status': {
          return filter.operator === 'is'
            ? broadcast.status === filter.value
            : broadcast.status !== filter.value;
        }
        case 'name': {
          const name = broadcast.name.toLowerCase();
          const searchValue = filter.value.toLowerCase();
          return filter.operator === 'contains'
            ? name.includes(searchValue)
            : !name.includes(searchValue);
        }
        default:
          return true;
      }
    });

    return tabMatch && customFiltersMatch;
  });

  const totalPages = Math.ceil(filteredBroadcasts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBroadcasts = filteredBroadcasts.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedBroadcasts.length === paginatedBroadcasts.length) {
      setSelectedBroadcasts([]);
    } else {
      setSelectedBroadcasts(paginatedBroadcasts.map(b => b.id));
    }
  };

  const handleSelectBroadcast = (broadcastId: string) => {
    setSelectedBroadcasts(prev =>
      prev.includes(broadcastId)
        ? prev.filter(id => id !== broadcastId)
        : [...prev, broadcastId]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedBroadcasts.length === 0) return;
    setBroadcasts(prev =>
      prev.filter(broadcast => !selectedBroadcasts.includes(broadcast.id))
    );
    setSelectedBroadcasts([]);
  };

  const handleSendSelected = () => {
    if (selectedBroadcasts.length === 0) return;
    setBroadcasts(prev =>
      prev.map(broadcast =>
        selectedBroadcasts.includes(broadcast.id)
          ? { ...broadcast, status: 'Sent' as const }
          : broadcast
      )
    );
    setSelectedBroadcasts([]);
  };

  const handleDraftSelected = () => {
    if (selectedBroadcasts.length === 0) return;
    setBroadcasts(prev =>
      prev.map(broadcast =>
        selectedBroadcasts.includes(broadcast.id)
          ? { ...broadcast, status: 'Draft' as const }
          : broadcast
      )
    );
    setSelectedBroadcasts([]);
  };

  const handleScheduleSelected = () => {
    if (selectedBroadcasts.length === 0) return;
    setBroadcasts(prev =>
      prev.map(broadcast =>
        selectedBroadcasts.includes(broadcast.id)
          ? { ...broadcast, status: 'Scheduled' as const }
          : broadcast
      )
    );
    setSelectedBroadcasts([]);
  };

  const tableColumns: TableColumn<Broadcast>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: broadcast => (
        <div className="font-medium text-gray-900">{broadcast.name}</div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: broadcast => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            broadcast.status === 'Sent'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {broadcast.status}
        </span>
      ),
    },
    {
      key: 'sent',
      label: 'SENT',
      render: broadcast => (
        <span className="text-gray-900">{broadcast.sent}</span>
      ),
    },
    {
      key: 'delivered',
      label: 'DELIVERED',
      render: broadcast => (
        <span className="text-gray-900">{broadcast.delivered}</span>
      ),
    },
    {
      key: 'opened',
      label: 'OPENED',
      render: broadcast => (
        <span className="text-gray-900">{broadcast.opened}</span>
      ),
    },
    {
      key: 'clicked',
      label: 'CLICKED',
      render: broadcast => (
        <span className="text-gray-900">{broadcast.clicked}</span>
      ),
    },
    {
      key: 'unsubscribed',
      label: 'UNSUBSCRIBED',
      render: broadcast => (
        <span className="text-gray-900">{broadcast.unsubscribed}</span>
      ),
    },
    {
      key: 'sendDate',
      label: 'SEND DATE',
      render: broadcast => (
        <span className="text-gray-900">{broadcast.sendDate}</span>
      ),
    },
  ];

  return (
    <ContentContainer
      title="Broadcasts"
      onToggleSidebar={onToggleSidebar}
      actions={
        <Button size="sm" className="flex items-center gap-2">
          New broadcast
        </Button>
      }
    >
      {/* Tabs */}
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        className="mb-6"
      />

      {/* Filters */}
      <EnhancedFilters
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      {/* Actions */}
      <Actions
        selectedCount={selectedBroadcasts.length}
        totalCount={filteredBroadcasts.length}
        onDeleteSelected={handleDeleteSelected}
        selectedData={paginatedBroadcasts.filter(broadcast =>
          selectedBroadcasts.includes(broadcast.id)
        )}
        exportFilename="broadcasts.csv"
        bulkActions={[
          {
            id: 'export',
            label: 'Export selected',
            onClick: () => {
              const selectedData = paginatedBroadcasts.filter(broadcast =>
                selectedBroadcasts.includes(broadcast.id)
              );
              exportToCSV(selectedData, 'broadcasts.csv');
            },
            disabled: selectedBroadcasts.length === 0,
          },
          {
            id: 'send',
            label: 'Send selected',
            onClick: handleSendSelected,
            disabled: selectedBroadcasts.length === 0,
          },
          {
            id: 'draft',
            label: 'Move to draft',
            onClick: handleDraftSelected,
            disabled: selectedBroadcasts.length === 0,
          },
          {
            id: 'schedule',
            label: 'Schedule selected',
            onClick: handleScheduleSelected,
            disabled: selectedBroadcasts.length === 0,
          },
          {
            id: 'delete',
            label: 'Delete selected',
            onClick: handleDeleteSelected,
            disabled: selectedBroadcasts.length === 0,
          },
        ]}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
        <TableEnhanced
          columns={tableColumns}
          data={paginatedBroadcasts}
          selectedItems={selectedBroadcasts}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectBroadcast}
          containerClassName="bg-white"
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={filteredBroadcasts.length}
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

export default Broadcasts;
