import React, { useState } from 'react';
import { mockTags, Tag } from '../../data/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';

interface TagsProps {
  onToggleSidebar: () => void;
}

const Tags: React.FC<TagsProps> = ({ onToggleSidebar }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(mockTags.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedTags = mockTags.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedTags.length === paginatedTags.length) {
      setSelectedTags([]);
    } else {
      setSelectedTags(paginatedTags.map(tag => tag.id));
    }
  };

  const handleSelectTag = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(id => id !== tagId) : [...prev, tagId]
    );
  };

  // Define table columns
  const columns: TableColumn<Tag>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (tag: Tag) => (
        <div className="text-sm font-medium text-gray-900">{tag.name}</div>
      ),
    },
    {
      key: 'icon',
      label: 'ICON',
      render: (tag: Tag) => (
        <div className="text-sm text-gray-900">{tag.icon ? tag.icon : '—'}</div>
      ),
    },
    {
      key: 'backgroundEnabled',
      label: 'BACKGROUND ENABLED',
      render: (tag: Tag) => (
        <span className="text-sm text-gray-900">
          {tag.backgroundEnabled ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'color',
      label: 'COLOR',
      render: (tag: Tag) => (
        <div className="flex items-center space-x-2">
          {tag.color ? (
            <div
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: tag.color }}
            />
          ) : (
            <span className="text-sm text-gray-900">—</span>
          )}
        </div>
      ),
    },
    {
      key: 'isPublic',
      label: 'PUBLIC',
      render: (tag: Tag) => (
        <span className="text-sm text-gray-900">
          {tag.isPublic ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'displayFormat',
      label: 'DISPLAY FORMAT',
      render: (tag: Tag) => (
        <span className="text-sm text-gray-900">{tag.displayFormat}</span>
      ),
    },
    {
      key: 'peopleCount',
      label: 'PEOPLE COUNT',
      render: (tag: Tag) => (
        <span className="text-sm text-gray-900">{tag.peopleCount}</span>
      ),
    },
  ];

  return (
    <div className="bg-white h-full rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3">
            {/* Collapse Sidebar Button */}
            <button
              onClick={onToggleSidebar}
              className="p-2 hover:bg-gray-100 rounded-lg border-2 border-gray-100 transition-colors"
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
                  d="M3.90909 3.2C3.51747 3.2 3.2 3.51747 3.2 3.90909V12.0909C3.2 12.4825 3.51746 12.8 3.90909 12.8H5.8L5.8 3.2L3.90909 3.2ZM2 3.90909C2 2.85473 2.85473 2 3.90909 2H12.0909C13.1453 2 14 2.85473 14 3.90909V12.0909C14 13.1453 13.1453 14 12.0909 14H3.90909C2.85473 14 2 13.1453 2 12.0909V3.90909ZM12.0909 3.2L7 3.2L7 12.8H12.0909C12.4825 12.8 12.8 12.4825 12.8 12.0909V3.90909C12.8 3.51746 12.4825 3.2 12.0909 3.2Z"
                  fill="#191B1F"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold text-gray-900">Tags</h1>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition-colors w-full sm:w-auto text-sm font-medium">
            <span>New tag</span>
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="px-6 mb-6">
        <div className="text-sm font-medium text-gray-900">
          {mockTags.length} tags
        </div>
      </div>

      {/* Table */}
      <div className="mx-6">
        <Table<Tag>
          columns={columns}
          data={paginatedTags}
          selectedItems={selectedTags}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectTag}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockTags.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        onNextPage={() =>
          setCurrentPage(prev => Math.min(prev + 1, totalPages))
        }
      />
    </div>
  );
};

export default Tags;
