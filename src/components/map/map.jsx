import React from "react";
// import ReactDOM from "react-dom";
import propTypes from "prop-types";
import leaflet from "leaflet";

const city = [52.38333, 4.9];

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

// {this.props.name}

const initMap = (offers) => {
  // create map
  // const {hotels} = this.props;

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

  offers.forEach((item) => {
    leaflet.marker(item.coor, {icon}).addTo(map);
  });
};

class Map extends React.PureComponent {
  // const {hotels} = props;
  constructor(props) {
    super(props);
    this.hotels = React.createRef();
    // this._initMap() = this.initMap.bind(this);
  }

  // initMap = () => {
  //   // create map
  //   const {hotels} = this.props;

  //   const zoom = 12;
  //   const map = leaflet.map(`map`, {
  //     center: city,
  //     zoom: {zoom},
  //     zoomControl: false,
  //     marker: true
  //   });
  //   map.setView(city, zoom);

  //   leaflet
  //       .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
  //         attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
  //       })
  //       .addTo(map);

  //   hotels.forEach((item) => {
  //     leaflet.marker(item.coor, {icon}).addTo(map);
  //   });
  // };


  componentDidMount() {
    const {hotels} = this.props;
    try {
      return initMap(hotels);
      // return this._initMap();
    } catch (error) {
      return null;
    }
  }


  componentDidMount() {
    // create map
    const {hotels} = this.props;

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

  render() {
    return <div style={{width: `512px`, height: `849px`}} id="map"></div>;
  }
}

Map.propTypes = {
  hotels: propTypes.array.isRequired
};

export default Map;
