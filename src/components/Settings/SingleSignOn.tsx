import React from 'react';
import ContentContainer from '../ContentContainer';

interface SingleSignOnProps {
  onToggleSidebar: () => void;
}

const SingleSignOn: React.FC<SingleSignOnProps> = ({ onToggleSidebar }) => {
  return (
    <ContentContainer title="Single sign-on" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-auto">
        <div className="max-w-3xl mx-auto py-6 px-6">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Provide Single Sign-On (SSO) for your community with an OAuth
                provider.
              </h2>
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Learn more
              </a>
            </div>

            {/* Warning banner */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <p className="text-sm text-yellow-800">
                If you plan to set up a custom domain, please do so before you
                set up your SSO Integration.
              </p>
            </div>

            {/* Enable SSO */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Enable SSO
                </label>
                <p className="text-sm text-gray-500">
                  You can disable this at any time.
                </p>
              </div>
              <div className="ml-4">
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>

            {/* Enable state param */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Enable state param
                </label>
                <p className="text-sm text-gray-500">
                  Increases security by storing state in the session, adding to
                  the authorization_url and verifying OAuth provider sends
                  correct state param back in the callback.
                </p>
              </div>
              <div className="ml-4">
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>

            {/* Allow members with Circle account */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Allow members with a Circle account to sign in
                </label>
                <p className="text-sm text-gray-500">
                  If enabled, we&apos;ll still allow members with a Circle
                  account to sign in. Only members with your SSO account will be
                  able to sign in otherwise.
                </p>
              </div>
              <div className="ml-4">
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>

            {/* Allow members to sign up via custom URL */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Allow members to sign up via a custom URL
                </label>
                <p className="text-sm text-gray-500">
                  After enabling SSO, members won&apos;t be able to sign up via
                  Circle. However, you can keep the Sign up button visible and
                  point it to a custom sign up URL.
                </p>
              </div>
              <div className="ml-4">
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>

            {/* Skip profile confirmation step */}
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Skip profile confirmation step
                </label>
                <p className="text-sm text-gray-500">
                  If enabled, members with a preset name will not need to
                  confirm their profile information when they sign in via SSO
                  for the first time.
                </p>
              </div>
              <div className="ml-4">
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>

            {/* OAuth Provider section */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                OAuth Provider
              </h3>

              {/* Callback URL */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Callback URL
                </label>
                <input
                  type="text"
                  defaultValue="https://circle.upfront.so/oauth/callback"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  readOnly
                />
              </div>

              {/* Provider Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Provider Name
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  We&apos;ll use this name as the suffix of the Continue button.
                  For example, type &quot;Facebook&quot; if you want the button
                  to say &quot;Continue with Facebook&quot;.
                </p>
                <input
                  type="text"
                  placeholder="Enter provider name..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <h4 className="text-md font-medium text-gray-900">SSO tools</h4>

              {/* Client ID */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Client ID
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  The Client ID given to you by the OAuth provider.
                </p>
                <input
                  type="text"
                  defaultValue="806be841-65db-49db-9898-d4f4743577a"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Secret Key */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Secret Key
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  The Secret Key given to you by the OAuth provider.
                </p>
                <input
                  type="text"
                  defaultValue="925JVBV2BFG2F3356585BLLPHNCBTWI"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Scope */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Scope
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  The scope given to you by the OAuth provider. We&apos;ll need
                  access to the user name and email.
                </p>
                <input
                  type="text"
                  placeholder="Enter value..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Authorization URL */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Authorization URL
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  The Authorization URL given to you by the OAuth provider.
                </p>
                <input
                  type="text"
                  defaultValue="https://ldp.sso.tools/shailesh/oauth2/authorize"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Token Fetch URL */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Token Fetch URL
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  The Token Fetch URL given to you by the OAuth provider.
                </p>
                <input
                  type="text"
                  defaultValue="https://ldp.sso.tools/shailesh/oauth2/token"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Profile info API URL */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Profile info API URL
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  An API URL for Circle to fetch user profile information such
                  as email, name, and profile picture after authentication (e.g.
                  https://my-oauth.com/api/v1/me).
                </p>
                <input
                  type="text"
                  defaultValue="https://ldp.sso.tools/shailesh/api/users/me"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* User response paths */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900">
                User response paths
              </h3>

              {/* User ID response path */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  User ID response path
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Example:{' '}
                  <code className="bg-gray-100 px-1 rounded">user_id</code>
                </p>
                <input
                  type="text"
                  defaultValue="openid"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* User Email response path */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  User Email response path
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Example:{' '}
                  <code className="bg-gray-100 px-1 rounded">user_email</code>
                </p>
                <input
                  type="text"
                  defaultValue="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* User Name response path */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  User Name response path
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Example:{' '}
                  <code className="bg-gray-100 px-1 rounded">user_name</code>
                </p>
                <input
                  type="text"
                  defaultValue="profile"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Profile Image URL response path */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-1">
                  Profile Image URL response path
                </label>
                <p className="text-sm text-gray-500 mb-2">
                  Example:{' '}
                  <code className="bg-gray-100 px-1 rounded">
                    user_avatar_url
                  </code>
                </p>
                <input
                  type="text"
                  placeholder="Enter response path..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Save button */}
            <div className="flex justify-end">
              <button className="bg-gray-900 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition-colors">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default SingleSignOn;
