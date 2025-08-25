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

  // Load data from localStorage on app start
  useEffect(() => {
    const savedData = loadAudienceData();
    setCurrentAudienceData(savedData);
  }, []);

  const handleSidebarItemClick = (itemId: string, subItemId?: string) => {
    if (subItemId) {
      setCurrentSection(subItemId);
      setActiveSubItem(subItemId);
    } else {
      // Handle main item clicks (for sidebar expansion)
      if (itemId === 'paywalls') {
        // Show Paywalls sidebar content
        setCurrentSection('paywalls-sidebar');
        setActiveSubItem('coupons'); // Default to coupons
      } else {
        setCurrentSection(itemId);
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
        return (
          <Content
            title="Onboarding"
            createButtonText="Create flow"
            filters={[
              '+ Name',
              '+ Steps',
              '+ Users',
              '+ Status',
              '+ Type',
              '+ Add filter',
            ]}
            columns={['Name', 'Steps', 'Users', 'Status', 'Type']}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                  fill="#6B7280"
                />
              </svg>
            }
            onToggleSidebar={toggleSidebar}
          />
        );
      case 'tags':
        return <Tags onToggleSidebar={toggleSidebar} />;
      case 'profile-fields':
        return <ProfileFields onToggleSidebar={toggleSidebar} />;
      case 'gamification':
        return (
          <Content
            title="Gamification"
            createButtonText="Create rule"
            filters={[
              '+ Name',
              '+ Type',
              '+ Points',
              '+ Created',
              '+ Status',
              '+ Add filter',
            ]}
            columns={['Name', 'Type', 'Points', 'Created', 'Status']}
            icon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  fill="#6B7280"
                />
              </svg>
            }
            onToggleSidebar={toggleSidebar}
          />
        );
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
              className={`mr-4 transition-all duration-300 ${
                isSidebarCollapsed ? 'w-16' : ''
              }`}
            >
              <Sidebar
                items={sidebarItems}
                onItemClick={handleSidebarItemClick}
                isCollapsed={isSidebarCollapsed}
              />
            </div>
          )}
          <main className="flex-1">{renderContent()}</main>
          <div
            className={`ml-4 transition-all duration-500 ease-in-out ${
              isAIHelperOpen
                ? 'opacity-100 transform translate-x-0'
                : 'opacity-0 transform translate-x-full w-0 overflow-hidden'
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
