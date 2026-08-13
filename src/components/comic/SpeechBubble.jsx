import React from 'react';
import '../../styles/comic-primitives.css';

export function SpeechBubble({ text, className = '' }) {
  return (
    <div className={`speech-bubble ${className}`}>
      {text}
    </div>
  );
}
