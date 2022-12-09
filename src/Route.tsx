import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import Navbar from './components/Navbar/Nav';
import Home from './pages/Home';
import Profile from './pages/Profile';
import oktaConfig from './config';

const oktaAuth = new OktaAuth(oktaConfig);

function Routes() {
  const history = useHistory();
  const originalUrl = async (_oktaAuth:any, originalUri:any) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={originalUrl}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <SecureRoute path="/profile" component={Profile} />
        <Route path="/login/callback" component={LoginCallback} />
      </Switch>
    </Security>
  );
}

export default Routes;
