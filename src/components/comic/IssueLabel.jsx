import React from 'react';
import '../../styles/comic-primitives.css';

export function IssueLabel({ issue, title, className = '' }) {
  return (
    <div className={`issue-label ${className}`}>
      {issue}
      {title && <><br/>// {title}</>}
    </div>
  );
}
