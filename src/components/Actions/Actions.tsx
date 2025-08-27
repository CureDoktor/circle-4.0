import React from 'react';

interface ActionsProps {
  selectedCount: number;
  totalCount: number;
  onDeleteSelected?: () => void;
  onBulkActions?: () => void;
  className?: string;
}

const Actions: React.FC<ActionsProps> = ({
  selectedCount,
  totalCount,
  onDeleteSelected,
  onBulkActions,
  className = '',
}) => {
  return (
    <div
      className={`flex-shrink-0 flex justify-between items-center ${className}`}
    >
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">
          {selectedCount} of {totalCount} selected
        </span>
        {selectedCount > 0 && onDeleteSelected && (
          <button
            onClick={onDeleteSelected}
            className="text-sm text-red-600 hover:text-red-700"
          >
            Delete selected
          </button>
        )}
      </div>
      <button
        onClick={onBulkActions}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
      >
        Bulk actions
      </button>
    </div>
  );
};

export default Actions;
