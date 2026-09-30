import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CTA_URL } from '../constants';

const FinalCTA = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cta/10 to-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto relative z-10 glass-card bg-primary p-16 md:p-24 border-none shadow-[0_30px_60px_-15px_rgba(25,52,74,0.3)]">
        <h2 className="text-5xl md:text-6xl lg:text-[5rem] font-heading font-black text-white mb-8 tracking-tighter leading-[1]">
          Seu movimento <br className="hidden md:block"/>
          <span className="text-gradient-cta">merece atenção.</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-14 font-sans leading-relaxed max-w-2xl mx-auto font-light">
          Converse com Rodrigo e descubra a estratégia certa para o seu momento atual.
        </p>
        
        <div className="relative inline-block w-full sm:w-auto">
          <div className="absolute -inset-4 bg-cta/20 rounded-full blur-2xl animate-pulse"></div>
          <a
            href={CTA_URL}
            className="relative group flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-bold text-xl py-6 px-12 rounded-full transition-all duration-500 shadow-[0_10px_40px_rgba(14,110,96,0.4)] hover:shadow-[0_20px_60px_rgba(14,110,96,0.6)] hover:-translate-y-1 w-full"
          >
            <MessageCircle className="mr-4 group-hover:scale-110 transition-transform duration-300" size={32} />
            Agende sua avaliação
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
