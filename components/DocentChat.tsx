
import React, { useState, useRef, useEffect } from 'react';
import { askMuseumDocent } from '../geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ title: string; uri: string }>;
}

const DocentChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'assistant', 
      content: "Welcome to the Faculty of Fine Arts Museum. I am your docent. I can now browse global archives to answer complex questions about the life, vision, and masterpieces of Ahmed Osman. What would you like to explore together?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const { text, sources } = await askMuseumDocent(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: text, sources }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col h-[70vh] border border-museum-gold/30 rounded-sm overflow-hidden bg-black/40 backdrop-blur-sm">
      <div className="bg-museum-gold/10 p-4 border-b border-museum-gold/20 flex items-center justify-between">
        <h3 className="font-serif text-museum-gold tracking-widest text-sm uppercase">Museum Docent AI</h3>
        <div className="flex gap-4 items-center">
           <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-green-500'}`}></div>
            <span className="text-[10px] text-gray-400 tracking-tighter uppercase">{isLoading ? 'Searching...' : 'Archive Connected'}</span>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-sm font-light text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-museum-gold/20 text-white border-r-2 border-museum-gold' 
                : 'bg-black/60 text-gray-200 border-l-2 border-museum-gold-light'
            }`}>
              {msg.content}
              
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-[10px] font-serif text-museum-gold tracking-widest uppercase block mb-2">Sources Found:</span>
                  <ul className="space-y-1">
                    {msg.sources.map((source, sIdx) => (
                      <li key={sIdx}>
                        <a 
                          href={source.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[11px] text-museum-gold-light hover:text-white transition-colors flex items-center gap-2 group"
                        >
                          <span className="w-1 h-1 bg-museum-gold rounded-full group-hover:scale-125 transition-transform"></span>
                          <span className="underline decoration-museum-gold/30">{source.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-black/60 p-4 rounded-sm border-l-2 border-museum-gold-light flex flex-col gap-2">
              <span className="text-[10px] text-museum-gold tracking-widest font-serif uppercase mb-1">Retrieving Records...</span>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-museum-gold rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-museum-gold rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-museum-gold rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-museum-navy border-t border-museum-gold/20">
        <div className="relative flex items-center">
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Ahmed Osman's exhibitions or life (Archive Search enabled)..."
            className="w-full bg-black/50 border border-museum-gold/30 p-4 pr-16 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-museum-gold/60 transition-colors"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 px-4 py-2 bg-museum-gold text-museum-navy text-xs font-bold uppercase tracking-widest hover:brightness-110 disabled:opacity-50 transition-all shadow-md"
          >
            {isLoading ? '...' : 'SEND'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocentChat;
