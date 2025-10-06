import React from 'react';
import ContentContainer from '../ContentContainer';

interface CustomDomainProps {
  onToggleSidebar: () => void;
}

const CustomDomain: React.FC<CustomDomainProps> = ({ onToggleSidebar }) => {
  return (
    <ContentContainer title="Custom domain" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-auto">
        <div className="max-w-3xl mx-auto py-6 px-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Your custom domain is active!
              </h2>
              <p className="text-gray-600 mb-6">
                When someone visits a page on your old Circle domain, we&apos;ll
                redirect them to that page on your new custom domain.
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      CUSTOM DOMAIN:
                    </h3>
                    <p className="text-gray-700">circle.upfront.so</p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ACTIVE
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">
                      CIRCLE DOMAIN:
                    </h3>
                    <p className="text-gray-700">demo.circle.so</p>
                  </div>
                  <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    REDIRECTING TO CIRCLE.UPFRONT.SO
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <button className="bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors">
                  Remove Custom Domain
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default CustomDomain;
