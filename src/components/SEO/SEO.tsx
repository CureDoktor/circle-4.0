import React, { useState } from 'react';
import ContentContainer from '../ContentContainer';
import { Button } from '../ui';

interface SEOProps {
  onToggleSidebar: () => void;
}

const SEO: React.FC<SEOProps> = ({ onToggleSidebar }) => {
  const [isIndexingEnabled, setIsIndexingEnabled] = useState(true);
  const [robotsTxt, setRobotsTxt] = useState('');
  const [googleVerificationId, setGoogleVerificationId] = useState('');
  const [canonicalUrl, setCanonicalUrl] = useState('');

  return (
    <ContentContainer title="SEO" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-y-auto">
        <div className="max-w-3xl mx-auto py-6">
          <div className="bg-white rounded-lg p-6 space-y-8">
            {/* Indexing Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Indexing</h3>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-900">
                    Let search engines index your site
                  </label>
                  <p className="text-sm text-gray-600">
                    Keep this feature on for your site to appear in search
                    results.
                  </p>
                </div>
                <button
                  onClick={() => setIsIndexingEnabled(!isIndexingEnabled)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    isIndexingEnabled ? 'bg-gray-900' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isIndexingEnabled ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  robots.txt
                </label>
                <textarea
                  value={robotsTxt}
                  onChange={e => setRobotsTxt(e.target.value)}
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-y"
                  placeholder="User-agent: *
Disallow: /admin/
Disallow: /private/"
                />
              </div>
            </div>

            {/* Google Site Verification Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Google site verification
              </h3>
              <p className="text-sm text-gray-600">
                Verify your site via Google Search Console to get access to your
                site&apos;s Google search data, and submit your sitemap for
                indexing.
              </p>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  Google site verification ID
                </label>
                <input
                  type="text"
                  value={googleVerificationId}
                  onChange={e => setGoogleVerificationId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your Google site verification ID"
                />
              </div>
            </div>

            {/* Global Canonical Tag URL Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Global canonical tag URL
              </h3>
              <p className="text-sm text-gray-600">
                Set a global URL for the site&apos;s canonical tag. This tells
                search engines which URL to index, and avoids duplicate content.
              </p>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">
                  Global canonical URL
                </label>
                <input
                  type="url"
                  value={canonicalUrl}
                  onChange={e => setCanonicalUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="https://example.com"
                />
                <p className="text-xs text-gray-500">
                  URL should match your default domain
                </p>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button variant="default">Save</Button>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default SEO;
