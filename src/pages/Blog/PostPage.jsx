import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostPage = () => {
  const { postId } = useParams();

  // Mock data based on post ID
  const posts = {
    'how-to-learn-effectively': {
      title: 'How to Learn Effectively: Science-Backed Techniques',
      category: 'Learning',
      date: 'May 15, 2023',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      content: `
        <h2 class="text-2xl font-semibold text-gray-800 mt-6 mb-4">The Science of Learning</h2>
        <p class="text-gray-600 mb-4">Learning is a complex process that involves acquiring new knowledge, skills, and behaviors. Cognitive science has revealed several techniques that can significantly enhance learning effectiveness.</p>
        
        <h3 class="text-xl font-semibold text-gray-800 mt-6 mb-3">Spaced Repetition</h3>
        <p class="text-gray-600 mb-4">This technique involves reviewing information at increasing intervals over time. Research shows that spacing out your study sessions leads to better long-term retention than cramming.</p>
        <p class="text-gray-600 mb-2">Practical application:</p>
        <ul class="list-disc pl-5 space-y-2 mb-4">
          <li class="text-gray-600">Use flashcards with spaced repetition software</li>
          <li class="text-gray-600">Schedule review sessions at gradually longer intervals</li>
          <li class="text-gray-600">Mix old and new material in study sessions</li>
        </ul>
      `,
      author: {
        name: 'Dr. Sarah Johnson',
        bio: 'Cognitive psychologist and learning specialist with 10 years of experience in educational research.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
      relatedPosts: [
        { id: 'memory-techniques', title: '5 Powerful Memory Techniques for Learners' },
        { id: 'quiz-strategies', title: 'Top Strategies to Ace Any Quiz' }
      ]
    },
  };

  const post = posts[postId] || {
    title: 'Post Not Found',
    content: '<p class="text-gray-600">The requested post could not be found.</p>'
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/blog" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Blog
          </Link>
        </div>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {post.image && (
            <div className="h-64 sm:h-80 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
              <span className="text-sm font-medium text-indigo-600">{post.category}</span>
              <span className="text-sm text-gray-500">{post.date} • {post.readTime}</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
            
            <div 
              className="prose max-w-none" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
            
            {post.author && (
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{post.author.name}</h4>
                    <p className="text-sm text-gray-600">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{relatedPost.title}</h3>
                  <span className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                    Read Article
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 bg-indigo-50 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4">Put Your Knowledge to the Test</h2>
          <p className="mb-4">Now that you've learned these techniques, why not try them out with one of our quizzes?</p>
          <Link 
            to="/quiz"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition"
          >
            Take a Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPage;