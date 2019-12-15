import { GithubUser, GithubRepo } from 'services/github/api';
import { AxiosError } from 'axios';

/**
 * Action types
 */

export const githubActionTypes = {
  GET_MEMBERS_STARTED: 'GET_MEMBERS_STARTED',
  GET_MEMBERS_SUCCEEDED: 'GET_MEMBERS_SUCCEEDED',
  GET_MEMBERS_FAILED: 'GET_MEMBERS_FAILED',
  GET_REPOS_STARTED: 'GET_REPOS_STARTED',
  GET_REPOS_SUCCEEDED: 'GET_REPOS_SUCCEEDED',
  GET_REPOS_FAILED: 'GET_REPOS_FAILED',
} as const;
export type GithubActionType = keyof typeof githubActionTypes;

/**
 * Action creators
 */

export const getGithubMembers = {
  start: (organizationName: string) => ({
    type: githubActionTypes.GET_MEMBERS_STARTED,
    payload: { organizationName },
  }),
  succeeded: (users: GithubUser[]) => ({
    type: githubActionTypes.GET_MEMBERS_SUCCEEDED,
    payload: { users },
  }),
  failed: (error: AxiosError) => ({
    type: githubActionTypes.GET_MEMBERS_FAILED,
    payload: { error },
    error: true,
  }),
};

export const getGithubRepos = {
  start: (organizationName: string) => ({
    type: githubActionTypes.GET_REPOS_STARTED,
    payload: { organizationName },
  }),
  succeeded: (repos: GithubRepo[]) => ({
    type: githubActionTypes.GET_REPOS_SUCCEEDED,
    payload: { repos },
  }),
  failed: (error: AxiosError) => ({
    type: githubActionTypes.GET_REPOS_FAILED,
    payload: { error },
    error: true,
  }),
};

export type GithubAction =
  | ReturnType<typeof getGithubMembers.start>
  | ReturnType<typeof getGithubMembers.succeeded>
  | ReturnType<typeof getGithubMembers.failed>
  | ReturnType<typeof getGithubRepos.start>
  | ReturnType<typeof getGithubRepos.succeeded>
  | ReturnType<typeof getGithubRepos.failed>;
