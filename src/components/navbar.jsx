
import { useState, useEffect } from "react";
import { Download, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CV from '../CV.pdf';
import { FaArrowDown } from "react-icons/fa";
const navLinks = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Landing Pages", href: "LandingPages" },
  { label: "Contact", href: "contact" },
  
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    ["about", "projects", "LandingPages", "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
          scrolled
            ? "bg-black/92 border-b border-violet-500/20"
            : "bg-black/35 border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              className="font-bold text-2xl bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              RaVi
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    activeSection === link.href
                      ? "text-pink-500"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-pink-500"
                    />
                  )}
                </button>
              ))}
              <a
                href="https://github.com/RaViii1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href={CV}
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
                className="px-0 py-3"
              >
                <button className="bg-[#d2ee41] text-sm hover:bg-transparent border border-transparent text-gray-800 font-semibold py-1 px-4 rounded inline-flex items-center transition duration-300 hover:text-[#d2ee41] hover:border-[#d2ee41]">
                    <FaArrowDown className="w-4 h-4 mr-1" />
                  <span>Download CV</span>
                </button>
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white/80 hover:text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-black/97 backdrop-blur-2xl border-b border-violet-500/20"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3 rounded-lg transition-all text-sm ${
                    activeSection === link.href
                      ? "text-pink-500"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { window.open("https://github.com/RaViii1", "_blank"); setMobileOpen(false); }}
                className="text-left px-4 py-3 text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all text-sm"
              >
                GitHub
              </button>
              <a
                href={CV}
                download="Example-PDF-document"
                target="_blank"
                rel="noreferrer"
                className="px-0 py-3"
              >
                <button className="bg-[#d2ee41] text-sm hover:bg-transparent border border-transparent text-gray-800 font-semibold py-1 px-4 rounded inline-flex items-center transition duration-300 hover:text-[#d2ee41] hover:border-[#d2ee41]">
                    <FaArrowDown className="w-4 h-4 mr-1" />
                  <span>Download CV</span>
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
