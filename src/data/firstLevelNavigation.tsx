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
    id: 'home',
    title: 'Home',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.75 8.7503L3.27507 8.16983L3 8.39489V8.7503H3.75ZM20.25 8.7503H21V8.39489L20.7249 8.16983L20.25 8.7503ZM20.25 20.2503V21.0003H21V20.2503H20.25ZM3.75 20.2503H3V21.0003H3.75V20.2503ZM12 2.0003L12.4749 1.41983L12 1.03125L11.5251 1.41983L12 2.0003ZM7.75 15.5003C7.33579 15.5003 7 15.8361 7 16.2503C7 16.6645 7.33579 17.0003 7.75 17.0003V15.5003ZM16.25 17.0003C16.6642 17.0003 17 16.6645 17 16.2503C17 15.8361 16.6642 15.5003 16.25 15.5003V17.0003ZM19.5 8.7503V20.2503H21V8.7503H19.5ZM20.25 19.5003H3.75V21.0003H20.25V19.5003ZM4.5 20.2503V8.7503H3V20.2503H4.5ZM4.22493 9.33077L12.4749 2.58077L11.5251 1.41983L3.27507 8.16983L4.22493 9.33077ZM11.5251 2.58077L19.7751 9.33077L20.7249 8.16983L12.4749 1.41983L11.5251 2.58077ZM7.75 17.0003H16.25V15.5003H7.75V17.0003Z"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4749 1.41953C12.1987 1.19349 11.8013 1.19349 11.5251 1.41953L3.27507 8.16953C3.10097 8.31198 3 8.52505 3 8.75V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25V8.75C21 8.52505 20.899 8.31198 20.7249 8.16953L12.4749 1.41953ZM7.75 15.5C7.33579 15.5 7 15.8358 7 16.25C7 16.6642 7.33579 17 7.75 17H16.25C16.6642 17 17 16.6642 17 16.25C17 15.8358 16.6642 15.5 16.25 15.5H7.75Z"
          fill="#191B1F"
        />
      </svg>
    ),
  },
  {
    id: 'discover',
    title: 'Discover',
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 1.75V8.25M12 15.75V22.25M8.25 12H1.75M15.75 12H22.25M8 8L6 6M16 8L18 6M16 16L18 18M8 16L6 18"
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
          d="M12 1C12.4142 1 12.75 1.33579 12.75 1.75V8.25C12.75 8.66421 12.4142 9 12 9C11.5858 9 11.25 8.66421 11.25 8.25V1.75C11.25 1.33579 11.5858 1 12 1ZM5.46967 5.46967C5.76256 5.17678 6.23744 5.17678 6.53033 5.46967L8.53033 7.46967C8.82322 7.76256 8.82322 8.23744 8.53033 8.53033C8.23744 8.82322 7.76256 8.82322 7.46967 8.53033L5.46967 6.53033C5.17678 6.23744 5.17678 5.76256 5.46967 5.46967ZM18.5303 5.46967C18.8232 5.76256 18.8232 6.23744 18.5303 6.53033L16.5303 8.53033C16.2374 8.82322 15.7626 8.82322 15.4697 8.53033C15.1768 8.23744 15.1768 7.76256 15.4697 7.46967L17.4697 5.46967C17.7626 5.17678 18.2374 5.17678 18.5303 5.46967ZM1 12C1 11.5858 1.33579 11.25 1.75 11.25H8.25C8.66421 11.25 9 11.5858 9 12C9 12.4142 8.66421 12.75 8.25 12.75H1.75C1.33579 12.75 1 12.4142 1 12ZM15 12C15 11.5858 15.3358 11.25 15.75 11.25H22.25C22.6642 11.25 23 11.5858 23 12C23 12.4142 22.6642 12.75 22.25 12.75H15.75C15.3358 12.75 15 12.4142 15 12ZM12 15C12.4142 15 12.75 15.3358 12.75 15.75V22.25C12.75 22.6642 12.4142 23 12 23C11.5858 23 11.25 22.6642 11.25 22.25V15.75C11.25 15.3358 11.5858 15 12 15ZM8.53033 15.4697C8.82322 15.7626 8.82322 16.2374 8.53033 16.5303L6.53033 18.5303C6.23744 18.8232 5.76256 18.8232 5.46967 18.5303C5.17678 18.2374 5.17678 17.7626 5.46967 17.4697L7.46967 15.4697C7.76256 15.1768 8.23744 15.1768 8.53033 15.4697ZM15.4697 15.4697C15.7626 15.1768 16.2374 15.1768 16.5303 15.4697L18.5303 17.4697C18.8232 17.7626 18.8232 18.2374 18.5303 18.5303C18.2374 18.8232 17.7626 18.8232 17.4697 18.5303L15.4697 16.5303C15.1768 16.2374 15.1768 15.7626 15.4697 15.4697Z"
          fill="#191B1F"
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
