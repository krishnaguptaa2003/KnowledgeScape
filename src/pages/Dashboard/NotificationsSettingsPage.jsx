import { useState } from 'react';
import { Link } from 'react-router-dom';

const NotificationsSettingsPage = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    quizResults: true,
    newQuizzes: true,
    weeklyDigest: true,
    achievementUnlocked: true,
    emailNotifications: true,
    pushNotifications: false
  });

  const handleToggle = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/profile" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Profile
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-8">Notification Settings</h1>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-4">Email Notifications</h2>
                <div className="space-y-4">
                  {[
                    { 
                      id: 'quizResults',
                      label: 'Quiz Results',
                      description: 'Receive email when you complete a quiz'
                    },
                    { 
                      id: 'newQuizzes',
                      label: 'New Quizzes',
                      description: 'Get notified about new quizzes in your favorite categories'
                    },
                    { 
                      id: 'weeklyDigest',
                      label: 'Weekly Digest',
                      description: 'Receive a weekly summary of your progress'
                    },
                    { 
                      id: 'achievementUnlocked',
                      label: 'Achievements',
                      description: 'Get notified when you unlock new achievements'
                    }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-800">{item.label}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <button
                        onClick={() => handleToggle(item.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                          notificationSettings[item.id] ? 'bg-indigo-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notificationSettings[item.id] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">Notification Methods</h2>
                <div className="space-y-4">
                  {[
                    { 
                      id: 'emailNotifications',
                      label: 'Email Notifications',
                      description: 'Receive notifications via email'
                    },
                    { 
                      id: 'pushNotifications',
                      label: 'Push Notifications',
                      description: 'Receive notifications on your device'
                    }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-gray-800">{item.label}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <button
                        onClick={() => handleToggle(item.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                          notificationSettings[item.id] ? 'bg-indigo-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            notificationSettings[item.id] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end pt-6">
                <button
                  className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition shadow-lg"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSettingsPage;