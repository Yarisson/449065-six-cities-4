import React from "react";
// import ReactDOM from "react-dom";
import propTypes from "prop-types";
import leaflet from "leaflet";

let city;

const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

const iconActive = leaflet.icon({
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
});

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.hotels = React.createRef();
    this.coors = React.createRef();
    this.activeItem = React.createRef();
  }

  _initMap(point) {
    const zoom = 12;
    this._map = leaflet.map(`map`, {
      center: point,
      zoom,
      zoomControl: false,
      marker: true
    });
  }

  _drawMap(currentArray, currentZoom) {
    this._map.setView(city, currentZoom);

    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);

    currentArray.forEach((item) => {
      let offerCoors = [item.location.latitude, item.location.longitude];
      if (this.props.activeItem === null) {
        leaflet.marker(offerCoors, {icon}).addTo(this._map);
      } else {
        if (item.location === this.props.activeItem) {
          leaflet.marker(offerCoors, {iconActive}).addTo(this._map);
        } else {
          leaflet.marker(offerCoors, {icon}).addTo(this._map);
        }
      }
    });
  }

  _deleteMarker() {
    this._map.eachLayer((layer) => {
      layer.remove();
    });
  }

  componentDidMount() {
    let {hotels} = this.props;
    let {coors} = this.props;
    city = coors;

    try {
      this._initMap(city);
      this._drawMap(hotels, this.zoom);
      return null;
    } catch (error) {
      return null;
    }
  }

  componentDidUpdate() {
    this._deleteMarker();
    let {hotels} = this.props;
    let {coors} = this.props;
    city = coors;
    try {
      return this._drawMap(hotels, this.zoom);
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
  // coors: propTypes.array.isRequired,
  activeItem: propTypes.array
};

export default Map;
