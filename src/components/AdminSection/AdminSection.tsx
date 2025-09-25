import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ManageAudience from '../ManageAudience';
import Community from '../CommunitySection';
import Content from '../Content/Content';
import ContentSidebar from '../Content/ContentSidebar';
import { Posts, Spaces, Topics, Moderation, MediaManager } from '../Content';
import Workflows from '../Workflows/Workflows';
import History from '../Workflows/History';
import Coupons from '../Paywalls/Coupons';
import Paywalls from '../Paywalls/Paywalls';
import PaywallsSidebar from '../Paywalls/PaywallsSidebar';
import AccessGroups from '../AccessGroups/AccessGroups';
import Segments from '../Segments/Segments';
import BulkLogs from '../BulkLogs/BulkLogs';
import InviteLinks from '../InviteLinks/InviteLinks';
import Tags from '../Tags/Tags';
import ProfileFields from '../ProfileFields/ProfileFields';
import ActivityLogs from '../ActivityLogs/ActivityLogs';
import PlaceholderPage from '../PlaceholderPage';
import AIHelperChat from '../AIHelperChat';
import Onboarding from '../Onboarding';
import Gamification from '../Gamification';
import Live from '../Live';
import Overview from '../Marketing/Overview';
import Broadcasts from '../Marketing/Broadcasts';
import Forms from '../Marketing/Forms';
import Settings from '../Marketing/Settings';
import { ViewMode, AudienceData } from '../../types';
import {
  audienceData,
  sidebarItems,
  loadAudienceData,
} from '../../data/mockData';

const AdminSection: React.FC = () => {
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
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      <Navbar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onToggleAIHelper={toggleAIHelper}
      />
      <div
        className={`flex flex-1 pb-5 bg-gray-50 min-h-0 overflow-hidden ${
          isAIHelperOpen ? '' : 'pr-[0px]'
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
              ? 'w-[326px] opacity-100 transform translate-x-0'
              : 'w-0 opacity-0 transform translate-x-full ml-0 overflow-hidden'
          }`}
        >
          <AIHelperChat onClose={() => setIsAIHelperOpen(false)} />
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
