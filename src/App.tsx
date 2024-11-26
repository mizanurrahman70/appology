import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, HeartCrack, Sparkles } from 'lucide-react';
import FloatingHearts from './components/FloatingHearts';
import MessageBubble from './components/MessageBubble';

const APOLOGY_MESSAGES = [
  "I'm truly sorry for hurting you",
  "You mean the world to me",
  "Please forgive me",
  "I promise to do better",
  "My heart aches without you"
];

function App() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [hearts, setHearts] = useState<{ x: number; y: number }[]>([]);

  const handleHeartClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHearts([...hearts, { x, y }]);
    
    if (messageIndex < APOLOGY_MESSAGES.length - 1) {
      setMessageIndex(prev => prev + 1);
    } else if (!showFinalMessage) {
      setShowFinalMessage(true);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-rose-100 via-purple-50 to-blue-100 relative overflow-hidden cursor-pointer"
      onClick={handleHeartClick}
    >
      <FloatingHearts />
      
      <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <HeartCrack className="w-12 h-12 text-rose-500" />
            <h1 className="text-4xl font-bold text-gray-800">I Miss You MeMe</h1>
            <Heart className="w-12 h-12 text-rose-500" />
          </div>
          <p className="text-gray-600 text-lg">Click anywhere to express my feelings</p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={messageIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center mb-8"
          >
            <p className="text-3xl font-semibold text-gray-800 mb-4">
              {APOLOGY_MESSAGES[messageIndex]}
            </p>
          </motion.div>
        </AnimatePresence>

        {hearts.map((heart, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, x: heart.x, y: heart.y }}
            animate={{
              scale: [1, 0],
              y: [heart.y, heart.y - 100],
              opacity: [1, 0]
            }}
            transition={{ duration: 1 }}
            className="absolute pointer-events-none"
          >
            <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
          </motion.div>
        ))}

        {showFinalMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm"
          >
            <div className="bg-white rounded-2xl p-8 max-w-lg mx-4 text-center">
              <Sparkles className="w-16 h-16 text-rose-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                From the Bottom of My Heart
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every moment without you feels incomplete. I'm truly sorry for my mistakes,
                and I promise to cherish and respect your feelings always. You're the most
                precious person in my life.
              </p>
              <button
                onClick={() => setShowFinalMessage(false)}
                className="bg-rose-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-rose-600 transition shadow-lg"
              >
                ❤️ I Love You
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default App;