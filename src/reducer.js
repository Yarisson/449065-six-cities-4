import {extend} from "./utils";

const initialState = {
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
  if (state.offers && state.offers.length > 0) {
    state.city = state.offers[0].city.name;
    return state.city;
  }
};

const getCurrentCoor = (state) => {
  if (state.offers) {
    state.coors = [state.offers[0].city.location.latitude, state.offers[0].city.location.longitude];
    return state.coors;
  }
};

const getCityList = (state) => {
  if (state.offers) {
    let cityNames = [];

    for (let offer of state.offers) {
      if (!cityNames.includes(offer.city.name)) {
        cityNames.push(offer.city.name);
        state.cityList.push(offer.city);
        console.log(state.cityList);
      }
    }

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
    for (let item of state.cityList) {
      if (item.name === city) {
        coordinates = [item.location.latitude, item.location.longitude];
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
