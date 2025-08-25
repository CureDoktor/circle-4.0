import React, { useState, useEffect } from 'react';
import { User, AudienceData } from '../types';
import { saveAudienceData, loadAudienceData } from '../data/mockData';
import Header from './ManageAudience/Header';
import Tabs from './ManageAudience/Tabs';
import Filters from './ManageAudience/Filters';
import Actions from './ManageAudience/Actions';
import { Table, TableColumn } from './Table';
import { Pagination } from './Table';
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
  onDataChange,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [dataVersion, setDataVersion] = useState(0);

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
    switch (activeTab) {
      case 'all':
        return audienceData.all;
      case 'contacts':
        return audienceData.contacts;
      case 'members':
        return audienceData.members;
      case 'invited':
        return audienceData.invited;
      case 'moderators':
        return audienceData.moderators;
      default:
        return audienceData.all;
    }
  };

  const currentUsers = getCurrentUsers();
  const totalPages = Math.ceil(currentUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedUsers = currentUsers.slice(startIndex, endIndex);

  const markAsChanged = () => {
    setHasUnsavedChanges(true);
    setDataVersion(prev => prev + 1);
    if (onDataChange) {
      onDataChange(audienceData);
    }
  };

  const updateTabData = () => {
    audienceData.contacts = audienceData.all.filter(
      user => user.emailMarketing
    );
    audienceData.members = audienceData.all.filter(
      user => user.role === 'Member'
    );
    audienceData.invited = audienceData.all.filter(
      user => user.invitationStatus === 'Invited'
    );
    audienceData.moderators = audienceData.all.filter(
      user => user.role === 'Moderator'
    );
    setDataVersion(prev => prev + 1);
    if (onDataChange) {
      onDataChange(audienceData);
    }
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === paginatedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(paginatedUsers.map(user => user.id));
    }
  };

  const handleSelectUser = (userId: string) => {
    setSelectedUsers(prev =>
      prev.includes(userId)
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const handleTabChange = (tab: string) => {
    setIsLoading(true);
    setActiveTab(tab as TabType);
    setCurrentPage(1);
    setSelectedUsers([]);
    setShowBulkActions(false);
    setShowMoreActions(false);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleBulkEmailMarketing = (enabled: boolean) => {
    selectedUsers.forEach(userId => {
      const updateUserInArray = (users: User[]) => {
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
          users[userIndex].emailMarketing = enabled;
        }
      };

      updateUserInArray(audienceData.all);
      updateUserInArray(audienceData.contacts);
      updateUserInArray(audienceData.members);
      updateUserInArray(audienceData.invited);
      updateUserInArray(audienceData.moderators);
    });

    updateTabData();
    setSelectedUsers([]);
    setShowBulkActions(false);
    markAsChanged();
  };

  const handleBulkRoleChange = (newRole: 'Member' | 'Moderator' | 'Admin') => {
    selectedUsers.forEach(userId => {
      const updateUserInArray = (users: User[]) => {
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
          users[userIndex].role = newRole;
        }
      };

      updateUserInArray(audienceData.all);
      updateUserInArray(audienceData.contacts);
      updateUserInArray(audienceData.members);
      updateUserInArray(audienceData.invited);
      updateUserInArray(audienceData.moderators);
    });

    updateTabData();
    setSelectedUsers([]);
    setShowBulkActions(false);
    markAsChanged();
  };

  const handleBulkDelete = () => {
    selectedUsers.forEach(userId => {
      const removeUserFromArray = (users: User[]) => {
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex !== -1) {
          users.splice(userIndex, 1);
        }
      };

      removeUserFromArray(audienceData.all);
      removeUserFromArray(audienceData.contacts);
      removeUserFromArray(audienceData.members);
      removeUserFromArray(audienceData.invited);
      removeUserFromArray(audienceData.moderators);
    });

    updateTabData();
    setSelectedUsers([]);
    setShowBulkActions(false);
    markAsChanged();
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setModalMode('edit');
    setIsModalOpen(true);
    setShowMoreActions(false);
  };

  const handleAddMember = () => {
    setEditingUser(null);
    setModalMode('add');
    setIsModalOpen(true);
  };

  const handleSaveUser = (userData: Partial<User>) => {
    if (modalMode === 'add') {
      // Add new user
      if (
        !userData.name ||
        !userData.email ||
        !userData.role ||
        userData.emailMarketing === undefined
      ) {
        return;
      }

      const newUser: User = {
        id: `user-${Date.now()}`,
        name: userData.name,
        email: userData.email,
        profileImage: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          userData.name
        )}&background=random&color=fff&size=128&font-size=0.5&length=2`,
        role: userData.role,
        emailMarketing: userData.emailMarketing,
        score: Math.floor(Math.random() * 100) + 1,
        invitationStatus: 'Profile complete',
        dateAdded: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };

      audienceData.all.push(newUser);
    } else {
      // Edit existing user
      if (!editingUser) return;

      const updateUserInArray = (users: User[]) => {
        const userIndex = users.findIndex(user => user.id === editingUser.id);
        if (userIndex !== -1) {
          users[userIndex] = { ...users[userIndex], ...userData };
        }
      };

      updateUserInArray(audienceData.all);
      updateUserInArray(audienceData.contacts);
      updateUserInArray(audienceData.members);
      updateUserInArray(audienceData.invited);
      updateUserInArray(audienceData.moderators);
    }

    updateTabData();
    setEditingUser(null);
    setIsModalOpen(false);
    markAsChanged();
  };

  const handleSaveSegment = () => {
    try {
      updateTabData();
      saveAudienceData(audienceData);
      setHasUnsavedChanges(false);
      setShowSaveSuccess(true);

      setSelectedUsers([]);
      setShowBulkActions(false);
      setShowMoreActions(false);

      const currentTab = activeTab;
      setActiveTab('all');
      setTimeout(() => {
        setActiveTab(currentTab);
      }, 50);

      setTimeout(() => {
        setShowSaveSuccess(false);
      }, 3000);
    } catch (error) {
      // Handle error silently
    }
  };

  const handleEditSelectedUser = () => {
    const selectedUser = currentUsers.find(
      user => user.id === selectedUsers[0]
    );
    if (selectedUser) {
      handleEditUser(selectedUser);
    }
  };

  const tabs = [
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

  const filters = [
    { id: 'name', label: 'Name' },
    { id: 'email-marketing', label: 'Email marketing' },
    { id: 'member', label: 'Member' },
    { id: 'segment', label: 'Segment' },
    { id: 'location', label: 'Location' },
  ];

  // Define table columns
  const columns: TableColumn<User>[] = [
    {
      key: 'name',
      label: 'Name',
      render: (user: User) => (
        <div className="flex items-center space-x-3">
          <Avatar src={user.profileImage} alt={user.name} size="md" />
          <div className="min-w-0 flex-1">
            <span className="text-sm font-medium text-gray-900 block truncate">
              {user.name}
            </span>
          </div>
        </div>
      ),
      className: 'border-r border-gray-200',
    },
    {
      key: 'emailMarketing',
      label: 'Email marketing',
      render: (user: User) => (
        <span
          className={`text-sm ${
            user.emailMarketing
              ? 'text-black-600 font-medium rounded-xl bg-gray-100 px-2 py-1'
              : 'text-gray-500 border-2 border-gray-100 rounded-xl px-2 py-1'
          }`}
        >
          {user.emailMarketing ? '✓ Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'score',
      label: 'Score',
      render: (user: User) => (
        <span className="text-sm text-gray-900">{user.score}</span>
      ),
    },
    {
      key: 'email',
      label: 'Email',
      render: (user: User) => (
        <span className="text-sm text-gray-600 truncate block max-w-32">
          {user.email}
        </span>
      ),
    },
    {
      key: 'role',
      label: 'Role',
      render: (user: User) => (
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            user.role === 'Moderator'
              ? 'bg-purple-100 text-purple-800'
              : user.role === 'Admin'
              ? 'bg-red-100 text-red-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {user.role}
        </span>
      ),
    },
    {
      key: 'invitationStatus',
      label: 'Invitation status',
      render: (user: User) => (
        <span className="text-sm text-gray-600">{user.invitationStatus}</span>
      ),
    },
    {
      key: 'dateAdded',
      label: 'Date added',
      render: (user: User) => (
        <span className="text-sm text-gray-600">{user.dateAdded}</span>
      ),
    },
  ];

  return (
    <div className="bg-white h-full rounded-lg shadow-lg flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="flex-shrink-0">
          <Header
            onToggleSidebar={onToggleSidebar}
            onAddMember={handleAddMember}
          />

          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
          />

          <Filters filters={filters} />

          <Actions
            currentUsersCount={currentUsers.length}
            selectedUsersCount={selectedUsers.length}
            hasUnsavedChanges={hasUnsavedChanges}
            showSaveSuccess={showSaveSuccess}
            showBulkActions={showBulkActions}
            showMoreActions={showMoreActions}
            onSaveSegment={handleSaveSegment}
            onToggleBulkActions={() => setShowBulkActions(!showBulkActions)}
            onToggleMoreActions={() => setShowMoreActions(!showMoreActions)}
            onBulkEmailMarketing={handleBulkEmailMarketing}
            onBulkRoleChange={handleBulkRoleChange}
            onBulkDelete={handleBulkDelete}
            onClearSelection={() => {
              setSelectedUsers([]);
              setShowBulkActions(false);
            }}
            onEditSelectedUser={handleEditSelectedUser}
          />
        </div>

        <div className="flex-1 min-h-0">
          <Table<User>
            columns={columns}
            data={paginatedUsers}
            selectedItems={selectedUsers}
            onSelectAll={handleSelectAll}
            onSelectItem={handleSelectUser}
            isLoading={isLoading}
          />
        </div>

        <div className="flex-shrink-0">
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
        </div>
      </div>

      <EditModal
        user={editingUser}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingUser(null);
        }}
        onSave={handleSaveUser}
        mode={modalMode}
      />
    </div>
  );
};

export default ManageAudience;
