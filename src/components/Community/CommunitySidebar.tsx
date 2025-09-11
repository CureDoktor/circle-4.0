import React from 'react';

interface CommunitySidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const CommunitySidebar: React.FC<CommunitySidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const sidebarSections = [
    {
      title: 'Feed',
      items: [
        { id: 'feed', label: 'Feed', icon: '📰' },
        { id: 'community-recap', label: 'Community recap', icon: '📊' },
      ],
    },
    {
      title: 'New member hub',
      items: [
        { id: 'start-here', label: 'Start here', icon: '🚀' },
        { id: 'say-hello', label: 'Say hello', icon: '👋' },
      ],
    },
    {
      title: 'Community',
      items: [
        { id: 'announcements', label: 'Announcements', icon: '📢' },
        { id: 'recipes', label: 'Recipes', icon: '🍳' },
        { id: 'knife-skills', label: 'Knife skills', icon: '🔪' },
        { id: 'mural', label: 'Mural', icon: '🎨' },
      ],
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex-shrink-0">
      <div className="h-full flex flex-col">
        {/* Sidebar Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {sidebarSections.map(section => (
            <div key={section.title} className="mb-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map(item => (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="p-4 border-t border-gray-200">
          {/* Go Live Button */}
          <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 mb-4">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <span>Go live</span>
          </button>

          {/* Powered by Circle */}
          <div className="text-center">
            <p className="text-xs text-gray-500">Powered by Circle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySidebar;
