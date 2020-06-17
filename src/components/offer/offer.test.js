import React from 'react';
import Offer from './offer.jsx';
import renderer from 'react-test-renderer';

const img = `img/room.jpg`;
const price = `&euro;90`;
const width = `40%`;
const title = `Wood and stone place`;
const type = `Private room`;

it(`Offer component render`, () => {
  const tree = renderer
    .create(<Offer
      img={img}
      price={price}
      width={width}
      title={title}
      type={type}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
