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
    <div className={`relative mb-6 overflow-x-auto ${className}`}>
      {/* Bottom line that extends from first tab to the end */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>

      <div className="flex min-w-max">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative py-3 px-4 font-medium text-sm transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'text-gray-900 bg-white border border-gray-200 border-b-2 border-b-white rounded-t-xl'
                : 'text-gray-500 hover:text-gray-700 border border-white border-b-2 border-b-gray-200'
            }`}
          >
            {tab.label} {tab.count !== undefined && tab.count}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
