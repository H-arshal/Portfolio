import React, { useEffect, useRef } from 'react';

const NotFoundPage = () => {
  const torchRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (torchRef.current) {
        torchRef.current.style.top = `${event.pageY - 100}px`; // Adjust the -100 for centering the torch
        torchRef.current.style.left = `${event.pageX - 100}px`; // Adjust the -100 for centering the torch
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="not-found-container">
      <div className="text">
        <h1>404</h1>
        <h3>Sorry we cant find what you are looking for 'cuz its so dark in here</h3>
      </div>
      <div className="torch" ref={torchRef}></div>
    </div>
  );
};

export default NotFoundPage;
