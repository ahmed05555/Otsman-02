
import React from 'react';

const HighlightQuote: React.FC = () => {
  return (
    <section className="w-full mt-12 mb-16">
      <div className="container mx-auto px-6">
        <div className="relative bg-gradient-to-r from-[#D4AF37] via-[#AA8030] to-[#D4AF37] rounded-sm p-10 md:p-12 ml-0 md:ml-12 shadow-2xl border border-[#F9E2AE]/30 max-w-5xl mx-auto">
          <div className="absolute -top-12 -left-4 md:-left-12 text-[180px] text-[#F9E2AE] drop-shadow-lg font-serif leading-none select-none opacity-40 pointer-events-none">
            “
          </div>
          <div className="relative z-10 pl-4 md:pl-8">
            <h4 className="font-bold tracking-[0.2em] text-xs md:text-sm mb-4 uppercase font-serif text-black border-l-2 border-black pl-3">
              HIGHLIGHT:
            </h4>
            <p className="font-serif text-xl md:text-3xl font-bold leading-relaxed italic text-black">
              "Banat Bahri stands as a testament to Osman's profound connection with the soul of Alexandria, capturing the elegance and strength of its women in timeless bronze."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightQuote;
