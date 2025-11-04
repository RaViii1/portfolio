import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, Info } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Video component for clarity
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

export default function WorkInProgress() {
  const videoRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 1200,
      delay: 300,    // Added delay so animation triggers when element fully visible
      once: true     // Animate only once when scrolling down
    });
  }, []);

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
        }, 1000); // fade out duration
      }, 10000); // after 10 seconds hover
    }
    return () => clearTimeout(timer);
  }, [isHovering]);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <section
      id="wip"
      className="relative min-h-screen bg-gradient-to-br from-[#0a0620] via-[#100c31] to-[#1a0b3f] py-20 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Working on project overlay"
    >
      {/* Animated background orbs */}
      <div data-aos="fade-up" className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
      <div data-aos="fade-up" data-aos-delay="400" className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center mb-16 space-y-6">
          <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-sm font-medium text-red-400 backdrop-blur-sm">
            Work In Progress
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Currently Working On
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center relative">
          {/* Video Container */}
          <div data-aos="fade-right" className="relative group rounded-2xl border border-[#6b21a8aa] bg-[#100c31cc] backdrop-blur-md shadow-2xl overflow-hidden">
            <div className="relative aspect-video">
              <VideoComponent videoRef={videoRef} src="/renderVid.mp4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#100c31] via-transparent to-transparent opacity-40" />
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-10">
              <button
                onClick={() => {
                  if (!videoRef.current) return;
                  if (!videoRef.current.paused) {
                    videoRef.current.pause();
                  } else {
                    videoRef.current.play();
                  }
                }}
                className="p-3 bg-[#100c31cc] backdrop-blur-md border border-[#6b21a8aa] rounded-lg text-[#dbd9e8] hover:border-purple-600 hover:text-purple-500 transition duration-300 shadow-lg"
                aria-label={videoRef.current && !videoRef.current.paused ? "Pause video" : "Play video"}
              >
                {videoRef.current && !videoRef.current.paused ? (
                  <Pause className="w-5 h-5 text-purple-500" />
                ) : (
                  <Play className="w-5 h-5 text-purple-500" />
                )}
              </button>
            </div>

            {/* Decorative Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-500 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 -z-10" />
          </div>

          {/* Info Panel */}
          <div data-aos="fade-left" className="space-y-6">
            <div className="backdrop-blur-md bg-[#100c31cc] border border-[#6b21a8aa] rounded-2xl p-8 hover:border-purple-600 transition duration-300 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl shadow-lg">
                  <Info className="w-6 h-6 text-white bg-clip-text" title="Project Info" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#dbd9e8] mb-2">Unreal Engine 5 Project</h3>
                  <p className="text-purple-500 text-sm font-medium">Master's Degree Thesis</p>
                </div>
              </div>

              <p className="text-[#dbd9e8] leading-relaxed mb-6">
                Currently developing a visual environment for a master's degree thesis. This project leverages UE5's advanced features to create high-fidelity scenes for benchmarking and visual comparison.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Nanite', 'Lumen', 'Ray Tracing', 'UE5.3', 'reference-based metrics', 'referenceless metrics'].map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-semibold bg-purple-700 bg-opacity-40 rounded-full py-1 px-4 text-purple-300 shadow-sm select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowInfo(!showInfo)}
              className="w-full px-6 py-4 text-purple-400 z-10 font-semibold border-2 border-purple-400 rounded-xl text-center transition-colors duration-300 hover:bg-purple-400 hover:text-black group flex items-center justify-center gap-2"
            >
              <Info className="w-5 h-5 text-purple-400 group-hover:text-black" />
              <span>{showInfo ? 'Hide' : 'Learn More'}</span>
            </button>

            {showInfo && (
              <div className="backdrop-blur-md bg-[#100c31cc] border border-[#6b21a8aa] rounded-xl p-6 space-y-4 animate-fade-in">
                <h4 className="text-xl font-bold text-[#dbd9e8] border-b border-[#6b21a8aa] pb-2">Project Goals</h4>
                <ul className="space-y-2 text-[#dbd9e8]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>Visual benchmarking across different rendering configurations using reference-based image quality metrics (e.g., PSNR, SSIM) to objectively compare output fidelity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>High-fidelity environment creation leveraging Unreal Engine 5's Nanite virtualized geometry system.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>Real-time global illumination implemented through Lumen technology, providing dynamic and realistic lighting and reflections, validated through visual quality assessments under varying conditions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">▸</span>
                    <span>Performance analysis and optimization techniques focusing on frames per second (FPS), CPU load, and memory consumption to balance rendering quality with hardware resource management.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
