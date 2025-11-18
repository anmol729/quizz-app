import React, { useState } from 'react';
import { achievements } from '../data/quizData';

const AchievementModal = ({ isOpen, onClose, userStats }) => {
  if (!isOpen) return null;

  const userAchievements = achievements.filter(achievement => 
    userStats.achievements.includes(achievement.id)
  );

  const unlockedCount = userAchievements.length;
  const totalCount = achievements.length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">🏆 Achievements</h2>
              <p className="text-purple-100 mt-1">
                {unlockedCount} of {totalCount} unlocked
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="w-full bg-purple-400 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          <div className="space-y-4">
            {achievements.map((achievement) => {
              const isUnlocked = userStats.achievements.includes(achievement.id);
              
              return (
                <div
                  key={achievement.id}
                  className={`flex items-center p-4 rounded-lg border-2 transition-all ${
                    isUnlocked
                      ? 'border-green-200 bg-green-50'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className={`text-4xl mr-4 ${isUnlocked ? '' : 'grayscale'}`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg ${isUnlocked ? 'text-green-800' : 'text-gray-600'}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${isUnlocked ? 'text-green-600' : 'text-gray-500'}`}>
                      {achievement.description}
                    </p>
                  </div>
                  
                  {isUnlocked && (
                    <div className="text-green-600 text-2xl">
                      ✅
                    </div>
                  )}
                  
                  {!isUnlocked && (
                    <div className="text-gray-400 text-2xl">
                      🔒
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 border-t">
          <div className="text-center text-sm text-gray-600">
            <p>Complete more quizzes to unlock achievements!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AchievementButton = ({ userStats }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex items-center px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors shadow-lg"
      >
        <span className="text-lg mr-2">🏆</span>
        <span className="hidden sm:inline">Achievements</span>
        <span className="ml-2 bg-purple-500 text-xs px-2 py-1 rounded-full">
          {userStats.achievements.length}
        </span>
      </button>
      
      <AchievementModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userStats={userStats}
      />
    </>
  );
};

export default AchievementButton;