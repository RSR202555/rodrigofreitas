import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Benefits from './components/Benefits';
import MidCTA from './components/MidCTA';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#FCFBFA] text-[#0E1720] font-sans selection:bg-cta/30 selection:text-primary overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Benefits />
        <MidCTA />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default App;
