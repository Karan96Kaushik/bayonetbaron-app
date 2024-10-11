import React from 'react';

const Button = ({ children, onClick, variant = 'primary', size = 'medium', className = '' }) => {
  const baseStyle = 'font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-colors duration-300';
  
  const variants = {
    primary: 'bg-brown dark:bg-taupe hover:bg-taupe dark:hover:bg-brown text-cream dark:text-charcoal focus:ring-taupe',
    secondary: 'bg-taupe dark:bg-gray hover:bg-gray dark:hover:bg-taupe text-charcoal dark:text-cream focus:ring-gray',
    danger: 'bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700 text-cream focus:ring-red-400',
  };
  
  const sizes = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;