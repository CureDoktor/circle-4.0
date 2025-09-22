import React, { useState, useEffect } from 'react';
import HorizontalFilters from './HorizontalFilters';
import Post from './Post';
import RecentSaves from './RecentSaves';
import PostExpansion from './PostExpansion';
import ContentCards from './ContentCards';

export interface FeedProps {
  onUserClick?: (user: any) => void;
}

const Feed: React.FC<FeedProps> = ({ onUserClick }) => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isPostExpanded, setIsPostExpanded] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handlePostClick = (post: any) => {
    // Use local expansion instead of navigation
    setSelectedPost(post);
    setIsPostExpanded(true);
    setIsPostLoading(true);

    // Simulate loading time
    setTimeout(() => {
      setIsPostLoading(false);
    }, 500);
  };

  const handleCardClick = (card: any) => {
    // Convert card to post format for expansion
    const postForExpansion = {
      id: card.id,
      author: card.source,
      avatar: '/images/avatars/1.png',
      timeAgo: '1d',
      content: `This is a detailed article about "${card.title}". The content would be expanded here with full article text, insights, and analysis.`,
      image: card.thumbnail,
      likes: Math.floor(Math.random() * 500) + 100,
      isSaved: false,
      title: card.title,
      originRect: null, // Will be set by the card click handler
    };

    setSelectedPost(postForExpansion);
    setIsPostExpanded(true);
    setIsPostLoading(true);

    // Simulate loading time
    setTimeout(() => {
      setIsPostLoading(false);
    }, 500);
  };

  const handleClosePost = () => {
    setIsPostExpanded(false);
    setIsPostLoading(false);
    setSelectedPost(null);
  };

  const [posts] = useState([
    {
      id: 1,
      author: 'Anne-Laure Le Cunff',
      avatar: '/images/avatars/1.png',
      timeAgo: '1d',
      content:
        'someone pinch me please... my publisher is ordering a 2,500 copy reprint of Tiny Experiments!! 🙏 social media can make us focus on the wrong metrics of success. this is a beautiful reminder of the power of communities. thanks so much for your support!',
      image: 'https://picsum.photos/400/200?random=1',
      likes: 455,
      isSaved: false,
    },
    {
      id: 2,
      author: 'Isaac French',
      avatar: '/images/avatars/2.png',
      timeAgo: '2d',
      content:
        "Most of rural America is sitting on a goldmine: untapped land, untold stories, and unpolished beauty. And of all the experiential hospitality concepts I've seen, none capture the essence of authentic rural living quite like what we're building here.",
      image: 'https://picsum.photos/400/200?random=2',
      likes: 234,
      isSaved: false,
    },
    {
      id: 3,
      author: 'Sarah Johnson',
      avatar: '/images/avatars/3.png',
      timeAgo: '3h',
      content:
        'In my 30s, I took up gymnastics. No background. Limited flexibility. Just curiosity... and a lot of drive. The journey has been incredible - from barely touching my toes to doing handstands!',
      image: 'https://picsum.photos/400/200?random=3',
      likes: 189,
      isSaved: false,
    },
    {
      id: 4,
      author: 'Mike Chen',
      avatar: '/images/avatars/4.png',
      timeAgo: '5h',
      content:
        "3.5 Years And It's Finally Ready... After countless late nights, endless revisions, and more coffee than I care to admit, my book 'Feel-Good Productivity' is finally hitting the shelves!",
      image: 'https://picsum.photos/400/200?random=4',
      likes: 567,
      isSaved: false,
    },
    {
      id: 5,
      author: 'Emma Wilson',
      avatar: '/images/avatars/5.png',
      timeAgo: '6h',
      content:
        "The secret to productivity isn't about doing more - it's about doing the right things at the right time. Here's what I've learned after 10 years of experimenting with different systems.",
      image: 'https://picsum.photos/400/200?random=5',
      likes: 312,
      isSaved: false,
    },
    {
      id: 6,
      author: 'David Park',
      avatar: '/images/avatars/6.png',
      timeAgo: '8h',
      content:
        "Just finished reading 'Atomic Habits' for the third time. Each read reveals new insights. The power of small, consistent actions never ceases to amaze me.",
      image: 'https://picsum.photos/400/200?random=6',
      likes: 178,
      isSaved: false,
    },
  ]);

  const [showRecentSaves, setShowRecentSaves] = useState(false);

  // Show Recent Saves after 3 posts
  useEffect(() => {
    if (posts.length >= 3) {
      setShowRecentSaves(true);
    }
  }, [posts.length]);

  // Handle scroll behavior for hiding top controls
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100;

      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        // Scrolling down - hide controls
        setIsScrolled(true);
      } else if (
        currentScrollY < lastScrollY ||
        currentScrollY <= scrollThreshold
      ) {
        // Scrolling up or at top - show controls
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="h-full bg-white flex flex-col main-content-container">
      {/* Horizontal Filters */}
      <div
        className={`border-b border-gray-200 transition-transform duration-300 ease-out ${
          isScrolled ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <HorizontalFilters />
      </div>

      {/* Content Cards Slider */}
      <div className="px-6">
        <ContentCards onCardClick={handleCardClick} />
      </div>

      {/* Main Feed Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          {/* Post Creation Component */}
          <div className="p-4 bg-white border border-gray-100 mb-4 rounded-lg">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
                N
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="What's happening?"
                  className="w-full p-3 text-lg border-none outline-none placeholder-gray-500"
                />
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <svg
                        className="w-5 h-5 text-purple-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <button className="bg-gray-500 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-600 transition-colors">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts Feed */}
          <div className="divide-y divide-gray-100">
            {posts.map((post, index) => (
              <React.Fragment key={post.id}>
                <Post
                  {...post}
                  onPostClick={handlePostClick}
                  onUserClick={onUserClick}
                />
                {/* Show Recent Saves after 3rd post */}
                {index === 2 && showRecentSaves && <RecentSaves />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Post Expansion */}
      {isPostExpanded && selectedPost && (
        <PostExpansion
          post={selectedPost}
          isVisible={isPostExpanded}
          isLoading={isPostLoading}
          onClose={handleClosePost}
          originRect={selectedPost.originRect}
        />
      )}
    </div>
  );
};

export default Feed;
