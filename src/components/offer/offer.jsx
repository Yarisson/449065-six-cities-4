import React from "react";
// import ReactDOM from "react-dom";
import propTypes from "prop-types";

const Offer = (props) => {
  const {img, price, title, type, coor, width, onHover, handleSetActiveItem} = props;

  return (
    <article
      onMouseOver={(evt) => {
        evt.preventDefault();
        onHover(evt);
        handleSetActiveItem(coor);
      }}

      onMouseLeave={() => {
        handleSetActiveItem(null);
      }}
      className="cities__place-card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={img}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width}} ></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {title}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  img: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  width: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  onHover: propTypes.func.isRequired,
  coor: propTypes.array,
  handleSetActiveItem: propTypes.func
};

export default Offer;
