import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="relative">
          <div className="w-32 h-32 border-8 border-primary-200 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-0 left-0 w-32 h-32 border-8 border-primary-600 rounded-full border-t-transparent animate-spin"></div>
          <div className="absolute top-4 left-4 w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-4xl animate-bounce-soft">🧠</span>
          </div>
        </div>
        
        <div className="mt-8 space-y-2">
          <h2 className="text-3xl font-bold text-gray-800 animate-fade-in">
            QuizMaster Pro
          </h2>
          <p className="text-lg text-gray-600 animate-slide-in">
            Loading your brain challenge...
          </p>
          
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;