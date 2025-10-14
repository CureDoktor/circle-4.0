import React from 'react';

interface ContentContainerProps {
  children: React.ReactNode;
  onToggleSidebar: () => void;
  title: string;
  actions?: React.ReactNode;
  className?: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  onToggleSidebar,
  title,
  actions,
  className = '',
}) => {
  return (
    <div
      className={`page-container h-full flex flex-col overflow-hidden border-r-transparent border-t-transparent ${className}`}
    >
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-shrink-0">
          {/* Header */}
          <div className="p-5 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="flex items-center space-x-3">
              <button
                onClick={onToggleSidebar}
                className="p-1.5 hover:bg-gray-100 rounded-xl border-2 border-gray-100 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.88636 4C4.39684 4 4 4.39684 4 4.88636V15.1136C4 15.6032 4.39683 16 4.88636 16H7.25L7.25 4L4.88636 4ZM2.5 4.88636C2.5 3.56841 3.56841 2.5 4.88636 2.5H15.1136C16.4316 2.5 17.5 3.56842 17.5 4.88636V15.1136C17.5 16.4316 16.4316 17.5 15.1136 17.5H4.88636C3.56842 17.5 2.5 16.4316 2.5 15.1136V4.88636ZM15.1136 4L8.75 4L8.75 16H15.1136C15.6032 16 16 15.6032 16 15.1136V4.88636C16 4.39683 15.6032 4 15.1136 4Z"
                    fill="#191B1F"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-900">{title}</h1>
            </div>
            {actions && (
              <div className="flex items-center space-x-3">{actions}</div>
            )}
          </div>
        </div>

        {/* Content with consistent spacing */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
