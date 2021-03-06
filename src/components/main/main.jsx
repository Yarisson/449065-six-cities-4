import React from "react";
// import ReactDOM from "react-dom";
import propTypes from "prop-types";
import PlacesList from '../places-list/places-list.jsx';
// import MapContainer from '../map/map-container.jsx';
import Map from '../map/map.jsx';
import CityList from '../city-list/city-list.jsx';
import withActiveItem from "../../hocs/with-active-item.js";

const CityListWrapped = withActiveItem(CityList);

const Main = (props) => {
  const {places, hotels, coors, city, cityList, onLocationsItemClick, onHover, activeItem, handleSetActiveItem} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityListWrapped cityList={cityList} onLocationsItemClick={onLocationsItemClick}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {places} places to stay in {city}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex="0"
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex="0">
                    Top rated first
                  </li>
                </ul>
                {/* <select className="places__sorting-type" id="places-sorting"> */}
                {/* <option className="places__option" value="popular" selected="">Popular</option> */}
                {/* <option className="places__option" value="to-high">Price: low to high</option> */}
                {/* <option className="places__option" value="to-low">Price: high to low</option> */}
                {/* <option className="places__option" value="top-rated">Top rated first</option> */}
                {/* </select> */}
              </form>
              <PlacesList hotels={hotels} onHover={onHover} handleSetActiveItem={handleSetActiveItem}/>
            </section>
            <div className="cities__right-section">

              <section className="map">
                <Map hotels={hotels} coors={coors} cityList={cityList} activeItem={activeItem}/>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  places: propTypes.number.isRequired,
  hotels: propTypes.arrayOf(
      propTypes.shape({
        img: propTypes.string.isRequired,
        price: propTypes.string.isRequired,
        width: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        coor: propTypes.array.isRequired,
      })
  ).isRequired,
  cityList: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
        coor: propTypes.array.isRequired
      })
  ).isRequired,
  city: propTypes.string,
  coors: propTypes.array.isRequired,
  onLocationsItemClick: propTypes.func.isRequired,
  onHover: propTypes.func.isRequired,
  activeItem: propTypes.array,
  handleSetActiveItem: propTypes.func
};

export default Main;
