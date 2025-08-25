import React, { useState, useRef, useEffect } from 'react';
import { mockActivityLogs, ActivityLog } from '../../data/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';

interface ActivityLogsProps {
  onToggleSidebar: () => void;
}

const ActivityLogs: React.FC<ActivityLogsProps> = ({ onToggleSidebar }) => {
  const [selectedLogs, setSelectedLogs] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showEditDropdown, setShowEditDropdown] = useState(false);
  const bulkActionsRef = useRef<HTMLDivElement>(null);
  const editDropdownRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(mockActivityLogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLogs = mockActivityLogs.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedLogs.length === paginatedLogs.length) {
      setSelectedLogs([]);
    } else {
      setSelectedLogs(paginatedLogs.map(log => log.id));
    }
  };

  const handleSelectLog = (logId: string) => {
    setSelectedLogs(prev =>
      prev.includes(logId) ? prev.filter(id => id !== logId) : [...prev, logId]
    );
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
  const columns: TableColumn<ActivityLog>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (log: ActivityLog) => (
        <div className="flex items-center space-x-3">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium"
            style={{ backgroundColor: log.nameColor }}
          >
            {log.nameInitials}
          </div>
          <span className="text-sm font-medium text-gray-900">{log.name}</span>
        </div>
      ),
    },
    {
      key: 'event',
      label: 'EVENT',
      render: (log: ActivityLog) => (
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-900">{log.event}</span>
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
      key: 'entityType',
      label: 'ENTITY TYPE',
      render: (log: ActivityLog) => (
        <span className="text-sm text-gray-900">{log.entityType}</span>
      ),
    },
    {
      key: 'entityValue',
      label: 'ENTITY VALUE',
      render: (log: ActivityLog) => (
        <span className="text-sm text-gray-900">{log.entityValue}</span>
      ),
    },
    {
      key: 'performedBy',
      label: 'PERFORMED BY',
      render: (log: ActivityLog) => (
        <span className="text-sm text-gray-900">{log.performedBy}</span>
      ),
    },
    {
      key: 'source',
      label: 'SOURCE',
      render: (log: ActivityLog) => (
        <span className="text-sm text-gray-900">{log.source}</span>
      ),
    },
    {
      key: 'date',
      label: 'DATE',
      render: (log: ActivityLog) => (
        <span className="text-sm text-gray-500">{log.date}</span>
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
            <h1 className="text-2xl font-bold text-gray-900">Activity logs</h1>
          </div>
          <button className="bg-black text-white px-6 py-2.5 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition-colors text-sm font-medium">
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 mb-6">
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <span>+</span>
            <span>Name</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <span>+</span>
            <span>Role</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-200 rounded-lg text-sm text-gray-900">
            <span>×</span>
            <span>Event Invited to community, Removed from comm... + 8</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <span>+</span>
            <span>Entity type</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <span>+</span>
            <span>Entity value</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <span>+</span>
            <span>Performed by</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <span>+</span>
            <span>Source</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <span>+</span>
            <span>Date</span>
          </button>
          <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-colors">
            <span>+</span>
            <span>Add filter</span>
          </button>
        </div>
      </div>

      {/* Summary and Actions */}
      <div className="px-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium text-gray-900">
            {mockActivityLogs.length} events
          </div>
          <div className="flex items-center space-x-3">
            {/* Bulk Actions Dropdown */}
            {selectedLogs.length > 0 && (
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
                        Delete selected
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                        Export selected
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
                      Edit log
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Duplicate log
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                      Delete log
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
        <Table<ActivityLog>
          columns={columns}
          data={paginatedLogs}
          selectedItems={selectedLogs}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectLog}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockActivityLogs.length}
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

export default ActivityLogs;
