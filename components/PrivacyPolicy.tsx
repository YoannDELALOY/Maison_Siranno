import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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

        <h1 className="font-serif text-4xl font-bold text-metallic-navy mb-2">Politique de Confidentialité</h1>
        <p className="text-steel text-sm mb-10">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>

        <div className="prose prose-lg text-charcoal/80 space-y-8">

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement de vos données personnelles est :<br />
              <strong>Yoann Delaloy — Maison Siranno</strong><br />
              1 rue Auguste Grivot, 45110 Châteauneuf-sur-Loire<br />
              <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">2. Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact :</p>
            <ul className="mt-3 space-y-2">
              <li><strong>Nom et prénom</strong> — pour personnaliser la réponse</li>
              <li><strong>Adresse email</strong> — pour vous répondre</li>
              <li><strong>Numéro de téléphone</strong> (optionnel) — pour un contact téléphonique si souhaité</li>
              <li><strong>Message</strong> — pour comprendre votre demande</li>
            </ul>
            <p className="mt-3">
              Nous ne collectons aucune donnée sensible (santé, origine ethnique, opinions politiques, etc.).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="mt-3 space-y-2">
              <li>Répondre à votre demande de contact ou de devis</li>
              <li>Assurer le suivi de la relation commerciale</li>
              <li>Vous envoyer des informations sur nos services si vous y avez consenti</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur votre consentement (article 6.1.a du RGPD) exprimé lors de la soumission du formulaire de contact, et sur notre intérêt légitime à répondre à vos demandes (article 6.1.f du RGPD).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">5. Destinataires des données</h2>
            <p>
              Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers. Elles peuvent être transmises à des prestataires techniques (hébergeur, service d'envoi d'emails) dans le cadre strict de l'exécution de leurs services, et uniquement dans les limites nécessaires.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">6. Durée de conservation</h2>
            <p>
              Vos données sont conservées pour la durée nécessaire à la gestion de votre demande, et au maximum 3 ans après le dernier contact. À l'issue de cette période, elles sont supprimées ou anonymisées.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">7. Vos droits</h2>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul className="mt-3 space-y-2">
              <li><strong>Droit d'accès</strong> — consulter vos données personnelles</li>
              <li><strong>Droit de rectification</strong> — corriger vos données inexactes</li>
              <li><strong>Droit à l'effacement</strong> — demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> — recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> — vous opposer à certains traitements</li>
              <li><strong>Droit à la limitation</strong> — limiter le traitement de vos données</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous par email à :{' '}
              <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>
            </p>
            <p className="mt-2">
              En cas de réclamation, vous pouvez également saisir la{' '}
              <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.cnil.fr</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">8. Cookies</h2>
            <h3 className="font-semibold text-charcoal text-lg mb-2">Cookies techniques</h3>
            <p>
              Ce site utilise des cookies techniques indispensables à son fonctionnement (session, préférences d'affichage). Ces cookies ne nécessitent pas votre consentement car ils sont strictement nécessaires.
            </p>
            <h3 className="font-semibold text-charcoal text-lg mb-2 mt-4">Cookies analytiques</h3>
            <p>
              Si nous utilisons des outils d'analyse (ex : Google Analytics), cela sera indiqué et votre consentement vous sera demandé avant tout dépôt de cookie non essentiel.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, toute modification, divulgation ou destruction.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">10. Modification de la politique</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière modification est indiquée en haut de page. Nous vous invitons à la consulter régulièrement.
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
