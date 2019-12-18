/// external modules ///
import React from 'react';
import Loader from 'react-loader-spinner';

/***************************************
  MAIN
***************************************/
const FriendListLoader = (props) => (
  <div className='FriendListLoader'>
    <Loader
    type='Puff'
    color='#204963'
    height={60}
    width={60}
    />
    <p>Getting Friends</p>
  </div>
);

/**************************************/

export default FriendListLoader;
