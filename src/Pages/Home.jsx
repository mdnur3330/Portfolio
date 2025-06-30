import React from 'react';
import Hero from './Hero';
import About from './Aboute';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from '../Component/Footer';
import EducationJourney from './Education';
import Experience from './Experience';
import Nav from '../Component/Nav';


const Home = () => {
    return(
    <div className="font-sans text-gray-800">
      
      
      <Hero />
      <About />
      <Projects />
      <Skills />
      <EducationJourney></EducationJourney>
      <Experience></Experience>
      <Contact />
      <Footer />
    </div>
    )
}
export default Home;