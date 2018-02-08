export const FETCH_USERS = "FETCH_USERS";
export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  const { data } = await axiosInstance.get("/users");
  dispatch({ type: FETCH_USERS, payload: data });
};

export const FETCH_ADMINS = "FETCH_ADMINS";
export const fetchAdmins = () => async (dispatch, getState, axiosInstance) => {
  const { data } = await axiosInstance.get("/admins");
  dispatch({ type: FETCH_ADMINS, payload: data });
};

export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER";
export const fetchCurrentUser = () => async (
  dispatch,
  getState,
  axiosInstance
) => {
  const { data } = await axiosInstance.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: data
  });
};
