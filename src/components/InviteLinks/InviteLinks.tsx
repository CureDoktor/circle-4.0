import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Actions from '../ui/actions';
import Pagination from '../Pagination';
import Button from '../Button';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterCondition } from '../ui/filter-modal';

interface InviteLink {
  id: string;
  url: string;
  status: 'Active' | 'Expired' | 'Paused';
  createdBy: {
    name: string;
    initials: string;
    color: string;
  };
  clicks: number;
  signups: number;
  expiresAt: string;
}

interface InviteLinksProps {
  onToggleSidebar: () => void;
}

const InviteLinks: React.FC<InviteLinksProps> = ({ onToggleSidebar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  // Mock data for invite links
  const mockInviteLinks: InviteLink[] = [
    {
      id: '1',
      url: 'https://circle.com/invite/abc123',
      status: 'Active',
      createdBy: {
        name: 'John Doe',
        initials: 'JD',
        color: 'bg-blue-500',
      },
      clicks: 45,
      signups: 12,
      expiresAt: 'Never',
    },
    {
      id: '2',
      url: 'https://circle.com/invite/def456',
      status: 'Active',
      createdBy: {
        name: 'Jane Smith',
        initials: 'JS',
        color: 'bg-green-500',
      },
      clicks: 23,
      signups: 8,
      expiresAt: '2024-12-31',
    },
    {
      id: '3',
      url: 'https://circle.com/invite/ghi789',
      status: 'Expired',
      createdBy: {
        name: 'Mike Johnson',
        initials: 'MJ',
        color: 'bg-purple-500',
      },
      clicks: 67,
      signups: 15,
      expiresAt: '2024-01-15',
    },
    {
      id: '4',
      url: 'https://circle.com/invite/jkl012',
      status: 'Paused',
      createdBy: {
        name: 'Sarah Wilson',
        initials: 'SW',
        color: 'bg-orange-500',
      },
      clicks: 12,
      signups: 3,
      expiresAt: '2024-06-30',
    },
  ];

  // Apply filters
  const filteredLinks = mockInviteLinks.filter(link => {
    return activeFilters.every(filter => {
      switch (filter.field) {
        case 'status': {
          return filter.operator === 'is'
            ? link.status === filter.value
            : link.status !== filter.value;
        }
        case 'url': {
          const url = link.url.toLowerCase();
          const searchValue = filter.value.toLowerCase();
          return filter.operator === 'contains'
            ? url.includes(searchValue)
            : !url.includes(searchValue);
        }
        case 'createdBy': {
          const createdBy = link.createdBy.name.toLowerCase();
          const createdBySearchValue = filter.value.toLowerCase();
          return filter.operator === 'contains'
            ? createdBy.includes(createdBySearchValue)
            : !createdBy.includes(createdBySearchValue);
        }
        default:
          return true;
      }
    });
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredLinks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredLinks.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedLinks.length === paginatedData.length) {
      setSelectedLinks([]);
    } else {
      setSelectedLinks(paginatedData.map(link => link.id));
    }
  };

  const handleSelectItem = (linkId: string) => {
    setSelectedLinks(prev =>
      prev.includes(linkId)
        ? prev.filter(id => id !== linkId)
        : [...prev, linkId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected links');
    setSelectedLinks([]);
  };

  // Filter configuration
  const filters = [
    {
      id: 'status',
      label: 'Status',
      type: 'select' as const,
      options: ['Active', 'Expired', 'Paused'],
    },
    {
      id: 'url',
      label: 'URL',
      type: 'text' as const,
    },
    {
      id: 'createdBy',
      label: 'Created By',
      type: 'text' as const,
    },
  ];

  const handleCopySelected = () => {
    if (selectedLinks.length === 0) return;
    const selectedData = mockInviteLinks.filter(link =>
      selectedLinks.includes(link.id)
    );
    const urls = selectedData.map(link => link.url).join('\n');
    navigator.clipboard.writeText(urls);
    console.log('Copied invite links to clipboard');
  };

  const handleArchiveSelected = () => {
    if (selectedLinks.length === 0) return;
    console.log('Archive selected invite links:', selectedLinks);
    setSelectedLinks([]);
  };

  const handleCopyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    console.log('URL copied to clipboard');
  };

  const tableColumns: TableColumn<InviteLink>[] = [
    {
      key: 'url',
      label: 'URL',
      render: (link: InviteLink) => (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-900 font-medium">{link.url}</span>
          <button
            onClick={() => handleCopyUrl(link.url)}
            className="text-gray-400 hover:text-gray-600"
          >
            📋
          </button>
        </div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (link: InviteLink) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            link.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : link.status === 'Expired'
              ? 'bg-red-100 text-red-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {link.status}
        </span>
      ),
    },
    {
      key: 'createdBy',
      label: 'CREATED BY',
      render: (link: InviteLink) => (
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full ${link.createdBy.color} flex items-center justify-center`}
          >
            <span className="text-xs text-white font-medium">
              {link.createdBy.initials}
            </span>
          </div>
          <span className="text-sm text-gray-900">{link.createdBy.name}</span>
        </div>
      ),
    },
    {
      key: 'clicks',
      label: 'CLICKS',
      render: (link: InviteLink) => (
        <span className="text-sm text-gray-600">{link.clicks}</span>
      ),
    },
    {
      key: 'signups',
      label: 'SIGNUPS',
      render: (link: InviteLink) => (
        <span className="text-sm text-gray-600">{link.signups}</span>
      ),
    },
    {
      key: 'expiresAt',
      label: 'EXPIRES AT',
      render: (link: InviteLink) => (
        <span className="text-sm text-gray-600">{link.expiresAt}</span>
      ),
    },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Invite links"
      actions={<Button variant="primary">New invite link</Button>}
    >
      {/* Filters */}
      <EnhancedFilters
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      {/* Actions */}
      <Actions
        selectedCount={selectedLinks.length}
        totalCount={paginatedData.length}
        onDeleteSelected={handleDeleteSelected}
        bulkActions={[
          {
            id: 'copy',
            label: 'Copy URLs',
            onClick: handleCopySelected,
            disabled: selectedLinks.length === 0,
          },
          {
            id: 'archive',
            label: 'Archive selected',
            onClick: handleArchiveSelected,
            disabled: selectedLinks.length === 0,
          },
          {
            id: 'delete',
            label: 'Delete selected',
            onClick: handleDeleteSelected,
            disabled: selectedLinks.length === 0,
          },
        ]}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedLinks}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockInviteLinks.length}
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

export default InviteLinks;
