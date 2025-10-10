import React, { useState } from 'react';
import { mockPages, Page } from '../../data/Content/mockData';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';
import TemplateLibrary from '../PageEditor/TemplateLibrary';

interface ContentProps {
  onToggleSidebar: () => void;
  title?: string;
  createButtonText?: string;
  filters?: string[];
  columns?: string[];
  icon?: React.ReactNode;
  onPageClick?: (pageId: string) => void;
  onCreatePage?: (templateId?: string) => void;
}

const Content: React.FC<ContentProps> = ({
  onToggleSidebar,
  title = 'Pages',
  createButtonText = 'Create page',
  onPageClick,
  onCreatePage,
}) => {
  const [pages] = useState(mockPages);
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(pages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = pages.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedPages.length === paginatedData.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages(paginatedData.map(page => page.id));
    }
  };

  const handleSelectItem = (pageId: string) => {
    setSelectedPages(prev =>
      prev.includes(pageId)
        ? prev.filter(id => id !== pageId)
        : [...prev, pageId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected pages');
    setSelectedPages([]);
  };

  const handleCreatePageClick = () => {
    setShowTemplateModal(true);
  };

  const handleTemplateSelect = (templateId: string) => {
    console.log('Content: Template selected:', templateId);
    setShowTemplateModal(false);
    onCreatePage?.(templateId); // Pass the templateId to open editor with selected template
  };

  // Define table columns
  const tableColumns: TableColumn<Page>[] = [
    {
      key: 'title',
      label: 'Name',
      render: (page: Page) => (
        <div className="text-sm font-medium text-gray-900">{page.title}</div>
      ),
    },
    {
      key: 'status',
      label: 'Status',
      render: (page: Page) => (
        <div className="flex items-center space-x-2">
          {page.status === 'Published' ? (
            <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                  fill="#000000"
                />
              </svg>
              <span className=" font-medium">Published</span>
            </span>
          ) : (
            <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border border-gray-200 text-gray-800">
              Not published
            </span>
          )}
        </div>
      ),
    },
    {
      key: 'author',
      label: 'Author',
      render: (page: Page) => (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xs text-gray-600">
              {page.author.name
                .split(' ')
                .map(n => n[0])
                .join('')}
            </span>
          </div>
          <span className="text-sm text-gray-900">{page.author.name}</span>
        </div>
      ),
    },
    {
      key: 'updated',
      label: 'Updated',
      render: (page: Page) => (
        <div className="text-sm text-gray-600">{page.updated}</div>
      ),
    },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title={title}
      actions={
        <Button variant="default" onClick={handleCreatePageClick}>
          {createButtonText}
        </Button>
      }
    >
      {/* Actions */}
      <Actions
        selectedCount={selectedPages.length}
        totalCount={paginatedData.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-200">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedPages}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
          onRowClick={item => onPageClick?.(item.id)}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={pages.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onPreviousPage={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        onNextPage={() =>
          setCurrentPage(prev => Math.min(prev + 1, totalPages))
        }
      />

      {/* Template Library Modal */}
      {showTemplateModal && (
        <TemplateLibrary
          onClose={() => setShowTemplateModal(false)}
          onSelectTemplate={handleTemplateSelect}
        />
      )}
    </ContentContainer>
  );
};

export default Content;
