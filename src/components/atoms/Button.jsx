import React from 'react';
import './Button.css';

const Button = ({ children, ...props }) => {
  return (
    <button className="corner-button" {...props}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
