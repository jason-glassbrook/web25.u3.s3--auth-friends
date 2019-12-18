/// external modules ///
import React from 'react';
import styled from 'styled-components';

/// styles ///
import colors from 'styles/colors';

/***************************************
  components
***************************************/

const _Container = (C) => styled (C) `
  flex: 0 0 auto;
  width: 400px;
  margin: 8px;
  border: 1px solid ${colors.gray[5]};
  border-radius: 8px;
  padding: 8px;
  color: ${colors.gray[9]};
  background: ${colors.gray[1]};

  display: flex;
  flex-flow: column nowrap;
  align-content: stretch;
  justify-content: center;
  align-items: stretch;
`;

/***************************************
  MAIN
***************************************/

const Friend = ({ friend, component = 'div', ...rest }) => {
  const Container = _Container (component);

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
