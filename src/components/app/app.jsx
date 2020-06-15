import React from "react";
import Main from '../main/main.jsx';

const App = (currentPlaces, hotels) => {
  // eslint-disable-next-line react/prop-types
  const {hotelsMok} = hotels;
  // eslint-disable-next-line react/prop-types
  const {places} = currentPlaces;

  return <Main
    hotels={hotelsMok} places={places}
  />;
};

export default App;
