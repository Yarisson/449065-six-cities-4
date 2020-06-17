import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`Main component`, () => {
  it(`Should locations item be pressed`, () => {
    const onLocationsItemClick = jest.fn();

    const hotels = [
      {img: `img/apartment-01.jpg`, price: `&euro;200`, width: `100%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`},
      {img: `img/room.jpg`, price: `&euro;140`, width: `20%`, title: `Wood and stone place`, type: `Private room`},
      {img: `img/apartment-02.jpg`, price: `&euro;52`, width: `60%`, title: `Canal View Prinsengracht`, type: `Apartment`},
      {img: `img/apartment-03.jpg`, price: `&euro;85`, width: `80%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`},
      {img: `img/room.jpg`, price: `&euro;150`, width: `40%`, title: `Wood and stone place`, type: `Private room`},
    ];

    const places = 120;

    const main = shallow(
        <Main
          hotels={hotels}
          places={places}
          onLocationsItemClick={onLocationsItemClick}
        />
    );

    const locationsItemClickList = main.find(`li.locations__item`);

    locationsItemClickList.forEach((link) => {
      link.simulate(`click`);
    });

    expect(onLocationsItemClick).toHaveBeenCalledTimes(locationsItemClickList.length);
  });
});
