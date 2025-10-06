import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterOption, FilterCondition } from '../ui/filter-modal';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';

interface Transaction {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
    initials: string;
  };
  type: string;
  amount: string;
  currency: string;
  paymentMethod: {
    type: string;
    lastFour: string;
    icon?: string;
  } | null;
  status: 'paid' | 'refunded' | 'failed';
  paywall: string;
  date: string;
}

interface TransactionsProps {
  onToggleSidebar: () => void;
}

const Transactions: React.FC<TransactionsProps> = ({ onToggleSidebar }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);
  const [activeTab, setActiveTab] = useState('all');

  const transactionsData: Transaction[] = [
    {
      id: '1',
      customer: {
        name: 'Sarah Smith',
        email: 'sarah.smith@example.com',
        avatar: 'SS',
        initials: 'SS',
      },
      type: 'Monthly',
      amount: '2',
      currency: 'USD',
      paymentMethod: {
        type: 'Visa',
        lastFour: '6998',
        icon: 'visa',
      },
      status: 'paid',
      paywall: 'Test Paywall april 10',
      date: 'September 28, 2025',
    },
    {
      id: '2',
      customer: {
        name: 'Ivan Dimitrov',
        email: 'ivan.dimitrov@example.com',
        avatar: 'ID',
        initials: 'ID',
      },
      type: 'One-time',
      amount: '0',
      currency: 'USD',
      paymentMethod: {
        type: 'Google Pay',
        lastFour: '9351',
        icon: 'google',
      },
      status: 'paid',
      paywall: 'Balance Premium Membership',
      date: 'September 27, 2025',
    },
    {
      id: '3',
      customer: {
        name: 'John Carter',
        email: 'john.carter@example.com',
        avatar: 'JC',
        initials: 'JC',
      },
      type: 'Monthly',
      amount: '1',
      currency: 'EUR',
      paymentMethod: null,
      status: 'refunded',
      paywall: 'More testing',
      date: 'September 26, 2025',
    },
    {
      id: '4',
      customer: {
        name: 'Helen Varga',
        email: 'helen.varga@example.com',
        avatar: 'HV',
        initials: 'HV',
      },
      type: 'One-time',
      amount: '5',
      currency: 'USD',
      paymentMethod: {
        type: 'Mastercard',
        lastFour: '1234',
        icon: 'mastercard',
      },
      status: 'paid',
      paywall: 'Testing cross-community purchases',
      date: 'September 25, 2025',
    },
    {
      id: '5',
      customer: {
        name: 'Ben',
        email: 'ben@example.com',
        avatar: 'B',
        initials: 'B',
      },
      type: 'Monthly',
      amount: '10',
      currency: 'USD',
      paymentMethod: {
        type: 'PayPal',
        lastFour: '5678',
        icon: 'paypal',
      },
      status: 'paid',
      paywall: "Ben's 30 day trial test",
      date: 'September 24, 2025',
    },
    {
      id: '6',
      customer: {
        name: 'Maria Santos',
        email: 'maria.santos@example.com',
        avatar: 'MS',
        initials: 'MS',
      },
      type: 'One-time',
      amount: '3',
      currency: 'EUR',
      paymentMethod: {
        type: 'Visa',
        lastFour: '9876',
        icon: 'visa',
      },
      status: 'failed',
      paywall: 'EUR Paywall',
      date: 'September 23, 2025',
    },
    {
      id: '7',
      customer: {
        name: 'Alex Johnson',
        email: 'alex.johnson@example.com',
        avatar: 'AJ',
        initials: 'AJ',
      },
      type: 'Monthly',
      amount: '15',
      currency: 'USD',
      paymentMethod: {
        type: 'American Express',
        lastFour: '1234',
        icon: 'amex',
      },
      status: 'paid',
      paywall: 'PMCs',
      date: 'September 22, 2025',
    },
    {
      id: '8',
      customer: {
        name: 'Lisa Chen',
        email: 'lisa.chen@example.com',
        avatar: 'LC',
        initials: 'LC',
      },
      type: 'One-time',
      amount: '7',
      currency: 'USD',
      paymentMethod: {
        type: 'Visa',
        lastFour: '4567',
        icon: 'visa',
      },
      status: 'paid',
      paywall: 'Premium Access',
      date: 'September 21, 2025',
    },
    {
      id: '9',
      customer: {
        name: 'David Wilson',
        email: 'david.wilson@example.com',
        avatar: 'DW',
        initials: 'DW',
      },
      type: 'Monthly',
      amount: '12',
      currency: 'USD',
      paymentMethod: {
        type: 'Mastercard',
        lastFour: '8901',
        icon: 'mastercard',
      },
      status: 'refunded',
      paywall: 'Enterprise Plan',
      date: 'September 20, 2025',
    },
    {
      id: '10',
      customer: {
        name: 'Emma Brown',
        email: 'emma.brown@example.com',
        avatar: 'EB',
        initials: 'EB',
      },
      type: 'One-time',
      amount: '25',
      currency: 'USD',
      paymentMethod: {
        type: 'PayPal',
        lastFour: '2345',
        icon: 'paypal',
      },
      status: 'paid',
      paywall: 'VIP Membership',
      date: 'September 19, 2025',
    },
  ];

  const tabs: Tab[] = [
    { id: 'all', label: 'All', count: 1097 },
    { id: 'paid', label: 'Paid', count: 661 },
    { id: 'refunded', label: 'Refunded', count: 411 },
    { id: 'failed', label: 'Failed', count: 25 },
  ];

  const columns: TableColumn<Transaction>[] = [
    {
      key: 'customer',
      label: 'CUSTOMER',
      render: (item: Transaction) => (
        <div className="flex items-center space-x-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
            style={{ backgroundColor: getAvatarColor(item.customer.initials) }}
          >
            {item.customer.initials}
          </div>
          <div>
            <div className="font-medium text-gray-900">
              {item.customer.name}
            </div>
            <div className="text-sm text-gray-500">{item.customer.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'type',
      label: 'TYPE',
      render: (item: Transaction) => (
        <span className="text-gray-900">{item.type}</span>
      ),
    },
    {
      key: 'amount',
      label: 'AMOUNT',
      render: (item: Transaction) => (
        <span className="text-gray-900">
          ${item.amount} {item.currency}
        </span>
      ),
    },
    {
      key: 'paymentMethod',
      label: 'PAYMENT METHOD',
      render: (item: Transaction) => (
        <div className="flex items-center space-x-2">
          {item.paymentMethod ? (
            <>
              <div className="w-6 h-4 bg-gray-100 rounded flex items-center justify-center">
                {getPaymentIcon(item.paymentMethod.icon)}
              </div>
              <span className="text-gray-900">
                {item.paymentMethod.type} ending {item.paymentMethod.lastFour}
              </span>
            </>
          ) : (
            <span className="text-gray-400">-</span>
          )}
        </div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (item: Transaction) => (
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            item.status === 'paid'
              ? 'bg-green-100 text-green-800'
              : item.status === 'refunded'
              ? 'bg-gray-100 text-gray-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
        </span>
      ),
    },
    {
      key: 'paywall',
      label: 'PAYWALL',
      render: (item: Transaction) => (
        <span className="text-gray-900">{item.paywall}</span>
      ),
    },
    {
      key: 'date',
      label: 'DATE',
      render: (item: Transaction) => (
        <span className="text-gray-900">{item.date}</span>
      ),
    },
  ];

  const filterOptions: FilterOption[] = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'E-mail', type: 'text' },
    { id: 'member', label: 'Member', type: 'text' },
    { id: 'status', label: 'Status', type: 'select' },
    { id: 'paywall', label: 'Paywall', type: 'text' },
    { id: 'event', label: 'Event', type: 'text' },
    { id: 'amount', label: 'Amount', type: 'text' },
    { id: 'date', label: 'Date', type: 'text' },
  ];

  const totalItems = transactionsData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = transactionsData.slice(startIndex, endIndex);

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
      title="Transactions"
      onToggleSidebar={onToggleSidebar}
      actions={
        <div className="flex items-center space-x-3">
          <Button variant="default">Export CSV</Button>
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
        selectedCount={selectedItems.length}
        totalCount={currentData.length}
        onDeleteSelected={() => {
          // Handle delete selected
          setSelectedItems([]);
        }}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto px-5">
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

// Helper functions
const getAvatarColor = (initials: string): string => {
  const colors = [
    '#8B5CF6', // Purple
    '#F59E0B', // Orange
    '#1E40AF', // Dark Blue
    '#059669', // Dark Green
    '#92400E', // Brown
    '#0891B2', // Teal
    '#DC2626', // Red
    '#7C3AED', // Violet
  ];
  const index = initials.charCodeAt(0) % colors.length;
  return colors[index];
};

const getPaymentIcon = (iconType?: string) => {
  switch (iconType) {
    case 'visa':
      return (
        <div className="w-4 h-3 bg-blue-600 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">V</span>
        </div>
      );
    case 'mastercard':
      return (
        <div className="w-4 h-3 bg-red-600 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">M</span>
        </div>
      );
    case 'amex':
      return (
        <div className="w-4 h-3 bg-green-600 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">A</span>
        </div>
      );
    case 'paypal':
      return (
        <div className="w-4 h-3 bg-blue-500 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">P</span>
        </div>
      );
    case 'google':
      return (
        <div className="w-4 h-3 bg-gray-600 rounded-sm flex items-center justify-center">
          <span className="text-white text-xs font-bold">G</span>
        </div>
      );
    default:
      return null;
  }
};

export default Transactions;
