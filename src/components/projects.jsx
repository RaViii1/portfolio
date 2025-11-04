import './css/tailwind.css'; 
import './css/portfolio.css'; 
import './css/cards.css'; 
import React from "react";
import Project from './project';
import Gallery from './gallery'; 
import ParticlesComponent from './ParticlesComponent';
import LandingPageCarousel from './LandingPageCarousel';
export default function Projects() {

  const magicmatch = ['MongoDB', 'Express', 'React', 'NodeJS'];
  const bankera = ['NextJS', 'TypeScript', 'MySQL', 'Prisma', 'TailwindCSS', 'ChartJS'];
  const RMovies = ['React', 'NodeJS', 'TailwindCSS'];
  return (
    <div id="projects" className='flex flex-col "'>

     
      <div className='projectBody'>
      {/* <ParticlesComponent id="tsparticles "/> */}
      
        <div className="text-center mb-16 py-16 space-y-6">
          <div className="inline-block">
            <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-sm font-medium text-red-400 backdrop-blur-sm">
              My apps
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Featured Projects:
            </span>
          </h2>
        </div>

         <Project
          index={1}
          name="MagicMatch"
          description="MagicMatch is my first fullstack project based on MERN stack. To play user needed to create an account, each playthrough saved user scores in the mongo database, and the best scores (with the lowest turn count) were displayed in the Top 10 scoreboard. Card designs were also made by me inspired by the Diablo style."
          image={process.env.PUBLIC_URL + '/imgs/magicmatch.PNG'}
          technologies={magicmatch}
          CodeLink={"https://github.com/RaViii1/FullStack-MagicMatch"}
        />       

{/* <div className='flex flex-row justify-center md:scale-75'>
    <img className='menuCard delay-0 mx-2' src={process.env.PUBLIC_URL + '/imgs/gem.PNG'} alt="gem"></img>
    <img className='menuCard1 delay-1 mx-2 ' src={process.env.PUBLIC_URL + '/imgs/lantern.PNG'} alt="lantern"></img>
</div> */}

        <Project
          index={2}
          name="Bankera"
          description={[
            "Bankera is my first group project developed as engineer's thesis with full documentation. Its an aplication simulating currency exchange. User can freely add 'withdraw' money as well as exchange it based on regularly updated rates saved in database. Other features include blog post system and a forex market with charts."
          
          ]}
          image={process.env.PUBLIC_URL + '/imgs/bankera.PNG'}
          technologies={bankera}
          LiveLink={"https://bankera.dingo-mc.net/"}
          CodeLink={"https://github.com/RaViii1/engineering-thesis"}
        />

        <Project
          index={3}
          name="RMovies"
          description="WatchMovies is my latest project, initiated as an app design endeavor following the completion of a three-month internship at ArtSaas Technologies. This project leverages the skills and insights gained during my internship to create an engaging and user-friendly movie streaming application."
          image={process.env.PUBLIC_URL + '/imgs/movies.PNG'}
          images={[
            process.env.PUBLIC_URL + '/imgs/Watchmovies1.png',
            process.env.PUBLIC_URL + '/imgs/Watchmovies2.png',
            process.env.PUBLIC_URL + '/imgs/Watchmovies3.png',
          ]}
          technologies={RMovies}
          CodeLink={"https://github.com/RaViii1/WatchApp"}
          LiveLink={""}
        />

      <LandingPageCarousel />
      <Gallery/>



    </div>
    </div>
  );
}