import React, { useState, useEffect } from 'react';
import { quizData } from './data/quizData';
import CategorySelection from './components/CategorySelection';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Header from './components/Header';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [currentView, setCurrentView] = useState('loading'); // 'loading', 'categories', 'quiz', 'results'
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quizResults, setQuizResults] = useState(null);
  const [userStats, setUserStats] = useState({
    totalQuizzes: 0,
    totalScore: 0,
    achievements: [],
    categoriesCompleted: []
  });

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setCurrentView('categories');
    }, 2000);

    // Load user stats from localStorage
    const savedStats = localStorage.getItem('quizAppStats');
    if (savedStats) {
      setUserStats(JSON.parse(savedStats));
    }

    return () => clearTimeout(timer);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (results) => {
    setQuizResults(results);
    
    // Update user stats
    const newStats = {
      ...userStats,
      totalQuizzes: userStats.totalQuizzes + 1,
      totalScore: userStats.totalScore + results.score,
      categoriesCompleted: [...new Set([...userStats.categoriesCompleted, selectedCategory.id])]
    };

    // Check for achievements
    const newAchievements = checkAchievements(results, newStats);
    newStats.achievements = [...new Set([...userStats.achievements, ...newAchievements])];

    setUserStats(newStats);
    localStorage.setItem('quizAppStats', JSON.stringify(newStats));
    
    setCurrentView('results');
  };

  const checkAchievements = (results, stats) => {
    const achievements = [];
    
    if (results.score === results.totalQuestions * 10) {
      achievements.push('perfect-score');
    }
    
    if (results.timeTaken < 120) {
      achievements.push('speed-demon');
    }
    
    if (stats.categoriesCompleted.length >= 5) {
      achievements.push('knowledge-seeker');
    }
    
    if (stats.totalQuizzes >= 10) {
      achievements.push('persistent');
    }
    
    if (results.percentage >= 90) {
      achievements.push('genius');
    }
    
    return achievements;
  };

  const handleBackToCategories = () => {
    setCurrentView('categories');
    setSelectedCategory(null);
    setQuizResults(null);
  };

  const handleRetakeQuiz = () => {
    setCurrentView('quiz');
    setQuizResults(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header userStats={userStats} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {currentView === 'loading' && (
          <LoadingScreen />
        )}
        
        {currentView === 'categories' && (
          <div className="animate-fade-in">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-800 mb-4 animate-bounce-soft">
                🧠 QuizMaster Pro
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Challenge your knowledge across multiple categories and become the ultimate quiz champion! 
                Test yourself with carefully crafted questions and track your progress.
              </p>
            </div>
            
            <CategorySelection 
              categories={quizData.categories} 
              onCategorySelect={handleCategorySelect}
              userStats={userStats}
            />
          </div>
        )}
        
        {currentView === 'quiz' && selectedCategory && (
          <Quiz 
            category={selectedCategory} 
            onQuizComplete={handleQuizComplete}
            onBackToCategories={handleBackToCategories}
          />
        )}
        
        {currentView === 'results' && quizResults && (
          <Results 
            results={quizResults}
            category={selectedCategory}
            onBackToCategories={handleBackToCategories}
            onRetakeQuiz={handleRetakeQuiz}
            userStats={userStats}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
