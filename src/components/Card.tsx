import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  isFlipped: boolean;
  onClick: () => void;
  emoji: string;
}

const Card: React.FC<CardProps> = ({ isFlipped, onClick, emoji }) => {
  return (
    <div
      className="relative aspect-square cursor-pointer"
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl shadow-lg flex items-center justify-center backface-hidden hover:scale-105 transition-transform" />
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center backface-hidden [transform:rotateY(180deg)]">
          <span className="text-4xl">{emoji}</span>
        </div>
      </motion.div>
    </div>
  );
}

export default Card;