import React, { useEffect, useRef, useState } from 'react';
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
  originRect,
}) => {
  const [animationPhase, setAnimationPhase] = useState<
    'expanding' | 'expanded' | 'collapsing'
  >('expanding');
  const expansionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible) {
      setAnimationPhase('expanding');
      // Transition to expanded state after initial animation
      const timer = setTimeout(() => {
        setAnimationPhase('expanded');
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAnimationPhase('collapsing');
    }
  }, [isVisible]);

  const handleClose = () => {
    setAnimationPhase('collapsing');
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isVisible && animationPhase === 'collapsing') return null;

  // Calculate initial position and size from origin rect
  const getInitialStyles = () => {
    if (!originRect) {
      return {
        top: '50%',
        left: '50%',
        width: '0px',
        height: '0px',
        transform: 'translate(-50%, -50%)',
      };
    }

    // Get the main content container to calculate relative position
    const containerElement = document.querySelector('.main-content-container');
    const containerRect = containerElement?.getBoundingClientRect() || {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };

    return {
      top: `${originRect.top - containerRect.top}px`,
      left: `${originRect.left - containerRect.left}px`,
      width: `${originRect.width}px`,
      height: `${originRect.height}px`,
      transform: 'none',
    };
  };

  // Calculate expanded styles - only cover the main content area
  const getExpandedStyles = () => {
    return {
      top: '0px',
      left: '0px',
      width: '100%',
      height: '99%',
      transform: 'none',
    };
  };

  return (
    <div className="absolute inset-0 z-50">
      {/* Background overlay - only covers the main content area */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${
          animationPhase === 'expanded' ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Undercut effect - shows the layered page effect */}
      <div
        className={`absolute h-8 bg-white z-35 transition-opacity duration-200 ${
          animationPhase === 'expanded' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          bottom: '30px',
          left: '0',
          right: '0',
          boxShadow: '0 -6px 16px rgba(0, 0, 0, 0.2)',
        }}
      />

      {/* Main expansion container */}
      <div
        ref={expansionRef}
        className={`absolute z-50 bg-white rounded-2xl shadow-md transition-all duration-200 ease-out ${
          animationPhase === 'expanded' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          ...(animationPhase === 'expanding'
            ? getInitialStyles()
            : getExpandedStyles()),
          transformOrigin: 'top left',
        }}
      >
        {isLoading ? (
          <div className="h-full flex items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <div className="h-full flex flex-col">
            {/* Header - Fixed at top */}
            <div
              className={`flex items-center justify-between px-6 py-3 border-b border-gray-200 transition-all duration-200 flex-shrink-0 ${
                animationPhase === 'expanded'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay:
                  animationPhase === 'expanded' ? '100ms' : '0ms',
              }}
            >
              {/* Left side - Logo and Community name */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <img src="/images/avatars/blue-icon.png" alt="Webflow" />
                </div>
                <span className="text-gray-900 text-xs">WEBFLOW COMMUNITY</span>
              </div>

              {/* Right side - Action buttons */}
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  Join
                </button>
                <button className="w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00007 8.66673C8.36827 8.66673 8.66673 8.36826 8.66673 8.00006C8.66673 7.63186 8.36827 7.3334 8.00007 7.3334C7.63187 7.3334 7.3334 7.63186 7.3334 8.00006C7.3334 8.36826 7.63187 8.66673 8.00007 8.66673Z"
                      fill="#191B1F"
                    />
                    <path
                      d="M13.5001 8.66673C13.8683 8.66673 14.1667 8.36826 14.1667 8.00006C14.1667 7.63186 13.8683 7.3334 13.5001 7.3334C13.1319 7.3334 12.8334 7.63186 12.8334 8.00006C12.8334 8.36826 13.1319 8.66673 13.5001 8.66673Z"
                      fill="#191B1F"
                    />
                    <path
                      d="M2.50007 8.66673C2.86825 8.66673 3.16673 8.36826 3.16673 8.00006C3.16673 7.63186 2.86825 7.3334 2.50007 7.3334C2.13188 7.3334 1.8334 7.63186 1.8334 8.00006C1.8334 8.36826 2.13188 8.66673 2.50007 8.66673Z"
                      fill="#191B1F"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.2334 8.00006C1.2334 7.30049 1.80052 6.7334 2.50007 6.7334C3.19961 6.7334 3.76673 7.30049 3.76673 8.00006C3.76673 8.69964 3.19961 9.26673 2.50007 9.26673C1.80052 9.26673 1.2334 8.69964 1.2334 8.00006ZM2.50007 7.9334C2.46324 7.9334 2.4334 7.96324 2.4334 8.00006C2.4334 8.03689 2.46324 8.06673 2.50007 8.06673C2.53689 8.06673 2.56673 8.03689 2.56673 8.00006C2.56673 7.96324 2.53689 7.9334 2.50007 7.9334ZM6.7334 8.00006C6.7334 7.30049 7.3005 6.7334 8.00007 6.7334C8.69964 6.7334 9.26673 7.30049 9.26673 8.00006C9.26673 8.69964 8.69964 9.26673 8.00007 9.26673C7.3005 9.26673 6.7334 8.69964 6.7334 8.00006ZM8.00007 7.9334C7.96324 7.9334 7.9334 7.96324 7.9334 8.00006C7.9334 8.03689 7.96324 8.06673 8.00007 8.06673C8.0369 8.06673 8.06673 8.03689 8.06673 8.00006C8.06673 7.96324 8.0369 7.9334 8.00007 7.9334ZM12.2334 8.00006C12.2334 7.30049 12.8005 6.7334 13.5001 6.7334C14.1996 6.7334 14.7667 7.30049 14.7667 8.00006C14.7667 8.69964 14.1996 9.26673 13.5001 9.26673C12.8005 9.26673 12.2334 8.69964 12.2334 8.00006ZM13.5001 7.9334C13.4632 7.9334 13.4334 7.96324 13.4334 8.00006C13.4334 8.03689 13.4632 8.06673 13.5001 8.06673C13.5369 8.06673 13.5667 8.03689 13.5667 8.00006C13.5667 7.96324 13.5369 7.9334 13.5001 7.9334Z"
                      fill="#191B1F"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-300 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.74214 2.74214C2.97646 2.50783 3.35636 2.50783 3.59067 2.74214L7.99974 7.15121L12.4088 2.74214C12.6431 2.50783 13.023 2.50783 13.2573 2.74214C13.4917 2.97646 13.4917 3.35636 13.2573 3.59067L8.84827 7.99974L13.2573 12.4088C13.4917 12.6431 13.4917 13.023 13.2573 13.2573C13.023 13.4917 12.6431 13.4917 12.4088 13.2573L7.99974 8.84827L3.59067 13.2573C3.35636 13.4917 2.97646 13.4917 2.74214 13.2573C2.50783 13.023 2.50783 12.6431 2.74214 12.4088L7.15121 7.99974L2.74214 3.59067C2.50783 3.35636 2.50783 2.97646 2.74214 2.74214Z"
                      fill="#191B1F"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto min-h-0">
              <div
                className={`max-w-2xl mx-auto p-6 transition-all duration-300 ${
                  animationPhase === 'expanded'
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay:
                    animationPhase === 'expanded' ? '150ms' : '0ms',
                }}
              >
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
            </div>

            {/* Footer - Fixed at bottom */}
            <div
              className={`border-t border-gray-200 p-6 transition-all duration-250 rounded-b-xl flex-shrink-0 bg-white ${
                animationPhase === 'expanded'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay:
                  animationPhase === 'expanded' ? '200ms' : '0ms',
              }}
            >
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center justify-between">
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
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostExpansion;
