"use client";

import { useState } from "react";
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
  const [tappedCard, setTappedCard] = useState<number | null>(null);

  return (
    <section className="skills-section py-12 px-2" id="skills">
      <div className="text-center mb-17">
        <h1 className="text-white font-poppins font-bold text-4xl sm:text-5xl">
          My Skills
        </h1>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 gap-5 justify-items-center max-w-3xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            className={`card ${skill.isWhite ? 'github-card' : ''} ${tappedCard === index ? "tapped" : ""}`}
            key={index}
            onClick={() => setTappedCard(tappedCard === index ? null : index)}
            onMouseLeave={() => setTappedCard(null)}
          >
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


