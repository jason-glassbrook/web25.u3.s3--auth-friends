import React, { Fragment } from 'react';

import authios from 'tools/authios';
import { client, server } from 'routes';
import user from 'tools/user';

class LogIn extends React.Component {
  state = {
    creds : {
      username : '',
      password : '',
    },
    isFetching : false,
  };

  handleInputChange = ({ target : { name, value } }) => {
    this.setState ({
      creds : {
        ...this.state.creds,
        [name] : value
      }
    });
  };

  login = (e) => {
    e.preventDefault ();

    this.setState ({ isFetching : true });

    authios ()
    .post (server.ends.login.url (), this.state.creds)
    .then ((response) => {

      this.setState ({ isFetching : false });
      user.token.set (response.data.body);
      user.isAllowed.set (true);
      this.props.history.push (client.ends.friends.url ());

    })
    .catch ((error) => {

      this.setState ({ isFetching : false });
      user.token.clear ();
      user.isAllowed.set (false);
      console.log (error);

    });
  };

  render () {
    return (
      <div className='LogIn login-page'>

        <form
        className='login-form'
        onSubmit={this.login}>
          <input
            type='text'
            name='username'
            value={this.state.creds.username}
            onChange={this.handleInputChange}
          />
          <input
            type='password'
            name='password'
            value={this.state.creds.password}
            onChange={this.handleInputChange}
          />
          <button type='submit'>Log In</button>
        </form>

        {this.state.isFetching ? (
          <div>logging in</div>
        ) : (
          <Fragment/>
        )}

      </div>
    );
  };
};

export default LogIn;
