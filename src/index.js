import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers.js";
import {reducer} from "./reducer.js";
import cityList from "./mocks/city-list.js";

const init = () => {

  const settings = {
    places: 312,
    hotels: [
      {img: `img/apartment-01.jpg`, price: `&euro;120`, width: `80%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`},
      {img: `img/room.jpg`, price: `&euro;80`, width: `80%`, title: `Wood and stone place`, type: `Private room`},
      {img: `img/apartment-02.jpg`, price: `&euro;132`, width: `80%`, title: `Canal View Prinsengracht`, type: `Apartment`},
      {img: `img/apartment-03.jpg`, price: `&euro;180`, width: `100%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`},
      {img: `img/room.jpg`, price: `&euro;80`, width: `80%`, title: `Wood and stone place`, type: `Private room`},
    ],
  };

  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );

  ReactDOM.render(
      <Provider store={store}>
        <App
          places={settings.places} hotels={offers} cityList={cityList}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
