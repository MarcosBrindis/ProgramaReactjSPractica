import React from 'react';
import './Button2.css';

const Button2 = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-primary">
      {children}
    </button>
  );
};

export default Button2;
