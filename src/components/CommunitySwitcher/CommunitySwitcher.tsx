import React, { useState } from 'react';

interface Community {
  id: string;
  name: string;
  logo: string;
}

interface CommunitySwitcherProps {
  communities: Community[];
  activeCommunity: string;
  onCommunityChange: (communityId: string) => void;
}

const CommunitySwitcher: React.FC<CommunitySwitcherProps> = ({
  communities,
  activeCommunity,
  onCommunityChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCommunityClick = (communityId: string) => {
    onCommunityChange(communityId);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Hover trigger area */}
      <div
        className="absolute bottom-0 right-0 w-8 h-8"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />

      {/* Community switcher panel */}
      <div
        className={`bg-white border border-gray-200 rounded-2xl shadow-lg transition-all duration-300 ease-out ${
          isOpen
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-8 pointer-events-none'
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <div className="flex flex-col gap-2 p-3">
          {communities.map((community, index) => {
            // Tooltip text for each button
            const tooltipTexts = [
              'Regular community',
              'Wide-label community enterprise customer',
              'Wide-label multiple communities to manage',
            ];

            return (
              <div key={community.id} className="relative group">
                <button
                  onClick={() => handleCommunityClick(community.id)}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                    activeCommunity === community.id
                      ? 'bg-gray-100 text-gray-900 border border-gray-200 shadow-sm'
                      : 'text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {index + 1}
                </button>

                {/* Tooltip - positioned on the left side */}
                <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 translate-x-[10px] group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-9999">
                  {tooltipTexts[index]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunitySwitcher;
