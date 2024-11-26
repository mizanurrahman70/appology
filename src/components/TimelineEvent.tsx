import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Check } from 'lucide-react';

interface TimelineEventProps {
  event: {
    title: string;
    date: string;
    description: string;
    image: string;
  };
  isCompleted: boolean;
  onPlayGame: () => void;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ event, isCompleted, onPlayGame }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-2 gap-8">
        <div className="h-[400px] overflow-hidden">
          <motion.img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        <div className="p-8 flex flex-col justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-sm font-medium text-rose-500 mb-2">{event.date}</h3>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{event.description}</p>
            </motion.div>
          </div>

          <motion.button
            onClick={onPlayGame}
            className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-full font-semibold shadow-lg transition
              ${isCompleted 
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-rose-500 text-white hover:bg-rose-600'
              } hover:scale-105`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isCompleted ? (
              <>
                <Check className="w-5 h-5" />
                Memory Unlocked
              </>
            ) : (
              <>
                <Gamepad2 className="w-5 h-5" />
                Unlock This Memory
              </>
            )}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;