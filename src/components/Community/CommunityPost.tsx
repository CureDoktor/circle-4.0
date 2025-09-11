import React, { useState } from 'react';

interface CommunityPostProps {
  id: number;
  author: string;
  avatar: string;
  date: string;
  category: string;
  title: string;
  titleIcon: string;
  content: string;
  embeddedImage: string;
  embeddedCaption: string;
  likes: number;
  comments: number;
}

const CommunityPost: React.FC<CommunityPostProps> = ({
  author,
  avatar,
  date,
  category,
  title,
  titleIcon,
  content,
  embeddedImage,
  embeddedCaption,
  likes,
  comments,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setCurrentLikes(prev => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Post Header */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={avatar}
              alt={author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{author}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <span>{date}</span>
                <span>•</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                  {category}
                </span>
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-4">
        {/* Title */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-lg">{titleIcon}</span>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>

        {/* Text Content */}
        <p className="text-gray-700 leading-relaxed mb-4">{content}</p>

        {/* See More Link */}
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4">
          See more
        </button>

        {/* Embedded Content */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <img
              src={embeddedImage}
              alt="Embedded content"
              className="w-full h-64 object-cover"
            />
            <div className="p-3">
              <p className="text-sm text-gray-600">{embeddedCaption}</p>
            </div>
          </div>
        </div>

        {/* Engagement */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors ${
                isLiked ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <svg
                className="w-5 h-5"
                fill={isLiked ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <span className="text-sm font-medium">{currentLikes}</span>
            </button>

            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors">
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="text-sm font-medium">{comments}</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
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
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                />
              </svg>
            </button>
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
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
