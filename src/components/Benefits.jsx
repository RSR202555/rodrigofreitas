import React from 'react';
import { Target, ShieldCheck, Activity, UserCheck, Flame, CheckCircle2 } from 'lucide-react';
import VideoPlaceholder from './VideoPlaceholder';

const Benefits = () => {
  const steps = [
    { num: '01', title: 'Avaliação Individual', desc: 'Análise do seu histórico, rotina e limitações atuais' },
    { num: '02', title: 'Planejamento Sob Medida', desc: 'Exercícios selecionados para a realidade do seu corpo' },
    { num: '03', title: 'Evolução Progressiva', desc: 'Ganho de força, confiança e alívio com segurança' },
  ];

  return (
    <section id="como-funciona" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-main">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta/10 text-cta font-bold tracking-widest text-xs uppercase mb-6">
            A Metodologia
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-dark mb-6 tracking-tight leading-[1.05]">
            Não existe treino igual<br /> para <span className="text-gradient-cta">todo mundo.</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary font-sans leading-relaxed font-normal max-w-2xl mx-auto">
            Seu treinamento deve considerar sua história, seu momento atual e aquilo que você deseja conquistar.
          </p>
        </div>

        {/* Vídeo em Destaque na Segunda Tela + 3 Etapas */}
        <div className="max-w-5xl mx-auto mb-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-cta/20 to-primary/10 rounded-[3rem] blur-2xl opacity-60 -z-10"></div>
          <VideoPlaceholder />

          {/* Barra das 3 Etapas abaixo do vídeo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="bg-white/80 backdrop-blur-md border border-gray-200/80 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:border-cta/40 transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-cta/10 text-cta font-heading font-black text-sm flex items-center justify-center shrink-0">
                  {step.num}
                </span>
                <div>
                  <h4 className="font-heading font-bold text-dark text-base mb-1">{step.title}</h4>
                  <p className="text-secondary text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bento Grid Moderno */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto">
          
          {/* Card 1: Destaque Principal (Largo) */}
          <div className="md:col-span-2 md:row-span-1 rounded-[2.5rem] bg-white border border-gray-200 p-8 sm:p-10 relative overflow-hidden group hover:border-cta/30 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(14,23,32,0.05)]">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-cta/5 to-transparent rounded-full blur-3xl -z-10 group-hover:from-cta/10 transition-colors duration-700"></div>
            
            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center h-full z-10">
              <div className="flex-1">
                <div className="w-14 h-14 bg-cta/10 border border-cta/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cta transition-all duration-500">
                  <Target size={28} className="text-cta group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-dark mb-3">Treino Personalizado</h3>
                <p className="text-secondary font-sans leading-relaxed text-base sm:text-lg">
                  Exercícios escolhidos meticulosamente de acordo com seu nível, histórico de lesões, objetivos e necessidades individuais.
                </p>
              </div>
              
              {/* Indicadores Visuais com Legendas Reais */}
              <div className="w-full lg:w-64 shrink-0 bg-[#FCFBFA] rounded-2xl p-5 border border-gray-100 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider">Evolução dos Alunos</span>
                  <Activity size={16} className="text-cta" />
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-dark mb-1">
                    <span>Alívio de Dores</span>
                    <span className="text-cta">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cta h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-dark mb-1">
                    <span>Mobilidade e Postura</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-semibold text-dark mb-1">
                    <span>Confiança no Movimento</span>
                    <span className="text-cta">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-cta h-2 rounded-full w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Contraste Escuro (Navy) */}
          <div className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-dark border border-dark p-8 sm:p-10 relative overflow-hidden group hover:-translate-y-1.5 transition-transform duration-500 shadow-xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={180} className="text-white transform rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                <ShieldCheck size={28} className="text-cta" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white mb-3">Segurança Total</h3>
                <p className="text-gray-300 font-sans leading-relaxed text-sm mb-6">
                  Evolua respeitando seus limites e os sinais do seu corpo, sem pular etapas cruciais da recuperação.
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-cta uppercase tracking-wider">
                  <CheckCircle2 size={15} />
                  Zero treinos genéricos
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Menor e focado com tags */}
          <div className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-white border border-gray-200 p-8 sm:p-10 group hover:-translate-y-1.5 transition-all duration-500 shadow-[0_10px_40px_-15px_rgba(14,23,32,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(14,23,32,0.1)] flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-primary/10 border border-primary/15 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                <UserCheck size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-dark mb-3">Entenda Seu Corpo</h3>
              <p className="text-secondary font-sans leading-relaxed text-sm mb-6">
                Identificamos os fatores reais que limitam seus movimentos e causam sobrecarga no dia a dia.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Coluna', 'Ombros', 'Quadril', 'Joelhos', 'Postura'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-primary text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: CTA Secundário / Destaque Largo */}
          <div className="md:col-span-2 md:row-span-1 rounded-[2.5rem] bg-primary border border-primary p-8 sm:p-10 relative overflow-hidden group transition-all duration-500 shadow-xl">
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cta/20 rounded-full blur-3xl group-hover:bg-cta/30 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex w-14 h-14 bg-white/10 rounded-2xl items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
                  <Flame size={28} className="text-cta" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">Força, Mobilidade e Autonomia</h3>
                <p className="text-gray-300 font-sans leading-relaxed text-base sm:text-lg max-w-md mb-6">
                  Construa uma base física sólida para realizar as atividades do cotidiano com vitalidade e independência.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-semibold text-white/90">
                  <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-cta" /> Respeito ao seu ritmo</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 size={15} className="text-cta" /> Mais qualidade de vida</span>
                </div>
              </div>
              
              <div className="shrink-0">
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-cta rounded-full border-t-transparent border-l-transparent transform rotate-45 group-hover:rotate-[225deg] transition-all duration-1000 ease-out"></div>
                  <div className="text-center">
                    <span className="block text-3xl font-black font-heading text-white">+80%</span>
                    <span className="text-[10px] text-gray-300 uppercase tracking-widest">Mobilidade</span>
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
