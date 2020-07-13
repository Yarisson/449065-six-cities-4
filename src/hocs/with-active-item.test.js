import React from "react";
import renderer from "react-test-renderer";
import withActiveItem from "./with-active-item.js";

const handleSetActiveItem = function () {

};

const MockComponent = () => {

  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withActiveItem(MockComponent);

it(`WithActiveItem HOC render`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      activeItem={true}
      handleSetActiveItem={handleSetActiveItem}>
      {<div></div>}
    </MockComponentWrapped>
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
