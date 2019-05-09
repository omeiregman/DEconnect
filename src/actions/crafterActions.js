import axios from 'axios';

import { GET_CURRENT_CRAFTER, GET_CRAFTER_FROM_HANDLE, GET_ALL_CRAFTERS, CRAFTER_LOADING, GET_ERRORS, CLEAR_CURRENT_CRAFTER, SET_CURRENT_USER } from './types';

const BASE_URL = "https://thecraftersconnectapi.herokuapp.com/api/";

//Get Current crafter
export const getCurrentCrafter = () => dispatch => {
    dispatch(setCrafterLoading());
    axios.get(`${BASE_URL}crafters`)
    .then(res =>
      dispatch({
        type: GET_CURRENT_CRAFTER,
        payload: res.data
      })
    ).catch(err =>
      dispatch({
        type: GET_CURRENT_CRAFTER,
        payload: {}
      })
    );
}

//Create Crafter
export const createCrafter = (crafterData, history) => dispatch => {
  console.log("Register Crafter Action")
  axios.post(`${BASE_URL}crafters`, crafterData)
  .then(res => history.push("/crafters/dashboard"))
  .catch(err => 
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data
    })
  );
};

//GET ALL CRAFTERS
export const getAllCrafters = () => dispatch => {
  dispatch(setCrafterLoading());
  axios.get(`${BASE_URL}crafters/all`)
  .then(res => {
    dispatch({
      type: GET_ALL_CRAFTERS,
      payload: res.data
    });
  })
  .catch(err => dispatch ({
    type: GET_ALL_CRAFTERS,
    payload: {}
  }) 
  );
}

//GET CRAFTER FROM HANDLE
export const getCrafterFromHandle = (crafterHandle) => dispatch => {
  dispatch(setCrafterLoading());
  axios.get(`${BASE_URL}crafters/handle/${crafterHandle}`)
  .then(res => {
    dispatch({
      type: GET_CRAFTER_FROM_HANDLE,
      payload: res.data
    });
  })
  .catch(err => dispatch ({
    type: GET_CRAFTER_FROM_HANDLE,
    payload: {}
  })
);
}

//Delete Account and Crafter
export const deleteAccount = () => dispatch => {
  if(window.confirm('Are you sure? This can NOT be undone!')) {
    axios.delete(`${BASE_URL}crafters`)
    .then(res => 
    dispatch({
      type: SET_CURRENT_USER,
      payload: {}
    })
  ).catch(err => 
  dispatch({
    type: GET_ERRORS,
    payload: err.response.data
  })
  );
  }
};

//Crafter Loading
export const setCrafterLoading = () => {
  return {
    type: CRAFTER_LOADING
  }
}

//Clear Crafter
export const clearCurrentCrafter = () => {
  return {
    type: CLEAR_CURRENT_CRAFTER
  };
};
