import React from 'react';

const InboxNavbar: React.FC = () => {
  return (
    <div className="py-4 px-6 bg-white border-b border-gray-200 flex items-center justify-between">
      {/* Left side - Inbox title */}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold text-gray-900">Inbox</h1>
      </div>

      {/* Right side - Profile and New message button */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 border border-gray-200 shadow-sm transition-colors flex items-center space-x-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.8999 12.1664V3.83282C1.89994 2.7651 2.76577 1.89923 3.8335 1.89923H7.8335L7.89443 1.90235C8.19697 1.93299 8.43333 2.18865 8.4335 2.49923C8.4335 2.80993 8.19704 3.06543 7.89443 3.0961L7.8335 3.09923H3.8335C3.42851 3.09923 3.09994 3.42784 3.0999 3.83282V12.1664C3.10001 12.5713 3.42855 12.8992 3.8335 12.8992H12.1663C12.5713 12.8992 12.8998 12.5714 12.8999 12.1664V8.16642C12.8999 7.83505 13.1685 7.56642 13.4999 7.56642C13.8313 7.56642 14.0999 7.83505 14.0999 8.16642V12.1664C14.0998 13.2341 13.234 14.0992 12.1663 14.0992H3.8335C2.76582 14.0992 1.90001 13.2341 1.8999 12.1664ZM11.446 1.71876C12.2053 1.09922 13.3256 1.14367 14.0335 1.85157L14.1483 1.96564L14.2804 2.11251C14.8587 2.82132 14.8586 3.8443 14.2804 4.55314L14.1483 4.70001L8.45303 10.3953C8.21541 10.6329 7.89274 10.7664 7.55693 10.7664H5.8335C5.5022 10.7664 5.23362 10.4977 5.2335 10.1664V8.4422C5.23355 8.10636 5.36656 7.78435 5.60381 7.54689H5.60459L11.2991 1.85157L11.446 1.71876ZM6.4335 9.56642H7.55693C7.57473 9.56642 7.5922 9.55927 7.60459 9.54689L13.2991 3.85157L13.3499 3.7961C13.585 3.50806 13.5676 3.08262 13.2991 2.81407V2.81329L13.1851 2.70001C12.9167 2.43161 12.4918 2.41451 12.2038 2.64923L12.1483 2.70001L6.45303 8.39532C6.44049 8.40788 6.43355 8.42456 6.4335 8.4422V9.56642Z"
              fill="#191B1F"
            />
          </svg>

          <span>New message</span>
        </button>
      </div>
    </div>
  );
};

export default InboxNavbar;
