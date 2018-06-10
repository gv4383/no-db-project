import React from 'react';

const Input = (props) => {
  return (
    <input
      placeholder={ props.placeHolder }
      value={ props.inputValue }
      onChange={ props.handleChange }>{props.children}</input>
  );
};

export default Input;