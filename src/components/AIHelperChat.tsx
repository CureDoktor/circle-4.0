import React, { useState } from 'react';

interface AIHelperChatProps {
  onClose: () => void;
}

const AIHelperChat: React.FC<AIHelperChatProps> = ({ onClose }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission here
      setMessage('');
    }
  };

  return (
    <div className="w-[326px] h-full nav-container flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-[22px]">
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5155_2509)">
              <path
                d="M18 8C18 3.58172 14.4183 0 10 0C5.58172 0 2 3.58172 2 8C2 12.4183 5.58172 16 10 16C14.4183 16 18 12.4183 18 8Z"
                fill="url(#paint0_linear_5155_2509)"
              />
              <g filter="url(#filter0_dd_5155_2509)">
                <path
                  d="M9.96191 3.97266C10.6587 3.9727 11.2897 4.11419 11.8545 4.39746C12.4266 4.6807 12.8959 5.07664 13.2627 5.58496C13.6104 6.06693 13.8334 6.62154 13.9307 7.24707C13.9389 7.30186 13.8949 7.35059 13.8389 7.35059H12.2529C12.2072 7.35038 12.1685 7.31707 12.1602 7.27246C12.0956 6.92725 11.9644 6.62289 11.7666 6.35938C11.5612 6.07608 11.3042 5.85414 10.9961 5.69434C10.6953 5.53452 10.3575 5.4541 9.9834 5.4541C9.63867 5.45413 9.32657 5.51618 9.04785 5.63965C8.77651 5.76314 8.53835 5.94144 8.33301 6.17383C8.13494 6.40628 7.98113 6.68235 7.87109 7.00195C7.76838 7.31432 7.7168 7.65937 7.7168 8.03711C7.7168 8.42204 7.76842 8.77417 7.87109 9.09375C7.98112 9.40609 8.13495 9.67868 8.33301 9.91113C8.53833 10.1435 8.77654 10.3253 9.04785 10.4561C9.32657 10.5795 9.63867 10.6416 9.9834 10.6416C10.3575 10.6416 10.6987 10.5612 11.0068 10.4014C11.315 10.2343 11.5685 10.0089 11.7666 9.72559C11.9577 9.45514 12.0888 9.15019 12.1592 8.81055C12.1683 8.76672 12.2068 8.73438 12.252 8.73438H13.8379C13.8943 8.73438 13.9384 8.78379 13.9297 8.83887C13.8259 9.47104 13.5997 10.0287 13.252 10.5107C12.8852 11.0192 12.4193 11.415 11.8545 11.6982C11.2897 11.9815 10.6587 12.123 9.96191 12.123C9.41177 12.123 8.89429 12.0217 8.41016 11.8184C7.92596 11.6077 7.50401 11.3168 7.14453 10.9463C6.78508 10.5686 6.50229 10.1326 6.29688 9.63867C6.09886 9.14477 6.00001 8.61088 6 8.03711C6 7.4633 6.09884 6.93295 6.29688 6.44629C6.5023 5.95231 6.78506 5.5199 7.14453 5.14941C7.50399 4.77896 7.92599 4.49246 8.41016 4.28906C8.89435 4.0784 9.41168 3.97266 9.96191 3.97266Z"
                  fill="url(#paint1_linear_5155_2509)"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_dd_5155_2509"
                x="1.98535"
                y="0.961667"
                width="15.9609"
                height="16.1797"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.00366" />
                <feGaussianBlur stdDeviation="2.00733" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0984 0 0 0 0 0.1056 0 0 0 0 0.12 0 0 0 0.08 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_5155_2509"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.00366" />
                <feGaussianBlur stdDeviation="1.00366" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0984 0 0 0 0 0.1056 0 0 0 0 0.12 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_5155_2509"
                  result="effect2_dropShadow_5155_2509"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_5155_2509"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_5155_2509"
                x1="15.0032"
                y1="1.71759"
                x2="10.0515"
                y2="16.0178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9747FF" />
                <stop offset="1" stopColor="#301088" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5155_2509"
                x1="14.8813"
                y1="0.798303"
                x2="8.77554"
                y2="12.2042"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#D7CDF2" />
              </linearGradient>
              <clipPath id="clip0_5155_2509">
                <rect width="20" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="font-semibold text-sm text-gray-900">
            Let&apos;s build!
          </span>
        </div>
        <div className="flex items-center gap-4">
          {/* Export/Share icon */}
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.63794 5.89151C2.63794 4.90009 3.44164 4.09639 4.43306 4.09639H7.17442C7.507 4.09639 7.77662 4.366 7.77662 4.69859C7.77662 5.03117 7.507 5.30078 7.17442 5.30078H4.43306C4.10681 5.30078 3.84233 5.56526 3.84233 5.89151V13.3473C3.84233 13.6736 4.10681 13.938 4.43306 13.938H11.8888C12.2151 13.938 12.4796 13.6736 12.4796 13.3473V10.2044C12.4796 9.87179 12.7492 9.60218 13.0818 9.60218C13.4144 9.60218 13.684 9.87179 13.684 10.2044V13.3473C13.684 14.3387 12.8803 15.1424 11.8888 15.1424H4.43306C3.44165 15.1424 2.63794 14.3387 2.63794 13.3473V5.89151Z"
                fill="#191B1F"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.34889 3.47985C9.34889 3.14727 9.6185 2.87766 9.95109 2.87766H14.3003C14.6329 2.87766 14.9025 3.14727 14.9025 3.47985V7.82906C14.9025 8.16164 14.6329 8.43126 14.3003 8.43126C13.9677 8.43126 13.6981 8.16164 13.6981 7.82906V4.93369L8.53686 10.0949C8.30168 10.3301 7.92039 10.3301 7.68522 10.0949C7.45005 9.85975 7.45005 9.47846 7.68522 9.24329L12.8465 4.08205H9.95109C9.6185 4.08205 9.34889 3.81244 9.34889 3.47985Z"
                fill="#191B1F"
              />
            </svg>
          </button>
          {/* Message icon */}
          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.4521 15.8249V14.6205H3.24771C2.91512 14.6205 2.64551 14.3509 2.64551 14.0183C2.64551 13.6857 2.91512 13.4161 3.24771 13.4161H4.4521V12.2117C4.4521 11.8791 4.72171 11.6095 5.0543 11.6095C5.38688 11.6095 5.6565 11.8791 5.6565 12.2117V13.4161H6.86089C7.19348 13.4161 7.46309 13.6857 7.46309 14.0183C7.46309 14.3509 7.19348 14.6205 6.86089 14.6205H5.6565V15.8249C5.6565 16.1575 5.38688 16.4271 5.0543 16.4271C4.72171 16.4271 4.4521 16.1575 4.4521 15.8249ZM13.7862 11.844V4.81833C13.7862 4.41183 13.4564 4.08205 13.0499 4.08205H4.68655C4.28006 4.08205 3.95027 4.41184 3.95027 4.81833V10.6059C3.95027 10.9384 3.68066 11.2081 3.34807 11.2081C3.01549 11.2081 2.74587 10.9384 2.74587 10.6059V4.81833C2.74587 3.74667 3.61489 2.87766 4.68655 2.87766H13.0499C14.1216 2.87766 14.9906 3.74668 14.9906 4.81833V11.844C14.9904 12.9155 14.1215 13.7839 13.0499 13.7839H11.1272C11.1195 13.7839 11.1116 13.7852 11.1045 13.7878L11.0841 13.7995L9.68056 14.9624C9.42445 15.1746 9.04433 15.1393 8.83215 14.8832C8.62014 14.6271 8.65619 14.2477 8.91213 14.0356L10.3157 12.8719L10.4043 12.8053C10.6161 12.6589 10.8683 12.5795 11.1272 12.5795H13.0499C13.4563 12.5795 13.786 12.2504 13.7862 11.844ZM11.0426 9.06665C11.3751 9.06665 11.6446 9.33638 11.6448 9.66885C11.6448 10.0014 11.3751 10.271 11.0426 10.271H6.69388C6.36129 10.271 6.09168 10.0014 6.09168 9.66885C6.09182 9.33638 6.36138 9.06665 6.69388 9.06665H11.0426ZM11.0426 6.39048C11.3751 6.39048 11.6448 6.66009 11.6448 6.99267C11.6448 7.32526 11.3751 7.59487 11.0426 7.59487H6.69388C6.36129 7.59487 6.09168 7.32526 6.09168 6.99267C6.09168 6.66009 6.36129 6.39048 6.69388 6.39048H11.0426Z"
                fill="#191B1F"
              />
            </svg>
          </button>
          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.67931 3.72316C3.91448 3.48799 4.29577 3.48799 4.53095 3.72316L8.95617 8.14838L13.3814 3.72316C13.6166 3.48799 13.9978 3.48799 14.233 3.72316C14.4682 3.95834 14.4682 4.33963 14.233 4.5748L9.8078 9.00002L14.233 13.4252C14.4682 13.6604 14.4682 14.0417 14.233 14.2769C13.9978 14.512 13.6166 14.512 13.3814 14.2769L8.95617 9.85166L4.53095 14.2769C4.29577 14.512 3.91448 14.512 3.67931 14.2769C3.44414 14.0417 3.44414 13.6604 3.67931 13.4252L8.10453 9.00002L3.67931 4.5748C3.44414 4.33963 3.44414 3.95834 3.67931 3.72316Z"
                fill="#191B1F"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Chat Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Empty state - you can add messages here later */}
        <div className="flex items-center justify-center h-full">
          {/* <div className="text-center text-gray-500">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
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
            <p className="text-sm">Start a conversation with AI helper</p>
          </div> */}
        </div>
      </div>

      {/* Input Area */}
      <div className="px-3 pb-3">
        <div className="bg-white rounded-xl p-3 border border-gray-200">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              {/* Message input */}
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="What do you need help with?"
                className="flex-1 pb-5 bg-white border-0 w-full text-sm"
              />
            </div>
            {/* Attachment button */}
            <div className="flex justify-between">
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.90007 4.66667C5.90007 2.77049 7.43723 1.23334 9.3334 1.23334C11.2296 1.23334 12.7667 2.77049 12.7667 4.66667V10.1667C12.7667 12.7072 10.7072 14.7667 8.16673 14.7667H7.8334C5.29289 14.7667 3.2334 12.7072 3.2334 10.1667V7.16667C3.2334 6.8353 3.50203 6.56667 3.8334 6.56667C4.16477 6.56667 4.4334 6.8353 4.4334 7.16667V10.1667C4.4334 12.0444 5.95563 13.5667 7.8334 13.5667H8.16673C10.0445 13.5667 11.5667 12.0444 11.5667 10.1667V4.66667C11.5667 3.43324 10.5668 2.43334 9.3334 2.43334C8.09997 2.43334 7.10006 3.43324 7.10006 4.66667V9.91667C7.10006 10.3677 7.4657 10.7333 7.91673 10.7333C8.36776 10.7333 8.7334 10.3677 8.7334 9.91667V5.16667C8.7334 4.8353 9.00203 4.56667 9.3334 4.56667C9.66477 4.56667 9.9334 4.8353 9.9334 5.16667V9.91667C9.9334 11.0304 9.0305 11.9333 7.91673 11.9333C6.80296 11.9333 5.90007 11.0304 5.90007 9.91667V4.66667Z"
                      fill="#191B1F"
                    />
                  </svg>
                </button>

                {/* Microphone button */}
                <button
                  type="button"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00049 2.43334C6.76708 2.43334 5.76718 3.43323 5.76718 4.66667V7.66667C5.76718 8.9001 6.76708 9.9 8.00049 9.9C9.23392 9.9 10.2338 8.9001 10.2338 7.66667V4.66667C10.2338 3.43324 9.23392 2.43334 8.00049 2.43334ZM4.56718 4.66667C4.56718 2.7705 6.10433 1.23334 8.00049 1.23334C9.89666 1.23334 11.4338 2.77049 11.4338 4.66667V7.66667C11.4338 9.56284 9.89666 11.1 8.00049 11.1C6.10433 11.1 4.56718 9.56284 4.56718 7.66667V4.66667ZM3.17634 9.11686C3.47999 8.98419 3.8337 9.1228 3.96637 9.42645C4.64589 10.9817 6.19717 12.0667 8.00049 12.0667C9.80386 12.0667 11.3551 10.9817 12.0347 9.42644C12.1674 9.12279 12.5211 8.98419 12.8247 9.11686C13.1284 9.24954 13.267 9.60325 13.1343 9.9069C12.3469 11.7091 10.6373 13.018 8.60049 13.2349V14.1667C8.60049 14.498 8.33186 14.7667 8.00049 14.7667C7.66912 14.7667 7.40049 14.498 7.40049 14.1667V13.2349C5.3637 13.018 3.65414 11.7091 2.86674 9.90689C2.73408 9.60324 2.87269 9.24953 3.17634 9.11686Z"
                      fill="#191B1F"
                    />
                  </svg>
                </button>
              </div>

              {/* Send button */}
              <button
                type="submit"
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.5758 2.07576C7.81012 1.84145 8.19001 1.84145 8.42433 2.07576L12.591 6.24243C12.8253 6.47674 12.8253 6.85664 12.591 7.09096C12.3567 7.32527 11.9768 7.32527 11.7425 7.09096L8.60006 3.94855V13.5C8.60006 13.8314 8.33144 14.1 8.00006 14.1C7.66869 14.1 7.40006 13.8314 7.40006 13.5V3.94855L4.25766 7.09096C4.02335 7.32527 3.64345 7.32527 3.40913 7.09096C3.17482 6.85664 3.17482 6.47674 3.40913 6.24243L7.5758 2.07576Z"
                    fill="#191B1F"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AIHelperChat;
