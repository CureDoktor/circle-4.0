import React, { useState } from 'react';
import { mockSegments, Segment } from '../../data/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';

interface SegmentsProps {
  onToggleSidebar: () => void;
}

const Segments: React.FC<SegmentsProps> = ({ onToggleSidebar }) => {
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(mockSegments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSegments = mockSegments.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedSegments.length === paginatedSegments.length) {
      setSelectedSegments([]);
    } else {
      setSelectedSegments(paginatedSegments.map(segment => segment.id));
    }
  };

  const handleSelectSegment = (segmentId: string) => {
    setSelectedSegments(prev =>
      prev.includes(segmentId)
        ? prev.filter(id => id !== segmentId)
        : [...prev, segmentId]
    );
  };

  // Define table columns
  const columns: TableColumn<Segment>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (segment: Segment) => (
        <div className="text-sm font-medium text-gray-900">{segment.name}</div>
      ),
    },
    {
      key: 'people',
      label: 'PEOPLE',
      render: (segment: Segment) => (
        <div className="text-sm text-gray-900 text-right">
          {segment.people.toLocaleString()}
        </div>
      ),
      className: 'text-right',
    },
    {
      key: 'createdBy',
      label: 'CREATED BY',
      render: (segment: Segment) => (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xs text-gray-600">
              {segment.createdBy.name
                .split(' ')
                .map(n => n[0])
                .join('')}
            </span>
          </div>
          <span className="text-sm text-gray-900">
            {segment.createdBy.name}
          </span>
        </div>
      ),
    },
    {
      key: 'lastUpdated',
      label: 'LAST UPDATED',
      render: (segment: Segment) => (
        <span className="text-sm text-gray-500">{segment.lastUpdated}</span>
      ),
    },
  ];

  return (
    <div className="bg-white h-full rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            {/* Collapse Sidebar Button */}
            <button
              onClick={onToggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg border-2 border-gray-100 transition-colors"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.90909 3.2C3.51747 3.2 3.2 3.51747 3.2 3.90909V12.0909C3.2 12.4825 3.51746 12.8 3.90909 12.8H5.8L5.8 3.2L3.90909 3.2ZM2 3.90909C2 2.85473 2.85473 2 3.90909 2H12.0909C13.1453 2 14 2.85473 14 3.90909V12.0909C14 13.1453 13.1453 14 12.0909 14H3.90909C2.85473 14 2 13.1453 2 12.0909V3.90909ZM12.0909 3.2L7 3.2L7 12.8H12.0909C12.4825 12.8 12.8 12.4825 12.8 12.0909V3.90909C12.8 3.51746 12.4825 3.2 12.0909 3.2Z"
                  fill="#191B1F"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Segments</h1>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition-colors w-full sm:w-auto text-sm font-medium">
            <span>New segment</span>
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="px-6 mb-6">
        <div className="text-sm font-medium text-gray-900">
          {mockSegments.length} segments
        </div>
      </div>

      {/* Table */}
      <div className="mx-6">
        <Table<Segment>
          columns={columns}
          data={paginatedSegments}
          selectedItems={selectedSegments}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectSegment}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockSegments.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        onNextPage={() =>
          setCurrentPage(prev => Math.min(prev + 1, totalPages))
        }
      />
    </div>
  );
};

export default Segments;
