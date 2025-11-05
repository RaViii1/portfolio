import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Analytics } from '@vercel/analytics/react';

export default function PortfolioContact() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true, delay: 100 });
  }, []);

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'jakubbaran.business@gmail.com',
      link: 'mailto:jakubbaran.business@gmail.com',
      color: 'from-red-500 to-pink-600',
      bgHover: 'hover:bg-red-500/10',
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Jakub Baran',
      link: 'https://www.linkedin.com/in/baran-jakub',
      color: 'from-blue-500 to-blue-600',
      bgHover: 'hover:bg-blue-500/10',
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: 'View Projects',
      link: 'https://github.com/RaViii1',
      color: 'from-purple-500 to-purple-600',
      bgHover: 'hover:bg-purple-500/10',
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-[#100c31] via-[#0a061b] to-[#100c31] py-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyOHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />

      <div className="absolute top-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div data-aos="fade-up" className="text-center mb-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-sm font-medium text-red-400 backdrop-blur-sm">
              Let's Connect
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.id}
                href={method.link}
                target={method.id !== 'email' ? '_blank' : undefined}
                rel={method.id !== 'email' ? 'noopener noreferrer' : undefined}
                data-testid={`link-contact-${method.id}`}
                onMouseEnter={() => setHoveredCard(method.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="block group"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div
                  className={`relative p-8 bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm transition-all duration-300 ${method.bgHover} hover:border-slate-600 hover:shadow-xl overflow-visible rounded-md`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-md`}
                  />
                  <div className="relative space-y-4">
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${method.color} shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-white">{method.label}</h3>
                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors break-all">
                        {method.value}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-medium text-transparent bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text">
                      <span>Connect now</span>
                      <Send
                        className={`w-4 h-4 text-red-500 transform transition-transform duration-300 ${
                          hoveredCard === method.id ? 'translate-x-1 -translate-y-1' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <Analytics />
      </div>
    </section>
  );
}
