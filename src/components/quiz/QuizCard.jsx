import { Link } from 'react-router-dom';

const QuizCard = ({ id, title, category, questionCount, plays, difficulty }) => {
  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    hard: 'bg-red-100 text-red-800'
  };

  return (
    <Link 
      to={`/quiz/play?quizId=${id}`}
      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition cursor-pointer h-full flex flex-col"
    >
      <div className="flex justify-between items-start mb-3 gap-2">
        <div className="flex-1">
          <h3 className="font-medium text-gray-800 text-sm sm:text-base line-clamp-2">{title}</h3>
          <span className="text-xs sm:text-sm text-gray-500">{category}</span>
        </div>
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">
          {questionCount} Qs
        </span>
      </div>
      
      <div className="mt-auto flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center">
          <span className={`text-xs px-2 py-1 rounded-full mr-2 ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
          <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
            {plays > 1000 ? `${(plays/1000).toFixed(1)}k` : plays} plays
          </span>
        </div>
        <span className="text-indigo-600 hover:text-indigo-500 text-xs sm:text-sm font-medium flex items-center">
          Play Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default QuizCard;