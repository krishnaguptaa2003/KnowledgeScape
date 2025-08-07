import { useState } from 'react';
import { Link } from 'react-router-dom';

const QuizHomePage = () => {
  const [questionCount, setQuestionCount] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const categories = [
    { id: 'history', name: 'History', icon: '🏛️', count: 125, color: 'bg-red-100 text-red-800' },
    { id: 'geography', name: 'Geography', icon: '🌍', count: 98, color: 'bg-blue-100 text-blue-800' },
    { id: 'science', name: 'Science', icon: '🔬', count: 112, color: 'bg-green-100 text-green-800' },
    { id: 'astrology', name: 'Astrology', icon: '✨', count: 76, color: 'bg-purple-100 text-purple-800' },
    { id: 'traffic', name: 'Traffic Laws', icon: '🚦', count: 64, color: 'bg-yellow-100 text-yellow-800' },
    { id: 'funfacts', name: 'Fun Facts', icon: '🎉', count: 87, color: 'bg-pink-100 text-pink-800' },
    { id: 'literature', name: 'Literature', icon: '📚', count: 93, color: 'bg-indigo-100 text-indigo-800' },
    { id: 'movies', name: 'Movies', icon: '🎬', count: 105, color: 'bg-gray-100 text-gray-800' },
  ];

  const difficultyLevels = [
    { id: 'easy', level: 'Easy', description: 'Perfect for beginners' },
    { id: 'medium', level: 'Medium', description: 'A balanced challenge' },
    { id: 'hard', level: 'Hard', description: 'For the true experts' },
  ];

  const popularQuizzes = [
    { id: 'capitals', title: 'World Capitals Challenge', category: 'Geography', questions: 15, plays: 1243, difficulty: 'medium' },
    { id: 'history-timeline', title: 'Historical Events Timeline', category: 'History', questions: 20, plays: 987, difficulty: 'hard' },
    { id: 'science-fundamentals', title: 'Science Fundamentals', category: 'Science', questions: 10, plays: 1562, difficulty: 'easy' },
    { id: 'movie-quotes', title: 'Famous Movie Quotes', category: 'Movies', questions: 15, plays: 2034, difficulty: 'medium' },
    { id: 'book-authors', title: 'Authors & Their Works', category: 'Literature', questions: 12, plays: 876, difficulty: 'medium' },
    { id: 'space-facts', title: 'Space & Astronomy', category: 'Science', questions: 18, plays: 1432, difficulty: 'hard' },
  ];

  const handleStartQuiz = () => {
    if (!selectedCategory || !selectedDifficulty) {
      alert('Please select a category and difficulty level');
      return;
    }
    // In a real app, you would navigate to the quiz with these parameters
    console.log(`Starting quiz with ${questionCount} questions in ${selectedCategory} (${selectedDifficulty})`);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Choose Your Quiz Adventure</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our diverse categories and challenge your knowledge across various topics.
          </p>
        </div>
        
        {/* Quiz Configuration */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quiz Settings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Question Count */}
            <div>
              <label htmlFor="questionCount" className="block text-sm font-medium text-gray-700 mb-2">
                Number of Questions: {questionCount}
              </label>
              <input
                type="range"
                id="questionCount"
                min="5"
                max="30"
                value={questionCount}
                onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
                <span>25</span>
                <span>30</span>
              </div>
            </div>
            
            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <div className="relative">
                <select
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Difficulty Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <div className="relative">
                <select
                  value={selectedDifficulty || ''}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select difficulty</option>
                  {difficultyLevels.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>
                      {difficulty.level}
                    </option>
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
          
          <div className="mt-6 text-center">
            <Link
              to={`/quiz/play?category=${selectedCategory}&difficulty=${selectedDifficulty}&count=${questionCount}`}
              className={`inline-block px-8 py-3 text-lg font-medium rounded-lg text-white shadow-lg transition ${selectedCategory && selectedDifficulty ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              Start Custom Quiz
            </Link>
          </div>
        </div>
        
        {/* Popular Quizzes */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Popular Quizzes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularQuizzes.map((quiz) => (
              <Link
                key={quiz.id}
                to={`/quiz/play?quizId=${quiz.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">{quiz.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{quiz.category}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${quiz.difficulty === 'easy' ? 'bg-green-100 text-green-800' : quiz.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                          {quiz.difficulty}
                        </span>
                      </div>
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">{quiz.questions} Qs</span>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600">{(quiz.plays / 1000).toFixed(1)}k plays</span>
                    </div>
                    <div className="text-indigo-600 hover:text-indigo-500 text-sm font-medium flex items-center">
                      Play Now
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Learning Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Learn Before You Quiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-indigo-800">Quick Facts</h3>
              </div>
              <div className="space-y-4">
                {[
                  "The Great Wall of China is over 13,000 miles long.",
                  "Venus is the only planet that rotates clockwise.",
                  "The shortest war in history was between Britain and Zanzibar in 1896 (38 minutes).",
                  "Bananas are berries, but strawberries aren't."
                ].map((fact, index) => (
                  <div key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-indigo-800">Study Guides</h3>
              </div>
              <div className="space-y-4">
                {[
                  { title: "World Capitals", link: "#" },
                  { title: "Historical Timeline", link: "#" },
                  { title: "Scientific Formulas", link: "#" },
                  { title: "Traffic Signs", link: "#" }
                ].map((guide, index) => (
                  <a 
                    key={index} 
                    href={guide.link} 
                    className="block p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition flex items-center justify-between"
                  >
                    <span className="text-indigo-600 font-medium">{guide.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizHomePage;