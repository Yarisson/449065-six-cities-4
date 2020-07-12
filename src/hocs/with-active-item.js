import React, { PureComponent } from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: null,
      };

      this.handleSetActiveItem = this.handleSetActiveItem.bind(this);
    }

    handleSetActiveItem(item) {
      this.setState(() => ({
        activeItem: item,
      }));

      console.log(item);
      return activeItem
    }

    render() {
      const { activeItem } = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          handleSetActiveItem={this.handleSetActiveItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;
