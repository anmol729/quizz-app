import React from 'react';

const CategorySelection = ({ categories, onCategorySelect, userStats }) => {
  const getCategoryProgress = (categoryId) => {
    const completed = userStats.categoriesCompleted.includes(categoryId);
    return completed ? '✅' : '';
  };

  const getCategoryStats = (categoryId) => {
    // This would be more complex in a real app with detailed stats per category
    const completed = userStats.categoriesCompleted.includes(categoryId);
    return completed ? 'Completed' : `${categories.find(c => c.id === categoryId)?.questions.length || 0} Questions`;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-in"
            onClick={() => onCategorySelect(category)}
          >
            <div className="relative overflow-hidden rounded-t-xl">
              <div className={`h-32 ${category.color} bg-gradient-to-br from-opacity-80 to-opacity-100 flex items-center justify-center relative`}>
                <div className="text-6xl opacity-20 absolute top-2 right-2 transform rotate-12">
                  {category.icon}
                </div>
                <div className="text-5xl animate-bounce-soft z-10">
                  {category.icon}
                </div>
                <div className="absolute top-2 left-2 text-white text-sm font-semibold">
                  {getCategoryProgress(category.id)}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {category.questions.length} Q's
                </div>
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-xs text-gray-500 uppercase tracking-wide">
                  {getCategoryStats(category.id)}
                </div>
                <div className="flex items-center text-primary-600 text-sm font-semibold group-hover:text-primary-700">
                  Start Quiz
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Quick Stats Panel */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">📊</span>
          Your Progress
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{userStats.categoriesCompleted.length}</div>
            <div className="text-sm text-blue-700">Categories Completed</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{userStats.totalQuizzes}</div>
            <div className="text-sm text-green-700">Total Quizzes</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{userStats.achievements.length}</div>
            <div className="text-sm text-purple-700">Achievements</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {userStats.totalQuizzes > 0 ? Math.round(userStats.totalScore / userStats.totalQuizzes) : 0}%
            </div>
            <div className="text-sm text-orange-700">Average Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;