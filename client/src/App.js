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

/***************************************
  COMPONENT
***************************************/
const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <nav><ul><li>
            <NavLink to="/friends">Friends</NavLink>
          </li><li>
            <NavLink to="/login">Log In</NavLink>
          </li><li>
            <NavLink to="/logout">Log Out</NavLink>
          </li></ul></nav>
        </header>
        <main>
          <Switch>
            <PrivateRoute
            path="/friends"
            component={Friends}
            />
            <Route
            path="/login"
            component={LogIn}
            />
            <Route
            path="/logout"
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
