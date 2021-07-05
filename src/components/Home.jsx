import React from 'react';

import {
  mainBody,
  aboutMe
} from './config'

import MainBody from './home/MainBody';
import AboutMe from "./home/AboutMe";
import Projects from "./home/Projects";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
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
    </>
  );
});


export default Home;