import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom' // Add client navigation

import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import userReducer from './components/stores/user'
import memoriesReducer from './components/stores/memories'
import updateReducer from './components/stores/update'

const store = configureStore({
  reducer: {
    user : userReducer,
    memories : memoriesReducer,
    update : updateReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>, 
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
