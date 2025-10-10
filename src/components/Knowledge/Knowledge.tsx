import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterOption, FilterCondition } from '../ui/filter-modal';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';

interface KnowledgeItem {
  id: string;
  name: string;
  type: string;
  spaceGroup: string;
  itemsIncluded: number;
  usedInReplies: number;
}

interface KnowledgeProps {
  onToggleSidebar: () => void;
}

const Knowledge: React.FC<KnowledgeProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('community');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  const knowledgeData: KnowledgeItem[] = [
    {
      id: '1',
      name: 'Post space',
      type: 'Post',
      spaceGroup: 'Karthik-Menon',
      itemsIncluded: 2,
      usedInReplies: 0,
    },
    {
      id: '2',
      name: 'new locked',
      type: 'Course',
      spaceGroup: 'Ivo test',
      itemsIncluded: 13,
      usedInReplies: 0,
    },
    {
      id: '3',
      name: "Ivo's course test",
      type: 'Course',
      spaceGroup: 'Ivo test',
      itemsIncluded: 0,
      usedInReplies: 0,
    },
    {
      id: '4',
      name: 'Marketing Strategies',
      type: 'Post',
      spaceGroup: 'Marketing Team',
      itemsIncluded: 5,
      usedInReplies: 0,
    },
    {
      id: '5',
      name: 'Product Updates',
      type: 'Post',
      spaceGroup: 'Product Team',
      itemsIncluded: 3,
      usedInReplies: 0,
    },
  ];

  const columns: TableColumn<KnowledgeItem>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (item: KnowledgeItem) => (
        <span className="font-medium text-gray-900">{item.name}</span>
      ),
    },
    {
      key: 'type',
      label: 'TYPE',
      render: (item: KnowledgeItem) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {item.type}
        </span>
      ),
    },
    {
      key: 'spaceGroup',
      label: 'SPACE GROUP',
      render: (item: KnowledgeItem) => (
        <span className="text-gray-900">{item.spaceGroup}</span>
      ),
    },
    {
      key: 'itemsIncluded',
      label: 'ITEMS INCLUDED',
      render: (item: KnowledgeItem) => (
        <span className="text-gray-900">{item.itemsIncluded}</span>
      ),
    },
    {
      key: 'usedInReplies',
      label: 'USED IN REPLIES',
      render: (item: KnowledgeItem) => (
        <span className="text-gray-900">{item.usedInReplies}</span>
      ),
    },
  ];

  const tabs: Tab[] = [
    { id: 'community', label: 'Community', count: knowledgeData.length },
    { id: 'custom', label: 'Custom', count: 0 },
  ];

  const filterOptions: FilterOption[] = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'type', label: 'Type', type: 'text' },
    { id: 'spaceGroup', label: 'Space Group', type: 'text' },
    { id: 'itemsIncluded', label: 'Items Included', type: 'text' },
    { id: 'usedInReplies', label: 'Used in Replies', type: 'text' },
  ];

  const totalItems = knowledgeData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = knowledgeData.slice(startIndex, endIndex);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
    setSelectedItems([]);
  };

  const handleSelectAll = () => {
    if (selectedItems.length === currentData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentData.map(item => item.id));
    }
  };

  const handleSelectItem = (itemId: string) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(id => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <ContentContainer
      title="Knowledge"
      onToggleSidebar={onToggleSidebar}
      actions={
        <div className="flex items-center space-x-3">
          <Button variant="default">Add space</Button>
        </div>
      }
    >
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Filters */}
      <EnhancedFilters
        filters={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      {/* Actions */}
      <Actions
        selectedCount={selectedItems.length}
        totalCount={currentData.length}
        onDeleteSelected={() => {
          // Handle delete selected
          setSelectedItems([]);
        }}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-200">
        <Table
          columns={columns}
          data={currentData}
          selectedItems={selectedItems}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={totalItems}
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </ContentContainer>
  );
};

export default Knowledge;
