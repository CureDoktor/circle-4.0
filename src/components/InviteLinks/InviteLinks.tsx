import React, { useState } from 'react';
import { mockInviteLinks, InviteLink } from '../../data/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';

interface InviteLinksProps {
  onToggleSidebar: () => void;
}

const InviteLinks: React.FC<InviteLinksProps> = ({ onToggleSidebar }) => {
  const [selectedLinks, setSelectedLinks] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(mockInviteLinks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLinks = mockInviteLinks.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedLinks.length === paginatedLinks.length) {
      setSelectedLinks([]);
    } else {
      setSelectedLinks(paginatedLinks.map(link => link.id));
    }
  };

  const handleSelectLink = (linkId: string) => {
    setSelectedLinks(prev =>
      prev.includes(linkId)
        ? prev.filter(id => id !== linkId)
        : [...prev, linkId]
    );
  };

  // Define table columns
  const columns: TableColumn<InviteLink>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (link: InviteLink) => (
        <div className="text-sm font-medium text-gray-900">{link.name}</div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (link: InviteLink) => (
        <span
          className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
            link.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {link.status}
        </span>
      ),
    },
    {
      key: 'membersJoined',
      label: 'MEMBERS JOINED',
      render: (link: InviteLink) => (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-900">{link.membersJoined}</span>
          <svg
            className="w-4 h-4 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ),
    },
    {
      key: 'spaces',
      label: 'SPACES',
      render: (link: InviteLink) => (
        <span className="text-sm text-gray-900">{link.spaces}</span>
      ),
    },
    {
      key: 'spaceGroups',
      label: 'SPACE GROUPS',
      render: (link: InviteLink) => (
        <span className="text-sm text-gray-900">{link.spaceGroups}</span>
      ),
    },
    {
      key: 'tags',
      label: 'TAGS',
      render: (link: InviteLink) => (
        <span className="text-sm text-gray-900">{link.tags}</span>
      ),
    },
    {
      key: 'actions',
      label: '',
      render: (_link: InviteLink) => (
        <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900 transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span>Copy link</span>
        </button>
      ),
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
            <h1 className="text-2xl font-bold text-gray-900">Invite Links</h1>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition-colors w-full sm:w-auto text-sm font-medium">
            <span>New invite link</span>
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="px-6 mb-6">
        <div className="text-sm font-medium text-gray-900">
          {mockInviteLinks.length} invite links
        </div>
      </div>

      {/* Table */}
      <div className="mx-6">
        <Table<InviteLink>
          columns={columns}
          data={paginatedLinks}
          selectedItems={selectedLinks}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectLink}
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
    </div>
  );
};

export default InviteLinks;
