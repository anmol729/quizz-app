# React + Vite

# 🧠 QuizMaster Pro - The Ultimate Quiz Application

A modern, responsive, and feature-rich quiz application built with React, Vite, and Tailwind CSS v3. No API keys required - all questions are built-in!


## ✨ Features

### 🎯 Core Features
- **10+ Quiz Categories**: General Knowledge, Science & Technology, History, Sports, Geography, Entertainment, Literature & Arts, Mathematics, Food & Culture, Nature & Animals, Space & Astronomy
- **50+ Carefully Crafted Questions**: Each with detailed explanations
- **Timed Questions**: Dynamic time limits based on difficulty
- **Progress Tracking**: Real-time progress bars and statistics
- **Achievement System**: Unlock achievements as you play
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### 🏆 Advanced Features
- **Smart Scoring System**: Points based on difficulty and time taken
- **Local Storage**: Your progress is automatically saved
- **Beautiful UI**: Gradient backgrounds, smooth animations, and modern design
- **Question Review**: See detailed explanations for every question
- **Performance Insights**: Analyze your quiz performance
- **Difficulty Levels**: Easy, Medium, and Hard questions
- **Category Progress**: Track completion across all categories

### 🎨 UI/UX Excellence
- **Tailwind CSS v3**: Beautiful, responsive styling
- **Smooth Animations**: Fade-in, slide-in, and bounce effects
- **Interactive Elements**: Hover effects and transitions
- **Color-Coded System**: Different colors for each category
- **Loading Screens**: Engaging loading experience
- **Achievement Notifications**: Celebration when you unlock achievements

## 🚀 Quick Start

1. **Clone the Repository**
   ```bash
   git clone
   cd quizz-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎮 How to Play

1. **Select a Category**: Choose from 10+ different quiz categories
2. **Answer Questions**: Each question is timed based on difficulty
3. **Track Progress**: Watch your progress bar fill up
4. **Review Results**: See detailed explanations for every question
5. **Unlock Achievements**: Complete challenges to earn badges
6. **Try Again**: Retake quizzes to improve your scores

## 📊 Categories Available

| Category | Icon | Questions | Description |
|----------|------|-----------|-------------|
| General Knowledge | 🧠 | 7 | Test your general knowledge |
| Science & Technology | 🔬 | 5 | Explore science and tech |
| History | 📚 | 5 | Journey through time |
| Sports | ⚽ | 5 | Test your sports knowledge |
| Geography | 🌍 | 5 | Explore the world |
| Entertainment | 🎬 | 7 | Movies, music, and pop culture |
| Literature & Arts | 📖 | 5 | Classic literature and arts |
| Mathematics | 🔢 | 5 | Numbers and equations |
| Food & Culture | 🍕 | 5 | Culinary traditions |
| Nature & Animals | 🦁 | 5 | Wildlife and nature |
| Space & Astronomy | 🚀 | 5 | Explore the cosmos |

**Total: 57 Questions across 10 Categories**

## 🏅 Achievements System

- **Perfect Score** 🏆: Answer all questions correctly
- **Speed Demon** ⚡: Complete a quiz in under 2 minutes
- **Knowledge Seeker** 📖: Complete 5 different categories
- **Persistent** 💪: Complete 10 quizzes
- **Genius** 🧠: Score 90% or higher in hard difficulty

## 🛠️ Technical Details

### Built With
- **React 18+**: Modern React with hooks
- **Vite**: Lightning-fast build tool
- **Tailwind CSS v3**: Utility-first CSS framework
- **Local Storage**: For persistent user data

### Project Structure
```
src/
├── components/          # React components
│   ├── CategorySelection.jsx
│   ├── Quiz.jsx
│   ├── Results.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── LoadingScreen.jsx
│   ├── Timer.jsx
│   ├── ProgressBar.jsx
│   └── AchievementButton.jsx
├── data/
│   └── quizData.js     # All quiz questions and data
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Tailwind CSS imports and custom styles
```

### Key Features Implementation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: React hooks (useState, useEffect)
- **Timer System**: Custom countdown timers for each question
- **Local Storage**: Automatic saving of user progress and statistics
- **Component Architecture**: Modular, reusable components

## 🎨 Customization

The app is highly customizable:

1. **Add New Categories**: Edit `src/data/quizData.js`
2. **Change Colors**: Modify Tailwind config in `tailwind.config.js`
3. **Add Achievements**: Extend the achievements array
4. **Modify Timing**: Adjust question time limits
5. **Custom Animations**: Add new animations in CSS

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Great experience on tablets
- **Desktop**: Full-featured desktop experience
- **Touch Friendly**: Large buttons and touch targets

## 🔒 Privacy & Data

- **No Backend Required**: Everything runs client-side
- **No API Keys**: All questions are built-in
- **Local Storage Only**: Your data never leaves your device
- **GDPR Compliant**: No tracking or external data collection

## 🚀 Performance

- **Fast Loading**: Optimized bundle size
- **Smooth Animations**: 60fps animations
- **Efficient Rendering**: Minimal re-renders
- **Lazy Loading**: Components load as needed

## 📈 Deployment

This app can be deployed to:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use GitHub Actions for deployment
- **Any Static Host**: Upload the build folder

## 🤝 Contributing

Feel free to contribute by:
- Adding new questions and categories
- Improving the UI/UX design
- Adding new features and achievements
- Fixing bugs and optimizing performance
- Writing tests

### Contributing Steps
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Anmol** - [@anmol729](https://github.com/anmol729)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the beautiful styling system
- Vite for the lightning-fast build tool
- All the open-source contributors

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

Enjoy testing your knowledge with QuizMaster Pro! 🧠✨

*If you found this project helpful, please give it a ⭐ on GitHub!*

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
