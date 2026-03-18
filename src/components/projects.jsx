import './css/tailwind.css';
import React from "react";
import Project from './project';


export default function Projects() {
  const magicmatch = ['MongoDB', 'Express', 'React', 'NodeJS'];
  const bankera    = ['NextJS', 'TypeScript', 'MySQL', 'Prisma', 'TailwindCSS', 'ChartJS'];
  const RMovies    = ['React', 'NodeJS', 'TailwindCSS'];
  const StatsForge = ['NextJS', 'TypeScript', 'TailwindCSS', 'Supabase', 'oAuth2.0' ];

  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-black to-[#0a061b] text-white overflow-hidden"
    >
      {/* Ambient blobs — same as About page */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      />

      {/* Top divider — same as About page */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-20 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center pt-24 pb-14 px-6 gap-5">
        <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-sm font-medium text-red-400 backdrop-blur-sm">
          My apps
        </span>

        <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <p className="max-w-lg text-slate-400 text-base leading-relaxed">
          A selection of things I've built — from solo experiments to team products shipped to real users.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 pb-24 flex flex-col gap-0">

        {[
          {
            index: 1,
            name: "MagicMatch",
            description: "My first fullstack MERN project. Players create accounts, every playthrough saves scores to MongoDB, and the Top 10 leaderboard highlights the sharpest minds. Card art was designed by me, inspired by Diablo's dark fantasy aesthetic.",
            image: process.env.PUBLIC_URL + '/imgs/magicmatch.PNG',
            technologies: magicmatch,
            CodeLink: "https://github.com/RaViii1/FullStack-MagicMatch",
          },
          {
            index: 2,
            name: "Bankera",
            description: "An engineer's thesis group project — a full-featured currency exchange simulator. Users add and withdraw funds, exchange at live rates, browse a blog, and trade on a forex market with interactive charts.",
            image: process.env.PUBLIC_URL + '/imgs/bankera.PNG',
            technologies: bankera,
            LiveLink: "https://bankera.dingo-mc.net/",
            CodeLink: "https://github.com/RaViii1/engineering-thesis",
          },
          {
            index: 3,
            name: "RMovies",
            description: "A movie streaming app built after a three-month internship at ArtSaas Technologies, channeling the architectural patterns and skills from that experience into a user-first viewing platform.",
            image: process.env.PUBLIC_URL + '/imgs/movies.PNG',
            images: [
              process.env.PUBLIC_URL + '/imgs/Watchmovies1.png',
              process.env.PUBLIC_URL + '/imgs/Watchmovies2.png',
              process.env.PUBLIC_URL + '/imgs/Watchmovies3.png',
            ],
            technologies: RMovies,
            CodeLink: "https://github.com/RaViii1/WatchApp",
          },
          {
            index: 4,
            name: "StatsForge",
            description: "StatsForge is a modern, industrial-grade analytics platform for competitive gamers. It provides real-time metrics, match diagnostics, and performance telemetry across multiple popular titles, built with Next.js 16 and powered by Supabase.",
            image: process.env.PUBLIC_URL + '/imgs/statsforge.webp',
            images: [
              process.env.PUBLIC_URL + '/imgs/statsforge.webp'
            ],
            technologies: StatsForge,
            LiveLink: "https://statsforge.vercel.app/",
            CodeLink: "https://github.com/RaViii1/statsforge",
          },

        ].map((p, i, arr) => (
          <div key={p.index}>
            <div className="py-10">
              <Project {...p} />
            </div>
            {i < arr.length - 1 && (
              <div className="relative flex items-center justify-center">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
                <div className="absolute w-2 h-2 rounded-full bg-red-500/60 shadow-[0_0_8px_2px_rgba(239,68,68,0.4)]" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px opacity-20 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
    </section>
  );
}