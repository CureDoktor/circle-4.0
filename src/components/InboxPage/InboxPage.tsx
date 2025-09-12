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
  messages?: any[];
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
    linkedin?: string;
  };
}

const InboxPage: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Mock data for different users
  const getUserData = (chatId: string): User => {
    const userDataMap: Record<string, User> = {
      '1': {
        id: '1',
        name: 'Calvin Parks',
        title: 'Marketing Manager',
        avatar: '/images/avatars/1.png',
        email: 'calvin@saas.com',
        location: 'California, CA',
        memberSince: 'July 2020',
        tags: ['Editor', 'Pro', 'Creator'],
        bio: "I'm Calvin Parks, passionate about marketing and community building. Love connecting with people and sharing insights about digital marketing strategies.",
        social: {
          website: 'calvinparks.com',
          facebook: 'Calvin Parks',
          twitter: 'calvin_parks_marketing',
          instagram: 'calvin_parks_life',
        },
      },
      '2': {
        id: '2',
        name: 'Alex Brightwood',
        title: 'Product Designer',
        avatar: '/images/avatars/2.png',
        email: 'alex@brightwood.design',
        location: 'New York, NY',
        memberSince: 'March 2021',
        tags: ['Designer', 'Creative', 'Innovator'],
        bio: 'Product designer with a passion for creating beautiful, functional experiences. Always exploring new ways to solve user problems through design.',
        social: {
          website: 'brightwood.design',
          twitter: 'alex_brightwood',
          instagram: 'alex_brightwood_design',
        },
      },
      '3': {
        id: '3',
        name: 'Jordan Silverstone',
        title: 'Software Engineer',
        avatar: '/images/avatars/3.png',
        email: 'jordan@techcorp.com',
        location: 'Seattle, WA',
        memberSince: 'January 2020',
        tags: ['Developer', 'Tech Lead', 'Mentor'],
        bio: 'Full-stack developer passionate about building scalable applications. Love mentoring junior developers and contributing to open source projects.',
        social: {
          website: 'jordansilverstone.dev',
          twitter: 'jordan_silverstone',
          instagram: 'jordan_codes',
        },
      },
      '4': {
        id: '4',
        name: 'Taylor Greenfield',
        title: 'Content Creator',
        avatar: '/images/avatars/5.png',
        email: 'taylor@contentstudio.com',
        location: 'Austin, TX',
        memberSince: 'September 2021',
        tags: ['Creator', 'Writer', 'Influencer'],
        bio: 'Content creator and digital storyteller. I help brands tell their stories through compelling content and authentic engagement.',
        social: {
          website: 'taylorgreenfield.com',
          twitter: 'taylor_greenfield',
          instagram: 'taylor_greenfield_creative',
        },
      },
      '5': {
        id: '5',
        name: 'Darrell Steward',
        title: 'Business Consultant',
        avatar: '/images/avatars/6.png',
        email: 'darrell@stewardconsulting.com',
        location: 'Chicago, IL',
        memberSince: 'May 2019',
        tags: ['Consultant', 'Strategist', 'Leader'],
        bio: 'Business consultant helping companies scale and optimize their operations. Passionate about data-driven decision making and team building.',
        social: {
          website: 'stewardconsulting.com',
          linkedin: 'Darrell Steward',
          twitter: 'darrell_steward_biz',
        },
      },
    };

    return userDataMap[chatId] || userDataMap['1'];
  };

  const getChatMessages = (chatId: string) => {
    const messagesMap: Record<string, any[]> = {
      '1': [
        {
          id: '1',
          sender: 'Calvin Parks',
          content: 'Hey, Whats up? Hope you had a great weekend!!',
          timestamp: '1:55 PM',
          isOwn: false,
        },
        {
          id: '2',
          sender: 'Calvin Parks',
          content:
            'We should start a mind-bending conversation about quantum mechanics and parallel worlds',
          timestamp: '1:55 PM',
          isOwn: false,
        },
        {
          id: '3',
          sender: 'Alex Sifferlin',
          content:
            "Super excited to join this chat. Can't wait to get into dialogue with y'all. Until now, we've relied on supercomputers to solve most problems. These are very large classical computers, often with thousands of classical CPU and GPU cores. However, supercomputers aren't very good at solving certain types of problems",
          timestamp: '1:55 PM',
          isOwn: true,
        },
        {
          id: '4',
          sender: 'Calvin Parks',
          content: "I'm game!",
          timestamp: '1:55 PM',
          isOwn: false,
        },
        {
          id: '5',
          sender: 'Alex Sifferlin',
          content: "Great, I'll schedule a live for us to dig in!",
          timestamp: '1:55 PM',
          isOwn: true,
        },
      ],
      '2': [
        {
          id: '1',
          sender: 'Alex Brightwood',
          content:
            'Hey! Just wanted to check in and see how the new design system is working for you.',
          timestamp: '2:30 PM',
          isOwn: false,
        },
        {
          id: '2',
          sender: 'Alex Sifferlin',
          content:
            'The new components look amazing! The team is really happy with the improvements.',
          timestamp: '2:32 PM',
          isOwn: true,
        },
        {
          id: '3',
          sender: 'Alex Brightwood',
          content:
            "That's great to hear! I'm working on some new animations for the mobile app. Should be ready for review next week.",
          timestamp: '2:35 PM',
          isOwn: false,
        },
      ],
      '3': [
        {
          id: '1',
          sender: 'Jordan Silverstone',
          content:
            'Can we discuss that project we mentioned earlier? I have some ideas about the architecture.',
          timestamp: '10:15 AM',
          isOwn: false,
        },
        {
          id: '2',
          sender: 'Alex Sifferlin',
          content:
            "Absolutely! I'd love to hear your thoughts. When would be a good time to chat?",
          timestamp: '10:20 AM',
          isOwn: true,
        },
        {
          id: '3',
          sender: 'Jordan Silverstone',
          content:
            'How about tomorrow at 2 PM? I can share my screen and walk through the proposed structure.',
          timestamp: '10:25 AM',
          isOwn: false,
        },
      ],
      '4': [
        {
          id: '1',
          sender: 'Taylor Greenfield',
          content:
            "Hey team, what's up? I just finished editing the new video series.",
          timestamp: '4:45 PM',
          isOwn: false,
        },
        {
          id: '2',
          sender: 'Alex Sifferlin',
          content:
            "Awesome! Can't wait to see it. When are you planning to release it?",
          timestamp: '4:50 PM',
          isOwn: true,
        },
        {
          id: '3',
          sender: 'Taylor Greenfield',
          content:
            "Planning for next Monday. I'll send you the preview link once it's ready.",
          timestamp: '4:52 PM',
          isOwn: false,
        },
      ],
      '5': [
        {
          id: '1',
          sender: 'Darrell Steward',
          content:
            'Wanted to share something exciting with you. The quarterly results are looking fantastic!',
          timestamp: '11:20 AM',
          isOwn: false,
        },
        {
          id: '2',
          sender: 'Alex Sifferlin',
          content:
            "That's amazing news! What were the key drivers behind the success?",
          timestamp: '11:25 AM',
          isOwn: true,
        },
        {
          id: '3',
          sender: 'Darrell Steward',
          content:
            "The new marketing strategy and improved customer retention rates. I'll send you the detailed report.",
          timestamp: '11:30 AM',
          isOwn: false,
        },
      ],
    };

    return messagesMap[chatId] || messagesMap['1'];
  };

  const handleChatSelect = (chat: Chat) => {
    setSelectedChat({
      ...chat,
      messages: getChatMessages(chat.id),
    });
    setSelectedUser(getUserData(chat.id));
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
