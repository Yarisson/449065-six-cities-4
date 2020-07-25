import React from "react";
import {connect} from "react-redux";
import {ActionCreator, getAuthorizationStatus, getOffers, getCurrentOffers, getStateCityList, getCurrentCity} from "../../reducer.js";
import propTypes from "prop-types";
import Main from '../main/main.jsx';

import withActiveItem from "../../hocs/with-active-item.js";

const MainWrapped = withActiveItem(Main);

const onHover = function () {

};

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.places = React.createRef();
  }

  componentDidUpdate(prevProps) {
    if (this.props.offers !== prevProps.offers) {
      this.props.getListOfCity(this.props.offers);
    }
  }

  render() {
    return (
      <MainWrapped
        offers={this.props.offers} hotels={this.props.currentOffers} places={this.props.places} city={this.props.city} cityList={this.props.cityList} onLocationsItemClick={this.props.onLocationsItemClick} onCurrentCityListClearClick={this.props.onCurrentCityListClearClick} onCurrentCityListUpdateClick={this.props.onCurrentCityListUpdateClick} onHover={onHover}
      />
    );
  }
}

App.propTypes = {
  places: propTypes.number,
  offers: propTypes.arrayOf(
      propTypes.shape({
        city: propTypes.objectOf(
            propTypes.shape({
              name: propTypes.string,
              location: propTypes.objectOf(
                  propTypes.shape({
                    latitude: propTypes.number,
                    longitude: propTypes.number,
                  })
              ),
            })
        ),
        image: propTypes.string,
        price: propTypes.number,
        rating: propTypes.string,
        title: propTypes.string,
        type: propTypes.string,
        location: propTypes.array,
      })
  ),
  currentOffers: propTypes.arrayOf(
      propTypes.shape({
        city: propTypes.objectOf(
            propTypes.shape({
              name: propTypes.sting,
              location: propTypes.objectOf(
                  propTypes.shape({
                    latitude: propTypes.number,
                    longitude: propTypes.number,
                  })
              ),
            })
        ),
        image: propTypes.string,
        price: propTypes.number,
        rating: propTypes.number,
        title: propTypes.string,
        type: propTypes.string,
        location: propTypes.array,
      })
  ),
  city: propTypes.string,
  cityList: propTypes.array,
  onLocationsItemClick: propTypes.func,
  onCurrentCityListClearClick: propTypes.func,
  onCurrentCityListUpdateClick: propTypes.func,
  getListOfCity: propTypes.func
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  city: getCurrentCity(state),
  offers: getOffers(state),
  currentOffers: getCurrentOffers(state),
  cityList: getStateCityList(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLocationsItemClick(city) {
    dispatch(ActionCreator.toggleCity(city));
  },
  onCurrentCityListClearClick() {
    dispatch(ActionCreator.clearOffers());
  },
  onCurrentCityListUpdateClick(city, offers) {
    dispatch(ActionCreator.getList(city, offers));
  },
  getListOfCity(offers) {
    dispatch(ActionCreator.getCityList(offers));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
