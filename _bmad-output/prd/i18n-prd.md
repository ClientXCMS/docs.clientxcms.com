# ClientXCMS Documentation - i18n PRD

**Document:** Product Requirements Document
**Projet:** Internationalisation de la documentation ClientXCMS
**Date creation:** 2026-01-24
**Derniere mise a jour:** 2026-01-24
**Branche:** feat/i18n

---

## 1. Resume du projet

### Objectif

Passer la documentation ClientXCMS de FR-only vers EN-primary pour l'internationalisation et l'ouverture a la communaute internationale.

### Contexte

- **Site actuel:** Docusaurus 3.9, 132 fichiers markdown, 37 articles blog
- **Langue originale:** Francais uniquement (locale: 'fr')
- **Projet:** Open source, communaute active sur Discord
- **Constat:** Demandes recurrentes de documentation EN, barriere pour contributeurs internationaux

### Vision

Le projet n'est plus "traduire la doc" mais **"positionner ClientXCMS comme projet open source international avec un workflow reproductible"**.

---

## 2. Decisions strategiques

### Langues

| Aspect | Decision |
|--------|----------|
| Langue principale | **Anglais (EN)** - pivot strategique |
| Langue secondaire | **Francais (FR)** - heritage a maintenir |
| Autres langues | Non prioritaires, structure prete si contribution |

### Scope initial (MVD - Minimum Viable Documentation)

**20-30 pages** couvrant le chemin critique "Decouvre -> Installe -> Ca marche":
- Introduction
- Installation (cloud, self-hosted, Plesk)
- Getting Started
- Settings/Core

### Methode de traduction

| Etape | Responsable |
|-------|-------------|
| Generation | Claude Code MAX |
| Relecture | Auteur (Alexandre) |
| Contribution | Communaute (optionnel) |
| Validation | Maintainer |

### Distribution

- **Build in public** via GitHub (commits visibles, process documente)
- **Lancement:** Reddit r/selfhosted, Show HN, Awesome lists, Dev.to

---

## 3. Epic 0 - Setup & Infrastructure (COMPLETE)

Infrastructure i18n prete pour la traduction du contenu.

### Stories completees

| Story | Description | Status | Commit |
|-------|-------------|--------|--------|
| 0.1 | POC migration defaultLocale FR -> EN (2-3 pages test) | DONE | `11b5627` |
| 0.2 | Config i18n complete (navbar, footer, theme translations) | DONE | `6e6dc58` |
| 0.3 | Structure dossiers i18n/fr/ (132 fichiers copies) | DONE | `20a4c16` |
| 0.4 | Test plugin search local avec i18n | SKIPPED | Build OK |
| 0.5 | Composants React - extraction textes (Translate) | DONE | `b7bea2a` |
| 0.6 | Bandeau "Not yet translated" avec frontmatter | DONE | `17f474e` |
| 0.7 | Config redirects 301 | TODO | - |

### Commits Epic 0

```
20a4c16 feat(i18n): copy complete FR content to i18n structure
17f474e feat(i18n): add "Not yet translated" banner for untranslated pages
b7bea2a feat(i18n): add Translate component to HomepageFeatures
6e6dc58 feat(i18n): add complete French translation files for UI elements
11b5627 feat(i18n): POC migration defaultLocale FR -> EN
77a75ff feat(i18n): add BMAD framework and brainstorming session
```

---

## 4. Epics a venir

### Epic 1: MVD - Introduction (HAUTE priorite)

| Story | Page | Status |
|-------|------|--------|
| 1.1 | introduction.md | DONE (POC) |
| 1.2 | Validation et polish | TODO |

### Epic 2: MVD - Installation (HAUTE priorite)

| Story | Page | Status |
|-------|------|--------|
| 2.1 | requis.md (Requirements) | DONE (POC) |
| 2.2 | cloud.md | TODO |
| 2.3 | selfhosted.md | TODO |
| 2.4 | plesk.md | TODO |
| 2.5 | docker.md | TODO |
| 2.6 | ansible.md | TODO |
| 2.7 | upgrade.md | TODO |
| 2.8 | installation.md (index) | TODO |

### Epic 3: MVD - Getting Started (HAUTE priorite)

| Story | Page | Status |
|-------|------|--------|
| 3.1 | getting_started.md | TODO |
| 3.2 | first_login.md | TODO |
| 3.3 | personalization.md | TODO |
| 3.4 | server.md | TODO |
| 3.5 | products.md | TODO |
| 3.6 | payments.md | TODO |
| 3.7 | accounts.md | TODO |
| 3.8 | service.md | TODO |
| 3.9 | finish.md | TODO |

### Epic 4: MVD - Settings Core (MOYENNE-HAUTE priorite)

