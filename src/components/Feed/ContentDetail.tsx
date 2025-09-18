import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface ContentDetailProps {
  content: any;
  isVisible: boolean;
  isLoading: boolean;
  onClose: () => void;
}

const ContentDetail: React.FC<ContentDetailProps> = ({
  content,
  isVisible,
  isLoading,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed top-1.5 right-1.5 bottom-1.5 left-[calc(4rem+6px)] bg-white z-50 rounded-2xl shadow-sm border border-gray-200 transition-all duration-500 ease-out"
      style={{
        transform: isVisible
          ? 'translateY(0) scale(1)'
          : 'translateY(16px) scale(0.95)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {isLoading ? (
        <div className="h-full flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      ) : (
        <>
          {/* Header */}
          <div
            className="flex items-center justify-between p-6 border-b border-gray-200 transition-all duration-300"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
              opacity: isVisible ? 1 : 0,
              transition: 'all 0.3s ease-out 0.1s',
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
                  Subscribed
                </button>
                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto">
            <div
              className="max-w-4xl mx-auto p-6 transition-all duration-500"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.5s ease-out 0.2s',
              }}
            >
              {/* Article Header */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {content.title ||
                    'Cognitive Load, Hiring a Strong Founding Team, and How to Launch Your Startup Out of Stealth'}
                </h1>
                <p className="text-gray-600 mb-4">carry the boats.</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="font-semibold uppercase">
                    {content.author || 'BARTEK PUCEK'}
                  </span>
                  <span>•</span>
                  <span>SEP 11, 2025</span>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="mb-6">
                  <p className="text-lg text-gray-700 mb-4">Good morning</p>
                  <p className="text-lg text-gray-700 mb-4">
                    In today&apos;s edition, among other things:
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-1">
                    <li>The Founder&apos;s Invisible Tax: Cognitive Load</li>
                    <li>How to Hire a Strong Founding Team</li>
                    <li>How to Launch Your Startup Out of Stealth</li>
                    <li>Developer Tooling for Software in the AI Era</li>
                    <li>The AI Productivity Paradox</li>
                  </ul>
                  <p className="text-lg text-gray-700 mb-6">Onwards!</p>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    The Founder&apos;s Invisible Tax: Cognitive Load
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    Every founder wakes up with a finite resource that
                    can&apos;t be raised from investors or outsourced to staff:
                    mental bandwidth.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    Cognitive load is the silent tax on leadership, compounding
                    faster than burn rate.
                  </p>
                  <p className="text-lg text-gray-700 mb-4">
                    The human brain can hold roughly four &quot;chunks&quot; of
                    information at once. That&apos;s fine for debugging a
                    function, but lethal when you&apos;re simultaneously:
                  </p>
                  <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-1">
                    <li>Closing a funding round</li>
                    <li>Hiring a Founding Engineer</li>
                    <li>Deciding whether to pivot product strategy</li>
                  </ul>
                </div>

                {/* Content Image */}
                {content.image && (
                  <div className="mb-6">
                    <img
                      src={content.image}
                      alt="Content"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Original Content */}
                <div className="mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {content.content}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="border-t border-gray-200 p-6 transition-all duration-400"
              style={{
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 0.4s ease-out 0.3s',
              }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
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
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="text-sm font-medium">
                        {content.likes || 3}
                      </span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span className="text-sm font-medium">Comment</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
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
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                      <span className="text-sm font-medium">Share</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
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
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                      <span className="text-sm font-medium">Save</span>
                    </button>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContentDetail;
