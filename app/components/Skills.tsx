"use client";

import "./Skills.css";

// Updated data for the skills cards to include all requested skills
const skillsData = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    title: "C++",
    description: "Developing high-performance applications and efficient algorithms.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    description: "Building dynamic web apps with modern ES6+ features.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React.js",
    description: "Creating complex, component-based user interfaces for the web.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "Next.js",
    description: "Developing performant, server-rendered React applications.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    description: "Crafting robust and scalable backend services and RESTful APIs.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    title: "Express.js",
    description: "Building fast and minimalist web APIs on top of Node.js.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    title: "Java",
    description: "Building robust, object-oriented backend systems and applications.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    description: "Designing and managing NoSQL databases for scalable applications.",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    title: "SQL",
    description: "Managing relational databases and writing complex queries.",
  },

];

export default function Skills() {
  return (
    <section className="skills-section py-24 px-4" id="skills">
      <div className="text-center mb-16">
        <h1 className="text-white font-poppins font-bold text-4xl sm:text-5xl">
          My Skills
        </h1>
      </div>

      {/* --- FIX: Changed gap-8 to gap-4 to decrease the spacing --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center max-w-7xl mx-auto">
        {skillsData.map((skill, index) => (
          <div className="card" key={index}>
            <img src={skill.icon} alt={`${skill.title} icon`} />
            <div className="card__content">
              <p className="card__title">{skill.title}</p>
              <p className="card__description">{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

