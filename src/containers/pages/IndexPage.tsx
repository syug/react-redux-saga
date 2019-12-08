import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';

const IndexPage = () => {
  return (
    <Grid container>
      <Grid item xs>
        <Link to="count">
          <Button color="primary">Count</Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default IndexPage;
