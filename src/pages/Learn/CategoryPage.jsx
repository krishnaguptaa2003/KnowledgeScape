import { useParams, Link } from 'react-router-dom';

const CategoryPage = () => {
  const { category } = useParams();
  
  // Format category name for display
  const formattedCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Mock data based on category
  const topics = {
    history: [
      { title: "Ancient Civilizations", description: "Explore Egypt, Greece, Rome, and more", resources: 24 },
      { title: "World Wars", description: "Comprehensive guides to WWI and WWII", resources: 18 },
      { title: "Revolutionary Periods", description: "American, French, and Industrial revolutions", resources: 15 },
      { title: "Historical Figures", description: "Biographies of influential people", resources: 32 }
    ],
    science: [
      { title: "Physics Fundamentals", description: "Motion, energy, and forces", resources: 20 },
      { title: "Chemistry Basics", description: "Elements, compounds, and reactions", resources: 16 },
      { title: "Biology Essentials", description: "Cells, genetics, and ecosystems", resources: 22 },
      { title: "Space Exploration", description: "Planets, stars, and space missions", resources: 14 }
    ],
    geography: [
      { title: "World Capitals", description: "Learn all country capitals", resources: 28 },
      { title: "Physical Geography", description: "Mountains, rivers, and landscapes", resources: 19 },
      { title: "Cultural Geography", description: "Human impact on the environment", resources: 15 },
      { title: "Climate Zones", description: "Understanding global weather patterns", resources: 12 }
    ],
    literature: [
      { title: "Classic Novels", description: "Analysis of timeless literature", resources: 25 },
      { title: "Literary Devices", description: "Metaphors, similes, and more", resources: 18 },
      { title: "Famous Authors", description: "Biographies and works", resources: 22 },
      { title: "Poetry Analysis", description: "Understanding poetic forms", resources: 15 }
    ]
  };

  // Default topics if category not found
  const categoryTopics = topics[category] || [
    { title: "Topic 1", description: "Description of topic 1", resources: 10 },
    { title: "Topic 2", description: "Description of topic 2", resources: 8 },
    { title: "Topic 3", description: "Description of topic 3", resources: 12 }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/learn" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Learning Resources
          </Link>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{formattedCategory} Learning Materials</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive {formattedCategory.toLowerCase()} resources to prepare for quizzes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categoryTopics.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{topic.title}</h3>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{topic.resources} resources</span>
                  <Link 
                    to={`/learn/${category}/${topic.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-indigo-600 hover:text-indigo-500 text-sm font-medium flex items-center"
                  >
                    Explore
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">About {formattedCategory}</h2>
          <div className="prose max-w-none">
            <p>
              {formattedCategory} is a fascinating field of study that explores {
                category === 'history' ? 'past events and their impact on the present' : 
                category === 'science' ? 'the natural world through observation and experimentation' : 
                category === 'geography' ? 'the Earth and its features, inhabitants, and phenomena' :
                category === 'literature' ? 'written works, especially those considered of superior or lasting artistic merit' :
                'various aspects of human knowledge and culture'
              }. Understanding {formattedCategory.toLowerCase()} helps us make sense of the world around us.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Key Concepts</h3>
            <ul className="list-disc pl-5 space-y-2">
              {category === 'history' && (
                <>
                  <li>Chronological thinking and historical interpretation</li>
                  <li>Cause and effect relationships in historical events</li>
                  <li>Cultural developments and interactions</li>
                  <li>Historical sources and evidence analysis</li>
                </>
              )}
              {category === 'science' && (
                <>
                  <li>The scientific method and experimental design</li>
                  <li>Fundamental laws and theories of nature</li>
                  <li>Applications in technology and medicine</li>
                  <li>Interdisciplinary connections</li>
                </>
              )}
              {category === 'geography' && (
                <>
                  <li>Spatial patterns and relationships</li>
                  <li>Physical and human geography connections</li>
                  <li>Geographic information systems (GIS)</li>
                  <li>Environmental and cultural impacts</li>
                </>
              )}
              {category === 'literature' && (
                <>
                  <li>Literary analysis and criticism</li>
                  <li>Historical and cultural contexts</li>
                  <li>Genre studies and narrative techniques</li>
                  <li>Themes and symbolism</li>
                </>
              )}
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6">Study Tips</h3>
            <p>
              To effectively study {formattedCategory.toLowerCase()}:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Create timelines or concept maps to visualize relationships</li>
              <li>Focus on understanding rather than memorization</li>
              <li>Connect new information to what you already know</li>
              <li>Test yourself regularly with practice questions</li>
              <li>Discuss concepts with peers to reinforce learning</li>
            </ol>
            
            <div className="mt-8 bg-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">Ready to Test Your Knowledge?</h3>
              <p className="mb-4">Now that you've learned about {formattedCategory.toLowerCase()}, challenge yourself with a quiz!</p>
              <Link 
                to={`/quiz?category=${category}`}
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition"
              >
                Take {formattedCategory} Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;