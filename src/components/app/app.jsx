import React from "react";
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {currentPlaces} = props;

  return <Main
    places={currentPlaces}
  />;
};

export default App;