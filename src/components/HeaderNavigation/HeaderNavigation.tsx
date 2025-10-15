import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import Pagination from '../ui/pagination';
import { Button } from '../ui';

interface NavigationItem {
  id: string;
  name: string;
  status: 'enabled' | 'admin-only' | 'disabled';
}

interface HeaderNavigationProps {
  onToggleSidebar: () => void;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({
  onToggleSidebar,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState('logged-in');

  const navigationData: NavigationItem[] = [
    {
      id: '1',
      name: 'Community',
      status: 'enabled',
    },
    {
      id: '2',
      name: 'Course space area',
      status: 'enabled',
    },
    {
      id: '3',
      name: 'Homepage',
      status: 'enabled',
    },
    {
      id: '4',
      name: 'Events',
      status: 'enabled',
    },
    {
      id: '5',
      name: 'Members',
      status: 'enabled',
    },
    {
      id: '6',
      name: 'Leaderboard',
      status: 'admin-only',
    },
    {
      id: '7',
      name: 'Courses',
      status: 'enabled',
    },
    {
      id: '8',
      name: 'Members home',
      status: 'enabled',
    },
    {
      id: '9',
      name: 'About Us',
      status: 'enabled',
    },
    {
      id: '10',
      name: 'testPage',
      status: 'enabled',
    },
    {
      id: '11',
      name: 'Test',
      status: 'enabled',
    },
    {
      id: '12',
      name: 'testLong',
      status: 'enabled',
    },
  ];

  const tabs: Tab[] = [
    {
      id: 'logged-in',
      label: 'Logged in',
      count: navigationData.filter(item => item.status === 'enabled').length,
    },
    {
      id: 'logged-out',
      label: 'Logged out',
      count: navigationData.filter(item => item.status === 'admin-only').length,
    },
  ];

  const columns: TableColumn<NavigationItem>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (item: NavigationItem) => (
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 text-gray-400 cursor-move">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
          </div>
          <span className="font-medium text-gray-900">{item.name}</span>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item: NavigationItem) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            item.status === 'enabled'
              ? 'bg-green-100 text-green-800'
              : item.status === 'admin-only'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {item.status === 'admin-only'
            ? 'Admin only'
            : item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
      ),
    },
    {
      key: 'actions',
      label: '',
      render: (_item: NavigationItem) => (
        <div className="flex justify-end">
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      ),
    },
  ];

  // Filter data based on active tab
  const getFilteredData = () => {
    switch (activeTab) {
      case 'logged-in':
        return navigationData.filter(item => item.status === 'enabled');
      case 'logged-out':
        return navigationData.filter(item => item.status === 'admin-only');
      case 'all':
      default:
        return navigationData;
    }
  };

  const filteredData = getFilteredData();
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

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
      title="Header navigation"
      onToggleSidebar={onToggleSidebar}
      actions={
        <div className="flex items-center space-x-3">
          <Button variant="default">Add link</Button>
        </div>
      }
    >
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto pt-6">
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

export default HeaderNavigation;
