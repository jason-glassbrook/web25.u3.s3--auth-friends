/// external modules ///
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from 'react-router-dom';

/// components ///
import PrivateRoute from 'components/PrivateRoute';
import LogIn from 'components/LogIn';
import LogOut from 'components/LogOut';
import Friends from 'components/Friends';

/// routes ///
import { client } from 'routes';

/***************************************
  COMPONENT
***************************************/
const App = () => {
  return (
    <Router>
      <div className='App'>
        <header>
          <h1>auth-friends</h1>
          <nav><ul><li>
            <NavLink to={client.ends.friends ()}>Friends</NavLink>
          </li><li>
            <NavLink to={client.ends.login ()}>Log In</NavLink>
          </li><li>
            <NavLink to={client.ends.logout ()}>Log Out</NavLink>
          </li></ul></nav>
        </header>
        <main>
          <Switch>
            <PrivateRoute
            path={client.ends.friends ()}
            component={Friends}
            />
            <Route
            path={client.ends.login ()}
            component={LogIn}
            />
            <Route
            path={client.ends.logout ()}
            component={LogOut}
            />
            <Route
            component={LogIn}
            />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

/**************************************/

export default App;
