import React from 'react';

const ProgressBar = ({ current, total, color = 'bg-primary-500' }) => {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>Progress</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-500 ease-out rounded-full relative`}
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-30 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;