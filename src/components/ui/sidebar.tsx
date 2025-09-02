import React from 'react';
import SidebarToggle from './sidebar-toggle';

interface SidebarItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

interface SidebarProps {
  title: string;
  items: SidebarItem[];
  activeItem?: string;
  onToggleSidebar: () => void;
  onItemClick: (itemId: string, subItemId?: string) => void;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  title,
  items,
  activeItem,
  onToggleSidebar,
  onItemClick,
  className = '',
}) => {
  return (
    <div className={`bg-white h-full rounded-2xl ${className}`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <SidebarToggle onToggle={onToggleSidebar} />
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          </div>
        </div>
      </div>

      {/* Sidebar Items */}
      <div className="p-4">
        <div className="space-y-2">
          {items.map(item => (
            <button
              key={item.id}
              onClick={() => onItemClick('sidebar', item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all duration-150 ${
                activeItem === item.id
                  ? 'bg-white text-gray-900 font-medium border border-gray-200 shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <div className="flex items-center space-x-3">
                {item.icon && (
                  <span className="flex-shrink-0">{item.icon}</span>
                )}
                <span>{item.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
