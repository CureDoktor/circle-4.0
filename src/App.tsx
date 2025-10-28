import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import FirstLevelNavigation from './components/FirstLevelNavigation';
import AdminSection from './components/AdminSection';
import Feed from './components/Feed';
import Discovery from './components/Discovery';
import Community from './components/Community';
import NotificationsPage from './components/NotificationsPage/NotificationsPage';
import InboxPage from './components/InboxPage/InboxPage';
import PostDetail from './components/PostDetail';
import UserProfilePage from './components/UserProfilePage';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import CommunitySwitcher from './components/CommunitySwitcher';
import { firstLevelNavItems } from './data/firstLevelNavigation';
import { sidebarItems } from './data/mockData';
import './App.css';

// Main App component with routing
function App() {
  return (
    <ErrorBoundary>
      <Router>
        <AppContent />
      </Router>
    </ErrorBoundary>
  );
}

// App content component that uses routing
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeCommunity, setActiveCommunity] = useState<string>('circle');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Communities data
  const communities = [
    { id: 'circle', name: 'Circle', logo: '/images/circle-logo.png' },
    { id: 'oprah', name: 'Oprah Foundation', logo: '/images/oprah-logo.png' },
    { id: 'webflow', name: 'Webflow', logo: '/images/webflow-logo.png' },
  ];

  // Extract route parameters from URL
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const firstLevel = pathSegments[0] || 'circle';
  const secondLevel = pathSegments[1];
  const subItem = pathSegments[2];

  console.log('URL Debug:', {
    pathname: location.pathname,
    pathSegments,
    firstLevel,
    secondLevel,
    subItem,
  });

  const handleFirstLevelNavigationClick = (itemId: string) => {
    if (itemId === firstLevel) return; // Don't reload if same item

    // Show loading spinner
    setIsLoading(true);

    // Navigate to new route
    setTimeout(() => {
      navigate(`/${itemId}`);
      setIsLoading(false);
    }, 300);
  };

  const handleSidebarClick = (itemId: string, subItemId?: string) => {
    // Navigate immediately without loading state for smooth transitions
    if (subItemId) {
      navigate(`/${firstLevel}/${itemId}/${subItemId}`);
    } else {
      navigate(`/${firstLevel}/${itemId}`);
    }
  };

  const handlePostClick = (post: any) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/${firstLevel}/post/${post.id}`);
      setIsLoading(false);
    }, 500);
  };

  const handleUserClick = (user: any) => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/${firstLevel}/user/${user.id}`);
      setIsLoading(false);
    }, 500);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleCommunityChange = (communityId: string) => {
    if (communityId === activeCommunity) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCommunity(communityId);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  };

  const renderContent = () => {
    // Handle post detail routes
    if (secondLevel === 'post' && pathSegments[2]) {
      const postId = pathSegments[2];
      // In a real app, you'd fetch the post by ID
      const post = {
        id: postId,
        title: 'Sample Post',
        author: 'Sample Author',
        handle: 'sample-author',
        avatar: '/images/avatars/1.png',
        content: 'This is a sample post content.',
        image: '/images/placeholders/image-1.png',
        images: ['/images/placeholders/image-1.png'],
        likes: 42,
        comments: 5,
        isSaved: false,
        timeAgo: '2h',
        timestamp: new Date().toISOString(),
        bio: 'Sample author bio',
        socialLinks: {},
      };
      return (
        <PostDetail
          post={post}
          onBack={handleBack}
          onUserClick={handleUserClick}
        />
      );
    }

    // Handle user profile routes
    if (secondLevel === 'user' && pathSegments[2]) {
      const userId = pathSegments[2];
      // In a real app, you'd fetch the user by ID
      const user = {
        id: userId,
        name: 'Sample User',
        handle: 'sample-user',
        avatar: '/images/avatars/1.png',
        bio: 'This is a sample user bio.',
        socialLinks: {},
        postCount: 10,
      };
      return (
        <UserProfilePage
          user={user}
          onBack={handleBack}
          onPostClick={handlePostClick}
        />
      );
    }

    // Handle first level navigation with community-aware content
    switch (firstLevel) {
      case 'circle':
        return (
          <Feed onUserClick={handleUserClick} community={activeCommunity} />
        );
      case 'discover':
        return <Discovery />;
      case 'inbox':
        return <InboxPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'manage':
        return (
          <AdminSection
            onItemClick={handleSidebarClick}
            currentSection={secondLevel || 'audience'}
            activeSubItem={subItem || 'manage-audience'}
          />
        );
      case 'harvard':
      case 'webflow':
      case 'framer':
      case 'obama foundation':
      case 'more':
        return <Community />;
      default:
        return (
          <AdminSection
            onItemClick={handleSidebarClick}
            currentSection={secondLevel || 'audience'}
            activeSubItem={subItem || 'manage-audience'}
          />
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <FirstLevelNavigation
        items={firstLevelNavItems}
        onItemClick={handleFirstLevelNavigationClick}
        activeItem={firstLevel}
        community={activeCommunity}
      />
      <div className="flex-1 overflow-hidden rounded-2xl shadow-2xs border border-gray-200 relative my-4 mr-4">
        {isLoading ? (
          <div className="absolute inset-0 rounded-2xl flex items-center justify-center bg-white/80 backdrop-blur-sm z-10">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="h-full relative">
            {/* Transition Overlay */}
            {isTransitioning && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-20 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
            )}
            {renderContent()}
          </div>
        )}
      </div>

      {/* Community Switcher */}
      <CommunitySwitcher
        communities={communities}
        activeCommunity={activeCommunity}
        onCommunityChange={handleCommunityChange}
      />
    </div>
  );
}

export default App;
