import React from 'react';
import AchievementButton from './AchievementButton';

const Header = ({ userStats }) => {
  return (
    <header className="bg-white shadow-lg border-b-4 border-primary-600">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              Q
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">QuizMaster Pro</h1>
              <p className="text-sm text-gray-600">Challenge Your Mind</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">{userStats.totalQuizzes}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Quizzes</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-success-600">
                {userStats.totalQuizzes > 0 ? Math.round(userStats.totalScore / userStats.totalQuizzes) : 0}%
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Avg Score</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{userStats.achievements.length}</div>
              <div className="text-xs text-gray-600 uppercase tracking-wide">Achievements</div>
            </div>
            
            <AchievementButton userStats={userStats} />
          </div>
        </div>
        
        {/* Mobile stats */}
        <div className="md:hidden mt-4 flex justify-around text-center">
          <div>
            <div className="text-lg font-bold text-primary-600">{userStats.totalQuizzes}</div>
            <div className="text-xs text-gray-600">Quizzes</div>
          </div>
          <div>
            <div className="text-lg font-bold text-success-600">
              {userStats.totalQuizzes > 0 ? Math.round(userStats.totalScore / userStats.totalQuizzes) : 0}%
            </div>
            <div className="text-xs text-gray-600">Avg Score</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-600">{userStats.achievements.length}</div>
            <div className="text-xs text-gray-600">Achievements</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;