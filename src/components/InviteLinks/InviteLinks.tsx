import React, { useState } from 'react';
import { Table, TableColumn } from '../Table';
import ContentContainer from '../ContentContainer';
import Actions from '../Actions';
import Pagination from '../Pagination';
import Button from '../Button';

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

  const itemsPerPage = 10;
  const totalPages = Math.ceil(mockInviteLinks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = mockInviteLinks.slice(startIndex, endIndex);

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
      {/* Content count */}
      <div className="flex-shrink-0">
        <span className="text-sm text-gray-600">
          {mockInviteLinks.length} invite links
        </span>
      </div>

      {/* Actions */}
      <Actions
        selectedCount={selectedLinks.length}
        totalCount={paginatedData.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto">
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
