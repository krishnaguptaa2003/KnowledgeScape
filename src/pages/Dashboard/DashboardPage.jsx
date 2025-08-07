const DashboardPage = () => {
  // Mock data for demonstration
  const stats = [
    { name: 'Total Quizzes Taken', value: 24, change: '+12%', changeType: 'positive' },
    { name: 'Average Score', value: '78%', change: '+5%', changeType: 'positive' },
    { name: 'Current Streak', value: 7, change: '+3', changeType: 'positive' },
    { name: 'Categories Mastered', value: 5, change: '+2', changeType: 'positive' },
  ];

  const recentQuizzes = [
    { category: 'History', score: 85, date: '2 hours ago' },
    { category: 'Geography', score: 92, date: '1 day ago' },
    { category: 'Science', score: 76, date: '3 days ago' },
    { category: 'Astrology', score: 68, date: '1 week ago' },
  ];

  const categoryPerformance = [
    { name: 'History', score: 85 },
    { name: 'Geography', score: 92 },
    { name: 'Science', score: 76 },
    { name: 'Astrology', score: 68 },
    { name: 'Traffic Laws', score: 81 },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
              <p className="text-2xl md:text-3xl font-semibold text-gray-900 mt-2">{stat.value}</p>
              <div className={`mt-2 flex items-center ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.changeType === 'positive' ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                )}
                <span className="ml-1 text-sm">{stat.change}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Quiz Activity</h2>
            <div className="space-y-4">
              {recentQuizzes.map((quiz, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition gap-4">
                  <div className="flex items-center w-full sm:w-auto">
                    <div className="bg-indigo-100 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{quiz.category}</h3>
                      <p className="text-sm text-gray-500">{quiz.date}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    quiz.score >= 80 ? 'bg-green-100 text-green-800' : 
                    quiz.score >= 60 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {quiz.score}%
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <button className="text-indigo-600 hover:text-indigo-500 font-medium">
                View all activity
              </button>
            </div>
          </div>
          
          {/* Category Performance */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Category Performance</h2>
            <div className="space-y-4">
              {categoryPerformance.map((category, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-700">{category.name}</span>
                    <span className="text-gray-500">{category.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        category.score >= 80 ? 'bg-green-500' : 
                        category.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`} 
                      style={{ width: `${category.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition">
                Take a New Quiz
              </button>
            </div>
          </div>
        </div>
        
        {/* Recommended Quizzes */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Recommended For You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['World Capitals', 'Historical Events', 'Scientific Discoveries'].map((quiz, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800 mb-1">{quiz}</h3>
                <p className="text-sm text-gray-500 mb-3">10 questions • Medium difficulty</p>
                <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                  Start Quiz
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;