import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/portfolio.css'; 

const LandingPageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      src: process.env.PUBLIC_URL + '/imgs/AnnaWachaczyk.png',
      link: 'https://anna-wachaczyk.artsaas.com/', 
    },
    {
      src: process.env.PUBLIC_URL + '/imgs/SalonAntykówPasja.png',
      link: 'https://antykwariat-pasja.pl/', 
    },
    {
      src: process.env.PUBLIC_URL + '/imgs/JolantaKitowska.png',
      link: 'https://jolakitowska.pl/',
    },
    {
      src: process.env.PUBLIC_URL + '/imgs/galeriabator.PNG',
      link: 'https://galeriabator.com/',
    },
  ];
  
  return (
    <>
      <div className='text-center py-16'>
        <span className="text-center text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
          Projects I worked on during internship
        </span>
      </div>
      
      <div className="relative my-8 max-w-[60%] mx-auto">
        {/* Navigation Buttons */}
        <button 
          className="hidden absolute top-1/2 -left-8 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white rounded-full w-10 h-10 md:flex md:items-center md:justify-center shadow-md z-10"
          id="prev-button"
        >
          &#10094;
        </button>
        
        <button 
          className="hidden absolute top-1/2 -right-8 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 text-white rounded-full w-10 h-10 md:flex md:items-center md:justify-center shadow-md z-10"
          id="next-button"
        >
          &#10095;
        </button>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={16}
          navigation={{
            prevEl: '#prev-button',
            nextEl: '#next-button',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          modules={[Navigation, Pagination]}
          breakpoints={{
            // Mobile (default)
            0: {
              slidesPerView: 1,
            },
            // Tablet
            768: {
              slidesPerView: 2,
            },
            // PC
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={item.src} 
                  alt={`Landing page ${index + 1}`} 
                  className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg mx-auto hover:brightness-50 transition duration-300"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default LandingPageCarousel;
