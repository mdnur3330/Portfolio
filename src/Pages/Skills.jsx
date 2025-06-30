import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiJavascript, SiHtml5, SiCss3, SiExpress, SiDaisyui, SiGit, SiVercel, SiRender } from 'react-icons/si';

const skillsData = [
  {
    title: 'Frontend',
    icon: <FaReact size={20} />,
    skills: [
      { name: 'HTML5', level: 95, icon: <SiHtml5 /> },
      { name: 'CSS3', level: 90, icon: <SiCss3 /> },
      { name: 'JavaScript', level: 85, icon: <SiJavascript /> },
      { name: 'React', level: 70, icon: <FaReact /> },
      { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss /> },
      { name: 'Daisy UI', level: 95, icon: <SiDaisyui /> },
    ],
  },
  {
    title: 'Backend',
    icon: <FaNodeJs size={20} />,
    skills: [
      { name: 'Node.js', level: 60, icon: <FaNodeJs /> },
      { name: 'Express', level: 80, icon: <SiExpress /> },
      { name: 'REST APIs', level: 75, icon: <span className="font-bold text-xs">REST</span> },
      { name: 'Authentication', level: 90, icon: <span className="font-bold text-xs">🔐</span> },
      { name: 'JWT', level: 85,  },
    ],
  },
  {
    title: 'Database',
    icon: <FaDatabase size={20} />,
    skills: [
      { name: 'MongoDB', level: 70, icon: <SiMongodb /> },
      { name: 'Firebase', level: 80, icon: <SiFirebase /> },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: <FaTools size={20} />,
    skills: [
      { name: 'Git', level: 70, icon: <SiGit /> },
      { name: 'Vercel', level: 80, icon: <SiVercel /> },
      { name: 'Render', level: 85, icon: <SiRender /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4"
        >
          My Skills
        </motion.h2>
        <p className="text-gray-400 mb-14 text-lg">
          Technologies I've mastered through hands-on projects
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((category, i) => (
            <motion.div
              key={category.title}
              className="bg-[#161B22] rounded-xl p-5 text-left shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-green-300 mb-4">
                {category.icon} <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill.name}>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      {skill.icon} <span className="text-gray-100">{skill.name}</span>
                      <span className="ml-auto text-green-300 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 mt-1">
                      <div
                        className="bg-green-400 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <button className="mt-6 px-6 py-2 border border-green-500 rounded-full text-green-300 hover:bg-green-500 hover:text-black transition">
            Continuously expanding my skillset →
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
