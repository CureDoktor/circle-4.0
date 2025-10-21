import React from 'react';
import { Button } from './button';
import BulkActionsDropdown from './bulk-actions-dropdown';
import { cn } from '../../lib/utils';
import { exportToCSV } from '../../utils/csvExport';

interface BulkAction {
  id: string;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

interface ActionsProps {
  selectedCount: number;
  totalCount: number;
  onDeleteSelected?: () => void;
  bulkActions?: BulkAction[];
  className?: string;
  selectedData?: any[];
  exportFilename?: string;
}

const Actions: React.FC<ActionsProps> = ({
  selectedCount,
  totalCount,
  onDeleteSelected,
  bulkActions = [],
  className = '',
  selectedData = [],
  exportFilename = 'export.csv',
}) => {
  const handleExportSelected = () => {
    if (selectedData.length > 0) {
      exportToCSV(selectedData, exportFilename);
    } else {
      console.warn('No data selected for export');
    }
  };

  const defaultBulkActions: BulkAction[] = [
    {
      id: 'export',
      label: 'Export selected',
      onClick: handleExportSelected,
      disabled: selectedCount === 0,
    },
    {
      id: 'move',
      label: 'Move to space',
      onClick: () => console.log('Move to space'),
    },
    {
      id: 'archive',
      label: 'Archive selected',
      onClick: () => console.log('Archive selected'),
    },
    {
      id: 'delete',
      label: 'Delete selected',
      onClick: onDeleteSelected || (() => console.log('Delete selected')),
      disabled: selectedCount === 0,
    },
  ];

  // Always include delete action if onDeleteSelected is provided
  const actions =
    bulkActions.length > 0
      ? bulkActions.concat(
          onDeleteSelected
            ? [
                {
                  id: 'delete',
                  label: 'Delete selected',
                  onClick: onDeleteSelected,
                  disabled: selectedCount === 0,
                },
              ]
            : []
        )
      : defaultBulkActions;

  return (
    <div
      className={cn(
        'flex-shrink-0 flex justify-between items-center px-5 py-4',
        className
      )}
    >
      <div className="flex items-center space-x-4 ">
        {selectedCount > 0 ? (
          <>
            <span className="text-sm text-gray-600">
              {selectedCount} of {totalCount} selected
            </span>
            {onDeleteSelected && (
              <Button
                onClick={onDeleteSelected}
                variant="ghost"
                size="sm"
                className="text-sm text-red-600 hover:text-red-700 p-0 h-auto"
              >
                Delete selected
              </Button>
            )}
          </>
        ) : (
          <span className="text-sm text-gray-600">{totalCount} total</span>
        )}
      </div>
      <BulkActionsDropdown actions={actions} />
    </div>
  );
};

export default Actions;
