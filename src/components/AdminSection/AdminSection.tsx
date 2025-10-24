import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import ManageAudience from '../ManageAudience';
import Community from '../CommunitySection';
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
import AIHelperChat from '../AIHelperChat';
import Onboarding from '../Onboarding';
import Gamification from '../Gamification';
import Live from '../Live';
import Overview from '../Marketing/Overview';
import Broadcasts from '../Marketing/Broadcasts';
import Forms from '../Marketing/Forms';
import Settings from '../Settings/Settings';
import {
  General,
  CustomDomain,
  CommunityAI,
  MobileApp,
  WeeklyDigest,
  Embed,
  SingleSignOn,
  Messaging,
  Legal,
} from '../Settings';
import Knowledge from '../Knowledge';
import Agents from '../Agents';
import SubscriptionGroups from '../SubscriptionGroups';
import Transactions from '../Transactions';
import Subscriptions from '../Subscriptions';
import { PageEditor } from '../PageEditor';
import Content from '../Content/Content';
import Taxes from '../Taxes';
import ExportLogs from '../ExportLogs';
import Affiliates from '../Affiliates';
import Commissions from '../Commissions';
import HeaderNavigation from '../HeaderNavigation';
import SEO from '../SEO';
import Redirects from '../Redirects';
import Defaults from '../Defaults';
import CodeSnippets from '../CodeSnippets';
import PaywallsSettings from '../PaywallsSettings';
import AffiliatesSettings from '../AffiliatesSettings';
import BrandedApp from '../BrandedApp';
import AIInbox from '../AIInbox';
import { ViewMode, AudienceData } from '../../types';
import {
  audienceData,
  sidebarItems,
  loadAudienceData,
} from '../../data/mockData';

interface AdminSectionProps {
  onItemClick?: (itemId: string, subItemId?: string) => void;
  currentSection?: string;
  activeSubItem?: string;
}

