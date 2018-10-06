import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={createStore(rootReducer, applyMiddleware(thunk))}>
      <App/>
    </Provider>
    , document.querySelector('#root'));
});