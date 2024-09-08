import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} News Junction. All rights reserved.</p>
        <p>Made by Jayveer Singh Sisodiya</p>
      </div>
    </footer>
  );
};

export default Footer;
