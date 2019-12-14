import * as React from 'react';
import { Container } from '@material-ui/core';
import { Route, Switch } from 'react-router';
import { GlobalNav } from 'containers/navigations';
import { IndexPage, CountPage, GithubPage } from 'containers/pages';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Container>
      <GlobalNav />
      <Switch>
        <Route exact path="/count">
          <CountPage />
        </Route>
        <Route exact path="/github">
          <GithubPage />
        </Route>
        <Route default path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
