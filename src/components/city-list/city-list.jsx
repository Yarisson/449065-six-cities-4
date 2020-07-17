import React from "react";
import propTypes from "prop-types";
// import ReactDOM from "react-dom";

const CityList = (props) => {
  const {cityList, activeItem, handleSetActiveItem, onLocationsItemClick} = props;
  console.log(activeItem);
  return (
    <ul className="locations__list tabs__list">

      {cityList.map((item, index) =>
        <li key={index}

          onClick={(evt) => {
            evt.preventDefault();
            onLocationsItemClick(item.name);
            handleSetActiveItem(item.name);
          }}
          className="locations__item"
        >
          <a className={`locations__item-link tabs__item tabs__item--${item.name === activeItem ? `active` : ``}`} href="#">
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
  onLocationsItemClick: propTypes.func.isRequired,
  handleSetActiveItem: propTypes.func,
  activeItem: propTypes.string
};

export default CityList;
