import React from 'react';

const Footer = () => {
  const year = 2025;
  
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>© {year} QR Forge. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;