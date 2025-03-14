import './css/portfolio.css'; 
import React, { useState } from 'react';
import { FaEnvelope, FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticlesComponent from './ParticlesComponent';

const ContactForm = () => {

  return (
    <div id='contact' >

      <section className="body-font relative bg-[#100c31] text-gray-400">

        <div className="container mx-auto px-4 py-12 md:px-5 md:py-24">
          
          <div className="mb-12 flex w-full flex-col text-center">
            <div className='text-center py-4'><span className="text-center text-3xl md:text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
                Contact Me:
              </span></div>
            <p className="mx-auto text-base leading-relaxed text-lg md:text-base lg:w-2/3 xl:w-1/2">
              Feel free to reach out to me! Whether you have a question,
              feedback, or a collaboration proposal, we'd love to hear from you.
            </p>
          </div>

          <div className="mx-auto w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
            <div className="m-2 flex justify-center">
              <div className='flex flex-col md:flex-row justify-center m-2'>
                <div className='Card flex flex-col border border-red-600 p-6 md:p-8 m-1 hover:bg-red-400 hover:bg-opacity-15 flex-1 min-w-48 md:min-w-96 grow'>
                  <FaEnvelope size={'1.5em'}></FaEnvelope>
                  <div className='flex flex-col text-gray-400'>
                    <span>Contact via Email</span>
                    <span>jakub2baran@gmail.com</span>
                  </div>
                </div>
                <div className='Card flex flex-col border border-violet-400 p-6 md:p-8 m-1 hover:bg-violet-400 hover:bg-opacity-15 flex-1 min-w-48 md:min-w-96 grow'>
                  <FaLinkedin size={'1.5em'} ></FaLinkedin>
                  <a href='https://www.linkedin.com/in/jakub-baran-1b83122ba/' className='flex flex-col text-gray-400 hover:text-[#d2ee41]' >
                    <span>Contact via Linkedin</span>
                    <span>Jakub Baran</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
