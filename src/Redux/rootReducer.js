import { combineReducers } from "redux";
import getReducer from "./Users/UserReducer";

const rootReducer = combineReducers({
  getUser: getReducer,
});
export default rootReducer;
