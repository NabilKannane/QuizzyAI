import React from 'react';
import './Loader.css'; 

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
    <div>
      <div className="loader">
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
        <div className="loader-dot"></div>
      </div>
    </div>
    </div>
  );
};

export default Loader;
