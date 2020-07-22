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
        location: propTypes.array,
      })
  ),
  onHover: propTypes.func,
  handleSetActiveItem: propTypes.func
};

export default PlacesList;
