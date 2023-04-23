
import React from 'react';
import { FaRocket } from 'react-icons/fa';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FaRocket size={38} />
      </div>
      <h1>AI-Powered Inspirations</h1>
    </header>
  );
};

export default Header;
