import {extend} from "./utils";

import offersAll from "./mocks/offers-all.js";
import cityList from "./mocks/city-list.js";

const initialState = {
  city: `Amsterdam`,
  coors: [52.38, 4.9],
  offers: [
    {city: `Amsterdam`, img: `img/apartment-01.jpg`, price: `&euro;120`, width: `80%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`, coor: [52.3909553943508, 4.85309666406198]},
    {city: `Amsterdam`, img: `img/room.jpg`, price: `&euro;80`, width: `80%`, title: `Wood and stone place`, type: `Private room`, coor: [52.369553943508, 4.85309666406198]},
    {city: `Amsterdam`, img: `img/apartment-02.jpg`, price: `&euro;132`, width: `80%`, title: `Canal View Prinsengracht`, type: `Apartment`, coor: [52.3909553943508, 4.929309666406198]},
    {city: `Amsterdam`, img: `img/apartment-03.jpg`, price: `&euro;180`, width: `100%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`, coor: [52.3809553943508, 4.939309666406198]},
  ],
};

const offersList = offersAll;

const ActionType = {
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_LIST: `GET_LIST`,
  TOGGLE_COOR: `TOGGLE_COOR`,
};

const ActionCreator = {
  toggleCity: (city) => {
    return {
      type: ActionType.TOGGLE_CITY,
      payload: city,
    };
  },

  toggleCoor: (city) => {
    let coordinates;
    for (let item of cityList) {
      if (item.name === city) {
        coordinates = item.coor;
      }
    }

    return {
      type: ActionType.TOGGLE_COOR,
      payload: coordinates,
    };
  },

  getList: (city) => {
    let currentList = [];
    for (let offer of offersList) {
      if (offer.city === city) {
        currentList.push(offer);
      }
    }

    return {
      type: ActionType.GET_LIST,
      payload: currentList,
    };
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.TOGGLE_COOR:
      return extend(state, {
        coors: action.payload,
      });

    case ActionType.GET_LIST:
      return extend(state, {
        offers: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType};
