import React, { useState } from 'react';
import FirstLevelNavigation from './components/FirstLevelNavigation';
import AdminSection from './components/AdminSection';
import CommunitySection from './components/CommunitySection';
import AnalyticsSection from './components/AnalyticsSection';
import SettingsSection from './components/SettingsSection';
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
        return <AdminSection />;
      case 'home':
        return <CommunitySection />;
      case 'star':
        return <AnalyticsSection />;
      case 'inbox':
        return <SettingsSection />;
      case 'notifications':
        return <CommunitySection />;
      case 'compass':
        return <AnalyticsSection />;
      case 'harvard':
        return <SettingsSection />;
      case 'w1':
        return <CommunitySection />;
      case 'w2':
        return <AnalyticsSection />;
      case 'waves':
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
        <div className="flex-1 overflow-hidden rounded-2xl shadow-md border border-gray-200 relative">
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
