import React, { useState, useEffect, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Github, ExternalLink, Images } from 'lucide-react';

const Project = ({ name, description, image, images, technologies, CodeLink, LiveLink, index }) => {
  const isEvenIndex = index % 2 === 0;
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = useCallback(() => { if (images) setOpen(true); }, [images]);
  const closeLightbox = useCallback(() => setOpen(false), []);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const descText = Array.isArray(description) ? description[0] : description;

  return (
    <section
      aria-labelledby={`project-title-${index}`}
      className="w-full"
      data-aos={isEvenIndex ? 'fade-up-right' : 'fade-up-left'}
    >
      <div className={`group relative rounded-2xl overflow-hidden border border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-[#0d0b1e]/80 hover:border-red-500/20 transition-all duration-500`}>

        {/* Top accent line on hover */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        <div className={`grid grid-cols-1 lg:grid-cols-2 items-stretch ${isEvenIndex ? 'lg:[direction:rtl]' : ''}`}>

          {/* ── Image — fills full column height ── */}
          <button
            onClick={openLightbox}
            aria-label={`Open image gallery for ${name}`}
            type="button"
            className={`relative overflow-hidden focus:outline-none [direction:ltr] min-h-[280px] lg:min-h-0 ${images ? 'cursor-zoom-in' : 'cursor-default'}`}
          >
            {/* Absolutely fills the entire column, matching content height */}
            <img
              src={image}
              alt={`Screenshot of ${name}`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />

            {/* Gradient bleed into content */}
            <div className={`absolute inset-0 ${
              isEvenIndex
                ? 'bg-gradient-to-l from-[#0d0b1e]/90 via-[#0d0b1e]/20 to-transparent'
                : 'bg-gradient-to-r from-[#0d0b1e]/90 via-[#0d0b1e]/20 to-transparent'
            }`} />
            {/* Bottom fade for mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b1e]/80 via-transparent to-transparent lg:hidden" />

            {/* "More images" badge */}
            {images && (
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-white/70 text-xs font-semibold backdrop-blur-sm z-10">
                <Images size={12} />
                Gallery
              </div>
            )}
          </button>

          {/* ── Content ── */}
          <div className={`[direction:ltr] flex flex-col justify-center gap-5 px-8 py-10 lg:px-10 xl:px-14`}>

            {/* Label */}
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-red-400">
              Featured Project
            </span>

            {/* Title */}
            <h2
              id={`project-title-${index}`}
              className="text-4xl xl:text-5xl font-black tracking-tight leading-none text-white"
            >
              {name}
            </h2>

            {/* Description box — matches About page cards exactly */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-950/60 to-slate-800/40 border border-slate-700/40">
              <p className="text-slate-400 text-sm leading-relaxed">
                {descText}
              </p>
            </div>

            {/* Tech pills */}
            <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
              {technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border border-red-500/25 bg-red-500/5 text-red-400 select-none"
                >
                  {tech}
                </li>
              ))}
            </ul>

            {/* Action buttons */}
            <nav className="flex flex-wrap gap-3 pt-1" aria-label={`Links for ${name}`}>
              {CodeLink && (
                <a
                  href={CodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-600/60 text-slate-400 text-sm font-semibold bg-slate-800/40 hover:border-slate-400 hover:text-white transition-all duration-300"
                >
                  <Github size={15} />
                  Source Code
                </a>
              )}

              {LiveLink && LiveLink.trim() !== '' && (
                <a
                  href={LiveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              )}

              {images && (
                <button
                  onClick={openLightbox}
                  type="button"
                  aria-label={`View more images for ${name}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-600/60 text-slate-400 text-sm font-semibold bg-slate-800/40 hover:border-pink-500/50 hover:text-pink-400 transition-all duration-300"
                >
                  <Images size={15} />
                  More Images
                </button>
              )}
            </nav>
          </div>
        </div>


      </div>

      {/* Lightbox */}
      {open && images && (
        <Lightbox
          open={open}
          close={closeLightbox}
          slides={images.map((img) => ({ src: img }))}
          index={photoIndex}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          animation={{ duration: 300 }}
          keyboard={{ escapeKey: true, arrowKeys: true }}
        />
      )}
    </section>
  );
};

export default Project;