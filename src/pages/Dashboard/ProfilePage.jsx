const ProfilePage = () => {
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    avatar: "AJ",
    joinedDate: "January 2023",
    stats: {
      quizzesTaken: 24,
      averageScore: 78,
      correctAnswers: 156,
      categoriesMastered: 5
    },
    achievements: [
      { name: "Quick Learner", icon: "⚡", description: "Completed 5 quizzes in one day" },
      { name: "History Buff", icon: "🏛️", description: "Scored 90%+ in History category" },
      { name: "Streak Starter", icon: "🔥", description: "3-day quiz streak" }
    ]
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Profile</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 h-full">
              <div className="flex flex-col items-center">
                <div className="bg-indigo-100 text-indigo-600 w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
                  {user.avatar}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
                <p className="text-gray-600 mb-4">{user.email}</p>
                <p className="text-sm text-gray-500">Member since {user.joinedDate}</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Account Settings</h3>
                <ul className="space-y-3">
                  <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition text-gray-700">
                      Edit Profile
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition text-gray-700">
                      Change Password
                    </button>
                  </li>
                  <li>
                    <button className="w-full text-left px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition text-gray-700">
                      Notification Settings
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(user.stats).map(([key, value]) => (
                <div key={key} className="bg-white rounded-xl shadow-md p-4 text-center">
                  <p className="text-sm text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {typeof value === 'number' ? value : `${value}%`}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Progress Chart */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Your Progress</h3>
              <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Progress chart visualization</p>
              </div>
            </div>
            
            {/* Achievements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Your Achievements</h3>
              {user.achievements.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {user.achievements.map((achievement, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="text-2xl mb-2">{achievement.icon}</div>
                      <h4 className="font-medium text-gray-800">{achievement.name}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Complete quizzes to earn achievements!</p>
              )}
            </div>
            
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: "Completed Geography quiz", score: 85, date: "2 hours ago" },
                  { action: "Earned History Buff achievement", date: "1 day ago" },
                  { action: "Completed Science quiz", score: 76, date: "3 days ago" }
                ].map((activity, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 pb-4 gap-2">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-600 p-2 rounded-full mr-3 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-800">{activity.action}</p>
                        {activity.score && (
                          <span className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                            activity.score >= 80 ? 'bg-green-100 text-green-800' : 
                            activity.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                          }`}>
                            Score: {activity.score}%
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500 sm:text-right">{activity.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;