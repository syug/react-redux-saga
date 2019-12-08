/**
 * Action types
 */

export const CountActionTypes = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
} as const;

export type CountActionType = keyof typeof CountActionTypes;

/**
 * Action creators
 */

const increment = () => ({
  type: CountActionTypes.INCREMENT,
});
const decrement = () => ({
  type: CountActionTypes.DECREMENT,
});

export type CountAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>;

export { increment, decrement };
