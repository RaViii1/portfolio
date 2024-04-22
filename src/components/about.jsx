import React from 'react';

const About = () => {
  return (
<div className='glassBorderBottom py-8 body-font relative bg-[#100c31] text-gray-400'>
  <div className='mx-16 text-center'>
    {/* <div className='py-4'>
      <span className="text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">About me:</span>
    </div> */}
    <div className='mx-4 md:mx-8 lg:mx-16 xl:mx-32'>
      <p className='text-left text-[#ce2d42] text-2xl font-semibold md:text-2xl lg:text-3xl py-2'>About me:</p>
      <p className='text-left text-xl font-semibold mb-2' >Hi! I'm Jakub a developer based in Poland currently looking for a part-time remote job. Tech stack I have been working with:</p>
    <div className='flex flex-col mb-4 glassBorderBottom py-4'>
      <div className='flex flex-row items-center hover:text-[#ce2d42]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
        </svg>
        <span className='text-xl ml-2'>React</span>
      </div>
      <div className='flex flex-row items-center hover:text-[#ce2d42]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
        </svg>
        <span className='text-xl ml-2'>NextJS</span>
      </div>
      <div className='flex flex-row items-center hover:text-[#ce2d42]'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
          <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
        </svg>
        <span className='text-xl ml-2'>TypeScript</span>
      </div>
      
  </div>

      <ul className='list-none text-left text-base text-xl list-inside py-2 space-y-4'>
        <li>🎓 Recently graduated with a Bachelor's degree and now pursuing a Master's in Information Technology.</li>
        <li>🚀 Passionate about Graphics, Game Development, and Web Development.</li>
        <li>💻 Interested in creating visually appealing designs and immersive experiences in the digital world.</li>
        <li>🌐 I am keen to gain hands-on experience to apply my academic knowledge effectively and grow professionally.</li>
      </ul>
      <p className='text-left text-[#f5f5f5] text-xl font-semibold md:text-xl  py-4'>🤝 Feel free to contanct me with collaboration proposal.</p>
      
    </div>
  </div>
</div>
    
  );
};

export default About;