import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import client from 'routes/client';

const PrivateRoute = ({ component : Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      if (window.localStorage.getItem ('token')) {
        return (<Component {...props}/>);
      }
      else {
        return (<Redirect to={client.ends.login ()}/>);
      }
    }}/>
  );
};

export default PrivateRoute;
