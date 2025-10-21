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

    // Show loading spinner
    setIsLoading(true);

    // Change content after brief loading
    setTimeout(() => {
      setActiveFirstLevelItem(itemId);
      setNavigationStack([{ type: 'feed' }]); // Reset navigation stack
      setIsLoading(false);
    }, 300);
  };

  const handlePostClick = (post: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setNavigationStack(prev => [...prev, { type: 'post', data: post }]);
      setIsLoading(false);
    }, 500);
  };

  const handleUserClick = (user: any) => {
    setIsLoading(true);
    setTimeout(() => {
      setNavigationStack(prev => [...prev, { type: 'user', data: user }]);
      setIsLoading(false);
    }, 500);
  };

  const handleBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack(prev => prev.slice(0, -1));
    }
  };

  const renderContent = (itemId: string) => {
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
    switch (itemId) {
      case 'circle':
        return <Feed onUserClick={handleUserClick} />;
      case 'home':
        return <Feed onUserClick={handleUserClick} />;
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
      <div className="h-screen bg-gray-50 flex overflow-hidden">
        <FirstLevelNavigation
          items={firstLevelNavItems}
          onItemClick={handleFirstLevelNavigationClick}
          activeItem={activeFirstLevelItem}
        />
        <div className="flex-1 overflow-hidden rounded-2xl shadow-2xs border border-gray-200 relative my-4 mr-4">
          {isLoading ? (
            <div className="absolute inset-0 rounded-2xl flex items-center justify-center bg-white/80 backdrop-blur-sm z-10">
              <LoadingSpinner size="lg" />
            </div>
          ) : (
            <div className="h-full">{renderContent(activeFirstLevelItem)}</div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
