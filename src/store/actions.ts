/**
 * Action types
 */

export const CounterActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
} as const;

export type CounterActionType = keyof typeof CounterActionTypes;

/**
 * Action creators
 */

const increment = () => ({
  type: CounterActionTypes.INCREMENT,
});
const decrement = () => ({
  type: CounterActionTypes.DECREMENT,
});

export type CounterAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>;

export { increment, decrement };
