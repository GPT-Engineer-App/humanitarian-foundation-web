import React, { useState } from 'react';

const quizQuestions = [
  {
    question: 'What is the capital of Kenya?',
    options: ['Nairobi', 'Mombasa', 'Kisumu', 'Nakuru'],
    answer: 'Nairobi',
  },
  {
    question: 'Which river is the longest in Africa?',
    options: ['Nile', 'Congo', 'Niger', 'Zambezi'],
    answer: 'Nile',
  },
  // Add more questions as needed
];

const InteractiveQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Interactive Quiz</h2>
      {showScore ? (
        <div className="mt-4">
          <h3 className="text-2xl">You scored {score} out of {quizQuestions.length}</h3>
        </div>
      ) : (
        <div className="mt-4">
          <h3 className="text-2xl">{quizQuestions[currentQuestion].question}</h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="btn btn-primary"
                onClick={() => handleAnswerOptionClick(option === quizQuestions[currentQuestion].answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveQuiz;