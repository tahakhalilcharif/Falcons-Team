import React from 'react';
import './bar.css'; 

const LineBar = ({ width, height, borderRadius, color,className, ...atts} ) => {
  const barStyle = {
    width: width,
    height: height,
    borderRadius: borderRadius,
    backgroundColor: color,
  };

  return <div className={`line-bar ${className}`} style={barStyle} {...atts}></div>
};


export default LineBar;

