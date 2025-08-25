import React, { useState, useEffect, useRef } from 'react';
import { ViewMode } from '../types';

interface NavbarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  onToggleAIHelper: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  onViewModeChange,
  onToggleAIHelper,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-header-bg text-white px-6 py-2 shadow-lg border-0 relative">
      <div className="flex items-center justify-between">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <img src="/images/logo.png" alt="Circle Logo" className="w-8 h-8" />
          <span className="font-semibold text-sm text-white">
            Future Founders
          </span>
        </div>

        {/* Center Section */}
        <div className="flex items-center space-x-4 flex-1 justify-center max-w-2xl">
          {/* Admin Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 bg-header-dropdown hover:bg-opacity-80 px-4 py-2 rounded-lg  bg-[#717680]/10 text-sm font-medium text-white"
            >
              <span>{viewMode}</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50">
                <div className="py-2">
                  <button
                    onClick={() => {
                      onViewModeChange('Admin');
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      viewMode === 'Admin'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700'
                    }`}
                  >
                    Admin
                  </button>
                  <button
                    onClick={() => {
                      onViewModeChange('Community');
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                      viewMode === 'Community'
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700'
                    }`}
                  >
                    Community
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-gray-400"
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
              className="w-full pl-10 pr-4 py-2 text-sm rounded-lg text-white bg-[#717680]/10 placeholder-[white] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Inbox Icon */}
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
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
                  d="M2.99435 3.61845C3.32518 2.97292 3.98953 2.56689 4.71489 2.56689H11.2851C12.0104 2.56689 12.6748 2.97289 13.0056 3.61845C13.0056 3.61844 13.0056 3.61846 13.0056 3.61845L15.2205 7.94024C15.3603 8.213 15.4333 8.51527 15.4333 8.82203V11.5002C15.4333 12.568 14.5678 13.4336 13.5 13.4336H2.49998C1.43224 13.4336 0.56665 12.568 0.56665 11.5002V8.82203C0.56665 8.51533 0.639587 8.21313 0.779443 7.94024C0.779443 7.94024 0.779444 7.94024 0.779443 7.94024L2.99435 3.61845ZM1.76665 9.10023V11.5002C1.76665 11.9053 2.09497 12.2336 2.49998 12.2336H13.5C13.905 12.2336 14.2333 11.9053 14.2333 11.5002V9.10023H11.0485C10.8206 9.10023 10.6059 9.20606 10.4671 9.38658L10.2427 9.67844C9.87672 10.1546 9.31031 10.4336 8.70985 10.4336H7.29012C6.68966 10.4336 6.12333 10.1546 5.75737 9.67855C5.75736 9.67853 5.75739 9.67857 5.75737 9.67855L5.53296 9.38669C5.39416 9.20611 5.17929 9.10023 4.95153 9.10023H1.76665ZM13.8516 7.90023L11.9377 4.16576C11.8122 3.92096 11.5602 3.76689 11.2851 3.76689H4.71489C4.43975 3.76689 4.18776 3.92091 4.06227 4.16576L2.14836 7.90023H4.95153C5.55197 7.90023 6.11836 8.17921 6.48431 8.6553L6.70868 8.9471C6.84749 9.12769 7.06233 9.23356 7.29012 9.23356H8.70985C8.93766 9.23356 9.15245 9.12773 9.29118 8.94721L9.51565 8.65535C9.88158 8.1792 10.448 7.90023 11.0485 7.90023H13.8516Z"
                  fill="#E4E7EB"
                />
              </svg>
            </button>
            {/* Chat Bubble Icon */}
            <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
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
                  d="M3.16661 3.0999C2.7616 3.0999 2.43328 3.42823 2.43328 3.83324V10.8332C2.43328 11.2383 2.76159 11.5666 3.16661 11.5666H5.76782C6.06538 11.5666 6.35345 11.6713 6.58151 11.8625L7.95826 13.0166C7.98279 13.0371 8.01871 13.0374 8.04362 13.0167M8.04362 13.0167L9.44241 11.8579C9.66967 11.6695 9.95564 11.5666 10.2505 11.5666H12.8333C13.2383 11.5666 13.5666 11.2383 13.5666 10.8332V3.83324C13.5666 3.42822 13.2383 3.0999 12.8333 3.0999H3.16661M1.23328 3.83324C1.23328 2.76548 2.09886 1.8999 3.16661 1.8999H12.8333C13.9011 1.8999 14.7666 2.76549 14.7666 3.83324V10.8332C14.7666 11.901 13.901 12.7666 12.8333 12.7666H10.2505C10.235 12.7666 10.2199 12.772 10.2081 12.7818L8.8092 13.9408C8.33838 14.3308 7.65603 14.3291 7.18736 13.9362M7.18736 13.9362L5.81067 12.7821C5.79869 12.7721 5.7835 12.7666 5.76782 12.7666H3.16661C2.09886 12.7666 1.23328 11.901 1.23328 10.8332V3.83324"
                  fill="#E4E7EB"
                />
              </svg>
            </button>

            {/* Star/Spark Icon */}
            <button
              onClick={onToggleAIHelper}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
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
                  fill="#E4E7EB"
                />
              </svg>
            </button>

            {/* User Profile with Purple Glow */}
            <div className="flex items-center space-x-2 cursor-pointer hover:bg-white/10 rounded-lg p-1 transition-colors">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-sm opacity-50"></div>
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Profile"
                  className="relative w-8 h-8 rounded-full border-2 border-white"
                />
              </div>
            </div>
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
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
