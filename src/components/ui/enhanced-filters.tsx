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
  const [isPickerOpen, setIsPickerOpen] = useState(false);

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
    <div className={cn('px-5 py-3 border-b border-gray-100', className)}>
      {/* Inline filter buttons that become chips when active */}
      <div className="flex flex-wrap items-center gap-2">
        {filters.map(filter => {
          const active = activeFilters.find(f => f.field === filter.id);
          if (active) {
            return (
              <FilterChip
                key={filter.id}
                condition={active}
                onRemove={() => handleRemoveFilter(filter.id)}
                onEdit={() => handleEditFilter(active)}
              />
            );
          }
          return (
            <button
              key={filter.id}
              onClick={() => handleFilterClick(filter)}
              className="inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-900 border border-gray-200 hover:bg-gray-100 rounded-md transition-colors shadow-2xs"
            >
              <Plus size={10} className="text-black" />
              <span>{filter.label}</span>
            </button>
          );
        })}

        {/* Add filter button (opens simple picker modal) */}
        <button
          onClick={() => setIsPickerOpen(true)}
          className="inline-flex items-center gap-1 px-2 py-1 text-xs text-gray-900 border border-gray-200 hover:bg-gray-100 rounded-md transition-colors shadow-2xs"
        >
          {/* Custom icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-500"
          >
            <path
              d="M1.83398 3.16602H14.1673M5.83398 12.8327H10.1673M3.83398 7.99935H12.1673"
              stroke="#717680"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
          </svg>
          <span>Add filter</span>
        </button>

        {activeFilters.length > 0 && (
          <button
            onClick={() => onFilterChange([])}
            className="text-xs text-gray-700 hover:text-gray-900 px-2 py-1"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Simple picker modal */}
      {isPickerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsPickerOpen(false)}
          />
          <div className="relative bg-white rounded-lg shadow-lg p-4 w-64">
            <div className="text-sm font-medium mb-2">Add filter</div>
            <div className="max-h-64 overflow-auto divide-y divide-gray-100">
              {filters.map(f => (
                <button
                  key={f.id}
                  onClick={() => {
                    handleFilterClick(f);
                    setIsPickerOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 text-sm hover:bg-gray-50"
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Filter Modal */}
      {selectedFilter && (
        <FilterModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          filter={selectedFilter as FilterOption}
          onApply={handleApplyFilter}
        />
      )}
    </div>
  );
};

export default EnhancedFilters;
