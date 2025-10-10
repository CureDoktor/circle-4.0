import React, { useState } from 'react';
import { mockTags, Tag } from '../../data/mockData';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';

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
      setSelectedTags(paginatedTags.map((tag: Tag) => tag.id));
    }
  };

  const handleSelectItem = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(id => id !== tagId) : [...prev, tagId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected tags');
    setSelectedTags([]);
  };

  // Define table columns
  const tableColumns: TableColumn<Tag>[] = [
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
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Tags"
      actions={<Button variant="default">New tag</Button>}
    >
      {/* Actions */}
      <Actions
        selectedCount={selectedTags.length}
        totalCount={paginatedTags.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-200">
        <Table
          columns={tableColumns}
          data={paginatedTags}
          selectedItems={selectedTags}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
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
    </ContentContainer>
  );
};

export default Tags;
