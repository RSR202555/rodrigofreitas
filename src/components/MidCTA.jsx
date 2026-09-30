import React from 'react';
import { CTA_URL } from '../constants';
import { MessageCircle } from 'lucide-react';

const MidCTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10 rounded-[2.5rem] bg-dark p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-primary/30 shadow-[0_30px_60px_-15px_rgba(14,23,32,0.4)] overflow-hidden">
        
        {/* Glow Effects no Fundo */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cta/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/80 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="text-center md:text-left flex-1 relative z-10">
          <span className="text-cta font-bold tracking-widest text-xs uppercase mb-4 block">
            Próximo Passo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 tracking-tight leading-[1.1]">
            O primeiro passo começa <br className="hidden lg:block"/>
            <span className="text-gradient-cta">com uma conversa.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-sans font-normal max-w-xl">
            Sem compromisso. Vamos entender a sua rotina, o que limita os seus movimentos hoje e traçar o melhor plano de ação para você.
          </p>
        </div>
        
        <div className="flex-shrink-0 w-full md:w-auto relative z-10">
          <div className="absolute -inset-2 bg-cta/20 rounded-full blur-xl animate-pulse"></div>
          <a
            href={CTA_URL}
            className="group relative flex items-center justify-center bg-white text-dark font-bold text-lg py-5 px-10 rounded-full transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 w-full border border-transparent hover:border-cta"
          >
            <MessageCircle className="mr-3 text-cta group-hover:scale-110 transition-transform duration-300" size={24} />
            Iniciar atendimento
          </a>
        </div>
      </div>
    </section>
  );
};

export default MidCTA;
