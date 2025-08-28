import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface FilterOption {
  id: string;
  label: string;
  type: 'text' | 'boolean' | 'select';
  options?: string[];
}

export interface FilterCondition {
  field: string;
  operator: string;
  value: string;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filter: FilterOption;
  onApply: (condition: FilterCondition) => void;
  className?: string;
}

const FilterModal: React.FC<FilterModalProps> = ({
  isOpen,
  onClose,
  filter,
  onApply,
  className,
}) => {
  const [operator, setOperator] = useState<string>('contains');
  const [value, setValue] = useState<string>('');

  const textOperators = [
    { value: 'contains', label: 'contains' },
    { value: 'does not contain', label: 'does not contain' },
    { value: 'is', label: 'is' },
    { value: 'is not', label: 'is not' },
  ];

  const booleanOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
  ];

  const handleApply = () => {
    if (filter.type === 'boolean') {
      onApply({
        field: filter.id,
        operator: 'is',
        value: operator,
      });
    } else {
      onApply({
        field: filter.id,
        operator,
        value,
      });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />
      <div
        className={cn(
          'relative bg-white rounded-lg shadow-lg p-6 w-80 max-w-sm',
          className
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">{filter.label}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Filter Options */}
        <div className="space-y-4">
          {filter.type === 'boolean' ? (
            // Boolean filter (Yes/No)
            <div className="space-y-3">
              {booleanOptions.map(option => (
                <label
                  key={option.value}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="boolean-option"
                    value={option.value}
                    checked={operator === option.value}
                    onChange={e => setOperator(e.target.value)}
                    className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-500"
                  />
                  <span className="text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          ) : (
            // Text filter
            <div className="space-y-3">
              {textOperators.map(op => (
                <label
                  key={op.value}
                  className="flex items-center space-x-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="text-operator"
                    value={op.value}
                    checked={operator === op.value}
                    onChange={e => setOperator(e.target.value)}
                    className="w-4 h-4 text-gray-900 border-gray-300 focus:ring-gray-500"
                  />
                  <span className="text-sm text-gray-700">{op.label}</span>
                </label>
              ))}

              {/* Value input */}
              <div className="mt-3">
                <Input
                  placeholder="eg. Designer"
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Apply Button */}
        <div className="mt-6">
          <Button
            onClick={handleApply}
            className="w-full bg-[#1A1D24] hover:bg-[#1A1D24]/90 text-white"
          >
            {filter.type === 'boolean' ? 'Apply' : 'Done'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
