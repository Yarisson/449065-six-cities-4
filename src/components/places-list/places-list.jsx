import React from "react";
import propTypes from "prop-types";
// import ReactDOM from "react-dom";
import Offer from '../offer/offer.jsx';

const PlacesList = (props) => {
  const {hotels, onHover} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {hotels.map((hotel, index) =>
        <Offer key={index}
          img={hotel.img} price={hotel.price} title={hotel.title} type={hotel.type} width={hotel.width} onHover={onHover}
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
        width: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        type: propTypes.string.isRequired
      })
  ).isRequired,
  onHover: propTypes.func.isRequired
};

export default PlacesList;
