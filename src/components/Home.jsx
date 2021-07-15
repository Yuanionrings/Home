import React from 'react';

import {
  mainBody,
  aboutMe,
  footer
} from './config';

import Navbar from './Navbar';
import Footer from './Footer';

import MainBody from './home/MainBody';
import AboutMe from "./home/AboutMe";
import Experiences from './home/Experiences';
import Projects from "./home/Projects";
import Skills from './home/Skills';


const Home = () => {
  return (
    <>
      <Navbar/>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
      />
      <AboutMe
        heading={aboutMe.heading}
        description={aboutMe.description}
        resume={aboutMe.resume}
      />
      <Experiences 
      />
      <Projects
      />
      <Skills
      />
      <Footer 
        heading={footer.heading}
        message={footer.message}
        email={footer.email}
      />
    </>
  )
}


export default Home;