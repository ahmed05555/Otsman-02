
import React from 'react';
import { ViewType } from '../types';

interface ActionButtonsProps {
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onNavigate, currentView }) => {
  const btnClass = "w-full bg-gradient-to-b from-[#D4AF37] to-[#AA8030] text-[#051321] font-serif font-bold uppercase py-4 px-6 rounded-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_4px_6px_rgba(0,0,0,0.3)] border border-[#F9E2AE]/50 hover:brightness-110 active:scale-[0.98] transition-all text-xs md:text-sm tracking-widest leading-tight text-center";

  return (
    <div className="lg:col-span-1 flex flex-col pt-12 lg:pt-32 gap-6">
      <button 
        onClick={() => onNavigate(ViewType.BIOGRAPHY)}
        className={`${btnClass} ${currentView === ViewType.BIOGRAPHY ? 'ring-2 ring-white ring-offset-2 ring-offset-museum-navy' : ''}`}
      >
        Biography
      </button>
      <button 
        onClick={() => onNavigate(ViewType.WORKS)}
        className={`${btnClass} ${currentView === ViewType.WORKS ? 'ring-2 ring-white ring-offset-2 ring-offset-museum-navy' : ''}`}
      >
        The Artist's Most<br/>Important Works
      </button>
      <button 
        onClick={() => onNavigate(ViewType.AWARDS)}
        className={`${btnClass} ${currentView === ViewType.AWARDS ? 'ring-2 ring-white ring-offset-2 ring-offset-museum-navy' : ''}`}
      >
        Awards
      </button>
    </div>
  );
};

export default ActionButtons;
