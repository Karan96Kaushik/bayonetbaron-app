import React from 'react';

const Card = ({ children, title, className = '' }) => {
  const baseStyle = 'bg-cream dark:bg-brown shadow-md rounded-lg overflow-hidden transition-colors duration-300';
  
  const classes = `${baseStyle} ${className}`;
  
  return (
    <div className={classes}>
      {title && (
        <div className="px-6 py-4 bg-taupe dark:bg-brown border-b border-gray dark:border-taupe">
          <h3 className="text-lg font-semibold text-charcoal dark:text-cream">{title}</h3>
        </div>
      )}
      <div className="p-6 text-charcoal dark:text-cream">
        {children}
      </div>
    </div>
  );
};

export default Card;