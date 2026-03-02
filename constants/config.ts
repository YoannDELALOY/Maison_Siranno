/**
 * Constantes de configuration du site Maison Siranno.
 * Source unique de vérité pour les données de contact.
 * Importé dans Contact, Footer, Hero, et tout composant affichant des infos de contact.
 */
export const CONTACT_CONFIG = {
  email: 'contact@yoanndelaloy.com',
  phone: '06 47 34 43 64',
  phoneHref: 'tel:+33647344364',

  /** Adresse postale complète de l'agence */
  address: {
    street: '1 rue Auguste Grivot',
    city: 'Châteauneuf-sur-Loire',
    postal: '45110',
    region: 'Loiret, France',
  },

} as const;
