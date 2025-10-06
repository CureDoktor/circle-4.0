import React, { useState } from 'react';
import InboxNavbar from '../InboxPage/InboxNavbar';
import ChatList from '../InboxPage/ChatList';
import ChatWindow from '../InboxPage/ChatWindow';
import UserProfile from '../InboxPage/UserProfile';

interface AIInboxProps {
  onToggleSidebar: () => void;
}

const AIInbox: React.FC<AIInboxProps> = ({
  onToggleSidebar: _onToggleSidebar,
}) => {
  // Initialize with first chat
  const initialChat = {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '/images/avatars/1.png',
    isOnline: true,
    messages: [
      {
        id: '1',
        sender: 'Sarah Johnson',
        content:
          'Hi! I wanted to follow up on our discussion about the new feature requirements.',
        timestamp: '9:45 AM',
        isOwn: false,
      },
      {
        id: '2',
        sender: 'You',
        content:
          "Thanks for reaching out! I've been reviewing the specifications and have some questions.",
        timestamp: '9:47 AM',
        isOwn: true,
      },
      {
        id: '3',
        sender: 'Sarah Johnson',
        content:
          "Perfect! What specific aspects would you like to discuss? I'm available for a call if that would be easier.",
        timestamp: '9:48 AM',
        isOwn: false,
      },
      {
        id: '4',
        sender: 'You',
        content: 'A call would be great. How about tomorrow at 2 PM?',
        timestamp: '9:50 AM',
        isOwn: true,
      },
      {
        id: '5',
        sender: 'Sarah Johnson',
        content:
          "That works perfectly for me. I'll send you a calendar invite shortly.",
        timestamp: '9:52 AM',
        isOwn: false,
      },
    ],
  };

  const getUserData = (chatId: string) => {
    // Mock user data - in real app this would come from API
    const users: { [key: string]: any } = {
      '1': {
        id: '1',
        name: 'Sarah Johnson',
        title: 'Product Manager',
        avatar: '/images/avatars/1.png',
        email: 'sarah.johnson@example.com',
        location: 'San Francisco, CA',
        memberSince: 'January 2023',
        tags: ['Product', 'Management', 'Strategy'],
        bio: 'Passionate product manager with 5+ years of experience in building user-centric products.',
        social: {
          website: 'https://sarahjohnson.com',
          twitter: '@sarahjohnson',
          linkedin: 'sarah-johnson-pm',
        },
      },
      '2': {
        id: '2',
        name: 'Mike Chen',
        title: 'Developer',
        avatar: '/images/avatars/2.png',
        email: 'mike.chen@example.com',
        location: 'Seattle, WA',
        memberSince: 'March 2023',
        tags: ['Development', 'JavaScript', 'React'],
        bio: 'Full-stack developer specializing in modern web technologies.',
        social: {
          github: 'mikechen-dev',
          twitter: '@mikechen_dev',
        },
      },
      '3': {
        id: '3',
        name: 'Emily Davis',
        title: 'Designer',
        avatar: '/images/avatars/3.png',
        email: 'emily.davis@example.com',
        location: 'New York, NY',
        memberSince: 'February 2023',
        tags: ['Design', 'UI/UX', 'Creative'],
        bio: 'Creative designer focused on user experience and visual design.',
        social: {
          behance: 'emilydavis-design',
          instagram: '@emilydavis_design',
        },
      },
    };
    return users[chatId] || users['1'];
  };

  const [selectedChat, setSelectedChat] = useState(initialChat);
  const [selectedUser, setSelectedUser] = useState(getUserData('1'));

  const handleChatSelect = (chat: any) => {
    setSelectedChat(chat);
    setSelectedUser(getUserData(chat.id));
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <InboxNavbar />
      <div className="flex-1 flex min-h-0">
        <ChatList
          onChatSelect={handleChatSelect}
          selectedChatId={selectedChat?.id || ''}
        />
        <ChatWindow chat={selectedChat} />
        <UserProfile user={selectedUser} />
      </div>
    </div>
  );
};

export default AIInbox;
