import React from 'react';

/**
 * Avatar affiche a cote d'un temoignage.
 *
 * Pourquoi ce composant existe. Jusqu'au 16/09/2026, les photos des
 * temoignages venaient toutes de randomuser.me — un generateur de visages.
 * Le visage d'un inconnu etait donc affiche sous le nom de vrais clients.
 * Le temoignage etait authentique, l'image ne l'etait pas.
 *
 * Regle tenue ici : tant qu'une personne n'a pas fourni sa propre photo, on
 * affiche ses initiales. Le jour ou elle en envoie une, il suffit de remplir
 * `image` dans data/testimonials.ts — ce composant l'affiche sans autre
 * changement, et aucun ecran n'est a retoucher.
 */

function initiales(nom: string): string {
  return nom
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((mot) => mot.charAt(0).toUpperCase())
    .join('');
}

interface AvatarTemoignageProps {
  name: string;
  /** Vide tant que la personne n'a pas fourni sa photo. */
  image?: string;
  /** Taille et taille de texte, ex. "w-12 h-12 text-sm". */
  className?: string;
}

export const AvatarTemoignage: React.FC<AvatarTemoignageProps> = ({
  name,
  image,
  className = 'w-12 h-12 text-sm',
}) => {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        loading="lazy"
        className={`${className} rounded-full object-cover shrink-0`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={name}
      className={`${className} rounded-full shrink-0 flex items-center justify-center font-serif font-bold leading-none select-none`}
      style={{
        background: 'linear-gradient(135deg, #F4E095 0%, #D4AF37 55%, #B68D40 100%)',
        color: '#1a2744',
      }}
    >
      {initiales(name)}
    </div>
  );
};

export default AvatarTemoignage;
