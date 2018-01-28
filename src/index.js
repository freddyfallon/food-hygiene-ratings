import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxPromise)),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
