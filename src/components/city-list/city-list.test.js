import React from 'react';
import CityList from './city-list.jsx';
import renderer from 'react-test-renderer';

const onLocationsItemClick = function () {
};

const handleSetActiveItem = function () {

};

const activeItem = `Amsterdam`;

const cityList = [
  {name: `Paris`, coor: [48.85, 2.34]},
  {name: `Cologne`, coor: [50.93, 6.34]},
  {name: `Brussels`, coor: [50.85, 4.34]},
  {name: `Amsterdam`, coor: [52.38, 4.9]},
  {name: `Hamburg`, coor: [53.57, 10.0]},
  {name: `Dusseldorf`, coor: [51.22, 6.8]}
];

it(`CityList component render`, () => {
  const tree = renderer
    .create(<CityList
      onLocationsItemClick={onLocationsItemClick}
      handleSetActiveItem={handleSetActiveItem}
      cityList={cityList}
      activeItem={activeItem}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
