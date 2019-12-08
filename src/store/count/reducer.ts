import { CountState, initialCountState } from './state';
import { CountActionTypes, CountAction } from './actions';

const countReducer = (
  state: CountState = initialCountState,
  action: CountAction
) => {
  switch (action.type) {
    case CountActionTypes.INCREMENT:
      return state + 1;
    case CountActionTypes.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default countReducer;
