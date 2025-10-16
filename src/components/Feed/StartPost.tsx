import React from 'react';

interface StartPostProps {
  className?: string;
}

const StartPost: React.FC<StartPostProps> = ({ className }) => {
  return (
    <div
      className={`bg-gray-50 border-2 border-gray-200 rounded-2xl pl-6 pr-4 py-4 ${className}`}
    >
      <div className="flex items-center w-full">
        <div className="flex flex-1 gap-4 items-center">
          <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">N</span>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 leading-5">Start a post</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-2 w-9 h-9 flex items-center justify-center">
          <div className="w-4 h-4 flex items-center">
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPost;
