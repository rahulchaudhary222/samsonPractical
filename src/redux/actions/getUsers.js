export const SELECTCONTACT = (data) => {
  return {
    type: "SELECT_CONTACT",
    payload: data,
  };
};
export const removeFromFav = (data) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: data,
  };
};
export const addToFav = (data) => {
  return {
    type: "ADD_TO_FAV",
    payload: data,
  };
};
export const atoz = () => {
  return {
    type: "A_Z",
  };
};
export const ztoa = () => {
  return {
    type: "Z_A",
  };
};
