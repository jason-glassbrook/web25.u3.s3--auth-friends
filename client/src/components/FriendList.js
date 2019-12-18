/// external modules ///
import React from 'react';

/***************************************
  MAIN
***************************************/
const FriendList = ({ friends, ...rest }) => (
  <ul className='FriendList'>
    {friends.map ((friend) => (
      <li key={friend.id}>
        <p>name: {friend.name}</p>
        <p>age: {friend.age}</p>
        <p>email: {friend.email}</p>
      </li>
    ))}
  </ul>
);

/**************************************/

export default FriendList;
