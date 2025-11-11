import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';


function App(){ 
  return (
    <div className='App'>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
    </div>
  );
}

export default App;