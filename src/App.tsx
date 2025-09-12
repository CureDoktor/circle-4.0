import { useState } from 'react';
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
import { firstLevelNavItems } from './data/firstLevelNavigation';
import './App.css';

function App() {
  const [activeFirstLevelItem, setActiveFirstLevelItem] =
    useState<string>('circle');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [navigationStack, setNavigationStack] = useState<
    Array<{
      type: 'feed' | 'post' | 'user';
      data?: any;
    }>
  >([{ type: 'feed' }]);

  const handleFirstLevelNavigationClick = (itemId: string) => {
    if (itemId === activeFirstLevelItem) return; // Don't reload if same item

    setIsLoading(true);

    // Simulate loading time for smooth transition
    setTimeout(() => {
      setActiveFirstLevelItem(itemId);
      setNavigationStack([{ type: 'feed' }]); // Reset navigation stack
      setIsLoading(false);
    }, 500);
  };

  const handlePostClick = (post: any) => {
    setNavigationStack(prev => [...prev, { type: 'post', data: post }]);
  };

  const handleUserClick = (user: any) => {
    setNavigationStack(prev => [...prev, { type: 'user', data: user }]);
  };

  const handleBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack(prev => prev.slice(0, -1));
    }
  };

  const renderContent = () => {
    // Check if we're in a nested navigation (post or user view)
    const currentView = navigationStack[navigationStack.length - 1];

    if (currentView.type === 'post') {
      return (
        <PostDetail
          post={currentView.data}
          onBack={handleBack}
          onUserClick={handleUserClick}
        />
      );
    }

    if (currentView.type === 'user') {
      return (
        <UserProfilePage
          user={currentView.data}
          onBack={handleBack}
          onPostClick={handlePostClick}
        />
      );
    }

    // Default navigation based on first level item
    switch (activeFirstLevelItem) {
      case 'circle':
        return (
          <Feed onPostClick={handlePostClick} onUserClick={handleUserClick} />
        );
      case 'home':
        return (
          <Feed onPostClick={handlePostClick} onUserClick={handleUserClick} />
        );
      case 'discover':
        return <Discovery />;
      case 'inbox':
        return <InboxPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'manage':
        return <AdminSection />;
      case 'harvard':
        return <Community />;
      case 'webflow':
        return <Community />;
      case 'framer':
        return <Community />;
      case 'obama foundation':
        return <Community />;
      default:
        return <AdminSection />;
    }
  };

  return (
    <ErrorBoundary>
      <div className="h-screen bg-gray-50 flex overflow-hidden p-1.5">
        <FirstLevelNavigation
          items={firstLevelNavItems}
          onItemClick={handleFirstLevelNavigationClick}
          activeItem={activeFirstLevelItem}
        />
        <div className="flex-1 overflow-hidden rounded-2xl shadow-sm border border-gray-200 relative">
          {isLoading ? (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-10">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <div className="h-full transition-opacity duration-300 ease-in-out">
              {renderContent()}
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
