import React from 'react';

import {mainBody} from './config'

import MainBody from './home/MainBody';

const Home = () => {
    return (
      <div>
      <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
        />
      </div>
    );
  }


export default Home;