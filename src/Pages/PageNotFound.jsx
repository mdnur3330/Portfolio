import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4 text-center">
      <motion.h1
        className="text-9xl font-bold text-green-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-2xl mt-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Page Not Found
      </motion.p>
      <p className="text-gray-400 mt-2">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 border border-green-400 rounded-md text-green-400 hover:bg-green-400 hover:text-black transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
