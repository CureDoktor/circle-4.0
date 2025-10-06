import React, { useState } from 'react';
import DateSeparator from './DateSeparator';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  messages?: any[];
}

interface ChatWindowProps {
  chat: Chat | null;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ chat }) => {
  const [message, setMessage] = useState('');

  // Use messages from chat prop, fallback to empty array
  const messages: Message[] = chat?.messages || [];

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-gray-400"
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
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Select a conversation
          </h3>
          <p className="text-gray-500">
            Choose a chat from the sidebar to start messaging
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white min-h-0">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length > 0 ? (
          <>
            {/* Date separator - MONDAY, OCTOBER 20TH */}
            <DateSeparator date="2024-10-20" />

            {/* First set of messages */}
            {messages.slice(0, 3).map(msg => (
              <div key={msg.id} className="flex items-start space-x-3">
                <img
                  src={msg.isOwn ? '/images/avatars/1.png' : chat.avatar}
                  alt={msg.sender}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      {msg.sender}
                    </span>
                    <span className="text-xs text-gray-500">
                      {msg.timestamp}
                    </span>
                  </div>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.isOwn
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Date separator - TODAY */}
            <DateSeparator date={new Date()} />

            {/* Second set of messages */}
            {messages.slice(3).map(msg => (
              <div key={msg.id} className="flex items-start space-x-3">
                <img
                  src={msg.isOwn ? '/images/avatars/1.png' : chat.avatar}
                  alt={msg.sender}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      {msg.sender}
                    </span>
                    <span className="text-xs text-gray-500">
                      {msg.timestamp}
                    </span>
                  </div>
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.isOwn
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
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
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No messages yet
              </h3>
              <p className="text-gray-500">
                Start a conversation with {chat.name}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-100 rounded-xl p-3">
          <input
            type="text"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={`Message ${chat.name}`}
            className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500 mb-3"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {/* Lightning */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.68793 5.21714C9.81477 5.04758 10.0347 4.9763 10.2368 5.0392C10.439 5.10211 10.5797 5.28555 10.5879 5.49714V8.74814H13.4999C13.6825 8.75089 13.849 8.85291 13.9344 9.01427C14.0197 9.17563 14.0104 9.37069 13.9099 9.52314L10.3099 14.7831C10.1831 14.9527 9.96321 15.024 9.76102 14.9611C9.55883 14.8982 9.41819 14.7147 9.40993 14.5031V11.2521H6.49993C6.31725 11.2493 6.15068 11.147 6.06549 10.9853C5.9803 10.8237 5.99006 10.6285 6.09093 10.4761L9.68793 5.21714Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.5 19H15.4993C17.4326 19 18.9997 17.4326 18.9993 15.4993L18.9972 4.49933C18.9969 2.5666 17.43 1 15.4972 1H4.5C2.567 1 1 2.567 1 4.5V15.5C1 17.433 2.567 19 4.5 19Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Play */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="18"
                    height="18"
                    rx="3.5"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.90496 7.1458L12.6631 9.35866C13.1384 9.63816 13.1384 10.3234 12.6631 10.6029L8.90496 12.8158C8.42092 13.1011 7.80908 12.7531 7.80908 12.1932V7.76841C7.80908 7.20844 8.42092 6.86051 8.90496 7.1458Z"
                    fill="#717680"
                  />
                </svg>
              </button>
              {/* Image */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 15.5V4.5C19 2.567 17.433 1 15.5 1H4.5C2.567 1 1 2.567 1 4.5V15.5C1 17.433 2.567 19 4.5 19H15.5C17.433 19 19 17.433 19 15.5Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 15.4864L5.612 10.8744C6.003 10.4834 6.636 10.4834 7.026 10.8744L8.432 12.2804L13.009 7.70438C13.4 7.31338 14.033 7.31338 14.423 7.70438L19 12.2814"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.51517 5.40671C6.66161 5.55316 6.66161 5.79059 6.51517 5.93704C6.36872 6.08349 6.13128 6.08349 5.98483 5.93704C5.83839 5.79059 5.83839 5.55316 5.98483 5.40671C6.13128 5.26026 6.36872 5.26026 6.51517 5.40671"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* GIF */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9287 10.0899H14.7095"
                    stroke="#717680"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.0776 8.20312H12.9272V11.9798"
                    stroke="#717680"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.3453 8.2002V11.9802"
                    stroke="#717680"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.74961 8.2002H6.48961C5.44549 8.2002 4.59961 9.04608 4.59961 10.0902V10.0902C4.59961 11.1343 5.44549 11.9802 6.48961 11.9802H7.74961V10.0902H6.69961"
                    stroke="#717680"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.5 19C2.567 19 1 17.433 1 15.5L1 4.5C1 2.567 2.567 1 4.5 1H15.5C17.433 1 19 2.567 19 4.5V15.5C19 17.433 17.433 19 15.5 19H4.5Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Smiley */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 10C19 14.9705 14.9705 19 10 19C5.02955 19 1 14.9705 1 10C1 5.02955 5.02955 1 10 1C14.9705 1 19 5.02955 19 10V10Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.72705 11.6367C6.72705 13.4441 8.19241 14.9094 9.99978 14.9094C11.8071 14.9094 13.2725 13.4441 13.2725 11.6367"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.54554 7.5467C7.54554 7.09506 7.179 6.72852 6.72736 6.72852C6.27573 6.72852 5.90918 7.09506 5.90918 7.5467C5.90918 7.99833 6.27573 8.36488 6.72736 8.36488C7.179 8.36488 7.54554 7.99833 7.54554 7.5467V7.5467Z"
                    stroke="#717680"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.091 7.5467C14.091 7.09506 13.7244 6.72852 13.2728 6.72852C12.8211 6.72852 12.4546 7.09506 12.4546 7.5467C12.4546 7.99833 12.8211 8.36488 13.2728 8.36488C13.7244 8.36488 14.091 7.99833 14.091 7.5467V7.5467Z"
                    stroke="#717680"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Hashtag */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 5V15"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.5 5V15"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12.5H15"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 7.5H15"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="10"
                    cy="10"
                    r="9"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Mention */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 10C14 10.7911 13.7654 11.5645 13.3259 12.2223C12.8864 12.8801 12.2616 13.3928 11.5307 13.6955C10.7998 13.9983 9.99556 14.0775 9.21964 13.9231C8.44371 13.7688 7.73098 13.3878 7.17157 12.8284C6.61216 12.269 6.2312 11.5563 6.07686 10.7804C5.92252 10.0044 6.00173 9.20017 6.30448 8.46927C6.60723 7.73836 7.11992 7.11365 7.77772 6.67412C8.43552 6.2346 9.20887 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10ZM14 10V11.5C14 12.163 14.2634 12.7989 14.7322 13.2678C15.2011 13.7366 15.837 14 16.5 14C17.163 14 17.7989 13.7366 18.2678 13.2678C18.7366 12.7989 19 12.163 19 11.5V10C19 7.61305 18.0518 5.32387 16.364 3.63604C14.6761 1.94821 12.3869 1 10 1C7.61305 1 5.32387 1.94821 3.63604 3.63604C1.94821 5.32387 1 7.61305 1 10C0.999996 11.48 1.365 12.9373 2.06268 14.2425C2.76036 15.5478 3.76919 16.6609 4.99979 17.4832C6.2304 18.3055 7.6448 18.8116 9.11772 18.9567C10.5906 19.1018 12.0766 18.8814 13.444 18.315C14.0387 18.0669 14.605 17.7554 15.133 17.386"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Paperclip */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.1188 9.26214L10.431 16.6896C8.50497 18.8288 5.13081 18.9109 2.86828 16.8737C0.60575 14.8365 0.334715 11.4722 2.26079 9.33311L8.14601 2.79691C9.48356 1.31141 11.8106 1.25479 13.3818 2.6695C14.953 4.08422 15.1399 6.40439 13.8023 7.88989L8.45214 13.8319C7.70311 14.6638 6.42326 14.6949 5.54338 13.9027C4.66351 13.1104 4.5607 11.8343 5.30973 11.0025L9.8574 5.95176"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {/* Microphone */}
              <button className="p-1.5 text-gray-500 hover:text-gray-700 transition-colors">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00027 12.6465V12.6465C7.21891 12.6459 5.77499 11.2242 5.77441 9.47027V4.17622V4.17615C5.77503 2.4222 7.21899 1.00052 9.00034 1H9.00034C10.7817 1.00057 12.2256 2.42228 12.2262 4.17622V9.47027V9.4702C12.2268 11.2238 10.7835 12.6459 9.00251 12.6465C9.00179 12.6465 9.00107 12.6465 9.00035 12.6465L9.00027 12.6465Z"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3125 9.63965C16.3125 13.6161 13.0386 16.8396 9 16.8396C4.96142 16.8396 1.6875 13.6161 1.6875 9.63965"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 18.9998V16.8398"
                    stroke="#717680"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            {/* Send Button */}
            <button className="p-2 bg-gray-500 text-white rounded-full hover:bg-blue-700 transition-colors">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.375L5.66667 1L10.3333 5.375M5.66667 1.72917V12.6667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
