import React, { useState, useEffect } from 'react';
import { mockPages, Page } from '../../data/Content/mockData';
import { Table, TableColumn } from '../Table';
import { Pagination } from '../Table';

interface ContentProps {
  onToggleSidebar: () => void;
  title?: string;
  createButtonText?: string;
  filters?: string[];
  columns?: string[];
  icon?: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
  onToggleSidebar,
  title = 'Pages',
  createButtonText = 'Create page',
  filters = [
    '+ Title',
    '+ Author',
    '+ Spaces',
    '+ Tag',
    '+ Published',
    '+ Add filter',
  ],

  icon,
}) => {
  const [pages, setPages] = useState(mockPages);
  const [selectedPages, setSelectedPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showMoreActions, setShowMoreActions] = useState(false);
  const itemsPerPage = 20;

  const totalPages = Math.ceil(pages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = pages.slice(startIndex, endIndex);

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
        <span className="text-sm text-gray-500">{page.updated}</span>
      ),
    },
  ];

  const handleSelectAll = () => {
    if (selectedPages.length === paginatedData.length) {
      setSelectedPages([]);
    } else {
      setSelectedPages(paginatedData.map(page => page.id));
    }
  };

  const handleSelectPage = (pageId: string) => {
    setSelectedPages(prev =>
      prev.includes(pageId)
        ? prev.filter(id => id !== pageId)
        : [...prev, pageId]
    );
  };

  const handleBulkPublish = () => {
    setPages(prevPages =>
      prevPages.map(page =>
        selectedPages.includes(page.id)
          ? { ...page, status: 'Published' as const }
          : page
      )
    );
    setSelectedPages([]);
    setShowBulkActions(false);
  };

  const handleBulkUnpublish = () => {
    setPages(prevPages =>
      prevPages.map(page =>
        selectedPages.includes(page.id)
          ? { ...page, status: 'Not published' as const }
          : page
      )
    );
    setSelectedPages([]);
    setShowBulkActions(false);
  };

  const handleBulkDelete = () => {
    setPages(prevPages =>
      prevPages.filter(page => !selectedPages.includes(page.id))
    );
    setSelectedPages([]);
    setShowBulkActions(false);
  };

  const handleClearSelection = () => {
    setSelectedPages([]);
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

  return (
    <div className="bg-white h-full rounded-lg shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
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
              {icon || (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4V16C16 17.1046 15.1046 18 14 18H6C4.89543 18 4 17.1046 4 16V4Z"
                    fill="#6B7280"
                  />
                  <path d="M6 6H14V8H6V6Z" fill="white" />
                  <path d="M6 10H14V12H6V10Z" fill="white" />
                  <path d="M6 14H10V16H6V14Z" fill="white" />
                </svg>
              )}
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>
          </div>
          <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
            {createButtonText}
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4">
        <div className="flex items-center space-x-2">
          {filters.map((filter, index) => (
            <button
              key={index}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Summary and Actions */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {pages.length}{' '}
            {title.toLowerCase().includes('page')
              ? 'pages'
              : title.toLowerCase().includes('group')
              ? 'groups'
              : title.toLowerCase().includes('segment')
              ? 'segments'
              : title.toLowerCase().includes('log')
              ? 'logs'
              : title.toLowerCase().includes('link')
              ? 'links'
              : title.toLowerCase().includes('flow')
              ? 'flows'
              : title.toLowerCase().includes('tag')
              ? 'tags'
              : title.toLowerCase().includes('field')
              ? 'fields'
              : title.toLowerCase().includes('rule')
              ? 'rules'
              : 'items'}
          </span>
          <div className="flex items-center space-x-3">
            {selectedPages.length > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {selectedPages.length} selected
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
                disabled={selectedPages.length === 0}
              >
                <span>Bulk actions ({selectedPages.length})</span>
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

              {showBulkActions && selectedPages.length > 0 && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10 animate-modalSlideIn">
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-3">
                      Bulk actions for {selectedPages.length} selected pages
                    </h3>

                    {/* Publish/Unpublish Section */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-700 mb-2">
                        Status
                      </h4>
                      <div className="space-y-2">
                        <button
                          onClick={handleBulkPublish}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                        >
                          ✓ Publish pages
                        </button>
                        <button
                          onClick={handleBulkUnpublish}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                        >
                          ✗ Unpublish pages
                        </button>
                      </div>
                    </div>

                    {/* Delete Section */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-700 mb-2">
                        Delete
                      </h4>
                      <button
                        onClick={handleBulkDelete}
                        className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-all duration-200"
                      >
                        Delete selected pages
                      </button>
                    </div>

                    {/* Clear Selection */}
                    <button
                      onClick={handleClearSelection}
                      className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-all duration-200"
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
                    {selectedPages.length === 1 ? (
                      <button
                        onClick={() => setShowMoreActions(false)}
                        className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-all duration-200"
                      >
                        Edit selected page
                      </button>
                    ) : selectedPages.length > 1 ? (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Select only one page to edit
                      </div>
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Select a page to edit
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
        <Table<Page>
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedPages}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectPage}
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
    </div>
  );
};

export default Content;
