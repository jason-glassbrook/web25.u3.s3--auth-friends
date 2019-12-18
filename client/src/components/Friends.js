import React from 'react';
import Loader from 'react-loader-spinner';

import authios from 'tools/authios';
import { server } from 'routes';

class Friends extends React.Component {

  /***************************************
    lifecycle
  ***************************************/
  state = {
    friends : [],
    isGettingAllFriends : false,
    isGettingFriend : false,
  };

  componentDidMount () {
    this.getAllFriends ();
  }

  render () {
    return (
      <section className='Friends'>
        <header>
          <h2>Friends</h2>
        </header>
        <main>
          {this.state.isGettingFriends ? (
            <div className='key spinner'>
              <Loader type='Puff' color='#204963' height={60} width={60} />
              <p>Getting Friends</p>
            </div>
          ) : (
            <ul className='FriendsList'>
              {this.state.friends.map ((friend) => (
                <li key={friend.id}>
                  <p>name: {friend.name}</p>
                  <p>age: {friend.age}</p>
                  <p>email: {friend.email}</p>
                </li>
              ))}
            </ul>
          )}
        </main>
      </section>
    );
  };

  /***************************************
    actions
  ***************************************/

  /// all friends ///

  getAllFriends = () => {
    this.setState ({
      isGettingAllFriends : true,
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
        isGettingAllFriends : false,
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
