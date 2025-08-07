const AboutPage = () => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-800 mb-6 sm:mb-8">About KnowledgeScape</h1>
        
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            At KnowledgeScape, we believe that learning should be engaging, accessible, and fun. Our mission is to create a platform where curiosity is rewarded, and knowledge is celebrated.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Whether you're looking to test your knowledge, learn something new, or just pass the time with an entertaining challenge, KnowledgeScape offers a diverse landscape of quizzes to explore.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">How It Works</h2>
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                number: '1',
                title: 'Choose a Category',
                description: 'Select from our wide range of topics that interest you.'
              },
              {
                number: '2',
                title: 'Take the Quiz',
                description: 'Answer questions and challenge your knowledge.'
              },
              {
                number: '3',
                title: 'Learn & Improve',
                description: 'Review your answers, learn from explanations, and track your progress.'
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-indigo-100 text-indigo-800 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 mr-3 sm:mr-4 mt-1">
                  {item.number}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-800 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Our Team</h2>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            KnowledgeScape is built by a passionate team of educators, developers, and quiz enthusiasts who believe in the power of lifelong learning.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {['Alex Johnson', 'Maria Garcia', 'Sam Wilson'].map((name) => (
              <div key={name} className="bg-indigo-50 p-4 sm:p-5 rounded-lg text-center">
                <div className="bg-indigo-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-800 text-sm sm:text-base">{name}</h3>
                <p className="text-sm text-gray-600">Co-Founder</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;