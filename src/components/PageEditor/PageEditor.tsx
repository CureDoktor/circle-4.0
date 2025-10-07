import React, { useState } from 'react';
import TemplateLibrary from './TemplateLibrary';
import PagePreview from './PagePreview';
import './PageEditor.css';

interface PageEditorProps {
  onToggleSidebar: () => void;
  onBackToList?: () => void;
  selectedPageId?: string | null;
}

const PageEditor: React.FC<PageEditorProps> = ({
  onBackToList,
  selectedPageId,
}) => {
  const [showTemplateLibrary, setShowTemplateLibrary] = useState(false);
  const [currentTemplate, setCurrentTemplate] = useState<string | null>(
    selectedPageId || 'homepage'
  );

  // Debug currentTemplate changes
  React.useEffect(() => {
    console.log('currentTemplate changed to:', currentTemplate);
  }, [currentTemplate]);
  const [zoom, setZoom] = useState(100);
  const [deviceType, setDeviceType] = useState<'desktop' | 'tablet' | 'mobile'>(
    'desktop'
  );

  const handleCreatePage = () => {
    console.log('Create Page clicked, opening template library');
    setShowTemplateLibrary(true);
  };

  const handleTemplateSelect = (templateId: string) => {
    console.log('Template selected:', templateId);
    setCurrentTemplate(templateId);
    setShowTemplateLibrary(false);
    console.log('Modal closed, template set to:', templateId);
  };

  const handleBack = () => {
    if (onBackToList) {
      onBackToList();
    } else {
      setCurrentTemplate(null);
    }
  };

  const handleZoomChange = (newZoom: number) => {
    setZoom(Math.max(25, Math.min(200, newZoom)));
  };

  const handleDeviceChange = (device: 'desktop' | 'tablet' | 'mobile') => {
    setDeviceType(device);
  };

  return (
    <div
      className="h-screen overflow-hidden bg-gray-100 flex flex-col p-4"
      style={{
        animation: 'slideInFromBottom 700ms ease-out, fadeIn 700ms ease-out',
        animationFillMode: 'both',
      }}
    >
      {/* Top Header with Navigation */}
      <div className="flex items-center justify-between bg-gray-100 pb-4">
        {/* Left: Back button and breadcrumb */}
        <div className="flex items-center space-x-4">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Home page</span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Right: Editor controls and action buttons */}
        <div className="flex items-center space-x-4 rounded-xl">
          {/* Editor Icons */}
          <div className="flex items-center space-x-3">
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6"
                />
              </svg>
            </button>
            <div className="p-2">
              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 text-sm text-black bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Save draft
            </button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
              Publish page
            </button>
          </div>
        </div>
      </div>

      {/* Main Editor Area */}
      <div className="flex-1 flex bg-gray-50 overflow-hidden">
        {/* Left Toolbar */}
        <div className="w-16 bg-white border border-gray-200  rounded-xl flex flex-col items-center py-4 space-y-4 overflow-y-hidden">
          <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
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
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button className="p-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
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
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
          <button className="p-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
          <button className="p-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
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
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
              />
            </svg>
          </button>
          <button className="p-3 text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>

        {/* Center Editor */}
        <div className="flex-1 flex flex-col overflow-auto">
          {!currentTemplate ? (
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No page selected
                </h3>
                <p className="text-gray-500 mb-4">
                  Select a page from the list to start editing
                </p>
                <button
                  onClick={handleCreatePage}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Create Page
                </button>
              </div>
            </div>
          ) : (
            <PagePreview
              templateId={currentTemplate}
              zoom={zoom}
              deviceType={deviceType}
            />
          )}
        </div>

        {/* Right Settings Panel */}
        <div className="w-80 bg-white border-l border-gray-200 overflow-y-hidden rounded-xl">
          <div className="p-4 border-b border-gray-200">
            <div className="flex space-x-1">
              <button className="px-3 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">
                Editor
              </button>
              <button className="px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                Co-pilot
              </button>
            </div>
          </div>

          <div className="p-4 space-y-6">
            {/* Background Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Background
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Color</span>
                  <div className="w-6 h-6 bg-white border border-gray-300 rounded cursor-pointer"></div>
                </div>
                <p className="text-xs text-gray-500">
                  To see the page background, ensure the section background
                  opacity is less than 100%.
                </p>
              </div>
            </div>

            {/* Padding Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Padding
              </h3>
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Top
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Right
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Bottom
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Left
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Margin Section */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Margin</h3>
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Top
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Right
                  </label>
                  <input
                    type="number"
                    defaultValue="16"
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Bottom
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Left
                  </label>
                  <input
                    type="number"
                    defaultValue="0"
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Control Bar */}
      <div className="bg-white border border-gray-200 px-4 py-2 absolute bottom-8 left-[40%] transform rounded-xl -translate-x-1/2">
        <div className="flex items-center justify-between space-x-4">
          {/* Device Preview Controls */}
          <div className="flex items-center">
            <div>
              <button
                className={`p-2 rounded-md transition-colors ${
                  deviceType === 'desktop'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleDeviceChange('desktop')}
              >
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button
                className={`p-2 rounded-md transition-colors ${
                  deviceType === 'tablet'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleDeviceChange('tablet')}
              >
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button
                className={`p-2 rounded-md transition-colors ${
                  deviceType === 'mobile'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => handleDeviceChange('mobile')}
              >
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Center: Theme Toggle */}
          <div className="flex items-center">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
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
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
          </div>

          {/* Right: Zoom Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleZoomChange(zoom - 10)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            >
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
                  d="M20 12H4"
                />
              </svg>
            </button>
            <span className="text-sm text-gray-600 min-w-[3rem] text-center">
              {zoom}%
            </span>
            <button
              onClick={() => handleZoomChange(zoom + 10)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            >
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Template Library Modal */}
      {showTemplateLibrary && (
        <TemplateLibrary
          onClose={() => setShowTemplateLibrary(false)}
          onSelectTemplate={handleTemplateSelect}
        />
      )}
    </div>
  );
};

export default PageEditor;
