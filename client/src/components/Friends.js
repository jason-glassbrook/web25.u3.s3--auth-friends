import React from 'react';

import authios from 'tools/authios';
import { server } from 'routes';

import FriendList from './FriendList';
import FriendListLoader from './FriendListLoader';

class Friends extends React.Component {

  /***************************************
    lifecycle
  ***************************************/
  state = {
    friends : [],
    isGettingFriendList : false,
    isGettingFriend : false,
  };

  componentDidMount () {
    this.getFriendList ();
  }

  render () {
    return (
      <section className='Friends'>
        <header>
          <h2>Friends</h2>
        </header>
        <main>
          {this.state.isGettingFriendList ? (
            <FriendListLoader/>
          ) : (
            <FriendList friends={this.state.friends}/>
          )}
        </main>
      </section>
    );
  };

  /***************************************
    actions
  ***************************************/

  /// all friends ///

  getFriendList = () => {
    this.setState ({
      isGettingFriendList : true,
    });

    authios ()
    .get (
      server.ends.friends.url ()
    )
    .then ((response) => {
      console.log (response);
      this.setState ({
        friends : response.data,
      });
    })
    .catch ((error) => {
      console.log (error);
    })
    .finally (() => {
      this.setState ({
        isGettingFriendList : false,
      });
    });
  };

  /// friend ///

  getFriend = (friend) => {
    this.setState ({
      isGettingFriend : true,
    });

    authios ()
    .get (
      server.ends.friend.url (friend.id)
    )
    .then ((response) => {
      console.log (response);
      this.setState ({});
    })
    .catch ((error) => {
      console.log (error);
    })
    .finally (() => {
      this.setState ({
        isGettingFriend : false,
      });
    });
  };

  addFriend = (friend) => {
    authios ()
    .post (
      server.ends.friends.url (),
      friend
    )
    .then ((response) => {
      console.log (response);
      this.setState ({});
    })
    .catch ((error) => {
      console.log (error);
    });
  };

  editFriend = (friend) => {
    authios ()
    .put (
      server.ends.friend.url (friend.id),
      friend
    )
    .then ((response) => {
      console.log (response);
      this.setState ({});
    })
    .catch ((error) => {
      console.log (error);
    });
  };

  deleteFriend = (friend) => {
    authios ()
    .delete (
      server.ends.friend.url (friend.id)
    )
    .then ((response) => {
      console.log (response);
      this.setState ({});
    })
    .catch ((error) => {
      console.log (error);
    });
  };

  /**************************************/
};

export default Friends;
