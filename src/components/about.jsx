import React, { useEffect } from "react";
import "./css/portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaReact, FaJsSquare, FaNode, FaCss3, FaArrowRight } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className="contact-background bg-gradient-to-r from-[#100c31] to-[#0a061b] py-20 relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="squares-pattern"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-12 lg:px-24">
        <div
          data-aos="fade-right"
          className="w-full z-10 md:w-1/2 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm bg-white/10"
        >
          <img
            src={process.env.PUBLIC_URL + "/imgs/profile.png"}
            alt="Jakub Profile"
            className="object-cover w-full h-full"
          />
        </div>

      
        <div data-aos="fade-left" className="w-full md:w-1/2 text-gray-300">
          <h2
            id="about-title"
            className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-8"
          >
            About Me
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Hi, I'm <strong className="text-[#ce2d42]">Jakub</strong>, a passionate
            <strong className="text-[#ce2d42]"> Frontend Developer</strong> from Poland.
            I build <strong className="text-[#ce2d42]">responsive</strong>, accessible, and user-friendly web applications focused on impactful user experiences.
          </p>

          <p className="text-lg leading-relaxed mb-8">
            I thrive on collaborating in innovative tech projects and continuously expanding my skills. My tech stack includes:
          </p>

          {/* Tech stack */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-md mb-12">
            {[{ name: "React", icon: <FaReact size={32} /> },
              { name: "Next.js", icon: <FaJsSquare size={32} /> },
              { name: "TypeScript", icon: <FaJsSquare size={32} /> },
              { name: "Node.js", icon: <FaNode size={32} /> },
              { name: "TailwindCSS", icon: <FaCss3 size={32} /> }].map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-gray-400 hover:text-[#ce2d42] transition duration-300 cursor-default"
                aria-label={tech.name}
              >
                <div className="mb-2 drop-shadow-md">{tech.icon}</div>
                <span className="text-lg font-semibold">{tech.name}</span>
              </div>
            ))}
          </div>

          {/* Education & Experience */}
          <h3 className="text-3xl font-bold text-gray-400 mb-6">Education & Experience</h3>
          <ul className="list-disc list-inside max-w-md space-y-4 text-gray-400 mb-8">
            <li>🎓 Master's degree in Computer Science, specializing in Software Development.</li>
            <li>🚀 Hands-on experience in Full Stack and Frontend Development.</li>
            <li>💻 Skilled at building high-performance apps focused on user experience.</li>
            <li>🌐 Collaborative and passionate about making an impact.</li>
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center bg-[#ce2d42] hover:bg-[#ce2d42]/70 hover:animate-none text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300 focus:outline-none focus:ring focus:ring-red-600 cursor-pointer"
          >
            <span className="flex flex-row animate-bounce">
              Let's Connect 
              <FaArrowRight className="ml-2 mt-1" />
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;
