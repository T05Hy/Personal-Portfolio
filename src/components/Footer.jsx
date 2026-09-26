// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>Contact: paritoshappaya9@gmail.com</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#282c34',
  padding: '1rem',
  textAlign: 'center',
  color: '#fff'
};

export default Footer;