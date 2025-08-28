import React from 'react';
import { Button } from './button';
import BulkActionsDropdown from './bulk-actions-dropdown';
import { cn } from '../../lib/utils';

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
}

const Actions: React.FC<ActionsProps> = ({
  selectedCount,
  totalCount,
  onDeleteSelected,
  bulkActions = [],
  className = '',
}) => {
  const defaultBulkActions: BulkAction[] = [
    {
      id: 'export',
      label: 'Export selected',
      onClick: () => console.log('Export selected'),
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

  const actions = bulkActions.length > 0 ? bulkActions : defaultBulkActions;

  return (
    <div
      className={cn(
        'flex-shrink-0 flex justify-between items-center',
        className
      )}
    >
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">
          {selectedCount} of {totalCount} selected
        </span>
        {selectedCount > 0 && onDeleteSelected && (
          <Button
            onClick={onDeleteSelected}
            variant="ghost"
            size="sm"
            className="text-sm text-red-600 hover:text-red-700 p-0 h-auto"
          >
            Delete selected
          </Button>
        )}
      </div>
      <BulkActionsDropdown actions={actions} />
    </div>
  );
};

export default Actions;
