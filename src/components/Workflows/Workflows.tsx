import React, { useState, useEffect } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';

interface Workflow {
  id: string;
  name: string;
  status: 'Active' | 'Inactive' | 'Draft';
  type: 'Automation' | 'Bulk Action' | 'Scheduled' | 'Archived';
  createdBy: {
    name: string;
    initials: string;
    color: string;
  };
  totalRuns: number;
  lastRun: string;
}

interface WorkflowsProps {
  onToggleSidebar: () => void;
}

const Workflows: React.FC<WorkflowsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('automations');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedWorkflows, setSelectedWorkflows] = useState<string[]>([]);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedWorkflows([]);
  }, [activeTab]);

  // Mock data for workflows
  const mockWorkflows: Workflow[] = [
    {
      id: '1',
      name: 'Welcome Email Automation',
      status: 'Active',
      type: 'Automation',
      createdBy: {
        name: 'John Doe',
        initials: 'JD',
        color: 'bg-blue-500',
      },
      totalRuns: 156,
      lastRun: '2 hours ago',
    },
    {
      id: '2',
      name: 'Bulk Member Import',
      status: 'Active',
      type: 'Bulk Action',
      createdBy: {
        name: 'Jane Smith',
        initials: 'JS',
        color: 'bg-green-500',
      },
      totalRuns: 23,
      lastRun: '1 day ago',
    },
    {
      id: '3',
      name: 'Weekly Newsletter',
      status: 'Active',
      type: 'Scheduled',
      createdBy: {
        name: 'Mike Johnson',
        initials: 'MJ',
        color: 'bg-purple-500',
      },
      totalRuns: 12,
      lastRun: '3 days ago',
    },
    {
      id: '4',
      name: 'Old Content Archive',
      status: 'Inactive',
      type: 'Archived',
      createdBy: {
        name: 'Sarah Wilson',
        initials: 'SW',
        color: 'bg-orange-500',
      },
      totalRuns: 8,
      lastRun: '1 week ago',
    },
  ];

  // Filter data based on active tab
  const getFilteredData = () => {
    switch (activeTab) {
      case 'automations':
        return mockWorkflows.filter(workflow => workflow.type === 'Automation');
      case 'bulk-actions':
        return mockWorkflows.filter(
          workflow => workflow.type === 'Bulk Action'
        );
      case 'scheduled':
        return mockWorkflows.filter(workflow => workflow.type === 'Scheduled');
      case 'archived':
        return mockWorkflows.filter(workflow => workflow.type === 'Archived');
      default:
        return mockWorkflows;
    }
  };

  const filteredData = getFilteredData();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedWorkflows.length === paginatedData.length) {
      setSelectedWorkflows([]);
    } else {
      setSelectedWorkflows(paginatedData.map(workflow => workflow.id));
    }
  };

  const handleSelectItem = (workflowId: string) => {
    setSelectedWorkflows(prev =>
      prev.includes(workflowId)
        ? prev.filter(id => id !== workflowId)
        : [...prev, workflowId]
    );
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
    setSelectedWorkflows([]);
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected workflows');
    setSelectedWorkflows([]);
  };

  const tableColumns: TableColumn<Workflow>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (workflow: Workflow) => (
        <span className="text-sm text-gray-900 font-medium">
          {workflow.name}
        </span>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (workflow: Workflow) => (
        <div className="flex items-center space-x-2">
          <span
            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
              workflow.status === 'Active'
                ? 'bg-green-100 text-green-800'
                : workflow.status === 'Inactive'
                ? 'bg-gray-100 text-gray-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {workflow.status}
          </span>
          {activeTab === 'automations' && (
            <button className="text-sm text-blue-600 hover:text-blue-700">
              Toggle
            </button>
          )}
        </div>
      ),
    },
    {
      key: 'type',
      label: 'TYPE',
      render: (workflow: Workflow) => (
        <span className="text-sm text-gray-600">{workflow.type}</span>
      ),
    },
    {
      key: 'createdBy',
      label: 'CREATED BY',
      render: (workflow: Workflow) => (
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full ${workflow.createdBy.color} flex items-center justify-center`}
          >
            <span className="text-xs text-white font-medium">
              {workflow.createdBy.initials}
            </span>
          </div>
          <span className="text-sm text-gray-900">
            {workflow.createdBy.name}
          </span>
        </div>
      ),
    },
    {
      key: 'totalRuns',
      label: 'TOTAL RUNS',
      render: (workflow: Workflow) => (
        <span className="text-sm text-gray-600">{workflow.totalRuns}</span>
      ),
    },
    {
      key: 'lastRun',
      label: 'LAST RUN',
      render: (workflow: Workflow) => (
        <span className="text-sm text-gray-600">{workflow.lastRun}</span>
      ),
    },
  ];

  const tabs: Tab[] = [
    {
      id: 'automations',
      label: 'Automations',
      count: mockWorkflows.filter(w => w.type === 'Automation').length,
    },
    {
      id: 'bulk-actions',
      label: 'Bulk actions',
      count: mockWorkflows.filter(w => w.type === 'Bulk Action').length,
    },
    {
      id: 'scheduled',
      label: 'Scheduled',
      count: mockWorkflows.filter(w => w.type === 'Scheduled').length,
    },
    {
      id: 'archived',
      label: 'Archived',
      count: mockWorkflows.filter(w => w.type === 'Archived').length,
    },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Workflows"
      actions={<Button variant="default">New workflow</Button>}
    >
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Actions */}
      <Actions
        selectedCount={selectedWorkflows.length}
        totalCount={paginatedData.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-200">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedWorkflows}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={mockWorkflows.length}
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

export default Workflows;
