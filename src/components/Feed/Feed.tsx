import React, { useState, useEffect } from 'react';
import HorizontalFilters from './HorizontalFilters';
// import Post from './Post'; // Zakomentarisano jer koristimo PostCard
import RecentSaves from './RecentSaves';
import PostExpansion from './PostExpansion';
// import ContentCards from './ContentCards'; // Zakomentarisano horizontalni scroll sa preview image
import StartPost from './StartPost';
import PostCard from './PostCard';

export interface FeedProps {
  onUserClick?: (user: any) => void;
}

const Feed: React.FC<FeedProps> = ({ onUserClick }) => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isPostExpanded, setIsPostExpanded] = useState(false);
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handlePostClick = (post: any, event?: React.MouseEvent) => {
    // Use local expansion instead of navigation
    const postWithOrigin = {
      ...post,
      originRect: event?.currentTarget?.getBoundingClientRect?.() || null,
    };

    setSelectedPost(postWithOrigin);
    setIsPostExpanded(true);
    setIsPostLoading(true);

    // Simulate loading time
    setTimeout(() => {
      setIsPostLoading(false);
    }, 500);
  };

  // Zakomentarisano jer ne koristimo ContentCards
  // const handleCardClick = (card: any) => {
  //   // Convert card to post format for expansion
  //   const postForExpansion = {
  //     id: card.id,
  //     author: card.source,
  //     avatar: '/images/avatars/1.png',
  //     timeAgo: '1d',
  //     content: `This is a detailed article about "${card.title}". The content would be expanded here with full article text, insights, and analysis.`,
  //     image: card.thumbnail,
  //     likes: Math.floor(Math.random() * 500) + 100,
  //     isSaved: false,
  //     title: card.title,
  //     originRect: card.originRect, // Use the click position from the card
  //   };

  //   setSelectedPost(postForExpansion);
  //   setIsPostExpanded(true);
  //   setIsPostLoading(true);

  //   // Simulate loading time - make it faster
  //   setTimeout(() => {
  //     setIsPostLoading(false);
  //   }, 300);
  // };

  const handleClosePost = () => {
    setIsPostExpanded(false);
    setIsPostLoading(false);
    setSelectedPost(null);
  };

  // Novi postovi koji odgovaraju dizajnu iz Figme
  const [posts] = useState([
    {
      id: 1,
      communityName: 'Framer community',
      communityIcon: '/images/avatars/1.png',
      author: 'Melissa Emberson',
      authorBio: 'Framer Team Writer',
      avatar: '/images/avatars/1.png',
      timeAgo: 'Sep 10',
      title: "You're using ChatGPT wrong. Here's how to prompt like a pro",
      content:
        'Most people use ChatGPT for quick answers. But reframing the way I understand Large Language Models (LLMs) like ChatGPT or Gemini instantly improved the responses I was able to get. With the right prompts, my responses became sharper, more accurate, and more tailored to my needs.',
      image: undefined,
      likes: 1882,
      comments: 156,
      isSaved: false,
    },
    {
      id: 2,
      communityName: 'future founders community',
      communityIcon: '/images/avatars/2.png',
      author: 'Calvin Parks',
      authorBio: 'Webflow genius',
      avatar: '/images/avatars/2.png',
      timeAgo: 'Sep 10',
      title: "Apple's iPhone 17 just BROKE camera rules forever!",
      content:
        'Apple has recently been accused of having lost its way and no longer innovating.\n\nHell, even I wrote a piece not that long ago saying that the leadership was past it and we needed new, fresh blood.',
      image: 'https://picsum.photos/680/315?random=2',
      likes: 1882,
      comments: 156,
      isSaved: false,
    },
    {
      id: 3,
      communityName: 'Webflow community',
      communityIcon: '/images/avatars/3.png',
      author: 'Clavin Parks',
      authorBio: 'Webflow genius',
      avatar: '/images/avatars/3.png',
      timeAgo: 'Sep 10',
      title:
        'WTF is vibe marketing, and why is it the future of brand building?',
      content:
        "Welcome to the era of vibe marketing, where how your brand makes people feel isn't just nice-to-have, it's the entire game — especially if you're a challenger brand.",
      image: 'https://picsum.photos/680/315?random=3',
      likes: 1882,
      comments: 156,
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

      {/* Content Cards Slider - Zakomentarisano horizontalni scroll sa preview image */}
      {/* <div className="px-6">
        <ContentCards onCardClick={handleCardClick} />
      </div> */}

      {/* Main Feed Content */}
      <div className="flex-1 overflow-y-auto overflow-x-visible mb-4 p-8">
        <div className="max-w-2xl mx-auto px-6">
          {/* Start a post komponenta */}
          <div className="mb-9">
            <StartPost />
          </div>

          {/* Posts Feed */}
          <div className="flex flex-col gap-9">
            {posts.map((post, index) => (
              <React.Fragment key={post.id}>
                <PostCard
                  communityName={post.communityName}
                  communityIcon={post.communityIcon}
                  authorName={post.author}
                  authorAvatar={post.avatar}
                  authorBio={post.authorBio}
                  date={post.timeAgo}
                  title={post.title}
                  content={post.content}
                  image={post.image}
                  likes={post.likes}
                  comments={post.comments}
                  onPostClick={(event: React.MouseEvent) =>
                    handlePostClick(post, event)
                  }
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
