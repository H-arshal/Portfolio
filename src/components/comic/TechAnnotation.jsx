import React from 'react';
import '../../styles/comic-primitives.css';

export function TechAnnotation({ text, className = '' }) {
  return (
    <div className={`tech-annotation ${className}`}>
      {text.startsWith('//') ? text : `// ${text}`}
    </div>
  );
}
