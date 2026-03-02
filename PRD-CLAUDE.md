# PRD Suivi — Maison Siranno (yoanndelaloy.com)

> Document de suivi technique maintenu par Claude Code.
> Mis à jour à chaque session de travail.

---

## Contexte projet

Site vitrine de l'agence **Maison Siranno** — Yoann Delaloy.
Spécialités : IA, automatisation n8n, développement web, marketing digital.

| Info | Valeur |
|------|--------|
| Domaine | `yoanndelaloy.com` |
| Repo | `https://github.com/YoannDELALOY/Maison_Siranno.git` |
| Dossier VPS | `/opt/maison-siranno/` |
| Email contact | `contact@yoanndelaloy.com` |
| Téléphone | `06 47 34 43 64` |

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| CSS | Tailwind CSS (CDN) + classes custom dans `index.html` |
| Icônes | Lucide React |
| Graphiques | Recharts |
| i18n | Hook custom `useTranslation` (FR / EN / ES) |
| Formulaire | Formspree (à configurer) |
| Conteneur | Docker — Nginx 1.27 Alpine |
| Reverse proxy | Traefik (réseau `n8n_default`) |
| SSL | Let's Encrypt via Traefik (`mytlschallenge`) |

---

## Infrastructure VPS

| Container | Rôle | Réseau |
|-----------|------|--------|
| `n8n-traefik-1` | Reverse proxy + SSL | `n8n_default` |
| `n8n-n8n-1` | Automatisation n8n | `n8n_default` |
| `Portfolio2026-container` | Portfolio perso (yoanndelaloy.fr) | `n8n_default` |
| `maison-siranno` | Site Maison Siranno (yoanndelaloy.com) | `n8n_default` |

**Commande de déploiement :**
```bash
cd /opt/maison-siranno && docker compose up -d --build
```

---

## Architecture du code

```
/opt/maison-siranno/
├── App.tsx                    # Routing SPA (état page)
├── index.html                 # Point d'entrée HTML
├── components/                # Composants React (25 fichiers)
│   ├── Hero.tsx               # Section hero avec cartes animées
│   ├── Contact.tsx            # Formulaire Formspree + coordonnées
│   ├── Footer.tsx             # Pied de page
│   └── ...
├── constants/
│   └── config.ts              # ⚠ Source unique de vérité (email, tel, Formspree ID)
├── data/                      # Données statiques (blog, projets, services)
├── hooks/                     # useTranslation, useSeo, useSwipe
├── public/                    # Assets servis statiquement
│   ├── logos/                 # Logos PNG (Design sans titre 81-87)
│   └── Media/                 # ⚠ À créer — images hero manquantes
└── Media/                     # Source des assets (hors public → non servis)
```

---

## Configuration à faire

### Formspree (formulaire de contact)
1. Créer un compte sur https://formspree.io (gratuit, 50 mails/mois)
2. Créer un formulaire pointant vers `contact@yoanndelaloy.com`
3. Copier l'ID (ex: `xpwrjkql`)
4. Ajouter dans `/opt/maison-siranno/.env` :
   ```
   VITE_FORMSPREE_ID=xpwrjkql
   ```
5. Rebuilder : `docker compose up -d --build`

---

## Backlog des tâches

### ✅ Fait

| # | Tâche | Date | Commit |
|---|-------|------|--------|
| — | Déploiement initial Docker + Traefik | 2026-03-02 | — |
| — | Fix réseau (`n8n_default`) + certresolver (`mytlschallenge`) | 2026-03-02 | `63f9f99` |
| — | Ajout header HSTS (max-age=1y) | 2026-03-02 | `d0a5704` |

### 🔄 En cours

| # | Tâche | Priorité |
|---|-------|----------|
| T1 | Images cartes Hero — carte du haut (stack tech) | HIGH |
| T2 | Images cartes Hero — carte du bas (logo hosting) | HIGH |
| T3 | Formulaire de contact — configurer Formspree ID | CRITICAL |
| T4 | Liens mailto: — vérification comportement | LOW |

### 📋 À faire

| # | Tâche | Priorité |
|---|-------|----------|
| — | Optimisation images (les PNG dans dist/ sont très lourds, jusqu'à 8 Mo) | MEDIUM |
| — | Code splitting Vite (bundle JS > 1.4 Mo) | MEDIUM |
| — | Configurer VITE_FORMSPREE_ID en build arg Docker | MEDIUM |

---

## Notes techniques

### Images hors public/
Vite ne sert que les fichiers dans `public/`. Les références `/Media/...` dans le code pointent vers `public/Media/...` au runtime. Les fichiers source dans `/Media/` (à la racine du repo) ne sont **pas** inclus dans le build.

**Fix appliqué T1/T2 :** Les deux images Hero copiées dans `public/Media/Logos/Logos divers/`.

### Liens mailto:
`mailto:contact@yoanndelaloy.com?subject=...` est l'implémentation standard. Le navigateur ouvre le client mail par défaut (Gmail, Outlook, Mail...). L'utilisateur final peut configurer Gmail comme handler par défaut dans Chrome : Paramètres → Confidentialité → Paramètres des sites → Gestionnaires de protocoles.

### HSTS
`Strict-Transport-Security: max-age=31536000; includeSubDomains` configuré dans `nginx.conf`. Chrome mémorise d'aller directement en HTTPS pendant 1 an.

---

*Dernière mise à jour : 2026-03-02*
