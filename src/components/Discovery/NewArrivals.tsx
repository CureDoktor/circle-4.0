import React from 'react';

const NewArrivals: React.FC = () => {
  const newArrivals = [
    {
      id: 1,
      title: 'The Entreprenista League',
      creator: 'Stephanie Cartin',
      category: 'Business',
      price: '$1,497',
      image: 'https://picsum.photos/40/40?random=22',
    },
    {
      id: 2,
      title: 'Exit Five',
      creator: 'Dave Gerhardt',
      category: 'Marketing',
      price: 'From $49 /month',
      image: 'https://picsum.photos/40/40?random=23',
    },
    {
      id: 3,
      title: 'TroopHR Membership',
      creator: 'Tracy Avin',
      category: 'HR',
      price: '$700 /year',
      image: 'https://picsum.photos/40/40?random=24',
    },
    {
      id: 4,
      title: 'Jay Shetty Certification School',
      creator: 'Jay Shetty',
      category: 'Self-development',
      price: '$2,997',
      image: 'https://picsum.photos/40/40?random=25',
    },
    {
      id: 5,
      title: 'God Tier Ads',
      creator: 'Christian Bullock',
      category: 'Marketing',
      price: 'From $597 /month',
      image: 'https://picsum.photos/40/40?random=26',
    },
    {
      id: 6,
      title: 'Productivity Lab',
      creator: 'Ali Abdaal',
      category: 'Productivity',
      price: '$997 /year',
      image: 'https://picsum.photos/40/40?random=27',
    },
    {
      id: 7,
      title: 'Photography & Friends Community',
      creator: 'Phil Ebiner',
      category: 'Photography',
      price: 'FREE',
      image: 'https://picsum.photos/40/40?random=28',
    },
    {
      id: 8,
      title: 'Golf Swing Simplified',
      creator: 'Tom Saguto, PGA',
      category: 'Sports',
      price: 'From $19 /month',
      image: 'https://picsum.photos/40/40?random=29',
    },
  ];

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">New arrivals</h2>
          <p className="text-gray-600 mt-1">Newest products to go live.</p>
        </div>
        <button className="text-gray-500 hover:text-gray-700 font-medium">
          See all &gt;
        </button>
      </div>

      {/* New Arrivals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {newArrivals.map(item => (
          <div
            key={item.id}
            className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {/* Number */}
            <div className="text-lg font-bold text-gray-400 w-6">{item.id}</div>

            {/* Image */}
            <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.creator}</p>
              <p className="text-gray-500 text-sm">{item.category}</p>
            </div>

            {/* Price */}
            <div className="text-right">
              <span className="font-semibold text-gray-900">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
