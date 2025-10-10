import React, { useState } from 'react';
import {
  mockCoupons,
  getCouponCounts,
  Coupon,
} from '../../data/Paywalls/mockData';
import { TableEnhanced, TableColumn } from '../ui';
import { Actions } from '../ui';
import { Pagination } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';

interface CouponsProps {
  onToggleSidebar: () => void;
}

const Coupons: React.FC<CouponsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedCoupons, setSelectedCoupons] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
    setSelectedCoupons([]);
  };

  const handleDeleteSelected = () => {
    // Handle bulk delete
    setSelectedCoupons([]);
  };

  const tabs: Tab[] = [
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
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Coupons"
      actions={
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          Create coupon
        </button>
      }
    >
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Actions */}
      <Actions
        selectedCount={selectedCoupons.length}
        totalCount={paginatedCoupons.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-200">
        <TableEnhanced
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
    </ContentContainer>
  );
};

export default Coupons;
