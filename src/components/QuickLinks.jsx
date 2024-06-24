import React from 'react';
import { motion } from 'framer-motion';

const QuickLinks = () => {
  return (
    <div className="p-10 bg-base-200 text-center">
      <h2 className="text-3xl font-bold">Quick Links</h2>
      <div className="mt-4 flex justify-center space-x-4">
        <motion.button 
          className="btn btn-primary transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Donate
        </motion.button>
        <motion.button 
          className="btn btn-secondary transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Volunteer
        </motion.button>
        <motion.button 
          className="btn btn-accent transform transition-transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Latest News
        </motion.button>
      </div>
    </div>
  );
};

export default QuickLinks;