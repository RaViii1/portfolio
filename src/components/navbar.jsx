import './css/tailwind.css'; 
import './css/portfolio.css'; 
import './css/navbar.css'; 
import CV from '../CV.pdf';
import React, { useEffect, useState } from "react";
// import { Link  } from "react-router-dom";
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
    <div className='headerNavbg stick glassSection'>
      <div className=' stick text-[#dbd9e8]  w-full h-full flex flex-row items-right justify-end top-0 right-0'>
        <button className="text-[#dbd9e8] foldButton text-3xl p-4" onClick={toggleFold}>
          {folded ? <FaBars /> : <FaHome />}
        </button>
      </div>

      <div className={`headerNav glassBorderBottom ${folded ? 'folded' : 'flex flex-col items-center gap-4 mt-4'}`}>
        <div className="logo mx-5 px-5">
          <a href="/" className={`text-[#ce2d42] shadow-[#ce2d42] font-mono text-3xl flex items-center space-x-2 py-5 pl-2`}>RaVi</a>
        </div>
        <div className="text-lg navbarLinks">
        {/* <div className={`text-[#dbd9e8]  mx-4 px-5 ${folded ? 'folded' : 'flex flex-col items-center gap-4 mt-4'}`}> */}
        {/* <Link  to="/about">About</Link > */}
        <a href="#contact" className="px-2 hover:text-[#d2ee41] hover:border-b hover:border-[#d2ee41]">Contact</a>
        <a href="https://github.com/RaViii1" className="px-2 hover:text-[#d2ee41] hover:border-b hover:border-[#d2ee41]">GitHub</a>  
        <a
          href={CV}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
          className="px-2 hover:text-[#d2ee41]"
          >
          <button className="ml-4 bg-[#d2ee41] hover:bg-transparent border border-[#d2ee41] hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>Download CV</span>
          </button>
        </a>


      </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}