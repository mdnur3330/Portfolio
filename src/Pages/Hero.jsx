import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
  FaUser,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import TechAvatar from "./TechAvatar";
import { Link } from "react-router";

export default function Hero() {
  return (
    <main className="min-h-screen w-11/12 md:w-10/12 mx-auto text-white px-4 md:px-6 py-10 font-sans">
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row justify-between gap-10 py-20"
      >
        {/* Left Content */}
        <div className="md:w-1/2 w-full  md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            Hi, I'm <span className="text-green-400">Md Nur Alom</span>
          </motion.h2>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "MERN Stack Enthusiast",
              2000,
              "",
              500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-lg text-green-300 font-semibold mb-4 inline-block"
          />

          <p className="text-gray-400 mb-6">
            I build exceptional digital experiences using modern web technologies. Currently
            specializing in MERN stack development and creating responsive, user-friendly applications.
          </p>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-6">
            <div className="bg-[#101827] border border-gray-800 rounded-lg px-6 py-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <div className="text-3xl font-bold">
                <CountUp start={1} end={12} duration={4} suffix="+" />
              </div>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-[#101827] border border-gray-800 rounded-lg px-6 py-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <div className="text-3xl font-bold">
                <CountUp start={1} end={500} duration={4} suffix="+" />
              </div>
              <p className="text-sm text-gray-400">GitHub Commits</p>
            </div>
            <div className="bg-[#101827] border border-gray-800 rounded-lg px-6 py-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <div className="text-3xl font-bold">
                <CountUp start={1} end={15} duration={4} suffix="+" />
              </div>
              <p className="text-sm text-gray-400">Technologies</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start mb-6">
            <a
              href="/Nur_Alom_CV.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-green-400 text-black rounded-full hover:bg-green-500 font-semibold shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
            >
              <FaDownload /> Download CV
            </a>





            <Link
              to='/contact'
              className="flex items-center gap-2 px-6 py-3 border border-green-400 text-green-400 rounded-full hover:bg-green-500 hover:text-black font-semibold shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 "
            >
              <FaUser /> Contact Me
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-2 justify-center md:justify-start text-2xl text-green-400">
            <a 
            className="transition-all duration-300 hover:shadow-lg shadow-green-500/20 border-green-600 p-2 border-g rounded-full"
              href="https://github.com/mdnur3330"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
             className="transition-all duration-300 hover:shadow-lg shadow-green-500/20 border-green-600 p-2 border-g rounded-full"
              href="https://www.linkedin.com/in/nur-alom1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
             className="transition-all duration-300 hover:shadow-lg shadow-green-500/20 border-green-600 p-2 border-g rounded-full"
              href="https://wa.me/qr/HQUAFMEBDLC3G1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

    
  <TechAvatar></TechAvatar>
        
      </section>
    </main>
  );
}
