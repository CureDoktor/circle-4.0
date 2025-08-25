import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ManageAudience from './components/ManageAudience';
import Community from './components/Community';
import Content from './components/Content/Content';
import Workflows from './components/Workflows/Workflows';
import Coupons from './components/Paywalls/Coupons';
import Paywalls from './components/Paywalls/Paywalls';
import PaywallsSidebar from './components/Paywalls/PaywallsSidebar';
import AccessGroups from './components/AccessGroups/AccessGroups';
import Segments from './components/Segments/Segments';
import BulkLogs from './components/BulkLogs/BulkLogs';
import InviteLinks from './components/InviteLinks/InviteLinks';
import Tags from './components/Tags/Tags';
import ProfileFields from './components/ProfileFields/ProfileFields';
import ActivityLogs from './components/ActivityLogs/ActivityLogs';
import PlaceholderPage from './components/PlaceholderPage';
import AIHelperChat from './components/AIHelperChat';
import ErrorBoundary from './components/ErrorBoundary';
import Onboarding from './components/Onboarding';
import Gamification from './components/Gamification';
import { ViewMode, AudienceData } from './types';
import { audienceData, sidebarItems, loadAudienceData } from './data/mockData';
import './App.css';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('Admin');
  const [currentSection, setCurrentSection] =
    useState<string>('manage-audience');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isAIHelperOpen, setIsAIHelperOpen] = useState(false);
  const [currentAudienceData, setCurrentAudienceData] =
    useState<AudienceData>(audienceData);
  const [activeSubItem, setActiveSubItem] = useState<string>('manage-audience');
  const [isContentTransitioning, setIsContentTransitioning] = useState(false);
  const [isSidebarContentTransitioning, setIsSidebarContentTransitioning] =
    useState(false);

  // Load data from localStorage on app start
  useEffect(() => {
    const savedData = loadAudienceData();
    setCurrentAudienceData(savedData);
  }, []);

  const handleSidebarItemClick = (itemId: string, subItemId?: string) => {
    if (subItemId) {
      // Click on sidebar sub-item - fade main content only
      setIsContentTransitioning(true);

      setTimeout(() => {
        setCurrentSection(subItemId);
        setActiveSubItem(subItemId);

        setTimeout(() => {
          setIsContentTransitioning(false);
        }, 50);
      }, 150);
    } else {
      // Click on main sidebar icon - fade sidebar content only
      setIsSidebarContentTransitioning(true);

      setTimeout(() => {
        if (itemId === 'paywalls') {
          // Show Paywalls sidebar content
          setCurrentSection('paywalls-sidebar');
          setActiveSubItem('coupons'); // Default to coupons
        } else {
          setCurrentSection(itemId);
        }

        setTimeout(() => {
          setIsSidebarContentTransitioning(false);
        }, 50);
      }, 150);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleAIHelper = () => {
    setIsAIHelperOpen(!isAIHelperOpen);
  };

  const handleDataChange = (newData: AudienceData) => {
    setCurrentAudienceData(newData);
  };

  const renderContent = () => {
    if (viewMode === 'Community') {
      return <Community />;
    }

    switch (currentSection) {
      case 'manage-audience':
        return (
          <ManageAudience
            audienceData={currentAudienceData}
            onToggleSidebar={toggleSidebar}
            onDataChange={handleDataChange}
          />
        );
      case 'pages':
        return (
          <Content
            title="Pages"
            createButtonText="Create page"
            filters={[
              '+ Title',
              '+ Author',
              '+ Spaces',
              '+ Tag',
              '+ Published',
              '+ Add filter',
            ]}
            columns={['Name', 'Status', 'Author', 'Updated']}
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'posts':
        return (
          <PlaceholderPage
            title="Posts"
            description="Posts management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'spaces':
        return (
          <PlaceholderPage
            title="Spaces"
            description="Spaces management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'topics':
        return (
          <PlaceholderPage
            title="Topics"
            description="Topics management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'moderation':
        return (
          <PlaceholderPage
            title="Moderation"
            description="Moderation interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'live':
        return (
          <PlaceholderPage
            title="Live"
            description="Live content interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'access-groups':
        return <AccessGroups onToggleSidebar={toggleSidebar} />;
      case 'segments':
        return <Segments onToggleSidebar={toggleSidebar} />;
      case 'bulk-logs':
        return <BulkLogs onToggleSidebar={toggleSidebar} />;
      case 'invite-links':
        return <InviteLinks onToggleSidebar={toggleSidebar} />;
      case 'onboarding':
        return <Onboarding onToggleSidebar={toggleSidebar} />;
      case 'tags':
        return <Tags onToggleSidebar={toggleSidebar} />;
      case 'profile-fields':
        return <ProfileFields onToggleSidebar={toggleSidebar} />;
      case 'gamification':
        return <Gamification onToggleSidebar={toggleSidebar} />;
      case 'activity-logs':
        return <ActivityLogs onToggleSidebar={toggleSidebar} />;
      case 'all-workflows':
        return <Workflows onToggleSidebar={toggleSidebar} />;
      case 'history':
        return (
          <PlaceholderPage
            title="Workflow History"
            description="Workflow history interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'coupons':
        return <Coupons onToggleSidebar={toggleSidebar} />;
      case 'paywalls-sidebar':
        return (
          <PaywallsSidebar
            onToggleSidebar={toggleSidebar}
            onItemClick={handleSidebarItemClick}
            activeSubItem={activeSubItem}
          />
        );
      case 'paywalls':
        return <Paywalls onToggleSidebar={toggleSidebar} />;
      case 'subscription-groups':
        return (
          <PlaceholderPage
            title="Subscription Groups"
            description="Subscription groups management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'transactions':
        return (
          <PlaceholderPage
            title="Transactions"
            description="Transactions management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'subscriptions':
        return (
          <PlaceholderPage
            title="Subscriptions"
            description="Subscriptions management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'taxes':
        return (
          <PlaceholderPage
            title="Taxes"
            description="Taxes management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'export-logs':
        return (
          <PlaceholderPage
            title="Export Logs"
            description="Export logs management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'settings':
        return (
          <PlaceholderPage
            title="Settings"
            description="Settings management interface will be implemented here."
            onToggleSidebar={toggleSidebar}
          />
        );
      default:
        return (
          <ManageAudience
            audienceData={currentAudienceData}
            onToggleSidebar={toggleSidebar}
            onDataChange={handleDataChange}
          />
        );
    }
  };

  return (
    <ErrorBoundary>
      <div className="h-screen bg-gray-50 flex flex-col">
        <Navbar
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onToggleAIHelper={toggleAIHelper}
        />
        <div className="flex flex-1 p-4 bg-gray-50">
          {viewMode === 'Admin' && (
            <div
              className={`mr-4 transition-all duration-300 ease-out ${
                isSidebarCollapsed ? 'w-16' : 'w-80'
              }`}
            >
              <Sidebar
                items={sidebarItems}
                onItemClick={handleSidebarItemClick}
                isCollapsed={isSidebarCollapsed}
                isSidebarContentTransitioning={isSidebarContentTransitioning}
              />
            </div>
          )}
          <main
            className={`flex-1 overflow-hidden transition-all duration-300 ease-out ${
              viewMode === 'Admin' && isSidebarCollapsed ? 'ml-0' : ''
            } ${isAIHelperOpen ? 'mr-4' : 'mr-0'}`}
          >
            <div
              className={`h-full transition-opacity duration-200 ease-out ${
                isContentTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {renderContent()}
            </div>
          </main>
          <div
            className={`transition-all duration-300 ease-out ${
              isAIHelperOpen
                ? 'w-96 opacity-100 transform translate-x-0 ml-4'
                : 'w-0 opacity-0 transform translate-x-full ml-0 overflow-hidden'
            }`}
          >
            <AIHelperChat onClose={() => setIsAIHelperOpen(false)} />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
