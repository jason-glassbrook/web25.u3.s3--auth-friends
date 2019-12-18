/// external modules ///
import React from 'react';
import styled from 'styled-components';

/// components ///
import Friend from './Friend';

/// styles ///
// import colors from 'styles/colors';

/***************************************
  components
***************************************/

const List = (c) => styled (c) `
  flex: 1 0 auto;
  margin: 8px;
  border-radius: 8px;
  padding: 8px;

  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

/***************************************
  MAIN
***************************************/
const FriendList = ({ friends, ...rest }) => (
  <List className='FriendList'>
    {friends.map ((friend) => (
      <Friend
      key={friend.id}
      friend={friend}
      component='li'
      />
    ))}
  </List>
);

/**************************************/

export default FriendList;
