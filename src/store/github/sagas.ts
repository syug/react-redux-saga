import { call, put, takeLatest } from 'redux-saga/effects';
import * as githubApi from 'services/github';
import { GithubUser } from 'services/github/getGithubMembers';
import { githubActionTypes, getGithubMembers } from './actions';

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
}

export default githubSaga;
