import { combineReducers } from 'redux';
import { CounterActionTypes, CounterAction } from './actions';

const count = (state: number = 0, action: CounterAction) => {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return state + 1;
    case CounterActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const reducer = combineReducers({
  count,
});

export default reducer;
