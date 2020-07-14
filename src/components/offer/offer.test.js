import React from 'react';
import Offer from './offer.jsx';
import renderer from 'react-test-renderer';

const img = `img/room.jpg`;
const price = `&euro;90`;
const width = `40%`;
const title = `Wood and stone place`;
const type = `Private room`;
const coor = [52.3909553943508, 4.85309666406198];

const onHover = function () {
};

const handleSetActiveItem = function () {

};

it(`Offer component render`, () => {
  const tree = renderer
    .create(<Offer
      img={img}
      price={price}
      coor={coor}
      width={width}
      title={title}
      type={type}
      onHover={onHover}
      handleSetActiveItem={handleSetActiveItem}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
