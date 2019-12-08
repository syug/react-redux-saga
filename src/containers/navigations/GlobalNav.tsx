import * as React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const GlobalNavigation: React.FC = () => {
  return (
    <Grid container>
      <Link to="/">Back to top</Link>
    </Grid>
  );
};

export default GlobalNavigation;
