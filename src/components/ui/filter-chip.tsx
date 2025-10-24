import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { FilterCondition } from './filter-modal';

interface FilterChipProps {
  condition: FilterCondition;
  onRemove: () => void;
  onEdit?: () => void;
  className?: string;
}

const FilterChip: React.FC<FilterChipProps> = ({
  condition,
  onRemove,
  onEdit,
  className,
}) => {
  const getDisplayValue = () => {
    if (
      condition.operator === 'is' &&
      (condition.value === 'yes' || condition.value === 'no')
    ) {
      return condition.value === 'yes' ? 'Yes' : 'No';
    }
    return (
      <span className="flex items-center">
        <span className=" text-gray-500 pl-1">{condition.operator}</span>{' '}
        <span className="w-px h-[24px] bg-gray-200 mx-2" />{' '}
        <span className="text-gray-900 font-medium pr-1">
          {condition.value}
        </span>
      </span>
    );
  };

  return (
    <div
      className={cn(
        'inline-flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 text-xs transition-colors border border-gray-200 shadow-2xs',
        className
      )}
      onClick={e => {
        // Allow clicking chip (not the X) to trigger edit when provided
        if ((e.target as HTMLElement).closest('button')) return;
        onEdit?.();
      }}
    >
      {/* Field name */}
      <span className="text-gray-900 font-medium capitalize">
        {condition.field.replace(/([A-Z])/g, ' $1').trim()}
      </span>

      {/* Separator */}
      <div className="w-px bg-gray-300 mr-2" />

      {/* Value */}
      <span className="text-gray-900 font-medium border-x border-gray-200 px-1">
        {getDisplayValue()}
      </span>

      {/* Remove button on the right */}
      <button
        onClick={onRemove}
        className="text-gray-600 hover:text-gray-800 ml-2 transition-colors"
        aria-label="Remove filter"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default FilterChip;
