import { Link } from 'react-router-dom';

const LearnHomePage = () => {
  const categories = [
    {
      name: "History",
      description: "Explore historical events, figures, and civilizations",
      icon: "🏛️",
      color: "bg-red-100 text-red-800"
    },
    {
      name: "Science",
      description: "Discover scientific concepts, discoveries, and innovations",
      icon: "🔬",
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Geography",
      description: "Learn about countries, capitals, and physical features",
      icon: "🌍",
      color: "bg-green-100 text-green-800"
    },
    {
      name: "Literature",
      description: "Study famous authors, books, and literary terms",
      icon: "📚",
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      name: "Mathematics",
      description: "Understand mathematical concepts and formulas",
      icon: "🧮",
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Art",
      description: "Explore famous artists, artworks, and movements",
      icon: "🎨",
      color: "bg-pink-100 text-pink-800"
    }
  ];

  const popularGuides = [
    {
      title: "World Capitals Guide",
      category: "Geography",
      length: "15 min read",
      icon: "🌎"
    },
    {
      title: "Historical Timeline",
      category: "History",
      length: "20 min read",
      icon: "⏳"
    },
    {
      title: "Scientific Formulas",
      category: "Science",
      length: "12 min read",
      icon: "🧪"
    },
    {
      title: "Literary Devices",
      category: "Literature",
      length: "10 min read",
      icon: "✍️"
    }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Learning Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Study before you quiz! Explore our comprehensive learning materials.
          </p>
        </div>
        
        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                to={`/learn/${category.name.toLowerCase()}`}
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Popular Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular Study Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularGuides.map((guide, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="text-3xl mb-4">{guide.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{guide.title}</h3>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{guide.category}</span>
                    <span>{guide.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* How to Learn Effectively */}
        <div className="bg-indigo-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">How to Learn Effectively</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Study Tips</h3>
              <ul className="space-y-3">
                {[
                  "Set specific learning goals for each session",
                  "Take regular breaks to improve retention",
                  "Use active recall by testing yourself frequently",
                  "Connect new information to what you already know",
                  "Teach concepts to someone else to reinforce your understanding"
                ].map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Recommended Study Plan</h3>
              <div className="space-y-4">
                {[
                  { day: "Monday", activity: "30 min study + 10 question quiz" },
                  { day: "Tuesday", activity: "Review mistakes + new 30 min study" },
                  { day: "Wednesday", activity: "Full-length quiz on studied material" },
                  { day: "Thursday", activity: "New topic study session" },
                  { day: "Friday", activity: "Mixed review quiz" },
                  { day: "Weekend", activity: "Rest or bonus learning" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                    <div className="bg-indigo-100 text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center font-medium mr-3">
                      {item.day.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">{item.day}</p>
                      <p className="text-sm text-gray-600">{item.activity}</p>
                    </div>
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

export default LearnHomePage;