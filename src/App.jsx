import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
      triggerConfetti();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const triggerConfetti = () => {
    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 20, spread: 150, ticks: 50, zIndex: 0, scalar: 0.8 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 20 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 400);
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-white">
      {/* Little hearts floating upwards */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => {
          const startX = Math.random() * window.innerWidth;
          return (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: startX,
                y: window.innerHeight + 100,
                scale: Math.random() * 0.3 + 0.15,
                rotate: 0,
              }}
              animate={{
                y: -150,
                x: startX + (Math.random() * 100 - 50),
                rotate: 360,
              }}
              transition={{
                duration: Math.random() * 8 + 15,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 3,
              }}
            >
              <Heart 
                fill="currentColor" 
                className="text-pink-300/40"
                size={Math.random() * 20 + 16} 
              />
            </motion.div>
          );
        })}
      </div>

      {/* Hero Section - More personal and warm */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center max-w-3xl"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-pink-500/70 mb-4 tracking-wide"
          >
            December 3rd, 2025
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-4 leading-tight"
          >
            <span className="text-7xl md:text-9xl text-pink-600 whitespace-nowrap block mb-2">
              Happy Birthday
            </span>
            <span className="text-5xl md:text-7xl block">Akshita</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="inline-block mb-8 mt-6"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="inline-block"
            >
              <div className="inline-block p-3">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-lg flex items-center justify-center text-5xl md:text-6xl shadow-sm">
                  🌻
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mt-8"
            style={{ lineHeight: '1.8' }}
          >
            Hey you,<br />
            <span className="text-2xl md:text-3xl text-pink-600 font-medium">I made this for you</span><br />
            because you deserve something special. You're not just beautiful, you're kind, 
            thoughtful, and you make everything better just by being you.
          </motion.p>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 text-pink-400/60"
        >
          <p className="text-xs mb-2">scroll down, there's more</p>
          <div className="w-5 h-8 border-2 border-pink-400/50 rounded-full mx-auto flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-2 bg-pink-400/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* I Love Everything About You Section */}
      <section className="min-h-screen py-20 px-4 relative bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm text-pink-500/70 mb-3 tracking-wide">
              Everything about you
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
              I Love Every Single Thing
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { feature: 'Your Face', description: 'I love your face. Every expression, every look, every moment. It\'s the most beautiful face I\'ve ever seen.' },
              { feature: 'Your Hair', description: 'I love your hair. The way it falls, the way it moves. Everything about it is perfect.' },
              { feature: 'Your Nose', description: 'I love your nose. It\'s perfect. Just like everything else about you.' },
              { feature: 'Your Smile', description: 'I love your smile. It lights up my entire world. It\'s my favorite thing to see.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-8"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {item.feature}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed" style={{ lineHeight: '1.8' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-2xl md:text-3xl text-gray-900 font-semibold leading-relaxed" style={{ lineHeight: '1.8' }}>
              I love everything about you.<br />
              Every little detail, every part of you,<br />
              <span className="text-pink-600">everything.</span>
            </p>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mt-12 text-pink-400/60"
        >
          <p className="text-xs mb-2">keep scrolling, there's more love</p>
          <div className="w-5 h-8 border-2 border-pink-400/50 rounded-full mx-auto flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-2 bg-pink-400/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Personal Message Section - Like a handwritten letter */}
      <section className="min-h-screen py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Letter style */}
            <div className="bg-white rounded-lg p-8 md:p-12 border border-gray-200 relative shadow-sm">
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-300"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-300"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-300"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-300"></div>

              <div className="space-y-6 text-gray-800" style={{ lineHeight: '1.9' }}>
                <p className="text-3xl md:text-4xl text-pink-600 mb-6 font-semibold">
                  Dear Akshita,
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  I've been thinking about what to write here, and honestly? Words don't do you justice. 
                  You're the kind of person who makes ordinary days feel special. The way you organize 
                  everything, remember the little things, and care so deeply. It's beautiful.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  Your smile? It literally makes my day. Every single time. And the way you take care 
                  of things, of people, of me... it shows how much you care, and I notice. I really do.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  I am so incredibly proud of you. I'm proud of how you're doing in life. The way you 
                  handle everything with grace and strength. I'm proud of your career, of how hard you work, 
                  of how you never give up. I'm proud of every aspect of your life because you're doing 
                  amazing things, and you're becoming the person you're meant to be.
                </p>

                <p className="text-lg md:text-xl leading-relaxed">
                  Watching you grow, watching you succeed, watching you be you. It fills me with so much 
                  pride and love. You're not just doing well, you're thriving. And I'm here, cheering you 
                  on every step of the way, because I believe in you completely.
                </p>

                <div className="my-8 flex items-center justify-center gap-3">
                  <Heart className="text-red-400 fill-red-300 w-6 h-6" style={{ transform: 'rotate(-15deg)' }} />
                  <Heart className="text-red-400 fill-red-300 w-8 h-8" />
                  <Heart className="text-red-400 fill-red-300 w-6 h-6" style={{ transform: 'rotate(15deg)' }} />
                </div>

                <p className="text-lg md:text-xl leading-relaxed">
                  For your 24th year, I just want you to know how much you matter. To me, to everyone 
                  who knows you. You're strong, you're kind, you're absolutely amazing just as you are, 
                  and I'm so proud to be part of your life.
                </p>

                <p className="text-2xl md:text-3xl text-pink-600 mt-8 text-right font-semibold">
                  With all my love,<br />
                  <span className="text-xl">Aryan</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Love About You */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-sm text-pink-500/70 mb-3 tracking-wide">
              Things I love about you
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Just a Few Reasons
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              (There are way more, but I had to pick some)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Your Heart',
                note: 'You care so much. About everything, about everyone. It\'s one of the first things I noticed about you, and it still amazes me.',
                rotation: -1.5,
                color: 'bg-white'
              },
              {
                title: 'Your Smile',
                note: 'Seriously, your smile is everything. It makes everything better. I could watch you smile all day.',
                rotation: 2,
                color: 'bg-white'
              },
              {
                title: 'How You Organize',
                note: 'The way you keep everything neat and beautiful? It\'s like magic. You make order look easy.',
                rotation: -0.8,
                color: 'bg-white'
              },
              {
                title: 'Your Thoughtfulness',
                note: 'You remember things I forget. You notice things I miss. You make me feel seen and cared for.',
                rotation: 1.2,
                color: 'bg-white'
              },
              {
                title: 'Your Strength',
                note: 'Even when things are hard, you handle it with grace. You\'re strong in the softest way.',
                rotation: -1.8,
                color: 'bg-white'
              },
              {
                title: 'Just... You',
                note: 'Everything. The way you laugh, think, love. You\'re perfect exactly as you are.',
                rotation: 0.5,
                color: 'bg-white'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotate: item.rotation }}
                whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${item.color} p-6 rounded-lg shadow-sm`}
                style={{ transform: `rotate(${item.rotation}deg)` }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                  {item.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yellow Lyrics Section */}
      <section className="py-12 px-4 relative bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              A song for you
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-12"
          >
            <div className="space-y-6 text-gray-800" style={{ lineHeight: '2' }}>
              <p className="text-lg md:text-xl italic text-center text-gray-700">
                Look at the stars<br />
                Look how they shine for you<br />
                And everything you do<br />
                Yeah, they were all yellow
              </p>

              <p className="text-lg md:text-xl italic text-center text-gray-700">
                I came along<br />
                I wrote a song for you<br />
                And all the things you do<br />
                And it was called 'Yellow'
              </p>

              <p className="text-lg md:text-xl italic text-center text-gray-700">
                So then I took my turn<br />
                Oh, what a thing to have done<br />
                And it was all yellow
              </p>

              <div className="my-8 py-6 border-t border-b border-gray-200">
                <p className="text-2xl md:text-3xl font-semibold text-center text-pink-600 leading-relaxed">
                  Your skin<br />
                  Oh yeah, your skin and bones<br />
                  Turn into something beautiful<br />
                  You know, you know I love you so<br />
                  You know I love you so
                </p>
              </div>

              <p className="text-lg md:text-xl italic text-center text-gray-700">
                I swam across<br />
                I jumped across for you<br />
                Oh, what a thing to do<br />
                'Cause you were all yellow
              </p>

              <p className="text-lg md:text-xl italic text-center text-gray-700">
                I drew a line<br />
                I drew a line for you<br />
                Oh, what a thing to do<br />
                And it was all yellow
              </p>

              <div className="my-8 py-6 border-t border-b border-gray-200">
                <p className="text-2xl md:text-3xl font-semibold text-center text-pink-600 leading-relaxed">
                  Your skin<br />
                  Oh yeah, your skin and bones<br />
                  Turn into something beautiful<br />
                  And you know<br />
                  For you, I'd bleed myself dry<br />
                  For you, I'd bleed myself dry
                </p>
              </div>

              <p className="text-lg md:text-xl italic text-center text-gray-700">
                It's true<br />
                Look how they shine for you<br />
                Look how they shine for you<br />
                Look how they shine
              </p>

              <p className="text-lg md:text-xl italic text-center text-gray-700">
                Look at the stars<br />
                Look how they shine for you<br />
                And all the things that you do
              </p>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-0">
                  You are my yellow,
                </p>
                <p className="text-2xl md:text-3xl text-pink-600 font-semibold">
                  Bubujaan
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-center mt-12 text-pink-400/60"
        >
          <p className="text-xs mb-2">our story continues below</p>
          <div className="w-5 h-8 border-2 border-pink-400/50 rounded-full mx-auto flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-2 bg-pink-400/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Relationship Timeline */}
      <Timeline />

      {/* Fun Quiz Section */}
      <Quiz />
    </div>
  );
}

export default App;