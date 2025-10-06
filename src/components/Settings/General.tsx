import React from 'react';
import ContentContainer from '../ContentContainer';

interface GeneralProps {
  onToggleSidebar: () => void;
}

const General: React.FC<GeneralProps> = ({ onToggleSidebar }) => {
  return (
    <ContentContainer title="General" onToggleSidebar={onToggleSidebar}>
      <div className="overflow-auto">
        <div className="max-w-3xl mx-auto py-6 px-6">
          <div className="space-y-8">
            {/* Manage general settings */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Community name
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Choose a name that personalizes your community
                  </p>
                  <input
                    type="text"
                    defaultValue="HappyTravels"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Default language
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    This will be the default language for new community members.
                  </p>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Community ID
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    Customer support may ask for your unique community ID when
                    troubleshooting
                  </p>
                  <input
                    type="text"
                    defaultValue="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Visibility section */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Visibility
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Community URL
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        defaultValue="circle.upfront.so"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <a href="#" className="text-blue-600 text-sm underline">
                        Set up your custom domain here
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-900">
                        Make this a private community
                      </label>
                      <p className="text-sm text-gray-500">
                        Your community will not be accessible to visitors.
                        Members will have to be invited by you and sign in to
                        access your community.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-900">
                        Allow visitors to sign up
                      </label>
                      <p className="text-sm text-gray-500">
                        Public communities can choose to disable sign-ups. If
                        you toggle this off, your public spaces will be visible
                        to visitors, but visitors won&apos;t be able to sign up
                        to your community.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-900">
                        Accessible on Circle&apos;s desktop app
                      </label>
                      <p className="text-sm text-gray-500">
                        If enabled, your community will be accessible to members
                        using Circle&apos;s desktop app.
                      </p>
                    </div>
                    <div className="ml-4">
                      <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Branding section */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-6">
                Branding
              </h3>

              <div className="space-y-6">
                {/* Launch branded app card */}
                <div className="bg-gray-900 rounded-lg p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-medium mb-2">
                        Launch your own branded app
                      </h4>
                      <button className="bg-white text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                        Learn more
                      </button>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-16 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-12 bg-gray-600 rounded"></div>
                      </div>
                      <div className="w-16 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                        <div className="w-8 h-12 bg-gray-600 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Brand color
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Customize your button color to match your brand.
                    </p>
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-8 h-8 rounded border border-gray-300"
                        style={{ backgroundColor: '#2567EB' }}
                      ></div>
                      <input
                        type="text"
                        defaultValue="#2567EB"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Brand color (dark mode)
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Customize your button color to match your brand in dark
                      mode.
                    </p>
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-8 h-8 rounded border border-gray-300"
                        style={{ backgroundColor: '#8583FF' }}
                      ></div>
                      <input
                        type="text"
                        defaultValue="#8583FF"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Logo
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Recommended dimensions: 240 x 60, 4:1 aspect ratio
                    </p>
                    <div className="w-full h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Circle</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">
                      Icon
                    </label>
                    <p className="text-sm text-gray-500 mb-2">
                      Recommended dimensions: 32 x 32
                    </p>
                    <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        C
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Default Open Graph Image
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    This image will be used as the default when your community
                    link is shared on social media.
                  </p>
                  <div className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                    <div className="w-24 h-16 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Image</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-1">
                    Reply-to email
                  </label>
                  <p className="text-sm text-gray-500 mb-2">
                    When a member tries to reply to a notification email, this
                    is the email they&apos;ll be writing to.
                  </p>
                  <input
                    type="email"
                    defaultValue="roberto@circle.co"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Default notifications section */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Default notifications
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Default notifications settings will apply to all new members in
                your Community. Every member will be able to modify these
                individually after they join.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Notify about new community activity
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="notification-method"
                        value="email"
                        defaultChecked
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-900">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="notification-method"
                        value="in-app"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="ml-2 text-sm text-gray-900">In-app</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default General;
