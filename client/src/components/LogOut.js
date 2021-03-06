import React from 'react';

// import authios from 'tools/authios';
import { client } from 'routes';
import user from 'tools/user';

class LogOut extends React.Component {
  state = {};

  logout = (e) => {
    e.preventDefault ();
    user.clear ();

    this.props.history.push (client.ends.root ());
  };

  render () {
    return (
      <div className='LogOut logout-page'>

        <form
        className='logout-form'
        onSubmit={this.logout}>
          <button type='submit'>Log Out</button>
        </form>

      </div>
    );
  };
};

export default LogOut;
