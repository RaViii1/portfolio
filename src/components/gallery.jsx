import React, { useEffect } from 'react';
import './css/portfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const GalleryItem = ({ src, alt, href, title }) => {
  return (
    <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 border border-gray-800" data-te-ripple-init data-te-ripple-color="light">
      {src.endsWith('.mp4') ? (
        <video className="w-full align-middle transition duration-300 ease-linear" autoPlay loop muted>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img alt={alt} src={src} className="w-full align-middle transition duration-300 ease-linear" />
      )}
      <a href={href}>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
          <div className="flex h-full items-end justify-start">
            <div className="m-6 text-white">
              <h5 className="mb-2 text-lg font-bold">{title}</h5>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)"></div>
      </a>
    </div>
  );
};

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: 'ease-in', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div data-aos="fade-up" className="container glassSection my-24 mx-auto md:px-6 ">
      <section className="mb-32 ">
        <style>
          {`
            .zoom:hover img {
              transform: scale(1.1);
            }
          `}
        </style>
 
        <div className="text-center mb-16 py-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-sm font-medium text-red-400 backdrop-blur-sm">
              See what I do
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Graphic work:
            </span>
          </h2>
          
        </div>


        <div className="grid gap-6 lg:grid-cols-3 pb-8">
          <GalleryItem
            src={process.env.PUBLIC_URL + '/imgs/render2-scaled.webp'}
            alt="Blender render"
            href={process.env.PUBLIC_URL + '/imgs/render2.PNG'}
            title="Blender render"
          />
          <GalleryItem
            src={process.env.PUBLIC_URL + '/imgs/animatedBG.mp4'}
            alt="Animated background"
            href={process.env.PUBLIC_URL + '/imgs/animatedBG.mp4'}
            title="Animated background"
          />
          <GalleryItem
            src={process.env.PUBLIC_URL + '/imgs/render1-scaled.webp'}
            alt="Blender render"
            href={process.env.PUBLIC_URL + '/imgs/render1.PNG'}
            title="Blender render"
          />
          <GalleryItem
            src={process.env.PUBLIC_URL + '/imgs/photoshop1.png'}
            alt="Photo edit"
            href={process.env.PUBLIC_URL + '/imgs/photoshop1.png'}
            title="Photo edit"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
