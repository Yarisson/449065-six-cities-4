import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const hotels = [
    {img: `img/apartment-01.jpg`, price: `&euro;120`, width: `80%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`},
    {img: `img/room.jpg`, price: `&euro;80`, width: `80%`, title: `Wood and stone place`, type: `Private room`},
    {img: `img/apartment-02.jpg`, price: `&euro;132`, width: `80%`, title: `Canal View Prinsengracht`, type: `Apartment`},
    {img: `img/apartment-03.jpg`, price: `&euro;180`, width: `100%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`},
    {img: `img/room.jpg`, price: `&euro;80`, width: `80%`, title: `Wood and stone place`, type: `Private room`},
  ];

  const settings = {
    currentPlaces: 312
  };

  ReactDOM.render(
      <App
        currentPlaces={settings.currentPlaces} hotelsMok={hotels}
      />,
      document.querySelector(`#root`)
  );
};

init();
