import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';
import FilterModal, { FilterOption, FilterCondition } from './filter-modal';
import FilterChip from './filter-chip';

interface EnhancedFiltersProps {
  filters: FilterOption[];
  activeFilters: FilterCondition[];
  onFilterChange: (filters: FilterCondition[]) => void;
  className?: string;
}

const EnhancedFilters: React.FC<EnhancedFiltersProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  className,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterOption | null>(
    null
  );

  const handleFilterClick = (filter: FilterOption) => {
    setSelectedFilter(filter);
    setIsModalOpen(true);
    
  };
  const handleApplyFilter = (condition: FilterCondition) => {
    // Remove existing filter for the same field
    const filtered = activeFilters.filter(f => f.field !== condition.field);
    // Add new filter
    onFilterChange([...filtered, condition]);
  };

  const handleRemoveFilter = (field: string) => {
    onFilterChange(activeFilters.filter(f => f.field !== field));
  };

  const handleEditFilter = (condition: FilterCondition) => {
    const filter = filters.find(f => f.id === condition.field);
    if (filter) {
      setSelectedFilter(filter);
      setIsModalOpen(true);
    }
  };

  return (
    <div className={cn('px-5 py-3 border-b border-gray-200', className)}>
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter)}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-900 border border-gray-200 hover:bg-gray-100 rounded-xl transition-colors shadow-sm"
          >
            <Plus size={16} className="text-black" />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Active Filter Chips */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters.map(condition => (
            <FilterChip
              key={condition.field}
              condition={condition}
              onRemove={() => handleRemoveFilter(condition.field)}
              onEdit={() => handleEditFilter(condition)}
            />
          ))}
        </div>
      )}

      {/* Filter Modal */}
      {selectedFilter && (
        <FilterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          filter={selectedFilter}
          onApply={handleApplyFilter}
        />
      )}
    </div>
  );
};

export default EnhancedFilters;
