import React, { useEffect } from 'react';
import './css/portfolio.css'; // Ensure correct path to your CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

const LoopingVideoPlayer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing for smooth transition
      once: true, // Animate only once
      delay: 100, // Slight delay for layered animation effect
    });
  }, []);

  return (
    <div className="videoGlass snap-center relative bg-[#100c31] h-screen">
      <img
        src={process.env.PUBLIC_URL + '/imgs/baner.jpg'}
        alt="Portfolio banner showing projects and achievements"
        className="videobg object-cover h-full w-full brightness-50"
      />
      <section className="section-overlay flex items-center justify-center h-full px-4">
        <div
          data-aos="fade-up"
          className="max-w-3xl text-center px-6 py-12 md:px-12"
          style={{ letterSpacing: '0.05em' }}
        >
          <h2 className="my-8 text-5xl md:text-6xl font-bold tracking-widest text-[#ce2d42]">
            <span className="text-primary dark:text-[#dbd9e8]">Explore My Portfolio</span>
          </h2>
          <p className="text-lg text-[#dbd9e8] dark:text-[#dbd9e8] mb-8">
            A showcase of my projects and achievements.
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="py-3 px-6 text-lg font-semibold bg-[#ce2d42] text-white rounded shadow-lg hover:bg-[#a81d3d] hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-red-600"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoopingVideoPlayer;
