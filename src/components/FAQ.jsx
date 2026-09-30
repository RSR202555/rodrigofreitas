import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData } from '../data/faq';

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-cta font-bold tracking-widest text-xs uppercase mb-6 block">
            Dúvidas
          </span>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-dark tracking-tight">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-6">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className={`glass-card bg-white transition-all duration-500 ${
                openId === item.id 
                  ? 'border-cta/50 shadow-[0_10px_40px_rgba(14,110,96,0.1)]' 
                  : 'border-white/10 hover:border-cta/20 shadow-sm'
              }`}
            >
              <button
                className="w-full px-8 py-8 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(item.id)}
                aria-expanded={openId === item.id}
              >
                <span className={`font-heading font-bold text-xl pr-8 transition-colors duration-300 ${
                  openId === item.id ? 'text-dark' : 'text-primary'
                }`}>
                  {item.question}
                </span>
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 bg-gray-50 border border-gray-100 ${
                  openId === item.id ? 'bg-cta text-white border-transparent' : 'text-cta'
                }`}>
                  <ChevronDown 
                    className={`transform transition-transform duration-500 ${
                      openId === item.id ? 'rotate-180' : ''
                    }`} 
                    size={24} 
                    strokeWidth={2.5}
                  />
                </div>
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                  openId === item.id ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-secondary font-sans leading-relaxed text-lg pt-6 border-t border-gray-100 font-normal">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
