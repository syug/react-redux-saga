import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Typography } from '@material-ui/core';
import { increment, decrement } from 'store/count/actions';
import { getGithubMembers } from 'store/github/actions';
import { State } from 'store';
import { GithubUser } from 'services/github/getGithubMembers';

const CountPage = () => {
  const dispatch = useDispatch();
  const count: number = useSelector<State, number>(state => state.count);
  const members: GithubUser[] = useSelector<State, GithubUser[]>(
    state => state.github.members
  );
  console.log('members', members);

  const dispatchIncrement = React.useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const dispatchDecrement = React.useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  const dispatchGetMembers = React.useCallback(() => {
    dispatch(getGithubMembers.start('rakuten-rex'));
    // dispatch(getGithubMembers.start('facebook'));
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs>
        <Typography>{count}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" variant="contained" onClick={dispatchIncrement}>
          Increment
        </Button>
        <Button variant="contained" onClick={dispatchDecrement}>
          Decrement
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          color="primary"
          variant="contained"
          onClick={dispatchGetMembers}
        >
          Get members
        </Button>
      </Grid>
    </Grid>
  );
};

export default CountPage;
