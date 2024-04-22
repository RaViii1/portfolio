import React from 'react';
import './css/portfolio.css';

const Project = ({ name, description, image, technologies, CodeLink, LiveLink, index }) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className='flex flex-col items-center mx-16 mb-32'>
      <div className={`flex flex-col  ${isEvenIndex ? 'md:order-first' : 'md:order-last'}`}>
        <div className={` ${isEvenIndex ? 'text-left ' : 'text-right'} p-1 m-1`}>
          <a href={CodeLink} className='ml-4 bg-[#d2ee41] hover:bg-transparent border border-[#d2ee41] hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>Code</a>
          <a href={LiveLink} className='ml-4 bg-[#d2ee41] hover:bg-transparent border border-[#d2ee41] hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>Live</a>
        </div>
        <div className='flex md:flex-row flex-col'>
          
          <img src={image} alt={name} className={`md:w-96 md:h-72 rounded imageZoom scale-75 ${isEvenIndex ? 'md:order-last md:ml-2' : 'md:order-first md:mr-2'} self-center `} />
          
          <div className="glassBG shadow-md rounded-lg p-4 md:p-6 lg:p-8">
              <div>
                <h2 className="text-[#ce2d42] text-xl font-semibold md:text-2xl lg:text-3xl py-4">{name}</h2>
                <p className="text-gray-400 md:text-lg lg:text-xl">{description}</p>
              </div>
              <ul className="flex flex-wrap -m-1 text-gray-400 md:text-lg lg:text-xl py-4">
                {technologies.map((tech, index) => (
                  <li key={index} className="m-1">
                    <span className="text-[#d2ee41] py-1 px-2 rounded-full">{tech}</span>
                  </li>
                ))}
              </ul>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;