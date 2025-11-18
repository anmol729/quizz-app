import React, { useState, useEffect } from 'react';

const Timer = ({ 
  initialTime, 
  onTimeUp, 
  isActive = true, 
  showWarning = true,
  warningTime = 10 
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp && onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getTimerColor = () => {
    if (timeLeft <= warningTime && timeLeft > 0) return 'text-red-600 animate-pulse';
    if (timeLeft <= warningTime * 2) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getProgressColor = () => {
    const percentage = (timeLeft / initialTime) * 100;
    if (percentage <= 25) return 'bg-red-500';
    if (percentage <= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="flex items-center space-x-3">
      <div className={`text-2xl font-bold ${getTimerColor()}`}>
        {formatTime(timeLeft)}
      </div>
      
      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${getProgressColor()}`}
          style={{ width: `${(timeLeft / initialTime) * 100}%` }}
        />
      </div>
      
      {showWarning && timeLeft <= warningTime && timeLeft > 0 && (
        <div className="text-red-600 animate-bounce">
          ⚠️
        </div>
      )}
    </div>
  );
};

export default Timer;