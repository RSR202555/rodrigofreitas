import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Metodologia', href: '#como-funciona' },
    { name: 'O Profissional', href: '#sobre' },
    { name: 'Investimento', href: '#planos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'glass-panel border-x-0 border-t-0 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-2">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center">
              <img src="/logo.jpeg" alt="Alivia Dor" className="h-16 sm:h-20 w-auto mix-blend-darken" />
            </a>
          </div>

          <nav className="hidden lg:flex items-center space-x-10 glass-panel px-8 py-3 rounded-full border border-white/40 bg-white/40">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-secondary hover:text-primary font-semibold text-xs uppercase tracking-widest transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <a
              href="#planos"
              className="bg-primary hover:bg-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_8px_20px_rgba(25,52,74,0.15)] hover:shadow-[0_12px_25px_rgba(25,52,74,0.25)] hover:-translate-y-0.5 text-xs uppercase tracking-wider"
            >
              Avaliação
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 focus:outline-none bg-white/50 rounded-lg"
            >
              {isOpen ? <X size={28} strokeWidth={2} /> : <Menu size={28} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute w-full glass-panel border-b border-white/50 transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-8 flex flex-col items-center justify-center space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-heading font-bold text-secondary hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#planos"
            onClick={() => setIsOpen(false)}
            className="w-full text-center mt-4 bg-cta text-white font-bold py-4 px-6 rounded-full"
          >
            Agendar avaliação
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
