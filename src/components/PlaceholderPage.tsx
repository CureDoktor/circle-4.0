import React from 'react';

interface PlaceholderPageProps {
  title: string;
  description: string;
  onToggleSidebar: () => void;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({
  title,
  description,
  onToggleSidebar,
}) => {
  return (
    <div className="bg-white h-full rounded-2xl shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <button
            onClick={onToggleSidebar}
            className="p-2 hover:bg-gray-100 rounded-lg border-2 border-gray-100 transition-colors"
          >
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
                d="M3.90909 3.2C3.51747 3.2 3.2 3.51747 3.2 3.90909V12.0909C3.2 12.4825 3.51746 12.8 3.90909 12.8H5.8L5.8 3.2L3.90909 3.2ZM2 3.90909C2 2.85473 2.85473 2 3.90909 2H12.0909C13.1453 2 14 2.85473 14 3.90909V12.0909C14 13.1453 13.1453 14 12.0909 14H3.90909C2.85473 14 2 13.1453 2 12.0909V3.90909ZM12.0909 3.2L7 3.2L7 12.8H12.0909C12.4825 12.8 12.8 12.4825 12.8 12.0909V3.90909C12.8 3.51746 12.4825 3.2 12.0909 3.2Z"
                fill="#191B1F"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
