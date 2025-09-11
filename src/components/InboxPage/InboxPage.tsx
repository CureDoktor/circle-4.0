import React, { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import UserProfile from './UserProfile';

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isUnread: boolean;
  isOnline: boolean;
}

interface User {
  id: string;
  name: string;
  title: string;
  avatar: string;
  email: string;
  location: string;
  memberSince: string;
  tags: string[];
  bio: string;
  social: {
    website?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const InboxPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat(chat);

    // Mock user data based on selected chat
    const userData: User = {
      id: chat.id,
      name: chat.name,
      title: 'Marketing Manager',
      avatar: chat.avatar,
      email: 'devon@saas.com',
      location: 'California, CA',
      memberSince: 'July 2020',
      tags: ['Editor', 'Pro', 'Creator'],
      bio: "I'm Alexandea Sifferlin wanted to post this quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volup velit esse cillum dolore eu fugiat nulla pariatur.",
      social: {
        website: 'alaxandrasifferlin.com',
        facebook: 'Alaxander Sifferlin',
        twitter: 'alaxander567_wanderer',
        instagram: 'Wanderlust_rider',
      },
    };

    setSelectedUser(userData);
  };

  return (
    <div className="h-full bg-white flex">
      <ChatList
        onChatSelect={handleChatSelect}
        selectedChatId={selectedChat?.id || ''}
      />
      <ChatWindow chat={selectedChat} />
      <UserProfile user={selectedUser} />
    </div>
  );
};

export default InboxPage;
