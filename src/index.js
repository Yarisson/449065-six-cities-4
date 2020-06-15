import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {


  const settings = {
    places: 312,
    hotels: [
      {img: `img/apartment-01.jpg`, price: `&euro;120`, width1:`80%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`},
      {img: `img/room.jpg`, price: `&euro;80`, width1:`80%`, title: `Wood and stone place`, type: `Private room`},
      {img: `img/apartment-02.jpg`, price: `&euro;132`, width1:`80%`, title: `Canal View Prinsengracht`, type: `Apartment`},
      {img: `img/apartment-03.jpg`, price: `&euro;180`, width1:`100%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`},
      {img: `img/room.jpg`, price: `&euro;80`, width1:`80%`, title: `Wood and stone place`, type: `Private room`},
    ],
  };

  ReactDOM.render(
      <App
        places={settings.places} hotels={settings.hotels}
      />,
      document.querySelector(`#root`)
  );
};

init();
