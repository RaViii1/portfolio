import React, { useRef, useEffect } from 'react';
import './css/portfolio.css'; // Adjust the path to correctly import the CSS file
import AOS from 'aos';
import 'aos/dist/aos.css';


const LoopingVideoPlayer = () => {

    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-out-cubic', // Animation easing
        once: true, // Whether animation should happen only once
      });
    }, []);


  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const video = videoRef.current;

  //   const handleEnded = () => {
  //     video.play();
  //   };

  //   video.addEventListener('ended', handleEnded);

  //   return () => {
  //     video.removeEventListener('ended', handleEnded);
  //   };
  // }, []);

  return (
//     <div className='videoGlass snap-center relative bg-[#100c31]'>
//       <video ref={videoRef} autoPlay muted loop className='videobg'>
//         <source src="bgvideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <section className="section-overlay">
//         <div className="px-6 py-12 md:px-12">
//         <h2 className="my-12 text-5xl font-bold tracking-tight text-[#ce2d42]">
//   <span className="text-primary dark:text-[#dbd9e8]">Explore My Portfolio</span>
// </h2>
// <p className="text-lg text-[#dbd9e8] dark:text-[#dbd9e8]">
//   A showcase of my projects and achievements.
// </p>

//         </div>
//       </section>
//     </div>

<div className="videoGlass snap-center relative bg-[#100c31] h-screen">
  <img src={process.env.PUBLIC_URL + '/imgs/baner.jpg'} alt="Banner Image" className='videobg object-cover h-full w-full' />
  <section className="section-overlay flex items-center justify-center h-full">
    <div data-aos="fade-up" className="px-6 py-12 md:px-12 text-center">
      <h2 className="my-12 text-6xl font-bold tracking-tight text-[#ce2d42]">
        <span className="text-primary dark:text-[#dbd9e8]">Explore My Portfolio</span>
      </h2>
      <p className="text-lg text-[#dbd9e8] dark:text-[#dbd9e8] mb-8">
        A showcase of my projects and achievements.
      </p>
      <div className="flex justify-center">
        <a href="#projects" className="py-2 px-4 bg-[#ce2d42] text-white rounded hover:bg-[#a81d3d] transition duration-300">
          View Projects
        </a>
      </div>
    </div>
  </section>
</div>


    
  );
};

export default LoopingVideoPlayer;