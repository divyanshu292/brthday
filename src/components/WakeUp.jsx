import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Coffee, Sparkles, Heart, Sun, Moon, Zap } from 'lucide-react';

const WakeUp = () => {
  const [clicks, setClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [energyLevel, setEnergyLevel] = useState(0);
  const [messages, setMessages] = useState([]);

  const wakeUpMessages = [
    "Wake up, sleepyhead! ☕",
    "You've got this! 💪",
    "Coffee time! ☕",
    "You're amazing! ✨",
    "Just a few more clicks! 🎯",
    "Almost there! 🌟",
    "You're doing great! 💖",
    "Keep going! 🚀",
    "You're so close! ⭐",
    "You're the best! 🌈"
  ];

  const handleClick = () => {
    setClicks(c => c + 1);
    setEnergyLevel(e => Math.min(e + 10, 100));
    
    // Add random message
    const randomMsg = wakeUpMessages[Math.floor(Math.random() * wakeUpMessages.length)];
    setMessages(prev => [...prev, { id: Date.now(), text: randomMsg }]);
    
    // Trigger confetti on certain clicks
    if (clicks % 5 === 0) {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
    
    // Show special message at 20 clicks
    if (clicks === 19) {
      setTimeout(() => setShowMessage(true), 500);
    }
  };

  // Auto-hide messages after 3 seconds
  useEffect(() => {
    if (messages.length > 0) {
      const timer = setTimeout(() => {
        setMessages(prev => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-orange-50 py-20 px-4 relative overflow-hidden">
      {/* Floating coffee cups */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: 0,
            }}
            animate={{
              y: -150,
              x: Math.random() * window.innerWidth,
              rotate: 360,
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5,
            }}
          >
            <Coffee 
              className="text-amber-400/30"
              size={Math.random() * 30 + 20} 
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="inline-block mb-6"
          >
            <Moon className="text-indigo-400 w-16 h-16" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Hey Sleepy Head! 😴
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            December 19th, 2025
          </p>
          <p className="text-lg text-gray-600">
            I see you're a little tired... Let's fix that! ☕
          </p>
        </motion.div>

        {/* Energy Meter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border-2 border-pink-200"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Zap className="text-yellow-500 w-6 h-6" />
              <span className="text-xl font-bold text-gray-900">Energy Level</span>
            </div>
            <span className="text-2xl font-bold text-pink-600">{energyLevel}%</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 rounded-full flex items-center justify-center"
              initial={{ width: 0 }}
              animate={{ width: `${energyLevel}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {energyLevel > 20 && (
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-white text-sm font-bold"
                >
                  {energyLevel >= 100 ? "FULLY CHARGED! ⚡" : "Charging..."}
                </motion.span>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Main Interactive Button */}
        <motion.div className="text-center mb-8">
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white px-12 py-6 rounded-full text-2xl font-bold shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-3">
                <Coffee className="w-8 h-8" />
                <span>Click for Energy!</span>
                <Sparkles className="w-8 h-8" />
              </div>
            </motion.div>
            
            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-white opacity-30"
              initial={{ scale: 0, opacity: 0.5 }}
              animate={clicks > 0 ? { scale: 2, opacity: 0 } : {}}
              transition={{ duration: 0.6 }}
            />
          </motion.button>
          
          <p className="text-gray-600 mt-4 text-lg">
            Clicks: <span className="font-bold text-pink-600">{clicks}</span>
          </p>
        </motion.div>

        {/* Floating Messages */}
        <div className="relative h-32 mb-8">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                className="absolute left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg border-2 border-pink-200"
              >
                <p className="text-lg font-semibold text-gray-800">{msg.text}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Special Message */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-2xl p-8 text-white text-center shadow-2xl mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <Sun className="w-16 h-16" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                You're Awake Now! 🌟
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed">
                I hope this made you smile! 😊<br />
                You're doing amazing, even when you're sleepy.<br />
                <span className="font-bold">You've got this! 💪</span>
              </p>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="mt-6 inline-block"
              >
                <Heart className="w-12 h-12 fill-white" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Fun Facts Section */}
        {clicks >= 10 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Fun Facts to Keep You Going! 💡
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Coffee was discovered by a goat herder in Ethiopia! 🐐",
                "Yawning helps cool your brain! 🧠",
                "Laughing burns calories! 😂",
                "You're amazing just the way you are! ✨"
              ].map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg p-4 border border-pink-200"
                >
                  <p className="text-gray-800">{fact}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Final Message */}
        {energyLevel >= 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-20 h-20 text-yellow-400 mx-auto mb-4" />
            </motion.div>
            <p className="text-3xl font-bold text-gray-900 mb-2">
              FULLY ENERGIZED! ⚡
            </p>
            <p className="text-xl text-gray-700">
              Now go show the world what you've got! 🌟
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WakeUp;

