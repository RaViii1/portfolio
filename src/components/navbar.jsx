import './css/tailwind.css';
import './css/portfolio.css';
import './css/navbar.css';
import CV from '../CV.pdf';
import React, { useEffect, useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [folded, setFolded] = useState(true);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        folded === false &&
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setFolded(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [folded]);

  // Responsive open/close logic based on window width
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setFolded(false);
      } else {
        setFolded(true);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFold = () => {
    if (window.innerWidth < 768) {
      setFolded((prev) => !prev);
    }
  };

  // Close menu on link click (mobile only)
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setFolded(true);
    }
  };

  return (
    <header className="headerNavbg fixed top-0 left-0 w-full z-50 shadow-lg backdrop-blur-md bg-[#100c31cc] border-b border-[#6b21a8aa]">
      {/* Mobile menu toggle button */}
      <div className="flex justify-end p-4 text-[#ad46ff] md:hidden">
        <button
          ref={buttonRef}
          onClick={toggleFold}
          aria-label="Toggle menu"
          aria-expanded={!folded}
          aria-controls="primary-navigation"
          className="foldButton text-3xl text-[#ad46ff] hover:text-[#6b21a8] cursor-pointer transition duration-300"
        >
          {folded ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      {/* Navigation */}
      <nav
        id="primary-navigation"
        ref={navRef}
        className={`headerNav glassBorderBottom px-8 py-4 transition-all duration-300 ${
          folded ? 'hidden' : 'flex'
        } flex-col items-center md:flex md:flex-row md:items-center md:justify-between md:gap-12`}
      >
        {/* Logo on left */}
        <div className="logo mb-4 md:mb-0">
          <a
            href="/"
           className="font-zen-dots italic text-4xl bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent select-none px-1
  bg-[length:200%_100%] bg-left transition-[background-position] duration-700 ease-in-out
  hover:bg-right"


            onClick={handleLinkClick}
          >
            RaVi
          </a>
        </div>

        {/* Links container center aligned on mobile */}
        <div
          className="navbarLinks flex flex-col w-full items-center gap-2 text-lg md:flex-row md:gap-10 md:w-auto md:items-center"
          onClick={handleLinkClick}
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded text-[#dbd9e8] border-b-2 border-transparent hover:text-[#d2ee41] hover:border-b-2 hover:border-[#d2ee41] transition duration-300"
          >
            Contact
          </a>
          <a
            href="https://github.com/RaViii1"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3  rounded border-b-2 border-transparent text-[#dbd9e8] hover:text-[#d2ee41] hover:border-b-2 hover:border-[#d2ee41] transition duration-300"
          >
            GitHub
          </a>

          <a
            href={CV}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
            className="px-0 py-3"
          >
        <button className="bg-[#d2ee41] hover:bg-transparent border-2 border-transparent text-gray-800 font-bold py-2 px-6 rounded inline-flex items-center transition duration-300 hover:text-[#d2ee41] hover:border-[#d2ee41]">
          <svg
            className="fill-current w-5 h-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          <span>Download CV</span>
        </button>

          </a>
        </div>
      </nav>
    </header>
  );
}
