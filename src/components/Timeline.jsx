import React from 'react';
import { motion } from 'framer-motion';

const events = [
  {
    title: 'The Day We Met',
    date: 'January 20, 2025',
    subtitle: 'My first day at the office',
    description:
      'I was nervous, new, and had no idea what I was doing. Then I saw you, and suddenly everything felt a little less scary. I didn\'t know it then, but that was the day my life changed.',
  },
  {
    title: 'We Actually Talked',
    date: 'May 1, 2025',
    subtitle: 'That office party',
    description:
      'We finally had a real conversation. Not just work stuff — actual talking. I remember thinking "I want to keep talking to this person forever." And here we are.',
  },
  {
    title: 'Our First Date',
    date: 'May 18, 2025',
    subtitle: 'Movie night',
    description:
      'I was so nervous I probably planned it way too much. But sitting there next to you, I knew I wanted to do this a million more times. With you.',
  },
  {
    title: 'We Said It',
    date: 'May 23, 2025',
    subtitle: 'When we told each other',
    description:
      'All those feelings we\'d been holding back finally came out. We said it. We were together. And it felt like coming home.',
  },
  {
    title: 'Today',
    date: 'December 3, 2025',
    subtitle: 'Your 24th birthday',
    description:
      'Every day with you feels like a gift. You make everything better, brighter, more beautiful. You\'re my favorite person, and I\'m so lucky I get to celebrate you today.',
  },
  {
    title: 'All Our Tomorrows',
    date: 'Every day after this',
    subtitle: 'Our story continues',
    description:
      'More laughs, more late nights, more everything. I can\'t wait to see what we do next. I can\'t wait to keep writing our story with you.',
  },
];

const Timeline = () => {
  return (
    <section className="min-h-screen py-20 px-4 relative bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-pink-500/70 mb-3 tracking-wide">
            Our story so far
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Got Here
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            From January 20th, 2025 to right now — every moment has been special.
          </p>
        </motion.div>

        <div className="relative">
          {/* Organic, hand-drawn style line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-pink-300/60 via-yellow-300/40 to-pink-300/60" 
                 style={{ 
                   width: '2px',
                   filter: 'blur(0.5px)',
                   boxShadow: '0 0 2px rgba(236, 72, 153, 0.3)'
                 }} 
            />
          </div>

          <div className="space-y-16 md:space-y-20">
            {events.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="relative"
                >
                  <div
                    className={[
                      'md:w-1/2',
                      'pl-12 pr-4',
                      isLeft ? 'md:ml-0 md:mr-auto md:pr-12' : 'md:ml-auto md:mr-0 md:pl-12',
                    ].join(' ')}
                  >
                    {/* Timeline dot - more organic */}
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 md:left-0 md:translate-x-0 md:top-8 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="relative"
                      >
                        <div className="w-5 h-5 rounded-full bg-white border-3 border-pink-400 shadow-lg relative">
                          <div className="absolute inset-0 rounded-full bg-pink-300/40 blur-md"></div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Card with more personality */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="bg-white rounded-xl border border-pink-100/60 shadow-sm px-6 py-6 md:px-8 md:py-7 relative"
                    >
                      <p className="text-xs text-pink-500/70 mb-2 tracking-wide">
                        {item.date}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-pink-600 mb-3 italic">
                        {item.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed" style={{ lineHeight: '1.8' }}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;