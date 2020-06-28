import React from 'react';
import Main from './main.jsx';
import renderer from 'react-test-renderer';

const places = 120;

const onLocationsItemClick = function () {
};

const onHover = function () {
};

const hotels = [
  {img: `img/apartment-01.jpg`, price: `&euro;200`, width: `100%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`, coor: [52.390450945458, 4.04309666406198]},
  {img: `img/room.jpg`, price: `&euro;140`, width: `20%`, title: `Wood and stone place`, type: `Private room`, coor: [51.63072056168636, 4.05303667407681]},
  {img: `img/apartment-02.jpg`, price: `&euro;52`, width: `60%`, title: `Canal View Prinsengracht`, type: `Apartment`, coor: [52.00000000000000, 4.10000000000000]},
  {img: `img/apartment-03.jpg`, price: `&euro;85`, width: `80%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`, coor: [52.10000000000000, 4.15000000000000]},
  {img: `img/room.jpg`, price: `&euro;150`, width: `40%`, title: `Wood and stone place`, type: `Private room`, coor: [52.15000000000000, 4.25000000000000]},
];

it(`Main component render`, () => {
  const tree = renderer
    .create(<Main
      places={places}
      hotels={hotels}
      onLocationsItemClick={onLocationsItemClick}
      onHover={onHover}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
