import React from 'react';
import '../../styles/comic-primitives.css';

export function ComicPanel({ children, irregular = false, className = '', ...props }) {
  const panelClass = `comic-panel ${irregular ? 'irregular' : ''} ${className}`;
  return (
    <div className={panelClass} {...props}>
      {children}
    </div>
  );
}
