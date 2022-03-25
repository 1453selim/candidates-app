import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducer'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension'
import { Provider } from 'react-redux';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, promise, logger)))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);