import {extend} from "./utils";

import cityList from "./mocks/city-list.js";

// const initialState = {
//   city: `Amsterdam`,
//   coors: [52.38, 4.9],
//   offers: [
//     {city: `Amsterdam`, img: `img/apartment-01.jpg`, price: `&euro;120`, width: `80%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`, coor: [52.3909553943508, 4.85309666406198]},
//     {city: `Amsterdam`, img: `img/room.jpg`, price: `&euro;80`, width: `80%`, title: `Wood and stone place`, type: `Private room`, coor: [52.369553943508, 4.85309666406198]},
//     {city: `Amsterdam`, img: `img/apartment-02.jpg`, price: `&euro;132`, width: `80%`, title: `Canal View Prinsengracht`, type: `Apartment`, coor: [52.3909553943508, 4.929309666406198]},
//     {city: `Amsterdam`, img: `img/apartment-03.jpg`, price: `&euro;180`, width: `100%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`, coor: [52.3809553943508, 4.939309666406198]},
//   ],
// };

const initialState = {
  // city: `Amsterdam`,
  // coors: [52.38, 4.9],
  currentOffers: [],
  cityList: [],
};

const getAuthorizationStatus = (state) => {
  return state.authorizationStatus;
};

const getOffers = (state) => {
  return state.offers;
};

const getCurrentOffers = (state) => {
  if (state.offers) {
    let offers = state.offers;
    offers.forEach((offer) => {
      if (offer.city.name === state.city) {
        state.currentOffers.push(offer);
      }
    });
  }

  return state.currentOffers;
};

const getCurrentCity = (state) => {
  if (state.offers) {
    state.city = state.offers[0].city.name;
    return state.city;
  }
};

const getCurrentCoor = (state) => {
  if (state.offers) {
    state.coors = [state.offers[0].city.latitude, state.offers[0].city.longitude];
    return state.coors;
  }
};


const getCityList = (state) => {
  if (state.offers) {
    let offers = state.offers;
    let cityLength;
    offers.forEach((offer) => {
      state.cityList.name.push(offer.city.name);
      state.cityList.coors.push(offer.city.location);
    });
    for (let q = 1, i = 1; q < state.cityList.length; ++q) {
      if (state.cityList[q] !== state.cityList[q - 1]) {
        state.cityList[i++] = state.cityList[q];
        cityLength = i;
      }
    }

    state.cityList.length = cityLength;
    return state.cityList;
  }
};

const offersList = (state) => {
  return state.offers;
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CLEAR_OFFERS: `CLEAR_OFFERS`,
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_LIST: `GET_LIST`,
  TOGGLE_COOR: `TOGGLE_COOR`,
};

const ActionCreator = {
  loadOffers: (offers) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },

  toggleCity: (city) => {
    return {
      type: ActionType.TOGGLE_CITY,
      payload: city,
    };
  },

  clearOffers: () => {
    return {
      type: ActionType.CLEAR_OFFERS,
      payload: [],
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
    for (let offer of state.offers) {
      if (offer.city.name === city) {
        state.currentOffers.push(offer);
      }
    }

    return {
      type: ActionType.GET_LIST,
      payload: state.currentOffers,
    };
  },
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.TOGGLE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.CLEAR_OFFERS:
      return extend(state, {
        currentOffers: action.payload,
      });

    case ActionType.TOGGLE_COOR:
      return extend(state, {
        coors: action.payload,
      });

    case ActionType.GET_LIST:
      return extend(state, {
        currentOffers: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation, getAuthorizationStatus, getOffers, getCurrentOffers, getCurrentCity, getCurrentCoor, getCityList};
