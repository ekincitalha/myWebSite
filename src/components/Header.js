import React from 'react';
import CodeHeader from './CodeHeader';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <CodeHeader />
      </div>
    </header>
  );
};

export default Header; 