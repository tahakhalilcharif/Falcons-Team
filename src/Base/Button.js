import React from 'react';
import './button.css'; // Import your styles here

const Button = ({ color, children, className, ...atts }) => {
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <button className={`button ${className}`} style={buttonStyle} {...atts}>
      {children}
    </button>
  );
};

export default Button;
