import { AxiosError } from 'axios';
import { githubActionTypes, GithubAction } from './actions';
import { GithubUser, GithubRepo } from '../../services/github/api';

export interface GithubState {
  loading: boolean;
  members: GithubUser[];
  repos: GithubRepo[];
  error?: AxiosError | null;
}

export const initialGithubState = {
  loading: false,
  members: [],
  repos: [],
};

const members = (
  state: GithubState = initialGithubState,
  action: GithubAction
): GithubState => {
  switch (action.type) {
    case githubActionTypes.GET_MEMBERS_STARTED: {
      return {
        ...state,
        loading: true,
        members: [],
      };
    }
    case githubActionTypes.GET_MEMBERS_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        members: action.payload.users,
      };
    }
    case githubActionTypes.GET_MEMBERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

const repos = (
  state: GithubState = initialGithubState,
  action: GithubAction
): GithubState => {
  switch (action.type) {
    case githubActionTypes.GET_REPOS_STARTED: {
      return {
        ...state,
        loading: true,
        repos: [],
      };
    }
    case githubActionTypes.GET_REPOS_SUCCEEDED: {
      return {
        ...state,
        loading: false,
        repos: action.payload.repos,
      };
    }
    case githubActionTypes.GET_REPOS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
};

const githubReducer = (
  state: GithubState = initialGithubState,
  action: GithubAction
): GithubState => {
  switch (action.type) {
    case githubActionTypes.GET_MEMBERS_STARTED:
    case githubActionTypes.GET_MEMBERS_SUCCEEDED:
    case githubActionTypes.GET_MEMBERS_FAILED: {
      return members(state, action);
    }
    case githubActionTypes.GET_REPOS_STARTED:
    case githubActionTypes.GET_REPOS_SUCCEEDED:
    case githubActionTypes.GET_REPOS_FAILED: {
      return repos(state, action);
    }
    default: {
      return state;
    }
  }
};

export default githubReducer;
