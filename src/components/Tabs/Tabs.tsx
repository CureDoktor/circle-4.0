import React from 'react';

export interface Tab {
  id: string;
  label: string;
  count?: number | string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = '',
}) => {
  return (
    <div className={`relative px-5 overflow-x-auto ${className}`}>
      {/* Bottom line that extends from first tab to the end */}
      <div className="absolute bottom-[0.2px] left-0 right-0 h-px bg-gray-200"></div>

      <div className="flex min-w-max">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={` py-3 px-4 font-medium text-sm flex items-center gap-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-white border border-gray-200 border-b-white rounded-t-xl z-10'
                : 'hover:text-gray-700 border border-white'
            }`}
          >
            {tab.label}
            <span
              className={`${
                activeTab === tab.id ? 'text-[#64748B]' : 'text-[#A5A9AD]'
              }   bg-[#F0F3F5] px-1.5 text-[12px] rounded-3xl leading-[18px]`}
            >
              {tab.count !== undefined && tab.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
