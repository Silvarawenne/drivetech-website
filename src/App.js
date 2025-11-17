import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import InstructorsSection from './components/InstructorsSection';
import ListaCursos from './components/ListaCursos';
import ContactSection from './components/ContacSection';
import Footer from './components/Footer';


function App(){ 
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <InstructorsSection />
      <ListaCursos />
      <ContactSection />
      <Footer />  
    </div>
  );
}

export default App;