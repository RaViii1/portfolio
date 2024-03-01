import './App.css';
import './components/css/tailwind.css'
import React from 'react';
import ContactForm from './components/ContactForm';
import LoopingVideoPlayer from './components/headerVideo';
import Navbar  from './components/navbar';
import Projects from './components/projects';
import Footer from './components/footer';
function App() {
  return (
    <div className='snap-x'>
      <Navbar />


      <LoopingVideoPlayer/>
      <Projects/>
      <ContactForm />
      <Footer/>
      </div>
  );
}

export default App;
