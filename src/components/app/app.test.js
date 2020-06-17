import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const places = 120;

const hotels = [
  {img: `img/apartment-01.jpg`, price: `&euro;200`, width: `100%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`},
  {img: `img/room.jpg`, price: `&euro;140`, width: `20%`, title: `Wood and stone place`, type: `Private room`},
  {img: `img/apartment-02.jpg`, price: `&euro;52`, width: `60%`, title: `Canal View Prinsengracht`, type: `Apartment`},
  {img: `img/apartment-03.jpg`, price: `&euro;85`, width: `80%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`},
  {img: `img/room.jpg`, price: `&euro;150`, width: `40%`, title: `Wood and stone place`, type: `Private room`},
];

it(`Main component render`, () => {
  const tree = renderer
    .create(<App
      places={places}
      hotels={hotels}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
