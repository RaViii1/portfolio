import './css/tailwind.css'; 
import './css/portfolio.css'; 
import './css/navbar.css'; 
import About from "./about";
import CV from '../CV.pdf';
import React, { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
// import axios from 'axios';
import { FaBars, FaHome } from "react-icons/fa";

export default function Navbar() {

  const [folded, setFolded] = useState(false);


  const toggleFold = () => {
    setFolded(!folded);
  };

  useEffect(() => {
    const handleResize = () => {
      setFolded(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className='glassBG stick text-[#dbd9e8] w-full h-full flex flex-row items-right justify-end top-0 right-0'>
        <button className="text-[#dbd9e8] foldButton text-3xl p-4" onClick={toggleFold}>
          {folded ? <FaBars /> : <FaHome />}
        </button>
      </div>

      <div className={`headerNav stick glassBG glassBorderBottom ${folded ? 'folded' : ''}`}>
        <div className="logo mx-5 px-5">
          <a href="/" className={`text-[#ce2d42]  shadow-[#ce2d42] font-mono text-3xl flex items-center space-x-2 py-5 pl-2`}>RaVi</a>
        </div>
        <div className="text-lg">
        <div className={`text-[#dbd9e8]  mx-4 px-5 ${folded ? 'folded' : ''}`}>
        {/* <Link  to="/about">About</Link > */}
        <a href="#contact" className="px-2 hover:text-[#d2ee41] hover:border-b hover:border-[#d2ee41]">Contact</a>
        <a href="https://github.com/RaViii1" className="px-2 hover:text-[#d2ee41] hover:border-b hover:border-[#d2ee41]">GitHub</a>
        
        <a
          href={CV}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
          className="px-2 hover:text-[#d2ee41] hover:border-b hover:border-[#d2ee41]"
          >
          <button>CV</button>
        </a>
      </div>
        </div>
      </div>
    </>
  );
}