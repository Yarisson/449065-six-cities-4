import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const settings = {
    currentPlaces: 312
  };

  ReactDOM.render(
      <App
        currentPlaces={settings.currentPlaces}
      />,
      document.querySelector(`#root`)
  );
};

init();
