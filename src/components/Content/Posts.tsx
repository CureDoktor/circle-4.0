import React, { useState, useEffect } from 'react';
import { TableEnhanced as Table, TableColumn } from '../ui';
import ContentContainer from '../ContentContainer';
import Tabs, { Tab } from '../Tabs';
import EnhancedFilters from '../ui/enhanced-filters';
import { FilterCondition } from '../ui/filter-modal';
import Actions from '../ui/actions';
import Pagination from '../ui/pagination';
import { Button } from '../ui';
import { applyFilters } from '../../utils/filterHelpers';

interface Post {
  id: string;
  title: string;
  status: 'Published' | 'Draft' | 'Scheduled';
  author: {
    name: string;
    initials: string;
    color: string;
  };
  space: string;
  likes: number;
  comments: number;
  updated: string;
}

interface PostsProps {
  onToggleSidebar: () => void;
}

const Posts: React.FC<PostsProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPosts, setSelectedPosts] = useState<string[]>([]);
  const [activeFilters, setActiveFilters] = useState<FilterCondition[]>([]);

  // Reset page when tab changes
  useEffect(() => {
    setCurrentPage(1);
    setSelectedPosts([]);
  }, [activeTab]);

  // Mock data for posts
  const [posts, setPosts] = useState<Post[]>([
    {
      id: '1',
      title: 'Getting Started with Circle',
      status: 'Published',
      author: {
        name: 'John Doe',
        initials: 'JD',
        color: 'bg-blue-500',
      },
      space: 'General Discussion',
      likes: 45,
      comments: 12,
      updated: '2 hours ago',
    },
    {
      id: '2',
      title: 'Community Guidelines',
      status: 'Published',
      author: {
        name: 'Jane Smith',
        initials: 'JS',
        color: 'bg-green-500',
      },
      space: 'Announcements',
      likes: 23,
      comments: 5,
      updated: '1 day ago',
    },
    {
      id: '3',
      title: 'Upcoming Features Preview',
      status: 'Draft',
      author: {
        name: 'Mike Johnson',
        initials: 'MJ',
        color: 'bg-purple-500',
      },
      space: 'Product Updates',
      likes: 0,
      comments: 0,
      updated: '3 days ago',
    },
    {
      id: '4',
      title: 'Monthly Newsletter',
      status: 'Scheduled',
      author: {
        name: 'Sarah Wilson',
        initials: 'SW',
        color: 'bg-orange-500',
      },
      space: 'Newsletter',
      likes: 0,
      comments: 0,
      updated: '1 week ago',
    },
  ]);

  // Filter data based on active tab and filters
  const getFilteredData = () => {
    let filtered = posts;

    // First filter by tab
    switch (activeTab) {
      case 'drafts':
        filtered = posts.filter(post => post.status === 'Draft');
        break;
      case 'scheduled':
        filtered = posts.filter(post => post.status === 'Scheduled');
        break;
      case 'published':
        filtered = posts.filter(post => post.status === 'Published');
        break;
      default:
        filtered = posts;
    }

    // Then apply additional filters
    return applyFilters(filtered, activeFilters);
  };

  const filteredData = getFilteredData();
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleSelectAll = () => {
    if (selectedPosts.length === paginatedData.length) {
      setSelectedPosts([]);
    } else {
      setSelectedPosts(paginatedData.map(post => post.id));
    }
  };

  const handleSelectItem = (postId: string) => {
    setSelectedPosts(prev =>
      prev.includes(postId)
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const handleDeleteSelected = () => {
    if (selectedPosts.length === 0) return;
    setPosts(prev => prev.filter(post => !selectedPosts.includes(post.id)));
    setSelectedPosts([]);
  };

  const handlePublishSelected = () => {
    if (selectedPosts.length === 0) return;
    setPosts(prev =>
      prev.map(post =>
        selectedPosts.includes(post.id)
          ? { ...post, status: 'Published' as const }
          : post
      )
    );
    setSelectedPosts([]);
  };

  const handleDraftSelected = () => {
    if (selectedPosts.length === 0) return;
    setPosts(prev =>
      prev.map(post =>
        selectedPosts.includes(post.id)
          ? { ...post, status: 'Draft' as const }
          : post
      )
    );
    setSelectedPosts([]);
  };

  const handleScheduleSelected = () => {
    if (selectedPosts.length === 0) return;
    setPosts(prev =>
      prev.map(post =>
        selectedPosts.includes(post.id)
          ? { ...post, status: 'Scheduled' as const }
          : post
      )
    );
    setSelectedPosts([]);
  };

  const tableColumns: TableColumn<Post>[] = [
    {
      key: 'title',
      label: 'TITLE',
      render: (post: Post) => (
        <span className="text-sm text-gray-900 font-medium">{post.title}</span>
      ),
    },
    {
      key: 'status',
      label: 'STATUS',
      render: (post: Post) => (
        <span
          className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
            post.status === 'Published'
              ? 'bg-green-100 text-green-800'
              : post.status === 'Draft'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-blue-100 text-blue-800'
          }`}
        >
          {post.status}
        </span>
      ),
    },
    {
      key: 'author',
      label: 'AUTHOR',
      render: (post: Post) => (
        <div className="flex items-center space-x-3">
          <div
            className={`w-8 h-8 rounded-full ${post.author.color} flex items-center justify-center`}
          >
            <span className="text-xs text-white font-medium">
              {post.author.initials}
            </span>
          </div>
          <span className="text-sm text-gray-900">{post.author.name}</span>
        </div>
      ),
    },
    {
      key: 'space',
      label: 'SPACE',
      render: (post: Post) => (
        <span className="text-sm text-gray-600">{post.space}</span>
      ),
    },
    {
      key: 'likes',
      label: 'LIKES',
      render: (post: Post) => (
        <span className="text-sm text-gray-600">{post.likes}</span>
      ),
    },
    {
      key: 'comments',
      label: 'COMMENTS',
      render: (post: Post) => (
        <span className="text-sm text-gray-600">{post.comments}</span>
      ),
    },
    {
      key: 'updated',
      label: 'UPDATED',
      render: (post: Post) => (
        <span className="text-sm text-gray-600">{post.updated}</span>
      ),
    },
  ];

  const tabs: Tab[] = [
    { id: 'all', label: 'All', count: posts.length },
    {
      id: 'published',
      label: 'Published',
      count: posts.filter(p => p.status === 'Published').length,
    },
    {
      id: 'drafts',
      label: 'Drafts',
      count: posts.filter(p => p.status === 'Draft').length,
    },
    {
      id: 'scheduled',
      label: 'Scheduled',
      count: posts.filter(p => p.status === 'Scheduled').length,
    },
  ];

  const filters = [
    {
      id: 'status',
      label: 'Status',
      type: 'select' as const,
      options: ['Published', 'Draft', 'Scheduled'],
    },
    {
      id: 'title',
      label: 'Title',
      type: 'text' as const,
    },
    {
      id: 'author',
      label: 'Author',
      type: 'text' as const,
    },
    {
      id: 'space',
      label: 'Space',
      type: 'text' as const,
    },
  ];

  return (
    <ContentContainer
      onToggleSidebar={onToggleSidebar}
      title="Posts"
      actions={<Button variant="default">New post</Button>}
    >
      {/* Tabs */}
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Filters */}
      <EnhancedFilters
        filters={filters}
        activeFilters={activeFilters}
        onFilterChange={setActiveFilters}
      />

      {/* Actions */}
      <Actions
        selectedCount={selectedPosts.length}
        totalCount={paginatedData.length}
        onDeleteSelected={handleDeleteSelected}
        bulkActions={[
          {
            id: 'publish',
            label: 'Publish selected',
            onClick: handlePublishSelected,
            disabled: selectedPosts.length === 0,
          },
          {
            id: 'draft',
            label: 'Move to draft',
            onClick: handleDraftSelected,
            disabled: selectedPosts.length === 0,
          },
          {
            id: 'schedule',
            label: 'Schedule selected',
            onClick: handleScheduleSelected,
            disabled: selectedPosts.length === 0,
          },
          {
            id: 'delete',
            label: 'Delete selected',
            onClick: handleDeleteSelected,
            disabled: selectedPosts.length === 0,
          },
        ]}
      />

      {/* Table */}
      <div className="flex-1 min-h-0 overflow-auto border-t border-b border-gray-100">
        <Table
          columns={tableColumns}
          data={paginatedData}
          selectedItems={selectedPosts}
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

export default Posts;
