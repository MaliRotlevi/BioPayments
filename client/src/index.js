import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import {userReducer,travelsToUserReducer,profileReducer,constractToUserReducer,constractsReducer} from './store/reducers/index'
import { BrowserRouter } from "react-router-dom";

const combine = combineReducers({user:userReducer,travelsToUser:travelsToUserReducer,profile:profileReducer,constractToUser:constractToUserReducer,constracts:constractsReducer});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combine, composeEnhancers(applyMiddleware(thunk)))
window.store=store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
      {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
