import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';

export interface State {
  count: number;
}

// redux-saga
export const sagaMiddleWare = createSagaMiddleware();

// integrate w/DevTools
const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleWare));

// create store for redux
const store:Store<State> = createStore(reducer, composeEnhancers);

// run saga
// sagaMiddleWare.run(rootSaga);

export default store;
