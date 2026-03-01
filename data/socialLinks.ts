/**
 * Liens vers les profils sociaux de Maison Siranno / Yoann Delaloy.
 * Source unique de vérité — importé dans Contact, Footer, et tout composant
 * affichant les réseaux sociaux.
 */
export interface SocialLink {
  /** Identifiant unique du réseau (utilisé comme key React) */
  id: string;
  /** Label affiché et utilisé pour aria-label */
  label: string;
  /** URL du profil */
  href: string;
  /** Nom de l'icône Lucide React à utiliser */
  iconName: 'Linkedin' | 'Github' | 'Instagram' | 'Facebook' | 'ExternalLink';
}

/**
 * Liste ordonnée des profils sociaux de Maison Siranno / Yoann Delaloy.
 * Ordre : profils professionnels en premier, puis réseaux grand public.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yoann-delaloy/',
    iconName: 'Linkedin',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/YoannDELALOY',
    iconName: 'Github',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/yoanndelaloy/',
    iconName: 'Instagram',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=100067966427089&locale=fr_FR',
    iconName: 'Facebook',
  },
  {
    id: 'malt',
    label: 'Malt',
    href: 'https://www.malt.fr/profile/yoanndelaloy',
    iconName: 'ExternalLink',
  },
];
