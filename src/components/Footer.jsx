
import React from 'react';
import { Github, Linkedin, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 overflow-hidden pt-10 pb-6">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center items-center space-x-6">
          <a 
            href="https://github.com/jeevanba273" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="h-8 w-8" />
          </a>
          <div className="h-10 w-px bg-white/20"></div>
          <a 
            href="https://www.linkedin.com/in/jeevanba273/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white/70 hover:text-white transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
        <div className="mt-6">
          <p className="text-center text-sm text-white/60">
            <span className="flex items-center justify-center">
              <Code className="h-4 w-4 mr-2" />
              © {new Date().getFullYear().toString()} QR Forge. All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
