import React from 'react';

interface PostCardProps {
  communityName: string;
  communityIcon?: string;
  authorName: string;
  authorAvatar: string;
  authorBio: string;
  date: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  liked?: boolean;
  onPostClick?: (event: React.MouseEvent) => void;
  onUserClick?: (user: any) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  communityName,
  communityIcon,
  authorName,
  authorAvatar,
  authorBio,
  date,
  title,
  content,
  image,
  likes,
  comments,
  liked = false,
  onPostClick,
  onUserClick,
}) => {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      onClick={onPostClick}
    >
      {/* Community Header */}
      <div className="flex gap-2 h-11 items-center px-6 py-0">
        {communityIcon ? (
          <div className="w-6 h-6 rounded-lg overflow-hidden">
            <img
              src={communityIcon}
              alt={communityName}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">
              {communityName.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <p className="flex-1 text-xs font-semibold text-gray-600 uppercase tracking-wider">
          {communityName}
        </p>
      </div>

      {/* Divider */}
      <div className="bg-gray-200 h-px w-full" />

      {/* Image (if provided) */}
      {image && (
        <div className="w-full h-64 relative">
          <img
            src={image}
            alt="Post image"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Post Body */}
      <div className="px-6 py-6">
        <div className="flex flex-col gap-6">
          {/* Author Info & Post Content */}
          <div className="flex flex-col gap-5">
            {/* Author Info & Content */}
            <div className="flex flex-col gap-5">
              {/* Avatar & Info */}
              <div className="flex gap-3 items-center w-full">
                <div 
                  className="w-9 h-9 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                  onClick={(e) => {
                    e.stopPropagation(); // Sprečava otvaranje post modala
                    onUserClick?.({ name: authorName, avatar: authorAvatar, bio: authorBio });
                  }}
                >
                  <img
                    src={authorAvatar}
                    alt={authorName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  {/* Top Row */}
                  <div className="flex h-5.5 items-start justify-between w-full">
                    <div className="flex flex-1 gap-2 items-start">
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold text-gray-900 leading-5">
                          {authorName}
                        </p>
                      </div>
                    </div>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </div>
                  </div>
                  {/* Meta Info */}
                  <div className="flex gap-2 items-center">
                    <div className="flex gap-2.5 items-center justify-center">
                      <p className="text-sm text-gray-500 leading-5">{date}</p>
                    </div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full" />
                    <div className="flex gap-2.5 items-center justify-center">
                      <p className="text-sm text-gray-500 leading-5 overflow-ellipsis overflow-hidden whitespace-nowrap max-w-96">
                        {authorBio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col gap-4 items-start w-full">
                  {/* Post Title */}
                  <div className="flex gap-2.5 items-center justify-center w-full">
                    <p className="flex-1 text-2xl font-bold text-gray-900 leading-10 tracking-tight">
                      {title}
                    </p>
                  </div>
                  {/* Post Body */}
                  <div className="flex gap-2.5 items-center justify-center w-full">
                    <p className="flex-1 text-base text-gray-500 leading-6">
                      {content}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Post Actions */}
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-3 items-start">
              {/* Like Button */}
              <button
                className={`w-6 h-6 flex items-center justify-center hover:scale-110 transition-transform ${
                  liked ? 'text-red-500' : 'text-gray-400'
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Sprečava otvaranje post modala
                  // TODO: Implementirati like funkcionalnost
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill={liked ? 'currentColor' : 'none'}
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
              </button>
              {/* Comment Button */}
              <button 
                className="w-6 h-6 flex items-center justify-center text-gray-400 hover:scale-110 transition-transform"
                onClick={(e) => {
                  e.stopPropagation(); // Sprečava otvaranje post modala
                  // TODO: Implementirati comment funkcionalnost
                }}
              >
                <svg
                  className="w-6 h-6"
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
              </button>
            </div>

            {/* Meta Info */}
            <div className="flex gap-2 items-center justify-center">
              <div className="flex gap-2 items-start">
                {/* Avatar Group */}
                <div className="flex items-center pl-0 pr-1 py-0">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded-full border-2 border-white bg-blue-500 overflow-hidden">
                      <img
                        src="/images/avatars/1.png"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-white bg-blue-500 overflow-hidden">
                      <img
                        src="/images/avatars/2.png"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-5 h-5 rounded-full border-2 border-white bg-blue-500 overflow-hidden">
                      <img
                        src="/images/avatars/3.png"
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2.5 items-center">
                  <p className="text-sm font-medium text-gray-500 leading-5 text-right">
                    {likes.toLocaleString()} likes
                  </p>
                </div>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <div className="flex gap-2.5 items-center">
                <p className="text-sm font-medium text-gray-500 leading-5 text-right">
                  {comments.toLocaleString()} comments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
