import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth/Auth.provider';

function Private({ children, ...rest }) {
  const { authenticated } = useAuth();
  console.log("auth private: " + authenticated);
  return (
    <Route {...rest} render={() => (authenticated ? children : <Redirect to="/" />)} />
  );
}

export default Private;
