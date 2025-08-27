import React, { useState, useEffect } from 'react';
import { SidebarItem } from '../types';

interface SidebarProps {
  items: SidebarItem[];
  onItemClick: (itemId: string, subItemId?: string) => void;
  isCollapsed?: boolean;
  isSidebarContentTransitioning?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  items,
  onItemClick,
  isCollapsed = false,
  isSidebarContentTransitioning = false,
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>('audience');
  const [activeSubItem, setActiveSubItem] = useState<string>('manage-audience');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [wasCollapsed, setWasCollapsed] = useState(false);

  // Track collapse state changes
  useEffect(() => {
    if (isCollapsed) {
      setWasCollapsed(true);
    } else {
      setWasCollapsed(false);
    }
  }, [isCollapsed]);

  const handleItemClick = (itemId: string) => {
    // Only change the active item, don't toggle sidebar expansion
    setExpandedItem(itemId);
    // Set default active sub-item based on the selected item
    if (itemId === 'content') {
      setActiveSubItem('pages');
    } else if (itemId === 'audience') {
      setActiveSubItem('manage-audience');
    } else if (itemId === 'workflows') {
      setActiveSubItem('all-workflows');
    } else if (itemId === 'paywalls') {
      setActiveSubItem('coupons');
    }
  };

  const handleSubItemClick = (itemId: string, subItemId: string) => {
    setActiveSubItem(subItemId);
    onItemClick(itemId, subItemId);
    // Close mobile menu on item click
    setIsMobileOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent, itemId: string) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        handleItemClick(itemId);
        break;
      case 'Escape':
        setIsMobileOpen(false);
        break;
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`nav-container h-full flex sidebar-container fixed lg:relative z-50 rounded-2xl ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Icon Column */}
        <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4 rounded-l-xl">
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {items.map(item => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleItemClick(item.id)}
                onKeyDown={e => handleKeyDown(e, item.id)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  expandedItem === item.id
                    ? 'bg-blue-100 text-gray-900 font-bold scale-110'
                    : 'hover:bg-gray-100 text-gray-500 hover:scale-105'
                }`}
                title={item.title}
                aria-label={item.title}
                aria-expanded={expandedItem === item.id}
                aria-haspopup="true"
              >
                {item.icon}
              </button>

              {/* Tooltip */}
              <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded  opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-50">
                {item.title}
                {/* Arrow pointing to the button */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
              </div>
            </div>
          ))}

          {/* Settings Icon at Bottom */}

          {/* <div className="mt-auto relative group">
            <button
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg hover:bg-gray-100 text-gray-500 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              title="Settings"
              aria-label="Settings"
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_9_3009)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.21 10.708C16.609 10.1095 17.2806 9.75 18 9.75C18.7194 9.75 19.391 10.1095 19.79 10.708L20.2523 11.4013C20.4534 11.703 20.8202 11.8487 21.1735 11.7672L21.7438 11.6356C21.7438 11.6356 21.7438 11.6356 21.7438 11.6356C22.4779 11.4662 23.2476 11.6869 23.7803 12.2197C24.3131 12.7524 24.5339 13.5221 24.3645 14.2562L24.2328 14.8265C24.1513 15.1797 24.297 15.5466 24.5986 15.7477C24.5986 15.7477 24.5986 15.7477 24.5986 15.7477L25.292 16.21C25.8904 16.609 26.25 17.2806 26.25 18C26.25 18.7194 25.8905 19.391 25.2921 19.79L24.5987 20.2523C24.5986 20.2523 24.5987 20.2522 24.5987 20.2523C24.297 20.4534 24.1513 20.8203 24.2328 21.1734C24.2328 21.1734 24.2328 21.1735 24.2328 21.1734L24.3644 21.7437C24.5338 22.4778 24.3131 23.2476 23.7803 23.7803C23.2476 24.3131 22.478 24.5339 21.7438 24.3645L21.1735 24.2328C21.1735 24.2328 21.1736 24.2328 21.1735 24.2328C20.8203 24.1513 20.4534 24.297 20.2523 24.5986C20.2523 24.5986 20.2523 24.5986 20.2523 24.5986L19.79 25.292C19.391 25.8904 18.7194 26.25 18 26.25C17.2806 26.25 16.609 25.8905 16.21 25.2921L15.7477 24.5986C15.7477 24.5986 15.7477 24.5987 15.7477 24.5986C15.5466 24.297 15.1798 24.1513 14.8266 24.2328C14.8265 24.2328 14.8266 24.2328 14.8266 24.2328L14.2564 24.3644C13.5222 24.5338 12.7524 24.3131 12.2197 23.7803C11.6869 23.2476 11.4662 22.4779 11.6356 21.7438C11.6356 21.7438 11.6356 21.7438 11.6356 21.7438L11.7672 21.1735C11.8487 20.8203 11.703 20.4534 11.4013 20.2523L10.708 19.79C10.1095 19.391 9.75 18.7194 9.75 18C9.75 17.2806 10.1095 16.609 10.708 16.21C10.708 16.21 10.708 16.21 10.708 16.21L11.4013 15.7477C11.703 15.5466 11.8487 15.1798 11.7672 14.8265L11.6356 14.2563C11.4662 13.5221 11.6869 12.7524 12.2197 12.2197C12.7524 11.6869 13.5221 11.4662 14.2563 11.6356C14.2563 11.6356 14.2563 11.6356 14.2563 11.6356L14.8265 11.7672C15.1797 11.8487 15.5466 11.703 15.7477 11.4014L16.21 10.708C16.21 10.708 16.21 10.708 16.21 10.708ZM18 11.25C17.7822 11.25 17.5789 11.3588 17.458 11.5401L16.9958 12.2334C16.4486 13.0542 15.4504 13.4506 14.4892 13.2288C14.4892 13.2288 14.4892 13.2288 14.4892 13.2288L13.919 13.0972C13.6888 13.044 13.4474 13.1133 13.2803 13.2803C13.1133 13.4474 13.044 13.6888 13.0972 13.919L13.2288 14.4892C13.2288 14.4892 13.2288 14.4892 13.2288 14.4892C13.4506 15.4504 13.0542 16.4486 12.2334 16.9958L11.5401 17.458C11.3588 17.5789 11.25 17.7822 11.25 18C11.25 18.2178 11.3588 18.4211 11.5401 18.542L12.2334 19.0042C13.0542 19.5514 13.4506 20.5496 13.2288 21.5108L13.0972 22.0811C13.044 22.3112 13.1133 22.5526 13.2803 22.7197C13.4474 22.8867 13.6887 22.956 13.9189 22.9029C13.9188 22.9029 13.9189 22.9029 13.9189 22.9029L14.4891 22.7712C15.4504 22.5494 16.4486 22.9459 16.9958 23.7665L17.458 24.4599C17.458 24.4599 17.458 24.46 17.458 24.4599C17.5789 24.6411 17.7822 24.75 18 24.75C18.2178 24.75 18.4211 24.6412 18.542 24.46C18.5419 24.46 18.542 24.46 18.542 24.46L19.0042 23.7666C19.5514 22.9459 20.5495 22.5494 21.5108 22.7712L22.081 22.9029C22.081 22.9029 22.0811 22.9029 22.081 22.9029C22.3112 22.9559 22.5526 22.8867 22.7197 22.7197C22.8867 22.5526 22.956 22.3113 22.9029 22.0811C22.9029 22.0811 22.9029 22.0812 22.9029 22.0811L22.7712 21.5109C22.5494 20.5496 22.9459 19.5514 23.7665 19.0042L24.4599 18.542C24.4599 18.542 24.46 18.542 24.4599 18.542C24.6411 18.4211 24.75 18.2178 24.75 18C24.75 17.7822 24.6412 17.5789 24.46 17.458C24.46 17.458 24.46 17.4581 24.46 17.458L23.7666 16.9958C22.9459 16.4486 22.5494 15.4505 22.7712 14.4892L22.9029 13.919C22.9029 13.9191 22.9029 13.919 22.9029 13.919C22.9559 13.6888 22.8867 13.4474 22.7197 13.2803C22.5526 13.1133 22.3113 13.044 22.0811 13.0972L21.5108 13.2288C21.5108 13.2288 21.5108 13.2287 21.5108 13.2288C20.5496 13.4506 19.5514 13.0542 19.0042 12.2334L18.542 11.5401C18.4211 11.3588 18.2178 11.25 18 11.25ZM14.75 18C14.75 16.205 16.205 14.75 18 14.75C19.795 14.75 21.25 16.205 21.25 18C21.25 19.795 19.795 21.25 18 21.25C16.205 21.25 14.75 19.795 14.75 18ZM18 16.25C17.0335 16.25 16.25 17.0335 16.25 18C16.25 18.9665 17.0335 19.75 18 19.75C18.9665 19.75 19.75 18.9665 19.75 18C19.75 17.0335 18.9665 16.25 18 16.25Z"
                    fill="#717680"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_9_3009">
                    <path
                      d="M0 12C0 5.37258 5.37258 0 12 0H24C30.6274 0 36 5.37258 36 12V24C36 30.6274 30.6274 36 24 36H12C5.37258 36 0 30.6274 0 24V12Z"
                      fill="black"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded  opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-50">
              Settings
            
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
            </div>
          </div> */}
        </div>

        {/* Expanded Menu */}
        <div
          className={`bg-white border-r border-gray-200 py-4  rounded-r-2xl overflow-hidden transition-all duration-300 ease-out ${
            expandedItem && !isCollapsed
              ? 'w-64 opacity-100 translate-x-0'
              : 'w-0 opacity-0 -translate-x-full'
          }`}
        >
          {/* Dynamic Title */}
          <div className="px-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              {items.find(item => item.id === expandedItem)?.title || 'Menu'}
            </h2>
          </div>

          <div
            className={`transition-opacity duration-200 ease-out ${
              isSidebarContentTransitioning && !wasCollapsed
                ? 'opacity-50'
                : 'opacity-100'
            }`}
          >
            {items
              .filter(item => item.id === expandedItem)
              .map(item => (
                <div key={item.id} className="px-4">
                  {item.subItems && (
                    <ul className="space-y-1" role="menu">
                      {item.subItems.map(subItem => (
                        <li key={subItem.id} role="none">
                          <button
                            onClick={() =>
                              handleSubItemClick(item.id, subItem.id)
                            }
                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${
                              activeSubItem === subItem.id
                                ? ' text-gray-900 font-medium border-2 border-gray-100'
                                : 'text-gray-700 hover:bg-gray-100 border-2 border-white hover:text-gray-900'
                            }`}
                            role="menuitem"
                            aria-current={subItem.active ? 'page' : undefined}
                          >
                            {subItem.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-4 left-4 z-30 bg-blue-600 text-white p-3 rounded-full  hover:bg-blue-700 transition-colors"
        aria-label="Open sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
