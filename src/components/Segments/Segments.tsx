import React, { useState } from 'react';
import { mockSegments, Segment } from '../../data/mockData';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';

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
      setSelectedSegments(
        paginatedSegments.map((segment: Segment) => segment.id)
      );
    }
  };

  const handleSelectItem = (segmentId: string) => {
    setSelectedSegments(prev =>
      prev.includes(segmentId)
        ? prev.filter(id => id !== segmentId)
        : [...prev, segmentId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected segments');
    setSelectedSegments([]);
  };

  // Define table columns
  const tableColumns: TableColumn<Segment>[] = [
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
                .map((n: string) => n[0])
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
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Segments"
      actions={<Button variant="default">New segment</Button>}
    >
      {/* Actions */}
      <Actions
        selectedCount={selectedSegments.length}
        totalCount={paginatedSegments.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0">
        <Table
          columns={tableColumns}
          data={paginatedSegments}
          selectedItems={selectedSegments}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
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
    </ContentContainer>
  );
};

export default Segments;
