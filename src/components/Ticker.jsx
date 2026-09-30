import React from 'react';

const Ticker = () => {
  const words = [
    "Recuperação",
    "Força",
    "Mobilidade",
    "Qualidade de Vida",
    "Confiança",
    "Segurança",
    "Longevidade",
    "Movimento"
  ];

  const tickerItems = [...words, ...words, ...words];

  return (
    <div className="bg-primary/5 py-6 overflow-hidden flex whitespace-nowrap relative border-y border-primary/10">
      <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#F7F5F0] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#F7F5F0] to-transparent z-10"></div>

      <div className="flex animate-[ticker_40s_linear_infinite]">
        {tickerItems.map((word, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-primary/70 font-heading font-bold uppercase tracking-widest text-sm md:text-base">
              {word}
            </span>
            <span className="mx-8 text-primary/30">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
