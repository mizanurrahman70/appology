import React from 'react';
import { motion } from 'framer-motion';

interface MemoryCardProps {
  image: string;
  title: string;
  description: string;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default MemoryCard;