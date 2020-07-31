import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {reducer, ActionType, Operation} from "./data";

const api = createAPI(() => {});

const offers = [
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 5.47,
        longitude: 38.93,
        zoom: 16,
      }
    },
    image: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    price: 350,
    rating: 3.7,
    title: `first hotel`,
    type: `hotel`,
    location: {
      latitude: 5.460000,
      longitude: 38.80000,
    },
  }, {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 5.47,
        longitude: 38.93,
        zoom: 16,
      }
    },
    image: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    price: 350,
    rating: 3.7,
    title: `first hotel`,
    type: `hotel`,
    location: {
      latitude: 5.460000,
      longitude: 38.80000,
    },
  }, {
    city: {
      name: `Paris`,
      location: {
        latitude: 5.47,
        longitude: 38.93,
        zoom: 16,
      }
    },
    image: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    price: 350,
    rating: 3.7,
    title: `first hotel`,
    type: `hotel`,
    location: {
      latitude: 5.460000,
      longitude: 38.80000,
    }
  }
];


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    offers: [],
  });
});

it(`Reducer should update questions by load questions`, () => {
  expect(reducer({
    offers: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  })).toEqual({
    offers,
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
});
