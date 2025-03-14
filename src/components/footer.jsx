import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 text-right text-sm fixed bottom-0 left-0 w-full p-4 z-10">
      <div className="flex justify-end">
        <div className="flex flex-col items-end">
          <a href="https://github.com/RaViii1" className="py-2 hover:text-[#d2ee41]">
            <FaGithub size={'1.5em'}></FaGithub>
          </a>
          <a href='https://www.linkedin.com/in/jakub-baran-1b83122ba/' className="py-2 hover:text-[#d2ee41]">
            <FaLinkedinIn size={'1.5em'}></FaLinkedinIn>
          </a>
        </div>
        <div className="bg-gray-400 h-[90px] w-[1px] absolute right-12 bottom-0"></div>
      </div>
    </footer>
  );
};

export default Footer;
