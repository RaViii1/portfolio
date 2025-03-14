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
    <div id="projects" className='flex flex-col glassBorderBottom "'>

     
      <div className='projectBody'>
      {/* <ParticlesComponent id="tsparticles "/> */}
      
        <div className='text-center py-16'><span class="text-center text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
          My projects:
        </span></div>

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
        <div className='text-center pt-16'><span class="text-center text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
          In Planning: 
        </span>
        
<ol
  class="my-8 mx-16 pb-8 px-8 glassSection border-l border-[#d2ee41] dark:border-[#ce2d42] md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
 
 <li>
    <div class="flex-start flex items-center pt-2 md:block md:pt-0">
      <div
        class="ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-[#ce2d42] dark:bg-[#ce2d42] md:-mt-[5px] md:ml-0 md:mr-0"></div>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
        2024
      </p>
    </div>
    <div class="ml-4 mt-2 pb-5 md:ml-0">
      <h4 class="mb-1.5 text-xl font-semibold text-[#ce2d42]">Streaming app</h4>
      <p class="mb-3 text-neutral-500 dark:text-neutral-300">
        App design 
      </p>
    </div>
  </li>


  <li className=''>
    <div class="flex-start flex items-center pt-2 md:block md:pt-0  ">
      <div
        class="ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-[#ce2d42] dark:bg-[#ce2d42] md:-mt-[5px] md:ml-0 md:mr-0"></div>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300 ">
        2025
      </p>
    </div>
    <div class="ml-4 mt-2 pb-5 md:ml-0 ">
      <h4 class="mb-1.5 text-xl font-semibold text-[#ce2d42]">Chatroom application</h4>
      <p class="mb-3 text-neutral-500 dark:text-neutral-300">
        App allowing users to create chatrooms
      </p>
    </div>
  </li>

  <li>
    <div class="flex-start flex items-center pt-2 md:block md:pt-0">
      <div
        class="ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-[#ce2d42] dark:bg-[#ce2d42] md:-mt-[5px] md:ml-0 md:mr-0"></div>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
        Future
      </p>
    </div>
    <div class="ml-4 mt-2 pb-5 md:ml-0">
      <h4 class="mb-1.5 text-xl font-semibold text-[#ce2d42]">Future projects</h4>
      <p class="mb-3 text-neutral-500 dark:text-neutral-300">
        More info soon
      </p>
    </div>
  </li>

</ol>
  </div>
  
    </div>
    </div>
  );
}