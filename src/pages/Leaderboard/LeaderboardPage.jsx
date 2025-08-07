import { useState } from 'react';

const LeaderboardPage = () => {
  const [timeframe, setTimeframe] = useState('weekly');
  const [category, setCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'history', name: 'History' },
    { id: 'science', name: 'Science' },
    { id: 'geography', name: 'Geography' },
    { id: 'literature', name: 'Literature' }
  ];

  const timeframes = [
    { id: 'weekly', name: 'This Week' },
    { id: 'monthly', name: 'This Month' },
    { id: 'alltime', name: 'All Time' }
  ];

  // Mock leaderboard data
  const leaderboardData = {
    weekly: {
      all: [
        { rank: 1, name: 'Alex Johnson', score: 1250, quizzes: 24, avatar: 'AJ' },
        { rank: 2, name: 'Maria Garcia', score: 1180, quizzes: 22, avatar: 'MG' },
        { rank: 3, name: 'Sam Wilson', score: 1120, quizzes: 20, avatar: 'SW' },
        { rank: 4, name: 'Taylor Smith', score: 1050, quizzes: 18, avatar: 'TS' },
        { rank: 5, name: 'Jordan Lee', score: 980, quizzes: 16, avatar: 'JL' },
        { rank: 6, name: 'Casey Kim', score: 920, quizzes: 15, avatar: 'CK' },
        { rank: 7, name: 'Riley Chen', score: 870, quizzes: 14, avatar: 'RC' },
        { rank: 8, name: 'Morgan Taylor', score: 820, quizzes: 13, avatar: 'MT' },
        { rank: 9, name: 'Jamie Brown', score: 780, quizzes: 12, avatar: 'JB' },
        { rank: 10, name: 'Drew Wilson', score: 740, quizzes: 11, avatar: 'DW' }
      ],
      // Other categories would follow the same structure
    },
    // Monthly and all-time data would follow the same structure
  };

  const currentData = leaderboardData[timeframe][category] || leaderboardData.weekly.all;

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Leaderboard</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how you stack up against other KnowledgeScape learners!
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
              <div className="flex space-x-2">
                {timeframes.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => setTimeframe(frame.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${timeframe === frame.id ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  >
                    {frame.name}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quizzes</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Score</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentData.map((user) => (
                  <tr key={user.rank} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center justify-center w-8 h-8 rounded-full ${user.rank <= 3 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-white font-bold' : 'bg-gray-100 text-gray-700'}`}>
                        {user.rank}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-semibold">
                            {user.avatar}
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-semibold">{user.score}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{user.quizzes}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{Math.round(user.score / user.quizzes)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Your Position */}
        <div className="mt-8 bg-indigo-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4">Your Position</h2>
          {currentData.find(user => user.name === 'You') ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-semibold mr-4">
                  YO
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">You</h3>
                  <p className="text-sm text-gray-600">Rank: #{currentData.find(user => user.name === 'You').rank}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{currentData.find(user => user.name === 'You').score} points</p>
                <p className="text-sm text-gray-600">{currentData.find(user => user.name === 'You').quizzes} quizzes</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <p className="text-gray-600">Take more quizzes to appear on the leaderboard!</p>
              <a href="/quiz" className="text-indigo-600 hover:text-indigo-500 font-medium">
                Take a Quiz
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;