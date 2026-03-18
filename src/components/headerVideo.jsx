
import { motion } from "framer-motion";
import { Code2, Rocket, ChevronDown } from "lucide-react";

const HERO_BG = "imgs/baner.jpg"; 

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-fuchsia-600 rounded-full opacity-60"
          animate={{
            y: [0, -window.innerHeight],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.03,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />

      {/* Particles */}
      <Particles />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-2 text-white">
            Explore My
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            Portfolio
          </h1>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-5 flex-wrap"
        >
          <span className="flex items-center gap-1.5 text-sm text-white/60">
            <Code2 size={13} className="text-pink-400" />
            Full-Stack Developer
          </span>
          <span className="text-white/25">•</span>
          <span className="flex items-center gap-1.5 text-sm text-white/60">
            <Rocket size={13} className="text-violet-400" />
            Modern Web Solutions
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          A showcase of production-ready projects demonstrating expertise in
          React, TypeScript, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4 flex-wrap mb-12"
        >
          <a href="#projects" className="text-white group px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-2">
            View Projects
            <ChevronDown size={16} />
          </a>
          <a 
            href="https://www.linkedin.com/in/baran-jakub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white px-8 py-4 border-2 border-slate-600 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-300 flex items-center gap-2"
            >
            Contact Me
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown size={24} className="text-white/30" />
      </motion.div>
    </section>
  );
}
