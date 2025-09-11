import React from 'react';
import CommunityPost from './CommunityPost';

interface CommunityContentProps {
  activeSection: string;
}

const CommunityContent: React.FC<CommunityContentProps> = ({
  activeSection,
}) => {
  const posts = [
    {
      id: 1,
      author: 'Sergio Emberson',
      avatar: '/images/avatars/1.png',
      date: 'Feb 10',
      category: 'Recipes',
      title: 'Apple Intelligence new features',
      titleIcon: '🍎',
      content:
        'Writing Tools build on existing options (Rewrite, Proofread, Summarize) with a new "Describe Your Change" option. This feature allows users to specify desired changes, making writing more expressive (e.g., adding dynamic action words to a resume, rewriting a dinner party invitation as a poem). This feature is systemwide across Apple and third-party apps.',
      embeddedImage: 'https://picsum.photos/600/400?random=34',
      embeddedCaption: 'This period saw the rise of another feature.',
      likes: 443,
      comments: 12,
    },
    {
      id: 2,
      author: 'Maria Rodriguez',
      avatar: '/images/avatars/2.png',
      date: 'Feb 9',
      category: 'Knife skills',
      title: 'Perfect knife techniques for beginners',
      titleIcon: '🔪',
      content:
        'Mastering basic knife skills is fundamental to becoming a better cook. Here are the essential techniques every beginner should learn: proper grip, basic cuts, and safety tips that will transform your cooking experience.',
      embeddedImage: 'https://picsum.photos/600/300?random=35',
      embeddedCaption: 'Practice makes perfect with these techniques.',
      likes: 234,
      comments: 8,
    },
    {
      id: 3,
      author: 'David Chen',
      avatar: '/images/avatars/3.png',
      date: 'Feb 8',
      category: 'Announcements',
      title: 'New community guidelines update',
      titleIcon: '📢',
      content:
        "We've updated our community guidelines to better reflect our values and ensure a positive experience for everyone. The key changes include clearer moderation policies and enhanced support for diverse voices.",
      embeddedImage: 'https://picsum.photos/600/350?random=36',
      embeddedCaption: 'Building a better community together.',
      likes: 156,
      comments: 23,
    },
  ];

  const getSectionTitle = (section: string) => {
    const titles: { [key: string]: string } = {
      feed: 'Feed',
      'community-recap': 'Community Recap',
      'start-here': 'Start Here',
      'say-hello': 'Say Hello',
      announcements: 'Announcements',
      recipes: 'Recipes',
      'knife-skills': 'Knife Skills',
      mural: 'Mural',
    };
    return titles[section] || 'Community';
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-xl font-semibold text-gray-900">
              {getSectionTitle(activeSection)}
            </h1>
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Latest Dropdown */}
            <div className="relative">
              <button className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                <span>Latest</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            {/* New Post Button */}
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
              New post
            </button>

            {/* Star Icon */}
            <button className="p-2 text-gray-400 hover:text-yellow-500 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </button>

            {/* Three Dots Menu */}
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Start a Post Section */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            N
          </div>
          <div className="flex-1">
            <button className="w-full text-left text-gray-500 hover:text-gray-700 transition-colors">
              Start a post
            </button>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="space-y-6">
            {posts.map(post => (
              <CommunityPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityContent;
