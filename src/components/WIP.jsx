import React, { useEffect, useRef, useState } from "react";
import './css/tailwind.css'; 
import './css/portfolio.css'; 
import './css/navbar.css'; 

// Extracted Video Component for better readability
const VideoComponent = ({ videoRef, src }) => {
  const handleVideoError = (e) => {
    console.error("Video error:", e);
  };

  return (
    <video
      ref={videoRef}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      onError={handleVideoError}
    >
      Your browser does not support the video tag.
    </video>
  );
};

// Overlay Content Component
const OverlayContent = () => {
  return (
    <div className="h-64 w-full bg-white bg-opacity-10 glassSection border-opacity-20 p-6 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4 text-white w-full border-b border-gray-400 p-2 text-center">
        My Unreal Engine 5 Project
      </h2>
      <p className="text-white text-center w-5/6 mt-4">
        Currently developing a visual environment for a master's degree thesis. This project leverages UE5's advanced features, including Nanite, Lumen, and ray tracing capabilities, to create high-fidelity scenes for benchmarking and visual comparison.
      </p>
    </div>
  );
};

const WIP = () => {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video: ", error);
      });
    }
  }, []);

  useEffect(() => {
    let timer;
    if (isHovering) {
      timer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          setIsHovering(false);
          setIsFading(false);
        }, 1000); // Duration of the fade-out effect
      }, 10000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      className="relative overflow-hidden h-screen flex flex-col items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Working on project overlay"
    >
      <div className="text-center mb-12">
        <span className="text-4xl font-bold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          Currently Working On:
        </span>
      </div>
      <div className="flex-1">
        <VideoComponent 
          videoRef={videoRef} 
          src={process.env.PUBLIC_URL + "/renderVid.mp4"} 
        />
      </div>
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out ${
          isHovering ? 'translate-x-0' : '-translate-x-full'
        } ${isFading ? 'opacity-0 transition-opacity duration-2000' : 'opacity-100'}`}
        aria-hidden={isFading}
      >
        <OverlayContent />
      </div>
    </div>
  );
};

export default WIP;
