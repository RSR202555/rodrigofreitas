import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { CTA_URL } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100svh-4.5rem)] flex flex-col justify-center pt-28 lg:pt-32 pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden isolate">
      {/* Fundo suave animado */}
      <div className="absolute inset-0 mesh-bg -z-10"></div>
      <div className="absolute top-24 -left-24 w-96 h-96 bg-cta/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-10 -right-24 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10">
        
        {/* Lado Esquerdo - Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel mb-6 animate-[slide-up_0.8s_ease-out]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cta"></span>
            </span>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
              Método Rodrigo Freitas
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-[5.25rem] font-heading font-black text-dark leading-[0.95] mb-6 animate-[slide-up_1s_ease-out]">
            Movimento.<br />
            Sem<span className="text-gradient-cta"> Limitações.</span>
          </h1>
          
          <p className="text-secondary text-lg sm:text-xl md:text-2xl max-w-xl mb-10 font-sans font-normal leading-relaxed animate-[slide-up_1.2s_ease-out]">
            Recupere sua força, confiança e qualidade de vida através de um treinamento inteligente e 100% individualizado.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-[slide-up_1.4s_ease-out] w-full">
            <a
              href={CTA_URL}
              className="group relative inline-flex items-center justify-center bg-cta text-white font-bold text-lg py-5 px-10 rounded-full transition-all duration-500 hover:bg-cta-hover overflow-hidden shadow-[0_15px_30px_-10px_rgba(14,110,96,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(14,110,96,0.7)] w-full sm:w-auto"
            >
              <span className="absolute inset-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></span>
              <span className="relative flex items-center">
                Iniciar Avaliação
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={22} strokeWidth={2.5} />
              </span>
            </a>
            
            <div className="flex items-center gap-4 text-left">
               <div className="flex -space-x-3">
                  <img src="https://i.pravatar.cc/100?img=1" alt="Aluno" className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Aluna" className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover" />
                  <div className="w-11 h-11 rounded-full border-2 border-white shadow-sm bg-primary flex items-center justify-center text-xs font-bold text-white">+</div>
               </div>
               <div>
                 <div className="flex items-center gap-1 text-amber-500 text-xs mb-0.5">
                   <span>★★★★★</span>
                 </div>
                 <p className="text-primary font-bold text-sm leading-tight">Centenas de alunos</p>
                 <p className="text-secondary text-xs">vidas transformadas</p>
               </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem Flutuante */}
        <div className="w-full lg:w-1/2 relative animate-[slide-up_1.6s_ease-out] max-w-lg mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-gradient-to-tr from-cta/25 to-primary/15 rounded-[3rem] blur-2xl opacity-70"></div>
          <div className="relative rotate-[-1.5deg] hover:rotate-0 transition-transform duration-700 ease-out">
            
            {/* Badge Superior Direito */}
            <div className="absolute -top-5 -right-3 sm:-right-6 z-20 glass-panel px-4 py-3 rounded-2xl flex items-center gap-3 shadow-[0_12px_35px_rgba(14,23,32,0.1)] border border-white/80">
              <div className="w-10 h-10 rounded-xl bg-cta/15 flex items-center justify-center text-cta">
                <ShieldCheck size={22} strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-dark font-bold text-xs sm:text-sm leading-tight">100% Individualizado</p>
                <p className="text-secondary text-[11px]">Treino adaptado a você</p>
              </div>
            </div>

            <div className="relative w-full h-[460px] sm:h-[520px] lg:h-[560px] rounded-[2.5rem] overflow-hidden border-4 border-white shadow-[0_30px_60px_-15px_rgba(25,52,74,0.22)] z-10 isolate">
              <img
                src="/TELA PRINCIPAL 01.png"
                alt="Rodrigo Freitas acompanhando treino personalizado"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Badge Inferior Esquerdo */}
            <div className="absolute -bottom-6 -left-3 sm:-left-6 z-20 glass-panel p-4 rounded-3xl flex items-center gap-4 shadow-[0_12px_40px_rgba(14,23,32,0.1)] border border-white/80 animate-[slide-up_2s_ease-out_infinite_alternate]">
              <div className="w-12 h-12 rounded-2xl bg-cta text-white flex items-center justify-center shadow-md shadow-cta/30">
                 <span className="text-xl font-bold">✓</span>
              </div>
              <div>
                <p className="text-dark font-bold text-sm">Mobilidade +80%</p>
                <p className="text-secondary text-xs">Média em 3 meses</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
