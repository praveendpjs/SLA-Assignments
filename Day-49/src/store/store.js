// Redux Store Configuration
import { createStore, combineReducers } from 'redux';

// Counter Reducer
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    case 'INCREMENT_BY':
      return state + action.payload;
    default:
      return state;
  }
}

// Login Reducer
function loginReducer(state = false, action) {
  switch (action.type) {
    case 'LOGIN':
      return true;
    case 'LOGOUT':
      return false;
    default:
      return state;
  }
}

// Theme Reducer
function themeReducer(state = 'light', action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    case 'SET_THEME':
      return action.payload;
    default:
      return state;
  }
}

// Cart Reducer
function cartReducer(state = 0, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return state + 1;
    case 'REMOVE_FROM_CART':
      return state > 0 ? state - 1 : 0;
    case 'ADD_MULTIPLE':
      return state + action.payload;
    case 'CLEAR_CART':
      return 0;
    default:
      return state;
  }
}

// Combine all reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  theme: themeReducer,
  cart: cartReducer,
});

// Create the Redux store
const store = createStore(rootReducer);

export default store;

