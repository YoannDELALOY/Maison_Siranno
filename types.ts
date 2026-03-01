import type { ReactNode } from 'react';

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}


export enum SectionId {
  HOME = 'accueil',
  SERVICES = 'expertise',
  PROJECTS = 'realisations',
  ABOUT = 'a-propos',
  TESTIMONIALS = 'temoignages',
  CONTACT = 'contact'
}