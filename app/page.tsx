// app/page.tsx

import HomeHero from "./components/HomeHero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function HomePage() {
  return (
    <>
      {/* Set the id of your HomeHero section to "about" */}
      <section id="about">
        <HomeHero />
      </section>

      <section id="skills">
        <Skills />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}
