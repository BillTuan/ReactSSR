import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5001"
});

export const FETCH_USERS = "FETCH_USERS";
export const fetchUsers = () => async dispatch => {
  const { data } = await axiosInstance.get("/users");
  dispatch({ type: FETCH_USERS, payload: data });
};
