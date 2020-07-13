import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withActiveItem from "./with-active-item.js";

const handleSetActiveItem = function () {

};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withActiveItem(MockComponent);

describe(`variants for HOC WithActiveItem`, () => {
  it(`For CityList`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        activeItem={true}
        handleSetActiveItem={handleSetActiveItem}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With one one count`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        activeItem={[52.390450945458, 4.04309666406198]}
        handleSetActiveItem={handleSetActiveItem}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
