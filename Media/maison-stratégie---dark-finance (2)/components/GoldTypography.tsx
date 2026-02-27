import React from 'react';

interface GoldHeadingProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

// H1: Grande taille, impact maximum, texture complète
export const GoldH1: React.FC<GoldHeadingProps> = ({ children, className = '', align = 'left' }) => {
  return (
    <h1 
      className={`font-serif font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 gold-leaf-text ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'} ${className}`}
    >
      {children}
    </h1>
  );
};

// H2: Sous-titre élégant, texture conservée mais plus fine
export const GoldH2: React.FC<GoldHeadingProps> = ({ children, className = '', align = 'left' }) => {
  return (
    <h2 
      className={`font-serif font-semibold text-3xl md:text-5xl tracking-wide mb-4 gold-leaf-text ${align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'} ${className}`}
      style={{ backgroundImage: 'linear-gradient(45deg, #8E6E34 0%, #C5A059 30%, #F9F295 50%, #C5A059 70%, #8E6E34 100%)' }}
    >
      {children}
    </h2>
  );
};

// H3: Titre de section, plus sombre, texture "Obsidian Gold"
export const GoldH3: React.FC<GoldHeadingProps> = ({ children, className = '', align = 'left' }) => {
  return (
    <h3 
      className={`font-serif font-medium text-xl md:text-3xl tracking-wide mb-3 text-gold-DEFAULT uppercase border-l-2 border-gold pl-4 ${align === 'center' ? 'text-center border-l-0' : align === 'right' ? 'text-right border-l-0 border-r-2 pr-4' : 'text-left'} ${className}`}
      style={{ 
        color: 'transparent', 
        backgroundClip: 'text', 
        WebkitBackgroundClip: 'text',
        backgroundImage: 'linear-gradient(to right, #C5A059, #F9F295, #C5A059)' 
      }}
    >
      {children}
    </h3>
  );
};