import {combineReducers} from "redux";
import {reducer as data} from "./data/data";
// import {reducer as toggle} from "./toggle/toggle";
import NameSpace from "./name-space";

export default combineReducers({
  [NameSpace.DATA]: data,
  // [NameSpace.TOGGLE]: toggle,
});
