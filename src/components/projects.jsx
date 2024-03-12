import './css/tailwind.css'; 
import './css/portfolio.css'; 
import './css/cards.css'; 
import React, { useEffect, useState } from "react";
export default function Projects() {

  return (
    <div id="projects" className='flex flex-col glassBorderBottom "'>
      
              <div className='text-center pt-16'><span class="text-center text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
          My projects:
        </span></div>
        <div className="container my-24 mx-auto md:px-6 text-gray-400 flex flex-col md:flex-row items-center">
            <img src={process.env.PUBLIC_URL + '/imgs/magicmatch.PNG'}
                className="mb-3 p-8 rounded-lg max-w-full h-auto md:w-1/2 md:mr-8" alt="image" />

            <div className='flex flex-col pt-8 md:w-1/2 p-4'>
                <div className="mb-6 flex items-center">
                  <div>
                      <span> Created in 2022 by </span>
                      <a href="#!" className="font-medium">Jakub Baran</a>
                      <div className="flex flex-row px-2 font-sans font-arim pt-2">
                          <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">React</div>
                          <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">MongoDB</div>
                          <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">NodeJS</div>  
                      </div>
                  </div>
                </div>

                <h1 className="mb-6 text-3xl font-bold text-[#ce2d42]">
                  MagicMatch
                </h1>

                <p className='text-center'>MagicMatch is my first fullstack project based on MERN stack. To play user needed to create an account, each playthrough saved user scores in the mongo database, and the best scores (with the lowest turn count) were displayed in the Top 10 scoreboard. Card designs were also made by me inspired by the Diablo style.
                </p>

                <div className='flex flex-row justify-center md:scale-75'>
                  <img className='menuCard delay-0 mx-2' src={process.env.PUBLIC_URL + '/imgs/gem.PNG'} alt="gem"></img>
                  <img className='menuCard1 delay-1 mx-2 ' src={process.env.PUBLIC_URL + '/imgs/lantern.PNG'} alt="lantern"></img>
                </div>
            </div>
        </div>
        
        <div className="container my-24 mx-auto md:px-6 text-gray-400 flex flex-col md:flex-row-reverse items-center">
            <img src={process.env.PUBLIC_URL + '/imgs/bankera.PNG'}
                className="mb-3 p-8 rounded-lg max-w-full h-auto md:w-1/2 md:mr-8" alt="image" />

            <div className='flex flex-col pt-8 md:w-1/2 p-4'>
                <div className="mb-6 flex items-center ">
                <div>
                    <span> Developed in 2023-2024 by </span>
                    <a href="#!" className="font-medium">Jakub Baran, DingoMC, damymeister</a>
                    <div className="flex flex-row px-2 font-sans font-arim pt-2">
                        <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">NextJs</div>
                        <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">Prisma</div>
                        <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">MySQL</div>
                        <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">NodeJS</div>
                        <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">ChartJS</div>
                        <div className="rounded-full bg-zinc-900 text-[#d2ee41] p-2">TailwindCSS</div>
                    </div>
                </div>
                </div>

                <h1 className="mb-6 text-3xl font-bold text-[#ce2d42]">
                Bankera
                </h1>

                <p className='text-center'>
                Bankera is my first group project developed as engineer's thesis with full documentation and production version. Link to live version <a  className='text-[#ce2d42] underline hover:text-red-400' href='http://dingo-mc.net:3001/'> here </a>
                </p>

            </div>
        </div>
        <div className='text-center pt-16'><span class="text-center text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
          In Planning: 
        </span></div>
        
<ol
  class="my-8 mx-16 pb-8 px-8 border-l border-[#d2ee41] dark:border-[#ce2d42] md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
 
  <li className=''>
    <div class="flex-start flex items-center pt-2 md:block md:pt-0  ">
      <div
        class="ml-[5px] mr-3 h-[12px] w-[12px] rounded-full bg-[#ce2d42] dark:bg-[#ce2d42] md:-mt-[5px] md:ml-0 md:mr-0"></div>
      <p class="mt-2 text-sm text-neutral-500 dark:text-neutral-300 ">
        2024
      </p>
    </div>
    <div class="ml-4 mt-2 pb-5 md:ml-0 ">
      <h4 class="mb-1.5 text-xl font-semibold text-[#ce2d42]">Messenger clone</h4>
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
        2024
      </p>
    </div>
    <div class="ml-4 mt-2 pb-5 md:ml-0">
      <h4 class="mb-1.5 text-xl font-semibold text-[#ce2d42]">Netflix clone</h4>
      <p class="mb-3 text-neutral-500 dark:text-neutral-300">
        App design 
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
        Who knows what the future holds.
      </p>
    </div>
  </li>
</ol>

    </div>
  );
}