import React from 'react';
import { Play } from 'lucide-react';

const VideoPlaceholder = () => {
  return (
    <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/40 shadow-[0_30px_60px_-15px_rgba(25,52,74,0.15)] z-10 isolate">
      {/* Background do placeholder mais suave */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary to-dark opacity-90"></div>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 bg-dark/20 group-hover:bg-transparent backdrop-blur-[2px] group-hover:backdrop-blur-none">
        
        <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500 ease-out">
          <div className="absolute inset-0 bg-cta rounded-full animate-ping opacity-40 group-hover:opacity-60"></div>
          <div className="absolute -inset-6 bg-cta/20 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-700 blur-md"></div>
          
          <div className="relative w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(14,110,96,0.3)] border border-white/30 transition-all duration-500">
            <div className="w-16 h-16 bg-cta rounded-full flex items-center justify-center text-white shadow-lg">
               <Play size={28} className="ml-1" fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="overflow-hidden">
           <p className="text-white font-medium text-xs tracking-[0.3em] uppercase opacity-90 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             Assistir Trailer
           </p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlaceholder;
