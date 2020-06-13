import React from "react";
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {currentPlaces} = props;
  // eslint-disable-next-line react/prop-types
  const {hotelsMok} = props;

  return <Main
    places={currentPlaces} hotels={hotelsMok}
  />;
};

export default App;
