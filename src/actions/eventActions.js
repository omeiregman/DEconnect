import axios from 'axios';

import { GET_EVENTS, EVENT_LOADING } from './types';

const BASE_URL = "https://thecraftersconnectapi.herokuapp.com/api/";


//Get EVENTS

export const getEvents = () => dispatch => {
  dispatch(setEventLoading());
  axios.get(`${BASE_URL}events/all`)
  .then(res => {
    dispatch({
      type: GET_EVENTS,
      payload: res.data.events
    });
  }
  ).catch(err =>
    dispatch({
      type: GET_EVENTS,
      payload: {}
    })
  );
}

//Event Loading
export const setEventLoading = () => {
  return {
    type: EVENT_LOADING
  }
}
