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
          Showing{' '}
          <span className="text-black">
            {startIndex + 1} to {Math.min(endIndex, totalItems)}
          </span>{' '}
          of <span className="text-black">{totalItems}</span> results
        </div>
        <div className="flex items-center space-x-2">
          <Button
            onClick={onPreviousPage}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
            className="px-3 py-1 text-sm border-0"
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
                d="M9.48144 4.90913C9.71575 5.14345 9.71575 5.52335 9.48144 5.75766L7.28617 7.95293C7.26015 7.97894 7.26014 8.02117 7.28615 8.04718L9.48144 10.2425C9.71575 10.4768 9.71575 10.8567 9.48144 11.091C9.24712 11.3253 8.86722 11.3253 8.63291 11.091L6.43766 8.89575C6.43765 8.89574 6.43766 8.89575 6.43766 8.89575C5.94299 8.4011 5.94298 7.59905 6.43764 7.1044C6.43764 7.10441 6.43765 7.1044 6.43764 7.1044L8.63291 4.90913C8.86722 4.67482 9.24712 4.67482 9.48144 4.90913Z"
                fill="#191B1F"
              />
            </svg>

            <span>Previous</span>
          </Button>
          {/* <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span> */}
          <Button
            onClick={onNextPage}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
            className="px-3 py-1 text-sm border-0 bg-[#F7F9FA]"
          >
            <span>Next</span>
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
                d="M6.51856 4.90913C6.28425 5.14345 6.28425 5.52335 6.51856 5.75766L8.71383 7.95293C8.73985 7.97894 8.73986 8.02117 8.71385 8.04718L6.51856 10.2425C6.28425 10.4768 6.28425 10.8567 6.51856 11.091C6.75288 11.3253 7.13278 11.3253 7.36709 11.091L9.56234 8.89575C9.56235 8.89574 9.56234 8.89575 9.56234 8.89575C10.057 8.4011 10.057 7.59905 9.56234 7.1044C9.56234 7.10441 9.56235 7.1044 9.56234 7.1044L7.36709 4.90913C7.13278 4.67482 6.75288 4.67482 6.51856 4.90913Z"
                fill="#191B1F"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
