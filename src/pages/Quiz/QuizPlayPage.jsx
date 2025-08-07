import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Confetti from 'react-confetti';

const QuizPlayPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quizId = queryParams.get('quizId');
  const category = queryParams.get('category');
  const difficulty = queryParams.get('difficulty');
  const count = queryParams.get('count') || 10;

  // Mock quiz data based on parameters
  const getQuizData = () => {
    if (quizId) {
      // Return specific quiz if ID is provided
      const popularQuizzes = {
        'capitals': {
          title: 'World Capitals Challenge',
          category: 'Geography',
          questions: Array(15).fill().map((_, i) => ({
            question: `What is the capital of Country ${i+1}?`,
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: ['Option A', 'Option B', 'Option C', 'Option D'][Math.floor(Math.random() * 4)],
            explanation: `This is the explanation for question ${i+1} about country capitals.`
          }))
        },
        // Add more quiz IDs as needed
      };
      return popularQuizzes[quizId] || getRandomQuiz();
    }
    return getRandomQuiz();
  };

  const getRandomQuiz = () => {
    const categories = {
      history: 'History',
      geography: 'Geography',
      science: 'Science',
      astrology: 'Astrology',
      traffic: 'Traffic Laws',
      funfacts: 'Fun Facts',
      literature: 'Literature',
      movies: 'Movies'
    };

    const difficulties = {
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard'
    };

    const quiz = {
      title: `${categories[category] || 'General'} Quiz`,
      category: categories[category] || 'General Knowledge',
      difficulty: difficulties[difficulty] || 'Medium',
      questions: Array(parseInt(count)).fill().map((_, i) => ({
        question: `Sample question ${i+1} about ${categories[category] || 'general knowledge'} (${difficulties[difficulty] || 'medium'} level)?`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: ['Option A', 'Option B', 'Option C', 'Option D'][Math.floor(Math.random() * 4)],
        explanation: `This is the explanation for question ${i+1}.`
      }))
    };
    return quiz;
  };

  const quiz = getQuizData();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const currentQuestion = quiz.questions[currentQuestionIndex];

  useEffect(() => {
    // Timer logic
    if (!quizCompleted && !showResult) {
      const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, quizCompleted, showResult]);

  useEffect(() => {
    // Reset timer for each question
    if (!quizCompleted) {
      setTimeLeft(15);
    }
  }, [currentQuestionIndex, quizCompleted]);

  useEffect(() => {
    // Handle window resize for confetti
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOptionSelect = (option) => {
    if (!showResult) {
      setSelectedOption(option);
    }
  };

  const checkAnswer = () => {
    if (selectedOption === null) return;
    
    setShowResult(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
      if (currentQuestionIndex === quiz.questions.length - 1) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowResult(false);
    setScore(0);
    setQuizCompleted(false);
    setShowConfetti(false);
  };

  const getProgressColor = () => {
    const percentage = (timeLeft / 15) * 100;
    if (percentage > 66) return 'bg-green-500';
    if (percentage > 33) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
          />
        )}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 text-center relative z-10">
            <div className={`${showConfetti ? 'animate-bounce' : ''}`}>
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Completed!</h1>
            <p className="text-xl text-gray-600 mb-6">
              You scored {score} out of {quiz.questions.length} in the {quiz.category} quiz ({Math.round((score / quiz.questions.length) * 100)}%)
            </p>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
              <div 
                className={`h-4 rounded-full ${(score / quiz.questions.length) >= 0.7 ? 'bg-green-500' : (score / quiz.questions.length) >= 0.4 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                style={{ width: `${(score / quiz.questions.length) * 100}%` }}
              ></div>
            </div>
            
            <div className="space-y-4 mb-8">
              {quiz.questions.map((q, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                  <span className="font-medium">Question {index + 1}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${q.correctAnswer === selectedOption ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {q.correctAnswer === selectedOption ? 'Correct' : 'Incorrect'}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={restartQuiz}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
              >
                Retake Quiz
              </button>
              <Link 
                to="/quiz"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition shadow-lg border border-indigo-100 flex items-center justify-center"
              >
                Choose Another Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Quiz Info Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-4 sm:space-y-0">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{quiz.title}</h2>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span className="text-gray-600 capitalize">{quiz.difficulty} level</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{quiz.questions.length} questions</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  Question {currentQuestionIndex + 1}/{quiz.questions.length}
                </div>
                <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  Score: {score}
                </div>
              </div>
            </div>
            
            {/* Progress bar with timer */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div 
                className={`h-2 rounded-full ${getProgressColor()}`} 
                style={{ width: `${(timeLeft / 15) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Time left: {timeLeft}s</span>
              <span>{(currentQuestionIndex / quiz.questions.length * 100).toFixed(0)}% complete</span>
            </div>
          </div>
          
          {/* Question Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 transform transition hover:scale-[1.01]">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">{currentQuestion.question}</h3>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <div 
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`p-4 border rounded-lg cursor-pointer transition ${selectedOption === option ? 'border-indigo-500 bg-indigo-50 transform scale-[1.02]' : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'} ${showResult && option === currentQuestion.correctAnswer ? 'bg-green-50 border-green-500' : ''} ${showResult && selectedOption === option && selectedOption !== currentQuestion.correctAnswer ? 'bg-red-50 border-red-500' : ''}`}
                >
                  <div className="flex items-center">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 flex-shrink-0 ${selectedOption === option ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-gray-300'} ${showResult && option === currentQuestion.correctAnswer ? 'border-green-500 bg-green-500 text-white' : ''} ${showResult && selectedOption === option && selectedOption !== currentQuestion.correctAnswer ? 'border-red-500 bg-red-500 text-white' : ''}`}>
                      {selectedOption === option || (showResult && option === currentQuestion.correctAnswer) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <div className="w-3 h-3"></div>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Explanation (shown after answer) */}
          {showResult && (
            <div className={`p-4 rounded-lg mb-6 ${selectedOption === currentQuestion.correctAnswer ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'} animate-fade-in`}>
              <h4 className="font-semibold mb-2 flex items-center">
                {selectedOption === currentQuestion.correctAnswer ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Correct!
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    Incorrect
                  </>
                )}
              </h4>
              <p className="pl-6">{currentQuestion.explanation}</p>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            {!showResult ? (
              <button 
                onClick={checkAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-3 rounded-lg font-medium transition shadow-lg flex items-center justify-center ${selectedOption === null ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Check Answer
              </button>
            ) : (
              <button 
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition shadow-lg flex items-center justify-center"
              >
                {currentQuestionIndex < quiz.questions.length - 1 ? (
                  <>
                    Next Question
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                ) : (
                  <>
                    Finish Quiz
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                )}
              </button>
            )}
            
            <Link 
              to="/quiz"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition shadow-lg border border-indigo-100 flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Quit Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPlayPage;