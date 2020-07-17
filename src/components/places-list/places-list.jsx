import React from "react";
import propTypes from "prop-types";
// import ReactDOM from "react-dom";
import Offer from '../offer/offer.jsx';

const PlacesList = (props) => {
  const {hotels, onHover, handleSetActiveItem} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels && hotels.map((hotel, index) =>
        <Offer key={index}
          img={hotel.preview_image} price={hotel.price} title={hotel.title} type={hotel.type} rating={hotel.rating} coor={hotel.location} onHover={onHover} handleSetActiveItem={handleSetActiveItem}
        />
      )}
    </div>
  );
};

PlacesList.propTypes = {
  hotels: propTypes.arrayOf(
      propTypes.shape({
        img: propTypes.string.isRequired,
        price: propTypes.string.isRequired,
        rating: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        type: propTypes.string.isRequired
      })
  ).isRequired,
  onHover: propTypes.func.isRequired,
  handleSetActiveItem: propTypes.func
};

export default PlacesList;
