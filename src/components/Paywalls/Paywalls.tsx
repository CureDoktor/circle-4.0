// Paywalls component for managing paywall data
import React, { useState } from 'react';
import {
  mockPaywalls,
  getPaywallCounts,
  Paywall,
} from '../../data/Paywalls/mockData';
import { TableEnhanced, TableColumn } from '../ui';
import { Actions } from '../ui';
import { Pagination } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import NewPaywall from './NewPaywall';

interface PaywallsProps {
  onToggleSidebar: () => void;
  isAIHelperOpen?: boolean;
  onCloseAIHelper?: () => void;
  onPreviewToggle?: (isOpen: boolean) => void;
}

const Paywalls: React.FC<PaywallsProps> = ({
  onToggleSidebar,
  isAIHelperOpen,
  onCloseAIHelper,
  onPreviewToggle,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedPaywalls, setSelectedPaywalls] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showNewPaywall, setShowNewPaywall] = useState(false);
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

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentPage(1);
    setSelectedPaywalls([]);
  };

  const handleDeleteSelected = () => {
    // Handle bulk delete
    setSelectedPaywalls([]);
  };

  const tabs: Tab[] = [
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

  // Show NewPaywall component if showNewPaywall is true
  if (showNewPaywall) {
    return (
      <NewPaywall
        onBack={() => setShowNewPaywall(false)}
        isAIHelperOpen={isAIHelperOpen}
        onCloseAIHelper={onCloseAIHelper}
        onPreviewToggle={onPreviewToggle}
      />
    );
  }

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Paywalls"
      actions={
        <button
          onClick={() => setShowNewPaywall(true)}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Create paywall
        </button>
      }
    >
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Actions */}
      <Actions
        selectedCount={selectedPaywalls.length}
        totalCount={paginatedPaywalls.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
        <TableEnhanced
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
    </ContentContainer>
  );
};

export default Paywalls;
