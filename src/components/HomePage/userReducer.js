import { GET_USERS } from "./constants";

const initialState = {
  users: [],
  favourties: [],
  selected: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      const data = action.payload;
      data.sort((a, b) => {
        if (a.first_name < b.first_name) return -1;
        if (a.first_name > b.first_name) return 1;
        return 0;
      });
      return { ...state, users: data };
    case "SELECT_CONTACT":
      return {
        ...state,
        selected: state.users.find((e) => e.id === action.payload),
      };
    case "ADD_TO_FAV":
      return {
        ...state,
        favourties: [
          state.users.find((e) => e.id === action.payload),
          ...state.favourties,
        ],
      };
    case "REMOVE_FROM_FAV":
      return {
        ...state,
        favourties: state.favourties.filter((e) => e.id !== action.payload),
      };
    case "A_Z":
      const data1 = state.users;
      data1.sort((a, b) => {
        if (a.first_name < b.first_name) return -1;
        if (a.first_name > b.first_name) return 1;
        return 0;
      });
      return { ...state, users: data1 };
    case "Z_A":
      const data2 = state.users;
      data2.sort((a, b) => {
        if (a.first_name < b.first_name) return 1;
        if (a.first_name > b.first_name) return -1;
        return 0;
      });
      return { ...state, users: data2 };
    default:
      return state;
  }
};
