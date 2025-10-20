import React, { useState } from 'react';
import { mockActivityLogs, ActivityLog } from '../../data/mockData';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';

interface ActivityLogsProps {
  onToggleSidebar: () => void;
}

const ActivityLogs: React.FC<ActivityLogsProps> = ({ onToggleSidebar }) => {
  const [selectedLogs, setSelectedLogs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(mockActivityLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLogs = mockActivityLogs.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedLogs.length === paginatedLogs.length) {
      setSelectedLogs([]);
    } else {
      setSelectedLogs(paginatedLogs.map((log: ActivityLog) => log.id));
    }
  };

  const handleSelectItem = (logId: string) => {
    setSelectedLogs(prev =>
      prev.includes(logId) ? prev.filter(id => id !== logId) : [...prev, logId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected logs');
    setSelectedLogs([]);
  };

  // Define table columns
  const tableColumns: TableColumn<ActivityLog>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (log: ActivityLog) => (
        <div className="flex items-center space-x-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
            style={{ backgroundColor: log.nameColor }}
          >
            {log.nameInitials}
          </div>
          <span className="text-sm font-medium text-gray-900">{log.name}</span>
        </div>
      ),
    },
    {
      key: 'event',
      label: 'EVENT',
      render: (log: ActivityLog) => (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-900">{log.event}</span>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
    },
    {
      key: 'entityType',
      label: 'ENTITY TYPE',
      render: (log: ActivityLog) => (
        <span className="text-sm text-gray-900">{log.entityType}</span>
      ),
    },
    {
      key: 'entityValue',
      label: 'ENTITY VALUE',
      render: (log: ActivityLog) => (
        <span className="text-sm text-gray-600">{log.entityValue}</span>
      ),
    },
    {
      key: 'date',
      label: 'DATE',
      render: (log: ActivityLog) => (
        <span className="text-sm text-gray-600">{log.date}</span>
      ),
    },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Activity logs"
      actions={<Button variant="default">Export logs</Button>}
    >
      {/* Actions */}
      <Actions
        selectedCount={selectedLogs.length}
        totalCount={paginatedLogs.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
        <Table
          columns={tableColumns}
          data={paginatedLogs}
          selectedItems={selectedLogs}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockActivityLogs.length}
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

export default ActivityLogs;
