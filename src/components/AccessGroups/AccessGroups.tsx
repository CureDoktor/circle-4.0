import React, { useState, useEffect } from 'react';
import {
  mockAccessGroups,
  getAccessGroupCounts,
  AccessGroup,
} from '../../data/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';

interface AccessGroupsProps {
  onToggleSidebar: () => void;
}

type TabType = 'all' | 'active' | 'archived';

const AccessGroups: React.FC<AccessGroupsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const itemsPerPage = 20;

  const groupCounts = getAccessGroupCounts();

  const getCurrentGroups = (): AccessGroup[] => {
    if (activeTab === 'all') {
      return mockAccessGroups;
    } else if (activeTab === 'active') {
      return mockAccessGroups.filter(group => group.status === 'Active');
    } else if (activeTab === 'archived') {
      return mockAccessGroups.filter(group => group.status === 'Archived');
    }
    return mockAccessGroups;
  };

  const currentGroups = getCurrentGroups();
  const totalPages = Math.ceil(currentGroups.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedGroups = currentGroups.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedGroups.length === paginatedGroups.length) {
      setSelectedGroups([]);
    } else {
      setSelectedGroups(paginatedGroups.map(group => group.id));
    }
  };

  const handleSelectGroup = (groupId: string) => {
    setSelectedGroups(prev =>
      prev.includes(groupId)
        ? prev.filter(id => id !== groupId)
        : [...prev, groupId]
    );
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedGroups([]);
    setShowBulkActions(false);
    setShowMoreActions(false);
  };

  const handleBulkActivate = () => {
    // Handle bulk activate
    setSelectedGroups([]);
    setShowBulkActions(false);
  };

  const handleBulkArchive = () => {
    // Handle bulk archive
    setSelectedGroups([]);
    setShowBulkActions(false);
  };

  const handleBulkDelete = () => {
    // Handle bulk delete
    setSelectedGroups([]);
    setShowBulkActions(false);
  };

  const handleClearSelection = () => {
    setSelectedGroups([]);
    setShowBulkActions(false);
    setShowMoreActions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest('.bulk-actions-dropdown') &&
        !target.closest('.more-actions-dropdown')
      ) {
        setShowBulkActions(false);
        setShowMoreActions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tabs = [
    { id: 'all', label: 'All', count: groupCounts.all },
    { id: 'active', label: 'Active', count: groupCounts.active },
    { id: 'archived', label: 'Archived', count: groupCounts.archived },
  ];

  // Define table columns
  const columns: TableColumn<AccessGroup>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (group: AccessGroup) => (
        <div className="text-sm font-medium text-gray-900">{group.name}</div>
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
          className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
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
        <div className="text-sm text-gray-900 text-right">{group.members}</div>
      ),
      className: 'text-right',
    },
    {
      key: 'spaces',
      label: 'SPACES',
      render: (group: AccessGroup) => (
        <div className="text-sm text-gray-900 text-right">{group.spaces}</div>
      ),
      className: 'text-right',
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
            <h1 className="text-2xl font-bold text-gray-900">Access groups</h1>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition-colors w-full sm:w-auto text-sm font-medium">
            <span>New access group</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="border-b border-gray-200 mb-6 overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as TabType)}
                className={`py-3 px-4 font-medium border border-gray-100 text-sm transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-1 border-gray-300 border-b-0 rounded-t-lg text-gray-900 bg-white'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label} {tab.count.toLocaleString()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary and Actions */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">
            {currentGroups.length} access groups
          </div>
          <div className="flex items-center space-x-3">
            {selectedGroups.length > 0 && (
              <button
                onClick={handleClearSelection}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            )}

            {/* Bulk Actions Dropdown */}
            <div className="relative bulk-actions-dropdown">
              <button
                onClick={() => setShowBulkActions(!showBulkActions)}
                className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
              >
                <span>
                  Bulk actions{' '}
                  {selectedGroups.length > 0 && `(${selectedGroups.length})`}
                </span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showBulkActions ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showBulkActions && selectedGroups.length > 0 && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-modalSlideIn">
                  <div className="py-1">
                    <button
                      onClick={handleBulkActivate}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Activate groups
                    </button>
                    <button
                      onClick={handleBulkArchive}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Archive groups
                    </button>
                    <button
                      onClick={handleBulkDelete}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Delete groups
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* More Actions Dropdown */}
            <div className="relative more-actions-dropdown">
              <button
                onClick={() => setShowMoreActions(!showMoreActions)}
                className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2"
              >
                <span>More</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showMoreActions ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {showMoreActions && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-modalSlideIn">
                  <div className="py-1">
                    {selectedGroups.length === 1 ? (
                      <>
                        <button
                          onClick={() => setShowMoreActions(false)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          Edit selected group
                        </button>
                        <button
                          onClick={() => setShowMoreActions(false)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          Export data
                        </button>
                        <button
                          onClick={() => setShowMoreActions(false)}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          Import data
                        </button>
                      </>
                    ) : selectedGroups.length > 1 ? (
                      <div className="px-4 py-2 text-sm text-gray-500">
                        Select one group to edit
                      </div>
                    ) : (
                      <div className="px-4 py-2 text-sm text-gray-500">
                        Select a group to see options
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mx-6">
        <Table<AccessGroup>
          columns={columns}
          data={paginatedGroups}
          selectedItems={selectedGroups}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectGroup}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={currentGroups.length}
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

export default AccessGroups;
