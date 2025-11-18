import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
                Q
              </div>
              <h3 className="text-xl font-bold">QuizMaster Pro</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The ultimate quiz application to test and improve your knowledge across multiple categories. 
              Challenge yourself and become a quiz champion!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>📚 Multiple Categories</li>
              <li>⏱️ Timed Questions</li>
              <li>🏆 Achievement System</li>
              <li>📊 Progress Tracking</li>
              <li>💡 Detailed Explanations</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li>🧠 General Knowledge</li>
              <li>🔬 Science & Technology</li>
              <li>📚 History</li>
              <li>⚽ Sports</li>
              <li>🌍 Geography</li>
              <li>🎬 Entertainment</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 QuizMaster Pro. Built with React, Vite, and Tailwind CSS. No API keys required!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;