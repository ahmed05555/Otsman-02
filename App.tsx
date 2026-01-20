
import React, { useState } from 'react';
import { ViewType } from './types';
import Header from './components/Header';
import BiographySidebar from './components/BiographySidebar';
import MainShowcase from './components/MainShowcase';
import ActionButtons from './components/ActionButtons';
import HighlightQuote from './components/HighlightQuote';
import WorksView from './components/WorksView';
import AwardsView from './components/AwardsView';
import DocentChat from './components/DocentChat';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.BIOGRAPHY);

  const renderContent = () => {
    switch (currentView) {
      case ViewType.BIOGRAPHY:
        return (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
              <BiographySidebar />
              <MainShowcase />
              <ActionButtons onNavigate={setCurrentView} currentView={currentView} />
            </div>
            <HighlightQuote />
          </>
        );
      case ViewType.WORKS:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
            <WorksView />
          </div>
        );
      case ViewType.AWARDS:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
            <AwardsView />
          </div>
        );
      case ViewType.CHAT:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-12">
            <DocentChat />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <main className="flex-grow container mx-auto px-6 py-12 relative">
        {renderContent()}
      </main>

      <footer className="bg-black/30 border-t border-museum-gold/20 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest">
          <p>© 2023 Faculty of Fine Arts Museum, Alexandria University. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-museum-gold transition-colors">Digital Archive</a>
            <a href="#" className="hover:text-museum-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-museum-gold transition-colors">Curatorial Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
