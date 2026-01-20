
import React from 'react';
import { ARTWORKS } from '../constants';

const WorksView: React.FC = () => {
  return (
    <div className="w-full space-y-12 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-museum-gold tracking-widest uppercase mb-4">The Artist's Masterpieces</h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-light">Explore the detailed records of Ahmed Osman's most significant contributions to modern Egyptian sculpture.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ARTWORKS.map(work => (
          <div key={work.id} className="group bg-black/40 border border-museum-gold/20 rounded-sm overflow-hidden hover:border-museum-gold/50 transition-all duration-500">
            <div className="aspect-[3/4] overflow-hidden bg-museum-navy/50 relative">
              <img 
                src={work.imageUrl} 
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] text-museum-gold tracking-widest font-serif">{work.year}</span>
                <h3 className="text-lg text-white font-serif tracking-wide">{work.title}</h3>
              </div>
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-300 leading-relaxed font-light line-clamp-3">
                {work.description}
              </p>
              <button className="mt-4 text-museum-gold hover:text-white transition-colors text-[10px] tracking-widest uppercase border-b border-museum-gold/40 pb-1">
                View Archive Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorksView;
