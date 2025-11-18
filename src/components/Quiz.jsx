import React, { useState, useEffect, useCallback } from 'react';
import { difficultySettings } from '../data/quizData';
import Timer from './Timer';

const Quiz = ({ category, onQuizComplete, onBackToCategories }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizStartTime, setQuizStartTime] = useState(Date.now());
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = category.questions[currentQuestionIndex];
  const totalQuestions = category.questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: answerIndex
    }));
  };

  const handleTimeUp = () => {
    handleNext();
  };

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  }, [currentQuestionIndex, totalQuestions]);

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const finishQuiz = () => {
    const totalTime = Math.floor((Date.now() - quizStartTime) / 1000);
    let score = 0;
    let correctAnswers = 0;

    category.questions.forEach((question, index) => {
      const selectedAnswer = selectedAnswers[index];
      if (selectedAnswer === question.correctAnswer) {
        correctAnswers++;
        score += 10; // Base points per correct answer
        
        // Bonus points based on difficulty
        const difficulty = question.difficulty || 'medium';
        score += difficultySettings[difficulty].timeBonus;
      }
    });

    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    const results = {
      score,
      correctAnswers,
      totalQuestions,
      percentage,
      timeTaken: totalTime,
      category: category.name,
      selectedAnswers,
      questions: category.questions
    };

    onQuizComplete(results);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  if (showResults) {
    return <div>Processing results...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Quiz Header */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBackToCategories}
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Categories
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </div>
            <Timer 
              key={currentQuestionIndex}
              initialTime={currentQuestion.timeLimit}
              onTimeUp={handleTimeUp}
              isActive={!showResults}
            />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="absolute top-0 right-0 text-xs text-gray-600 mt-4">
            {Math.round(progress)}% Complete
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-slide-in">
        {/* Category Header */}
        <div className={`${category.color} bg-gradient-to-r p-6 text-white`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-white bg-opacity-20 ${difficultySettings[currentQuestion.difficulty]?.color}`}>
                    {difficultySettings[currentQuestion.difficulty]?.label || 'Medium'}
                  </span>
                  <span className="text-sm opacity-75">
                    {currentQuestion.timeLimit}s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Question Content */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 leading-relaxed">
            {currentQuestion.question}
          </h3>

          {/* Answer Options */}
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`quiz-option ${selectedAnswers[currentQuestionIndex] === index ? 'selected' : ''}`}
              >
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 font-semibold ${
                    selectedAnswers[currentQuestionIndex] === index 
                      ? 'border-primary-600 bg-primary-600 text-white' 
                      : 'border-gray-300 text-gray-500'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-left">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="px-8 pb-8">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <div className="flex items-center space-x-2">
              {category.questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index < currentQuestionIndex
                      ? 'bg-success-500'
                      : index === currentQuestionIndex
                      ? 'bg-primary-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestionIndex] === undefined}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next'}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;