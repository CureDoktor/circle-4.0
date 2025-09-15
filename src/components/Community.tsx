import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-[30px] py-3">
        <div className="flex items-center justify-between">
          {/* Left - Brand */}
          <div className="flex items-center">
            <img
              src="/images/elevate-logo.png"
              alt="Logo"
              className="w-[137px]"
            />
          </div>

          {/* Center - Navigation */}
          <div className="flex items-center space-x-1.5">
            <button className="px-3 py-1.5 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">
              Home
            </button>
            <button className="px-3 py-1.5 text-gray-600 hover:text-gray-800 text-sm font-medium">
              Courses
            </button>
            <button className="px-3 py-1.5 text-gray-600 hover:text-gray-800 text-sm font-medium">
              Events
            </button>
            <button className="px-3 py-1.5 text-gray-600 hover:text-gray-800 text-sm font-medium">
              Members
            </button>
            <button className="px-3 py-1.5 text-gray-600 hover:text-gray-800 text-sm font-medium">
              Leaderboard
            </button>
          </div>

          {/* Right - Actions */}
          <div className="flex items-center gap-3">
            <div>
              {/* Icons */}
              <button className="p-2 text-gray-600 hover:text-gray-800">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.91299 7.64848V5.05588C1.91299 2.90792 3.59362 1.16699 5.66675 1.16699C6.15945 1.16674 6.64738 1.26712 7.10267 1.46242C7.55797 1.65772 7.97171 1.9441 8.32028 2.30522C8.66885 2.66633 8.94542 3.09511 9.13419 3.56707C9.32297 4.03903 9.42026 4.54493 9.42051 5.05588V7.64848C9.42051 8.28755 9.70051 8.89227 10.1811 9.29283L10.3743 9.45357C10.9474 9.93061 10.6218 10.8892 9.88676 10.8892H1.44674C0.711737 10.8892 0.386111 9.93061 0.959237 9.45357L1.15236 9.29283C1.38979 9.0953 1.5814 8.84499 1.71305 8.56038C1.8447 8.27577 1.91303 7.96413 1.91299 7.64848Z"
                    stroke="#3F3F46"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.04175 12.833H6.29175"
                    stroke="#3F3F46"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 6.48926C12.5 9.44252 9.87634 11.8128 6.66671 11.8128C6.26015 11.8126 5.85453 11.7736 5.45532 11.6963"
                    stroke="#3F3F46"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.16606 10.7412C1.75374 9.77175 0.833374 8.23493 0.833374 6.48926"
                    stroke="#3F3F46"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.833374 6.4899C0.833374 3.53663 3.45708 1.16699 6.66671 1.16699C9.87634 1.16699 12.5 3.53728 12.5 6.49055"
                    stroke="#3F3F46"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.45447 11.6943L3.1665 12.833"
                    stroke="#3F3F46"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.16608 10.7422C3.16543 11.2978 3.16672 12.0474 3.16672 12.834"
                    stroke="#3F3F46"
                    strokeWidth="1.16667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.21301 10.3779L5.44078 11.6057L4.21301 12.8335"
                    stroke="#3F3F46"
                    strokeWidth="1.08333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.44136 11.6058H1.75806"
                    stroke="#3F3F46"
                    strokeWidth="1.08333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.96323 12.0028C10.3876 11.4838 12.1957 9.57707 12.4675 7.25311C12.7393 4.92915 11.415 2.69855 9.16853 1.69655C6.92208 0.694554 4.24713 1.14132 2.50506 2.80948C0.762988 4.47764 0.336587 7.00065 1.44287 9.09444"
                    stroke="#3F3F46"
                    strokeWidth="1.08333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16748 7.41871H7.50156"
                    stroke="#3F3F46"
                    strokeWidth="1.08333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16748 4.91774H9.16861"
                    stroke="#3F3F46"
                    strokeWidth="1.08333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.82287 3.16699H11.5107C12.2415 3.16699 12.8335 3.74708 12.8335 4.46329V14.8337L8.67208 12.7123L4.50012 14.8337V4.46329C4.50012 3.74708 5.09205 3.16699 5.82287 3.16699Z"
                    stroke="#3F3F46"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-800">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-blue-300">
                <img
                  src="/images/avatars/1.png"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-68 bg-white border-r border-gray-200 py-6 px-3">
          {/* Feed */}
          <div className="flex items-center space-x-2 mb-6">
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
                d="M4.24444 4.75C3.90997 4.75 3.75 4.98473 3.75 5.14286V8.85714C3.75 9.01528 3.90996 9.25 4.24444 9.25H15.7556C16.0901 9.25 16.25 9.01528 16.25 8.85714V5.14286C16.25 4.98473 16.09 4.75 15.7556 4.75H4.24444ZM2.25 5.14286C2.25 4.03861 3.20435 3.25 4.24444 3.25H15.7556C16.7957 3.25 17.75 4.03862 17.75 5.14286V8.85714C17.75 9.9614 16.7957 10.75 15.7556 10.75H4.24444C3.20435 10.75 2.25 9.96141 2.25 8.85714V5.14286ZM2.25 13C2.25 12.5858 2.58579 12.25 3 12.25H17C17.4142 12.25 17.75 12.5858 17.75 13C17.75 13.4142 17.4142 13.75 17 13.75H3C2.58579 13.75 2.25 13.4142 2.25 13ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H17C17.4142 15.25 17.75 15.5858 17.75 16C17.75 16.4142 17.4142 16.75 17 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"
                fill="#545861"
              />
            </svg>

            <span className="font-medium text-gray-500">Feed</span>
          </div>

          {/* New member hub */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">New member hub</h3>
            <div className="space-y-2">
              <div className="flex items-center bg-gray-100 space-x-3 rounded-lg px-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <button className=" py-2 text-gray-900 rounded-lg font-medium text-sm">
                  Start here
                </button>
              </div>
              <div className="flex items-center space-x-3 rounded-lg px-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <button className="text-gray-600 hover:text-gray-900 text-sm">
                  Say hello
                </button>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Activities</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 rounded-lg px-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <button className="text-gray-600 hover:text-gray-900 text-sm">
                  Start here
                </button>
              </div>
              <div className="flex items-center space-x-3 rounded-lg px-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <button className="text-gray-600 hover:text-gray-900 text-sm text-left">
                  The Monday group gathering
                </button>
              </div>
              <div className="flex items-center space-x-3 rounded-lg px-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <button className="text-gray-600 hover:text-gray-900 text-sm">
                  Start here
                </button>
              </div>
              <div className="flex items-center space-x-3 rounded-lg px-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <button className="text-gray-600 hover:text-gray-900 text-sm">
                  Say hello
                </button>
              </div>
              <div className="flex items-center space-x-3 rounded-lg px-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <button className="text-gray-600 hover:text-gray-900 text-sm">
                  Start here
                </button>
              </div>
              <div className="flex items-center space-x-3 rounded-lg px-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <button className="text-gray-600 hover:text-gray-900 text-sm">
                  Say hello
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          {/* Section Title with Actions */}
          <div className="flex items-center justify-between bg-white border-b border-gray-200 p-6">
            <h2 className="text-md font-bold text-gray-900">Start Here</h2>

            {/* Right Actions */}
            <div className="flex items-center space-x-3 rounded-lg px-3">
              {/* User Profile */}
              <div className="flex items-center space-x-1">
                <div className="w-8 h-8 bg-blue-100 rounded-full border-2 border-white flex items-center justify-center relative right-[-20px] z-10">
                  <span className="text-sm font-medium text-blue-600">LC</span>
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full border-2 border-white flex items-center justify-center relative right-[-10px]">
                  <img
                    src="/images/avatars/2.png"
                    alt="User"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-8 h-8 bg-green-100 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-sm font-medium text-green-600">TV</span>
                </div>
                <div className="w-8 h-8rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-600">
                    +233
                  </span>
                </div>
              </div>

              {/* New Post Button */}
              <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-2xl font-medium hover:bg-yellow-500 text-xs">
                New post
              </button>

              {/* More Options */}
              {/* <button className="p-2 text-gray-600 hover:text-gray-800">
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
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button> */}
            </div>
          </div>
          <div className="p-6">
            {/* Welcome Banner */}
            <div className="bg-green-800 rounded-lg p-8 mb-6 pl-10 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex-1 max-w-[260px]">
                  <div className="inline-block bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    Orientation
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Welcome to Elevate Academy
                  </h3>
                </div>
                <div className="flex space-x-4">
                  <div className="w-[92px] h-[62px] rounded-lg overflow-hidden relative right-[-140px] bottom-[-145px]">
                    <img
                      src="https://picsum.photos/64/64?random=1"
                      alt="Person 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[119px] h-[151px] relative right-[-5px] bottom-[20px] rounded-lg overflow-hidden">
                    <img
                      src="https://picsum.photos/48/48?random=2"
                      alt="Person 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[174px] h-[196px] rounded-lg overflow-hidden">
                    <img
                      src="https://picsum.photos/80/80?random=3"
                      alt="Person 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Start a post */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 max-w-[610px] mx-auto">
              <div className="flex items-center space-x-3 rounded-lg px-3">
                <img
                  src="/images/avatars/1.png"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Start a post"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors">
                  <svg
                    className="w-5 h-5 text-gray-600"
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

            {/* Posts Container - Scrollable */}
            <div className="max-w-[610px] mx-auto max-h-[600px] overflow-y-auto scrollbar-hide">
              {/* Post 1 */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/images/avatars/2.png"
                      alt="Aisha Khan"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Aisha Khan
                      </h4>
                      <p className="text-sm text-gray-500">
                        Jun 30 • Course Strategy Mentor
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Welcome to Elevate Academy!
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Hey there 👋 We&apos;re thrilled to have you here. This
                    space is your go-to hub for building, learning, and growing
                    alongside fellow educators, creators, and
                    curriculum-builders. Whether you&apos;re just starting your
                    course or scaling an existing program—you&apos;re in the
                    right place. Let&apos;s build something that lasts.
                  </p>
                </div>

                {/* Post Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://picsum.photos/600/300?random=4"
                    alt="Post content"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Post 2 */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/images/avatars/3.png"
                      alt="Sarah Johnson"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Sarah Johnson
                      </h4>
                      <p className="text-sm text-gray-500">
                        Jun 29 • Content Creator
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Building Your First Course: A Step-by-Step Guide
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Starting your first course can feel overwhelming, but it
                    doesn&apos;t have to be! Here&apos;s my proven framework
                    that has helped over 500 creators launch successful courses.
                    The key is to start small and iterate based on feedback.
                  </p>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://picsum.photos/600/300?random=5"
                    alt="Post content"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Post 3 */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/images/avatars/4.png"
                      alt="Michael Chen"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Michael Chen
                      </h4>
                      <p className="text-sm text-gray-500">
                        Jun 28 • Marketing Expert
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    The Power of Community in Online Learning
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    One of the biggest mistakes I see course creators make is
                    focusing only on content delivery. The real magic happens
                    when you build a community around your course. Students
                    learn better, stay engaged longer, and become your biggest
                    advocates.
                  </p>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://picsum.photos/600/300?random=6"
                    alt="Post content"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Post 4 */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/images/avatars/5.png"
                      alt="Emma Rodriguez"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Emma Rodriguez
                      </h4>
                      <p className="text-sm text-gray-500">
                        Jun 27 • Course Designer
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Pricing Your Course: Finding the Sweet Spot
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Pricing can make or break your course success. After
                    analyzing 1000+ successful courses, I&apos;ve found that the
                    sweet spot isn&apos;t always the highest price. It&apos;s
                    about perceived value and your audience&apos;s willingness
                    to pay.
                  </p>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://picsum.photos/600/300?random=7"
                    alt="Post content"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              {/* Post 5 */}
              <div className="bg-white rounded-lg border border-gray-200 p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src="/images/avatars/6.png"
                      alt="David Park"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        David Park
                      </h4>
                      <p className="text-sm text-gray-500">
                        Jun 26 • Tech Instructor
                      </p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Tools That Will Transform Your Course Creation Process
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    After creating 50+ courses, I&apos;ve tested every tool out
                    there. Here are the ones that actually save time and improve
                    quality. From recording software to community platforms,
                    these tools have been game-changers for my workflow.
                  </p>
                </div>

                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://picsum.photos/600/300?random=8"
                    alt="Post content"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
