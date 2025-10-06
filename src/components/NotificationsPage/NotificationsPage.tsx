import React, { useState } from 'react';
import NotificationsHeader from './NotificationsHeader';
import NotificationItem from './NotificationItem';

const NotificationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('unread');

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'unread', label: 'Unread', count: 7 },
    { id: 'content', label: 'Content' },
    { id: 'mentions', label: 'Mentions' },
    { id: 'following', label: 'Following' },
    { id: 'moderation', label: 'Moderation' },
  ];

  const notifications = {
    today: [
      {
        id: '1',
        type: 'comment' as const,
        icon: (
          <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold text-red-600">HBS</span>
          </div>
        ),
        title: '5 new comments on your post',
        subtitle:
          'Tip: Host offline meetups to connect members & invest in photography.',
        timestamp: '3 hrs ago',
        isUnread: true,
      },
      {
        id: '2',
        type: 'live' as const,
        avatar: '/images/avatars/1.png',
        title: 'Owen Sinclair is live with How to run online courses',
        timestamp: '3 hrs ago',
        isUnread: true,
        joinButton: true,
      },
      {
        id: '3',
        type: 'member' as const,
        title: '5 new members joined the community',
        timestamp: '3 hrs ago',
        isUnread: true,
      },
      {
        id: '4',
        type: 'mention' as const,
        avatar: '/images/avatars/2.png',
        title:
          'Calvin Parks mentioned you in a comment on: April update: Introducing the custom app builder, AI summaries',
        timestamp: '3 hrs ago',
        isUnread: true,
      },
      {
        id: '5',
        type: 'connection' as const,
        avatar: '/images/avatars/3.png',
        title: 'Cody Fished wants to connect with you',
        timestamp: '3 hrs ago',
        isUnread: true,
        actionButtons: (
          <>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Ignore
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-colors">
              Accept
            </button>
          </>
        ),
      },
    ],
    last7days: [
      {
        id: '6',
        type: 'comment' as const,
        avatar: '/images/avatars/4.png',
        title: 'Maria Suarez commented on your post',
        subtitle:
          'Tip: Host offline meetups to connect members & invest in photography.',
        timestamp: '3 hrs ago',
        isUnread: false,
      },
      {
        id: '7',
        type: 'mention' as const,
        avatar: '/images/avatars/2.png',
        title:
          'Calvin Parks mentioned you in a comment on: April update: Introducing the custom app builder, AI summaries',
        timestamp: '3 hrs ago',
        isUnread: false,
      },
    ],
    older: [
      {
        id: '8',
        type: 'comment' as const,
        avatar: '/images/avatars/4.png',
        title: 'Maria Suarez commented on your post',
        subtitle:
          'Tip: Host offline meetups to connect members & invest in photography.',
        timestamp: '3 hrs ago',
        isUnread: false,
      },
      {
        id: '9',
        type: 'mention' as const,
        avatar: '/images/avatars/2.png',
        title:
          'Calvin Parks mentioned you in a comment on: April update: Introducing the custom app builder, AI summaries',
        timestamp: '3 hrs ago',
        isUnread: false,
      },
    ],
  };

  return (
    <div className="h-full bg-white flex flex-col">
      <NotificationsHeader />

      {/* Filter Tabs */}
      <div className="bg-white px-6 py-4">
        <div className="max-w-[680px] mx-auto">
          <div className="flex space-x-1 rounded-lg p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-gray-900 border border-gray-200 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 border border-transparent'
                }`}
              >
                {tab.label}
                {tab.count && (
                  <span className="mx-2 border border-gray-200 text-gray-700 text-xs px-2 py-1 rounded-xl">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications List */}
      <div className="flex-1 overflow-y-auto">
        <div
          className="flex-1 max-w-4xl mx-auto rounded-lg"
          style={{ maxWidth: '680px' }}
        >
          {/* Today */}
          <div>
            <div className="px-6 py-3">
              <h3 className="text-sm font-semibold text-gray-900">Today</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {notifications.today.map(notification => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
            </div>
          </div>

          {/* Last 7 days */}
          <div>
            <div className="px-6 py-3">
              <h3 className="text-sm font-semibold text-gray-900">
                Last 7 days
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {notifications.last7days.map(notification => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
            </div>
          </div>

          {/* Older */}
          <div>
            <div className="px-6 py-3">
              <h3 className="text-sm font-semibold text-gray-900">Older</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {notifications.older.map(notification => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
