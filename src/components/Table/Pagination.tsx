import React from 'react';

export interface PaginationProps {
  startIndex: number;
  endIndex: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;
  onPreviousPage: () => void;
  onNextPage: () => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  startIndex,
  endIndex,
  totalItems,
  currentPage,
  totalPages,
  onPreviousPage,
  onNextPage,
  className = '',
}) => {
  return (
    <div className={`px-6 py-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{' '}
          {totalItems}
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            className="px-3 py-2 text-sm text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          <button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-2 text-sm text-white bg-gray-900 rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
