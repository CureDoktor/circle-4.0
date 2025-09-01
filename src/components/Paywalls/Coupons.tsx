import React, { useState, useEffect } from 'react';
import {
  mockCoupons,
  getCouponCounts,
  Coupon,
} from '../../data/Paywalls/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';
import SidebarToggle from '../ui/sidebar-toggle';

interface CouponsProps {
  onToggleSidebar: () => void;
}

type TabType = 'all' | 'active' | 'archived';

const Coupons: React.FC<CouponsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [selectedCoupons, setSelectedCoupons] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const itemsPerPage = 20;

  const couponCounts = getCouponCounts();

  const getCurrentCoupons = (): Coupon[] => {
    if (activeTab === 'all') {
      return mockCoupons;
    } else if (activeTab === 'active') {
      return mockCoupons.filter(coupon => coupon.status === 'Active');
    } else if (activeTab === 'archived') {
      return mockCoupons.filter(coupon => coupon.status === 'Inactive');
    }
    return mockCoupons;
  };

  const currentCoupons = getCurrentCoupons();
  const totalPages = Math.ceil(currentCoupons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedCoupons = currentCoupons.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedCoupons.length === paginatedCoupons.length) {
      setSelectedCoupons([]);
    } else {
      setSelectedCoupons(paginatedCoupons.map(coupon => coupon.id));
    }
  };

  const handleSelectCoupon = (couponId: string) => {
    setSelectedCoupons(prev =>
      prev.includes(couponId)
        ? prev.filter(id => id !== couponId)
        : [...prev, couponId]
    );
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedCoupons([]);
    setShowBulkActions(false);
    setShowMoreActions(false);
  };

  const handleBulkActivate = () => {
    // Handle bulk activate
    setSelectedCoupons([]);
    setShowBulkActions(false);
  };

  const handleBulkDeactivate = () => {
    // Handle bulk deactivate
    setSelectedCoupons([]);
    setShowBulkActions(false);
  };

  const handleBulkDelete = () => {
    // Handle bulk delete
    setSelectedCoupons([]);
    setShowBulkActions(false);
  };

  const handleClearSelection = () => {
    setSelectedCoupons([]);
    setShowBulkActions(false);
    setShowMoreActions(false);
  };

  // Close dropdowns when clicking outside
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
    { id: 'all', label: 'All', count: couponCounts.all },
    { id: 'active', label: 'Active', count: couponCounts.active },
    { id: 'archived', label: 'Archived', count: couponCounts.archived },
  ];

  // Define table columns
  const columns: TableColumn<Coupon>[] = [
    {
      key: 'code',
      label: 'Code',
      render: (coupon: Coupon) => (
        <div className="text-sm font-medium text-gray-900">{coupon.code}</div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (coupon: Coupon) => (
        <div className="flex items-center space-x-2">
          {coupon.status === 'Active' ? (
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
      key: 'name',
      label: 'Name',
      render: (coupon: Coupon) => (
        <div className="text-sm text-gray-900">{coupon.name}</div>
      ),
    },
    {
      key: 'terms',
      label: 'Terms',
      render: (coupon: Coupon) => (
        <div className="text-sm text-gray-900">{coupon.terms}</div>
      ),
    },
    {
      key: 'redemptions',
      label: 'Redemptions',
      render: (coupon: Coupon) => (
        <div className="text-sm text-gray-900">
          {coupon.redemptions.toLocaleString()}
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
              <h1 className="text-2xl font-bold text-gray-900">Coupons</h1>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            Create coupon
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
            {currentCoupons.length} coupons
          </span>
          <div className="flex items-center space-x-3">
            {selectedCoupons.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {selectedCoupons.length} selected
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
                disabled={selectedCoupons.length === 0}
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

              {showBulkActions && selectedCoupons.length > 0 && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-modalSlideIn">
                  <div className="py-1">
                    <button
                      onClick={handleBulkActivate}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Activate coupons
                    </button>
                    <button
                      onClick={handleBulkDeactivate}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Deactivate coupons
                    </button>
                    <button
                      onClick={handleBulkDelete}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Delete coupons
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

            {/* More Actions Dropdown */}
            <div className="relative more-actions-dropdown">
              <button
                onClick={() => setShowMoreActions(!showMoreActions)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-1"
              >
                <span>More</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
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
                  <div className="p-2">
                    {selectedCoupons.length === 1 ? (
                      <button
                        onClick={() => setShowMoreActions(false)}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                      >
                        Edit selected coupon
                      </button>
                    ) : selectedCoupons.length > 1 ? (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Select only one coupon to edit
                      </div>
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Select a coupon to edit
                      </div>
                    )}
                    <button
                      onClick={() => setShowMoreActions(false)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                    >
                      Export data
                    </button>
                    <button
                      onClick={() => setShowMoreActions(false)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                    >
                      Import data
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
        <Table<Coupon>
          columns={columns}
          data={paginatedCoupons}
          selectedItems={selectedCoupons}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectCoupon}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={currentCoupons.length}
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

export default Coupons;
