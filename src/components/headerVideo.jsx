import React, { useRef, useEffect } from 'react';
import './css/portfolio.css'; // Adjust the path to correctly import the CSS file

const LoopingVideoPlayer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      video.play();
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className='videoGlass snap-center relative bg-[#100c31]'>
      <video ref={videoRef} autoPlay muted loop className='videobg'>
        <source src="bgvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="section-overlay">
        <div className="px-6 py-12 md:px-12">
          <h2 className="my-12 text-5xl font-bold tracking-tigh text-[#ce2d42]">
            Are you ready <br />
            <span className="text-primary dark:text-[#dbd9e8]">for an adventure?</span>
          </h2>
          <a className="mb-2 inline-block rounded bg-[#ce2d42] border border-[#ce2d42] px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-transparent hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
             href="#!" role="button">Projects</a>
          <a className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-[#dbd9e8] border border-[#d2ee41] transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
            href="#contact" role="button">Contact</a>
        </div>
      </section>
    </div>
  );
};

export default LoopingVideoPlayer;