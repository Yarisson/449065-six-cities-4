import React from "react";
import propTypes from "prop-types";
// import ReactDOM from "react-dom";

const CityList = (props) => {
  const {cityList, city, isActiveList, onLocationsItemClick} = props;
  console.log(props);
  return (
    <ul className="locations__list tabs__list">

      {cityList.map((item, index) =>
        <li key={index}

          onClick={(evt) => {
            evt.preventDefault();
            onLocationsItemClick(item.name);
          }}
          className="locations__item"
        >
          <a className={`locations__item-link tabs__item tabs__item--${item.name === city ? `active` : ``}`} href="#">
            <span>{item.name}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

CityList.propTypes = {
  cityList: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
        coor: propTypes.array.isRequired
      })
  ).isRequired,
  onLocationsItemClick: propTypes.func.isRequired
};

export default CityList;
