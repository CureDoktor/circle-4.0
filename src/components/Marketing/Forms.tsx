import React, { useState } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import { Button } from '../ui/button';
import TableEnhanced, { TableColumn } from '../ui/table-enhanced';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';

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

  const forms: Form[] = [
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
  ];

  const totalPages = Math.ceil(forms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedForms = forms.slice(startIndex, endIndex);

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
    console.log('Delete selected forms:', selectedForms);
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
      {/* Summary */}
      <div className="text-sm text-gray-600 mb-4">{forms.length} forms</div>

      {/* Actions */}
      <Actions
        selectedCount={selectedForms.length}
        totalCount={forms.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-200">
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