| Story | Page | Status |
|-------|------|--------|
| 4.1 | settings/core/core.md | TODO |
| 4.2 | settings/core/app.md | TODO |
| 4.3 | settings/core/mail.md | TODO |
| 4.4 | settings/core/maintenance.md | TODO |
| 4.5 | settings/core/license.md | TODO |
| 4.6 | settings/core/locales.md | TODO |

### Epic 5: Post-MVD - Extensions (BASSE priorite)

~10 stories couvrant modules et addons populaires.

### Epic 6: Post-MVD - Developers (BASSE priorite)

~5 stories couvrant API, themes, extensions development.

### Epic 7: Blog (TRES BASSE priorite)

Articles recents d'abord, changelogs anciens = skip.

### Epic 8: Lancement & Communication (HAUTE priorite)

| Story | Action | Timing |
|-------|--------|--------|
| 8.1 | Setup build in public | DONE |
| 8.2 | Premier post LinkedIn | Apres Epic 0 |
| 8.3 | Post Reddit r/selfhosted | Apres MVD |
| 8.4 | Show HN | Apres MVD |
| 8.5 | Soumission Awesome lists | Apres MVD |
| 8.6 | Article Dev.to/Hashnode | Apres MVD |

---

## 5. Decisions techniques

### Architecture i18n

```
docs.clientxcms.com/
├── docs/                           # EN (defaultLocale)
│   └── *.md                        # Contenu anglais
├── i18n/
│   └── fr/
│       ├── docusaurus-plugin-content-docs/
│       │   └── current/            # FR content (132 fichiers)
│       ├── docusaurus-plugin-content-blog/
│       │   └── options.json
│       ├── docusaurus-theme-classic/
│       │   ├── navbar.json
│       │   └── footer.json
│       └── code.json               # UI translations (113 keys)
└── docusaurus.config.ts            # defaultLocale: 'en'
```

### Comportement URLs

| Locale | URL | Source |
|--------|-----|--------|
| EN (default) | `/installation/cloud` | `docs/installation/cloud.md` |
| FR | `/fr/installation/cloud` | `i18n/fr/.../current/installation/cloud.md` |

### Bandeau "Not yet translated"

**Fichier:** `src/theme/DocItem/Layout/index.tsx` (swizzle)

**Logique:**
```typescript
function useShowNotTranslatedBanner(): boolean {
  const {i18n} = useDocusaurusContext();
  const {frontMatter} = useDoc();

  const isDefaultLocale = i18n.currentLocale === i18n.defaultLocale;
  const isTranslated = frontMatter.translated === true;

  return isDefaultLocale && !isTranslated;
}
```

**Usage frontmatter:**
```yaml
---
sidebar_position: 1
translated: true    # Ajouter pour masquer le bandeau
---
```

### Composant Translate (React)

**Fichier:** `src/components/HomepageFeatures/index.tsx`

```tsx
import Translate from '@docusaurus/Translate';

<Translate id="homepage.features.revenue.title">
  Revenue Management
</Translate>
```

### Screenshots automatises

**Outil:** MCP Chrome DevTools
**Usage:** Validation visuelle EN/FR, captures pour documentation

---

## 6. Workflow de traduction

### Par page

```
1. Lire la page FR source (i18n/fr/.../current/)
2. Generer traduction EN (Claude Code)
3. Placer EN dans ./docs/
4. Ajouter frontmatter `translated: true`
5. Screenshots si necessaires (MCP Chrome)
6. Verifier liens internes
7. Build local + test
8. Commit
```

### Conventions de commit

```
feat(i18n): translate <section>/<page>
fix(i18n): correct translation in <page>
docs(i18n): update PRD with <change>
```

---

## 7. Risques et mitigations

| Risque | Severite | Mitigation |
|--------|----------|------------|
| URLs cassees apres switch | MOYENNE | Redirects 301 (Story 0.7) |
| Dette traduction FR | HAUTE | Detection auto desync + PRs |
| ROI international = 0 | HAUTE | Plan lancement multi-canal |
| Plugin search incompatible | BASSE | Test OK dans build |

---

## 8. Metriques de succes

### Court terme (MVD)
- [ ] 20-30 pages traduites en EN
- [ ] Build sans erreur pour EN et FR
- [ ] Bandeau fonctionnel sur pages non traduites

### Moyen terme (Post-MVD)
- [ ] Contributions communaute (PRs traduction)
- [ ] Trafic international (a mesurer)
- [ ] Issues/PRs en anglais

### Long terme
- [ ] ClientXCMS reconnu internationalement
- [ ] Template reproductible pour autres projets

---

## Ressources

- [Brainstorming session](../analysis/brainstorming-session-2026-01-24.md)
- [Docusaurus i18n Tutorial](https://docusaurus.io/docs/i18n/tutorial)
- [Docusaurus i18n Introduction](https://docusaurus.io/docs/i18n/introduction)

---

**Source of truth pour le projet i18n ClientXCMS**
