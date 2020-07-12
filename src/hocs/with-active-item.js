import React, {PureComponent} from 'react';
// import CityList from '../../city-list.jsx';
// import PlacesList from '../../places-list.jsx';

let isActiveList = [];

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.cityList = React.createRef();
      this.city = React.createRef();

      this.state = {
        city: this.props.city,
        cityList: this.props.cityList
      };
    }

    _activeElement(array, current) {
      for (let item of array) {
        if (item === current) {
          isActiveList.push(true);
        } else {
          isActiveList.push(false);
        }
      }
    }

    _activeCity() {
      let activeCity = this.state.city;
      let activeCityList = this.state.cityList;
      console.log(activeCity);
      console.log(activeCityList);
      console.log(isActiveList);
      for (let item of activeCityList) {
        if (item.name === activeCity) {
          isActiveList.push(true);
          item.active = true;
        } else {
          isActiveList.push(false);
          item.active = false;
        }
      }
    }

    componentDidMount() {
      this._activeCity();

      // try {
      //   this._initMap(city);
      //   this._drawMap(hotels, this.zoom);
      //   return null;
      // } catch (error) {
      //   return null;
      // }
    }

    render() {

      return <Component
        {...this.props}
        isActiveList={isActiveList}
      />;
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
