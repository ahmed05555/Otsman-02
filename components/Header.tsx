
import React from 'react';
import { IMAGES } from '../constants';
import { ViewType } from '../types';

interface HeaderProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="w-full border-b border-museum-gold/30 bg-museum-navy/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div 
          className="flex items-center gap-4 cursor-pointer" 
          onClick={() => onNavigate(ViewType.BIOGRAPHY)}
        >
          <img alt="Faculty of Fine Arts Logo" className="h-16 w-auto object-contain" src={IMAGES.LOGO} />
          <div className="border-l border-museum-gold pl-3">
            <h2 className="text-museum-gold font-serif text-[10px] md:text-xs tracking-[0.15em] leading-tight uppercase">
              ALEXANDRIA UNIVERSITY<br/>
              <span className="text-white/90">FACULTY OF FINE ARTS</span> MUSEUM
            </h2>
          </div>
        </div>
        
        <nav>
          <ul className="flex gap-4 md:gap-8 text-xs md:text-sm tracking-wider font-light items-center">
            <li>
              <button 
                onClick={() => onNavigate(ViewType.BIOGRAPHY)}
                className={`hover:text-museum-gold transition-colors duration-300 uppercase ${currentView === ViewType.BIOGRAPHY ? 'text-museum-gold border-b border-museum-gold' : ''}`}
              >
                HOME
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate(ViewType.CHAT)}
                className={`hover:text-museum-gold transition-colors duration-300 uppercase ${currentView === ViewType.CHAT ? 'text-museum-gold border-b border-museum-gold' : ''}`}
              >
                ASK DOCENT
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate(ViewType.WORKS)}
                className={`hover:text-museum-gold transition-colors duration-300 uppercase ${currentView === ViewType.WORKS ? 'text-museum-gold border-b border-museum-gold' : ''}`}
              >
                EXHIBITIONS
              </button>
            </li>
            <li>
              <a className="hover:text-museum-gold transition-colors duration-300 uppercase cursor-not-allowed opacity-50">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
