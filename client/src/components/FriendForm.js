/// external modules ///
import React from 'react';
import styled from 'styled-components';

/// styles ///
import colors from 'styles/colors';

/***************************************
  components
***************************************/

const Form = styled.form `
  flex: 1 0 auto;
  margin: 8px;
  border: 4px solid ${colors.gray[5]}
  border-radius: 8px;
  padding: 8px;
  background: ${colors.gray[1]};
  color: ${colors.gray[9]};

  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: center;
  align-items: stretch;
`;

const Field = styled.div `
  flex: 1 0 auto;
  margin: 4px;
  border: 1px solid ${colors.gray[3]};
  border-radius: 4px;
  padding: 2px;
  color: ${colors.gray[9]};

  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`;

/***************************************
  MAIN
***************************************/
const init = {
  friend : {
    name  : '',
    age   : '',
    email : '',
  }
};

const FriendForm = ({ submit, ...props }) => {
  const [ state, setState ] = React.useState (init.friend);

  const handleChange = ({ target : { name, value } }) => {
    setState ((state) => ({
      ...state,
      [name] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault ();
    submit (state);
  }

  return (
    <Form
    className='FriendForm'
    onSubmit={handleSubmit}
    >
      {Object.keys (init.friend).map ((label) => (
        <Field key={label}>
          <label
          htmlFor={`FriendForm-${label}`}>
            {label}
          </label>
          <input
          id={`FriendForm-${label}`}
          name={label}
          value={state[label]}
          placeholder={`enter ${label}`}
          onChange={handleChange}/>
        </Field>
      ))}
      <Field key='_form-submit'>
        <button type='submit'>Submit</button>
      </Field>
    </Form>
  );
};

/**************************************/

export default FriendForm;
