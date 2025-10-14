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
    icon: <img src="/images/logo.png" alt="Circle Logo" className="w-6 h-6" />,
    activeIcon: (
      <img src="/images/logo.png" alt="Circle Logo" className="w-6 h-6" />
    ),
  },
  {
    id: 'discover',
    title: 'Discover',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10L12.3954 12.3954L10 20L7.60458 12.3954L-2.34446e-06 10L7.60458 7.60458L10 -4.37114e-07L12.3954 7.60458L20 10Z"
          fill="#545861"
        />
      </svg>
    ),
    activeIcon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 10L12.3954 12.3954L10 20L7.60458 12.3954L-2.34446e-06 10L7.60458 7.60458L10 -4.37114e-07L12.3954 7.60458L20 10Z"
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
          d="M3.75 12.75H8.0702C8.42126 14.6006 10.0472 16 12 16C13.9528 16 15.5787 14.6006 15.9298 12.75H20.25M3.75 20.25H20.25V3.75L3.75005 3.75001L3.75 20.25Z"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinecap="square"
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
          d="M20 3L4.00005 3.00001C3.44777 3.00001 3.00005 3.44772 3.00005 4L3 20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H20C20.5523 21 21 20.5523 21 20V4C21 3.73478 20.8947 3.48043 20.7071 3.29289C20.5196 3.10536 20.2652 3 20 3ZM5.00003 12L5.00005 5.00001L19 5V12H15.874C15.4177 12 15.0193 12.3089 14.9055 12.7507C14.5725 14.0449 13.3965 15 12 15C10.6035 15 9.42754 14.0449 9.09446 12.7507C8.98072 12.3089 8.5823 12 8.12602 12H5.00003Z"
          fill="#191B1F"
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
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3L20 7.49995V16.4999L12 20.9999L4 16.5002V7.49992L12 3Z"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M15 12C15 13.6569 13.6569 15 12 15C10.3432 15 9 13.6569 9 12C9 10.3431 10.3432 9 12 9C13.6569 9 15 10.3431 15 12Z"
          stroke="#545861"
          strokeWidth="1.5"
          strokeLinecap="square"
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
          d="M3 7.49992C3 7.23165 3.14329 6.98381 3.37578 6.84995L11.6258 2.10003C11.8574 1.96666 12.1426 1.96666 12.3742 2.10003L20.6242 6.84998C20.8567 6.98383 21 7.23167 21 7.49995V16.4999C21 16.7682 20.8567 17.0161 20.6242 17.1499L12.3742 21.8998C12.1426 22.0332 11.8574 22.0332 11.6258 21.8998L3.3758 17.1502C3.1433 17.0164 3 16.7685 3 16.5002V7.49992ZM8.37502 12C8.37502 9.99797 9.99799 8.375 12 8.375C14.0021 8.375 15.625 9.99797 15.625 12C15.625 14.002 14.0021 15.625 12 15.625C9.99799 15.625 8.37502 14.002 8.37502 12Z"
          fill="#191B1F"
        />
      </svg>
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
];
