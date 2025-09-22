import React, { useState, useEffect, useCallback } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import AOS from 'aos';
import './css/portfolio.css';
import 'aos/dist/aos.css';

const Project = ({ name, description, image, images, technologies, CodeLink, LiveLink, index }) => {
  const isEvenIndex = index % 2 === 0;

  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = useCallback(() => {
    if (images) setOpen(true);
  }, [images]);
  const closeLightbox = useCallback(() => setOpen(false), []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section
      aria-labelledby={`project-title-${index}`}
      className="max-w-5xl mx-auto my-20 px-6"
      data-aos={isEvenIndex ? 'fade-up-right' : 'fade-up-left'}
    >
      <div
        className={`grid gap-8 grid-cols-1 md:grid-cols-2 items-center place-items-center rounded-lg shadow-lg contact-background 
                    bg-gradient-to-r from-[#100c31] to-[#0a061b] p-8 border border-[#6b21a885] 
                    transition-colors duration-500 ease-in-out hover:border-gray-700`}
      >
        {/* Project Image */}
        <button
          onClick={openLightbox}
          aria-label={`Open image gallery for project ${name}`}
          className="group overflow-hidden rounded-lg z-10 "
          type="button"
        >
          <img
            src={image}
            alt={`Screenshot of ${name}`}
            className="w-[400px] h-[500px] object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110 group-focus:scale-110"
            loading="lazy"
          />
        </button>

        {/* Project Content */}
        <div className="text-gray-300 flex flex-col justify-between">
          <div>
            <h2
              id={`project-title-${index}`}
              className="md:text-3xl text-2xl font-extrabold tracking-wide text-purple-400 mb-4"
            >
              {name}
            </h2>
            <p className="mb-6 leading-relaxed text-base md:text-lg">{description}</p>

            <ul className="flex flex-wrap gap-3 mb-8" aria-label="Technologies used">
              {technologies.map((tech, idx) => (
                <li
                  key={idx}
                  className="text-sm font-semibold bg-purple-700 bg-opacity-40 rounded-full py-1 px-4 text-purple-300 shadow-sm select-none"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-4">
            <a
              href={CodeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-purple-400 z-10 font-semibold border-2 border-purple-400 rounded-lg py-3 px-6 text-center transition-colors duration-300 hover:bg-purple-400 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500"
            >
              View Code
            </a>

            {LiveLink && LiveLink.trim() !== '' && (
              <a
                href={LiveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block z-10 text-purple-400 font-semibold border-2 border-purple-400 rounded-lg py-3 px-6 text-center transition-colors duration-300 hover:bg-purple-400 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500"
              >
                Live Demo
              </a>
            )}

            {images && (
              <button
                onClick={openLightbox}
                type="button"
                aria-label={`View more images for project ${name}`}
                className="inline-block text-purple-400 font-semibold z-10 border-2 border-purple-400 rounded-lg py-3 px-6 text-center transition-colors duration-300 hover:bg-purple-400 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-500"
              >
                More Images
              </button>
            )}
          </nav>
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
