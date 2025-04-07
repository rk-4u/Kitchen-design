import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Portfolio from './Portfolio';
import CustomerSatisfaction from './CustomerSatisfaction';
import SafeExperience from './SafeExperience';
import KitchenDesigns from './KitchenDesigns';
import Process from './Process';
import Testimonials from './Testimonials';
import ModernApproach from './ModernApproach';
import Stats from './Stats';
import LatestNews from './LatestNews';
import CallToAction from './CallToAction';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <CustomerSatisfaction />
      <SafeExperience />
      <KitchenDesigns />
      <Process />
      <Testimonials />
      <ModernApproach />
      <Stats />
      <LatestNews />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;