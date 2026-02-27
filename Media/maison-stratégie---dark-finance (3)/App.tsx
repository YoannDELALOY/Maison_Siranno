import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full charcoal-texture flex flex-col items-center justify-center p-8 space-y-20">
      
      <div className="max-w-5xl w-full text-center space-y-16">
        
        {/* H1 - Playfair Bold (700) */}
        <div className="space-y-4">
          <p className="text-slate-500 text-xs tracking-[0.3em] uppercase mb-4 font-sans font-medium">Titre H1</p>
          <h1 className="font-serif text-7xl md:text-9xl font-bold tracking-tight gold-texture leading-tight">
            Maison Stratégie
          </h1>
        </div>

        {/* H2 - Playfair Bold (700) */}
        <div className="space-y-4">
          <p className="text-slate-500 text-xs tracking-[0.3em] uppercase mb-4 font-sans font-medium">Titre H2</p>
          <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-wide gold-texture">
            Excellence & Héritage
          </h2>
        </div>

        {/* H3 - Playfair Regular/Normal (400) */}
        <div className="space-y-4">
          <p className="text-slate-500 text-xs tracking-[0.3em] uppercase mb-4 font-sans font-medium">Titre H3</p>
          <h3 className="font-serif text-3xl md:text-5xl font-normal tracking-widest gold-texture uppercase inline-block border-b-2 border-[#CFA653]/40 pb-4">
            Architecture de Valeur
          </h3>
        </div>

      </div>

    </div>
  );
};

export default App;