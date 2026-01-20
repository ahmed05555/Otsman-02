
import React from 'react';
import { ARTIST_NAME, MAIN_WORK_TITLE, IMAGES } from '../constants';

const MainShowcase: React.FC = () => {
  return (
    <section className="lg:col-span-2 flex flex-col items-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl text-museum-gold font-serif font-bold mb-1 tracking-wider drop-shadow-lg">
          {ARTIST_NAME}
        </h1>
        <h3 className="text-2xl lg:text-3xl text-museum-gold-light font-serif tracking-[0.2em] font-light italic" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
          {MAIN_WORK_TITLE}
        </h3>
      </div>

      <div className="relative w-full group flex justify-center perspective-1000">
        <div className="absolute inset-0 bg-museum-gold/10 blur-3xl rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
        <img 
          alt={`${MAIN_WORK_TITLE} Sculpture`} 
          className="relative z-10 max-w-full h-auto max-h-[550px] object-contain drop-shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]" 
          src={IMAGES.MAIN_SCULPTURE} 
        />
      </div>
    </section>
  );
};

export default MainShowcase;
