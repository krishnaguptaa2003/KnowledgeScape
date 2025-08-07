const Question = ({ question, options, selectedOption, correctAnswer, showResult, onSelect }) => {
  return (
    <div className="space-y-2 sm:space-y-3">
      {options.map((option, index) => (
        <div 
          key={index}
          onClick={() => !showResult && onSelect(option)}
          className={`p-3 sm:p-4 border rounded-lg cursor-pointer transition ${
            selectedOption === option ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
          } ${
            showResult && option === correctAnswer ? 'bg-green-50 border-green-500' : ''
          } ${
            showResult && selectedOption === option && selectedOption !== correctAnswer ? 'bg-red-50 border-red-500' : ''
          }`}
        >
          <div className="flex items-center">
            <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex items-center justify-center mr-2 sm:mr-3 flex-shrink-0 ${
              selectedOption === option ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-gray-300'
            } ${
              showResult && option === correctAnswer ? 'border-green-500 bg-green-500 text-white' : ''
            } ${
              showResult && selectedOption === option && selectedOption !== correctAnswer ? 'border-red-500 bg-red-500 text-white' : ''
            }`}>
              {(selectedOption === option || (showResult && option === correctAnswer)) && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 sm:h-3 sm:w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <span className="text-sm sm:text-base">{option}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Question;