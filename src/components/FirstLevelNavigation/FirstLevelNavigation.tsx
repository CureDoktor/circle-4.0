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
  community?: string;
}

const FirstLevelNavigation: React.FC<FirstLevelNavigationProps> = ({
  items,
  onItemClick,
  activeItem,
  community = 'circle',
}) => {
  const handleItemClick = (itemId: string) => {
    onItemClick(itemId);
  };

  // Split items: exclude settings item (index 5) from top section
  const topItems = items.filter((_, index) => index !== 4);
  const settingsItem = items[4]; // Settings item at index 4

  // Filter out community items when Oprah is active
  const getFilteredItems = () => {
    if (community === 'oprah') {
      // Hide community items (harvard, webflow, framer, obama foundation, more)
      return topItems.filter(
        item =>
          ![
            'harvard',
            'webflow',
            'framer',
            'obama foundation',
            'more',
          ].includes(item.id)
      );
    }
    return topItems;
  };

  const filteredItems = getFilteredItems();

  // Helper function to get the icon for an item (with Oprah logo override)
  const getItemIcon = (item: (typeof items)[0], isActive: boolean) => {
    // If this is the Circle item and Oprah community is active, show Oprah logo
    if (item.id === 'circle' && community === 'oprah') {
      return (
        <img
          src="/images/oprah-logo.png"
          alt="Oprah Logo"
          className="w-8.5 h-8.5 rounded-lg"
        />
      );
    }
    // Otherwise, use the normal icon logic
    return isActive && item.activeIcon ? item.activeIcon : item.icon;
  };

  return (
    <div className="bg-base-grey-100 text-white w-15 px-3 h-full flex flex-col items-center justify-between pt-6 pb-[30px]">
      {/* Top Section - filtered items */}
      <div className="flex flex-col gap-4">
        {/* First 4 items */}
        {filteredItems.slice(0, 4).map((item, index) => (
          <React.Fragment key={item.id}>
            <div className={`relative group ${index === 0 ? 'pb-[6px]' : ''}`}>
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
                  {getItemIcon(item, activeItem === item.id)}
                </div>
              </button>

              {/* Tooltip */}
              <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-9999">
                {item.id === 'circle' && community === 'oprah'
                  ? 'Oprah'
                  : item.title}
              </div>
            </div>

            {/* Oprah-only SVG buttons (after notifications) */}
            {community === 'oprah' &&
              item.id === 'notifications' &&
              index === filteredItems.slice(0, 4).length - 1 && (
                <>
                  {/* First Oprah SVG */}
                  <div className="relative group">
                    <button
                      className="w-[36px] h-[36px] rounded-xl flex items-center hover:bg-gray-200 justify-center transition-all duration-200 hover:scale-105"
                      title="Oprah Feature 1"
                      aria-label="Oprah Feature 1"
                    >
                      <div className="transition-all duration-200">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.25 20.2515V3.75C19.25 3.19772 18.8023 2.75 18.25 2.75H5.75C5.19772 2.75 4.75 3.19771 4.75 3.75V20.2515C4.75 21.0522 5.64414 21.5281 6.30839 21.081L11.4416 17.6259C11.7792 17.3986 12.2208 17.3986 12.5584 17.6259L17.6916 21.081C18.3559 21.5282 19.25 21.0522 19.25 20.2515Z"
                            stroke="#545861"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Tooltip */}
                    <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-9999">
                      Oprah Feature 1
                    </div>
                  </div>

                  {/* Second Oprah SVG */}
                  <div className="relative group">
                    <button
                      className="w-[36px] h-[36px] rounded-xl flex items-center hover:bg-gray-200 justify-center transition-all duration-200 hover:scale-105"
                      title="Oprah Feature 2"
                      aria-label="Oprah Feature 2"
                    >
                      <div className="transition-all duration-200">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 7.75V11M12 11V14.25M12 11H8.75M12 11H15.25M9.29422 18.4836L11.3593 20.2147C11.7292 20.5248 12.2679 20.5263 12.6397 20.2183L14.738 18.4799C14.9173 18.3313 15.143 18.25 15.3759 18.25H19.25C19.8023 18.25 20.25 17.8023 20.25 17.25V4.75C20.25 4.19772 19.8023 3.75 19.25 3.75H4.75C4.19772 3.75 3.75 4.19771 3.75 4.75V17.25C3.75 17.8023 4.19772 18.25 4.75 18.25H8.65182C8.88675 18.25 9.11418 18.3327 9.29422 18.4836Z"
                            stroke="#545861"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>

                    {/* Tooltip */}
                    <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-9999">
                      Oprah Feature 2
                    </div>
                  </div>
                </>
              )}
          </React.Fragment>
        ))}

        {/* Separator line between 5th and 6th items */}
        <div className="w-[24px] h-px mx-auto bg-[#E4E7EB] my-2"></div>

        {/* Last items (excluding settings) */}
        {filteredItems.slice(4).map(item => (
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
                {getItemIcon(item, activeItem === item.id)}
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
