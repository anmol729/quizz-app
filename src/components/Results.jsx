import React from 'react';
import { achievements, difficultySettings } from '../data/quizData';

const Results = ({ results, category, onBackToCategories, onRetakeQuiz, userStats }) => {
  const getGradeInfo = (percentage) => {
    if (percentage >= 90) return { grade: 'A+', color: 'text-green-600', bg: 'bg-green-100', message: 'Outstanding! You\'re a true expert!' };
    if (percentage >= 80) return { grade: 'A', color: 'text-green-500', bg: 'bg-green-50', message: 'Excellent work! Great knowledge!' };
    if (percentage >= 70) return { grade: 'B', color: 'text-blue-500', bg: 'bg-blue-50', message: 'Good job! Well done!' };
    if (percentage >= 60) return { grade: 'C', color: 'text-yellow-500', bg: 'bg-yellow-50', message: 'Not bad! Keep improving!' };
    return { grade: 'D', color: 'text-red-500', bg: 'bg-red-50', message: 'Keep practicing! You\'ll get better!' };
  };

  const gradeInfo = getGradeInfo(results.percentage);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
  };

  const getNewAchievements = () => {
    const newAchievements = [];
    
    if (results.percentage === 100) {
      newAchievements.push(achievements.find(a => a.id === 'perfect-score'));
    }
    
    if (results.timeTaken < 120) {
      newAchievements.push(achievements.find(a => a.id === 'speed-demon'));
    }
    
    if (results.percentage >= 90) {
      newAchievements.push(achievements.find(a => a.id === 'genius'));
    }
    
    return newAchievements.filter(Boolean);
  };

  const newAchievements = getNewAchievements();

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      {/* Results Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div className={`w-32 h-32 ${gradeInfo.bg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
            <span className={`text-4xl font-bold ${gradeInfo.color}`}>{gradeInfo.grade}</span>
          </div>
          {results.percentage === 100 && (
            <div className="absolute -top-2 -right-2 text-4xl animate-bounce">🏆</div>
          )}
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
        <p className={`text-xl ${gradeInfo.color} font-semibold`}>{gradeInfo.message}</p>
      </div>

      {/* Score Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-1">{results.percentage}%</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Score</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-success-600 mb-1">
              {results.correctAnswers}/{results.totalQuestions}
            </div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Correct</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">{formatTime(results.timeTaken)}</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Time</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">{results.score}</div>
            <div className="text-sm text-gray-600 uppercase tracking-wide">Points</div>
          </div>
        </div>
      </div>

      {/* New Achievements */}
      {newAchievements.length > 0 && (
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg p-6 mb-6 text-white animate-bounce-soft">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <span className="text-2xl mr-2">🎉</span>
            New Achievements Unlocked!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {newAchievements.map((achievement, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{achievement.icon}</span>
                  <div>
                    <div className="font-bold">{achievement.name}</div>
                    <div className="text-sm opacity-75">{achievement.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Question Review */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="text-2xl mr-2">📝</span>
          Question Review
        </h3>
        
        <div className="space-y-6">
          {results.questions.map((question, index) => {
            const selectedAnswer = results.selectedAnswers[index];
            const isCorrect = selectedAnswer === question.correctAnswer;
            const wasAnswered = selectedAnswer !== undefined;
            
            return (
              <div key={index} className="border rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                        isCorrect ? 'bg-success-500' : wasAnswered ? 'bg-error-500' : 'bg-gray-500'
                      }`}>
                        {index + 1}
                      </span>
                      <div className={`px-2 py-1 rounded text-xs font-semibold ${
                        difficultySettings[question.difficulty]?.color || 'text-gray-600'
                      }`}>
                        {difficultySettings[question.difficulty]?.label || 'Medium'}
                      </div>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-3">{question.question}</h4>
                  </div>
                  <div className="text-right">
                    {isCorrect && <span className="text-success-500 text-2xl">✅</span>}
                    {!isCorrect && wasAnswered && <span className="text-error-500 text-2xl">❌</span>}
                    {!wasAnswered && <span className="text-gray-400 text-2xl">⏰</span>}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`p-3 rounded-lg border-2 text-sm ${
                        optionIndex === question.correctAnswer
                          ? 'border-success-500 bg-success-100 text-success-800'
                          : optionIndex === selectedAnswer && selectedAnswer !== question.correctAnswer
                          ? 'border-error-500 bg-error-100 text-error-800'
                          : 'border-gray-200 bg-gray-50'
                      }`}
                    >
                      <span className="font-semibold">{String.fromCharCode(65 + optionIndex)}.</span> {option}
                      {optionIndex === question.correctAnswer && (
                        <span className="ml-2 text-success-600">✓ Correct</span>
                      )}
                      {optionIndex === selectedAnswer && selectedAnswer !== question.correctAnswer && (
                        <span className="ml-2 text-error-600">✗ Your answer</span>
                      )}
                    </div>
                  ))}
                </div>
                
                {question.explanation && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-blue-800 text-sm">
                      <span className="font-semibold">💡 Explanation:</span> {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRetakeQuiz}
          className="btn-primary flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Retake Quiz
        </button>
        
        <button
          onClick={onBackToCategories}
          className="btn-secondary flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          </svg>
          Try Another Category
        </button>
      </div>

      {/* Performance Insights */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">📈</span>
          Performance Insights
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-lg p-4">
            <div className="font-semibold text-gray-700 mb-1">Speed</div>
            <div className="text-gray-600">
              {results.timeTaken < 120 ? '⚡ Lightning fast!' : results.timeTaken < 300 ? '👍 Good pace' : '🐢 Take your time'}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="font-semibold text-gray-700 mb-1">Accuracy</div>
            <div className="text-gray-600">
              {results.percentage >= 90 ? '🎯 Exceptional' : results.percentage >= 70 ? '✅ Solid' : '📚 Keep studying'}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="font-semibold text-gray-700 mb-1">Category Progress</div>
            <div className="text-gray-600">
              {userStats.categoriesCompleted.includes(category.id) ? '🔄 Mastered' : '🆕 First attempt'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;