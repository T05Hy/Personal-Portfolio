// src/components/Header.js
import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem 0',
    textAlign: 'center'
  };

  const navListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem' // Provides consistent spacing between items
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <header style={headerStyle}>
      <h1>Paritosh Appaya</h1>
      <nav>
        <ul style={navListStyle}>
          <li>
            <a href="#projects" style={linkStyle}>Projects</a>
          </li>
          <li>
            <a href="#about" style={linkStyle}>About</a>
          </li>
          <li>
            <a href="#contact" style={linkStyle}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;