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
        width: '400px',
        height: '200px',
        transform: 'translate(-50%, -50%)',
      };
    }

    const containerRect = document
      .querySelector('.main-content-container')
      ?.getBoundingClientRect();
    if (!containerRect) {
      return {
        top: '50%',
        left: '50%',
        width: '400px',
        height: '200px',
        transform: 'translate(-50%, -50%)',
      };
    }

    // Calculate relative position within the main content container
    const relativeTop = originRect.top - containerRect.top;
    const relativeLeft = originRect.left - containerRect.left;

    return {
      top: `${relativeTop}px`,
      left: `${relativeLeft}px`,
      width: `${originRect.width}px`,
      height: `${originRect.height}px`,
    };
  };

  const getExpandedStyles = () => {
    // Position relative to the main content container (right side)
    const containerRect = document
      .querySelector('.main-content-container')
      ?.getBoundingClientRect();
    if (!containerRect) {
      return {
        top: '0',
        left: '0',
        width: '100%',
        height: 'calc(100% + 20px)',
        marginBottom: '-20px',
        transform: 'translate(0, 0)',
      };
    }

    return {
      top: `${containerRect.top - 10}px`, // Move up 10px to show overlay effect
      left: `${containerRect.left}px`,
      width: `${containerRect.width}px`,
      height: `${containerRect.height + 30}px`, // Add 30px to height for better undercut
      marginBottom: '-30px', // Negative margin to create undercut effect
      transform: 'translate(0, 0)',
    };
  };

  const currentStyles =
    animationPhase === 'expanded' ? getExpandedStyles() : getInitialStyles();

  // Get container rect for undercut positioning
  const containerRect = document
    .querySelector('.main-content-container')
    ?.getBoundingClientRect();

  return (
    <>
      {/* Background overlay with undercut effect */}
      <div
        className={`fixed inset-0 bg-black/20 z-40 transition-opacity duration-200 ${
          animationPhase === 'expanded' ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />

      {/* Undercut effect - shows bottom of previous page */}
      <div
        className={`fixed h-8 bg-white z-35 transition-opacity duration-200 ${
          animationPhase === 'expanded' ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          bottom: '30px', // Position 30px from bottom to show undercut
          left: `${containerRect?.left || 0}px`,
          right: `${
            window.innerWidth - (containerRect?.right || window.innerWidth)
          }px`,
          boxShadow: '0 -6px 16px rgba(0, 0, 0, 0.2)',
        }}
      />

      {/* Main expansion container */}
      <div
        ref={expansionRef}
        className={`fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-200 ease-out ${
          animationPhase === 'expanded' ? 'rounded-2xl' : 'rounded-lg'
        }`}
        style={{
          ...currentStyles,
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
              className={`flex items-center justify-between p-6 border-b border-gray-200 transition-all duration-200 flex-shrink-0 ${
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
                  onClick={handleClose}
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
                {/* Article Header */}
                <div className="mb-6">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {post.title ||
                      'Cognitive Load, Hiring a Strong Founding Team, and How to Launch Your Startup Out of Stealth'}
                  </h1>
                  <p className="text-gray-600 mb-4">carry the boats.</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="font-semibold uppercase">
                      {post.author || 'BARTEK PUCEK'}
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
                      can&apos;t be raised from investors or outsourced to
                      staff: mental bandwidth.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      Cognitive load is the silent tax on leadership,
                      compounding faster than burn rate.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                      The human brain can hold roughly four &quot;chunks&quot;
                      of information at once. That&apos;s fine for debugging a
                      function, but lethal when you&apos;re simultaneously:
                    </p>
                    <ul className="list-disc list-inside text-lg text-gray-700 mb-4 space-y-1">
                      <li>Closing a funding round</li>
                      <li>Hiring a Founding Engineer</li>
                      <li>Deciding whether to pivot product strategy</li>
                    </ul>
                  </div>

                  {/* Content Image */}
                  {post.image && (
                    <div className="mb-6">
                      <img
                        src={post.image}
                        alt="Content"
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Original Content */}
                  <div className="mb-6">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {post.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer - Fixed at bottom */}
            <div
              className={`border-t border-gray-200 p-6 transition-all duration-250 flex-shrink-0 bg-white ${
                animationPhase === 'expanded'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
              style={{
                transitionDelay:
                  animationPhase === 'expanded' ? '200ms' : '0ms',
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
                        {post.likes || 3}
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
        )}
      </div>
    </>
  );
};

export default PostExpansion;
