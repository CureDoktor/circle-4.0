import React, { useState } from 'react';
import { ViewMode } from '../types';

interface NavbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onToggleAIHelper: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleAIHelper }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="text-white px-5 py-1.5 border-b border-gray-100 relative bg-white">
      <div className="flex items-center justify-between">
        {/* Logo and App Name */}
        <div className="flex items-center gap-2">
          {/* Logo */}
          <img
            src="/images/circle-logo.png"
            alt="Circle Logo"
            className="w-5 h-5 rounded-full"
          />
          <img
            src="/images/avatars/blue-icon.png"
            alt="Circle Logo"
            className="w-5 h-5x relative -left-3 rounded-lg"
          />
          <span className="font-semibold text-sm text-black relative -left-3">
            Future Founders
          </span>
        </div>

        {/* Center Section */}
        <div className="flex items-center space-x-4 flex-1 justify-center max-w-2xl">
          <div className="relative flex-1 gap-2 max-w-[340px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm text-gray-500 rounded-lg placeholder-[gray-500] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Star/Spark Icon */}
            <button
              onClick={onToggleAIHelper}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.57468 2.42759C8.49854 2.1738 8.26496 2 8 2C7.73504 2 7.50146 2.1738 7.42532 2.42759C6.99368 3.86628 6.43422 4.89225 5.66323 5.66323C4.89225 6.43422 3.86628 6.99368 2.42759 7.42532C2.1738 7.50146 2 7.73504 2 8C2 8.26496 2.1738 8.49854 2.42759 8.57468C3.86628 9.00632 4.89225 9.56576 5.66323 10.3368C6.43422 11.1078 6.99368 12.1337 7.42532 13.5724C7.50146 13.8262 7.73504 14 8 14C8.26496 14 8.49854 13.8262 8.57468 13.5724C9.00632 12.1337 9.56576 11.1078 10.3368 10.3368C11.1078 9.56576 12.1337 9.00632 13.5724 8.57468C13.8262 8.49854 14 8.26496 14 8C14 7.73504 13.8262 7.50146 13.5724 7.42532C12.1337 6.99368 11.1078 6.43422 10.3368 5.66323C9.56576 4.89225 9.00632 3.86628 8.57468 2.42759Z"
                  fill="#191B1F"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-white/20">
          <div className="pt-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 px-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Mobile Menu Items */}
            <div className="flex flex-col space-y-2">
              <button className="flex items-center space-x-3 p-2 hover:bg-white/10 rounded-lg transition-colors">
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
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <span>Inbox</span>
              </button>
              <button className="flex items-center space-x-3 p-2 hover:bg-white/10 rounded-lg transition-colors">
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
                <span>Messages</span>
              </button>
              <button className="flex items-center space-x-3 p-2 hover:bg-white/10 rounded-lg transition-colors">
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
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                <span>Favorites</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
