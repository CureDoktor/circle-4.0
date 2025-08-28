import React from 'react';
import { X, ChevronDown } from 'lucide-react';
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
    return `${condition.operator} ${condition.value}`;
  };

  return (
    <div
      className={cn(
        'inline-flex items-center bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 text-sm transition-colors',
        className
      )}
    >
      {/* Remove button */}
      <button
        onClick={onRemove}
        className="text-gray-600 hover:text-gray-800 mr-2 transition-colors"
      >
        <X size={14} />
      </button>

      {/* Field name */}
      <span className="text-gray-700 font-medium capitalize">
        {condition.field.replace(/([A-Z])/g, ' $1').trim()}
      </span>

      {/* Separator */}
      <div className="w-px h-4 bg-gray-300 mx-2" />

      {/* Value */}
      <span className="text-gray-900 font-medium">{getDisplayValue()}</span>

      {/* Edit button */}
      {onEdit && (
        <button
          onClick={onEdit}
          className="text-gray-600 hover:text-gray-800 ml-2 transition-colors"
        >
          <ChevronDown size={14} />
        </button>
      )}
    </div>
  );
};

export default FilterChip;
