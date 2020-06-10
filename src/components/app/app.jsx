import React from "react";
import Main from '../main/main';

const App = (props) => {
  // const classes = props.classes;
  const {currentPlaces} = props;

  return <Main
    places={currentPlaces}
  />;
};

export default App;
