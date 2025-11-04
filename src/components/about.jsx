import { useEffect, useState } from 'react';
import { Code2, Sparkles, Rocket, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { FaReact, FaJsSquare, FaNode, FaCss3, FaArrowRight, FaVuejs  } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#100c31] to-[#0a061b] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyOHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-sm font-medium text-red-400 backdrop-blur-sm">
                Open for collaboration
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                Jakub
              </span>
            </h1>

            <div className="space-y-4">
              <h2 className="text-2xl lg:text-3xl font-semibold text-slate-300">
                Fullstack Developer
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Crafting pixel-perfect, high-performance web experiences that users love.
                I transform complex problems into elegant, accessible solutions.
              </p>
            </div>

            <div className='text-2xl lg:text-3xl font-semibold text-slate-300'>Technologies that i use:</div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-md mb-12">
              {[{ name: "React", icon: <FaReact size={32} /> },
                { name: "NextJs", icon: <SiNextdotjs size={32} /> },
                { name: "TypeScript", icon: <SiTypescript size={32} /> },
                { name: "NodeJs", icon: <FaNode size={32} /> },
                { name: "TailwindCSS", icon: <FaCss3 size={32} /> },
                { name: "VueJS", icon: <FaVuejs size={32} /> }
              ].map((tech, idx) => (
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

            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Let's Connect
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <button className="px-8 py-4 border-2 border-slate-600 rounded-lg font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-300 flex items-center gap-2">
                <Github className="w-5 h-5" />
                View Work
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/RaViii1" className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors border border-slate-700/50 hover:border-purple-400/50">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/baran-jakub" className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors border border-slate-700/50 hover:border-purple-400/50">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-slate-800">
                <div className="absolute inset-0" />
                <img
                  src={`${process.env.PUBLIC_URL}/imgs/profile.png`}
                  alt="Jakub - Frontend Developer"
                  className="w-full h-full object-cover hover:mix-blend-normal transition-all duration-500"
                />
              </div>
            </div>


          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#6b21a885] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              🎓 Education
            </h3>
            <p className="text-slate-300 mb-2 font-semibold">Master's in Computer Science</p>
            <p className="text-slate-300 mb-2 font-semibold">Graduate from Lublin University of Technology</p>
            <p className="text-slate-300 mb-2 font-semibold">Specialization in Software Development</p>
            <p className="text-slate-500 text-sm mt-2">Focus on modern web technologies and user experience design</p>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-slate-800/50 border border-slate-700/50 backdrop-blur-sm hover:border-[#6b21a885] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              💼 Experience
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▹</span>
                <span>Full Stack & Frontend Development expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▹</span>
                <span>Building production-ready, scalable applications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">▹</span>
                <span>Collaborative team player </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  );
}

export default About;

