import React from 'react';
import './css/portfolio.css'; 


const About = () => {
  return (
    <div className='bg-gradient-to-r from-[#100c31] to-[#0a061b] py-8 relative glassBorderBottom'>

      
      <div className='container mx-auto rounded-lg p-6 md:p-8 lg:p-10'>
        <h2 className='text-4xl font-bold text-white mb-6'>About Me</h2>
        <p className='text-lg text-gray-300 mb-4'>
          Hi there! I'm Jakub, a software developer from Poland. I enjoy building dynamic web applications and am currently on the lookout for part-time or full-time remote positions. I'm eager to grow my skills and gain hands-on experience in the tech industry.
        </p>
        <p className='text-lg text-gray-300 mb-4'>
          I have a strong foundation in front-end development, with a focus on building responsive and user-friendly interfaces. Here’s my tech stack:
        </p>

        <div className='flex flex-col items-start mb-6 space-y-4'>
          {['React', 'NextJS', 'TypeScript', 'Node.js', 'Tailwind CSS'].map((tech, index) => (
            <div key={index} className='flex items-center text-gray-400 hover:text-[#ce2d42] transition duration-300'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
              </svg>
              <span className='text-xl'>{tech}</span>
            </div>
          ))}
        </div>

        <ul className='list-none text-lg text-gray-400 space-y-4 mb-6 text-left'>
          <li>🎓 Almost completed my Master's degree in Information Technology, building on my Bachelor's degree in Computer Science with a focus on Software Development.</li>
          <li>🚀 Focused on Full Stack Development, with experience in both front-end and back-end technologies.</li>
          <li>💻 Skilled in building applications that prioritize performance and enhance user experience.</li>
          <li>🌐 Eager to collaborate on innovative projects that challenge my skills and contribute to meaningful solutions.</li>
        </ul>


        <p className='text-lg text-gray-300 mb-6'>
          🤝 I’m open to collaboration proposals and would love to connect with like-minded individuals!
        </p>
      </div>
    </div>
  );
};

export default About;
