import { Link } from 'react-router-dom';

const BlogHomePage = () => {
  const featuredPosts = [
    {
      id: 'how-to-learn-effectively',
      title: 'How to Learn Effectively: Science-Backed Techniques',
      excerpt: 'Discover research-proven methods to enhance your learning and retention of new information.',
      category: 'Learning',
      date: 'May 15, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 'quiz-strategies',
      title: 'Top Strategies to Ace Any Quiz',
      excerpt: 'Learn expert techniques to approach quizzes with confidence and improve your scores.',
      category: 'Quizzes',
      date: 'April 28, 2023',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const recentPosts = [
    {
      id: 'memory-techniques',
      title: '5 Powerful Memory Techniques for Learners',
      excerpt: 'Improve your recall with these scientifically validated memory methods.',
      category: 'Learning',
      date: 'April 10, 2023',
      readTime: '5 min read'
    },
    {
      id: 'history-facts',
      title: '10 Surprising Facts From World History',
      excerpt: 'Fascinating historical events that will change how you see the past.',
      category: 'History',
      date: 'March 22, 2023',
      readTime: '7 min read'
    },
    {
      id: 'science-myths',
      title: 'Debunking Common Science Myths',
      excerpt: 'Separating fact from fiction in popular scientific misconceptions.',
      category: 'Science',
      date: 'March 15, 2023',
      readTime: '9 min read'
    },
    {
      id: 'geography-tips',
      title: 'Mastering Geography: Tips and Resources',
      excerpt: 'Essential tools and methods to become a geography expert.',
      category: 'Geography',
      date: 'February 28, 2023',
      readTime: '6 min read'
    }
  ];

  const categories = [
    { name: 'Learning', count: 12 },
    { name: 'Quizzes', count: 8 },
    { name: 'History', count: 15 },
    { name: 'Science', count: 10 },
    { name: 'Geography', count: 7 },
    { name: 'Tips', count: 9 }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">KnowledgeScape Blog</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and resources to enhance your learning journey.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Featured Posts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                    <span className="text-sm font-medium text-indigo-600">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <span className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                      Read More
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.id}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                  <span className="text-sm font-medium text-indigo-600">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <span className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/blog/category/${category.name.toLowerCase()}`}
                className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition flex justify-between items-center"
              >
                <span className="font-medium text-gray-800">{category.name}</span>
                <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                  {category.count} posts
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHomePage;