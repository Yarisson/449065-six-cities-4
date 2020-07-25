import React from "react";
import propTypes from "prop-types";
// import ReactDOM from "react-dom";

const CityList = (props) => {
  const {offers, cityList, activeItem, handleSetActiveItem, onLocationsItemClick, onCurrentCityListClearClick, onCurrentCityListUpdateClick} = props;
  return (
    <ul className="locations__list tabs__list">

      {cityList && cityList.map((item, index) =>
        <li key={index}

          onClick={(evt) => {
            evt.preventDefault();
            onLocationsItemClick(item);
            onCurrentCityListClearClick();
            onCurrentCityListUpdateClick(item, offers);
            handleSetActiveItem(item);
          }}
          className="locations__item"
        >
          <a className={`locations__item-link tabs__item tabs__item--${item === activeItem ? `active` : ``}`} href="#">
            <span>{item}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

CityList.propTypes = {
  offers: propTypes.arrayOf(
      propTypes.shape({
        city: propTypes.objectOf(
            propTypes.shape({
              name: propTypes.object,
              location: propTypes.objectOf(
                  propTypes.shape({
                    latitude: propTypes.number,
                    longitude: propTypes.number,
                  })
              ),
            })
        ),
        img: propTypes.string,
        price: propTypes.number,
        rating: propTypes.number,
        title: propTypes.string,
        type: propTypes.string,
        coor: propTypes.arrayOf(propTypes.number),
      })
  ),
  cityList: propTypes.array,
  onLocationsItemClick: propTypes.func,
  onCurrentCityListClearClick: propTypes.func,
  onCurrentCityListUpdateClick: propTypes.func,
  handleSetActiveItem: propTypes.func,
  activeItem: propTypes.string
};

export default CityList;
