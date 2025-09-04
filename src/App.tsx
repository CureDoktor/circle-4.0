import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ManageAudience from './components/ManageAudience';
import Community from './components/Community';
import Content from './components/Content/Content';
import ContentSidebar from './components/Content/ContentSidebar';
import {
  Posts,
  Spaces,
  Topics,
  Moderation,
  MediaManager,
} from './components/Content';
import Workflows from './components/Workflows/Workflows';
import History from './components/Workflows/History';
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
import Live from './components/Live';
import Overview from './components/Marketing/Overview';
import Broadcasts from './components/Marketing/Broadcasts';
import Forms from './components/Marketing/Forms';
import Settings from './components/Marketing/Settings';
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
      // Click on main sidebar icon - find first sub-item and navigate to it
      const currentItem = sidebarItems.find(item => item.id === itemId);
      if (
        currentItem &&
        currentItem.subItems &&
        currentItem.subItems.length > 0
      ) {
        const firstSubItem = currentItem.subItems[0];

        setIsContentTransitioning(true);

        setTimeout(() => {
          setCurrentSection(firstSubItem.id);
          setActiveSubItem(firstSubItem.id);

          setTimeout(() => {
            setIsContentTransitioning(false);
          }, 50);
        }, 150);
      } else {
        // Fallback for items without sub-items
        setIsContentTransitioning(true);

        setTimeout(() => {
          setCurrentSection(itemId);
          setActiveSubItem(itemId);

          setTimeout(() => {
            setIsContentTransitioning(false);
          }, 50);
        }, 150);
      }
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
              'Title',
              'Author',
              'Spaces',
              'Tag',
              'Published',
              'Add filter',
            ]}
            columns={['Name', 'Status', 'Author', 'Updated']}
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'posts':
        return <Posts onToggleSidebar={toggleSidebar} />;
      case 'spaces':
        return <Spaces onToggleSidebar={toggleSidebar} />;
      case 'topics':
        return <Topics onToggleSidebar={toggleSidebar} />;
      case 'moderation':
        return <Moderation onToggleSidebar={toggleSidebar} />;
      case 'media-manager':
        return <MediaManager onToggleSidebar={toggleSidebar} />;
      case 'content-sidebar':
        return (
          <ContentSidebar
            onToggleSidebar={toggleSidebar}
            onItemClick={handleSidebarItemClick}
            activeSubItem={activeSubItem}
          />
        );
      case 'live':
        return <Live onToggleSidebar={toggleSidebar} />;
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
      case 'overview':
        return <Overview onToggleSidebar={toggleSidebar} />;
      case 'broadcasts':
        return <Broadcasts onToggleSidebar={toggleSidebar} />;
      case 'forms':
        return <Forms onToggleSidebar={toggleSidebar} />;
      case 'settings':
        return <Settings onToggleSidebar={toggleSidebar} />;
      case 'all-workflows':
        return <Workflows onToggleSidebar={toggleSidebar} />;
      case 'history':
        return <History onToggleSidebar={toggleSidebar} />;
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
      <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
        <Navbar
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          onToggleAIHelper={toggleAIHelper}
        />
        <div
          className={`flex flex-1 p-[6px] gap-[6px] bg-gray-50 min-h-0 overflow-hidden ${
            isAIHelperOpen ? 'pr-[6px]' : 'pr-[0px]'
          }`}
        >
          {viewMode === 'Admin' && (
            <div
              className={`transition-all duration-500 ease-in-out flex-shrink-0 ${
                isSidebarCollapsed ? 'w-[3.7rem]' : 'w-[16.5rem]'
              }`}
            >
              <Sidebar
                items={sidebarItems}
                onItemClick={handleSidebarItemClick}
                isCollapsed={isSidebarCollapsed}
              />
            </div>
          )}
          <main
            className={`flex-1 overflow-hidden transition-all duration-500 ease-in-out min-h-0 flex-shrink-0 ${
              viewMode === 'Admin' && isSidebarCollapsed ? 'ml-0' : ''
            } `}
          >
            <div
              className={`h-full transition-opacity duration-200 ease-out min-h-0 overflow-hidden ${
                isContentTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              {renderContent()}
            </div>
          </main>
          <div
            className={`transition-all duration-300 ease-out ${
              isAIHelperOpen
                ? 'w-96 opacity-100 transform translate-x-0'
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
