import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
// import {createStore} from "redux";
import App from "./components/app/app.jsx";
import {reducer} from "./reducer/reducer.js";
import {Operation as DataOperation, ActionCreator} from "./reducer/data/data";
// import {Operation as OffersOperation, ActionCreator} from "./reducer.js";
import {createAPI, AuthorizationStatus} from "./api";

const init = () => {

  const settings = {
    places: 312,
  };

  const onUnauthorized = () => {
    store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
  };

  const api = createAPI(onUnauthorized);

  const store = createStore(
      reducer,
      composeWithDevTools(
          applyMiddleware(thunk.withExtraArgument(api))
      )
  );

  store.dispatch(DataOperation.loadOffers());

  ReactDOM.render(
      <Provider store={store}>
        <App
          places={settings.places}
        />
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
