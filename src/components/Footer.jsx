
import React from 'react';
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden mt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(43,75,237,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center space-x-6">
          <a 
            href="https://github.com/jeevanba273" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-8 w-8" />
          </a>
          <a 
            href="https://www.linkedin.com/in/jeevanba273/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
        <div className="mt-4">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} QR Forge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
