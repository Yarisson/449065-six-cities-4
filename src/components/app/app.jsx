import React from "react";
import Main from '../main/main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {places, hotels} = props;
  // eslint-disable-next-line react/prop-types
  // const hotelsMok = hotels;
  // eslint-disable-next-line react/prop-types
  // const places = currentPlaces;

  console.log(hotelsMok);
  console.log(places);

  return <Main
    hotels={hotelsMok} places={places}
  />;
};

export default App;
