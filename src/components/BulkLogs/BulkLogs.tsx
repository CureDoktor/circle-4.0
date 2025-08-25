import React, { useState } from 'react';
import { mockBulkLogs, BulkLog } from '../../data/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';

interface BulkLogsProps {
  onToggleSidebar: () => void;
}

const BulkLogs: React.FC<BulkLogsProps> = ({ onToggleSidebar }) => {
  const [selectedLogs, setSelectedLogs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(mockBulkLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLogs = mockBulkLogs.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedLogs.length === paginatedLogs.length) {
      setSelectedLogs([]);
    } else {
      setSelectedLogs(paginatedLogs.map(log => log.id));
    }
  };

  const handleSelectLog = (logId: string) => {
    setSelectedLogs(prev =>
      prev.includes(logId) ? prev.filter(id => id !== logId) : [...prev, logId]
    );
  };

  // Define table columns
  const columns: TableColumn<BulkLog>[] = [
    {
      key: 'type',
      label: 'TYPE',
      render: (log: BulkLog) => (
        <div className="text-sm font-medium text-gray-900">{log.type}</div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (log: BulkLog) => (
        <span
          className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
            log.status === 'Completed'
              ? 'bg-green-100 text-green-800'
              : log.status === 'Failed'
              ? 'bg-red-100 text-red-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {log.status}
        </span>
      ),
    },
    {
      key: 'progress',
      label: 'PROGRESS',
      render: (log: BulkLog) => (
        <span className="text-sm text-gray-900">{log.progress}</span>
      ),
    },
    {
      key: 'results',
      label: 'RESULTS',
      render: (log: BulkLog) => (
        <div className="space-y-1">
          <a
            href="#"
            className="block text-sm text-green-600 hover:text-green-800 transition-colors"
          >
            {log.results.inputFile}
          </a>
          <a
            href="#"
            className="block text-sm text-green-600 hover:text-green-800 transition-colors"
          >
            {log.results.outputFile}
          </a>
        </div>
      ),
    },
    {
      key: 'message',
      label: 'MESSAGE',
      render: (log: BulkLog) => (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-900">{log.message}</span>
          {log.message.includes('existing members') && (
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
          )}
        </div>
      ),
    },
    {
      key: 'performed',
      label: 'PERFORMED',
      render: (log: BulkLog) => (
        <span className="text-sm text-gray-500">{log.performed}</span>
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
            <h1 className="text-2xl font-bold text-gray-900">Bulk Logs</h1>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="px-6 mb-6">
        <div className="text-sm font-medium text-gray-900">
          {mockBulkLogs.length} bulk logs
        </div>
      </div>

      {/* Table */}
      <div className="mx-6">
        <Table<BulkLog>
          columns={columns}
          data={paginatedLogs}
          selectedItems={selectedLogs}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectLog}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockBulkLogs.length}
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

export default BulkLogs;
