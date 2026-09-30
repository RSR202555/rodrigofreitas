import React from 'react';
import { CTA_URL } from '../constants';

const Pricing = () => {
  const plans = [
    {
      id: "mensal",
      name: "MENSAL",
      price: "R$ 297",
      period: "/mês",
      description: "Para começar seu acompanhamento.",
      features: [
        "Avaliação inicial",
        "Treino personalizado",
        "Acompanhamento individual",
        "Ajustes do treino"
      ],
      highlighted: false
    },
    {
      id: "trimestral",
      name: "TRIMESTRAL",
      badge: "MAIS ESCOLHIDO",
      price: "R$ 797",
      period: " / 3 meses",
      description: "Mais tempo para construir consistência.",
      features: [
        "Avaliação inicial completa",
        "Treino personalizado",
        "Acompanhamento individual",
        "Ajustes periódicos",
        "Orientação na evolução",
        "Acompanhamento de resultados"
      ],
      highlighted: true
    },
    {
      id: "semestral",
      name: "SEMESTRAL",
      price: "R$ 1.497",
      period: " / 6 meses",
      description: "Para quem busca mudança consistente.",
      features: [
        "Avaliação inicial",
        "Treino personalizado",
        "Acompanhamento individual",
        "Ajustes periódicos",
        "Acompanhamento de resultados"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="planos" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[800px] bg-white/40 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-cta font-bold tracking-widest text-xs uppercase mb-6 block">
            Investimento
          </span>
          <h2 className="text-5xl lg:text-7xl font-heading font-black text-dark mb-8 tracking-tight">
            Invista no seu <span className="text-gradient-cta">movimento.</span>
          </h2>
          <p className="text-xl text-secondary font-sans font-normal">
            Escolha o período que melhor se encaixa na sua rotina.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative rounded-[2.5rem] p-10 flex flex-col h-full transition-all duration-500 ${
                plan.highlighted 
                  ? 'glass-card border-white shadow-[0_20px_60px_rgba(25,52,74,0.1)] lg:-translate-y-4 lg:scale-105 z-20 bg-white' 
                  : 'glass-card border-white/50 opacity-90 hover:opacity-100 hover:-translate-y-2'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full text-center">
                  <span className="bg-cta text-white text-xs font-bold px-6 py-2.5 rounded-full uppercase tracking-widest shadow-[0_10px_20px_rgba(14,110,96,0.3)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-10 pb-10 border-b border-gray-100">
                <h3 className={`text-xs font-bold mb-6 tracking-widest uppercase ${
                  plan.highlighted ? 'text-cta' : 'text-secondary'
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl md:text-6xl font-heading font-black tracking-tighter text-primary">
                    {plan.price}
                  </span>
                </div>
                <span className={`block mt-2 font-medium ${
                    plan.highlighted ? 'text-secondary' : 'text-gray-400'
                }`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-4 ${
                      plan.highlighted ? 'bg-cta/10 text-cta' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <span className="font-bold text-xs">✓</span>
                    </span>
                    <span className={`font-normal text-lg ${
                      plan.highlighted ? 'text-dark' : 'text-secondary'
                    }`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CTA_URL}
                className={`w-full text-center font-bold py-5 px-8 rounded-full transition-all duration-500 ${
                  plan.highlighted
                    ? 'bg-cta hover:bg-cta-hover text-white shadow-[0_10px_30px_rgba(14,110,96,0.3)] hover:shadow-[0_15px_40px_rgba(14,110,96,0.5)] hover:-translate-y-1'
                    : 'bg-white hover:bg-primary text-primary hover:text-white border border-gray-200 shadow-sm'
                }`}
              >
                Selecionar Plano
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
