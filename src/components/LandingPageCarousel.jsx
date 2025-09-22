import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './css/portfolio.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const LandingPageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      src: process.env.PUBLIC_URL + '/imgs/AnnaWachaczyk.png',
      link: 'https://annawachaczyk.com/pl/', 
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
  
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: 'ease-out-cubic', // Animation easing
      once: true, 
    });
  }, []);

  return (
    <div data-aos="fade-down">
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          Sites I Worked On:
        </h2>
      </div>

      <div className="relative mb-8 md:max-w-[60%] max-w-[90%] mx-auto contact-background 
                      bg-gradient-to-r from-[#100c31] to-[#0a061b] md:p-8 border border-[#6b21a885] 
                      transition-colors duration-500 ease-in-out hover:border-gray-700">
        {/* Navigation Buttons */}
        <button 
          className="hidden absolute top-1/2 left-8 transition-colors duration-500 ease-in-out transform -translate-y-1/2 bg-purple-500 hover:bg-[#b12a3c00] hover:border hover:border-purple-500 text-white rounded-full w-10 h-10 md:flex md:items-center md:justify-center shadow-md z-10"
          id="prev-button"
        >
          &#10094;
        </button>
        
        <button 
          className="hidden absolute top-1/2 right-8 transition-colors duration-500 ease-in-out transform -translate-y-1/2 bg-purple-500 hover:bg-[#b12a3c00] hover:border hover:border-purple-500 text-white rounded-full w-10 h-10 md:flex md:items-center md:justify-center shadow-md z-10"
          id="next-button"
        >
          &#10095;
        </button>

        {/* Swiper Carousel */}
        <Swiper
          spaceBetween={24} // More space between slides
          navigation={{
            prevEl: '#prev-button',
            nextEl: '#next-button',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet(index, className) {
              return `<span class="${className}" style="background-color:#ad46ff; width: 16px; height: 16px; color:#ad46ff"></span>`;
            },
          }}
          loop={true}
          onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
          modules={[Navigation, Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1.5, // Show fewer slides for bigger size
            },
            1024: {
              slidesPerView: 2, // Show 2 slides at once on desktops for larger view
            },
            1440: {
              slidesPerView: 3, // Increase on very large screens
            },
          }}
          className="max-w-[90%] mx-auto" // Increase container max width
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="my-6 sm:my-8 md:my-10">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                <img 
                  src={item.src} 
                  alt={`Landing page ${index + 1}`} 
                  className="w-[350px] h-[450px] object-cover rounded-lg shadow-lg mx-auto hover:brightness-75 transition duration-300 md:mb-0 mb-8"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="swiper-pagination-container md:mt-4 mt-8"></div>
      </div>
    </div>
  );
};

export default LandingPageCarousel;
