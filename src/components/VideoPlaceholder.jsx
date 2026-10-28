import React from 'react';
import { Play, Sparkles, Volume2 } from 'lucide-react';

const VideoPlaceholder = () => {
  return (
    <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden group cursor-pointer border-4 border-white shadow-[0_30px_60px_-15px_rgba(14,23,32,0.22)] z-10 isolate bg-dark">
      {/* Imagem de fundo sutil com overlay escuro elegante */}
      <img
        src="/TELA PRINCIPAL 01.png"
        alt="Prévia do Método Rodrigo Freitas"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-30 scale-105 group-hover:scale-110 transition-transform duration-700 blur-[1px]"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-dark via-primary/85 to-cta/40"></div>

      {/* Topo do Player - Badge */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-wider uppercase">
          <Sparkles size={14} className="text-cta" />
          Apresentação do Método
        </div>
        <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium flex items-center gap-1.5">
          <Volume2 size={14} className="text-cta" />
          <span>Áudio disponível</span>
        </div>
      </div>
      
      {/* Centro - Botão Play e Chamada */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-20">
        <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out">
          <div className="absolute inset-0 bg-cta rounded-full animate-ping opacity-40 group-hover:opacity-60"></div>
          <div className="absolute -inset-6 bg-cta/25 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-700 blur-md"></div>
          
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(14,110,96,0.4)] border border-white/30 transition-all duration-500">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cta group-hover:bg-cta-hover rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
               <Play size={28} className="ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        <h3 className="text-white font-heading font-bold text-xl sm:text-2xl mb-2 tracking-tight">
          Veja como funciona o acompanhamento na prática
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold opacity-90">
          Clique para assistir ao vídeo
        </p>
      </div>

      {/* Barra inferior estilo player */}
      <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
          <div className="bg-cta w-1/3 h-full rounded-full"></div>
        </div>
        <span className="text-white/80 text-xs font-mono shrink-0">02:15</span>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
