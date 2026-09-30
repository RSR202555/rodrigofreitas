import React from 'react';
import { ArrowRight } from 'lucide-react';
import VideoPlaceholder from './VideoPlaceholder';
import { CTA_URL } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center pt-48 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fundo suave animado */}
      <div className="absolute inset-0 mesh-bg -z-20"></div>
      
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">
        
        {/* Lado Esquerdo - Copy */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel mb-8 animate-[slide-up_0.8s_ease-out]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cta"></span>
            </span>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
              Método Rodrigo Freitas
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-heading font-black text-dark leading-[0.95] mb-8 animate-[slide-up_1s_ease-out]">
            Movimento.<br />
            Sem<span className="text-gradient-cta"> Limitações.</span>
          </h1>
          
          <p className="text-secondary text-lg sm:text-xl md:text-2xl max-w-xl mb-12 font-sans font-normal leading-relaxed animate-[slide-up_1.2s_ease-out]">
            Recupere sua força, confiança e qualidade de vida através de um treinamento inteligente e 100% individualizado.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6 animate-[slide-up_1.4s_ease-out] w-full">
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
                  <img src="https://i.pravatar.cc/100?img=1" alt="Aluno" className="w-10 h-10 rounded-full border-2 border-[#FCFBFA] object-cover" />
                  <img src="https://i.pravatar.cc/100?img=2" alt="Aluna" className="w-10 h-10 rounded-full border-2 border-[#FCFBFA] object-cover" />
                  <div className="w-10 h-10 rounded-full border-2 border-[#FCFBFA] bg-primary flex items-center justify-center text-xs font-bold text-white">+</div>
               </div>
               <div>
                 <p className="text-primary font-bold text-sm">Centenas de alunos</p>
                 <p className="text-secondary text-xs">vidas transformadas</p>
               </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Vídeo Flutuante */}
        <div className="w-full lg:w-1/2 relative animate-[slide-up_1.6s_ease-out]">
          <div className="absolute -inset-4 bg-gradient-to-tr from-cta/20 to-primary/10 rounded-[3rem] blur-2xl opacity-60"></div>
          <div className="relative rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out">
            <VideoPlaceholder />
            
            {/* Decorações flutuantes mais suaves */}
            <div className="absolute -bottom-8 -left-8 glass-panel p-4 rounded-3xl flex items-center gap-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] animate-[slide-up_2s_ease-out_infinite_alternate]">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                 <span className="text-green-600 text-xl font-bold">✓</span>
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
