import React, { useState, useEffect } from 'react';
import {
  mockWorkflows,
  getWorkflowCounts,
  Workflow,
} from '../../data/Workflows/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';
import Avatar from '../ManageAudience/Avatar';

interface WorkflowsProps {
  onToggleSidebar: () => void;
}

type TabType = 'automations' | 'bulk-actions' | 'scheduled' | 'archived';

const Workflows: React.FC<WorkflowsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState<TabType>('automations');
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const itemsPerPage = 20;

  const workflowCounts = getWorkflowCounts();

  const getCurrentWorkflows = (): Workflow[] => {
    if (activeTab === 'automations') {
      return mockWorkflows.filter(workflow => workflow.type === 'automation');
    } else if (activeTab === 'bulk-actions') {
      return mockWorkflows.filter(workflow => workflow.type === 'bulk-action');
    } else if (activeTab === 'scheduled') {
      return mockWorkflows.filter(workflow => workflow.type === 'scheduled');
    } else if (activeTab === 'archived') {
      return mockWorkflows.filter(workflow => workflow.type === 'archived');
    }
    return mockWorkflows;
  };

  const currentWorkflows = getCurrentWorkflows();
  const totalPages = Math.ceil(currentWorkflows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedWorkflows = currentWorkflows.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedWorkflows.length === paginatedWorkflows.length) {
      setSelectedWorkflows([]);
    } else {
      setSelectedWorkflows(paginatedWorkflows.map(workflow => workflow.id));
    }
  };

  const handleSelectWorkflow = (workflowId: string) => {
    setSelectedWorkflows(prev =>
      prev.includes(workflowId)
        ? prev.filter(id => id !== workflowId)
        : [...prev, workflowId]
    );
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedWorkflows([]);
    setShowBulkActions(false);
    setShowMoreActions(false);
  };

  const handleBulkActivate = () => {
    // Handle bulk activate
    setSelectedWorkflows([]);
    setShowBulkActions(false);
  };

  const handleBulkDeactivate = () => {
    // Handle bulk deactivate
    setSelectedWorkflows([]);
    setShowBulkActions(false);
  };

  const handleBulkDelete = () => {
    // Handle bulk delete
    setSelectedWorkflows([]);
    setShowBulkActions(false);
  };

  const handleClearSelection = () => {
    setSelectedWorkflows([]);
    setShowBulkActions(false);
    setShowMoreActions(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        !target.closest('.bulk-actions-dropdown') &&
        !target.closest('.more-actions-dropdown')
      ) {
        setShowBulkActions(false);
        setShowMoreActions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tabs = [
    {
      id: 'automations',
      label: 'Automations',
      count: workflowCounts.automations,
    },
    {
      id: 'bulk-actions',
      label: 'Bulk actions',
      count: workflowCounts.bulkActions,
    },
    { id: 'scheduled', label: 'Scheduled', count: workflowCounts.scheduled },
    { id: 'archived', label: 'Archived', count: workflowCounts.archived },
  ];

  // Define table columns
  const columns: TableColumn<Workflow>[] = [
    {
      key: 'name',
      label: 'Name',
      render: (workflow: Workflow) => (
        <div className="text-sm font-medium text-gray-900">{workflow.name}</div>
      ),
    },
    {
      key: 'createdBy',
      label: 'Created by',
      render: (workflow: Workflow) => (
        <div className="flex items-center space-x-3">
          <Avatar
            src={workflow.createdBy.avatar}
            alt={workflow.createdBy.name}
            size="sm"
          />
          <span className="text-sm text-gray-900">
            {workflow.createdBy.name}
          </span>
        </div>
      ),
    },
    {
      key: 'isActive',
      label: 'Active',
      render: (workflow: Workflow) => (
        <button
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            workflow.isActive ? 'bg-gray-900' : 'bg-gray-200'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              workflow.isActive ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white h-full rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
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
            <div className="flex items-center space-x-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                  fill="#6B7280"
                />
              </svg>
              <h1 className="text-2xl font-bold text-gray-900">
                All workflows
              </h1>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            New workflow
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6 overflow-x-auto mx-6">
        <div className="flex min-w-max">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id as TabType)}
              className={`py-3 px-4 font-medium border border-gray-100 text-sm transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-1 border-gray-300 border-b-0 rounded-t-lg text-gray-900 bg-white'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label} {tab.count.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Summary and Actions */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {currentWorkflows.length} workflows
          </span>
          <div className="flex items-center space-x-3">
            {selectedWorkflows.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {selectedWorkflows.length} selected
                </span>
                <button
                  onClick={handleClearSelection}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              </div>
            )}

            {/* Bulk Actions Dropdown */}
            <div className="relative bulk-actions-dropdown">
              <button
                onClick={() => setShowBulkActions(!showBulkActions)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm transition-all duration-200 flex items-center justify-center space-x-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={selectedWorkflows.length === 0}
              >
                <span>Bulk actions</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
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

              {showBulkActions && selectedWorkflows.length > 0 && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-modalSlideIn">
                  <div className="py-1">
                    <button
                      onClick={handleBulkActivate}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Activate workflows
                    </button>
                    <button
                      onClick={handleBulkDeactivate}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Deactivate workflows
                    </button>
                    <button
                      onClick={handleBulkDelete}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Delete workflows
                    </button>
                    <button
                      onClick={handleClearSelection}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      Clear selection
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* More Actions Dropdown */}
            <div className="relative more-actions-dropdown">
              <button
                onClick={() => setShowMoreActions(!showMoreActions)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-200 transition-all duration-200 flex items-center justify-center space-x-1"
              >
                <span>More</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showMoreActions ? 'rotate-180' : ''
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

              {showMoreActions && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-modalSlideIn">
                  <div className="p-2">
                    {selectedWorkflows.length === 1 ? (
                      <button
                        onClick={() => setShowMoreActions(false)}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                      >
                        Edit selected workflow
                      </button>
                    ) : selectedWorkflows.length > 1 ? (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Select only one workflow to edit
                      </div>
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Select a workflow to edit
                      </div>
                    )}
                    <button
                      onClick={() => setShowMoreActions(false)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                    >
                      Export data
                    </button>
                    <button
                      onClick={() => setShowMoreActions(false)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                    >
                      Import data
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
        <Table<Workflow>
          columns={columns}
          data={paginatedWorkflows}
          selectedItems={selectedWorkflows}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectWorkflow}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={currentWorkflows.length}
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

export default Workflows;
