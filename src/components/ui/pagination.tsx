import React from 'react';
import { Button } from './button';
import { cn } from '../../lib/utils';

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
    <div className={cn('flex-shrink-0 px-5 py-4', className)}>
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-600">
          Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{' '}
          {totalItems} results
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
            className="px-3 py-1 text-sm"
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
            className="px-3 py-1 text-sm"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
