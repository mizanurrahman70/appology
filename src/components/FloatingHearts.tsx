import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: -100,
            x: `calc(${Math.random() * 100}vw + ${Math.sin(index) * 100}px)`
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
          className="absolute"
        >
          <Heart 
            className={`${
              Math.random() > 0.5 ? 'text-rose-500' : 'text-pink-400'
            } fill-current opacity-30`}
            size={Math.random() * 20 + 10}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;