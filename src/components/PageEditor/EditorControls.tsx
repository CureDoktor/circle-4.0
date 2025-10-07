import React from 'react';

interface EditorControlsProps {
  zoom: number;
  deviceType: 'desktop' | 'tablet' | 'mobile';
  onZoomChange: (zoom: number) => void;
  onDeviceChange: (device: 'desktop' | 'tablet' | 'mobile') => void;
}

const EditorControls: React.FC<EditorControlsProps> = ({
  zoom,
  deviceType,
  onZoomChange,
  onDeviceChange,
}) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium text-gray-900">Editor</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 space-y-6">
        {/* Background */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Background
          </label>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white border border-gray-300 rounded cursor-pointer"></div>
            <span className="text-xs text-gray-500">
              To see the page background, ensure the section background opacity
              is less than 100%.
            </span>
          </div>
        </div>

        {/* Padding */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Padding
          </label>
          <div className="grid grid-cols-4 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Top</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Right</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Bottom</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Left</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Margin */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Margin
          </label>
          <div className="grid grid-cols-4 gap-2">
            <div>
              <label className="block text-xs text-gray-500 mb-1">Top</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Right</label>
              <input
                type="number"
                defaultValue={16}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Bottom</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Left</label>
              <input
                type="number"
                defaultValue={0}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="p-4 border-t border-gray-200">
        {/* Device Preview */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Device Preview
          </label>
          <div className="flex space-x-1">
            <button
              onClick={() => onDeviceChange('desktop')}
              className={`p-2 rounded-md transition-colors ${
                deviceType === 'desktop'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
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
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button
              onClick={() => onDeviceChange('tablet')}
              className={`p-2 rounded-md transition-colors ${
                deviceType === 'tablet'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button
              onClick={() => onDeviceChange('mobile')}
              className={`p-2 rounded-md transition-colors ${
                deviceType === 'mobile'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
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
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Zoom Controls */}
        <div>
          <label className="block text-sm font-medium text-gray-900 mb-2">
            Zoom
          </label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onZoomChange(zoom - 10)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
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
                  d="M20 12H4"
                />
              </svg>
            </button>
            <span className="text-sm text-gray-600 min-w-[3rem] text-center">
              {zoom}%
            </span>
            <button
              onClick={() => onZoomChange(zoom + 10)}
              className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            >
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorControls;
