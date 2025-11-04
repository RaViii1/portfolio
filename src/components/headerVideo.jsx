import { ArrowDown, Sparkles, Code2, Rocket } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function PortfolioHeader() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-[#0c071b] via-[#090417] to-[#120826] overflow-hidden">
      
      <img
        src={process.env.PUBLIC_URL + '/imgs/baner.jpg'}
        alt="Portfolio banner"
        className="absolute inset-0 object-cover w-full h-full brightness-60"
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      <div className="relative h-full flex items-center justify-center px-6 z-10">
        <div className="max-w-5xl text-center space-y-8">

          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            <span className="block text-white mb-2">Explore My</span>
            <span className="block bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

         
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 text-lg md:text-xl">
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-red-400" />
              <span>Full-Stack Developer</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-pink-400" />
              <span>Modern Web Solutions</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of production-ready projects demonstrating expertise in React, TypeScript, and modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button
              onClick={scrollToProjects}
              data-testid="button-view-projects"
              className="group bg-gradient-to-r from-red-700 to-pink-700 hover:from-red-800 hover:to-pink-800 text-white text-lg px-8 py-6 shadow-xl hover:shadow-red-600/50 transition-all duration-300 rounded"
            >
              View Projects
              <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform inline-block" />
            </button>
            
            <a href="#contact">
              <button
                data-testid="button-contact-me"
                className="border-2 border-slate-700 text-white hover:border-purple-500 hover:text-purple-500 bg-transparent hover:bg-purple-500/20 text-lg px-8 py-6 rounded transition-colors duration-300"
              >
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
