import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  {
    id: 1,
    question: 'Who keeps everything organized and beautiful?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation:
      'You, of course! You have this amazing way of making everything look perfect. I\'m always impressed.',
    wrongExplanation: 'Nope! It\'s definitely Akshita. She has this amazing way of making everything look perfect. I\'m always impressed.',
  },
  {
    id: 2,
    question: 'Who\'s the better cook?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You, hands down. Everything you make is incredible. It\'s like magic.',
    wrongExplanation: 'Wrong! It\'s Akshita. Everything she makes is incredible. It\'s like magic.',
  },
  {
    id: 3,
    question: 'Who notices and remembers the little things?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You do. You remember everything, notice everything. It\'s one of the things I love most about you.',
    wrongExplanation: 'Nope! Akshita does. She remembers everything, notices everything. It\'s one of the things I love most about her.',
  },
  {
    id: 4,
    question: 'Who plans ahead and remembers important dates?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. You\'re always thinking ahead, making sure nothing gets forgotten. You make everything better.',
    wrongExplanation: 'Wrong! It\'s Akshita. She\'s always thinking ahead, making sure nothing gets forgotten. She makes everything better.',
  },
  {
    id: 5,
    question: 'Who surprises the other with thoughtful things?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. You do the sweetest things when I least expect it. You make every day feel special.',
    wrongExplanation: 'Nope! It\'s Akshita. She does the sweetest things when I least expect it. She makes every day feel special.',
  },
  {
    id: 6,
    question: 'Who\'s better at taking care of plants?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. Just like everything else, you have this gentle touch that makes things grow and bloom.',
    wrongExplanation: 'Wrong! It\'s Akshita. Just like everything else, she has this gentle touch that makes things grow and bloom.',
  },
  {
    id: 7,
    question: 'Who is more likely to forget where they put their phone?',
    options: ['Aryan', 'Akshita'],
    correct: 0,
    explanation: 'Definitely me! I\'m always losing track of things, but you always know where everything is.',
    wrongExplanation: 'Nope! It\'s Aryan. He\'s always losing track of things, but Akshita always knows where everything is.',
  },
  {
    id: 8,
    question: 'Who is better at making the other laugh?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. Your laugh is my favorite sound, and when you smile, I can\'t help but smile too. You make everything funnier.',
    wrongExplanation: 'Wrong! It\'s Akshita. Her laugh is his favorite sound, and when she smiles, he can\'t help but smile too. She makes everything funnier.',
  },
  {
    id: 9,
    question: 'Who is more likely to stay up late talking?',
    options: ['Aryan', 'Akshita'],
    correct: 0,
    explanation: 'Me! I could talk to you all night. Time just disappears when we\'re together.',
    wrongExplanation: 'Nope! It\'s Aryan. He could talk to her all night. Time just disappears when they\'re together.',
  },
  {
    id: 10,
    question: 'Who remembers what the other said they wanted weeks ago?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. You remember everything I mention, even the smallest things. It\'s one of the things that makes you so special.',
    wrongExplanation: 'Wrong! It\'s Akshita. She remembers everything he mentions, even the smallest things. It\'s one of the things that makes her so special.',
  },
  {
    id: 11,
    question: 'Who is better at choosing what to watch?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. You always pick the best movies and shows. I trust your taste completely.',
    wrongExplanation: 'Nope! It\'s Akshita. She always picks the best movies and shows. He trusts her taste completely.',
  },
  {
    id: 12,
    question: 'Who is more likely to send a good morning text?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. You make every morning better with your messages. It\'s the best way to start the day.',
    wrongExplanation: 'Wrong! It\'s Akshita. She makes every morning better with her messages. It\'s the best way to start the day.',
  },
  {
    id: 13,
    question: 'Who is better at giving compliments?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. You always know the right thing to say to make me feel special. Your words mean everything.',
    wrongExplanation: 'Nope! It\'s Akshita. She always knows the right thing to say to make him feel special. Her words mean everything.',
  },
  {
    id: 14,
    question: 'Who is more likely to plan a surprise?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. You\'re always thinking of ways to make things special. Your surprises are the best.',
    wrongExplanation: 'Wrong! It\'s Akshita. She\'s always thinking of ways to make things special. Her surprises are the best.',
  },
  {
    id: 15,
    question: 'Who makes the other feel most loved?',
    options: ['Aryan', 'Akshita'],
    correct: 1,
    explanation: 'You. Every single day, in a million little ways, you make me feel loved. You\'re amazing.',
    wrongExplanation: 'Nope! It\'s Akshita. Every single day, in a million little ways, she makes him feel loved. She\'s amazing.',
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[current];

  const handleOptionClick = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === currentQuestion.correct) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current === questions.length - 1) {
      setFinished(true);
      return;
    }
    setCurrent((c) => c + 1);
    setSelected(null);
  };

  return (
    <section className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-pink-500/70 mb-3 tracking-wide">
            A little something fun
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Well Do You Know Us?
          </h2>
          <p className="text-gray-600 text-lg">
            Just a quick quiz — nothing serious, just for fun.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {!finished ? (
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-6 text-sm text-pink-500/70">
                    <span className="text-base">
                      Question {current + 1} of {questions.length}
                    </span>
                    <span className="text-base">Score: {score}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    {currentQuestion.question}
                  </h3>
                  
                  <div className="grid gap-4 mb-6">
                    {currentQuestion.options.map((opt, index) => {
                      const isSelected = selected === index;
                      const isCorrect = index === currentQuestion.correct;

                      return (
                        <motion.button
                          key={index}
                          onClick={() => handleOptionClick(index)}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className={[
                            'text-left w-full border-2 rounded-xl px-6 py-4 text-lg transition-all',
                            'bg-white hover:bg-gray-50',
                            'flex items-center gap-4',
                            selected !== null && isCorrect
                              ? 'border-gray-400 bg-gray-50 shadow-md'
                              : '',
                            selected !== null && isSelected && !isCorrect
                              ? 'border-red-300 bg-red-50/40'
                              : '',
                            selected !== null && !isSelected
                              ? 'opacity-60'
                              : 'border-pink-200',
                          ].join(' ')}
                        >
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-pink-300 text-sm font-bold text-pink-600 bg-white">
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className="font-medium">{opt}</span>
                        </motion.button>
                      );
                    })}
                  </div>

                  {selected !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-6 border-l-4 pl-5 py-2 rounded ${
                        selected === currentQuestion.correct
                          ? 'border-gray-400 bg-gray-50 text-gray-800'
                          : 'border-red-300 bg-red-50/20 text-gray-800'
                      }`}
                    >
                      <p className="text-base md:text-lg leading-relaxed">
                        {selected === currentQuestion.correct
                          ? currentQuestion.explanation
                          : currentQuestion.wrongExplanation}
                      </p>
                    </motion.div>
                  )}

                  <div className="mt-8 flex justify-end">
                    <motion.button
                      onClick={handleNext}
                      disabled={selected === null}
                      whileHover={{ scale: selected !== null ? 1.05 : 1 }}
                      whileTap={{ scale: selected !== null ? 0.95 : 1 }}
                      className="px-8 py-3 rounded-full bg-gray-900 text-white text-base font-medium shadow-lg disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none hover:bg-gray-800"
                    >
                      {current === questions.length - 1
                        ? 'See your result'
                        : 'Next →'}
                    </motion.button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-6"
                >
                  <p className="text-sm text-pink-500/70 mb-2">
                    All done!
                  </p>
                  <h3 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
                    You got {score} / {questions.length}
                  </h3>
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <p className="text-lg md:text-xl text-gray-800 max-w-xl mx-auto leading-relaxed mb-4" style={{ lineHeight: '1.8' }}>
                      But honestly? The score doesn't matter. What matters is that you're my forever 
                      favorite person. You're not just good at these things — you're incredible at 
                      everything, and you're even more incredible as a person.
                    </p>
                    <p className="text-xl text-pink-600 max-w-xl mx-auto font-semibold">
                      Happy 24th birthday, Akshita. You mean the world to me.
                    </p>
                  </div>
                  <motion.button
                    onClick={() => {
                      setCurrent(0);
                      setSelected(null);
                      setScore(0);
                      setFinished(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 px-8 py-3 rounded-full border-2 border-gray-300 text-gray-700 text-base font-medium bg-white hover:bg-gray-50 transition-colors"
                  >
                    Play again
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;