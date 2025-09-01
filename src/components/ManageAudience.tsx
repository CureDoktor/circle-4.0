import React, { useState, useEffect } from 'react';
import { User, AudienceData } from '../types';
import { saveAudienceData, loadAudienceData } from '../data/mockData';
import { applyFilters } from '../utils/filterHelpers';
import { TableEnhanced as Table, TableColumn } from './ui';
import ContentContainer from './ContentContainer';
import Tabs, { Tab } from './Tabs';
import EnhancedFilters from './ui/enhanced-filters';
import { FilterOption, FilterCondition } from './ui/filter-modal';
import Actions from './ui/actions';
import Pagination from './ui/pagination';
import { Button } from './ui';
import EditModal from './ManageAudience/EditModal';
import Avatar from './ManageAudience/Avatar';

interface ManageAudienceProps {
  audienceData: AudienceData;
  onToggleSidebar: () => void;
  onDataChange?: (data: AudienceData) => void;
}

type TabType = 'all' | 'contacts' | 'members' | 'invited' | 'moderators';

const ManageAudience: React.FC<ManageAudienceProps> = ({
  audienceData,
  onToggleSidebar,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode] = useState<'add' | 'edit'>('add');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [dataVersion, setDataVersion] = useState(0);
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = loadAudienceData();
    // Properly update the audienceData object
    audienceData.all = [...savedData.all];
    audienceData.contacts = [...savedData.contacts];
    audienceData.members = [...savedData.members];
    audienceData.invited = [...savedData.invited];
    audienceData.moderators = [...savedData.moderators];
    setDataVersion(prev => prev + 1);
  }, [audienceData]);

  // Effect to handle data updates and refresh current tab
  useEffect(() => {
    // This will trigger when audienceData changes
    // Force re-render of current tab
  }, [
    audienceData.all,
    audienceData.contacts,
    audienceData.members,
    audienceData.invited,
    audienceData.moderators,
    dataVersion,
  ]);

  const getCurrentUsers = (): User[] => {
    let users: User[] = [];
    switch (activeTab) {
      case 'all':
        users = audienceData.all;
        break;
      case 'contacts':
        users = audienceData.contacts;
        break;
      case 'members':
        users = audienceData.members;
        break;
      case 'invited':
        users = audienceData.invited;
        break;
      case 'moderators':
        users = audienceData.moderators;
        break;
      default:
        users = audienceData.all;
    }

    // Apply filters
    return applyFilters(users, activeFilters);
  };

  const currentUsers = getCurrentUsers();
  const totalPages = Math.ceil(currentUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = currentUsers.slice(startIndex, endIndex);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as TabType);
    setCurrentPage(1);
    setSelectedUsers([]);
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === paginatedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(paginatedUsers.map(user => user.id));
    }
  };

  const handleSelectItem = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected users');
    setSelectedUsers([]);
  };

  const handleSaveSegment = async () => {
    setIsLoading(true);
    try {
      await saveAudienceData(audienceData);
      setHasUnsavedChanges(false);
      setShowSaveSuccess(true);
      setTimeout(() => setShowSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to save audience data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const tableColumns: TableColumn<User>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (user: User) => (
        <div className="flex items-center space-x-3">
          <Avatar src={user.profileImage} alt={user.name} size="sm" />
          <div>
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      label: 'ROLE',
      render: (user: User) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            user.role === 'Admin'
              ? 'bg-red-100 text-red-800'
              : user.role === 'Moderator'
              ? 'bg-blue-100 text-blue-800'
              : user.role === 'Member'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {user.role}
        </span>
      ),
    },
    {
      key: 'emailMarketing',
      label: 'EMAIL MARKETING',
      render: (user: User) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            user.emailMarketing
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {user.emailMarketing ? 'Subscribed' : 'Unsubscribed'}
        </span>
      ),
    },
    {
      key: 'dateAdded',
      label: 'DATE ADDED',
      render: (user: User) => (
        <span className="text-sm text-gray-600">{user.dateAdded}</span>
      ),
    },
  ];

  const tabs: Tab[] = [
    { id: 'all', label: 'All', count: audienceData.all.length },
    { id: 'contacts', label: 'Contacts', count: audienceData.contacts.length },
    { id: 'members', label: 'Members', count: audienceData.members.length },
    { id: 'invited', label: 'Invited', count: audienceData.invited.length },
    {
      id: 'moderators',
      label: 'Moderators',
      count: audienceData.moderators.length,
    },
  ];

  const filterOptions: FilterOption[] = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'text' },
    { id: 'role', label: 'Role', type: 'text' },
    { id: 'emailMarketing', label: 'Email Marketing', type: 'boolean' },
    { id: 'member', label: 'Member', type: 'boolean' },
    { id: 'location', label: 'Location', type: 'text' },
  ];

  return (
    <>
      <ContentContainer
        onToggleSidebar={onToggleSidebar}
        title="Manage audience"
        actions={
          <div className="flex items-center space-x-3">
            {hasUnsavedChanges && (
              <Button
                variant="default"
                onClick={handleSaveSegment}
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save segment'}
              </Button>
            )}
            {showSaveSuccess && (
              <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm">
                ✓ Saved successfully!
              </div>
            )}
            <Button variant="default">Add people</Button>
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
          selectedCount={selectedUsers.length}
          totalCount={paginatedUsers.length}
          onDeleteSelected={handleDeleteSelected}
        />

        {/* Table */}
        <div className="flex-1 min-h-0 overflow-auto">
          <Table
            columns={tableColumns}
            data={paginatedUsers}
            selectedItems={selectedUsers}
            onSelectAll={handleSelectAll}
            onSelectItem={handleSelectItem}
          />
        </div>

        {/* Pagination */}
        <Pagination
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={currentUsers.length}
          currentPage={currentPage}
          totalPages={totalPages}
          onPreviousPage={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          onNextPage={() =>
            setCurrentPage(prev => Math.min(prev + 1, totalPages))
          }
        />
      </ContentContainer>

      {/* Edit Modal */}
      <EditModal
        user={editingUser}
        isOpen={isModalOpen}
        mode={modalMode}
        onClose={() => {
          setIsModalOpen(false);
          setEditingUser(null);
        }}
        onSave={_userData => {
          // Handle save logic
          setIsModalOpen(false);
          setEditingUser(null);
        }}
      />
    </>
  );
};

export default ManageAudience;
