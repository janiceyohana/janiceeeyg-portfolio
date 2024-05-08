import React from 'react';
import Profile from '../sections/Profile';
// import Contact from '../sections/Contact';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Experiences from '../sections/Experiences';
import Contact from '../sections/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <section id="home">
        <Profile/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="experiences">
        <Experiences/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section id="contacts">
        <Contact/>
      </section>
    </div>
  );
};

export default HomePage;
