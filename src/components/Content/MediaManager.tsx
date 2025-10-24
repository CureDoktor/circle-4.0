import React, { useState } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterOption, FilterCondition } from '../ui/filter-modal';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';
import { applyFilters } from '../../utils/filterHelpers';

interface MediaFile {
  id: string;
  name: string;
  type: 'Image' | 'Video' | 'Document' | 'Audio';
  owner: {
    name: string;
    initials: string;
    color: string;
  };
  dateAdded: string;
  fileSize: string;
}

interface MediaManagerProps {
  onToggleSidebar: () => void;
}

const MediaManager: React.FC<MediaManagerProps> = ({ onToggleSidebar }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  // Mock data for media files
  const mockMediaFiles: MediaFile[] = [
    {
      id: '1',
      name: 'community-logo.png',
      type: 'Image',
      owner: {
        name: 'John Doe',
        initials: 'JD',
        color: 'bg-blue-500',
      },
      dateAdded: '2 hours ago',
      fileSize: '2.4 MB',
    },
    {
      id: '2',
      name: 'product-demo.mp4',
      type: 'Video',
      owner: {
        name: 'Jane Smith',
        initials: 'JS',
        color: 'bg-green-500',
      },
      dateAdded: '1 day ago',
      fileSize: '45.2 MB',
    },
    {
      id: '3',
      name: 'guidelines.pdf',
      type: 'Document',
      owner: {
        name: 'Mike Johnson',
        initials: 'MJ',
        color: 'bg-purple-500',
      },
      dateAdded: '3 days ago',
      fileSize: '1.8 MB',
    },
    {
      id: '4',
      name: 'podcast-episode.mp3',
      type: 'Audio',
      owner: {
        name: 'Sarah Wilson',
        initials: 'SW',
        color: 'bg-orange-500',
      },
      dateAdded: '1 week ago',
      fileSize: '28.7 MB',
    },
  ];

  // Filter and pagination logic
  const getFilteredData = () => {
    return applyFilters(mockMediaFiles, activeFilters);
  };

  const filteredData = getFilteredData();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedFiles.length === paginatedData.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(paginatedData.map(file => file.id));
    }
  };

  const handleSelectItem = (fileId: string) => {
    setSelectedFiles(prev =>
      prev.includes(fileId)
        ? prev.filter(id => id !== fileId)
        : [...prev, fileId]
    );
  };

  const handleDeleteSelected = () => {
    console.log('Delete selected files');
    setSelectedFiles([]);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'Image':
        return '🖼️';
      case 'Video':
        return '🎥';
      case 'Document':
        return '📄';
      case 'Audio':
        return '🎵';
      default:
        return '📁';
    }
  };

  const tableColumns: TableColumn<MediaFile>[] = [
    {
      key: 'name',
      label: 'NAME',
      render: (file: MediaFile) => (
        <div className="flex items-center space-x-3">
          <span className="text-lg">{getFileIcon(file.type)}</span>
          <span className="text-sm text-gray-900 font-medium">{file.name}</span>
        </div>
      ),
    },
    {
      key: 'type',
      label: 'TYPE',
      render: (file: MediaFile) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            file.type === 'Image'
              ? 'bg-blue-100 text-blue-800'
              : file.type === 'Video'
              ? 'bg-purple-100 text-purple-800'
              : file.type === 'Document'
              ? 'bg-green-100 text-green-800'
              : 'bg-orange-100 text-orange-800'
          }`}
        >
          {file.type}
        </span>
      ),
    },
    {
      key: 'owner',
      label: 'OWNER',
      render: (file: MediaFile) => (
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full ${file.owner.color} flex items-center justify-center`}
          >
            <span className="text-xs text-white font-medium">
              {file.owner.initials}
            </span>
          </div>
          <span className="text-sm text-gray-900">{file.owner.name}</span>
        </div>
      ),
    },
    {
      key: 'dateAdded',
      label: 'DATE ADDED',
      render: (file: MediaFile) => (
        <span className="text-sm text-gray-600">{file.dateAdded}</span>
      ),
    },
    {
      key: 'fileSize',
      label: 'FILE SIZE',
      render: (file: MediaFile) => (
        <span className="text-sm text-gray-600">{file.fileSize}</span>
      ),
    },
  ];

  const filterOptions: FilterOption[] = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'type', label: 'Type', type: 'text' },
    { id: 'owner', label: 'Owner', type: 'text' },
  ];

  // Storage usage data
  const storageUsage = {
    used: 78.1,
    total: 100,
    unit: 'GB',
  };

  const storagePercentage = (storageUsage.used / storageUsage.total) * 100;

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Media Manager"
      actions={<Button variant="default">Upload files</Button>}
    >
      {/* Storage Usage */}
      <div className="shrink-0">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Storage Usage</h3>
            <span className="text-sm text-gray-600">
              {storageUsage.used} / {storageUsage.total} {storageUsage.unit}
            </span>
          </div>
          <div className="mb-2">
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${
                  storagePercentage > 80
                    ? 'bg-red-500'
                    : storagePercentage > 60
                    ? 'bg-yellow-500'
                    : 'bg-green-500'
                }`}
                style={{ width: `${storagePercentage}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Used</span>
            <span>{storagePercentage.toFixed(1)}%</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <EnhancedFilters
        filters={filterOptions}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      {/* Actions */}
      <Actions
        selectedCount={selectedFiles.length}
        totalCount={filteredData.length}
        onDeleteSelected={handleDeleteSelected}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedFiles}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
        />
      </div>

      {/* Pagination */}
      <Pagination
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={filteredData.length}
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

export default MediaManager;
