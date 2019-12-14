import { githubActionTypes, GithubAction } from './actions';
import { GithubUser } from '../../services/github/getGithubMembers';
import { AxiosError } from 'axios';

export interface GithubState {
  loading: boolean;
  members: GithubUser[];
  error?: AxiosError | null;
}

export const initialGithubState = {
  loading: false,
  members: [],
};

const githubReducer = (
  state: GithubState = initialGithubState,
  action: GithubAction
): GithubState => {
  switch (action.type) {
    case githubActionTypes.GET_MEMBERS_STARTED: {
      return {
        loading: true,
        members: [],
      };
    }
    case githubActionTypes.GET_MEMBERS_SUCCEEDED: {
      return {
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

export default githubReducer;
