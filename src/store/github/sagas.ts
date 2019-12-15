import { call, put, takeLatest } from 'redux-saga/effects';
import * as githubApi from 'services/github';
import { GithubUser, GithubRepo } from 'services/github/api';
import { githubActionTypes, getGithubMembers, getGithubRepos } from './actions';

function* runGetRepos(action: ReturnType<typeof getGithubMembers.start>) {
  try {
    const repos: GithubRepo[] = yield call(
      githubApi.getGithubRepos,
      action.payload.organizationName
    );
    yield put(getGithubRepos.succeeded(repos));
  } catch (e) {
    yield put(getGithubRepos.failed(e));
  }
}

function* runGetMembers(action: ReturnType<typeof getGithubMembers.start>) {
  try {
    const users: GithubUser[] = yield call(
      githubApi.getGithubMembers,
      action.payload.organizationName
    );
    yield put(getGithubMembers.succeeded(users));
  } catch (e) {
    yield put(getGithubMembers.failed(e));
  }
}

function* githubSaga() {
  yield takeLatest(githubActionTypes.GET_MEMBERS_STARTED, runGetMembers);
  yield takeLatest(githubActionTypes.GET_REPOS_STARTED, runGetRepos);
}

export default githubSaga;
