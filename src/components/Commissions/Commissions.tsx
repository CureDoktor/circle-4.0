import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import Pagination from '../ui/pagination';

interface Commission {
  id: string;
  date: string;
  affiliate: string;
  referral: string;
  sale: string;
  amount: string;
  commission: string;
  status: 'pending' | 'due' | 'processing' | 'paid';
}

interface CommissionsProps {
  onToggleSidebar: () => void;
}

const Commissions: React.FC<CommissionsProps> = ({ onToggleSidebar }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [activeTab, setActiveTab] = useState('all');

  const commissionsData: Commission[] = [
    {
      id: '1',
      date: 'May 10 2024',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Test Paywall',
      amount: '$0 USD',
      commission: '$1 USD',
      status: 'processing',
    },
    {
      id: '2',
      date: 'Jan 4 2024',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Balance Basic Membership',
      amount: '$0 USD',
      commission: '$0.50 USD',
      status: 'processing',
    },
    {
      id: '3',
      date: 'Dec 11 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: "Hector's Checkout Test",
      amount: '$0 USD',
      commission: '$0.05 USD',
      status: 'processing',
    },
    {
      id: '4',
      date: 'Nov 15 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Mariana Trial 2024',
      amount: '$0 USD',
      commission: '$0.01 USD',
      status: 'processing',
    },
    {
      id: '5',
      date: 'Oct 8 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Igor Test Paywall',
      amount: '$0 USD',
      commission: '$1 USD',
      status: 'processing',
    },
    {
      id: '6',
      date: 'Sep 22 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'New Paywall - Karthik',
      amount: '$0 USD',
      commission: '$0.50 USD',
      status: 'processing',
    },
    {
      id: '7',
      date: 'Aug 14 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Installment testing medha',
      amount: '$0 USD',
      commission: '$0.05 USD',
      status: 'processing',
    },
    {
      id: '8',
      date: 'Jul 3 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Development',
      amount: '$0 USD',
      commission: '$0.01 USD',
      status: 'processing',
    },
    {
      id: '9',
      date: 'Jun 18 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Test Paywall 2',
      amount: '$0 USD',
      commission: '$1 USD',
      status: 'processing',
    },
    {
      id: '10',
      date: 'May 5 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Balance Premium Membership',
      amount: '$0 USD',
      commission: '$0.50 USD',
      status: 'processing',
    },
    {
      id: '11',
      date: 'Apr 12 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'Enterprise Plan',
      amount: '$0 USD',
      commission: '$0.05 USD',
      status: 'processing',
    },
    {
      id: '12',
      date: 'Mar 28 2023',
      affiliate: 'Akshay Test User 2',
      referral: 'Sushant Mittal',
      sale: 'VIP Membership',
      amount: '$0 USD',
      commission: '$0.01 USD',
      status: 'processing',
    },
  ];

  const tabs: Tab[] = [
    { id: 'all', label: 'All', count: commissionsData.length },
    {
      id: 'pending',
      label: 'Pending',
      count: commissionsData.filter(
        commission => commission.status === 'pending'
      ).length,
    },
    {
      id: 'due',
      label: 'Due',
      count: commissionsData.filter(commission => commission.status === 'due')
        .length,
    },
    {
      id: 'processing',
      label: 'Processing',
      count: commissionsData.filter(
        commission => commission.status === 'processing'
      ).length,
    },
    {
      id: 'paid',
      label: 'Paid',
      count: commissionsData.filter(commission => commission.status === 'paid')
        .length,
    },
  ];

  const columns: TableColumn<Commission>[] = [
    {
      key: 'date',
      label: 'DATE',
      render: (item: Commission) => (
        <span className="text-gray-900">{item.date}</span>
      ),
    },
    {
      key: 'affiliate',
      label: 'AFFILIATE',
      render: (item: Commission) => (
        <span className="text-gray-900">{item.affiliate}</span>
      ),
    },
    {
      key: 'referral',
      label: 'REFERRAL',
      render: (item: Commission) => (
        <span className="text-gray-900">{item.referral}</span>
      ),
    },
    {
      key: 'sale',
      label: 'SALE',
      render: (item: Commission) => (
        <span className="text-gray-900">{item.sale}</span>
      ),
    },
    {
      key: 'amount',
      label: 'AMOUNT',
      render: (item: Commission) => (
        <span className="text-gray-900">{item.amount}</span>
      ),
    },
    {
      key: 'commission',
      label: 'COMMISSION',
      render: (item: Commission) => (
        <span className="text-gray-900">{item.commission}</span>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item: Commission) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            item.status === 'processing'
              ? 'bg-gray-100 text-gray-800'
              : item.status === 'pending'
              ? 'bg-yellow-100 text-yellow-800'
              : item.status === 'due'
              ? 'bg-orange-100 text-orange-800'
              : 'bg-green-100 text-green-800'
          }`}
        >
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
      ),
    },
  ];

  // Filter data based on active tab
  const getFilteredData = () => {
    switch (activeTab) {
      case 'pending':
        return commissionsData.filter(
          commission => commission.status === 'pending'
        );
      case 'due':
        return commissionsData.filter(
          commission => commission.status === 'due'
        );
      case 'processing':
        return commissionsData.filter(
          commission => commission.status === 'processing'
        );
      case 'paid':
        return commissionsData.filter(
          commission => commission.status === 'paid'
        );
      case 'all':
      default:
        return commissionsData;
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
    <ContentContainer title="Commissions" onToggleSidebar={onToggleSidebar}>
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Count */}
      <div className="px-6 py-2">
        <p className="text-sm text-gray-600">{totalItems} commissions</p>
      </div>

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-200">
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

export default Commissions;
