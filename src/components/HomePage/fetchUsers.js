import axios from "axios";

export const fecthUsers = () => {
  return axios.get("https://reqres.in/api/users");
};
