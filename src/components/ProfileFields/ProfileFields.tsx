import React, { useState } from 'react';
import { mockProfileFields, ProfileField } from '../../data/mockData';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';

interface ProfileFieldsProps {
  onToggleSidebar: () => void;
}

type TabType = 'Active' | 'Archived';

const ProfileFields: React.FC<ProfileFieldsProps> = ({ onToggleSidebar }) => {
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>('Active');
  const itemsPerPage = 20;

  const currentFields = mockProfileFields.filter(
    (field: ProfileField) => field.status === activeTab
  );
  const totalPages = Math.ceil(currentFields.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFields = currentFields.slice(startIndex, endIndex);

  const activeCount = mockProfileFields.filter(
    (field: ProfileField) => field.status === 'Active'
  ).length;
  const archivedCount = mockProfileFields.filter(
    (field: ProfileField) => field.status === 'Archived'
  ).length;

  const handleSelectAll = () => {
    if (selectedFields.length === paginatedFields.length) {
      setSelectedFields([]);
    } else {
      setSelectedFields(paginatedFields.map((field: ProfileField) => field.id));
    }
  };

  const handleSelectItem = (fieldId: string) => {
    setSelectedFields(prev =>
      prev.includes(fieldId)
        ? prev.filter(id => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab as TabType);
    setCurrentPage(1);
    setSelectedFields([]);
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected fields');
    setSelectedFields([]);
  };

  // Define table columns
  const tableColumns: TableColumn<ProfileField>[] = [
    {
      key: 'fieldLabel',
      label: 'FIELD LABEL',
      render: (field: ProfileField) => (
        <div className="text-sm font-medium text-gray-900">
          {field.fieldLabel}
        </div>
      ),
    },
    {
      key: 'fieldType',
      label: 'FIELD TYPE',
      render: (field: ProfileField) => (
        <span className="text-sm text-gray-900">{field.fieldType}</span>
      ),
    },
    {
      key: 'displaysOn',
      label: 'DISPLAYS ON',
      render: (field: ProfileField) => (
        <span className="text-sm text-gray-600">
          {field.displaysOn.join(', ')}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (field: ProfileField) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            field.status === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {field.status}
        </span>
      ),
    },
  ];

  const tabs: Tab[] = [
    { id: 'Active', label: 'Active', count: activeCount },
    { id: 'Archived', label: 'Archived', count: archivedCount },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Profile fields"
      actions={<Button variant="default">New field</Button>}
    >
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Actions */}
      <Actions
        selectedCount={selectedFields.length}
        totalCount={paginatedFields.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto px-5">
        <Table
          columns={tableColumns}
          data={paginatedFields}
          selectedItems={selectedFields}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={currentFields.length}
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

export default ProfileFields;
