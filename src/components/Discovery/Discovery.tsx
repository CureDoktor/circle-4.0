import React from 'react';
import HorizontalFilters from '../Feed/HorizontalFilters';
import HeroSection from './HeroSection';
import TopPicks from './TopPicks';
import TopCreators from './TopCreators';
import TrendingNow from './TrendingNow';
import NewArrivals from './NewArrivals';
import TopEarners from './TopEarners';

const Discovery: React.FC = () => {
  return (
    <div className="h-full bg-white flex flex-col">
      {/* Horizontal Filters */}
      <div className="border-b border-gray-200">
        <HorizontalFilters />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 py-6">
          {/* Hero Section */}
          <HeroSection />

          {/* Top Picks Section */}
          <TopPicks />

          {/* Top Creators Section */}
          <TopCreators />

          {/* Trending Now Section */}
          <TrendingNow />

          {/* New Arrivals Section */}
          <NewArrivals />

          {/* Top Earners Section */}
          <TopEarners />
        </div>
      </div>
    </div>
  );
};

export default Discovery;
