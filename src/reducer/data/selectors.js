import {createSelector} from "reselect";
import NameSpace from "../name-space";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCurrentOffers = (state) => {
  if (state[NameSpace.DATA].offers && !state[NameSpace.DATA].currentOffers) {
    return state[NameSpace.DATA].offers.filter((e) => e.city.name === state[NameSpace.DATA].city);
  }

  return state[NameSpace.DATA].currentOffers;
};

export const getCurrentCity = (state) => {
  if (state[NameSpace.DATA].offers && state[NameSpace.DATA].offers.length > 0) {
    state[NameSpace.DATA].city = state[NameSpace.DATA].offers[0].city.name;
    return state[NameSpace.DATA].city;
  }
};

export const getStateCityList = (state) => {
  return state[NameSpace.DATA].cityList;
};
