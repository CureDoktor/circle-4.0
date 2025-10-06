import React from 'react';
import ContentContainer from '../ContentContainer';

interface LegalProps {
  onToggleSidebar: () => void;
}

const Legal: React.FC<LegalProps> = ({ onToggleSidebar }) => {
  return (
    <ContentContainer title="Legal" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-auto">
        <div className="max-w-3xl mx-auto py-6 px-6">
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-gray-900">
              Manage your community legal notices
            </h2>

            {/* Legal email */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Legal email
              </label>
              <p className="text-sm text-gray-500 mb-2">
                This email address will be shown in your terms of service and
                privacy policy.
              </p>
              <input
                type="email"
                defaultValue="rohit@circle.co"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Legal address */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Legal address
              </label>
              <p className="text-sm text-gray-500 mb-2">
                This address will be shown in your terms of service and privacy
                policy.
              </p>
              <input
                type="text"
                defaultValue="Pune, India"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Terms of service */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-900">
                  Terms of service
                </label>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                    Copy URL
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                    View
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                New members will have to agree to these terms to be able to sign
                up to your community.
              </p>

              {/* Additional terms toggle */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Add additional terms to the terms of service
                  </label>
                  <p className="text-sm text-gray-500">
                    Your custom terms will be displayed at the bottom as Exhibit
                    A.
                  </p>
                </div>
                <div className="ml-4">
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                  </button>
                </div>
              </div>

              {/* Additional terms text area */}
              <div>
                <textarea
                  defaultValue="Hello"
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                  placeholder="Enter your additional terms..."
                />
              </div>
            </div>

            {/* Privacy policy */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-gray-900">
                  Privacy policy
                </label>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                    Copy URL
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded hover:bg-gray-50">
                    View
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                New members will have to agree to this privacy notice to be able
                to sign up to your community.
              </p>

              {/* Privacy policy options */}
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="privacy-policy"
                    value="template"
                    defaultChecked
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-900">
                    Use Circle&apos;s privacy policy template
                    <svg
                      className="inline w-4 h-4 ml-1 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="privacy-policy"
                    value="custom"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-900">
                    Create your own privacy policy (Recommended)
                  </span>
                </label>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="privacy-policy"
                    value="link"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-900">
                    Please provide a link to your own privacy policy page
                  </span>
                </label>
              </div>
            </div>

            {/* Save button */}
            <div className="flex justify-end">
              <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Legal;
