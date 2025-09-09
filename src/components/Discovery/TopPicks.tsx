import React from 'react';

const TopPicks: React.FC = () => {
  const topPicks = [
    {
      id: 1,
      title: 'The Entreprenista League',
      creator: 'Stephanie Cartin',
      category: 'Business',
      price: '$1,497',
      image: 'https://picsum.photos/60/60?random=11',
    },
    {
      id: 2,
      title: 'Exit Five',
      creator: 'Dave Gerhardt',
      category: 'Marketing',
      price: 'From $49 /month',
      image: 'https://picsum.photos/60/60?random=12',
    },
    {
      id: 3,
      title: 'TroopHR Membership',
      creator: 'Tracy Avin',
      category: 'HR',
      price: '$700 /year',
      image: 'https://picsum.photos/60/60?random=13',
    },
    {
      id: 4,
      title: 'Jay Shetty Certification School',
      creator: 'Jay Shetty',
      category: 'Self-development',
      price: '$2,997',
      image: 'https://picsum.photos/60/60?random=14',
    },
  ];

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Top picks</h2>
          <p className="text-gray-600 mt-1">
            A handpicked list of the top performing creators and products.
          </p>
        </div>
        <button className="text-gray-500 hover:text-gray-700 font-medium">
          See all &gt;
        </button>
      </div>

      {/* Top Picks List */}
      <div className="space-y-4">
        {topPicks.map(item => (
          <div
            key={item.id}
            className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            {/* Number */}
            <div className="text-2xl font-bold text-gray-400 w-8">
              {item.id}
            </div>

            {/* Image */}
            <div className="w-15 h-15 rounded-lg overflow-hidden flex-shrink-0">
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

export default TopPicks;
