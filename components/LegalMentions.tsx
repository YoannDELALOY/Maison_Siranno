import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface LegalMentionsProps {
  onBack: () => void;
}

export const LegalMentions: React.FC<LegalMentionsProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-paper py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gold hover:underline mb-10 font-medium"
        >
          <ArrowLeft size={18} />
          Retour au site
        </button>

        <h1 className="font-serif text-4xl font-bold text-metallic-navy mb-2">Mentions Légales</h1>
        <p className="text-steel text-sm mb-10">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

        <div className="prose prose-lg text-charcoal/80 space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">1. Éditeur du site</h2>
            <p>Le présent site web est édité par :</p>
            <ul className="space-y-1 mt-3 list-none">
              <li><strong>Raison sociale :</strong> Yoann Delaloy — Maison Siranno</li>
              <li><strong>Activité :</strong> Agence digitale — Création de sites web, automatisation et IA</li>
              <li><strong>Adresse :</strong> 1 rue Auguste Grivot, 45110 Châteauneuf-sur-Loire, France</li>
              <li><strong>Téléphone :</strong>{' '}
                <a href="tel:+33647344364" className="text-gold hover:underline">06 47 34 43 64</a>
              </li>
              <li><strong>Email :</strong>{' '}
                <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">2. Directeur de la publication</h2>
            <p>Yoann Delaloy, Fondateur & Lead Architect — Maison Siranno.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">3. Hébergement</h2>
            <p>Ce site est hébergé par un prestataire d'hébergement web. Les coordonnées de l'hébergeur seront fournies sur demande à l'adresse <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logos, icônes, sons, logiciels, etc.) est la propriété exclusive de Yoann Delaloy — Maison Siranno, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Maison Siranno.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">5. Données personnelles</h2>
            <p>
              Les informations recueillies via le formulaire de contact sont destinées exclusivement à Maison Siranno et ne sont jamais cédées à des tiers. Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression des données vous concernant.
            </p>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :{' '}
              <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">6. Cookies</h2>
            <p>
              Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de traçage publicitaire n'est utilisé sans votre consentement explicite. Pour plus d'informations, consultez notre{' '}
              <span className="text-gold font-medium">Politique de confidentialité</span>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">7. Limitation de responsabilité</h2>
            <p>
              Maison Siranno s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, Maison Siranno ne garantit pas l'exactitude, la complétude et l'actualité des informations diffusées sur ce site. En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">8. Liens hypertextes</h2>
            <p>
              Ce site peut contenir des liens vers des sites tiers. Maison Siranno n'est pas responsable du contenu de ces sites externes et ne peut en aucune façon être tenue responsable des informations qu'ils contiennent.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">9. Droit applicable</h2>
            <p>
              Le présent site et ses conditions d'utilisation sont régis par le droit français. En cas de litige, les tribunaux français seront compétents.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <button
            onClick={onBack}
            className="btn-metallic-dark text-white font-semibold px-8 py-3 rounded-full inline-flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Retour au site
          </button>
        </div>

      </div>
    </div>
  );
};
