import React from "react";
import {connect} from "react-redux";
import {ActionCreator, getAuthorizationStatus, getOffers, getCurrentOffers, getCurrentCity, getCurrentCoor, getCityList} from "../../reducer.js";
import propTypes from "prop-types";
import Main from '../main/main.jsx';

import withActiveItem from "../../hocs/with-active-item.js";

const MainWrapped = withActiveItem(Main);

const App = (props) => {
  const {places, onLocationsItemClick} = props;

  const onHover = function () {

  };

  return <MainWrapped
    offers={props.offers} hotels={props.currentOffers} places={places} city={props.city} coors={props.coors} cityList={props.cityList} onLocationsItemClick={onLocationsItemClick} onHover={onHover}
  />;

};

App.propTypes = {
  places: propTypes.number.isRequired,
  offers: propTypes.arrayOf(
      propTypes.shape({
        image: propTypes.string.isRequired,
        price: propTypes.string.isRequired,
        rating: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        location: propTypes.array.isRequired,
      })
  ).isRequired,
  currentOffers: propTypes.arrayOf(
      propTypes.shape({
        image: propTypes.string.isRequired,
        price: propTypes.string.isRequired,
        rating: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        type: propTypes.string.isRequired,
        location: propTypes.array.isRequired,
      })
  ).isRequired,
  city: propTypes.string,
  cityList: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
        location: propTypes.array.isRequired
      })
  ).isRequired,
  coors: propTypes.array.isRequired,
  onLocationsItemClick: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  city: getCurrentCity(state),
  coors: getCurrentCoor(state),
  offers: getOffers(state),
  cityList: getCityList(state),
  currentOffers: getCurrentOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLocationsItemClick(city, offers) {
    dispatch(ActionCreator.toggleCity(city));
    dispatch(ActionCreator.toggleCoor(city, offers));
    dispatch(ActionCreator.clearOffers());
    dispatch(ActionCreator.getList(city, offers));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
