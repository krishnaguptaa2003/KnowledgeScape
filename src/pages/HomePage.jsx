import { Link } from 'react-router-dom';

const HomePage = () => {
  const features = [
    {
      icon: '📚',
      title: 'Diverse Categories',
      description: 'Explore quizzes across various topics from history to science'
    },
    {
      icon: '🏆',
      title: 'Leaderboards',
      description: 'Compete with others and track your progress'
    },
    {
      icon: '🧠',
      title: 'Learn Mode',
      description: 'Study before taking quizzes to improve your knowledge'
    }
  ];

  const popularCategories = [
    { name: 'History', icon: '🏛️', count: 125, color: 'from-red-400 to-red-600' },
    { name: 'Science', icon: '🔬', count: 112, color: 'from-green-400 to-green-600' },
    { name: 'Geography', icon: '🌍', count: 98, color: 'from-blue-400 to-blue-600' },
    { name: 'Movies', icon: '🎬', count: 105, color: 'from-purple-400 to-purple-600' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 to-purple-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
        }}></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Expand Your Knowledge <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                  One Quiz at a Time
                </span>
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-lg">
                Challenge yourself with our interactive quizzes and track your progress as you learn new things every day.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/quiz"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-lg text-center sm:px-8"
                >
                  Start Quizzing
                </Link>
                <Link
                  to="/learn"
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 border border-white border-opacity-20 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-lg text-center sm:px-8"
                >
                  Learn First
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-0 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="bg-gray-900 bg-opacity-50 rounded-lg p-4 mb-4">
                    <p className="text-white font-medium">Question 1/10</p>
                    <p className="text-white text-lg mt-2">What is the capital of France?</p>
                  </div>
                  <div className="space-y-3">
                    {['Paris', 'London', 'Berlin', 'Madrid'].map((option, i) => (
                      <button
                        key={i}
                        className={`w-full text-left p-3 rounded-lg transition ${i === 0 ? 'bg-green-500 text-white' : 'bg-white bg-opacity-10 text-white hover:bg-opacity-20'}`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm text-indigo-200">Score: 250</span>
                    <span className="text-sm text-indigo-200">Time: 0:15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose KnowledgeScape?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to make learning fun, engaging, and rewarding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Quiz Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our most popular categories and start learning today.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category, index) => (
              <Link
                to={`/quiz?category=${category.name.toLowerCase()}`}
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-90 group-hover:opacity-100 transition`}></div>
                <div className="relative z-10 p-6 text-white h-full flex flex-col">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-white text-opacity-80 mb-4">{category.count} quizzes</p>
                  <div className="mt-auto flex items-center text-sm font-medium">
                    <span>Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/quiz"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of happy learners who improved their knowledge with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "KnowledgeScape helped me prepare for my history exams in a fun way!",
                name: "Sarah Johnson",
                role: "College Student",
                rating: 5
              },
              {
                quote: "I love the variety of quizzes. It's my daily brain exercise!",
                name: "Michael Chen",
                role: "Software Engineer",
                rating: 5
              },
              {
                quote: "As a teacher, I recommend this to all my students for extra learning.",
                name: "Emily Rodriguez",
                role: "High School Teacher",
                rating: 4
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center font-semibold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Challenge Yourself?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of learners expanding their knowledge every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/auth/signup"
              className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition shadow-lg text-center sm:px-8"
            >
              Sign Up Free
            </Link>
            <Link
              to="/quiz"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:bg-opacity-10 font-semibold px-6 py-3 rounded-lg transition shadow-lg text-center sm:px-8"
            >
              Take a Demo Quiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;