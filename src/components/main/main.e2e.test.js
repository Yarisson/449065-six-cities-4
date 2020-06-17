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

    const main = shallow(
        <Main
          onLocationsItemClick={onLocationsItemClick}
        />
    );

    const locationsItemClick = main.find(`li.locations__item`);

    locationsItemClick.props().onClick();

    expect(onLocationsItemClick.mock.calls.length).toBe(1);
  });
});
