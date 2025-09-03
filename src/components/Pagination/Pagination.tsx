import React from 'react';

interface PaginationProps {
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
    <div className={`flex-shrink-0 ${className} px-5 py-4`}>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{' '}
          {totalItems} results
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            className="px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
