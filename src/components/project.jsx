import React, { useState } from 'react';
import './css/portfolio.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Project = ({ name, description, image, images, technologies, CodeLink, LiveLink, index }) => {
  const isEvenIndex = index % 2 === 0;
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const handleImageClick = () => {
    if (images) {
      setOpen(true);
    }
  };

  const handleViewMoreClick = () => {
    if (images) {
      setOpen(true);
    }
  };

  return (
    <div className='flex flex-col items-center mx-4 md:mx-16 mb-32'>
      <div className={`flex flex-col ${isEvenIndex ? 'md:order-first' : 'md:order-last'}`}>
        <div className={`flex justify-between items-center p-1 m-1`}>
          <div className="flex">
            <a href={CodeLink} className='ml-4 bg-[#d2ee41] hover:bg-transparent border border-[#d2ee41] hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>Code</a>
            {LiveLink && LiveLink !== '' && (
              <a href={LiveLink} className='ml-4 bg-[#d2ee41] hover:bg-transparent border border-[#d2ee41] hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>Live</a>
            )}
          </div>
          {images && (
            <button 
              className='ml-4 bg-[#d2ee41] hover:bg-transparent border border-[#d2ee41] hover:text-white text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
              onClick={handleViewMoreClick}
            >
              View More
            </button>
          )}
        </div>
        
        <div className='flex flex-col md:flex-row'>
          <div className={`zoom relative overflow-hidden rounded-lg ${isEvenIndex ? 'md:order-last md:ml-2' : 'md:order-first md:mr-2'} self-center`}>
            <img 
              src={image} 
              alt={name} 
              className={`w-full h-auto rounded imageZoom transition-transform duration-300 ease-in-out transform hover:scale-105`} 
              onClick={handleImageClick}
            />
          </div>
          
          <div className="glassSection shadow-md rounded-lg p-4 md:p-6 lg:p-8 flex-grow">
            <h2 className="text-[#ce2d42] text-xl font-semibold md:text-2xl lg:text-3xl py-4">{name}</h2>
            <p className="text-gray-400 md:text-lg lg:text-xl">{description}</p>
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

      {open && images && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((img) => ({ src: img }))}
          index={photoIndex}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};

export default Project;
