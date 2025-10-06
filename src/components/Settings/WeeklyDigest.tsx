import React from 'react';
import ContentContainer from '../ContentContainer';

interface WeeklyDigestProps {
  onToggleSidebar: () => void;
}

const WeeklyDigest: React.FC<WeeklyDigestProps> = ({ onToggleSidebar }) => {
  return (
    <ContentContainer title="Weekly digest" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-auto">
        <div className="max-w-3xl mx-auto py-6 px-6">
          <div className="space-y-8">
            <p className="text-sm text-gray-500">
              Weekly digest emails include a personalized summary of the
              week&apos;s popular posts, comments, and more. Every member will
              receive a digest featuring content only from the spaces they are a
              member of.
            </p>

            {/* Enable weekly digest */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Enable weekly digest
                </label>
                <p className="text-sm text-gray-500">
                  If enabled, a personalized weekly digest will be sent to your
                  members starting at 9am PT on Thursdays. Emails may take up to
                  4-5 hours to be sent and members have the option to
                  unsubscribe from these emails.
                </p>
              </div>
              <div className="ml-4">
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Subject
                <svg
                  className="inline w-3 h-3 ml-1 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  defaultValue="This week on HappyTravels: September 29 - October 6, 2025"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-2 py-1 text-sm text-gray-500 border border-gray-300 rounded hover:bg-gray-50">
                  {}
                </button>
              </div>
            </div>

            {/* Introduction */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-1">
                Introduction
                <svg
                  className="inline w-3 h-3 ml-1 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <div className="border border-gray-300 rounded-md p-4 bg-white">
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    Curabitur magna massa, tristique bibendum finibus nec,
                    consectetur ut urna. Sed nec libero feugiat, tincidunt arcu
                    ut, blandit mauris. Praesent egestas nunc orci, semper
                    molestie lectus convallis non. Cras at purus quis magna
                    cursus dictum et ut arcu.
                  </p>
                  <p className="text-sm text-gray-700">
                    Curabitur magna massa, tristique bibendum finibus nec,
                    consectetur ut urna. Sed nec libero feugiat, tincidunt arcu
                    ut, blandit mauris. Praesent egestas nunc orci, semper
                    molestie lectus convallis non. Cras at purus quis magna
                    cursus dictum et ut arcu.
                  </p>

                  {/* Image placeholder */}
                  <div className="w-16 h-12 bg-gray-200 rounded flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <p className="text-sm text-gray-700">
                    Curabitur magna massa, tristique bibendum finibus nec,
                    consectetur ut urna. Sed nec libero feugiat, tincidunt arcu
                    ut, blandit mauris. Praesent egestas nunc orci, semper
                    molestie lectus convallis non. Cras at purus quis magna
                    cursus dictum et ut arcu.
                  </p>

                  {/* Social media icons */}
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    </div>
                    <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content visibility toggles */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                Content visibility
              </h3>

              {/* Hide popular posts */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Hide popular posts
                  </label>
                  <p className="text-sm text-gray-500">
                    If enabled, the popular posts section will be hidden from
                    the weekly digest.
                  </p>
                </div>
                <div className="ml-4">
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hide popular comments */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Hide popular comments
                  </label>
                  <p className="text-sm text-gray-500">
                    If enabled, the popular comments section will be hidden from
                    the weekly digest.
                  </p>
                </div>
                <div className="ml-4">
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hide stats */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Hide stats
                  </label>
                  <p className="text-sm text-gray-500">
                    If enabled, the stats section will be hidden from the weekly
                    digest.
                  </p>
                </div>
                <div className="ml-4">
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Hide new members */}
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Hide new members
                  </label>
                  <p className="text-sm text-gray-500">
                    If enabled, the new members section will be hidden from the
                    weekly digest.
                  </p>
                </div>
                <div className="ml-4">
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                  </button>
                </div>
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

export default WeeklyDigest;
