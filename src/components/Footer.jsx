import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="mb-12">
          <a href="#" className="flex items-center justify-center">
            <img src="/logo.jpeg" alt="Alivia Dor" className="h-32 sm:h-40 w-auto mix-blend-darken" />
          </a>
        </div>
        
        <div className="flex space-x-12 mb-16">
          <a href="#" className="text-secondary hover:text-primary font-bold tracking-widest uppercase text-sm transition-colors relative group">
            Instagram
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-secondary hover:text-primary font-bold tracking-widest uppercase text-sm transition-colors relative group">
            WhatsApp
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-10"></div>

        <p className="text-secondary text-sm text-center font-normal tracking-wide">
          © 2026 Alivia Dor. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
