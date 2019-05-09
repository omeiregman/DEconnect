import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleWare = [thunk]

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
            applyMiddleware(...middleWare)
      )
  );

export default store;
