import React from "react";
import {
  FaCheckCircle,
  FaCode,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import TechAvatar from "./TechAvatar";

const About = () => {
  return (
    <section className="py-20 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Profile Image with Glow Effect */}
        <TechAvatar />

        <h2 className="text-4xl font-bold mb-3">
          <span className="text-green-500">About</span> Me
        </h2>

        <div className="space-y-5 mt-10">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1b1b1d] rounded-lg p-4 border border-gray-700 text-left transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            <p>
              <span className="inline-block mr-2">📌</span>
              Hi, I'm{" "}
              <span className="text-green-400 font-medium">Nur Alam</span>,
              passionate and detail-oriented Front End Web Developer with focus
              on the MERN stack (MongoDB, Express, React, Node.js). I love
              turning complex problems into simple, beautiful, and user-friendly
              web solutions
            </p>
          </motion.div>
          .{/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1b1b1d] rounded-lg p-4 border border-gray-700 text-left transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            <p>
              With a solid foundation in front-end technologies like React,
              Tailwind CSS, and Framer Motion, I build responsive and
              interactive interfaces that are not only visually appealing but
              also performant. On the back end, I work with Express and MongoDB
              to develop robust and secure APIs. I'm also experienced in
              integrating Firebase authentication, JWT security, and deploying
              full-stack applications on platforms like Vercel and Firebase. I'm
              constantly learning and improving — whether it's mastering new
              tools or diving deeper into JavaScript. I believe in clean code,
              reusable components, and a smooth user experience. Let’s build
              something amazing together!
            </p>
          </motion.div>
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1b1b1d] rounded-lg p-4 border border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            <h3 className="text-green-400 font-semibold mb-3 flex items-center">
              <FaCode className="mr-2" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              {[
                "HTML",
                "CSS",
                "JavaScript (ES6)",
                "Tailwind",
                "DaisyUI",
                "React (Hooks, Router, Context)",
                "Node.js",
                "Express",
                "MongoDB",
                "Firebase Auth",
                "JWT",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 text-center hover:bg-gray-700 transition"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          {/* What Sets Me Apart */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1b1b1d] rounded-lg p-4 border border-gray-700 text-left transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            <h3 className="text-green-400 font-semibold mb-3 flex items-center">
              <FaCheckCircle className="mr-2" />
              What Sets Me Apart
            </h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Strong foundation in modern tech</li>
              <li>Focused on clean code and client satisfaction</li>
              <li>Experience with secured authentication systems</li>
              <li>Dedicated to continuous learning and teamwork</li>
            </ul>
          </motion.div>
          {/* My Goal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#1b1b1d] rounded-lg p-4 border border-gray-700 text-left transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
          >
            <h3 className="text-green-400 font-semibold mb-3 flex items-center">
              <FaGraduationCap className="mr-2" />
              My Goal
            </h3>
            <p>
              I aim to become a proficient developer who can deliver valuable
              projects with full client satisfaction.
            </p>
            <blockquote className="mt-3 italic text-green-300 border-l-4 pl-4 border-green-500">
              "Every project is a new opportunity to learn, grow, and deliver
              excellence."
            </blockquote>
          </motion.div>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-xl text-green-400">
          <a
            href="#"
            aria-label="GitHub"
            className="hover:scale-125 transition"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            aria-label="WhatsApp"
            className="hover:scale-125 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
