/// external modules ///
import React from 'react';

/// components ///
import Friend from './Friend';

/***************************************
  MAIN
***************************************/
const FriendList = ({ friends, ...rest }) => (
  <ul className='FriendList'>
    {friends.map ((friend) => (
      <Friend
      key={friend.id}
      friend={friend}
      component='li'
      />
    ))}
  </ul>
);

/**************************************/

export default FriendList;
