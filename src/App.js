import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import InstructorsSection from './components/InstructorsSection';
import ContactSection from './components/ContacSection';
import Footer from './components/Footer';
import ListaCursos from './components/ListaCursos';


function App(){ 
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <InstructorsSection />
      <ContactSection />
      <Footer />  
      <ListaCursos />
    </div>
  );
}

export default App;