import React from 'react';
import './css/portfolio.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaReact, FaJsSquare, FaNode, FaCss3 } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration in milliseconds
      easing: 'ease-out-cubic', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div data-aos="fade-up" className='bg-gradient-to-r from-[#100c31] to-[#0a061b] py-12 relative glassBorderBottom'>
      
      <div className='container mx-auto rounded-lg p-8 md:p-12 lg:p-16'>
        <h2 className='py-8 text-4xl font-bold text-gray-900 dark:text-gray-100 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent'>About Me</h2>
        <p className='text-lg text-gray-300 mb-6'>
          Hi there! I'm Jakub, a seasoned <span className="text-[#ce2d42] font-bold capitalize">Frontend Developer</span> from Poland. I specialize in crafting <span className="text-[#ce2d42] font-bold capitalize">responsive</span> and <span className="text-[#ce2d42] font-bold capitalize">user-friendly web applications</span>. I'm passionate about collaborating on innovative projects and expanding my expertise in the tech industry.
          With a strong foundation in <span className="text-[#ce2d42] font-bold capitalize">Frontend Development</span>, I excel at building <span className="text-[#ce2d42] font-bold capitalize">responsive</span> and <span className="text-[#ce2d42] font-bold capitalize">user-friendly interfaces</span>. My tech stack includes:  
        </p>
        <div className='flex flex-wrap justify-center mb-8'>
  {[
    { name: 'React', icon: <FaReact size={24} /> },
    { name: 'NextJS', icon: <FaJsSquare size={24} /> },
    { name: 'TypeScript', icon: <FaJsSquare size={24} /> },
    { name: 'Node.js', icon: <FaNode size={24} /> },
    { name: 'Tailwind CSS', icon: <FaCss3 size={24} /> },
  ].map((tech, index) => (
    <div key={index} className='flex items-center w-full md:w-auto'>
      <div className='flex items-center hover:text-[#ce2d42] transition duration-300 text-gray-400 m-2 md:mx-4'>
        {tech.icon}
        <span className='text-2xl ml-2'>{tech.name}</span>
      </div>
      {index < 4 && (
        <span className='text-gray-600 text-3xl mx-6 md:visible invisible'>·</span>
      )}
    </div>
  ))}
</div>


        <h3 className='text-3xl font-bold text-gray-400 mb-4'>Education & Experience</h3>
        <ul className='list-none text-lg text-gray-400 space-y-6 text-left'>
          <li>🎓 Pursuing a Master's degree in Information Technology, building on my Bachelor's in Computer Science with a focus on Software Development.</li>
          <li>🚀 Experienced in Full Stack Development, with a strong emphasis on Frontend technologies.</li>
          <li>💻 Skilled in developing high-performance applications that enhance user experience.</li>
          <li>🌐 Collaborative mindset with a passion for contributing to meaningful projects.</li>
        </ul>

        <p className='text-lg text-gray-300 mb-8 mt-6'>
          🤝 I'm open to collaboration proposals and would love to connect with like-minded individuals!
        </p>
        <div className='flex flex-row justify-center md:justify-start'>
          <a href="#contact" className='bg-[#ce2d42] hover:bg-[#ce2d42]/50 text-white font-bold py-3 px-6 rounded transition duration-300'>
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
