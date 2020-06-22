import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Offer from './offer.jsx';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter()
});

it(`On offer hover and show info`, () => {
  const onHoverCard = jest.fn((evt) => evt.target.currentTarget);

  const img = `img/room.jpg`;
  const price = `&euro;150`;
  const width = `40%`;
  const title = `Wood and stone place`;
  const type = `Private room`;

  const offer = shallow(
      <Offer
        onHover = {onHoverCard}
        img={img}
        price={price}
        width={width}
        title={title}
        type={type}
      />
  );

  const header = offer.find(`.place-card__name a`);
  const mockEvent = {
    target: {currentTarget: `Element`}
  };

  header.simulate(`click`);
  offer.simulate(`mouseover`, mockEvent);

  expect(onHoverCard).toHaveBeenCalledTimes(1);
  expect(onHoverCard).toHaveReturnedWith(`Element`);
  expect(onHoverCard.mock.calls[0][0]).toMatchObject(mockEvent);
});
