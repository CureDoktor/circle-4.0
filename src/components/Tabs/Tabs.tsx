import React from 'react';

export interface Tab {
  id: string;
  label: string;
  count?: number;
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
    <div
      className={`border-b border-gray-200 mb-6 overflow-x-auto ${className}`}
    >
      <div className="flex min-w-max">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-3 px-4 font-medium border border-gray-100 text-sm transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-1 border-gray-300 border-b-0 rounded-t-lg text-gray-900 bg-white'
                : 'border-transparent text-gray-500 hover:text-gray-700'
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
