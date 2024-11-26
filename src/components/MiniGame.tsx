import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ArrowRight } from 'lucide-react';

interface MiniGameProps {
  type: string;
  onComplete: () => void;
}

const MiniGame: React.FC<MiniGameProps> = ({ type, onComplete }) => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = () => {
    setCompleted(true);
    setTimeout(onComplete, 2000);
  };

  const renderGame = () => {
    switch (type) {
      case 'stars':
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Catch the Falling Stars</h3>
            <div className="relative h-64 bg-gradient-to-b from-indigo-900 to-purple-900 rounded-lg overflow-hidden">
              {Array.from({ length: 5 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ top: -20, left: `${Math.random() * 80 + 10}%` }}
                  animate={{
                    top: '100%',
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                >
                  <Star className="text-yellow-300 w-6 h-6" />
                </motion.div>
              ))}
            </div>
            <button
              onClick={handleComplete}
              className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              Make a Wish
            </button>
          </div>
        );

      case 'path':
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Find the Path to My Heart</h3>
            <div className="grid grid-cols-5 gap-2 max-w-md mx-auto">
              {Array.from({ length: 25 }).map((_, i) => (
                <motion.button
                  key={i}
                  className="aspect-square bg-rose-100 rounded-lg hover:bg-rose-200 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleComplete}
                >
                  <Heart className="w-6 h-6 text-rose-500 mx-auto" />
                </motion.button>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Your Heart</h3>
            <motion.div
              className="w-24 h-24 mx-auto cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleComplete}
            >
              <Heart className="w-full h-full text-rose-500" />
            </motion.div>
            <p className="mt-4 text-gray-600">Click the heart to unlock this memory</p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      {completed ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="w-20 h-20 mx-auto mb-4">
            <Heart className="w-full h-full text-rose-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Memory Unlocked!</h3>
          <p className="text-gray-600">A beautiful moment to cherish forever...</p>
        </motion.div>
      ) : (
        renderGame()
      )}
    </div>
  );
};

export default MiniGame;