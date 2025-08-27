import React, { useState } from 'react';
import { Table, TableColumn } from '../Table';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import Actions from '../Actions';
import Pagination from '../Pagination';
import Button from '../Button';

interface AccessGroup {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Archived';
  members: number;
  createdBy: {
    name: string;
    initials: string;
    color: string;
  };
  createdAt: string;
}

interface AccessGroupsProps {
  onToggleSidebar: () => void;
}

const AccessGroups: React.FC<AccessGroupsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  // Mock data for access groups
  const mockAccessGroups: AccessGroup[] = [
    {
      id: '1',
      name: 'Administrators',
      description: 'Full access to all features and settings',
      status: 'Active',
      members: 5,
      createdBy: {
        name: 'John Doe',
        initials: 'JD',
        color: 'bg-blue-500',
      },
      createdAt: 'Jan 15, 2024',
    },
    {
      id: '2',
      name: 'Moderators',
      description: 'Can moderate content and manage users',
      status: 'Active',
      members: 12,
      createdBy: {
        name: 'Jane Smith',
        initials: 'JS',
        color: 'bg-green-500',
      },
      createdAt: 'Feb 3, 2024',
    },
    {
      id: '3',
      name: 'Premium Members',
      description: 'Access to premium features and content',
      status: 'Active',
      members: 45,
      createdBy: {
        name: 'Mike Johnson',
        initials: 'MJ',
        color: 'bg-purple-500',
      },
      createdAt: 'Mar 10, 2024',
    },
    {
      id: '4',
      name: 'Beta Testers',
      description: 'Early access to new features',
      status: 'Archived',
      members: 8,
      createdBy: {
        name: 'Sarah Wilson',
        initials: 'SW',
        color: 'bg-orange-500',
      },
      createdAt: 'Apr 5, 2024',
    },
  ];

  const itemsPerPage = 10;
  const totalPages = Math.ceil(mockAccessGroups.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = mockAccessGroups.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedGroups.length === paginatedData.length) {
      setSelectedGroups([]);
    } else {
      setSelectedGroups(paginatedData.map(group => group.id));
    }
  };

  const handleSelectItem = (groupId: string) => {
    setSelectedGroups(prev =>
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedGroups([]);
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected groups');
    setSelectedGroups([]);
  };

  const handleBulkActions = () => {
    console.log('Bulk actions clicked');
  };

  const tableColumns: TableColumn<AccessGroup>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (group: AccessGroup) => (
        <span className="text-sm text-gray-900 font-medium">{group.name}</span>
      ),
    },
    {
      key: 'description',
      label: 'DESCRIPTION',
      render: (group: AccessGroup) => (
        <span className="text-sm text-gray-600">{group.description}</span>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (group: AccessGroup) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            group.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {group.status}
        </span>
      ),
    },
    {
      key: 'members',
      label: 'MEMBERS',
      render: (group: AccessGroup) => (
        <span className="text-sm text-gray-600">{group.members}</span>
      ),
    },
    {
      key: 'createdBy',
      label: 'CREATED BY',
      render: (group: AccessGroup) => (
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full ${group.createdBy.color} flex items-center justify-center`}
          >
            <span className="text-xs text-white font-medium">
              {group.createdBy.initials}
            </span>
          </div>
          <span className="text-sm text-gray-900">{group.createdBy.name}</span>
        </div>
      ),
    },
    {
      key: 'createdAt',
      label: 'CREATED AT',
      render: (group: AccessGroup) => (
        <span className="text-sm text-gray-600">{group.createdAt}</span>
      ),
    },
  ];

  const tabs: Tab[] = [
    { id: 'all', label: 'All', count: mockAccessGroups.length },
    {
      id: 'active',
      label: 'Active',
      count: mockAccessGroups.filter(g => g.status === 'Active').length,
    },
    {
      id: 'archived',
      label: 'Archived',
      count: mockAccessGroups.filter(g => g.status === 'Archived').length,
    },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Access groups"
      actions={<Button variant="primary">New access group</Button>}
    >
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Content count */}
      <div className="flex-shrink-0">
        <span className="text-sm text-gray-600">
          {mockAccessGroups.length} access groups
        </span>
      </div>

      {/* Actions */}
      <Actions
        selectedCount={selectedGroups.length}
        totalCount={paginatedData.length}
        onDeleteSelected={handleDeleteSelected}
        onBulkActions={handleBulkActions}
      />

      {/* Table */}
      <div className="flex-1 min-h-0">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedGroups}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockAccessGroups.length}
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

export default AccessGroups;
