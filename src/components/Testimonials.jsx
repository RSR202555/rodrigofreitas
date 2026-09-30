import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      text: "Eu sentia dores na lombar há anos e achava que nunca mais poderia treinar. O Rodrigo adaptou tudo pra mim. Hoje brinco com meus netos sem medo.",
      author: "Maria S.",
      age: "62 anos",
      rating: 5
    },
    {
      id: 2,
      text: "O grande diferencial é o cuidado. Não é um treino de academia padrão, é algo realmente pensado para o meu corpo e as minhas limitações.",
      author: "Carlos E.",
      age: "55 anos",
      rating: 5
    },
    {
      id: 3,
      text: "Recuperei a força no joelho depois da cirurgia. O acompanhamento me deu a segurança que eu precisava para voltar à minha rotina normal.",
      author: "Ana T.",
      age: "48 anos",
      rating: 5
    },
    {
      id: 4,
      text: "Achei que estava velho demais para começar, mas a metodologia respeita o nosso ritmo. Sinto que rejuvenesci uns 10 anos em disposição.",
      author: "Roberto F.",
      age: "68 anos",
      rating: 5
    }
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-cta/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-cta font-bold tracking-widest text-xs uppercase mb-6 block">
              Depoimentos
            </span>
            <h2 className="text-5xl md:text-6xl font-heading font-black text-dark tracking-tight leading-[1.1]">
              Histórias reais de <br className="hidden md:block"/> quem voltou a viver bem.
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {testimonials.map((item) => (
            <div 
              key={item.id}
              className="min-w-[320px] md:min-w-[420px] glass-card bg-white/80 p-10 snap-center relative group hover:border-cta/30 transition-colors duration-500"
            >
              <Quote className="absolute top-8 right-8 text-primary/5 w-24 h-24 -z-10 group-hover:scale-110 transition-transform duration-500" />
              
              <div className="flex gap-1.5 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-cta text-cta" />
                ))}
              </div>
              
              <p className="text-secondary font-sans leading-relaxed text-lg mb-10 italic font-normal relative z-10">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-5 mt-auto pt-8 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-cta/10 flex items-center justify-center font-heading font-bold text-cta text-xl">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-primary tracking-wide">{item.author}</p>
                  <p className="text-sm text-gray-400 font-normal">{item.age}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
