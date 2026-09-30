import React from 'react';
import { Target, ShieldCheck, HeartPulse, Activity, UserCheck, Flame } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="como-funciona" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-main">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-cta font-bold tracking-widest text-xs uppercase mb-6 block">
            A Metodologia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-dark mb-8 tracking-tight leading-[1.05]">
            Não existe treino igual<br /> para <span className="text-gradient-cta">todo mundo.</span>
          </h2>
          <p className="text-xl text-secondary font-sans leading-relaxed font-normal max-w-2xl mx-auto">
            Seu treinamento deve considerar sua história, seu momento atual e aquilo que você deseja conquistar.
          </p>
        </div>

        {/* Bento Grid Moderno */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Destaque Principal (Largo) */}
          <div className="md:col-span-2 md:row-span-1 rounded-[2.5rem] bg-white border border-gray-200 p-10 relative overflow-hidden group hover:border-cta/30 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(14,23,32,0.05)]">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-cta/5 to-transparent rounded-full blur-3xl -z-10 group-hover:from-cta/10 transition-colors duration-700"></div>
            
            <div className="flex flex-col md:flex-row gap-10 items-start h-full z-10">
              <div className="flex-1">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-cta group-hover:text-white transition-all duration-500">
                  <Target size={32} className="text-cta group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-dark mb-4">Treino Personalizado</h3>
                <p className="text-secondary font-sans leading-relaxed text-lg">
                  Exercícios escolhidos meticulosamente de acordo com seu nível, histórico de lesões, objetivos e necessidades individuais.
                </p>
              </div>
              
              {/* Elemento Visual Falso (Gráfico/UI) */}
              <div className="hidden md:flex flex-col gap-3 w-48 shrink-0 bg-main/50 rounded-2xl p-5 border border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">Aderência</span>
                  <Activity size={14} className="text-cta" />
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-cta h-2 rounded-full w-[85%]"></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-[60%]"></div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-cta h-2 rounded-full w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Contraste Escuro (Navy) */}
          <div className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-dark border border-dark p-10 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={180} className="text-white transform rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/10">
                <ShieldCheck size={28} className="text-cta" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">Segurança</h3>
                <p className="text-gray-400 font-sans leading-relaxed text-sm">
                  Evolua respeitando seus limites e os sinais do seu corpo, sem pular etapas cruciais.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Menor e focado */}
          <div className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-white border border-gray-200 p-10 group hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(14,23,32,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(14,23,32,0.1)]">
            <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
              <UserCheck size={28} className="text-primary" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-dark mb-3">Seu Corpo</h3>
            <p className="text-secondary font-sans leading-relaxed text-sm">
              Identifique os fatores reais que limitam seus movimentos no dia a dia.
            </p>
          </div>

          {/* Card 4: CTA Secundário / Destaque Largo */}
          <div className="md:col-span-2 md:row-span-1 rounded-[2.5rem] bg-primary border border-primary p-10 relative overflow-hidden group transition-all duration-500 shadow-xl">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cta/20 rounded-full blur-3xl group-hover:bg-cta/30 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 h-full">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex w-14 h-14 bg-white/10 rounded-2xl items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                  <Flame size={28} className="text-cta" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white mb-3">Força e Mobilidade</h3>
                <p className="text-gray-300 font-sans leading-relaxed text-lg max-w-md">
                  Construa uma base física sólida para realizar as atividades do cotidiano com vitalidade e independência.
                </p>
              </div>
              
              <div className="shrink-0">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-cta rounded-full border-t-transparent border-l-transparent transform rotate-45 group-hover:rotate-[225deg] transition-all duration-1000 ease-out"></div>
                  <div className="text-center">
                    <span className="block text-3xl font-black font-heading text-white">+80%</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest">Mobilidade</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;
