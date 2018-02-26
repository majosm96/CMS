/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';


/** Import styles */
require('../sass/style.scss');

/** Render of the App and it attaches to the DOM */
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

