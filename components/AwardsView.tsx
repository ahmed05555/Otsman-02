
import React from 'react';
import { AWARDS } from '../constants';

const AwardsView: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-12 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-museum-gold tracking-widest uppercase mb-4">Official Honors & Accolades</h2>
        <div className="w-24 h-[1px] bg-museum-gold mx-auto mb-6"></div>
      </div>
      
      <div className="space-y-4">
        {AWARDS.map(award => (
          <div key={award.id} className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 p-6 border-l-2 border-museum-gold bg-white/5 hover:bg-white/10 transition-all">
            <div className="text-2xl font-serif text-museum-gold-light opacity-50 select-none">
              {award.year}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-serif text-white tracking-wide mb-1">{award.title}</h3>
              <p className="text-sm text-museum-gold/70 font-light">{award.institution}</p>
            </div>
            <div className="hidden md:block">
              <div className="w-12 h-12 rounded-full border border-museum-gold/30 flex items-center justify-center">
                <span className="text-museum-gold text-[10px] font-bold">CERT</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 border border-museum-gold/20 rounded-sm bg-museum-gold/5 text-center italic text-gray-400 font-light">
        "His honors were not just a reflection of his skill, but of his service to the arts and his role as a bridge between cultures."
      </div>
    </div>
  );
};

export default AwardsView;
