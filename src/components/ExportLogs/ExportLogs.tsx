import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Pagination from '../ui/pagination';

interface ExportLog {
  id: string;
  type: string;
  status: 'completed' | 'processing' | 'failed';
  progress: number;
  results: string;
  performed: string;
}

interface ExportLogsProps {
  onToggleSidebar: () => void;
}

const ExportLogs: React.FC<ExportLogsProps> = ({ onToggleSidebar }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const exportLogsData: ExportLog[] = [
    {
      id: '1',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 1,
      results: 'Output file.csv',
      performed: '4 months ago',
    },
    {
      id: '2',
      type: 'Transactions CSV export',
      status: 'completed',
      progress: 479,
      results: 'Output file.csv',
      performed: '8 months ago',
    },
    {
      id: '3',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 992,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '4',
      type: 'Transactions CSV export',
      status: 'completed',
      progress: 382,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '5',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 14,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '6',
      type: 'Transactions CSV export',
      status: 'completed',
      progress: 349,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '7',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 649,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '8',
      type: 'Transactions CSV export',
      status: 'completed',
      progress: 334,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '9',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 635,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '10',
      type: 'Transactions CSV export',
      status: 'completed',
      progress: 632,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '11',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 123,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '12',
      type: 'Transactions CSV export',
      status: 'completed',
      progress: 456,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '13',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 789,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '14',
      type: 'Transactions CSV export',
      status: 'completed',
      progress: 234,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '15',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 567,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '16',
      type: 'Transactions CSV export',
      status: 'completed',
      progress: 890,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
    {
      id: '17',
      type: 'Subscriptions CSV export',
      status: 'completed',
      progress: 321,
      results: 'Output file.csv',
      performed: '1 year ago',
    },
  ];

  const columns: TableColumn<ExportLog>[] = [
    {
      key: 'type',
      label: 'TYPE',
      render: (item: ExportLog) => (
        <span className="font-medium text-gray-900">{item.type}</span>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item: ExportLog) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            item.status === 'completed'
              ? 'bg-green-100 text-green-800'
              : item.status === 'processing'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
      ),
    },
    {
      key: 'progress',
      label: 'PROGRESS',
      render: (item: ExportLog) => (
        <span className="text-gray-900">{item.progress}</span>
      ),
    },
    {
      key: 'results',
      label: 'RESULTS',
      render: (item: ExportLog) => (
        <a href="#" className="text-blue-600 hover:text-blue-800 underline">
          {item.results}
        </a>
      ),
    },
    {
      key: 'performed',
      label: 'PERFORMED',
      render: (item: ExportLog) => (
        <span className="text-gray-900">{item.performed}</span>
      ),
    },
  ];

  const totalItems = exportLogsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = exportLogsData.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedItems.length === currentData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentData.map(item => item.id));
    }
  };

  const handleSelectItem = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <ContentContainer title="Export logs" onToggleSidebar={onToggleSidebar}>
      {/* Count */}
      <div className="px-6 py-2">
        <p className="text-sm text-gray-600">{totalItems} export logs</p>
      </div>

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
        <Table
          columns={columns}
          data={currentData}
          selectedItems={selectedItems}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={totalItems}
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </ContentContainer>
  );
};

export default ExportLogs;
