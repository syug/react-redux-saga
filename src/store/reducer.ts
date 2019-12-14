import { combineReducers } from 'redux';
import { countReducer } from './count';
import githubReducer from './github/reducer';

const reducer = combineReducers({
  count: countReducer,
  github: githubReducer,
});

export default reducer;
