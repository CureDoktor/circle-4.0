import React, { useState } from 'react';
import FirstLevelNavigation from './components/FirstLevelNavigation';
import AdminSection from './components/AdminSection';
import AnalyticsSection from './components/AnalyticsSection';
import SettingsSection from './components/SettingsSection';
import Feed from './components/Feed';
import Discovery from './components/Discovery';
import Community from './components/Community';
import NotificationsPage from './components/NotificationsPage/NotificationsPage';
import InboxPage from './components/InboxPage/InboxPage';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import { firstLevelNavItems } from './data/firstLevelNavigation';
import './App.css';

function App() {
  const [activeFirstLevelItem, setActiveFirstLevelItem] =
    useState<string>('circle');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFirstLevelNavigationClick = (itemId: string) => {
    if (itemId === activeFirstLevelItem) return; // Don't reload if same item

    setIsLoading(true);

    // Simulate loading time for smooth transition
    setTimeout(() => {
      setActiveFirstLevelItem(itemId);
      setIsLoading(false);
    }, 500);
  };

  const renderContent = () => {
    switch (activeFirstLevelItem) {
      case 'circle':
        return <Feed />;
      case 'home':
        return <Community />;
      case 'discover':
        return <Discovery />;
      case 'inbox':
        return <InboxPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'manage':
        return <AdminSection />;
      case 'harvard':
        return <SettingsSection />;
      case 'webflow':
        return <Community />;
      case 'framer':
        return <AnalyticsSection />;
      case 'obama foundation':
        return <SettingsSection />;
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
