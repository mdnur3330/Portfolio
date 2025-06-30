// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaSearch, FaGraduationCap, FaCode } from 'react-icons/fa';

// const Experience = () => {
//   return (
//     <section className="py-20  text-white">
//       <div className="max-w-5xl mx-auto px-4">

//         {/* Top Banner */}
//         <motion.div
//           className="bg-gray-800 rounded-xl p-6 text-center mb-16"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <div className="flex justify-center mb-3">
//             <FaSearch className="text-3xl text-green-500" />
//           </div>
//           <h2 className="text-xl font-bold">Actively Seeking First Opportunity</h2>
//           <p className="text-sm text-gray-300 mt-2">
//             Freshly trained in full-stack development with hands-on project experience. Eager to contribute
//             my skills in a professional environment.
//           </p>
//         </motion.div>

//         {/* Section Title */}
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           My <span className="text-green-500">Coding Journey</span>
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Formal Training */}
//           <motion.div
//             className="flex gap-5"
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex-shrink-0">
//               <FaGraduationCap className="text-4xl text-green-500" />
//               <p className="text-sm mt-2">2024 - 2025</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-xl flex-1">
//               <h3 className="font-semibold text-white">MERN Stack Development</h3>
//               <p className="text-gray-400 text-sm mb-2">Programming Hero</p>
//               <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
//                 <li>Completed 500+ hours of intensive training</li>
//                 <li>Built 3 full-stack applications with MongoDB, Express, React, Node.js</li>
//                 <li>Learned industry best practices and modern tools</li>
//               </ul>
//             </div>
//           </motion.div>

//           {/* Hands-on Projects */}
//           <motion.div
//             className="flex gap-5"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="flex-shrink-0">
//               <FaCode className="text-4xl text-green-500" />
//               <p className="text-sm mt-2">2025 - Present</p>
//             </div>
//             <div className="bg-gray-800 p-6 rounded-xl flex-1">
//               <h3 className="font-semibold text-white">Practical Applications</h3>
//               <p className="text-gray-400 text-sm mb-2">Personal Portfolio</p>
//               <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
//                 <li>Developed responsive portfolio with animations</li>
//                 <li>Created e-commerce demo with payment integration</li>
//                 <li>Built RESTful APIs with JWT authentication</li>
//               </ul>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;
