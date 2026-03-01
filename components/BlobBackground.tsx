import React from 'react';

/**
 * Fond décoratif avec trois blobs animés de couleur crème/or diffus.
 * Utilisé sur les pages détail expertise, réalisations, agence et blog
 * pour créer une atmosphère cohérente avec la section hero.
 *
 * Se positionne en `fixed` pour rester visible pendant le scroll.
 * `pointer-events-none` garantit qu'il n'interfère pas avec les interactions.
 */
export const BlobBackground: React.FC = () => (
  <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
    <div
      className="absolute top-0 left-[-10%] w-96 h-96 bg-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"
    />
    <div
      className="absolute top-1/4 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"
      style={{ animationDelay: '2s' }}
    />
    <div
      className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"
      style={{ animationDelay: '4s' }}
    />
  </div>
);
