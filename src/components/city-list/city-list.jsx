import React from "react";
import propTypes from "prop-types";
// import ReactDOM from "react-dom";

const CityList = (props) => {
  const {cityList, onLocationsItemClick} = props;

  return (
    <ul className="locations__list tabs__list">

      {cityList.forEach((item) =>
        <li
          onClick={onLocationsItemClick}
          className="locations__item"
        >
          <a className="locations__item-link tabs__item" href="#">
            <span>{item}</span>
          </a>
        </li>)}
    </ul>
  );
};

CityList.propTypes = {
  cityList: propTypes.array.isRequired,
  onLocationsItemClick: propTypes.func.isRequired
};

export default CityList;
