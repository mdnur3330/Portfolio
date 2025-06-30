import React from "react";
import { motion } from "framer-motion";
import { FaMosque, FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

import {
  SiJavascript,
  SiWordpress
} from "react-icons/si";

const EducationChart = () => {
  const fadeIn = (i) => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    },
  });

  return (
    <section className="py-20 px-5  text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-500 text-center mb-2">
          Education Journey
        </h2>
        <p className="text-center text-gray-400 mb-16">
          My academic path and technical training
        </p>

        {/* Timeline Chart */}
        <div className="relative border-l border-green-600 pl-6 space-y-10">
          {[
             {
              title: "BA (Hons) in Islamic Studies",
              year: "Ongoing",
              institute: "International Islamic University Chittagong",
              icon: <FaGraduationCap />,
              detail: "Specialized studies in Hadith interpretation",
            },
             {
              title: "Uloom-ul-Hadith (Advanced Hadith Sciences)",
              year: "2024",
              nstitute: "Darul Ulum Moinul Islam, Hathazari",
              icon: <FaGraduationCap />,
              detail: "Specialized studies in Hadith interpretation",
            },
            {
              title: "Dawra-e-Hadith (Master’s in Hadith Studies)",
              year: "2022",
              nstitute: "International Islamic University Chittagong",
              icon: <FaGraduationCap />,
              detail: "Completed in Qawmi Madrasa",
            },
            {
              title: "Memorization of Qur'an (Hifz)",
              year: "2012",
              institute: "Markazul Quran Madrasa, Gazipur",
              icon: <FaMosque />,
              detail: "Completed full memorization of the Qur'an",
            },
            
           
           
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn(i)}
              className="bg-[#1b1b1d] border border-green-700 p-6 rounded-xl relative shadow-md hover:shadow-green-400/30 transition-shadow"
            >
              <div className="absolute -left-[36px] top-4 bg-green-600 p-2 rounded-full">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.detail}</p>
              <span className="text-green-400 text-xs absolute top-4 right-4">
                {item.year}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Professional Skills */}
        <div className="space-y-6 mt-7">
            <h3 className="text-2xl font-bold text-green-300 flex items-center gap-2">
              <FaLaptopCode className="text-green-400" /> Professional Courses
            </h3>
            {[
              {
                icon: <FaCode className="text-purple-400" />,
                title: "MERN Stack Web Development",
                provider: "Programming Hero",
                desc: "MongoDB, Express, React, Node.js",
              },
              {
                icon: <SiJavascript className="text-yellow-300" />,
                title: "Web Development Fundamentals",
                provider: "Online",
                desc: "HTML, CSS, JavaScript (ES6+)",
              },
              {
                icon: <SiWordpress className="text-blue-300" />,
                title: "WordPress Development",
                provider: "Online",
                desc: "CMS, theme customization",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                custom={index + 5}
            
                initial="hidden"
                whileInView="visible"
                className="bg-[#1a1e25] border border-green-700 p-5 rounded-xl hover:shadow-md hover:shadow-green-300/20 transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{item.provider}</p>
                <p className="text-sm mt-1 text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default EducationChart;
