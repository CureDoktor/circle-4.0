import React from 'react';

interface Filter {
  id: string;
  label: string;
}

interface FiltersProps {
  filters: Filter[];
}

const Filters: React.FC<FiltersProps> = ({ filters }) => {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-2">
        {filters.map(filter => (
          <button
            key={filter.id}
            className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <span>+</span>
            <span>{filter.label}</span>
          </button>
        ))}
        <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
          <span>+</span>
          <span>Add filter</span>
        </button>
      </div>
    </div>
  );
};

export default Filters;
