
import React from 'react';
import { IMAGES } from '../constants';

const BiographySidebar: React.FC = () => {
  return (
    <aside className="lg:col-span-1 flex flex-col space-y-6">
      <div className="w-full border-b border-museum-gold/50 pb-2 mb-2">
        <h2 className="text-museum-gold text-xl font-serif tracking-widest uppercase">BIOGRAPHY</h2>
      </div>
      
      <div className="relative w-[150px] h-[150px] mx-auto shrink-0">
        <div className="absolute inset-0 bg-museum-gold/20 blur-md rounded-full -m-2"></div>
        <img 
          alt="Ahmed Osman Portrait" 
          className="relative z-10 w-full h-full object-cover rounded-full border-[4px] border-museum-gold shadow-lg" 
          src={IMAGES.PORTRAIT} 
        />
      </div>

      <div className="text-[#E5E7EB] text-[13px] leading-[1.6] text-justify-last-left font-light space-y-4">
        <p>
          Ahmed Osman was a pivotal figure in modern Egyptian art. As a graduate and later a prominent member of Alexandria University, he dedicated his life to bridging the gap between ancient heritage and contemporary expression.
        </p>
        <p>
          Educated at the Faculty of Fine Arts, his journey led him to master the medium of bronze, a material he used to breathe life into the spirit of his native Alexandria. His academic career at the university was marked by a deep commitment to teaching, influencing generations of young artists.
        </p>
        <p>
          His work is often seen as a testament to his profound connection with the soul of the Mediterranean city, capturing the elegance and resilience of its people in timeless forms that echo both pharaonic grandeur and modern realism.
        </p>
        <p>
          Osman remains one of the most revered sculptors of the 20th century, whose legacy continues to inspire through his public monuments and museum collections.
        </p>
      </div>
    </aside>
  );
};

export default BiographySidebar;
