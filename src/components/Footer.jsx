import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm">© 2025 Popcorn Picks</div>
          <div className="text-sm">Developed By Ibrahim Mohamed</div>
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/ibrahim-mohamed-anwar/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-tertiary hover:text-white transition-colors duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/IbrahimMohamedAnwar93"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-tertiary hover:text-white transition-colors duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
