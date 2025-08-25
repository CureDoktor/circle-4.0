import React, { useState } from 'react';

interface GamificationProps {
  onToggleSidebar?: () => void;
}

interface Level {
  id: number;
  name: string;
  pointsRequired: number;
}

const Gamification: React.FC<GamificationProps> = ({ onToggleSidebar }) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [levels, setLevels] = useState<Level[]>([
    { id: 1, name: 'Newbie', pointsRequired: 0 },
    { id: 2, name: 'Amateur', pointsRequired: 10 },
    { id: 3, name: 'Beignner', pointsRequired: 50 },
    { id: 4, name: 'Intermediate', pointsRequired: 100 },
    { id: 5, name: 'Advanced', pointsRequired: 150 },
    { id: 6, name: 'Professional', pointsRequired: 160 },
    { id: 7, name: 'Elite', pointsRequired: 320 },
    { id: 8, name: 'Ultimate', pointsRequired: 640 },
    { id: 9, name: 'Godlike', pointsRequired: 1280 },
  ]);
  const [settings, setSettings] = useState({
    includeAdmins: true,
    includeModerators: true,
    makeRewardsVisible: true,
  });

  const handleLevelChange = (
    id: number,
    field: 'name' | 'pointsRequired',
    value: string | number
  ) => {
    setLevels(prev =>
      prev.map(level =>
        level.id === id
          ? {
              ...level,
              [field]: field === 'pointsRequired' ? Number(value) : value,
            }
          : level
      )
    );
  };

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting],
    }));
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
              <h1 className="text-2xl font-bold text-gray-900">Gamification</h1>
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="max-h-96 overflow-y-auto">
          <div className="space-y-8">
            {/* Main Content Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              {/* Title and Description */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Gamification
                </h2>
                <p className="text-gray-600 mt-1">
                  Celebrate engagement and reward your members with
                  gamification.
                </p>
              </div>

              {/* Enable Gamification Toggle */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-900">
                    Enable gamification
                  </span>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {renderToggleButton(isEnabled, () => setIsEnabled(!isEnabled))}
              </div>

              {/* Conditional Content based on toggle */}
              {isEnabled ? (
                <>
                  {/* Customize Levels Section */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-base font-medium text-gray-900">
                          Customize levels
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Customize the name and points of each gamification
                          level.
                        </p>
                      </div>
                      <button className="p-1 text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </button>
                    </div>

                    {/* Levels List */}
                    <div className="space-y-3">
                      {levels.map(level => (
                        <div
                          key={level.id}
                          className="flex items-center space-x-4"
                        >
                          <div className="flex-1">
                            <input
                              type="text"
                              value={level.name}
                              onChange={e =>
                                handleLevelChange(
                                  level.id,
                                  'name',
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">
                              Points required:
                            </span>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </button>
                            <input
                              type="number"
                              value={level.pointsRequired}
                              onChange={e =>
                                handleLevelChange(
                                  level.id,
                                  'pointsRequired',
                                  e.target.value
                                )
                              }
                              className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visibility Settings */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900">
                        Include admins on the leaderboard
                      </span>
                      {renderToggleButton(settings.includeAdmins, () =>
                        handleSettingChange('includeAdmins')
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900">
                        Include moderators on the leaderboard
                      </span>
                      {renderToggleButton(settings.includeModerators, () =>
                        handleSettingChange('includeModerators')
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-900">
                        Make member rewards visible to other members
                      </span>
                      {renderToggleButton(settings.makeRewardsVisible, () =>
                        handleSettingChange('makeRewardsVisible')
                      )}
                    </div>
                  </div>
                </>
              ) : (
                /* Disabled State */
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">
                      Include admins on the leaderboard
                    </span>
                    {renderToggleButton(settings.includeAdmins, () =>
                      handleSettingChange('includeAdmins')
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">
                      Include moderators on the leaderboard
                    </span>
                    {renderToggleButton(settings.includeModerators, () =>
                      handleSettingChange('includeModerators')
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-900">
                      Make member rewards visible to other members
                    </span>
                    {renderToggleButton(settings.makeRewardsVisible, () =>
                      handleSettingChange('makeRewardsVisible')
                    )}
                  </div>
                </div>
              )}

              {/* Save Changes Button */}
              <div className="flex justify-end mt-8">
                <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 font-medium">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamification;
