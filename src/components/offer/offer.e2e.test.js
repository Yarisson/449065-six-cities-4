import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Offer from './offer.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

it(`On offer hover and show info`, () => {
  const onHoverCard = jest.fn((evt) => evt.target.currentTarget);
  const handleSetActiveItem = jest.fn((evt) => evt.target.currentTarget);

  const img = `img/room.jpg`;
  const price = `&euro;150`;
  const width = `40%`;
  const title = `Wood and stone place`;
  const type = `Private room`;
  const coor = [52.3909553943508, 4.85309666406198];

  const offer = shallow(
      <Offer
        onHover = {onHoverCard}
        handleSetActiveItem = {handleSetActiveItem}
        img={img}
        price={price}
        width={width}
        title={title}
        type={type}
        coor={coor}
      />
  );

  const header = offer.find(`.place-card__name a`);
  const mockEvent = {
    preventDefault() {},
    target: {currentTarget: `Element`}
  };

  header.simulate(`click`);
  offer.simulate(`mouseover`, mockEvent);

  expect(onHoverCard).toHaveBeenCalledTimes(1);
  expect(onHoverCard).toHaveReturnedWith(`Element`);
  expect(onHoverCard.mock.calls[0][0]).toMatchObject(mockEvent);

  expect(handleSetActiveItem).toHaveBeenCalledTimes(1);
  expect(handleSetActiveItem).toHaveReturnedWith(`Element`);
  expect(handleSetActiveItem.mock.calls[0][0]).toMatchObject(mockEvent);
});
