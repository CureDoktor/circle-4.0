import React, { useState } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import { Button } from '../ui/button';
import TableEnhanced, { TableColumn } from '../ui/table-enhanced';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { exportToCSV } from '../../utils/csvExport';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterCondition } from '../ui/filter-modal';

interface Form {
  id: string;
  name: string;
  status: 'Published' | 'Draft';
  edited: string;
  submissions: number;
}

interface FormsProps {
  onToggleSidebar: () => void;
}

const Forms: React.FC<FormsProps> = ({ onToggleSidebar }) => {
  const [selectedForms, setSelectedForms] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  const [forms, setForms] = useState<Form[]>([
    {
      id: '1',
      name: "Ridhwana K's form",
      status: 'Published',
      edited: 'Aug 15, 2025',
      submissions: 1,
    },
    {
      id: '2',
      name: 'Unique Name form',
      status: 'Published',
      edited: 'Aug 14, 2025',
      submissions: 5,
    },
    {
      id: '3',
      name: 'Chintan - Waitlist',
      status: 'Published',
      edited: 'Aug 13, 2025',
      submissions: 3,
    },
    {
      id: '4',
      name: 'Test',
      status: 'Published',
      edited: 'Aug 14, 2025',
      submissions: 4,
    },
    {
      id: '5',
      name: 'TTTesting',
      status: 'Published',
      edited: 'Aug 11, 2025',
      submissions: 0,
    },
    {
      id: '6',
      name: 'Test form',
      status: 'Draft',
      edited: 'Aug 05, 2025',
      submissions: 0,
    },
  ]);

  // Filter configuration
  const filters = [
    {
      id: 'status',
      label: 'Status',
      type: 'select' as const,
      options: ['Published', 'Draft'],
    },
    {
      id: 'name',
      label: 'Name',
      type: 'text' as const,
    },
  ];

  // Apply filters
  const filteredForms = forms.filter(form => {
    return activeFilters.every(filter => {
      switch (filter.field) {
        case 'status': {
          return filter.operator === 'is'
            ? form.status === filter.value
            : form.status !== filter.value;
        }
        case 'name': {
          const name = form.name.toLowerCase();
          const searchValue = filter.value.toLowerCase();
          return filter.operator === 'contains'
            ? name.includes(searchValue)
            : !name.includes(searchValue);
        }
        default:
          return true;
      }
    });
  });

  const totalPages = Math.ceil(filteredForms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedForms = filteredForms.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedForms.length === paginatedForms.length) {
      setSelectedForms([]);
    } else {
      setSelectedForms(paginatedForms.map(f => f.id));
    }
  };

  const handleSelectForm = (formId: string) => {
    setSelectedForms(prev =>
      prev.includes(formId)
        ? prev.filter(id => id !== formId)
        : [...prev, formId]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedForms.length === 0) return;
    setForms(prev => prev.filter(form => !selectedForms.includes(form.id)));
    setSelectedForms([]);
  };

  const handlePublishSelected = () => {
    if (selectedForms.length === 0) return;
    setForms(prev =>
      prev.map(form =>
        selectedForms.includes(form.id)
          ? { ...form, status: 'Published' as const }
          : form
      )
    );
    setSelectedForms([]);
  };

  const handleDraftSelected = () => {
    if (selectedForms.length === 0) return;
    setForms(prev =>
      prev.map(form =>
        selectedForms.includes(form.id)
          ? { ...form, status: 'Draft' as const }
          : form
      )
    );
    setSelectedForms([]);
  };

  const tableColumns: TableColumn<Form>[] = [
    {
      key: 'name',
      label: 'FORM NAME',
      render: form => (
        <div className="font-medium text-gray-900">{form.name}</div>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: form => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            form.status === 'Published'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          {form.status}
        </span>
      ),
    },
    {
      key: 'edited',
      label: 'EDITED',
      render: form => <span className="text-gray-900">{form.edited}</span>,
    },
    {
      key: 'submissions',
      label: 'SUBMISSIONS',
      render: form => (
        <span className="text-gray-900 text-right">{form.submissions}</span>
      ),
      className: 'text-right',
    },
  ];

  return (
    <ContentContainer
      title="Forms"
      onToggleSidebar={onToggleSidebar}
      actions={
        <Button size="sm" className="flex items-center gap-2">
          New form
        </Button>
      }
    >
      {/* Filters */}
      <EnhancedFilters
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      {/* Actions */}
      <Actions
        selectedCount={selectedForms.length}
        totalCount={filteredForms.length}
        onDeleteSelected={handleDeleteSelected}
        selectedData={paginatedForms.filter(form =>
          selectedForms.includes(form.id)
        )}
        exportFilename="forms.csv"
        bulkActions={[
          {
            id: 'export',
            label: 'Export selected',
            onClick: () => {
              const selectedData = paginatedForms.filter(form =>
                selectedForms.includes(form.id)
              );
              exportToCSV(selectedData, 'forms.csv');
            },
            disabled: selectedForms.length === 0,
          },
          {
            id: 'publish',
            label: 'Publish selected',
            onClick: handlePublishSelected,
            disabled: selectedForms.length === 0,
          },
          {
            id: 'draft',
            label: 'Move to draft',
            onClick: handleDraftSelected,
            disabled: selectedForms.length === 0,
          },
          {
            id: 'delete',
            label: 'Delete selected',
            onClick: handleDeleteSelected,
            disabled: selectedForms.length === 0,
          },
        ]}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
        <TableEnhanced
          columns={tableColumns}
          data={paginatedForms}
          selectedItems={selectedForms}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectForm}
          containerClassName="bg-white"
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={forms.length}
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

export default Forms;
