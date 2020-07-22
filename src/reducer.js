import {extend} from "./utils";

const initialState = {

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
    state.currentOffers = offers.filter(function (e) {
      return e.city.name === state.city;
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

const getStateCityList = (state) => {
  return state.cityList;
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CLEAR_OFFERS: `CLEAR_OFFERS`,
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_LIST: `GET_LIST`,
  TOGGLE_COOR: `TOGGLE_COOR`,
  GET_CITY_LIST: `GET_CITY_LIST`,
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

  //
  getList: (currentCity, array) => {
    let currentList = [];
    currentList = array.filter(function (e) {
      return e.city.name === currentCity;
    });

    return {
      type: ActionType.GET_LIST,
      payload: currentList,
    };
  },

  getCityList: (array) => {
    let cityList = [];
    for (let offer of array) {
      if (!cityList.includes(offer.city.name)) {
        cityList.push(offer.city.name);
      }
    }

    return {
      type: ActionType.GET_CITY_LIST,
      payload: cityList,
    };
  }
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

    case ActionType.GET_LIST:
      return extend(state, {
        currentOffers: action.payload,
      });

    case ActionType.GET_CITY_LIST:
      return extend(state, {
        cityList: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, ActionType, Operation, getAuthorizationStatus, getOffers, getCurrentOffers, getStateCityList, getCurrentCity};
