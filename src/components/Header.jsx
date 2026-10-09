import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="brand">Paritosh Appaya</div>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;