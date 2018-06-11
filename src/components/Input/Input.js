import React from 'react';

/*** This components sets up the template for the Input component and allows it to be reused ***/

const Input = (props) => {
  return (
    <input
      className={ props.className }
      placeholder={ props.placeHolder }
      value={ props.inputValue }
      onChange={ props.handleChange }>{props.children}</input>
  );
};

export default Input;