const AdminSection: React.FC<AdminSectionProps> = ({
  onItemClick,
  currentSection: propCurrentSection,
  activeSubItem: propActiveSubItem,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('Admin');
  // Use state for content updates, props for initial values
  const [currentSection, setCurrentSection] = useState<string>(
    propCurrentSection || 'audience'
  );
  const [activeSubItem, setActiveSubItem] = useState<string>(
    propActiveSubItem || 'manage-audience'
  );

  // Update state when props change (for URL navigation and refresh)
  useEffect(() => {
    if (propCurrentSection) {
      setCurrentSection(propCurrentSection);
    }
  }, [propCurrentSection]);

  useEffect(() => {
    if (propActiveSubItem) {
      setActiveSubItem(propActiveSubItem);
    }
  }, [propActiveSubItem]);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isAIHelperOpen, setIsAIHelperOpen] = useState(false);
  const [currentAudienceData, setCurrentAudienceData] =
    useState<AudienceData>(audienceData);
  const [isContentTransitioning, setIsContentTransitioning] = useState(false);
  const [isPageEditorOpen, setIsPageEditorOpen] = useState(false);
  const [selectedPageId, setSelectedPageId] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Load data from localStorage on app start
  useEffect(() => {
    const savedData = loadAudienceData();
    setCurrentAudienceData(savedData);
  }, []);

  // Reset preview state when leaving paywalls section
  useEffect(() => {
    if (currentSection !== 'paywalls') {
      setIsPreviewOpen(false);
    }
  }, [currentSection]);

  const handleSidebarItemClick = (itemId: string, subItemId?: string) => {
    // Always use local state management for smooth transitions
    // onItemClick is used for URL updates only
    if (subItemId) {
      // Click on sidebar sub-item - fade main content only
      setIsContentTransitioning(true);

      setTimeout(() => {
        setCurrentSection(subItemId);
        setActiveSubItem(subItemId);

        // Keep sidebar collapsed for branded-app and ai-inbox, expand for others
        if (subItemId === 'branded-app' || subItemId === 'ai-inbox') {
          setIsSidebarCollapsed(true);
        } else {
          setIsSidebarCollapsed(false);
        }

        setTimeout(() => {
          setIsContentTransitioning(false);
        }, 50);
      }, 150);

      // Update URL after local state change
      if (onItemClick) {
        onItemClick(itemId, subItemId);
      }
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

        // Update URL after local state change
        if (onItemClick) {
          onItemClick(itemId, firstSubItem.id);
        }
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

        // Update URL after local state change
        if (onItemClick) {
          onItemClick(itemId, itemId);
        }
      }
    }
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleAIHelper = () => {
    const newAIHelperState = !isAIHelperOpen;

    // If we're in paywalls section and preview is open, close it first
    if (newAIHelperState && currentSection === 'paywalls' && isPreviewOpen) {
      // The preview will be closed by the useEffect in NewPaywall
      // and then AI helper will open
    }

    setIsAIHelperOpen(newAIHelperState);
  };

  const handleDataChange = (newData: AudienceData) => {
    setCurrentAudienceData(newData);
  };

  const handlePageClick = (pageId: string) => {
    setSelectedPageId(pageId);
    setIsPageEditorOpen(true);
  };

  const handleCreatePage = (templateId?: string) => {
    console.log('handleCreatePage called with templateId:', templateId);
    if (templateId) {
      setSelectedPageId(templateId);
      setIsPageEditorOpen(true);
    }
  };

  const handleBackFromEditor = () => {
    setIsPageEditorOpen(false);
    setSelectedPageId(null);
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
            onPageClick={handlePageClick}
            onCreatePage={handleCreatePage}
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
      case 'general':
        return <General onToggleSidebar={toggleSidebar} />;
      case 'custom-domain':
        return <CustomDomain onToggleSidebar={toggleSidebar} />;
      case 'community-ai':
        return <CommunityAI onToggleSidebar={toggleSidebar} />;
      case 'mobile-app':
        return <MobileApp onToggleSidebar={toggleSidebar} />;
      case 'weekly-digest':
        return <WeeklyDigest onToggleSidebar={toggleSidebar} />;
      case 'embed':
        return <Embed onToggleSidebar={toggleSidebar} />;
      case 'single-sign-on':
        return <SingleSignOn onToggleSidebar={toggleSidebar} />;
      case 'messaging':
        return <Messaging onToggleSidebar={toggleSidebar} />;
      case 'legal':
        return <Legal onToggleSidebar={toggleSidebar} />;
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
        return (
          <Paywalls
            onToggleSidebar={toggleSidebar}
            isAIHelperOpen={isAIHelperOpen}
            onCloseAIHelper={() => setIsAIHelperOpen(false)}
            onPreviewToggle={setIsPreviewOpen}
          />
        );
      case 'subscription-groups':
        return <SubscriptionGroups onToggleSidebar={toggleSidebar} />;
      case 'transactions':
        return <Transactions onToggleSidebar={toggleSidebar} />;
      case 'subscriptions':
        return <Subscriptions onToggleSidebar={toggleSidebar} />;
      case 'taxes':
        return <Taxes onToggleSidebar={toggleSidebar} />;
      case 'export-logs':
        return <ExportLogs onToggleSidebar={toggleSidebar} />;
      case 'affiliates':
        return <Affiliates onToggleSidebar={toggleSidebar} />;
      case 'commissions':
        return <Commissions onToggleSidebar={toggleSidebar} />;
      case 'navigation':
        return <HeaderNavigation onToggleSidebar={toggleSidebar} />;
      case 'seo':
        return <SEO onToggleSidebar={toggleSidebar} />;
      case 'redirects':
        return <Redirects onToggleSidebar={toggleSidebar} />;
      case 'defaults':
        return <Defaults onToggleSidebar={toggleSidebar} />;
      case 'code-snippets':
        return <CodeSnippets onToggleSidebar={toggleSidebar} />;
      case 'paywalls-settings':
        return <PaywallsSettings onToggleSidebar={toggleSidebar} />;
      case 'affiliates-settings':
        return <AffiliatesSettings onToggleSidebar={toggleSidebar} />;
      case 'branded-app':
        return <BrandedApp onToggleSidebar={toggleSidebar} />;
      case 'ai-inbox':
        return <AIInbox onToggleSidebar={toggleSidebar} />;
      case 'knowledge':
        return <Knowledge onToggleSidebar={toggleSidebar} />;
      case 'agents':
        return <Agents onToggleSidebar={toggleSidebar} />;

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

  // If page editor is open, show it as full screen (overrides everything)
  if (isPageEditorOpen) {
    return (
      <div className="fixed inset-0 z-50 bg-white">
        <PageEditor
          onToggleSidebar={toggleSidebar}
          onBackToList={handleBackFromEditor}
          selectedPageId={selectedPageId}
        />
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      <Navbar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onToggleAIHelper={toggleAIHelper}
      />
      <div
        className={`flex flex-1 pb-5 bg-gray-50 min-h-0 overflow-hidden mb-3 ${
          isAIHelperOpen ? '' : 'pr-0'
        }`}
      >
        {viewMode === 'Admin' && (
          <div
            className={`transition-all duration-500 ease-in-out shrink-0 ${
              isSidebarCollapsed ? 'w-14' : 'w-66'
            }`}
          >
            <Sidebar
              items={sidebarItems}
              onItemClick={handleSidebarItemClick}
              isCollapsed={isSidebarCollapsed}
              currentSection={currentSection}
            />
          </div>
        )}
        <main
          className={`flex-1 overflow-hidden transition-all duration-500 ease-in-out min-h-0 shrink-0 ${
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
