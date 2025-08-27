import React, { useState } from 'react';
import { Table, TableColumn } from '../Table';
import ContentContainer from '../ContentContainer';
import Actions from '../Actions';
import Pagination from '../Pagination';
import Button from '../Button';

interface Topic {
  id: string;
  name: string;
  createdBy: {
    name: string;
    initials: string;
    color: string;
  };
  spaces: number;
  adminOnly: boolean;
  createdAt: string;
}

interface TopicsProps {
  onToggleSidebar: () => void;
}

const Topics: React.FC<TopicsProps> = ({ onToggleSidebar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  // Mock data for topics
  const mockTopics: Topic[] = [
    {
      id: '1',
      name: 'Getting Started',
      createdBy: {
        name: 'John Doe',
        initials: 'JD',
        color: 'bg-blue-500',
      },
      spaces: 5,
      adminOnly: false,
      createdAt: 'Jan 15, 2024',
    },
    {
      id: '2',
      name: 'Best Practices',
      createdBy: {
        name: 'Jane Smith',
        initials: 'JS',
        color: 'bg-green-500',
      },
      spaces: 8,
      adminOnly: false,
      createdAt: 'Feb 3, 2024',
    },
    {
      id: '3',
      name: 'Announcements',
      createdBy: {
        name: 'Mike Johnson',
        initials: 'MJ',
        color: 'bg-purple-500',
      },
      spaces: 3,
      adminOnly: true,
      createdAt: 'Mar 10, 2024',
    },
    {
      id: '4',
      name: 'Help & Support',
      createdBy: {
        name: 'Sarah Wilson',
        initials: 'SW',
        color: 'bg-orange-500',
      },
      spaces: 12,
      adminOnly: false,
      createdAt: 'Apr 5, 2024',
    },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(mockTopics.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = mockTopics.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedTopics.length === paginatedData.length) {
      setSelectedTopics([]);
    } else {
      setSelectedTopics(paginatedData.map(topic => topic.id));
    }
  };

  const handleSelectItem = (topicId: string) => {
    setSelectedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected topics');
    setSelectedTopics([]);
  };

  const handleBulkActions = () => {
    console.log('Bulk actions clicked');
  };

  const tableColumns: TableColumn<Topic>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (topic: Topic) => (
        <span className="text-sm text-gray-900 font-medium">{topic.name}</span>
      ),
    },
    {
      key: 'createdBy',
      label: 'CREATED BY',
      render: (topic: Topic) => (
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full ${topic.createdBy.color} flex items-center justify-center`}
          >
            <span className="text-xs text-white font-medium">
              {topic.createdBy.initials}
            </span>
          </div>
          <span className="text-sm text-gray-900">{topic.createdBy.name}</span>
        </div>
      ),
    },
    {
      key: 'spaces',
      label: 'SPACES',
      render: (topic: Topic) => (
        <span className="text-sm text-gray-600">{topic.spaces}</span>
      ),
    },
    {
      key: 'adminOnly',
      label: 'ADMIN ONLY',
      render: (topic: Topic) => (
        <span className="text-sm text-gray-600">
          {topic.adminOnly ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'createdAt',
      label: 'CREATED ON',
      render: (topic: Topic) => (
        <span className="text-sm text-gray-600">{topic.createdAt}</span>
      ),
    },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Topics"
      actions={<Button variant="primary">New topic</Button>}
    >
      {/* Actions */}
      <Actions
        selectedCount={selectedTopics.length}
        totalCount={paginatedData.length}
        onDeleteSelected={handleDeleteSelected}
        onBulkActions={handleBulkActions}
      />

      {/* Table */}
      <div className="flex-1 min-h-0">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedTopics}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockTopics.length}
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

export default Topics;
