import React, { useState } from 'react';
import ContentContainer from '../ContentContainer';
import { Button } from '../ui';

interface Redirect {
  id: string;
  oldUrl: string;
  newUrl: string;
}

interface RedirectsProps {
  onToggleSidebar: () => void;
}

const Redirects: React.FC<RedirectsProps> = ({ onToggleSidebar }) => {
  const [redirects, setRedirects] = useState<Redirect[]>([]);
  const [oldUrl, setOldUrl] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [newUrlError, setNewUrlError] = useState('');

  const handleAddRedirect = () => {
    if (!newUrl.trim()) {
      setNewUrlError('Please enter a to URL');
      return;
    }

    if (!oldUrl.trim()) {
      return;
    }

    const newRedirect: Redirect = {
      id: Date.now().toString(),
      oldUrl,
      newUrl,
    };

    setRedirects([...redirects, newRedirect]);
    setOldUrl('');
    setNewUrl('');
    setNewUrlError('');
  };

  const handleNewUrlChange = (value: string) => {
    setNewUrl(value);
    if (value.trim()) {
      setNewUrlError('');
    }
  };

  return (
    <ContentContainer title="Redirects" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-y-auto">
        <div className="max-w-4xl mx-auto py-6 px-6">
          <div className="bg-white rounded-lg space-y-6">
            {/* Create redirect section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Create redirect
                </h3>
                <p className="text-sm text-gray-600">
                  Redirect existing URLs to new ones to maintain search engine
                  ranking.
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {/* Old URL */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Old URL
                  </label>
                  <div className="relative">
                    <select
                      value={oldUrl}
                      onChange={e => setOldUrl(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                    >
                      <option value="">Select a page</option>
                      <option value="untitled-page">Untitled page</option>
                      <option value="about">About</option>
                      <option value="contact">Contact</option>
                      <option value="home">Home</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
                </div>

                {/* Arrow */}
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                {/* New URL */}
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New URL
                  </label>
                  <input
                    type="url"
                    value={newUrl}
                    onChange={e => handleNewUrlChange(e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
                      newUrlError ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder="Enter new URL"
                  />
                  {newUrlError && (
                    <p className="text-red-500 text-sm mt-1">{newUrlError}</p>
                  )}
                </div>

                {/* Add button */}
                <div className="flex items-end">
                  <Button
                    variant="default"
                    onClick={handleAddRedirect}
                    disabled={!oldUrl.trim()}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>

            {/* Redirects list */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  {redirects.length} redirects
                </h3>
              </div>

              {redirects.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-gray-500 text-sm">No data available</div>
                </div>
              ) : (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="font-medium text-gray-900">OLD URL</div>
                      <div className="font-medium text-gray-900">NEW URL</div>
                    </div>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {redirects.map(redirect => (
                      <div key={redirect.id} className="px-4 py-3">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-gray-900">{redirect.oldUrl}</div>
                          <div className="text-gray-900">{redirect.newUrl}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Redirects;
