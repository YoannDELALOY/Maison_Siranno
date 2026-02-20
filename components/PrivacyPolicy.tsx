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
              <strong>Yoann DELALOY — Maison Siranno</strong><br />
              Auto-entrepreneur, 1 rue Auguste Grivot, 45110 Châteauneuf-sur-Loire<br />
              <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a><br />
              <a href="tel:+33647344364" className="text-gold hover:underline">06 47 34 43 64</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">2. Données collectées</h2>
            <p>Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact :</p>
            <ul className="mt-3 space-y-2">
              <li><strong>Nom et prénom</strong> — pour personnaliser la réponse</li>
              <li><strong>Adresse email</strong> — pour vous répondre</li>
              <li><strong>Numéro de téléphone</strong> (optionnel) — pour un contact téléphonique si souhaité</li>
              <li><strong>Message / Description du projet</strong> — pour comprendre votre demande</li>
            </ul>
            <p className="mt-3">
              Nous ne collectons aucune donnée sensible au sens du RGPD (santé, origine ethnique, opinions politiques, croyances religieuses, etc.).
            </p>
            <p className="mt-3">
              <strong>Données de navigation :</strong> avec votre consentement, Google Analytics peut collecter des données anonymisées sur votre navigation (pages visitées, durée, source de trafic). Ces données ne permettent pas de vous identifier personnellement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="mt-3 space-y-2">
              <li>Répondre à votre demande de contact ou de devis</li>
              <li>Assurer le suivi de la relation commerciale</li>
              <li>Améliorer la qualité de notre site (analytics anonymisés, avec consentement)</li>
              <li>Vous envoyer des informations sur nos services si vous y avez explicitement consenti</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">4. Base légale du traitement</h2>
            <p>
              Le traitement de vos données repose sur :<br />
              — Votre <strong>consentement explicite</strong> (art. 6.1.a RGPD) lors de la soumission du formulaire<br />
              — Notre <strong>intérêt légitime</strong> (art. 6.1.f RGPD) à répondre à vos demandes commerciales
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">5. Destinataires et sous-traitants</h2>
            <p>
              Vos données personnelles ne sont jamais vendues, louées ou cédées à des tiers à des fins commerciales. Elles peuvent être partagées avec les prestataires techniques suivants, dans le strict cadre de leurs services :
            </p>
            <ul className="mt-3 space-y-2">
              <li><strong>Formspree</strong> (formspree.io) — traitement des formulaires de contact. Données hébergées aux États-Unis, protégées par des clauses contractuelles types.</li>
              <li><strong>Hostinger International Ltd.</strong> — hébergement du site. Données hébergées dans l'UE.</li>
              <li><strong>Google Analytics</strong> (Google Ireland Ltd.) — analyse d'audience anonymisée, uniquement avec votre consentement.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">6. Durée de conservation</h2>
            <p>
              Vos données de contact sont conservées pendant <strong>3 ans</strong> à compter du dernier contact, puis supprimées ou anonymisées. Les données de navigation anonymisées (Google Analytics) sont conservées conformément aux paramètres par défaut de cet outil (14 mois).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">7. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
            <ul className="mt-3 space-y-2">
              <li><strong>Droit d'accès</strong> (art. 15 RGPD) — consulter vos données personnelles</li>
              <li><strong>Droit de rectification</strong> (art. 16 RGPD) — corriger vos données inexactes ou incomplètes</li>
              <li><strong>Droit à l'effacement</strong> (art. 17 RGPD) — demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> (art. 20 RGPD) — recevoir vos données dans un format lisible et structuré</li>
              <li><strong>Droit d'opposition</strong> (art. 21 RGPD) — vous opposer à certains traitements</li>
              <li><strong>Droit à la limitation</strong> (art. 18 RGPD) — limiter le traitement de vos données</li>
              <li><strong>Droit de retrait du consentement</strong> — à tout moment, sans effet rétroactif</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous par email :{' '}
              <a href="mailto:contact@yoanndelaloy.com" className="text-gold hover:underline">contact@yoanndelaloy.com</a>
            </p>
            <p className="mt-2">
              En cas de réclamation non résolue, vous pouvez saisir la{' '}
              <strong>CNIL</strong> :{' '}
              <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">www.cnil.fr/fr/plaintes</a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">8. Politique Cookies</h2>

            <h3 className="font-semibold text-charcoal text-lg mb-2">Cookies strictement nécessaires</h3>
            <p>
              Ces cookies sont indispensables au fonctionnement du site (gestion des préférences de consentement). Ils ne nécessitent pas votre consentement.
            </p>

            <h3 className="font-semibold text-charcoal text-lg mb-2 mt-6">Cookies analytiques — Google Analytics</h3>
            <p>
              Avec votre consentement, Google Analytics dépose des cookies pour mesurer l'audience de notre site de manière anonymisée. Aucune donnée permettant de vous identifier personnellement n'est collectée.
            </p>
            <p className="mt-3">
              <strong>Opt-out Google Analytics :</strong> vous pouvez désactiver le suivi Google Analytics en installant l'extension officielle :{' '}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">tools.google.com/dlpage/gaoptout</a>
            </p>
            <p className="mt-3">
              Vous pouvez également retirer votre consentement à tout moment via la bannière cookies accessible en bas de page.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">9. Sécurité des données</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction : connexions chiffrées (HTTPS/TLS), accès restreint aux données, hébergement sécurisé.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">10. Transferts hors UE</h2>
            <p>
              Certains de nos prestataires (Formspree, Google) peuvent traiter des données hors de l'Union Européenne. Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types approuvées par la Commission Européenne, Privacy Shield ou mécanismes équivalents).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">11. Modification de la politique</h2>
            <p>
              Cette politique de confidentialité peut être mise à jour à tout moment pour refléter les évolutions légales ou nos pratiques. La date de dernière modification est indiquée en haut de page. En continuant à utiliser notre site après une mise à jour, vous acceptez la version révisée.
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
