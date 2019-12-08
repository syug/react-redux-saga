import * as React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import { IndexPage, CountPage } from 'containers/pages';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/count">
          <CountPage />
        </Route>
        <Route default path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
