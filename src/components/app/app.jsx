import React from "react";
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {places, hotels} = props;

  return <Main
    hotels={hotels} places={places}
  />;
};

export default App;
