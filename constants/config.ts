/**
 * Constantes de configuration du site Maison Siranno.
 * Centralise les données de contact pour éviter la duplication.
 */
export const CONTACT_CONFIG = {
  email: 'contact@yoanndelaloy.com',
  phone: '06 47 34 43 64',
  phoneHref: 'tel:+33647344364',
  /** Remplacer YOUR_FORMSPREE_ID par l'identifiant du formulaire Formspree */
  formspreeId: 'YOUR_FORMSPREE_ID',
  get formspreeUrl() {
    return `https://formspree.io/f/${this.formspreeId}`;
  },
} as const;
