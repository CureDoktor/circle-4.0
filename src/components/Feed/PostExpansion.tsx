import React from 'react';
import LoadingSpinner from '../LoadingSpinner';

interface PostExpansionProps {
  post: any;
  isVisible: boolean;
  isLoading: boolean;
  onClose: () => void;
  originRect?: DOMRect | null;
}

const PostExpansion: React.FC<PostExpansionProps> = ({
  post,
  isVisible,
  isLoading,
  onClose,
}) => {
  if (!isVisible) return null;

  return (
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onClose} />

      {/* Main content */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-4xl h-full max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
            {/* Left side - Logo and Community name */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-gray-900 font-medium">
                WEBFLOW COMMUNITY
              </span>
            </div>

            {/* Right side - Action buttons */}
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                Join
              </button>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors">
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
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto min-h-0">
            {isLoading ? (
              <div className="h-full flex items-center justify-center">
                <LoadingSpinner size="lg" />
              </div>
            ) : (
              <div className="max-w-2xl mx-auto p-6">
                {/* Author info */}
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {post.author}
                    </h3>
                    <p className="text-sm text-gray-500">{post.timestamp}</p>
                  </div>
                </div>

                {/* Post content */}
                <div className="mb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {post.content}
                  </p>
                </div>

                {/* Images */}
                {post.images && post.images.length > 0 && (
                  <div className="mb-6">
                    <img
                      src={post.images[0]}
                      alt="Post content"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer - Fixed at bottom */}
          <div className="border-t border-gray-200 p-6 flex-shrink-0 bg-white">
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
                    <span className="text-sm font-medium">Like</span>
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
      </div>
    </>
  );
};

export default PostExpansion;
