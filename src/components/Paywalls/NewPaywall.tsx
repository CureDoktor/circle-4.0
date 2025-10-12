import React, { useState, useEffect } from 'react';
import PaywallPreview from './PaywallPreview';
import DetailsTab from './tabs/DetailsTab';
import CheckoutTab from './tabs/CheckoutTab';
import BumpsTab from './tabs/BumpsTab';
import UpsellTab from './tabs/UpsellTab';
import ThankYouTab from './tabs/ThankYouTab';
import EmailTab from './tabs/EmailTab';

interface NewPaywallProps {
  onBack: () => void;
  isAIHelperOpen?: boolean;
  onCloseAIHelper?: () => void;
  onPreviewToggle?: (isOpen: boolean) => void;
}

const NewPaywall: React.FC<NewPaywallProps> = ({
  onBack,
  isAIHelperOpen,
  onCloseAIHelper,
  onPreviewToggle,
}) => {
  const [activeTab, setActiveTab] = useState<
    'details' | 'checkout' | 'bumps' | 'upsell' | 'thankyou' | 'email'
  >('details');
  const [showPreview, setShowPreview] = useState(false);

  // Notify parent when preview state changes
  useEffect(() => {
    if (onPreviewToggle) {
      onPreviewToggle(showPreview);
    }
  }, [showPreview, onPreviewToggle]);

  // Handle mutual exclusion between AI helper and preview sidebar
  useEffect(() => {
    if (isAIHelperOpen && showPreview) {
      setShowPreview(false);
    }
  }, [isAIHelperOpen]);

  useEffect(() => {
    if (showPreview && isAIHelperOpen && onCloseAIHelper) {
      onCloseAIHelper();
    }
  }, [showPreview]);

  const tabs = [
    { id: 'details', label: 'Details' },
    { id: 'checkout', label: 'Checkout' },
    { id: 'bumps', label: 'Bumps' },
    { id: 'upsell', label: 'Upsell' },
    { id: 'thankyou', label: 'Thank you page' },
    { id: 'email', label: 'Email' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return <DetailsTab />;
      case 'checkout':
        return <CheckoutTab />;
      case 'bumps':
        return <BumpsTab />;
      case 'upsell':
        return <UpsellTab />;
      case 'thankyou':
        return <ThankYouTab />;
      case 'email':
        return <EmailTab />;
      default:
        return <DetailsTab />;
    }
  };

  return (
    <div className="h-full bg-gray-50 flex  transition-all">
      {/* Main Content Area */}
      <div
        className={`${
          showPreview ? 'flex-1' : 'flex-1'
        } flex flex-col overflow-auto scrollbar-hide transition-all duration-300 ease-in-out`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-gray-900">New paywall</h1>
            </div>

            <div className="flex items-center space-x-3">
              <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors">
                Publish
              </button>
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Tabs */}
            <div className="flex space-x-1 mb-8">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === tab.id
                      ? 'bg-gray-100 text-gray-900 border border-gray-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Preview Sidebar */}
      {showPreview && (
        <div className="w-96 animate-slideInFromRight">
          <PaywallPreview />
        </div>
      )}
    </div>
  );
};

export default NewPaywall;
