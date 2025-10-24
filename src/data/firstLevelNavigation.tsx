import React from 'react';

export interface FirstLevelNavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

export const firstLevelNavItems: FirstLevelNavItem[] = [
  {
    id: 'circle',
    title: 'Circle',
    icon: (
      <img
        src="/images/circle-logo.png"
        alt="Circle Logo"
        className="w-8.5 h-8.5"
      />
    ),
    activeIcon: (
      <img
        src="/images/circle-logo.png"
        alt="Circle Logo"
        className="w-8.5 h-8.5"
      />
    ),
  },
  {
    id: 'discover',
    title: 'Discover',
    icon: <img src="/icons/discover.svg" alt="Discover" className="w-5 h-5" />,
    activeIcon: (
      <img
        src="/icons/discover-filled.svg"
        alt="Discover"
        className="w-5 h-5"
      />
    ),
  },
  {
    id: 'inbox',
    title: 'Inbox',
    icon: <img src="/icons/Inbox.svg" alt="Inbox" className="w-6 h-6" />,
    activeIcon: (
      <img src="/icons/Inbox-filled.svg" alt="Inbox" className="w-6 h-6" />
    ),
  },
  {
    id: 'notifications',
    title: 'Notifications',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.25 17.25H3.75V16L5.29688 13L5.50351 8.90897C5.6766 5.45882 8.53386 2.75 12 2.75C15.4661 2.75 18.3234 5.45882 18.4965 8.90897L18.7031 13L20.25 16V17.25Z"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17.25C16 19.4591 14.2091 21.25 12 21.25C9.79086 21.25 8 19.4591 8 17.25"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C8.13655 2 4.94782 5.0198 4.75447 8.87114L4.556 12.8003L3.0834 15.6563C3.02859 15.7626 3 15.8804 3 16V17.25C3 17.6642 3.33579 18 3.75 18H7.30888C7.66846 20.267 9.63185 22 12 22C14.3682 22 16.3315 20.267 16.6911 18H20.25C20.6642 18 21 17.6642 21 17.25V16C21 15.8804 20.9714 15.7626 20.9166 15.6563L19.444 12.8003L19.2455 8.87139C19.0522 5.02005 15.8634 2 12 2ZM12 20.5C10.4632 20.5 9.17555 19.4333 8.83697 18H15.163C14.8245 19.4333 13.5368 20.5 12 20.5Z"
          fill="#191B1F"
        />
      </svg>
    ),
  },
  {
    id: 'manage',
    title: 'Manage',
    icon: <img src="/icons/settings.svg" alt="Manage" className="w-6 h-6" />,
    activeIcon: (
      <img src="/icons/settings-filled.svg" alt="Manage" className="w-6 h-6" />
    ),
  },
  {
    id: 'harvard',
    title: 'Harvard Business School',
    icon: (
      <img
        src="/images/avatars/harvard.png"
        alt="Harvard Business School"
        className="h-6 w-6"
      />
    ),
    activeIcon: (
      <img
        src="/images/avatars/harvard.png"
        alt="Harvard Business School"
        className="h-6 w-6"
      />
    ),
  },
  {
    id: 'webflow',
    title: 'Webflow',
    icon: (
      <img
        src="/images/avatars/blue-icon.png"
        alt="Webflow"
        className="h-6 w-6"
      />
    ),
    activeIcon: (
      <img
        src="/images/avatars/blue-icon.png"
        alt="Webflow"
        className="h-6 w-6"
      />
    ),
  },
  {
    id: 'framer',
    title: 'Framer',
    icon: (
      <img
        src="/images/avatars/black-icon.png"
        alt="Framer"
        className="h-6 w-6"
      />
    ),
    activeIcon: (
      <img
        src="/images/avatars/black-icon.png"
        alt="Framer"
        className="h-6 w-6"
      />
    ),
  },
  {
    id: 'obama foundation',
    title: 'Obama Foundation',
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/white-icon.png"
          alt="Obama Foundation"
          className="h-6 w-6"
        />
      </div>
    ),
    activeIcon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/white-icon.png"
          alt="Obama Foundation"
          className="h-6 w-6"
        />
      </div>
    ),
  },
  {
    id: 'more',
    title: 'More',
    icon: <img src="/icons/more.svg" alt="More" className="w-6 h-6" />,
    activeIcon: (
      <img src="/icons/more-filled.svg" alt="More" className="w-6 h-6" />
    ),
  },
];
