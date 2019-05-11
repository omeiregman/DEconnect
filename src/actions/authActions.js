import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { config } from "../utils";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

const BASE_URL = config.fetchUrl;

//Register User

export const registerUser = (userData, history) => dispatch => {
  axios
    .post(`${BASE_URL}/users/register`, userData)
    .then(res => {
      dispatch(setCurrentUser(res.data.user));
      history.push("/profile");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login - Get User Token

export const loginUser = (userData, history) => dispatch => {
  axios
    .post(`${BASE_URL}/users/login`, userData)
    .then(res => {
      //save to local storage
      // const { token } = res.data;
      //set token to local storage
      // localStorage.setItem("jwtToken", "hey baby");
      //set token to Auth header
      // setAuthToken(token);
      //Decode token to get user userData
      // const decoded = jwt_decode(token);
      //set current user
      dispatch(setCurrentUser(res.data.user));
      history.push("/edit-profile");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Log User Out
export const logoutUser = () => dispatch => {
  //Remove Token from Local storage
  localStorage.removeItem("jwtToken");
  //Remove the Auth Header for future requests
  setAuthToken(false);
  //Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
