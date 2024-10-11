import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, className = '' }) => {
  const baseStyle = 'w-full px-3 py-2 border border-gray dark:border-taupe rounded-md focus:outline-none focus:ring-2 focus:ring-brown focus:border-transparent bg-cream dark:bg-charcoal text-charcoal dark:text-cream transition-colors duration-300';
  
  const classes = `${baseStyle} ${className}`;
  
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes}
    />
  );
};

export default Input;