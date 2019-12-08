import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid, Button, Typography } from '@material-ui/core';
import { increment, decrement } from '../store/actions';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const dispatch = useDispatch();
  // const count = useSelector(state => state.count);
  const count = 0;

  const dispatchIncrement = React.useCallback(() => {
    dispatch(increment());
  }, [dispatch]);

  const dispatchDecrement = React.useCallback(() => {
    dispatch(decrement());
  }, [dispatch]);

  return (
    <Container>
      <Grid container>
        <Grid item xs>
          <Typography>{count}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            onClick={dispatchIncrement}
          >
            Increment
          </Button>
          <Button variant="contained" onClick={dispatchDecrement}>
            Decrement
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
