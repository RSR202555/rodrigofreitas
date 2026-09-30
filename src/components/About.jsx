import React from 'react';
import { ShieldCheck, Users, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <div className="w-full lg:w-5/12 order-2 lg:order-1 relative">
            <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden z-10 border border-white shadow-[0_20px_60px_rgba(14,23,32,0.15)] bg-white">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rodrigo Freitas" className="w-full h-full object-cover" />
            </div>

            <div className="absolute -bottom-8 -left-8 glass-card p-6 flex items-center gap-5 z-20 animate-[slide-up_0.5s_ease-out_0.5s_both]">
              <div className="w-14 h-14 bg-cta/10 rounded-2xl text-cta flex items-center justify-center border border-cta/20">
                <Users size={28} strokeWidth={2} />
              </div>
              <div>
                <p className="font-heading font-black text-3xl text-dark leading-none mb-1">500+</p>
                <p className="text-xs text-secondary font-semibold uppercase tracking-wider">Vidas Transformadas</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <span className="text-cta font-bold tracking-widest text-xs uppercase mb-6 block">
              O Profissional
            </span>
            
            <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading font-black text-dark mb-10 tracking-tight leading-[1]">
              Rodrigo Freitas
            </h2>
            
            <div className="space-y-8 text-xl text-secondary font-sans leading-relaxed mb-14 font-normal">
              <p className="text-2xl text-primary font-bold leading-snug">
                Meu propósito é ajudar você a recuperar a confiança para se movimentar sem limitações.
              </p>
              <p>
                Cada acompanhamento começa entendendo a sua realidade: histórico, rotina, objetivos e nível atual de condicionamento. Não acredito em treinos genéricos, acredito em estratégias adaptadas ao seu corpo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 hover:border-white transition-colors">
                <Clock className="text-cta mb-4" size={28} />
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Seu Ritmo</h4>
                <p className="text-secondary font-normal">Evolução contínua, sem pressa e sem comparações.</p>
              </div>
              <div className="glass-card p-6 hover:border-white transition-colors">
                <Award className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-heading font-bold text-dark mb-2">Metodologia</h4>
                <p className="text-secondary font-normal">Ciência e prática voltadas para resultados reais.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
