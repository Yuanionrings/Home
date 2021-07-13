import React from 'react';

import {
  mainBody,
  aboutMe
} from './config'

import Navbar from './Navbar';
import MainBody from './home/MainBody';
import AboutMe from "./home/AboutMe";
import Projects from "./home/Projects";
import Skills from './home/Skills';

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <Navbar/>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      <AboutMe
        heading={aboutMe.heading}
        description={aboutMe.description}
        resume={aboutMe.resume}
      />
      <Projects
      />
      <Skills
      />
    </>
  );
});


export default Home;