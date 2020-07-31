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

const randomFilter = () => {
  return Math.random() > 0.5;
};

const nameAmsterdam = `Amsterdam`;
const nameParis = `Paris`;
const nameCologne = `Cologne`;
const nameBrussels = `Brussels`;
const nameHamburg = `Hamburg`;
const nameDusseldorf = `Dusseldorf`;

export const getAmsterdamOffers = createSelector(
    getOffers,
    nameAmsterdam,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.city.name === nameAmsterdam);
    }
);

export const getParisOffers = createSelector(
    getOffers,
    nameParis,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.city.name === nameParis);
    }
);

export const getCologneOffers = createSelector(
    getOffers,
    nameCologne,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.city.name === nameCologne);
    }
);

export const getBrusselsOffers = createSelector(
    getOffers,
    nameBrussels,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.city.name === nameBrussels);
    }
);

export const getHamburgOffers = createSelector(
    getOffers,
    nameHamburg,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.city.name === nameHamburg);
    }
);

export const getDusseldorfOffers = createSelector(
    getOffers,
    nameDusseldorf,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.city.name === nameDusseldorf);
    }
);

export const getSomeOffers = createSelector(
    getOffers,
    randomFilter,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.city.name === ``);
    }
);
