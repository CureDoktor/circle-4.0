import React from 'react';

const Community: React.FC = () => {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-[30px] h-16">
        <div className="flex items-center justify-between h-full">
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
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.0415 9.16667C3.0415 5.41574 6.08224 2.375 9.83317 2.375C13.5841 2.375 16.6248 5.41574 16.6248 9.16667C16.6248 10.7716 16.0674 12.2474 15.1367 13.4095L18.0718 16.3447C18.3647 16.6376 18.3647 17.1124 18.0718 17.4053C17.7789 17.6982 17.3041 17.6982 17.0112 17.4053L14.076 14.4702C12.9139 15.4009 11.4381 15.9583 9.83317 15.9583C6.08224 15.9583 3.0415 12.9176 3.0415 9.16667ZM9.83317 3.875C6.91067 3.875 4.5415 6.24416 4.5415 9.16667C4.5415 12.0892 6.91066 14.4583 9.83317 14.4583C11.2946 14.4583 12.6165 13.8669 13.5749 12.9084C14.5334 11.95 15.1248 10.6281 15.1248 9.16667C15.1248 6.24416 12.7557 3.875 9.83317 3.875Z"
                    fill="#717680"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.62467 3.875C4.11841 3.875 3.70801 4.28541 3.70801 4.79167V13.5417C3.70801 14.0479 4.11841 14.4583 4.62467 14.4583H7.87619C8.24813 14.4583 8.60822 14.5893 8.89329 14.8282L10.6142 16.2708C10.6449 16.2965 10.6898 16.2968 10.7209 16.271M10.7209 16.271L12.4694 14.8225C12.7535 14.5871 13.111 14.4583 13.4796 14.4583H16.708C17.2143 14.4583 17.6247 14.048 17.6247 13.5417V4.79167C17.6247 4.2854 17.2143 3.875 16.708 3.875H4.62467M2.20801 4.79167C2.20801 3.45698 3.28999 2.375 4.62467 2.375H16.708C18.0427 2.375 19.1247 3.45699 19.1247 4.79167V13.5417C19.1247 14.8764 18.0427 15.9583 16.708 15.9583H13.4796C13.4601 15.9583 13.4413 15.9652 13.4266 15.9774L11.6779 17.4261C11.0894 17.9137 10.2364 17.9115 9.65061 17.4204M9.65061 17.4204L7.92976 15.9778C7.91477 15.9653 7.89578 15.9583 7.87619 15.9583H4.62467C3.28999 15.9583 2.20801 14.8764 2.20801 13.5417V4.79167"
                    fill="#717680"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.6665 3.04199C8.17545 3.04199 6.12593 4.98823 6.00182 7.46205L5.84777 10.5118C5.84777 10.5118 5.84778 10.5118 5.84777 10.5118C5.83042 10.8555 5.73985 11.1916 5.58213 11.4975C5.58213 11.4975 5.58214 11.4974 5.58213 11.4975L4.55132 13.4966C4.54496 13.509 4.5415 13.5229 4.5415 13.5371C4.5415 13.5858 4.58102 13.6253 4.62978 13.6253H16.7033C16.752 13.6253 16.7915 13.5858 16.7915 13.5371C16.7915 13.5231 16.7881 13.5092 16.7817 13.4967L15.751 11.4977C15.751 11.4976 15.751 11.4977 15.751 11.4977C15.5931 11.1917 15.5026 10.8554 15.4852 10.5119L15.3312 7.46229C15.2071 4.98848 13.1575 3.04199 10.6665 3.04199ZM13.1393 15.1253H8.19373C8.5151 16.1863 9.50061 16.9587 10.6665 16.9587C11.8324 16.9587 12.8179 16.1863 13.1393 15.1253ZM6.6519 15.1253C7.00406 17.0222 8.66753 18.4587 10.6665 18.4587C12.6654 18.4587 14.3289 17.0222 14.6811 15.1253H16.7033C17.5804 15.1253 18.2915 14.4142 18.2915 13.5371C18.2915 13.2838 18.2309 13.0342 18.1149 12.8092C18.1148 12.8092 18.1149 12.8092 18.1149 12.8092L17.0841 10.81C17.0244 10.6943 16.9899 10.5667 16.9833 10.4361L16.8293 7.38689C16.8293 7.3868 16.8293 7.38697 16.8293 7.38689C16.6648 4.11057 13.9522 1.54199 10.6665 1.54199C7.38074 1.54199 4.66822 4.11032 4.50372 7.38663C4.50371 7.38672 4.50372 7.38655 4.50372 7.38663L4.34968 10.4362C4.3431 10.5666 4.30874 10.694 4.24894 10.81L3.21818 12.8091C3.21816 12.8091 3.2182 12.809 3.21818 12.8091C3.10207 13.0342 3.0415 13.2839 3.0415 13.5371C3.0415 14.4142 3.7526 15.1253 4.62978 15.1253H6.6519Z"
                    fill="#717680"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.875 3.95866C3.875 2.62397 4.95698 1.54199 6.29167 1.54199H15.0417C16.3764 1.54199 17.4583 2.62398 17.4583 3.95866V16.8766C17.4583 18.1443 16.0427 18.898 14.9909 18.19C14.9909 18.19 14.9908 18.19 14.9908 18.19L11.1786 15.624C10.8691 15.4157 10.4643 15.4157 10.1548 15.6239C10.1548 15.6239 10.1548 15.6239 10.1547 15.624L6.34245 18.19L5.92366 17.5678L6.34245 18.19C5.29081 18.8979 3.875 18.1445 3.875 16.8766V3.95866ZM6.29167 3.04199C5.78541 3.04199 5.375 3.4524 5.375 3.95866V16.8766C5.375 16.9001 5.38061 16.9123 5.38548 16.92C5.39179 16.9301 5.40289 16.9414 5.41914 16.9501C5.43539 16.9587 5.45102 16.9616 5.46291 16.9612C5.4721 16.9609 5.48533 16.9588 5.50487 16.9456L9.31721 14.3796L9.31726 14.3795C10.1331 13.8305 11.2002 13.8305 12.0161 14.3795L12.0161 14.3796L15.8285 16.9456L15.8285 16.9457C15.8481 16.9588 15.8613 16.961 15.8705 16.9613C15.8823 16.9616 15.8979 16.9588 15.9142 16.9501C15.9304 16.9415 15.9415 16.9301 15.9478 16.9201C15.9527 16.9123 15.9583 16.9001 15.9583 16.8766V3.95866C15.9583 3.45239 15.5479 3.04199 15.0417 3.04199H6.29167Z"
                    fill="#717680"
                  />
                </svg>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-800">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.1665 18.5V17H3.6665C3.25229 17 2.9165 16.6642 2.9165 16.25C2.9165 15.8358 3.25229 15.5 3.6665 15.5H5.1665V14C5.1665 13.5858 5.50229 13.25 5.9165 13.25C6.33072 13.25 6.6665 13.5858 6.6665 14V15.5H8.1665C8.58072 15.5 8.9165 15.8358 8.9165 16.25C8.9165 16.6642 8.58072 17 8.1665 17H6.6665V18.5C6.6665 18.9142 6.33072 19.25 5.9165 19.25C5.50229 19.25 5.1665 18.9142 5.1665 18.5ZM16.7915 13.542V4.79199C16.7915 4.28572 16.3808 3.875 15.8745 3.875H5.4585C4.95223 3.875 4.5415 4.28573 4.5415 4.79199V12C4.5415 12.4142 4.20572 12.75 3.7915 12.75C3.37729 12.75 3.0415 12.4142 3.0415 12V4.79199C3.0415 3.4573 4.12381 2.375 5.4585 2.375H15.8745C17.2092 2.375 18.2915 3.45731 18.2915 4.79199V13.542C18.2913 14.8766 17.2091 15.958 15.8745 15.958H13.48C13.4703 15.958 13.4605 15.9597 13.4517 15.9629L13.4263 15.9775L11.6782 17.4258C11.3593 17.69 10.8858 17.6461 10.6216 17.3271C10.3575 17.0082 10.4024 16.5357 10.7212 16.2715L12.4692 14.8223L12.5796 14.7393C12.8433 14.5569 13.1574 14.458 13.48 14.458H15.8745C16.3807 14.458 16.7913 14.0481 16.7915 13.542ZM13.3745 10.083C13.7886 10.083 14.1243 10.4189 14.1245 10.833C14.1245 11.2472 13.7887 11.583 13.3745 11.583H7.9585C7.54428 11.583 7.2085 11.2472 7.2085 10.833C7.20867 10.4189 7.54439 10.083 7.9585 10.083H13.3745ZM13.3745 6.75C13.7887 6.75 14.1245 7.08579 14.1245 7.5C14.1245 7.91421 13.7887 8.25 13.3745 8.25H7.9585C7.54428 8.25 7.2085 7.91421 7.2085 7.5C7.2085 7.08579 7.54428 6.75 7.9585 6.75H13.3745Z"
                    fill="#717680"
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
      <div className="flex-1 flex overflow-hidden">
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
            <h3 className="font-semibold text-gray-900 mb-3 pl-3">
              New member hub
            </h3>
            <div className="space-y-4">
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
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 pl-3">
              Activities
            </h3>
            <div className="space-y-4">
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
            </div>
          </div>
          {/* Activities */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 pl-3">
              Activities
            </h3>
            <div className="space-y-4">
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
        <div className="flex-1 flex-col overflow-hidden">
          <div className="flex items-center justify-between bg-white border-b border-gray-200 p-6 h-20">
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
              <button className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-2xl font-medium hover:bg-yellow-500 text-sm">
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

          {/* Main Content Area */}
          <div className="flex-1 flex-col h-full overflow-auto">
            {/* Section Title with Actions */}

            <div className="h-full">
              <div className="p-6 h-full">
                {/* Welcome Banner */}
                <div className="bg-[#0A4A40] rounded-lg p-8 mb-6 pl-20 relative max-w-7xl mx-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 max-w-[260px]">
                      <div className="inline-block bg-[#227F71] border border-[#237265] text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Orientation
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        Welcome to Elevate Academy
                      </h3>
                    </div>
                    <div className="flex space-x-4">
                      <div className="w-[92px] h-[62px] rounded-lg overflow-hidden relative right-[-140px] bottom-[-145px]">
                        <img
                          src="/images/placeholders/image-3.png"
                          alt="Person 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-[119px] h-[151px] relative right-[-5px] bottom-[20px] rounded-lg overflow-hidden">
                        <img
                          src="/images/placeholders/image-2.png"
                          alt="Person 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-[174px] h-[196px] rounded-lg overflow-hidden">
                        <img
                          src="/images/placeholders/image.png"
                          alt="Person 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
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
                  <div className="max-w-[610px] mx-auto">
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
                          Hey there 👋 We&apos;re thrilled to have you here.
                          This space is your go-to hub for building, learning,
                          and growing alongside fellow educators, creators, and
                          curriculum-builders. Whether you&apos;re just starting
                          your course or scaling an existing program—you&apos;re
                          in the right place. Let&apos;s build something that
                          lasts.
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
                          Starting your first course can feel overwhelming, but
                          it doesn&apos;t have to be! Here&apos;s my proven
                          framework that has helped over 500 creators launch
                          successful courses. The key is to start small and
                          iterate based on feedback.
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
                          One of the biggest mistakes I see course creators make
                          is focusing only on content delivery. The real magic
                          happens when you build a community around your course.
                          Students learn better, stay engaged longer, and become
                          your biggest advocates.
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
                          analyzing 1000+ successful courses, I&apos;ve found
                          that the sweet spot isn&apos;t always the highest
                          price. It&apos;s about perceived value and your
                          audience&apos;s willingness to pay.
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
                          After creating 50+ courses, I&apos;ve tested every
                          tool out there. Here are the ones that actually save
                          time and improve quality. From recording software to
                          community platforms, these tools have been
                          game-changers for my workflow.
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
        </div>
      </div>
    </div>
  );
};

export default Community;
