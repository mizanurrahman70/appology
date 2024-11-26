import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, X } from 'lucide-react';

interface MessageFormProps {
  onSubmit: () => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Write From Your Heart</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Express your feelings..."
          className="w-full h-40 p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-none"
          required
        />
        <div className="flex justify-end gap-4">
          <button
            type="submit"
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg transform transition hover:scale-105 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default MessageForm;