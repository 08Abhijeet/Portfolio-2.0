"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./Skills.css";

const skillsData = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    title: "C++",
    description: "High-performance applications and algorithms.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    description: "Dynamic web apps with modern ES6+ features.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React.js",
    description: "Component-based user interfaces for the web.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "Next.js",
    description: "Performant, server-rendered React applications.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    description: "Scalable backend services and RESTful APIs.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    title: "Express.js",
    description: "Fast and minimalist web APIs on top of Node.js.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    title: "Java",
    description: "Robust, object-oriented backend systems.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    description: "NoSQL databases for scalable applications.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    title: "SQL",
    description: "Relational databases and complex queries.",
  }, {

icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",

 title: "GitHub",
 description: "Version control and collaborative development.",

 isWhite: true, // Added a flag for styling

},
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Python",
    description: "General-purpose programming and data analysis.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    title: "Supabase",
    description: "Open source backend-as-a-service.",
  },
];

export default function Skills() {
  return (
    <section className="skills-section py-8 sm:py-16 px-3 md:mt-16" id="skills">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center text-center justify-center mb-10 sm:mb-16 z-10 bg-black/50 backdrop-blur-2xl border border-white/10 px-6 py-4 sm:px-10 sm:py-6 rounded-3xl sm:rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] w-fit max-w-[95vw] border-t-white/20 mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
          <span className="text-xs sm:text-sm font-medium text-gray-200 uppercase tracking-widest">Expertise</span>
        </div>
        <h2 className="font-poppins text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          My <span className="bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent">Skills</span>
        </h2>
      </motion.div>

      <div className="scroller-container max-w-[100vw]">
        <div className="scroller-track">
          {/* We duplicate the array to allow for seamless infinite scrolling */}
          {[...skillsData, ...skillsData].map((skill, index) => (
            <div
              className={`skill-item ${skill.isWhite ? 'github-icon-wrapper' : ''}`}
              key={index}
            >
              <div className="skill-icon-wrapper">
                <Image src={skill.icon} alt={`${skill.title} icon`} width={65} height={65} unoptimized />
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


