import React, { useRef } from "react";
import Profile from "../sections/Profile";
// import Contact from '../sections/Contact';
import About from "../sections/About";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experiences";
import Contact from "../sections/Contact";
import Skills from "../sections/Skills";

const HomePage: React.FC = () => {
  // Refs for scrolling
  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <div>
      <section id="home">
        <Profile />
      </section>
      <section id="about-me">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experiences">
        <Experiences />
      </section>
      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>
      <section id="contacts">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
