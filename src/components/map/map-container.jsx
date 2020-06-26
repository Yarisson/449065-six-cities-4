import React from "react";
// import ReactDOM from "react-dom";
import propTypes from "prop-types";

const MapContainer = (props) => {
  const {map} = props;

  return (
    <div id="map"></div>
  );
};

MapContainer.propTypes = {
  map: propTypes.array.isRequired
};

export default MapContainer;
