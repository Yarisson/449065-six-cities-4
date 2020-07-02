
const initialState = {
  city: `Amsterdam`,
  offers: [
    {img: `img/apartment-01.jpg`, price: `&euro;120`, width: `80%`, title: `Beautiful &amp; luxurious apartment at great location`, type: `Apartment`, coor: [52.3909553943508, 4.85309666406198]},
    {img: `img/room.jpg`, price: `&euro;80`, width: `80%`, title: `Wood and stone place`, type: `Private room`, coor: [52.369553943508, 4.85309666406198]},
    {img: `img/apartment-02.jpg`, price: `&euro;132`, width: `80%`, title: `Canal View Prinsengracht`, type: `Apartment`, coor: [52.3909553943508, 4.929309666406198]},
    {img: `img/apartment-03.jpg`, price: `&euro;180`, width: `100%`, title: `Nice, cozy, warm big bed apartment`, type: `Apartment`, coor: [52.3809553943508, 4.939309666406198]},
  ]
};

const ActionType = {
  TOGGLE_CITY: `TOGGLE_CITY`,
  GET_LIST: `GET_LIST`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.TOGGLE_CITY: 
      state.city = action.payload;
      return state;

    case ActionType.GET_LIST: 
      state.offers = action.payload;
      return state;
  }

  return state;
}

export {reducer, ActionType};
