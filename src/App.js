import './App.css';
import './components/css/tailwind.css'
import React from 'react';
import ContactForm from './components/ContactForm';
import LoopingVideoPlayer from './components/headerVideo';
import Navbar  from './components/navbar';
import Projects from './components/projects';
import Footer from './components/footer';
import About from './components/about';
import ParticlesComponent from './components/ParticlesComponent';
import WIP from './components/WIP';
import { Analytics } from '@vercel/analytics/react';
import LandingPageCarousel from './components/LandingPageCarousel';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Gallery from './components/gallery';

function App() {

  return (
    <div className="min-h-screen flex flex-col ">
      <ParticlesComponent id="particles" />
      <Navbar />
      <Analytics />
      <SpeedInsights />
      <LoopingVideoPlayer />
      <About />
      <Projects />
      <LandingPageCarousel />
      <Gallery />
      <WIP/>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
