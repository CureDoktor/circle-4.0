import React, { useState } from 'react';
import { templates } from './templates';
import TemplatePreview from './TemplatePreview';

interface TemplateLibraryProps {
  onClose: () => void;
  onSelectTemplate: (templateId: string) => void;
}

const TemplateLibrary: React.FC<TemplateLibraryProps> = ({
  onClose,
  onSelectTemplate,
}) => {
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  const handleTemplateHover = (templateId: string) => {
    setHoveredTemplate(templateId);
  };

  const handleTemplateLeave = () => {
    setHoveredTemplate(null);
  };

  const handleTemplateSelect = (templateId: string) => {
    onSelectTemplate(templateId);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      style={{
        animation: 'fadeIn 300ms ease-out',
        animationFillMode: 'both',
      }}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden"
        style={{
          animation: 'zoomIn 500ms ease-out',
          animationFillMode: 'both',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Template library</h2>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Start from scratch
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900">All templates</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {templates.map(template => (
              <div
                key={template.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => handleTemplateHover(template.id)}
                onMouseLeave={handleTemplateLeave}
                onClick={() => handleTemplateSelect(template.id)}
              >
                <div
                  className={`border-2 rounded-lg overflow-hidden transition-all duration-300 ${
                    hoveredTemplate === template.id
                      ? 'border-blue-500 shadow-xl scale-105'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                  }`}
                >
                  <div className="aspect-[4/3] bg-white relative">
                    {/* Template Preview */}
                    <div className="absolute inset-0 bg-white rounded overflow-hidden">
                      <TemplatePreview templateId={template.id} />
                    </div>
                  </div>
                </div>

                {/* Hover Actions */}
                {hoveredTemplate === template.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          handleTemplateSelect(template.id);
                        }}
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Apply
                      </button>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          // Handle preview
                        }}
                        className="px-4 py-2 bg-white text-blue-600 text-sm rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        Preview
                      </button>
                    </div>
                  </div>
                )}

                {/* Template Info */}
                <div className="mt-3 text-center">
                  <div className="text-sm font-medium text-gray-900">
                    {template.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateLibrary;
