import { FETCH_USER_DATA, GET_USERS } from "./constants";

export const Getusers = (data) => {
  return {
    type: GET_USERS,
    payload: data,
  };
};

export const fetchUserData = () => {
  return {
    type: FETCH_USER_DATA,
  };
};
