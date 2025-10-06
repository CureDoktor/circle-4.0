import React, { useState } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import Collapse from '../ui/collapse';
import Button from '../Button/Button';

interface CodeSnippetsProps {
  onToggleSidebar: () => void;
}

const CodeSnippets: React.FC<CodeSnippetsProps> = ({ onToggleSidebar }) => {
  const [headSnippets, setHeadSnippets] = useState(`<style>
@media (max-width: 768px) {
  .view-homepage #standard-layout-v2-cover-image-container img {
    object-fit: contain;
  }
}
</style>`);
  const [javascriptSnippets, setJavascriptSnippets] = useState(
    'Insert your code here...'
  );

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving code snippets...');
  };

  return (
    <ContentContainer title="Code Snippets" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-y-auto">
        <div className="max-w-4xl mx-auto py-6 px-6">
          <div className="bg-white rounded-lg space-y-6">
            <Collapse title="Code Snippets" defaultOpen={true}>
              <div className="space-y-6">
                {/* Warning Box */}
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-orange-700">
                        <strong>Warning!</strong> We recommend restricting code
                        snippets to lightweight CSS customizations, custom meta
                        tags, and analytics tracking snippets. Unfortunately, we
                        do not offer customer support for customizations of any
                        kind, and we don&apos;t recommend making advanced
                        customizations. Any errors in your code snippets or
                        updates we make to our HTML/CSS markup may result in
                        your community being non-functional. Please tread with
                        caution!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Head Code Snippets Section */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Head code snippets
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      This snippet will be added right before the{' '}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                        &lt;/head&gt;
                      </code>{' '}
                      closing tag. Ideal for custom CSS and meta tags.
                    </p>
                  </div>

                  <div>
                    <textarea
                      value={headSnippets}
                      onChange={e => setHeadSnippets(e.target.value)}
                      className="w-full h-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm bg-gray-50 resize-y"
                      placeholder="Enter your head code snippets here..."
                    />
                  </div>
                </div>

                {/* JavaScript Code Snippets Section */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      JavaScript code snippets
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      This JavaScript snippet will be executed inside a safe{' '}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                        &lt;script&gt;
                      </code>{' '}
                      block. Ideal for custom analytics tracking snippets.
                      Please ensure you exclude the{' '}
                      <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
                        &lt;script&gt;
                      </code>{' '}
                      wrapper.
                    </p>
                  </div>

                  <div>
                    <textarea
                      value={javascriptSnippets}
                      onChange={e => setJavascriptSnippets(e.target.value)}
                      className="w-full h-40 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm bg-gray-50 resize-y"
                      placeholder="Enter your JavaScript code snippets here..."
                    />
                  </div>
                </div>

                {/* Save button */}
                <div className="flex justify-end pt-6 border-t border-gray-200">
                  <Button variant="primary" onClick={handleSave}>
                    Save changes
                  </Button>
                </div>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default CodeSnippets;
