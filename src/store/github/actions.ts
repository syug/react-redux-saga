/**
 * Action types
 */

const GithubActionTypes = {
  USER_FETCH_REQUESTED: 'USER_FETCH_REQUESTED',
} as const;
export type GithubActionType = keyof typeof GithubActionTypes;

/**
 * Action creators
 */

const fetchUser = (userId: number) => ({
  type: GithubActionTypes.USER_FETCH_REQUESTED,
  userId,
});

export type GithubAction = ReturnType<typeof fetchUser>;

export { fetchUser };
