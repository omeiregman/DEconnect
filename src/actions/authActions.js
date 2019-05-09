import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from './types';


const BASE_URL = "https://thecraftersconnectapi.herokuapp.com/api/";

//Register User

export const registerUser = (userData, history) => dispatch => {
  axios.post(`${BASE_URL}users/register`, userData)
  .then(res => history.push('/signin'))
  .catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
);
}

//Login - Get User Token

export const loginUser = (userData) => dispatch => {
  axios.post(`${BASE_URL}users/login`, userData)
  .then(res => {
    //save to local storage
    const { token } = res.data;

    //set token to local storage
    localStorage.setItem('jwtToken', token);
    //set token to Auth header
    setAuthToken(token);
    //Decode token to get user userData
    const decoded = jwt_decode(token);
    //set current user
    dispatch(setCurrentUser(decoded));

  }).catch(err => dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
);
}

//Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

//Log User Out
export const logoutUser = () => dispatch => {
  //Remove Token from Local storage
  localStorage.removeItem('jwtToken');
  //Remove the Auth Header for future requests
  setAuthToken(false);
  //Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));

}
