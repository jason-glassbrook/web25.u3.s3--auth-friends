import React, { Fragment } from 'react';

import authios from 'tools/authios';
import { client, server } from 'routes';

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
    .post (server.ends.login (), this.state.creds)
    .then ((response) => {

      this.setState ({ isFetching : false });
      localStorage.setItem ('token', response.data.body);
      this.props.history.push (client.ends.friends ());

    })
    .catch ((error) => {

      this.setState ({ isFetching : false });
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
