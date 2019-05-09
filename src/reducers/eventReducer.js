import { GET_EVENTS, EVENT_LOADING } from '../actions/types';

const initialState = {
  events: {},
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case EVENT_LOADING:
    return {
      ...state,
      loading: true
    }
    case GET_EVENTS:
    return {
      ...state,
      events: action.payload,
      loading: false
    };
    default:
    return state;
  }
}
