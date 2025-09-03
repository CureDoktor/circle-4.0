import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterOption, FilterCondition } from '../ui/filter-modal';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';
import { applyFilters } from '../../utils/filterHelpers';

interface Space {
  id: string;
  name: string;
  type: 'Public' | 'Private' | 'Secret';
  members: number;
  moderators: number;
  access: 'Open' | 'Approval Required' | 'Invite Only';
  whoCanPost: 'All members' | 'Moderators only' | 'Admins only';
  membersCanInvite: boolean;
  hideMemberCount: boolean;
  createdBy: {
    name: string;
    initials: string;
    color: string;
  };
  createdAt: string;
}

interface SpacesProps {
  onToggleSidebar: () => void;
}

const Spaces: React.FC<SpacesProps> = ({ onToggleSidebar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSpaces, setSelectedSpaces] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  // Mock data for spaces
  const mockSpaces: Space[] = [
    {
      id: '1',
      name: 'General Discussion',
      type: 'Public',
      members: 1250,
      moderators: 8,
      access: 'Open',
      whoCanPost: 'All members',
      membersCanInvite: true,
      hideMemberCount: false,
      createdBy: {
        name: 'John Doe',
        initials: 'JD',
        color: 'bg-blue-500',
      },
      createdAt: 'Jan 15, 2024',
    },
    {
      id: '2',
      name: 'Premium Content',
      type: 'Private',
      members: 450,
      moderators: 5,
      access: 'Invite Only',
      whoCanPost: 'Moderators only',
      membersCanInvite: false,
      hideMemberCount: true,
      createdBy: {
        name: 'Jane Smith',
        initials: 'JS',
        color: 'bg-green-500',
      },
      createdAt: 'Feb 3, 2024',
    },
    {
      id: '3',
      name: 'Admin Only',
      type: 'Secret',
      members: 12,
      moderators: 3,
      access: 'Invite Only',
      whoCanPost: 'Admins only',
      membersCanInvite: false,
      hideMemberCount: true,
      createdBy: {
        name: 'Mike Johnson',
        initials: 'MJ',
        color: 'bg-purple-500',
      },
      createdAt: 'Mar 10, 2024',
    },
  ];

  // Filter and pagination logic
  const getFilteredData = () => {
    return applyFilters(mockSpaces, activeFilters);
  };

  const filteredData = getFilteredData();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedSpaces.length === paginatedData.length) {
      setSelectedSpaces([]);
    } else {
      setSelectedSpaces(paginatedData.map(space => space.id));
    }
  };

  const handleSelectItem = (spaceId: string) => {
    setSelectedSpaces(prev =>
      prev.includes(spaceId)
        ? prev.filter(id => id !== spaceId)
        : [...prev, spaceId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected spaces');
    setSelectedSpaces([]);
  };

  const tableColumns: TableColumn<Space>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (space: Space) => (
        <span className="text-sm text-gray-900 font-medium">{space.name}</span>
      ),
    },
    {
      key: 'type',
      label: 'TYPE',
      render: (space: Space) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            space.type === 'Public'
              ? 'bg-green-100 text-green-800'
              : space.type === 'Private'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {space.type}
        </span>
      ),
    },
    {
      key: 'members',
      label: 'MEMBERS',
      render: (space: Space) => (
        <span className="text-sm text-gray-600">{space.members}</span>
      ),
    },
    {
      key: 'moderators',
      label: 'MODERATORS',
      render: (space: Space) => (
        <span className="text-sm text-gray-600">{space.moderators}</span>
      ),
    },
    {
      key: 'access',
      label: 'ACCESS',
      render: (space: Space) => (
        <span className="text-sm text-gray-600">{space.access}</span>
      ),
    },
    {
      key: 'whoCanPost',
      label: 'WHO CAN POST',
      render: (space: Space) => (
        <span className="text-sm text-gray-600">{space.whoCanPost}</span>
      ),
    },
    {
      key: 'membersCanInvite',
      label: 'MEMBERS CAN INVITE',
      render: (space: Space) => (
        <span className="text-sm text-gray-600">
          {space.membersCanInvite ? 'Yes' : 'No'}
        </span>
      ),
    },
    {
      key: 'hideMemberCount',
      label: 'HIDE MEMBER COUNT',
      render: (space: Space) => (
        <span className="text-sm text-gray-600">
          {space.hideMemberCount ? 'Yes' : 'No'}
        </span>
      ),
    },
  ];

  const filterOptions: FilterOption[] = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'type', label: 'Type', type: 'text' },
    { id: 'access', label: 'Access', type: 'text' },
    { id: 'spaceGroupAccess', label: 'Space group access', type: 'text' },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Spaces"
      actions={<Button variant="default">New space</Button>}
    >
      {/* Filters */}
      <EnhancedFilters
        filters={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      {/* Actions */}
      <Actions
        selectedCount={selectedSpaces.length}
        totalCount={filteredData.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto px-5">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedSpaces}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={filteredData.length}
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

export default Spaces;
