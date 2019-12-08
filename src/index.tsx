import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import * as serviceWorker from 'serviceWorker';

import App from './containers/App';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
