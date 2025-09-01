import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import { Button } from '../ui/button';
import {
  MoreHorizontal,
  Zap,
  HelpCircle,
  Bell,
  Funnel,
  MessageSquare,
  X,
  ArrowRight,
} from 'lucide-react';

interface OverviewProps {
  onToggleSidebar: () => void;
}

const Overview: React.FC<OverviewProps> = ({ onToggleSidebar }) => {
  return (
    <ContentContainer
      title="Overview"
      onToggleSidebar={onToggleSidebar}
      actions={
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <MoreHorizontal size={16} />
            More
          </Button>
          <Button size="sm" className="flex items-center gap-2">
            Create broadcast
          </Button>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-auto">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Broadcast Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Create a new broadcast
            </h2>
            <p className="text-gray-600 mb-6">
              Craft compelling emails with our intuitive editor. Engage your
              audience with personalized content and drive results with just a
              few clicks.
            </p>
            <div className="flex gap-3">
              <Button className="flex items-center gap-2">
                Create broadcast
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                Import contacts
              </Button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">
                  Create a workflow
                </h3>
              </div>
              <p className="text-gray-600 text-sm">
                Set up a workflow to automate key actions in your community.
              </p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Create a form</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Add a sign-up form to your website to capture more leads.
              </p>
            </div>
          </div>

          {/* Recently Updated Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recently updated
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { name: 'linkpersist', status: 'Draft' },
                { name: 'testt', status: 'Draft' },
                { name: 'scheduleBroadcast', status: 'Sent' },
                { name: 'fdsdf', status: 'Draft' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-4"
                >
                  <h4 className="font-medium text-gray-900 mb-1">Broadcast</h4>
                  <p className="text-sm text-gray-600 mb-2">{item.name}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'Sent'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Marketing Automations */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Popular marketing automations
              </h3>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 text-gray-600"
              >
                See all
                <ArrowRight size={14} />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <Funnel className="w-5 h-5 text-blue-600" />,
                  title: 'Email all space members',
                  description:
                    'Send important updates and announcements via email to all space members.',
                  tags: ['Bulk Action', 'Engagement'],
                  bgColor: 'bg-blue-100',
                },
                {
                  icon: <MessageSquare className="w-5 h-5 text-green-600" />,
                  title: 'Email new members',
                  description:
                    'Send a welcome email to a new member joining your community.',
                  tags: ['Automation', 'Onboarding'],
                  bgColor: 'bg-green-100',
                },
                {
                  icon: <Bell className="w-5 h-5 text-orange-600" />,
                  title: 'Email inactive members',
                  description:
                    "Send a re-engagement email to members who haven't logged in for more than 30 days.",
                  tags: ['Bulk Action', 'Engagement'],
                  bgColor: 'bg-orange-100',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  <div
                    className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Explore Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Explore resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  image: (
                    <div className="w-full h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2"></div>
                        <div className="text-xs text-gray-600">Email Hub</div>
                      </div>
                    </div>
                  ),
                  title: 'Get started with Email Hub',
                  description:
                    'Learn the basics of Email Hub and discover how to set up your email marketing workspace for success.',
                },
                {
                  image: (
                    <div className="w-full h-24 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map(i => (
                          <div
                            key={i}
                            className={`w-6 h-6 rounded-full bg-gray-${
                              i * 100
                            } border-2 border-white`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  ),
                  title: 'Import your contacts',
                  description:
                    'Upload and organize your existing contact lists to start building your audience database effectively.',
                },
                {
                  image: (
                    <div className="w-full h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg flex items-center justify-center">
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3].map(i => (
                          <div
                            key={i}
                            className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white"
                          ></div>
                        ))}
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-xs text-gray-600">+</span>
                        </div>
                      </div>
                    </div>
                  ),
                  title: 'Understanding contacts',
                  description:
                    'Understand how to organize, segment, and maintain your contact lists for targeted communications.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-gray-200 p-6"
                >
                  {item.image}
                  <h4 className="font-semibold text-gray-900 mt-4 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Checklist */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6 sticky">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">
                Email Hub launch checklist
              </h3>
              <button className="text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">4/4 steps completed</p>
            <div className="space-y-3">
              {[
                'Add your audience',
                'Create your first broadcast',
                'Create a workflow',
                'Create your first form',
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Overview;
