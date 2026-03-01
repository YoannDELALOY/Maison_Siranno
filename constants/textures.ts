import type React from 'react';

/**
 * Styles de texture réutilisables — fond grain SVG fractal.
 * Convention de nommage : SCREAMING_SNAKE_CASE car ce sont des constantes exportées.
 *
 * Utilisés dans AgencyPage, ServiceDetailPage, BlogArticleDetailPage, etc.
 */

/** Texture grain sombre — fond charcoal/navy pour encarts CTA et côtés gauches */
export const DARK_TEXTURE_STYLE: React.CSSProperties = {
  backgroundColor: '#0F172A',
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lg1'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.28' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lg1)' opacity='0.55'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='lg2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23lg2)' opacity='0.28'/%3E%3C/svg%3E")`,
  ].join(', '),
  backgroundSize: '600px 600px, 200px 200px',
  backgroundBlendMode: 'overlay, screen',
};

/** Texture grain clair — fond crème/papier pour cartes, panneaux et formulaires */
export const LIGHT_TEXTURE_STYLE: React.CSSProperties = {
  backgroundColor: '#FAF6EE',
  backgroundImage: [
    `url("data:image/svg+xml,%3Csvg viewBox='0 0 700 700' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='pg3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.32' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23pg3)' opacity='0.38'/%3E%3C/svg%3E")`,
    `radial-gradient(ellipse at 12% 18%, rgba(185,145,65,0.1) 0%, transparent 48%)`,
    `radial-gradient(ellipse at 80% 72%, rgba(160,120,45,0.08) 0%, transparent 42%)`,
    `radial-gradient(ellipse at 50% 90%, rgba(175,140,55,0.07) 0%, transparent 38%)`,
  ].join(', '),
  backgroundSize: '700px 700px, 100% 100%, 100% 100%, 100% 100%',
  backgroundBlendMode: 'multiply, normal, normal, normal',
};

/** Alias sémantique de DARK_TEXTURE_STYLE pour contextes bleu-nuit */
export const BLUE_TEXTURE_STYLE: React.CSSProperties = DARK_TEXTURE_STYLE;

// ---------------------------------------------------------------------------
// Aliases dépréciés — conservés pour ne pas casser les imports existants
// Préférer les noms SCREAMING_SNAKE_CASE ci-dessus dans tout nouveau code.
// ---------------------------------------------------------------------------
/** @deprecated Utiliser DARK_TEXTURE_STYLE */
export const darkTextureStyle = DARK_TEXTURE_STYLE;
/** @deprecated Utiliser LIGHT_TEXTURE_STYLE */
export const lightTextureStyle = LIGHT_TEXTURE_STYLE;
/** @deprecated Utiliser BLUE_TEXTURE_STYLE */
export const blueTextureStyle = BLUE_TEXTURE_STYLE;
