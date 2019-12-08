export const CounterActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
};

export type CounterActionType = keyof typeof CounterActionTypes;

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
