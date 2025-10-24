import React, { useState } from 'react';

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isUnread: boolean;
  isOnline: boolean;
}

interface ChatListProps {
  onChatSelect: (chat: Chat) => void;
  selectedChatId: string;
}

const ChatList: React.FC<ChatListProps> = ({
  onChatSelect,
  selectedChatId,
}) => {
  const [activeTab, setActiveTab] = useState('all');

  const chats: Chat[] = [
    {
      id: '1',
      name: 'Calvin Parks',
      avatar: '/images/avatars/1.png',
      lastMessage: 'Creating a space where there are no quantu...',
      timestamp: '9:45',
      isUnread: false,
      isOnline: true,
    },
    {
      id: '2',
      name: 'Alex Brightwood',
      avatar: '/images/avatars/2.png',
      lastMessage: 'Just wanted to check in and see how things...',
      timestamp: '9:45',
      isUnread: true,
      isOnline: false,
    },
    {
      id: '3',
      name: 'Jordan Silverstone',
      avatar: '/images/avatars/3.png',
      lastMessage: 'Can we discuss that project we mentioned e...',
      timestamp: '9:45',
      isUnread: false,
      isOnline: false,
    },
    {
      id: '4',
      name: 'Calvin Parks',
      avatar: '/images/avatars/4.png',
      lastMessage: 'I was thinking about our last conversation. G...',
      timestamp: '9:45',
      isUnread: false,
      isOnline: true,
    },
    {
      id: '5',
      name: 'Taylor Greenfield',
      avatar: '/images/avatars/5.png',
      lastMessage: "Hey team, what's up?",
      timestamp: '9:45',
      isUnread: true,
      isOnline: false,
    },
    {
      id: '6',
      name: 'Darrell Steward',
      avatar: '/images/avatars/6.png',
      lastMessage: 'Wanted to share something exciting with you...',
      timestamp: '9:45',
      isUnread: true,
      isOnline: false,
    },
    {
      id: '7',
      name: 'Kristin Watson',
      avatar: '/images/avatars/7.png',
      lastMessage: 'I was thinking about our last conversation. G...',
      timestamp: '9:45',
      isUnread: false,
      isOnline: false,
    },
    {
      id: '8',
      name: 'Dianne Russell',
      avatar: '/images/avatars/8.png',
      lastMessage: 'Just wanted to check in and see how things...',
      timestamp: '9:45',
      isUnread: false,
      isOnline: false,
    },
    {
      id: '9',
      name: 'Esther Howard',
      avatar: '/images/avatars/1.png',
      lastMessage: "Hope you're doing well. Any plans for the we...",
      timestamp: '9:45',
      isUnread: false,
      isOnline: false,
    },
    {
      id: '10',
      name: 'Jacob Jones',
      avatar: '/images/avatars/2.png',
      lastMessage: 'Can we discuss that project we mentioned e...',
      timestamp: '9:45',
      isUnread: false,
      isOnline: false,
    },
  ];

  const filteredChats =
    activeTab === 'unread' ? chats.filter(chat => chat.isUnread) : chats;

  return (
    <div className="w-[405px] bg-white border-r border-gray-200 flex flex-col min-h-0">
      {/* Tabs */}
      <div className="p-4">
        <div className="flex space-x-1 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('all')}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'all'
                ? 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 border border-white'
            }`}
          >
            All
            <span className="mx-2 border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded-xl">
              {chats.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('unread')}
            className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
              activeTab === 'unread'
                ? 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 border border-white'
            }`}
          >
            Unread
            <span className="mx-2 border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded-xl">
              {chats.filter(chat => chat.isUnread).length}
            </span>
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-600"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {filteredChats.map(chat => (
          <div
            key={chat.id}
            onClick={() => onChatSelect(chat)}
            className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
              selectedChatId === chat.id ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {chat.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900 truncate">
                    {chat.name}
                  </h3>
                  <span className="text-xs text-gray-500">
                    {chat.timestamp}
                  </span>
                </div>
                <p className="text-sm text-gray-600 truncate mt-1">
                  {chat.lastMessage}
                </p>
              </div>
              {chat.isUnread && (
                <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
