import React from 'react';
import HorizontalSlider from './HorizontalSlider';

const TopEarners: React.FC = () => {
  const topEarners = [
    {
      id: 1,
      title: 'The Running Channel Club',
      creator: 'Steuart B.',
      rating: 5.0,
      reviewCount: 42,
      category: 'Lifestyle',
      price: 'From $6/month',
      image: 'https://picsum.photos/300/200?random=30',
    },
    {
      id: 2,
      title: 'The Pilot Institute Premium Drone Community',
      creator: 'Greg R.',
      rating: 4.8,
      reviewCount: 127,
      category: 'Entrepreneurship',
      price: '$199/year',
      image: 'https://picsum.photos/300/200?random=31',
    },
    {
      id: 3,
      title: 'Second Brain Membership',
      creator: 'Tiago Forte',
      rating: 4.9,
      reviewCount: 203,
      category: 'Productivity',
      price: '$225/quarter',
      image: 'https://picsum.photos/300/200?random=32',
    },
    {
      id: 4,
      title: 'Dog Training Academy',
      creator: 'Sarah Johnson',
      rating: 4.7,
      reviewCount: 89,
      category: 'Pets',
      price: '$99/month',
      image: 'https://picsum.photos/300/200?random=33',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <HorizontalSlider
      title="Top earners"
      subtitle="The best-selling communities and products right now."
    >
      {topEarners.map(item => (
        <div key={item.id} className="flex-shrink-0 w-80">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
            {/* Image with Price Badge */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                {item.price}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{item.creator}</p>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-2">
                <div className="flex items-center">
                  {renderStars(item.rating)}
                </div>
                <span className="text-sm text-gray-600">
                  {item.rating} ({item.reviewCount})
                </span>
              </div>

              <p className="text-gray-500 text-sm">{item.category}</p>
            </div>
          </div>
        </div>
      ))}
    </HorizontalSlider>
  );
};

export default TopEarners;
