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
    const onHover = jest.fn();

    const hotels = [
      {img: `img/apartment-01.jpg`, price: `&euro;200`, width: `100%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`, coor: [52.390450945458, 4.04309666406198]},
      {img: `img/room.jpg`, price: `&euro;140`, width: `20%`, title: `Wood and stone place`, type: `Private room`, coor: [51.63072056168636, 4.05303667407681]},
      {img: `img/apartment-02.jpg`, price: `&euro;52`, width: `60%`, title: `Canal View Prinsengracht`, type: `Apartment`, coor: [52.00000000000000, 4.10000000000000]},
      {img: `img/apartment-03.jpg`, price: `&euro;85`, width: `80%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`, coor: [52.10000000000000, 4.15000000000000]},
      {img: `img/room.jpg`, price: `&euro;150`, width: `40%`, title: `Wood and stone place`, type: `Private room`, coor: [52.15000000000000, 4.25000000000000]},
    ];

    const cityList = [
      {name: `Paris`, coor: [48.85, 2.34]},
      {name: `Cologne`, coor: [50.93, 6.34]},
      {name: `Brussels`, coor: [50.85, 4.34]},
      {name: `Amsterdam`, coor: [52.38, 4.9]},
      {name: `Hamburg`, coor: [53.57, 10.0]},
      {name: `Dusseldorf`, coor: [51.22, 6.8]}
    ];

    const coors = [52.38, 4.9];

    const places = 120;

    const main = shallow(
        <Main
          hotels={hotels}
          places={places}
          coors={coors}
          cityList={cityList}
          onLocationsItemClick={onLocationsItemClick}
          onHover={onHover}
        />
    );

    const locationsItemClickList = main.find(`li.locations__item`);

    locationsItemClickList.forEach((link) => {
      link.simulate(`click`);
    });

    expect(onLocationsItemClick).toHaveBeenCalledTimes(locationsItemClickList.length);
  });
});
