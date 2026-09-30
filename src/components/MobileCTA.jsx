import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { CTA_URL } from '../constants';

const MobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`md:hidden fixed bottom-0 left-0 right-0 p-6 z-[100] transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        isVisible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/90 to-transparent pointer-events-none -z-10"></div>
      
      <a
        href={CTA_URL}
        className="relative w-full flex items-center justify-center bg-cta active:bg-cta-hover text-white font-black text-lg py-5 px-6 rounded-2xl transition-all shadow-[0_10px_30px_rgba(14,110,96,0.4)] border border-white/20 overflow-hidden"
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]"></span>
        <span className="relative flex items-center">
          Agendar avaliação
          <ArrowRight className="ml-2" size={24} strokeWidth={3} />
        </span>
      </a>
    </div>
  );
};

export default MobileCTA;
