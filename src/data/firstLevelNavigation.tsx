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
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
    ),
    activeIcon: (
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">C</span>
      </div>
    ),
  },
  {
    id: 'home',
    title: 'Home',
    icon: (
      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
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
            d="M11.3694 1.47389C11.7368 1.17537 12.2632 1.17537 12.6306 1.47389L20.6306 7.97389C20.8643 8.16378 21 8.44887 21 8.75V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V8.75C3 8.44887 3.1357 8.16378 3.36941 7.97389L11.3694 1.47389ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H16C16.5523 17 17 16.5523 17 16C17 15.4477 16.5523 15 16 15H8Z"
            fill="#191B1F"
          />
        </svg>
      </div>
    ),
    activeIcon: (
      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            fill="#374151"
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 22V12H15V22"
            fill="#374151"
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    id: 'star',
    title: 'Star',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 6.18838 10.331 8.25562 9.1178 9.53621C7.91616 10.8046 5.98995 11.5 3 11.5C2.44772 11.5 2 11.9477 2 12.5C2 13.0523 2.44772 13.5 3 13.5C5.98995 13.5 7.91616 14.1954 9.1178 15.4638C10.331 16.7444 11 18.8116 11 22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22C13 18.8116 13.669 16.7444 14.8822 15.4638C16.0838 14.1954 18.01 13.5 21 13.5C21.5523 13.5 22 13.0523 22 12.5C22 11.9477 21.5523 11.5 21 11.5C18.01 11.5 16.0838 10.8046 14.8822 9.53621C13.669 8.25562 13 6.18838 13 3Z"
          fill="#545861"
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
          d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 6.18838 10.331 8.25562 9.1178 9.53621C7.91616 10.8046 5.98995 11.5 3 11.5C2.44772 11.5 2 11.9477 2 12.5C2 13.0523 2.44772 13.5 3 13.5C5.98995 13.5 7.91616 14.1954 9.1178 15.4638C10.331 16.7444 11 18.8116 11 22C11 22.5523 11.4477 23 12 23C12.5523 23 13 22.5523 13 22C13 18.8116 13.669 16.7444 14.8822 15.4638C16.0838 14.1954 18.01 13.5 21 13.5C21.5523 13.5 22 13.0523 22 12.5C22 11.9477 21.5523 11.5 21 11.5C18.01 11.5 16.0838 10.8046 14.8822 9.53621C13.669 8.25562 13 6.18838 13 3Z"
          fill="#545861"
        />
      </svg>
    ),
  },
  {
    id: 'inbox',
    title: 'Inbox',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12H8.5L10 14H14L15.5 12H21M22 12L18 5H6L2 12V19H22V12Z"
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
          d="M22 12H16L14 15H10L8 12H2"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.45 5.11L2 12V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4 16.76 4H7.24C6.86792 4 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
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
          d="M4.80754 9.46301C5.20136 5.78731 8.30327 3 12 3C15.6967 3 18.7986 5.78732 19.1925 9.46301L20 17H4L4.80754 9.46301Z"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17C16 19.2091 14.2091 21 12 21C9.79086 21 8 19.2091 8 17"
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
          d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
          fill="#545861"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'compass',
    title: 'Compass',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 8.5L10 10L8.5 15.5L14 14L15.5 8.5Z"
          stroke="#545861"
          strokeWidth="1.5"
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
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 8.5L10 10L8.5 15.5L14 14L15.5 8.5Z"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'harvard',
    title: 'Harvard Business School',
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/harvard.png"
          alt="Harvard Business School"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    activeIcon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/harvard.png"
          alt="Harvard Business School"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    id: 'community',
    title: 'Community',
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/blue-icon.png"
          alt="Community"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    activeIcon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/blue-icon.png"
          alt="Community"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/black-icon.png"
          alt="Analytics"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    activeIcon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/black-icon.png"
          alt="Analytics"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
  {
    id: 'settings',
    title: 'Settings',
    icon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/white-icon.png"
          alt="Settings"
          className="w-full h-full object-cover"
        />
      </div>
    ),
    activeIcon: (
      <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src="/images/avatars/white-icon.png"
          alt="Settings"
          className="w-full h-full object-cover"
        />
      </div>
    ),
  },
];
