import React from 'react';

// Avatar image from Figma
const imgAvatar =
  'https://www.figma.com/api/mcp/asset/b8a87b00-91fc-4137-9279-ab907365dab9';
// Arrow up icon from Figma
const imgArrowUp =
  'https://www.figma.com/api/mcp/asset/c77221a2-b6de-49f4-ba15-b67f7e4a8270';

interface StartPostProps {
  className?: string;
}

const StartPost: React.FC<StartPostProps> = ({ className }) => {
  return (
    <div
      className={`flex flex-col gap-3 items-start justify-center relative rounded-2xl shadow-sm w-full ${className}`}
    >
      <div className="bg-white border border-gray-200 flex flex-col gap-3 items-start justify-center px-6 py-5 relative rounded-2xl w-full">
        <div className="flex gap-4 items-center w-full">
          <div className="relative w-6 h-6" data-name="Avatar">
            <img
              alt=""
              className="w-full h-full rounded-full object-cover"
              src={imgAvatar}
            />
          </div>
          <p className="flex-1 font-normal leading-6 text-gray-500 text-base">
            What's on your mind?
          </p>
          <div className="bg-white border border-gray-200 flex items-center justify-center p-2 rounded-xl w-8 h-8">
            <div className="w-4 h-4">
              <img alt="" className="w-full h-full" src={imgArrowUp} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPost;
