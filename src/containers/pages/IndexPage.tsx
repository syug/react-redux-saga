import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Button, Typography } from '@material-ui/core';
import { State } from 'store';

const IndexPage = () => {
  const count: number = useSelector<State, number>(state => state.count);

  return (
    <React.Fragment>
      <Box mb={3}>
        <Typography>Current count: {count}</Typography>
      </Box>
      <Box>
        <Link to="count">
          <Button color="primary">Go to Count</Button>
        </Link>
        <Link to="github">
          <Button color="primary">Go to Github</Button>
        </Link>
      </Box>
    </React.Fragment>
  );
};

export default IndexPage;
