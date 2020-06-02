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

const _List = (C) => styled (C) `
  flex: 1 0 auto;
  margin: 8px;
  border-radius: 8px;
  padding: 8px;

  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

/***************************************
  MAIN
***************************************/
const FriendList = ({ friends, ...rest }) => {
  const List = _List ('ul');

  return (
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
};

/**************************************/

export default FriendList;
