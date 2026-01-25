# Epic 0: Setup & Infrastructure i18n

**Status:** COMPLETE
**Priority:** CRITIQUE (bloquant pour tous les autres epics)
**Branch:** feat/i18n

---

## Objectif

Mettre en place l'infrastructure technique i18n pour permettre la traduction progressive de la documentation ClientXCMS.

**Resultat attendu:**
- defaultLocale passe de 'fr' a 'en'
- Structure i18n/fr/ complete avec tout le contenu FR
- Bandeau automatique sur pages EN non traduites
- Build fonctionnel pour les deux locales

---

## Stories

### Story 0.1: POC migration defaultLocale

**Status:** DONE
**Commit:** `11b5627`

**Description:**
Tester le changement de defaultLocale 'fr' vers 'en' sur 2-3 pages pour valider la faisabilite.

**Acceptance Criteria:**
- [x] docusaurus.config.ts modifie avec defaultLocale: 'en'
- [x] Locale dropdown actif dans la navbar
- [x] introduction.md traduit en EN
- [x] requis.md traduit en EN
- [x] Versions FR copiees dans i18n/fr/
- [x] Build passe sans erreur pour EN et FR
- [x] Test manuel: / = EN, /fr/ = FR

---

### Story 0.2: Config i18n complete

**Status:** DONE
**Commit:** `6e6dc58`

**Description:**
Generer et configurer tous les fichiers de traduction UI (navbar, footer, theme).

**Acceptance Criteria:**
- [x] npm run write-translations -- --locale fr execute
- [x] code.json avec 113 traductions FR
- [x] navbar.json avec labels FR
- [x] footer.json avec labels FR
- [x] current.json avec categories sidebar FR
- [x] Labels EN dans docusaurus.config.ts

---

### Story 0.3: Structure dossiers i18n/fr/

**Status:** DONE
**Commit:** `20a4c16`

**Description:**
Copier tout le contenu FR de docs/ vers i18n/fr/ pour separation complete des locales.

**Acceptance Criteria:**
- [x] 132 fichiers MD copies dans i18n/fr/docusaurus-plugin-content-docs/current/
- [x] Versions FR originales restaurees (introduction.md, requis.md)
- [x] Build OK pour les deux locales
- [x] /fr/ affiche contenu FR complet

---

### Story 0.4: Test plugin search local

**Status:** SKIPPED (fonctionnel par defaut)

**Description:**
Verifier que le plugin search local fonctionne avec i18n.

**Notes:**
Build OK, search fonctionne. Pas d'action supplementaire requise.

---

### Story 0.5: Composants React - extraction textes

**Status:** DONE
**Commit:** `b7bea2a`

**Description:**
Utiliser le composant Translate de Docusaurus pour les textes en dur dans les composants React.

**Acceptance Criteria:**
- [x] HomepageFeatures utilise <Translate>
- [x] 19 traductions FR ajoutees dans code.json
- [x] Textes par defaut en EN
- [x] Build OK

---

### Story 0.6: Bandeau "Not yet translated"

**Status:** DONE
**Commit:** `17f474e`

**Description:**
Creer un bandeau qui s'affiche automatiquement sur les pages EN non traduites.

**Acceptance Criteria:**
- [x] Composant NotTranslatedBanner cree
- [x] DocItem/Layout swizzle pour integration auto
- [x] Affichage base sur frontmatter `translated: true`
- [x] Lien vers version FR de la page
- [x] Style warning discret mais visible
- [x] Traductions FR du bandeau

---

### Story 0.7: Config redirects 301

**Status:** TODO

**Description:**
Configurer les redirects 301 pour les anciennes URLs FR vers les nouvelles URLs.

**Acceptance Criteria:**
- [ ] Redirects configures (CDN ou plugin)
- [ ] Test sur preprod d'abord
- [ ] Anciennes URLs /docs/* redirigent correctement

**Notes:**
A faire avant merge vers V2 (production).

---

## Definition of Done

- [x] defaultLocale = 'en' dans docusaurus.config.ts
- [x] i18n/fr/ contient tout le contenu FR (132 fichiers)
- [x] Traductions UI completes (navbar, footer, code.json)
- [x] Bandeau "Not translated" fonctionnel
- [x] Composants React utilisent <Translate>
- [x] Build OK pour EN et FR
- [ ] Redirects 301 configures (Story 0.7)

---

## Dependances

- Aucune (epic racine)

## Bloque

- Epic 1: MVD - Introduction
- Epic 2: MVD - Installation
- Epic 3: MVD - Getting Started
- Epic 4: MVD - Settings Core
- Epic 8: Lancement & Communication

---

## Fichiers modifies

```
docusaurus.config.ts
docs/introductions/introduction.md
docs/installation/requis.md
i18n/fr/code.json
i18n/fr/docusaurus-theme-classic/navbar.json
i18n/fr/docusaurus-theme-classic/footer.json
i18n/fr/docusaurus-plugin-content-docs/current.json
i18n/fr/docusaurus-plugin-content-blog/options.json
i18n/fr/docusaurus-plugin-content-docs/current/* (132 fichiers)
src/components/HomepageFeatures/index.tsx
src/components/NotTranslatedBanner/index.tsx
src/components/NotTranslatedBanner/styles.module.css
src/theme/DocItem/Layout/index.tsx
src/theme/DocItem/Layout/styles.module.css
```

---

**Epic complete le 2026-01-24**
