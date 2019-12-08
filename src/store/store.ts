import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import githubSaga from './github/sagas';

export interface State {
  count: number;
}

// redux-saga
export const sagaMiddleWare = createSagaMiddleware();

// integrate w/DevTools
const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleWare));

// create store for redux
const store: Store<State> = createStore(reducer, composeEnhancers);

// Saga
const rootSaga = githubSaga;
// run saga
sagaMiddleWare.run(rootSaga);

export default store;
