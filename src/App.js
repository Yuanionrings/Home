import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
    </BrowserRouter>
  );
};

export default App;
