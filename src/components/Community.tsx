import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="bg-white p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Community Dashboard</h1>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center">
        <div className="text-4xl md:text-6xl mb-4">🏘️</div>
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Community View</h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          This is the community view. Switch back to Admin view to see the audience management interface.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Community Stats</h3>
            <p className="text-2xl md:text-3xl font-bold text-blue-600">1,234</p>
            <p className="text-xs md:text-sm text-gray-600">Active members</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Recent Activity</h3>
            <p className="text-2xl md:text-3xl font-bold text-green-600">89</p>
            <p className="text-xs md:text-sm text-gray-600">New posts today</p>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Engagement</h3>
            <p className="text-2xl md:text-3xl font-bold text-purple-600">95%</p>
            <p className="text-xs md:text-sm text-gray-600">Average engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
