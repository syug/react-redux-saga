import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Typography } from '@material-ui/core';
import { increment, decrement } from 'store/count/actions';
import { State } from 'store';

const CountPage = () => {
  const dispatch = useDispatch();
  const count: number = useSelector<State, number>(state => state.count);

  const dispatchIncrement = React.useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const dispatchDecrement = React.useCallback(() => {
    dispatch(decrement());
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
    </Grid>
  );
};

export default CountPage;
