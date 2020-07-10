import React, {PureComponent} from 'react';
// import CityList from '../../city-list.jsx';
// import PlacesList from '../../places-list.jsx';

let isActiveList = [];

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.cityList = React.createRef();

      this.state = {
        isActive: true,
      };
    }

    activeCity() {
      for (let item of this.cityList) {
        if (item.name === props.city) {
          isActiveList.push(true);
        } else {
          isActiveList.push(false);
        }
      }
    }

    render() {
      const {activePlayerId} = this.state;

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
