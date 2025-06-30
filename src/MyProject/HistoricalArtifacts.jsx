import React from 'react';
import { motion } from "framer-motion";
import plant1 from "../assets/histurecal 1.png";
import plant2 from "../assets/histurecal.png";











const technologies = [
  "React",
  "Node.js",
  "MongoDB",
  "express.js",
  "Firebase",
  "JWT",
];

const challenges = [
  "🔐 Firebase Authentication – Secure user login with email & password",
  "📦 Firebase Hosting – Live deployment with fast delivery",
  "✅ CRUD Operations – Add, edit, delete, and view artifacts",
  "🔍 Search & Sort – Easily filter and sort artifact lists",
  "🎨 Framer Motion – Smooth animations for better UX",
  "📱 Fully Responsive – Optimized for all devices",
  "💬 Like Button – Interactive like system",
];

const HistoricalArtifacts = () => {
    return (
        <div>
           

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="rounded-lg overflow-hidden"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={plant1} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={plant2} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            {/* <div id="slide3" className="carousel-item relative w-full">
              <img src={plant3} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div> */}
            {/* <div id="slide4" className="carousel-item relative w-full">
              <img src={plant4} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div> */}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-green-400 mb-3">
            Historical Artifacts Tracker
          </h3>
          <p className="text-gray-300 mb-4">
            ByteVault is a digital gallery web application that showcases a wide range of artifacts — from iconic computer tech to historical and cultural treasures. The platform is designed to allow users to view, explore, and manage artifact data through a clean and interactive interface.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-green-600 text-sm px-3 py-1 rounded-full text-white transition duration-200 hover:bg-green-400 hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>

          <h4 className="text-green-400 text-2xl font-semibold mb-4">
            Key Features
          </h4>
          <div className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-6">
            {challenges.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="https://historical-artifacts-tra-aacdc.web.app/" target='_blank'
              className="bg-green-400 text-black px-4 py-2 rounded font-semibold text-sm shadow transition duration-300 transform hover:scale-105 hover:bg-green-500"
            >
              🚀 Live Demo
            </a>
            <a
              href="https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-mdnur3330" target='_blank'
              className="bg-transparent border border-green-400 text-green-400 px-4 py-2 rounded font-semibold text-sm transition duration-300 transform hover:scale-105 hover:bg-green-700 hover:text-white"
            >
              💻 Client Code
            </a>
            <a
              href="https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-mdnur3330" target='_blank'
              className="bg-transparent border border-blue-500 text-blue-400 px-4 py-2 rounded font-semibold text-sm transition duration-300 transform hover:scale-105 hover:bg-blue-700 hover:text-white"
            >
              🔧 Server Code
            </a>
          </div>
        </motion.div>
      </div>
        </div>
    );
};

export default HistoricalArtifacts;