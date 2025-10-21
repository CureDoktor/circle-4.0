import React, { useState, useEffect } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';
import { exportToCSV } from '../../utils/csvExport';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterCondition } from '../ui/filter-modal';
import WorkflowBuilder from '../WorkflowBuilder';

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
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);
  const [showWorkflowBuilder, setShowWorkflowBuilder] = useState(false);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedWorkflows([]);
  }, [activeTab]);

  // Mock data for workflows
  const [workflows, setWorkflows] = useState<Workflow[]>([
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
  ]);

  // Apply filters
  const filteredWorkflows = workflows.filter(workflow => {
    // Apply tab filter
    const tabMatch = (() => {
      switch (activeTab) {
        case 'automations':
          return workflow.type === 'Automation';
        case 'bulk-actions':
          return workflow.type === 'Bulk Action';
        case 'scheduled':
          return workflow.type === 'Scheduled';
        case 'archived':
          return workflow.type === 'Archived';
        default:
          return true;
      }
    })();

    if (!tabMatch) return false;

    // Apply custom filters
    return activeFilters.every(filter => {
      switch (filter.field) {
        case 'status': {
          return filter.operator === 'is'
            ? workflow.status === filter.value
            : workflow.status !== filter.value;
        }
        case 'name': {
          const name = workflow.name.toLowerCase();
          const searchValue = filter.value.toLowerCase();
          return filter.operator === 'contains'
            ? name.includes(searchValue)
            : !name.includes(searchValue);
        }
        case 'type': {
          return filter.operator === 'is'
            ? workflow.type === filter.value
            : workflow.type !== filter.value;
        }
        default:
          return true;
      }
    });
  });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredWorkflows.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredWorkflows.slice(startIndex, endIndex);

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

  const handleWorkflowClick = (_workflow: Workflow) => {
    setShowWorkflowBuilder(true);
  };

  const handleCloseWorkflowBuilder = () => {
    setShowWorkflowBuilder(false);
  };

  const handleDeleteSelected = () => {
    if (selectedWorkflows.length === 0) return;
    setWorkflows(prev =>
      prev.filter(workflow => !selectedWorkflows.includes(workflow.id))
    );
    setSelectedWorkflows([]);
  };

  const handleActivateSelected = () => {
    if (selectedWorkflows.length === 0) return;
    setWorkflows(prev =>
      prev.map(workflow =>
        selectedWorkflows.includes(workflow.id)
          ? { ...workflow, status: 'Active' as const }
          : workflow
      )
    );
    setSelectedWorkflows([]);
  };

  const handleDeactivateSelected = () => {
    if (selectedWorkflows.length === 0) return;
    setWorkflows(prev =>
      prev.map(workflow =>
        selectedWorkflows.includes(workflow.id)
          ? { ...workflow, status: 'Inactive' as const }
          : workflow
      )
    );
    setSelectedWorkflows([]);
  };

  // Filter configuration
  const filters = [
    {
      id: 'status',
      label: 'Status',
      type: 'select' as const,
      options: ['Active', 'Inactive', 'Draft'],
    },
    {
      id: 'name',
      label: 'Name',
      type: 'text' as const,
    },
    {
      id: 'type',
      label: 'Type',
      type: 'select' as const,
      options: ['Automation', 'Bulk Action', 'Scheduled', 'Archived'],
    },
  ];

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
      count: workflows.filter(w => w.type === 'Automation').length,
    },
    {
      id: 'bulk-actions',
      label: 'Bulk actions',
      count: workflows.filter(w => w.type === 'Bulk Action').length,
    },
    {
      id: 'scheduled',
      label: 'Scheduled',
      count: workflows.filter(w => w.type === 'Scheduled').length,
    },
    {
      id: 'archived',
      label: 'Archived',
      count: workflows.filter(w => w.type === 'Archived').length,
    },
  ];

  return (
    <>
      <ContentContainer
        onToggleSidebar={onToggleSidebar}
        title="Workflows"
        actions={<Button variant="default">New workflow</Button>}
      >
        {/* Tabs */}
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Filters */}
        <EnhancedFilters
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={setActiveFilters}
        />

        {/* Actions */}
        <Actions
          selectedCount={selectedWorkflows.length}
          totalCount={paginatedData.length}
          onDeleteSelected={handleDeleteSelected}
          selectedData={paginatedData.filter(workflow =>
            selectedWorkflows.includes(workflow.id)
          )}
          exportFilename="workflows.csv"
          bulkActions={[
            {
              id: 'export',
              label: 'Export selected',
              onClick: () => {
                const selectedData = paginatedData.filter(workflow =>
                  selectedWorkflows.includes(workflow.id)
                );
                exportToCSV(selectedData, 'workflows.csv');
              },
              disabled: selectedWorkflows.length === 0,
            },
            {
              id: 'activate',
              label: 'Activate selected',
              onClick: handleActivateSelected,
              disabled: selectedWorkflows.length === 0,
            },
            {
              id: 'deactivate',
              label: 'Deactivate selected',
              onClick: handleDeactivateSelected,
              disabled: selectedWorkflows.length === 0,
            },
            {
              id: 'delete',
              label: 'Delete selected',
              onClick: handleDeleteSelected,
              disabled: selectedWorkflows.length === 0,
            },
          ]}
        />

        {/* Table */}
        <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
          <Table
            columns={tableColumns}
            data={paginatedData}
            selectedItems={selectedWorkflows}
            onSelectAll={handleSelectAll}
            onSelectItem={handleSelectItem}
            onRowClick={handleWorkflowClick}
          />
        </div>

        {/* Pagination */}
        <Pagination
          startIndex={startIndex}
          endIndex={endIndex}
          totalItems={workflows.length}
          currentPage={currentPage}
          totalPages={totalPages}
          onPreviousPage={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          onNextPage={() =>
            setCurrentPage(prev => Math.min(prev + 1, totalPages))
          }
        />
      </ContentContainer>

      {/* Workflow Builder Modal */}
      {showWorkflowBuilder && (
        <WorkflowBuilder onClose={handleCloseWorkflowBuilder} />
      )}
    </>
  );
};

export default Workflows;
