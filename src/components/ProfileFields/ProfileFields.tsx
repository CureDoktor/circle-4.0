import React, { useState, useRef, useEffect } from 'react';
import { mockProfileFields, ProfileField } from '../../data/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';

interface ProfileFieldsProps {
  onToggleSidebar: () => void;
}

type TabType = 'Active' | 'Archived';

const ProfileFields: React.FC<ProfileFieldsProps> = ({ onToggleSidebar }) => {
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>('Active');
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showEditDropdown, setShowEditDropdown] = useState(false);
  const bulkActionsRef = useRef<HTMLDivElement>(null);
  const editDropdownRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 20;

  const currentFields = mockProfileFields.filter(
    field => field.status === activeTab
  );
  const totalPages = Math.ceil(currentFields.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedFields = currentFields.slice(startIndex, endIndex);

  const activeCount = mockProfileFields.filter(
    field => field.status === 'Active'
  ).length;
  const archivedCount = mockProfileFields.filter(
    field => field.status === 'Archived'
  ).length;

  const handleSelectAll = () => {
    if (selectedFields.length === paginatedFields.length) {
      setSelectedFields([]);
    } else {
      setSelectedFields(paginatedFields.map(field => field.id));
    }
  };

  const handleSelectField = (fieldId: string) => {
    setSelectedFields(prev =>
      prev.includes(fieldId)
        ? prev.filter(id => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedFields([]);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        bulkActionsRef.current &&
        !bulkActionsRef.current.contains(event.target as Node)
      ) {
        setShowBulkActions(false);
      }
      if (
        editDropdownRef.current &&
        !editDropdownRef.current.contains(event.target as Node)
      ) {
        setShowEditDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Define table columns
  const columns: TableColumn<ProfileField>[] = [
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
        <span className="text-sm text-gray-900">
          {field.displaysOn.join(', ')}
        </span>
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
            <h1 className="text-2xl font-bold text-gray-900">Profile Fields</h1>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition-colors text-sm font-medium">
            <span>Add field</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <div className="border-b border-gray-200 mb-6 overflow-x-auto">
          <div className="flex min-w-max">
            <button
              onClick={() => handleTabChange('Active')}
              className={`py-3 px-4 font-medium border border-gray-100 text-sm transition-colors whitespace-nowrap ${
                activeTab === 'Active'
                  ? 'border-1 border-gray-300 border-b-0 rounded-t-lg text-gray-900 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Active {activeCount}
            </button>
            <button
              onClick={() => handleTabChange('Archived')}
              className={`py-3 px-4 font-medium border border-gray-100 text-sm transition-colors whitespace-nowrap ${
                activeTab === 'Archived'
                  ? 'border-1 border-gray-300 border-b-0 rounded-t-lg text-gray-900 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Archived {archivedCount}
            </button>
          </div>
        </div>
      </div>

      {/* Summary and Actions */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-gray-900">
            {currentFields.length} profile fields
          </div>
          <div className="flex items-center space-x-3">
            {/* Bulk Actions Dropdown */}
            {selectedFields.length > 0 && (
              <div className="relative" ref={bulkActionsRef}>
                <button
                  onClick={() => setShowBulkActions(!showBulkActions)}
                  className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium flex items-center space-x-2"
                >
                  <span>Bulk actions</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
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
                {showBulkActions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <div className="py-1">
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Archive selected
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Delete selected
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Edit Dropdown */}
            <div className="relative" ref={editDropdownRef}>
              <button
                onClick={() => setShowEditDropdown(!showEditDropdown)}
                className="bg-white text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm font-medium flex items-center space-x-2"
              >
                <span>Edit</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showEditDropdown ? 'rotate-180' : ''
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
              {showEditDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <div className="py-1">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Edit field
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Duplicate field
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Archive field
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
        <Table<ProfileField>
          columns={columns}
          data={paginatedFields}
          selectedItems={selectedFields}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectField}
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
    </div>
  );
};

export default ProfileFields;
