import React, { useState } from 'react';

interface TabType {
  id: string;
  label: string;
}

interface OnboardingProps {
  onToggleSidebar?: () => void;
}

interface ToggleSection {
  id: string;
  title: string;
  description: string;
  isEnabled: boolean;
}

const Onboarding: React.FC<OnboardingProps> = ({ onToggleSidebar }) => {
  const [activeTab, setActiveTab] = useState('customize');
  const [toggleStates, setToggleStates] = useState({
    newUserInvitation: true,
    existingUserInvitation: true,
    onboardingPopup: true,
    onboardingEmail: true,
  });

  // Access tab states
  const [accessType, setAccessType] = useState<'groups' | 'spaces'>('groups');
  const [showDropdown, setShowDropdown] = useState(false);

  // Workflows tab states
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('automations');
  const [noAccessItems, setNoAccessItems] = useState([
    {
      id: '1',
      name: 'Test Space',
      group: 'Aniket Test',
      type: 'space',
      icon: 'group',
    },
    {
      id: '2',
      name: 'jfjhgfjfg',
      group: 'Aniket Test',
      type: 'space',
      icon: 'group',
    },
    {
      id: '3',
      name: 'Posts space',
      group: 'Ivo test',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '4',
      name: 'Member space',
      group: 'Ivo test',
      type: 'space',
      icon: 'group',
    },
    {
      id: '5',
      name: "Ivo's course test",
      group: 'Ivo test',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '6',
      name: 'An event of some sort',
      group: 'Ivo test',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '7',
      name: 'Locked Screen',
      group: 'Ivo test',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '8',
      name: 'multiple payment options',
      group: 'Ivo test',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '9',
      name: 'Another',
      group: 'Ivo test',
      type: 'space',
      icon: 'group',
    },
    {
      id: '10',
      name: 'AGs - Tests - Events 01',
      group: 'AGs Tests',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '11',
      name: 'AGs - Tests - Events 03',
      group: 'AGs Tests',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '12',
      name: 'AGs - Tests - Events 04',
      group: 'AGs Tests',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '13',
      name: 'AGs - Tests - Events 05',
      group: 'AGs Tests',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '14',
      name: 'AGs - Tests - Events 06',
      group: 'AGs Tests',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '15',
      name: 'AGs - Tests - Events 08',
      group: 'AGs Tests',
      type: 'space',
      icon: 'lock',
    },
  ]);
  const [accessItems, setAccessItems] = useState([
    {
      id: '16',
      name: 'chat room',
      group: 'Ivo test',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '17',
      name: 'Image gallery',
      group: 'Ivo test',
      type: 'space',
      icon: 'lock',
    },
    {
      id: '18',
      name: 'AGs - Tests - Events 02',
      group: 'AGs Tests',
      type: 'space',
      icon: 'lock',
    },
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const tabs: TabType[] = [
    { id: 'customize', label: 'Customize' },
    { id: 'access', label: 'Access' },
    { id: 'workflows', label: 'Workflows' },
  ];

  const toggleSections: ToggleSection[] = [
    {
      id: 'newUserInvitation',
      title:
        "Customize invitation for emails that don't already have a Circle account",
      description:
        "Personalize the invitation email sent to someone if they haven't signed up to a Circle community before.",
      isEnabled: toggleStates.newUserInvitation,
    },
    {
      id: 'existingUserInvitation',
      title:
        'Customize invitation for emails that already have a Circle account',
      description:
        "Personalize the invitation email sent to someone if they've already signed up to a Circle community before.",
      isEnabled: toggleStates.existingUserInvitation,
    },
    {
      id: 'onboardingPopup',
      title: 'Show an onboarding popup after account sign up',
      description:
        'Present new members with an onboarding popup after they finish account creation.',
      isEnabled: toggleStates.onboardingPopup,
    },
    {
      id: 'onboardingEmail',
      title: 'Send an onboarding email after account sign up',
      description:
        'Email new members with a customized welcome after they finish account creation.',
      isEnabled: toggleStates.onboardingEmail,
    },
  ];

  const handleToggleChange = (sectionId: string) => {
    setToggleStates(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId as keyof typeof prev],
    }));
  };

  // Access tab handlers
  const handleMoveItem = (itemId: string, fromNoAccess: boolean) => {
    if (fromNoAccess) {
      const item = noAccessItems.find(item => item.id === itemId);
      if (item) {
        setNoAccessItems(prev => prev.filter(item => item.id !== itemId));
        setAccessItems(prev => [...prev, item]);
      }
    } else {
      const item = accessItems.find(item => item.id === itemId);
      if (item) {
        setAccessItems(prev => prev.filter(item => item.id !== itemId));
        setNoAccessItems(prev => [...prev, item]);
      }
    }
  };

  const handleAddAll = () => {
    setAccessItems(prev => [...prev, ...noAccessItems]);
    setNoAccessItems([]);
  };

  const handleRemoveAll = () => {
    setNoAccessItems(prev => [...prev, ...accessItems]);
    setAccessItems([]);
  };

  const renderToggleButton = (isEnabled: boolean, onChange: () => void) => (
    <button
      onClick={onChange}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        isEnabled ? 'bg-blue-600' : 'bg-gray-200'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isEnabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  );

  const renderNewUserInvitationForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Subject Line
        </label>
        <input
          type="text"
          defaultValue="{Invited_by_name} has Invited you to join the HappyTravels community on Circle"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Body Content
        </label>
        <div className="relative">
          <textarea
            rows={8}
            defaultValue={`Hey {first_name},

{Invited_by_name} ({Invited_by_email}) has invited you to join the {community_name} community on Circle.

Click here to accept your Invitation:

Accept Invitation

If you think you've received this invitation in error, please ignore this email.`}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
          <div className="absolute bottom-2 left-2 flex space-x-2">
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
          Variables
        </button>
      </div>
    </div>
  );

  const renderExistingUserInvitationForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Subject Line
        </label>
        <input
          type="text"
          defaultValue="{Invited_by_name} has added you to the HappyTravels community on Circle"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Body Content
        </label>
        <div className="relative">
          <textarea
            rows={6}
            placeholder="Existing member email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
          <div className="absolute bottom-2 left-2 flex space-x-2">
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
          Variables
        </button>
      </div>
    </div>
  );

  const renderOnboardingPopupForm = () => (
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="relative">
            <textarea
              rows={4}
              defaultValue={`Hey, {first_name}!

Please remember, the content of this community is XXX`}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
            <div className="absolute bottom-2 left-2 flex space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600">
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
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
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
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </button>
              <button className="p-1 text-gray-400 hover:text-gray-600">
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button className="ml-4 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium">
          Preview
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Button Label
        </label>
        <input
          type="text"
          defaultValue="I agree"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom button URL (e.g. &apos;https://my-community.com/go&apos;)
        </label>
        <input
          type="text"
          placeholder="https://my-community.com/go"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  const renderOnboardingEmailForm = () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Subject Line
        </label>
        <input
          type="text"
          defaultValue="Welcome to {community_name}"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email Body Content
        </label>
        <div className="relative">
          <textarea
            rows={8}
            defaultValue={`Hey {first_name},

Welcome to {community_name}! Have a look around our spaces — and when you&apos;re ready, start contributing with posts and comments.

123456789

Enjoy!`}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
          <div className="absolute bottom-2 left-2 flex space-x-2">
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
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
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom button label (e.g. &apos;Let&apos;s go&apos;)
        </label>
        <input
          type="text"
          placeholder="Let's go"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom button URL (e.g. &apos;https://my-community.com/go&apos;)
        </label>
        <input
          type="text"
          placeholder="https://my-community.com/go"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );

  const renderCustomizeContent = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Customize</h2>
        </div>
      </div>

      {toggleSections.map(section => (
        <div key={section.id} className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-gray-600">{section.description}</p>
            </div>
            <div className="ml-4 flex items-center">
              <svg
                className="w-5 h-5 text-gray-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {renderToggleButton(section.isEnabled, () =>
                handleToggleChange(section.id)
              )}
            </div>
          </div>

          {section.isEnabled && (
            <div className="mt-6">
              {section.id === 'newUserInvitation' &&
                renderNewUserInvitationForm()}
              {section.id === 'existingUserInvitation' &&
                renderExistingUserInvitationForm()}
              {section.id === 'onboardingPopup' && renderOnboardingPopupForm()}
              {section.id === 'onboardingEmail' && renderOnboardingEmailForm()}
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-end">
        <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 font-medium">
          Save changes
        </button>
      </div>
    </div>
  );

  const renderAccessContent = () => {
    const accessGroups = [
      {
        id: '1',
        name: 'Julian access group test',
        status: 'Connected',
        members: 134,
        spaces: 7,
      },
      {
        id: '2',
        name: 'Mobile peeps',
        status: 'Connected',
        members: 45,
        spaces: 3,
      },
      {
        id: '3',
        name: 'Cohort 1',
        status: 'Connected',
        members: 89,
        spaces: 5,
      },
      {
        id: '4',
        name: 'Testing Access Changes',
        status: 'Connected',
        members: 12,
        spaces: 2,
      },
      { id: '5', name: 'Test 2', status: 'Connected', members: 23, spaces: 1 },
    ];

    const removedAccessGroups = [
      {
        id: '6',
        name: 'Design team',
        status: 'Removed',
        members: 7,
        spaces: 1,
      },
      { id: '7', name: 'hola', status: 'Removed', members: 8, spaces: 0 },
      { id: '8', name: 'Test group', status: 'Removed', members: 0, spaces: 1 },
    ];

    const filteredNoAccessItems = noAccessItems.filter(
      item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredAccessItems = accessItems.filter(
      item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const groupedNoAccessItems = filteredNoAccessItems.reduce((acc, item) => {
      if (!acc[item.group]) {
        acc[item.group] = [];
      }
      acc[item.group].push(item);
      return acc;
    }, {} as Record<string, typeof noAccessItems>);

    const groupedAccessItems = filteredAccessItems.reduce((acc, item) => {
      if (!acc[item.group]) {
        acc[item.group] = [];
      }
      acc[item.group].push(item);
      return acc;
    }, {} as Record<string, typeof accessItems>);

    return (
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Onboarding access
          </h2>
          <p className="text-gray-600 mt-2">
            Grant complimentary access to all new members, regardless of how
            they join your community.
          </p>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2">
            Learn more
          </button>
        </div>

        {accessType === 'groups' ? (
          <div className="space-y-6">
            {/* Access Type Selection */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setAccessType('groups')}
                className={`px-4 py-2 rounded-lg border-2 font-medium text-sm transition-colors ${
                  (accessType as string) === 'groups'
                    ? 'border-gray-300 bg-white text-gray-900'
                    : 'border-gray-200 bg-gray-50 text-gray-500'
                }`}
              >
                Access groups
                <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                  NEW
                </span>
                {(accessType as string) === 'groups' && (
                  <svg
                    className="w-4 h-4 ml-2 inline"
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
                )}
              </button>
              <span className="text-gray-500">OR</span>
              <button
                onClick={() => setAccessType('spaces')}
                className={`px-4 py-2 rounded-lg border-2 font-medium text-sm transition-colors ${
                  (accessType as string) === 'spaces'
                    ? 'border-gray-300 bg-white text-gray-900'
                    : 'border-gray-200 bg-gray-50 text-gray-500'
                }`}
              >
                Space access
                {(accessType as string) === 'spaces' && (
                  <svg
                    className="w-4 h-4 ml-2 inline"
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
                )}
              </button>
            </div>

            {/* Access Group Selection */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select an access group
              </label>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-left bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <span className="text-gray-500">Select an access group</span>
                <svg
                  className="w-4 h-4 float-right mt-1"
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
              </button>

              {showDropdown && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  {accessGroups.map(group => (
                    <button
                      key={group.id}
                      onClick={() => {
                        setShowDropdown(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{group.name}</span>
                        <span className="text-sm text-gray-500">
                          {group.members} members • {group.spaces} spaces
                        </span>
                      </div>
                    </button>
                  ))}
                  <button className="w-full px-3 py-2 text-left hover:bg-gray-50 text-blue-600 font-medium">
                    <svg
                      className="w-4 h-4 inline mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                    Create new access group
                  </button>
                </div>
              )}
            </div>

            {/* Access Groups List */}
            <div className="space-y-4">
              {accessGroups.map(group => (
                <div
                  key={group.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">{group.name}</span>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                        {group.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {group.members} members • {group.spaces} spaces
                    </p>
                  </div>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              ))}

              {/* Removed Access Groups */}
              {removedAccessGroups.map(group => (
                <div
                  key={group.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium">{group.name}</span>
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                        {group.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      {group.members} members • {group.spaces} spaces
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-400 hover:text-gray-600">
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <button className="p-1 text-gray-400 hover:text-gray-600">
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
                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Access Type Selection */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setAccessType('groups')}
                className={`px-4 py-2 rounded-lg border-2 font-medium text-sm transition-colors ${
                  (accessType as string) === 'groups'
                    ? 'border-gray-300 bg-white text-gray-900'
                    : 'border-gray-200 bg-gray-50 text-gray-500'
                }`}
              >
                Access groups
                <span className="ml-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded">
                  NEW
                </span>
                {(accessType as string) === 'groups' && (
                  <svg
                    className="w-4 h-4 ml-2 inline"
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
                )}
              </button>
              <span className="text-gray-500">OR</span>
              <button
                onClick={() => setAccessType('spaces')}
                className={`px-4 py-2 rounded-lg border-2 font-medium text-sm transition-colors ${
                  (accessType as string) === 'spaces'
                    ? 'border-gray-300 bg-white text-gray-900'
                    : 'border-gray-200 bg-gray-50 text-gray-500'
                }`}
              >
                Space access
                {(accessType as string) === 'spaces' && (
                  <svg
                    className="w-4 h-4 ml-2 inline"
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
                )}
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg
                className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-2 gap-6">
              {/* NO ACCESS Column */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    NO ACCESS
                  </h3>
                  <button
                    onClick={handleAddAll}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Add all
                  </button>
                </div>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {Object.entries(groupedNoAccessItems).map(
                    ([groupName, items]) => (
                      <div key={groupName} className="space-y-2">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {groupName}
                        </h4>
                        {items.map(item => (
                          <div
                            key={item.id}
                            onClick={() => handleMoveItem(item.id, true)}
                            className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                          >
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {item.icon === 'group' ? (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                />
                              ) : (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              )}
                            </svg>
                            <span className="text-sm text-gray-700">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* ACCESS Column */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    ACCESS
                  </h3>
                  <button
                    onClick={handleRemoveAll}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Remove all
                  </button>
                </div>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {Object.entries(groupedAccessItems).map(
                    ([groupName, items]) => (
                      <div key={groupName} className="space-y-2">
                        <h4 className="font-medium text-gray-900 text-sm">
                          {groupName} ({items.length} spaces)
                        </h4>
                        {items.map(item => (
                          <div
                            key={item.id}
                            onClick={() => handleMoveItem(item.id, false)}
                            className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded cursor-pointer"
                          >
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              {item.icon === 'group' ? (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                                />
                              ) : (
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                              )}
                            </svg>
                            <span className="text-sm text-gray-700">
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderWorkflowsContent = () => {
    const workflowTabs = [
      { id: 'automations', label: 'Automations', count: 1138 },
      { id: 'bulk-actions', label: 'Bulk actions', count: 733 },
      { id: 'scheduled', label: 'Scheduled', count: 143 },
      { id: 'archived', label: 'Archived', count: 46 },
    ];

    const mockWorkflows = {
      automations: [
        {
          id: '1',
          name: 'Automation Aug 22, 2025 at 08:10 PM',
          createdBy: { name: 'Andy', avatar: 'A', color: 'bg-blue-500' },
          totalRuns: 0,
          active: false,
        },
        {
          id: '2',
          name: 'Automation Aug 21, 2025 at 01:15 PM',
          createdBy: { name: 'Will', avatar: 'W', color: 'bg-green-500' },
          totalRuns: 0,
          active: false,
        },
        {
          id: '3',
          name: 'Automation Aug 21, 2025 at 04:33 PM',
          createdBy: { name: 'Trisha', avatar: 'TD', color: 'bg-teal-500' },
          totalRuns: 1,
          active: true,
        },
        {
          id: '4',
          name: 'Course test',
          createdBy: { name: 'Trisha', avatar: 'TD', color: 'bg-teal-500' },
          totalRuns: 1,
          active: true,
        },
        {
          id: '5',
          name: 'Automation Aug 20, 2025 at 09:19 PM',
          createdBy: { name: 'Pedro', avatar: 'PH', color: 'bg-olive-500' },
          totalRuns: 0,
          active: false,
        },
      ],
      'bulk-actions': [
        {
          id: '1',
          name: 'Bulk action Aug 19, 2025 at 02:34 PM',
          status: 'Draft',
          createdBy: { name: 'Pedro', avatar: 'PH', color: 'bg-green-500' },
        },
        {
          id: '2',
          name: 'Bulk action Aug 19, 2025 at 02:09 PM',
          status: 'Draft',
          createdBy: { name: 'Pedro', avatar: 'PH', color: 'bg-green-500' },
        },
        {
          id: '3',
          name: 'Bulk action Aug 18, 2025 at 01:06 PM',
          status: 'Draft',
          createdBy: { name: 'Mehmet', avatar: 'MI', color: 'bg-red-700' },
        },
        {
          id: '4',
          name: 'Bulk action Aug 14, 2025 at 05:10 PM',
          status: 'Draft',
          createdBy: { name: 'Pedro', avatar: 'PH', color: 'bg-green-500' },
        },
        {
          id: '5',
          name: 'Email to all members of a space',
          status: 'Draft',
          createdBy: {
            name: 'Ridhwana',
            avatar: 'R',
            color: 'bg-dark-green-500',
          },
        },
      ],
      scheduled: [
        {
          id: '1',
          name: 'Scheduled bulk action Aug 22, 2025 at 04:31 PM',
          type: '',
          createdBy: { name: 'Pedro', avatar: 'PH', color: 'bg-green-700' },
        },
        {
          id: '2',
          name: 'Scheduled bulk action Aug 18, 2025 at 05:39 PM',
          type: '',
          createdBy: { name: 'Andy', avatar: 'A', color: 'bg-blue-500' },
        },
        {
          id: '3',
          name: 'Scheduled bulk action after rails upgrade',
          type: 'Recurring',
          createdBy: { name: 'Akshay', avatar: 'A', color: 'bg-purple-500' },
        },
        {
          id: '4',
          name: 'Scheduled bulk action Jul 29, 2025 at 12:30 PM',
          type: '',
          createdBy: { name: 'Hector', avatar: 'HV', color: 'bg-green-500' },
        },
        {
          id: '5',
          name: 'Scheduled bulk action Jul 09, 2025 at 09:28 AM',
          type: '',
          createdBy: { name: 'Daniel', avatar: 'D', color: 'bg-blue-600' },
        },
      ],
      archived: [
        {
          id: '1',
          name: 'TECT-982 test',
          type: 'Bulk action',
          createdBy: { name: 'Agney', avatar: 'A', color: 'bg-brown-500' },
        },
        {
          id: '2',
          name: "Rene's scheduled",
          type: 'Scheduled',
          createdBy: { name: 'Rene', avatar: 'RR', color: 'bg-pink-700' },
        },
        {
          id: '3',
          name: 'Kelsey - Live',
          type: 'Scheduled',
          createdBy: { name: 'Kelsey', avatar: 'K', color: 'bg-blue-400' },
        },
        {
          id: '4',
          name: 'Untitled workflow',
          type: 'Scheduled',
          createdBy: { name: 'Naseef', avatar: 'N', color: 'bg-blue-300' },
        },
        {
          id: '5',
          name: 'Untitled workflow',
          type: 'Bulk action',
          createdBy: { name: 'Mrinmoy', avatar: 'M', color: 'bg-green-500' },
        },
      ],
    };

    const currentWorkflows =
      mockWorkflows[activeWorkflowTab as keyof typeof mockWorkflows] || [];
    const currentTab = workflowTabs.find(tab => tab.id === activeWorkflowTab);

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Workflows</h2>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 font-medium">
            New workflow
          </button>
        </div>

        {/* Workflow Sub-tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            {workflowTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveWorkflowTab(tab.id)}
                className={`py-2 font-medium text-sm transition-colors border-b-2 ${
                  activeWorkflowTab === tab.id
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label} {tab.count.toLocaleString()}
              </button>
            ))}
          </div>
        </div>

        {/* Workflow Count */}
        <div className="text-lg font-semibold text-gray-900">
          {currentTab?.count.toLocaleString()} workflows
        </div>

        {/* Workflows Table */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-4">NAME</div>
              {activeWorkflowTab === 'automations' && (
                <>
                  <div className="col-span-3">CREATED BY</div>
                  <div className="col-span-3 text-right">TOTAL RUNS</div>
                  <div className="col-span-2 text-right">ACTIVE</div>
                </>
              )}
              {(activeWorkflowTab === 'bulk-actions' ||
                activeWorkflowTab === 'scheduled' ||
                activeWorkflowTab === 'archived') && (
                <>
                  <div className="col-span-4">STATUS</div>
                  <div className="col-span-4">CREATED BY</div>
                </>
              )}
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {currentWorkflows.map(workflow => (
              <div key={workflow.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-4">
                    <div className="text-sm font-medium text-gray-900">
                      {workflow.name}
                    </div>
                  </div>

                  {activeWorkflowTab === 'automations' && (
                    <>
                      <div className="col-span-3">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-8 h-8 rounded-full ${workflow.createdBy.color} flex items-center justify-center text-white text-xs font-medium`}
                          >
                            {workflow.createdBy.avatar}
                          </div>
                          <span className="text-sm text-gray-700">
                            {workflow.createdBy.name}
                          </span>
                        </div>
                      </div>
                      <div className="col-span-3 text-right">
                        <span className="text-sm text-gray-700">
                          {(workflow as any).totalRuns}
                        </span>
                      </div>
                      <div className="col-span-2 text-right">
                        <button
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                            (workflow as any).active
                              ? 'bg-green-600'
                              : 'bg-gray-200'
                          }`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              (workflow as any).active
                                ? 'translate-x-6'
                                : 'translate-x-1'
                            }`}
                          />
                        </button>
                        <span className="ml-2 text-xs text-gray-500">
                          {(workflow as any).active ? 'On' : 'Off'}
                        </span>
                      </div>
                    </>
                  )}

                  {(activeWorkflowTab === 'bulk-actions' ||
                    activeWorkflowTab === 'scheduled' ||
                    activeWorkflowTab === 'archived') && (
                    <>
                      <div className="col-span-4">
                        <span className="text-sm text-gray-700">
                          {activeWorkflowTab === 'bulk-actions'
                            ? (workflow as any).status
                            : (workflow as any).type}
                        </span>
                      </div>
                      <div className="col-span-4">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-8 h-8 rounded-full ${workflow.createdBy.color} flex items-center justify-center text-white text-xs font-medium`}
                          >
                            {workflow.createdBy.avatar}
                          </div>
                          <span className="text-sm text-gray-700">
                            {workflow.createdBy.name}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
            Previous
          </button>
          <div className="text-sm text-gray-600">
            Showing 1-5 of {currentTab?.count.toLocaleString()}
          </div>
          <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">
            Next
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white h-full rounded-lg shadow-lg flex flex-col">
      <div className="p-6 flex flex-col h-full">
        <div className="flex-shrink-0">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center space-x-3">
              {onToggleSidebar && (
                <button
                  onClick={onToggleSidebar}
                  className="p-2 hover:bg-gray-100 rounded-lg border-2 border-gray-100 transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.90909 3.2C3.51747 3.2 3.2 3.51747 3.2 3.90909V12.0909C3.2 12.4825 3.51746 12.8 3.90909 12.8H5.8L5.8 3.2L3.90909 3.2ZM2 3.90909C2 2.85473 2.85473 2 3.90909 2H12.0909C13.1453 2 14 2.85473 14 3.90909V12.0909C14 13.1453 13.1453 14 12.0909 14H3.90909C2.85473 14 2 13.1453 2 12.0909V3.90909ZM12.0909 3.2L7 3.2L7 12.8H12.0909C12.4825 12.8 12.8 12.4825 12.8 12.0909V3.90909C12.8 3.51746 12.4825 3.2 12.0909 3.2Z"
                      fill="#191B1F"
                    />
                  </svg>
                </button>
              )}
              <h1 className="text-2xl font-bold text-gray-900">Onboarding</h1>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6 overflow-x-auto">
            <div className="flex min-w-max">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-4 font-medium border border-gray-100 text-sm transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-1 border-gray-300 border-b-0 rounded-t-lg text-gray-900 bg-white'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content - Scrollable */}
        <div className="max-h-[500px] overflow-y-auto">
          <div className="p-6">
            {activeTab === 'customize' && renderCustomizeContent()}
            {activeTab === 'access' && renderAccessContent()}
            {activeTab === 'workflows' && renderWorkflowsContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
