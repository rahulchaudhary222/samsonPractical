import { combineReducers } from "redux";
import { userReducer } from "../components/HomePage/userReducer";

const rootReduser = combineReducers({
  userData: userReducer,
});

export default rootReduser;
