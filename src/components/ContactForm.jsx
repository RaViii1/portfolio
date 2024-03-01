import React, { useState } from 'react';
import { FaGit, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission, such as sending the data to a backend server
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <div id='contact snap-center' >

  <section class="body-font relative bg-[#100c31] text-gray-400">

    <div class="container mx-auto px-5 py-24">
      
      <div class="mb-12 flex w-full flex-col text-center">
      <div className='text-center py-4'><span class="text-center text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
          Contact Me:
        </span></div>
        <p class="mx-auto text-base leading-relaxed lg:w-2/3">Feel free to reach out to me! Whether you have a question,
          feedback, or a collaboration proposal, we'd love to hear from you.
        </p>
      </div>

      <div class="mx-auto md:w-2/3 lg:w-1/2">
        <div class="-m-2 flex flex-wrap">

          
          <div class="w-1/2 p-2">
            <div class="relative">
              <input type="text" id="name" name="name" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Name" />
              <label for="name" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Name</label>
            </div>
          </div>
          <div class="w-1/2 p-2">
            <div class="relative">
              <input type="email" id="email" name="email" class="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Email" />
              <label for="email" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Email</label>
            </div>
          </div>
          <div class="mt-4 w-full p-2">
            <div class="relative">
              <textarea id="message" name="message" class="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900" placeholder="Message"></textarea>
              <label for="message" class="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500">Message</label>
            </div>
          </div>
          <div class="w-full p-2">
            <button class="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send</button>
          </div>


          
          <div class="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
            <a class="text-indigo-400">JakubBaran@bussines.com</a>
            <p class="my-5 leading-normal"><br /></p>
            <span class="inline-flex">
              <a class="text-gray-500 text-lg hover:text-[#d2ee41]">
                <FaLinkedin size={'2em'}></FaLinkedin>
              </a>
              <a class="ml-4 text-gray-500 hover:text-[#d2ee41]" href="https://github.com/RaViii1">
                <FaGithub size={'2em'}></FaGithub>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
</section>
    </div>
  );
};

export default ContactForm;