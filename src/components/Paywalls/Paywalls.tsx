import React, { useState, useEffect } from 'react';
import {
  mockPaywalls,
  getPaywallCounts,
  Paywall,
} from '../../data/Paywalls/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';
import SidebarToggle from '../ui/sidebar-toggle';

interface PaywallsProps {
  onToggleSidebar: () => void;
}

type TabType = 'all' | 'archived';

const Paywalls: React.FC<PaywallsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedPaywalls, setSelectedPaywalls] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const itemsPerPage = 20;

  const paywallCounts = getPaywallCounts();

  const getCurrentPaywalls = (): Paywall[] => {
    if (activeTab === 'all') {
      return mockPaywalls;
    } else if (activeTab === 'archived') {
      return mockPaywalls.filter(paywall => paywall.status === 'Inactive');
    }
    return mockPaywalls;
  };

  const currentPaywalls = getCurrentPaywalls();
  const totalPages = Math.ceil(currentPaywalls.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPaywalls = currentPaywalls.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedPaywalls.length === paginatedPaywalls.length) {
      setSelectedPaywalls([]);
    } else {
      setSelectedPaywalls(paginatedPaywalls.map(paywall => paywall.id));
    }
  };

  const handleSelectPaywall = (paywallId: string) => {
    setSelectedPaywalls(prev =>
      prev.includes(paywallId)
        ? prev.filter(id => id !== paywallId)
        : [...prev, paywallId]
    );
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedPaywalls([]);
    setShowBulkActions(false);
  };

  const handleBulkActivate = () => {
    // Handle bulk activate
    setSelectedPaywalls([]);
    setShowBulkActions(false);
  };

  const handleBulkDeactivate = () => {
    // Handle bulk deactivate
    setSelectedPaywalls([]);
    setShowBulkActions(false);
  };

  const handleBulkDelete = () => {
    // Handle bulk delete
    setSelectedPaywalls([]);
    setShowBulkActions(false);
  };

  const handleClearSelection = () => {
    setSelectedPaywalls([]);
    setShowBulkActions(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.bulk-actions-dropdown')) {
        setShowBulkActions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tabs = [
    { id: 'all', label: 'All', count: paywallCounts.all },
    { id: 'archived', label: 'Archived', count: paywallCounts.archived },
  ];

  // Define table columns
  const columns: TableColumn<Paywall>[] = [
    {
      key: 'name',
      label: 'Name',
      render: (paywall: Paywall) => (
        <div className="text-sm font-medium text-gray-900">{paywall.name}</div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (paywall: Paywall) => (
        <div className="flex items-center space-x-2">
          {paywall.status === 'Active' ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              <svg
                className="w-3 h-3 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Active
            </span>
          ) : (
            <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              Inactive
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'terms',
      label: 'Terms',
      render: (paywall: Paywall) => (
        <div className="text-sm text-gray-900">{paywall.terms}</div>
      ),
    },
    {
      key: 'redemptions',
      label: 'Redemptions',
      render: (paywall: Paywall) => (
        <div className="text-sm text-gray-900">
          {paywall.redemptions.toLocaleString()}
        </div>
      ),
    },
  ];

  return (
    <div className="page-container h-full">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SidebarToggle onToggle={onToggleSidebar} />
            <div className="flex items-center space-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  fill="#6B7280"
                />
                <path d="M12 2v4a2 2 0 002 2h4" fill="#6B7280" />
              </svg>
              <h1 className="text-2xl font-bold text-gray-900">Paywalls</h1>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Create paywall
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6 overflow-x-auto mx-6">
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

      {/* Summary and Actions */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {currentPaywalls.length} paywalls
          </span>
          <div className="flex items-center space-x-3">
            {selectedPaywalls.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {selectedPaywalls.length} selected
                </span>
                <button
                  onClick={handleClearSelection}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              </div>
            )}

            {/* Bulk Actions Dropdown */}
            <div className="relative bulk-actions-dropdown">
              <button
                onClick={() => setShowBulkActions(!showBulkActions)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm transition-all duration-200 flex items-center justify-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedPaywalls.length === 0}
              >
                <span>Bulk actions</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
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

              {showBulkActions && selectedPaywalls.length > 0 && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-modalSlideIn">
                  <div className="py-1">
                    <button
                      onClick={handleBulkActivate}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Activate paywalls
                    </button>
                    <button
                      onClick={handleBulkDeactivate}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Deactivate paywalls
                    </button>
                    <button
                      onClick={handleBulkDelete}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Delete paywalls
                    </button>
                    <button
                      onClick={handleClearSelection}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Clear selection
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mx-6">
        <Table<Paywall>
          columns={columns}
          data={paginatedPaywalls}
          selectedItems={selectedPaywalls}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectPaywall}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={currentPaywalls.length}
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

export default Paywalls;
