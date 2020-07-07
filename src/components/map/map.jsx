import React from "react";
// import ReactDOM from "react-dom";
import propTypes from "prop-types";
import leaflet from "leaflet";

// let city = props.coors;
let city;

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.hotels = React.createRef();
    this.coors = React.createRef();
  }

  _initMap() {
    // create map
    let {hotels} = this.props;
    let {coors} = this.props;
    city = coors;

    console.log(coors);
    console.log(city);

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom: {zoom},
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(map);

    hotels.forEach((item) => {
      leaflet.marker(item.coor, {icon}).addTo(map);
    });
  }

  componentDidMount() {
    try {
      return this._initMap();
    } catch (error) {
      return null;
    }
  }

  render() {
    return <div style={{width: `512px`, height: `849px`}} id="map"></div>;
  }
}

Map.propTypes = {
  hotels: propTypes.array.isRequired,
  coors: propTypes.array.isRequired
};

export default Map;
