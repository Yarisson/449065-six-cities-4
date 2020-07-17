import React from "react";
import {connect} from "react-redux";
import {ActionCreator, getAuthorizationStatus, getOffers} from "../../reducer.js";
import propTypes from "prop-types";
import Main from '../main/main.jsx';

import withActiveItem from "../../hocs/with-active-item.js";

const MainWrapped = withActiveItem(Main);

const App = (props) => {
  const {places, cityList, onLocationsItemClick} = props;

  const onHover = function () {

  };

  return <MainWrapped
    hotels={props.offers} places={places} city={props.city} coors={props.coors} cityList={cityList} onLocationsItemClick={onLocationsItemClick} onHover={onHover}
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
  city: propTypes.string,
  cityList: propTypes.arrayOf(
      propTypes.shape({
        name: propTypes.string.isRequired,
        coor: propTypes.array.isRequired
      })
  ).isRequired,
  coors: propTypes.array.isRequired,
  onLocationsItemClick: propTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  city: state.city,
  coors: state.coors,
  offers: getOffers(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLocationsItemClick(city, state) {
    dispatch(ActionCreator.toggleCity(city));
    dispatch(ActionCreator.toggleCoor(city));
    dispatch(ActionCreator.getList(city, state));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
