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
    <div className="h-full bg-white flex overflow-auto transition-all border-l border-gray-200">
      {/* Main Content Area */}
      <div
        className={`${
          showPreview ? 'flex-1' : 'flex-1'
        } flex flex-col overflow-auto scrollbar-hide transition-all duration-300 ease-in-out`}
      >
        <div className="max-w-5xl mx-auto px-4 py-8 w-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl border border-gray-200 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.86366 4.26166C9.15656 4.55456 9.15656 5.02943 8.86366 5.32232L4.93566 9.25033H16.875C17.2892 9.25033 17.625 9.58611 17.625 10.0003C17.625 10.4145 17.2892 10.7503 16.875 10.7503H4.93566L8.86366 14.6783C9.15656 14.9712 9.15656 15.4461 8.86366 15.739C8.57077 16.0319 8.0959 16.0319 7.803 15.739L2.59467 10.5307C2.30178 10.2378 2.30178 9.76289 2.59467 9.47L7.803 4.26166C8.0959 3.96877 8.57077 3.96877 8.86366 4.26166Z"
                    fill="#717680"
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
                      ? 'text-gray-900 border border-gray-200'
                      : 'text-gray-600 hover:text-gray-900 border border-transparent hover:bg-gray-50'
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
        <div className="w-[600px] animate-slideInFromRight max-h-screen bg-gray-50 p-4 mt-5 rounded-lg mr-5">
          <PaywallPreview />
        </div>
      )}
    </div>
  );
};

export default NewPaywall;
