import '../App.css';
import '../components/css/tailwind.css'

import React from 'react';

import ContactForm from '../components/ContactForm';
import LoopingVideoPlayer from '../components/headerVideo';
import Navbar  from '../components/navbar';
import About from "../components/about";

function Home() {
  return (

    
    <div className='snap-x'>

      
      <LoopingVideoPlayer/>
      <ContactForm />

    </div>
  );
}

export default Home;
