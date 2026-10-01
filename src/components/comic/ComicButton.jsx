import React from 'react';
import '../../styles/comic-primitives.css';

export function ComicButton({ children, variant = 'primary', className = '', onClick, href, ...props }) {
  const btnClass = `comic-button ${variant} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={btnClass} {...props}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={btnClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
