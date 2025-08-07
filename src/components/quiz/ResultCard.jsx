const ResultCard = ({ score, totalQuestions, onRestart, onNewQuiz }) => {
  return (
    <div className="max-w-2xl mx-4 sm:mx-auto bg-white rounded-xl shadow-xl p-6 sm:p-8 text-center">
      <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Quiz Completed!</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
        You scored {score} out of {totalQuestions} ({Math.round((score / totalQuestions) * 100)}%)
      </p>
      
      <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 mb-6 sm:mb-8">
        <div 
          className={`h-full rounded-full ${(score / totalQuestions) >= 0.7 ? 'bg-green-500' : (score / totalQuestions) >= 0.4 ? 'bg-yellow-500' : 'bg-red-500'}`} 
          style={{ width: `${(score / totalQuestions) * 100}%` }}
        ></div>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
        <button 
          onClick={onRestart}
          className="bg-indigo-600 text-white px-5 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md"
        >
          Retake Quiz
        </button>
        <button 
          onClick={onNewQuiz}
          className="bg-white text-indigo-600 px-5 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-indigo-50 transition shadow-md border border-indigo-100"
        >
          Choose Another Quiz
        </button>
      </div>
    </div>
  );
};

export default ResultCard;