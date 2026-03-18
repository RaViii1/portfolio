/*
 * Design Dark Cosmos — Sites Section
 * Carousel of client websites with prev/next navigation
 */
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const sites = [
  {
    name: "Annawachaczyk.com",
    url: "https://annawachaczyk.com",
    description: "Personal portfolio website — elegant and modern",
    image: "/imgs/AnnaWachaczyk.png",
    tag: "Portfolio",
  },
  {
    name: "Antykwariat-pasja.pl",
    url: "https://antykwariat-pasja.pl",
    description: "Antique bookstore — e-commerce platform",
    image: "imgs/SalonAntykówPasja.png",
    tag: "E-commerce",
  },
  {
    name: "Jolakitowska.pl",
    url: "https://jolakitowska.pl",
    description: "Artist portfolio — creative showcase",
    image: "/imgs/JolantaKitowska.png",
    tag: "Portfolio",
  },
  {
    name: "Galeriabator.com",
    url: "https://galeriabator.com",
    description: "Art gallery — exhibition showcase",
    image: "/imgs/GaleriaBator.png",
    tag: "Gallery",
  },
];

export default function SitesSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + sites.length) % sites.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % sites.length);
  };

  const site = sites[current];

  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0b071a] to-[#0a061b]"
      id="LandingPages"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px opacity-20 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 inline-flex mb-4">
            My recent work
          </span>
          <h2 className="text-4xl sm:text-6xl font-bold text-white">
            Sites I{" "}
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Worked On
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative rounded-2xl overflow-hidden bg-white/[0.06] backdrop-blur-xl border-2 border-violet-500/20">
            <div className="relative overflow-hidden" style={{ paddingBottom: "52%" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={site.image}
                  alt={site.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/20 to-black/90" />

              {/* Tag */}
              <div className="absolute top-4 left-4">
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-500/25 border border-violet-500/40 text-violet-300">
                  {site.tag}
                </span>
              </div>

              {/* Site info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{site.name}</h3>
                  <p className="text-white/55 text-sm">{site.description}</p>
                </div>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg font-semibold bg-slate-800/60 border border-slate-600/60 text-slate-300 hover:border-red-500/50 hover:text-white hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 backdrop-blur-sm flex-shrink-0"
                >
                  <ExternalLink size={13} />
                  Visit
                </a>
              </div>

              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg flex items-center justify-center bg-black/70 border border-white/20 text-white shadow-xl hover:border-red-500/60 hover:bg-gradient-to-br hover:from-red-600 hover:to-pink-600 hover:shadow-red-500/40 transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-lg flex items-center justify-center bg-black/70 border border-white/20 text-white shadow-xl hover:border-red-500/60 hover:bg-gradient-to-br hover:from-red-600 hover:to-pink-600 hover:shadow-red-500/40 transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>

              {/* Counter */}
              <div className="absolute top-4 right-4 text-xs font-mono text-white/40">
                {String(current + 1).padStart(2, "0")} / {String(sites.length).padStart(2, "0")}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {sites.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className="transition-all duration-300"
                style={{
                  width: current === i ? "28px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  background: current === i ? "#e11d48" : "rgba(255,255,255,0.18)",
                }}
              />
            ))}
          </div>

          {/* Site list */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {sites.map((s, i) => (
              <button
                key={s.name}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                className={`text-sm transition-all duration-200 font-mono ${
                  i === current
                    ? "text-red-400 underline underline-offset-4"
                    : "text-white/35 hover:text-white/70"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-20 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
    </section>
  );
}