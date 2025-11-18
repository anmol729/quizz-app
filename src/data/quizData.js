export const quizData = {
  categories: [
    {
      id: 'general-knowledge',
      name: 'General Knowledge',
      icon: '🧠',
      description: 'Test your general knowledge across various topics',
      color: 'bg-blue-500',
      questions: [
        {
          id: 1,
          question: "What is the capital of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
          correctAnswer: 2,
          explanation: "Canberra is the capital city of Australia, not Sydney which is the most populous city.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 2,
          question: "Which planet is known as the 'Red Planet'?",
          options: ["Venus", "Mars", "Jupiter", "Mercury"],
          correctAnswer: 1,
          explanation: "Mars is called the Red Planet due to its reddish appearance caused by iron oxide on its surface.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 3,
          question: "Who painted the Mona Lisa?",
          options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
          correctAnswer: 2,
          explanation: "The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 4,
          question: "What is the smallest country in the world?",
          options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
          correctAnswer: 1,
          explanation: "Vatican City is the smallest sovereign state in the world with an area of 0.17 square miles.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 5,
          question: "Which element has the chemical symbol 'O'?",
          options: ["Gold", "Silver", "Oxygen", "Osmium"],
          correctAnswer: 2,
          explanation: "Oxygen is represented by the chemical symbol 'O' on the periodic table.",
          difficulty: "easy",
          timeLimit: 30
        }
      ]
    },
    {
      id: 'science',
      name: 'Science & Technology',
      icon: '🔬',
      description: 'Explore the wonders of science and modern technology',
      color: 'bg-green-500',
      questions: [
        {
          id: 6,
          question: "What is the speed of light in vacuum?",
          options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"],
          correctAnswer: 0,
          explanation: "The speed of light in vacuum is exactly 299,792,458 meters per second.",
          difficulty: "hard",
          timeLimit: 60
        },
        {
          id: 7,
          question: "Which programming language was created by Guido van Rossum?",
          options: ["Java", "Python", "C++", "JavaScript"],
          correctAnswer: 1,
          explanation: "Python was created by Guido van Rossum and first released in 1991.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 8,
          question: "What does DNA stand for?",
          options: ["Deoxyribonucleic Acid", "Dynamic Nuclear Acid", "Dinitrogen Acid", "Deoxy Nuclear Acid"],
          correctAnswer: 0,
          explanation: "DNA stands for Deoxyribonucleic Acid, which carries genetic information.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 9,
          question: "Which company developed the first iPhone?",
          options: ["Samsung", "Apple", "Google", "Microsoft"],
          correctAnswer: 1,
          explanation: "Apple developed and released the first iPhone in 2007.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 10,
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Ribosome", "Mitochondria", "Cytoplasm"],
          correctAnswer: 2,
          explanation: "Mitochondria are known as the powerhouse of the cell because they produce ATP energy.",
          difficulty: "medium",
          timeLimit: 45
        }
      ]
    },
    {
      id: 'history',
      name: 'History',
      icon: '📚',
      description: 'Journey through the ages of human civilization',
      color: 'bg-purple-500',
      questions: [
        {
          id: 11,
          question: "In which year did World War II end?",
          options: ["1944", "1945", "1946", "1947"],
          correctAnswer: 1,
          explanation: "World War II ended in 1945 with the surrender of Japan in September.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 12,
          question: "Who was the first President of the United States?",
          options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
          correctAnswer: 2,
          explanation: "George Washington was the first President of the United States, serving from 1789 to 1797.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 13,
          question: "Which ancient wonder was located in Alexandria?",
          options: ["Hanging Gardens", "Lighthouse of Alexandria", "Colossus of Rhodes", "Temple of Artemis"],
          correctAnswer: 1,
          explanation: "The Lighthouse of Alexandria (Pharos of Alexandria) was one of the Seven Wonders of the Ancient World.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 14,
          question: "The Berlin Wall fell in which year?",
          options: ["1987", "1988", "1989", "1990"],
          correctAnswer: 2,
          explanation: "The Berlin Wall fell on November 9, 1989, symbolizing the end of the Cold War.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 15,
          question: "Who was known as the 'Iron Lady'?",
          options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
          correctAnswer: 1,
          explanation: "Margaret Thatcher, the former Prime Minister of the UK, was known as the 'Iron Lady'.",
          difficulty: "medium",
          timeLimit: 45
        }
      ]
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: '⚽',
      description: 'Test your knowledge of sports and athletics',
      color: 'bg-orange-500',
      questions: [
        {
          id: 16,
          question: "How many players are on a basketball team on the court at one time?",
          options: ["4", "5", "6", "7"],
          correctAnswer: 1,
          explanation: "Each basketball team has 5 players on the court at any given time.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 17,
          question: "Which country has won the most FIFA World Cups?",
          options: ["Germany", "Argentina", "Brazil", "Italy"],
          correctAnswer: 2,
          explanation: "Brazil has won the FIFA World Cup 5 times (1958, 1962, 1970, 1994, 2002).",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 18,
          question: "What is the maximum score possible in ten-pin bowling?",
          options: ["250", "270", "300", "350"],
          correctAnswer: 2,
          explanation: "A perfect game in ten-pin bowling consists of 12 strikes for a total score of 300.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 19,
          question: "In which sport would you perform a slam dunk?",
          options: ["Volleyball", "Basketball", "Tennis", "Baseball"],
          correctAnswer: 1,
          explanation: "A slam dunk is a basketball shot where a player jumps and forcefully puts the ball through the hoop.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 20,
          question: "How many Grand Slam tournaments are there in tennis?",
          options: ["3", "4", "5", "6"],
          correctAnswer: 1,
          explanation: "There are 4 Grand Slam tournaments: Australian Open, French Open, Wimbledon, and US Open.",
          difficulty: "medium",
          timeLimit: 45
        }
      ]
    },
    {
      id: 'geography',
      name: 'Geography',
      icon: '🌍',
      description: 'Explore the world and its diverse landscapes',
      color: 'bg-teal-500',
      questions: [
        {
          id: 21,
          question: "Which is the longest river in the world?",
          options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
          correctAnswer: 1,
          explanation: "The Nile River is the longest river in the world at approximately 6,650 kilometers.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 22,
          question: "What is the smallest continent by area?",
          options: ["Europe", "Australia", "Antarctica", "South America"],
          correctAnswer: 1,
          explanation: "Australia is the smallest continent by area, covering about 8.6 million square kilometers.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 23,
          question: "Which mountain range contains Mount Everest?",
          options: ["Andes", "Rockies", "Alps", "Himalayas"],
          correctAnswer: 3,
          explanation: "Mount Everest is located in the Himalayas on the border between Nepal and Tibet.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 24,
          question: "Which country has the most time zones?",
          options: ["Russia", "United States", "China", "France"],
          correctAnswer: 3,
          explanation: "France has the most time zones (12) due to its overseas territories around the world.",
          difficulty: "hard",
          timeLimit: 60
        },
        {
          id: 25,
          question: "What is the deepest ocean trench?",
          options: ["Puerto Rico Trench", "Japan Trench", "Mariana Trench", "Peru-Chile Trench"],
          correctAnswer: 2,
          explanation: "The Mariana Trench is the deepest known part of Earth's oceans, reaching depths of over 11,000 meters.",
          difficulty: "medium",
          timeLimit: 45
        }
      ]
    },
    {
      id: 'entertainment',
      name: 'Entertainment',
      icon: '🎬',
      description: 'Movies, music, and pop culture knowledge',
      color: 'bg-pink-500',
      questions: [
        {
          id: 26,
          question: "Which movie won the Academy Award for Best Picture in 2020?",
          options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
          correctAnswer: 2,
          explanation: "Parasite won the Academy Award for Best Picture in 2020, becoming the first non-English film to win.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 27,
          question: "Who composed the music for 'The Lord of the Rings' trilogy?",
          options: ["John Williams", "Hans Zimmer", "Howard Shore", "Danny Elfman"],
          correctAnswer: 2,
          explanation: "Howard Shore composed the epic music score for The Lord of the Rings trilogy.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 28,
          question: "Which TV series features the character Walter White?",
          options: ["The Sopranos", "Breaking Bad", "Better Call Saul", "Dexter"],
          correctAnswer: 1,
          explanation: "Walter White is the main character in the TV series Breaking Bad.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 29,
          question: "What is the highest-grossing film of all time (as of 2023)?",
          options: ["Titanic", "Avatar", "Avengers: Endgame", "Avatar: The Way of Water"],
          correctAnswer: 1,
          explanation: "Avatar (2009) is the highest-grossing film of all time with over $2.9 billion worldwide.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 30,
          question: "Which band released the album 'Abbey Road'?",
          options: ["The Rolling Stones", "Led Zeppelin", "The Beatles", "Pink Floyd"],
          correctAnswer: 2,
          explanation: "Abbey Road is the eleventh studio album by The Beatles, released in 1969.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 31,
          question: "What is the largest organ in the human body?",
          options: ["Heart", "Liver", "Skin", "Brain"],
          correctAnswer: 2,
          explanation: "The skin is the largest organ in the human body, covering the entire body surface.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 32,
          question: "Which gas makes up about 78% of Earth's atmosphere?",
          options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
          correctAnswer: 2,
          explanation: "Nitrogen makes up about 78% of Earth's atmosphere, while oxygen is about 21%.",
          difficulty: "medium",
          timeLimit: 45
        }
      ]
    },
    {
      id: 'literature',
      name: 'Literature & Arts',
      icon: '📖',
      description: 'Classic literature, poetry, and artistic masterpieces',
      color: 'bg-indigo-500',
      questions: [
        {
          id: 33,
          question: "Who wrote the novel '1984'?",
          options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "H.G. Wells"],
          correctAnswer: 2,
          explanation: "George Orwell wrote the dystopian novel '1984', published in 1949.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 34,
          question: "Which Shakespeare play features the characters Romeo and Juliet?",
          options: ["Hamlet", "Romeo and Juliet", "Macbeth", "Othello"],
          correctAnswer: 1,
          explanation: "Romeo and Juliet is a tragedy written by William Shakespeare about two young star-crossed lovers.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 35,
          question: "Who painted 'Starry Night'?",
          options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Salvador Dalí"],
          correctAnswer: 1,
          explanation: "Vincent van Gogh painted 'The Starry Night' in 1889 while at an asylum in France.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 36,
          question: "What is the first book in the Harry Potter series?",
          options: ["Chamber of Secrets", "Philosopher's Stone", "Prisoner of Azkaban", "Goblet of Fire"],
          correctAnswer: 1,
          explanation: "Harry Potter and the Philosopher's Stone (or Sorcerer's Stone in the US) is the first book.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 37,
          question: "Who composed 'The Four Seasons'?",
          options: ["Bach", "Mozart", "Vivaldi", "Beethoven"],
          correctAnswer: 2,
          explanation: "Antonio Vivaldi composed 'The Four Seasons', a group of four violin concertos.",
          difficulty: "medium",
          timeLimit: 45
        }
      ]
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: '🔢',
      description: 'Numbers, equations, and mathematical concepts',
      color: 'bg-red-500',
      questions: [
        {
          id: 38,
          question: "What is the value of π (pi) to two decimal places?",
          options: ["3.14", "3.16", "3.12", "3.15"],
          correctAnswer: 0,
          explanation: "Pi (π) is approximately 3.14159..., so to two decimal places it's 3.14.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 39,
          question: "What is 12 squared?",
          options: ["124", "144", "132", "156"],
          correctAnswer: 1,
          explanation: "12 squared (12²) = 12 × 12 = 144.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 40,
          question: "What is the derivative of x²?",
          options: ["x", "2x", "x²", "2"],
          correctAnswer: 1,
          explanation: "The derivative of x² with respect to x is 2x, using the power rule.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 41,
          question: "What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ...?",
          options: ["11", "12", "13", "14"],
          correctAnswer: 2,
          explanation: "In the Fibonacci sequence, each number is the sum of the two preceding ones: 5 + 8 = 13.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 42,
          question: "What is the square root of 256?",
          options: ["14", "15", "16", "17"],
          correctAnswer: 2,
          explanation: "The square root of 256 is 16, because 16 × 16 = 256.",
          difficulty: "easy",
          timeLimit: 30
        }
      ]
    },
    {
      id: 'food-culture',
      name: 'Food & Culture',
      icon: '🍕',
      description: 'Culinary traditions and cultural knowledge',
      color: 'bg-yellow-500',
      questions: [
        {
          id: 43,
          question: "Which country is famous for inventing pizza?",
          options: ["France", "Spain", "Italy", "Greece"],
          correctAnswer: 2,
          explanation: "Italy, specifically Naples, is credited with inventing modern pizza in the 18th century.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 44,
          question: "What spice is derived from the Crocus flower?",
          options: ["Turmeric", "Saffron", "Paprika", "Cardamom"],
          correctAnswer: 1,
          explanation: "Saffron is derived from the flower of Crocus sativus and is one of the world's most expensive spices.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 45,
          question: "Which Asian country is the origin of sushi?",
          options: ["China", "Korea", "Japan", "Thailand"],
          correctAnswer: 2,
          explanation: "Sushi originated in Japan, though it evolved from a Chinese preservation method.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 46,
          question: "What is the main ingredient in guacamole?",
          options: ["Tomato", "Onion", "Avocado", "Lime"],
          correctAnswer: 2,
          explanation: "Avocado is the main ingredient in guacamole, a dip that originated in Mexico.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 47,
          question: "Which country celebrates Oktoberfest?",
          options: ["Austria", "Germany", "Netherlands", "Belgium"],
          correctAnswer: 1,
          explanation: "Oktoberfest is a famous beer festival that originated in Munich, Germany.",
          difficulty: "easy",
          timeLimit: 30
        }
      ]
    },
    {
      id: 'nature-animals',
      name: 'Nature & Animals',
      icon: '🦁',
      description: 'Wildlife, nature, and the animal kingdom',
      color: 'bg-emerald-500',
      questions: [
        {
          id: 48,
          question: "What is the fastest land animal?",
          options: ["Lion", "Cheetah", "Leopard", "Gazelle"],
          correctAnswer: 1,
          explanation: "The cheetah is the fastest land animal, capable of reaching speeds up to 70 mph (112 km/h).",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 49,
          question: "Which animal is known as the 'King of the Jungle'?",
          options: ["Tiger", "Lion", "Elephant", "Gorilla"],
          correctAnswer: 1,
          explanation: "The lion is traditionally known as the 'King of the Jungle', though lions actually live in grasslands.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 50,
          question: "How many hearts does an octopus have?",
          options: ["1", "2", "3", "4"],
          correctAnswer: 2,
          explanation: "An octopus has three hearts: two pump blood to the gills, and one pumps blood to the rest of the body.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 51,
          question: "Which bird is known for its ability to mimic human speech?",
          options: ["Eagle", "Parrot", "Owl", "Peacock"],
          correctAnswer: 1,
          explanation: "Parrots, especially African Grey parrots, are known for their exceptional ability to mimic human speech.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 52,
          question: "What is the largest mammal in the world?",
          options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
          correctAnswer: 1,
          explanation: "The blue whale is the largest mammal and the largest animal ever known to have lived on Earth.",
          difficulty: "medium",
          timeLimit: 45
        }
      ]
    },
    {
      id: 'space-astronomy',
      name: 'Space & Astronomy',
      icon: '🚀',
      description: 'Explore the cosmos and celestial bodies',
      color: 'bg-slate-600',
      questions: [
        {
          id: 53,
          question: "Which planet is closest to the Sun?",
          options: ["Venus", "Earth", "Mercury", "Mars"],
          correctAnswer: 2,
          explanation: "Mercury is the closest planet to the Sun in our solar system.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 54,
          question: "What is the name of our galaxy?",
          options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
          correctAnswer: 1,
          explanation: "Our galaxy is called the Milky Way, named for its appearance as a milky band of light in the night sky.",
          difficulty: "easy",
          timeLimit: 30
        },
        {
          id: 55,
          question: "Who was the first human to walk on the Moon?",
          options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Yuri Gagarin"],
          correctAnswer: 1,
          explanation: "Neil Armstrong was the first human to walk on the Moon on July 20, 1969, during the Apollo 11 mission.",
          difficulty: "medium",
          timeLimit: 45
        },
        {
          id: 56,
          question: "How many moons does Jupiter have (approximately)?",
          options: ["12", "50", "80", "100"],
          correctAnswer: 2,
          explanation: "Jupiter has 79 known moons as of recent discoveries, making it approximately 80 moons.",
          difficulty: "hard",
          timeLimit: 60
        },
        {
          id: 57,
          question: "What is the hottest planet in our solar system?",
          options: ["Mercury", "Venus", "Earth", "Mars"],
          correctAnswer: 1,
          explanation: "Venus is the hottest planet due to its thick atmosphere that traps heat, despite Mercury being closer to the Sun.",
          difficulty: "medium",
          timeLimit: 45
        }
      ]
    }
  ]
};

export const difficultySettings = {
  easy: {
    timeBonus: 10,
    color: 'text-green-600',
    label: 'Easy'
  },
  medium: {
    timeBonus: 20,
    color: 'text-yellow-600',
    label: 'Medium'
  },
  hard: {
    timeBonus: 30,
    color: 'text-red-600',
    label: 'Hard'
  }
};

export const achievements = [
  { id: 'perfect-score', name: 'Perfect Score', description: 'Answer all questions correctly', icon: '🏆' },
  { id: 'speed-demon', name: 'Speed Demon', description: 'Complete a quiz in under 2 minutes', icon: '⚡' },
  { id: 'knowledge-seeker', name: 'Knowledge Seeker', description: 'Complete 5 different categories', icon: '📖' },
  { id: 'persistent', name: 'Persistent', description: 'Complete 10 quizzes', icon: '💪' },
  { id: 'genius', name: 'Genius', description: 'Score 90% or higher in hard difficulty', icon: '🧠' }
];