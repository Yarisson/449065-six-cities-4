import React from 'react';
import App from './app.jsx';
import {Provider} from "react-redux";
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

const store = mockStore({
  city: `Amsterdam`,
  coors: [52.38, 4.9],
  offers: [
    {city: `Amsterdam`, img: `img/apartment-01.jpg`, price: `&euro;120`, width: `80%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`, coor: [52.3909553943508, 4.85309666406198]},
    {city: `Amsterdam`, img: `img/room.jpg`, price: `&euro;80`, width: `80%`, title: `Wood and stone place`, type: `Private room`, coor: [52.369553943508, 4.85309666406198]},
    {city: `Amsterdam`, img: `img/apartment-02.jpg`, price: `&euro;132`, width: `80%`, title: `Canal View Prinsengracht`, type: `Apartment`, coor: [52.3909553943508, 4.929309666406198]},
    {city: `Amsterdam`, img: `img/apartment-03.jpg`, price: `&euro;180`, width: `100%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`, coor: [52.3809553943508, 4.939309666406198]},
  ],
});

const places = 120;

const hotels = [
  {img: `img/apartment-01.jpg`, price: `&euro;200`, width: `100%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`, coor: [52.390450945458, 4.04309666406198]},
  {img: `img/room.jpg`, price: `&euro;140`, width: `20%`, title: `Wood and stone place`, type: `Private room`, coor: [51.63072056168636, 4.05303667407681]},
  {img: `img/apartment-02.jpg`, price: `&euro;52`, width: `60%`, title: `Canal View Prinsengracht`, type: `Apartment`, coor: [52.00000000000000, 4.10000000000000]},
  {img: `img/apartment-03.jpg`, price: `&euro;85`, width: `80%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`, coor: [52.10000000000000, 4.15000000000000]},
  {img: `img/room.jpg`, price: `&euro;150`, width: `40%`, title: `Wood and stone place`, type: `Private room`, coor: [52.15000000000000, 4.25000000000000]},
];

it(`App component render`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            places={places}
            hotels={hotels}
          />
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
