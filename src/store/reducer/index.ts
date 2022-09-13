import { combineReducers } from "redux";
import AuthReducer   from "./userAuth";
import userReducer from "./users";


export default combineReducers({
  AuthReducer,
  userReducer
});
