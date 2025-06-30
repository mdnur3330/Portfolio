import React from 'react';
import { motion } from 'framer-motion';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import logo from '../assets/front end developer.jpg'

const orbitVariants = {
  animate: {
    rotate: 10,
    transition: {
      repeat: Infinity,
      ease: 'linear',
      duration: 10
    }
  }
};

const TechAvatar = () => {
  return (
    <div className="relative w-[280px] h-[280px] mx-auto my-10">
      {/* Animated Orbit */}
      <motion.div
        variants={orbitVariants}
        animate="animate"
        className="absolute inset-0 rounded-full border border-green-600 flex items-center justify-center"
      >
        <div className="absolute top-[-20px] left-[50%] -translate-x-1/2 text-2xl text-white">
          <SiMongodb />
        </div>
        <div className="absolute left-[-20px] top-[50%] -translate-y-1/2 text-2xl text-white">
          <SiTailwindcss />
        </div>
        <div className="absolute right-[-20px] top-[50%] -translate-y-1/2 text-2xl text-white">
          <FaNodeJs />
        </div>
        <div className="absolute bottom-[-20px] left-[50%] -translate-x-1/2 text-2xl text-white">
          <FaReact />
        </div>
      </motion.div>

      {/* Profile Image */}
      <div className="w-full h-full rounded-full overflow-hidden border-5 border-green-600 shadow-green-500/50 z-10 relative shadow-[0_0_30px_5px_rgba(34,197,94,0.5)]">
        <img
          src={logo}
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default TechAvatar;
