import React, { useState, useEffect } from 'react';
import { SidebarItem } from '../types';

interface SidebarProps {
  items: SidebarItem[];
  onItemClick: (itemId: string, subItemId?: string) => void;
  isCollapsed?: boolean;
  currentSection?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  items,
  onItemClick,
  isCollapsed = false,
  currentSection,
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>('audience');
  const [activeSubItem, setActiveSubItem] = useState<string>('manage-audience');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);

  // Track collapse state changes
  useEffect(() => {
    if (isCollapsed) {
      // Hide content immediately when collapsing
      setIsContentVisible(false);
    } else {
      // Show content with longer delay when expanding
      setTimeout(() => {
        setIsContentVisible(true);
      }, 400);
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
    // Call onItemClick to update main content
    onItemClick(itemId);
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
        className={`nav-container h-full flex sidebar-container fixed lg:relative border-l-transparent z-50 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Icon Column */}
        <div
          className={`bg-white flex flex-col gap-4 flex flex-col items-center py-4 px-2 ${
            isCollapsed ? 'rounded-xl' : 'border-r border-gray-100'
          }`}
        >
          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden absolute top-4 right-4 p-1 hover:bg-gray-100 rounded"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Top Section - All items except settings */}
          <div className="flex flex-col gap-4">
            {items
              .filter(item => item.id !== 'settings')
              .map(item => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleItemClick(item.id)}
                    onKeyDown={e => handleKeyDown(e, item.id)}
                    className={`p-1 w-[36px] h-[36px] rounded-xl flex items-center justify-center text-lg transition-all duration-200 border ${
                      expandedItem === item.id
                        ? 'border-gray-200 bg-gray-50 shadow-xs'
                        : 'border-transparent hover:bg-gray-100 hover:scale-105'
                    }`}
                    title={item.title}
                    aria-label={item.title}
                    aria-expanded={expandedItem === item.id}
                    aria-haspopup="true"
                  >
                    <div
                      className={`transition-all duration-200 ${
                        expandedItem === item.id
                          ? 'text-gray-900'
                          : 'text-gray-500'
                      }`}
                    >
                      {expandedItem === item.id && item.activeIcon
                        ? item.activeIcon
                        : item.icon}
                    </div>
                  </button>

                  {/* Tooltip */}
                  <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded-xl  opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-50">
                    {item.title}
                  </div>
                </div>
              ))}
          </div>

          {/* Bottom Section - Settings item */}
          <div className="mt-auto">
            {items
              .filter(item => item.id === 'settings')
              .map(item => (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => handleItemClick(item.id)}
                    onKeyDown={e => handleKeyDown(e, item.id)}
                    className={`p-1 w-[36px] h-[36px] rounded-xl flex items-center justify-center text-lg transition-all duration-200 border ${
                      expandedItem === item.id
                        ? 'border-gray-200 bg-gray-50 shadow-xs'
                        : 'border-transparent hover:bg-gray-100 hover:scale-105'
                    }`}
                    title={item.title}
                    aria-label={item.title}
                    aria-expanded={expandedItem === item.id}
                    aria-haspopup="true"
                  >
                    <div
                      className={`transition-all duration-200 ${
                        expandedItem === item.id
                          ? 'text-gray-900'
                          : 'text-gray-500'
                      }`}
                    >
                      {expandedItem === item.id && item.activeIcon
                        ? item.activeIcon
                        : item.icon}
                    </div>
                  </button>

                  {/* Tooltip */}
                  <div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded-xl  opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-50">
                    {item.title}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Expanded Menu */}
        <div
          className={`flex flex-col gap-4 bg-white py-4 px-2 rounded-r-2xl overflow-hidden transition-all ease-out ${
            expandedItem && !isCollapsed ? 'w-48 opacity-100' : 'w-0 opacity-0'
          }`}
        >
          {/* Dynamic Title */}
          <div
            className={`px-4 py-1 transition-opacity duration-200 ease-out ${
              isContentVisible ? 'block' : 'hidden'
            }`}
          >
            <h2 className="text-md font-semibold text-gray-900 py-[2px]">
              {items.find(item => item.id === expandedItem)?.title || 'Menu'}
            </h2>
          </div>

          <div
            className={`transition-opacity duration-200 ease-out ${
              isContentVisible ? 'block' : 'hidden'
            }`}
          >
            {items
              .filter(item => item.id === expandedItem)
              .map(item => (
                <div key={item.id}>
                  {item.subItems &&
                    currentSection !== 'branded-app' &&
                    currentSection !== 'ai-inbox' && (
                      <ul role="menu">
                        {item.subItems.map(subItem => (
                          <li key={subItem.id} role="none">
                            <button
                              onClick={() =>
                                handleSubItemClick(item.id, subItem.id)
                              }
                              className={`w-full text-left px-3 py-[7px] rounded-xl text-sm transition-all duration-150 ${
                                activeSubItem === subItem.id
                                  ? ' text-gray-900 font-semibold bg-gray-50 border border-gray-200 shadow-xs'
                                  : 'text-gray-700 hover:bg-gray-100 border border-white hover:text-gray-900'
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
            strokeWidth={1.5}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </>
  );
};

export default Sidebar;
