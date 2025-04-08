import React, { useEffect, useState } from 'react';
import HelmetScene from './HelmetScene'; 

import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Portfolio from './Components/Portfolio';
import CustomerSatisfaction from './Components/CustomerSatisfaction';
import SafeExperience from './Components/SafeExperience';
import KitchenDesigns from './Components/KitchenDesigns';
import Process from './Components/Process';
import Testimonials from './Components/Testimonials';
import ModernApproach from './Components/ModernApproach';
import Stats from './Components/Stats';
import LatestNews from './Components/LatestNews';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="text-white relative">
      {/* Helmet BG */}
      <div className="fixed inset-0 -z-10">
        <HelmetScene />
      </div>

      {/* Loader */}
      {loading ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-opacity duration-500">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
        </div>
      ) : (
        <div className="z-50">
          <Header />
          <div id="hero"><Hero /></div>
          <div id="features"><Features /></div>
          <div id="portfolio"><Portfolio /></div>
          <div id="customer-satisfaction"><CustomerSatisfaction /></div>
          <div id="safe-experience"><SafeExperience /></div>
          <div id="kitchen-designs"><KitchenDesigns /></div>
          <div id="process"><Process /></div>
          <div id="testimonials"><Testimonials /></div>
          <div id="modern-approach"><ModernApproach /></div>
          <div id="stats"><Stats /></div>
          <div id="latest-news"><LatestNews /></div>
          <div id="call-to-action"><CallToAction /></div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
