import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Typography } from '@material-ui/core';
import { getGithubMembers, getGithubRepos } from 'store/github/actions';
import { State } from 'store';
import { GithubUser, GithubRepo } from 'services/github/api';

const GithubPage = () => {
  const dispatch = useDispatch();
  const count: number = useSelector<State, number>(state => state.count);
  const members: GithubUser[] = useSelector<State, GithubUser[]>(
    state => state.github.members
  );
  const repos: GithubRepo[] = useSelector<State, GithubRepo[]>(
    state => state.github.repos
  );

  const dispatchGetMembers = React.useCallback(() => {
    dispatch(getGithubMembers.start('rakuten-rex'));
    // dispatch(getGithubMembers.start('facebook'));
  }, [dispatch]);

  const dispatchGetRepos = React.useCallback(() => {
    dispatch(getGithubRepos.start('rakuten-rex'));
    // dispatch(getGithubMembers.start('facebook'));
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs>
        <Typography>{count}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="primary"
          variant="contained"
          onClick={dispatchGetMembers}
        >
          Get members
        </Button>
        <Button color="primary" variant="contained" onClick={dispatchGetRepos}>
          Get repos
        </Button>
      </Grid>
      <Grid item xs={12}>
        {members.map(member => (
          <div key={member.id}>{member.login}</div>
        ))}
      </Grid>
      <Grid item xs={12}>
        {repos.map(repo => (
          <div key={repo.id}>{repo.name}</div>
        ))}
      </Grid>
    </Grid>
  );
};

export default GithubPage;
