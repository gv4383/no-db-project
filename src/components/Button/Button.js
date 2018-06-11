import React from 'react';
import './Button.css';

/*** This components sets up the template for the Button component and allows it to be reused ***/

const Button = (props) => {
  return (
    <button
      className={ props.className }
      onClick={ props.clickButton }>
      { props.children }
    </button>
  );
}

export default Button;