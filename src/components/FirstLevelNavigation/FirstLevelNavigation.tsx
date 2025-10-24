import React from 'react';

interface FirstLevelNavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

interface FirstLevelNavigationProps {
  items: FirstLevelNavItem[];
  onItemClick: (itemId: string) => void;
  activeItem: string;
}

const FirstLevelNavigation: React.FC<FirstLevelNavigationProps> = ({
  items,
  onItemClick,
  activeItem,
}) => {
  const handleItemClick = (itemId: string) => {
    onItemClick(itemId);
  };

  // Split items: exclude settings item (index 5) from top section
  const topItems = items.filter((_, index) => index !== 4);
  const settingsItem = items[4]; // Settings item at index 4

  return (
    <div className="bg-base-grey-50 text-white w-15 px-3 h-full flex flex-col items-center justify-between pt-6 pb-[30px]">
      {/* Top Section - 9 items (excluding settings) with separator between 5th and 6th */}
      <div className="flex flex-col gap-4">
        {/* First 4 items */}
        {topItems.slice(0, 4).map((item, index) => (
          <div
            key={item.id}
            className={`relative group ${index === 0 ? 'pb-[8px]' : ''}`}
          >
            <button
              onClick={() => handleItemClick(item.id)}
              className={`w-[36px] h-[36px] rounded-xl flex items-center hover:bg-gray-200 justify-center transition-all duration-200 ${
                activeItem === item.id
                  ? 'border border-gray-200 shadow-sm'
                  : 'hover:scale-105'
              }`}
              title={item.title}
              aria-label={item.title}
            >
              <div className={`transition-all duration-200`}>
                {activeItem === item.id && item.activeIcon
                  ? item.activeIcon
                  : item.icon}
              </div>
            </button>

            {/* Tooltip */}
            <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-9999">
              {item.title}
            </div>
          </div>
        ))}

        {/* Separator line between 5th and 6th items */}
        <div className="w-[24px] h-px mx-auto bg-[#E4E7EB] my-2"></div>

        {/* Last 4 items (6th through 9th, excluding settings) */}
        {topItems.slice(4).map(item => (
          <div key={item.id} className="relative group">
            <button
              onClick={() => handleItemClick(item.id)}
              className={`w-[36px] h-[36px] rounded-xl flex items-center hover:bg-gray-200 justify-center transition-all duration-200 ${
                activeItem === item.id
                  ? 'border border-gray-200 shadow-sm'
                  : 'hover:scale-105'
              }`}
              title={item.title}
              aria-label={item.title}
            >
              <div className={`transition-all duration-200`}>
                {activeItem === item.id && item.activeIcon
                  ? item.activeIcon
                  : item.icon}
              </div>
            </button>

            {/* Tooltip */}
            <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-9999">
              {item.title}
            </div>
          </div>
        ))}
      </div>

      <div>
        {/* Separator line */}
        <div className="w-[24px] h-px mx-auto bg-[#E4E7EB] my-4"></div>

        {/* Settings item */}
        {settingsItem && (
          <div className="relative group mb-4">
            <button
              onClick={() => handleItemClick(settingsItem.id)}
              className={`w-[36px] h-[36px] mx-auto rounded-xl flex items-center hover:bg-gray-200 justify-center transition-all duration-200 ${
                activeItem === settingsItem.id
                  ? 'border border-gray-200 shadow-sm'
                  : 'hover:scale-105'
              }`}
              title={settingsItem.title}
              aria-label={settingsItem.title}
            >
              <div className={`transition-all duration-200`}>
                {activeItem === settingsItem.id && settingsItem.activeIcon
                  ? settingsItem.activeIcon
                  : settingsItem.icon}
              </div>
            </button>

            {/* Tooltip */}
            <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-9999">
              {settingsItem.title}
            </div>
          </div>
        )}

        {/* Profile picture */}
        <div className="relative group">
          <button
            className="p-2 rounded-full flex items-center transition-all duration-200 hover:bg-white/5 hover:scale-105"
            title="Profile"
            aria-label="Profile"
          >
            <div className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-purple-500/50">
              <img
                src="/images/avatars/1.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </button>

          {/* Tooltip */}
          <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-9999">
            Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLevelNavigation;
