import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleHeart } from 'lucide-react';

interface MessageBubbleProps {
  message: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-2xl mx-auto"
    >
      <div className="flex items-start gap-4">
        <MessageCircleHeart className="w-12 h-12 text-rose-500 flex-shrink-0" />
        <p className="text-gray-700 text-lg leading-relaxed italic">{message}</p>
      </div>
    </motion.div>
  );
};

export default MessageBubble;