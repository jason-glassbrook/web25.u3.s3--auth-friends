/// external modules ///
import React from 'react';
import styled from 'styled-components';

/***************************************
  MAIN
***************************************/
const Friend = ({ friend, component = 'div', ...rest }) => {
  const Container = styled (component) ``;

  return (
    <Container className='Friend'>
      <p>name: {friend.name}</p>
      <p>age: {friend.age}</p>
      <p>email: {friend.email}</p>
    </Container>
  );
};

/**************************************/

export default Friend;
