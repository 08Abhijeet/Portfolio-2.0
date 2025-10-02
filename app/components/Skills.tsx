"use client";

import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills-section mt-18 md:mt-15" id="skills">
      <div className="skills-title">
        <h1>
         <span className="text-white font-poppins  font-bold text-[40px] ">Skills</span>
        </h1>
      </div>

      <div className="skills-container">
        {/* Row 1 */}
        <div className="skill-card card1">
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="JavaScript" />
          <h3>JavaScript</h3>
          <p>Dynamic and interactive web applications.</p>
        </div>

        <div className="skill-card card2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" />
          <h3>C++</h3>
          <p>Efficient algorithms and system programming.</p>
        </div>

        <div className="skill-card card3">
          <img src="https://cdn-icons-png.flaticon.com/512/2772/2772127.png" alt="SQL" />
          <h3>SQL</h3>
          <p>Database management and query optimization.</p>
        </div>

        {/* Row 2 */}
        <div className="skill-card card4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" />
          <h3>React.js</h3>
          <p>Component-based UI development.</p>
        </div>

        <div className="skill-card card5">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          <h3>Node.js</h3>
          <p>Backend development and APIs.</p>
        </div>

        <div className="skill-card card6">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          <h3>MongoDB</h3>
          <p>NoSQL database for scalable applications.</p>
        </div>
        
        <div className="skill-card card6">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          <h3>MongoDB</h3>
          <p>NoSQL database for scalable applications.</p>
        </div>
        <div className="skill-card card6">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          <h3>MongoDB</h3>
          <p>NoSQL database for scalable applications.</p>
        </div>
      </div>
    </section>
  );
}
