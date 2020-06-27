import React from "react";
import propTypes from "prop-types";
import Main from '../main/main.jsx';

const App = (props) => {
  const {places, hotels} = props;

  const onLocationsItemClick = function () {
  };

  const onHover = function () {

  };

  return <Main
    hotels={hotels} places={places} onLocationsItemClick={onLocationsItemClick} onHover={onHover}
  />;
};

App.propTypes = {
  places: propTypes.number.isRequired,
  hotels: propTypes.arrayOf(
      propTypes.shape({
        img: propTypes.string.IsRequired,
        price: propTypes.string.IsRequired,
        width: propTypes.string.IsRequired,
        title: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        coor: propTypes.array.isRequired
      })
  ).isRequired,
};

export default App;
