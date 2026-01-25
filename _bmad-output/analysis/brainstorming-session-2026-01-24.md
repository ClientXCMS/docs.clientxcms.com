---
stepsCompleted: [1, 2, 3, 4]
inputDocuments: []
session_topic: 'Implementation i18n documentation ClientXCMS Docusaurus'
session_goals: 'Strategie langues, approche traduction, architecture technique, maintenance, scope, plan implementation'
selected_approach: 'ai-recommended'
techniques_used: ['Question Storming', 'Six Thinking Hats', 'Cross-Pollination']
ideas_generated: 45
epics_created: 8
stories_estimated: 30+
session_active: false
workflow_completed: true
context_file: ''
---

# Brainstorming Session Results

**Facilitateur:** Alexandre
**Date:** 2026-01-24

## Session Overview

**Sujet:** Implementation de l'internationalisation (i18n) pour la documentation ClientXCMS

**Contexte technique:**
- Site Docusaurus 3.9 avec 132 fichiers markdown dans /docs/
- 37 articles de blog
- Actuellement uniquement en francais (locale: 'fr')
- Structure bien organisee avec des _category_.json
- Composants React avec texte en dur (HomepageFeatures)
- Branche feat/i18n creee et prete

**Objectifs (6 axes):**
1. Strategie de langues - Priorisation des locales
2. Approche de traduction - Methode et responsabilites
3. Architecture technique - Structure i18n Docusaurus
4. Strategie de maintenance - Synchronisation des traductions
5. Scope initial - Blog vs docs, sections prioritaires
6. Plan d'implementation - Etapes concretes

## Technique Selection

**Approche:** AI-Recommended Techniques
**Contexte d'analyse:** Planification strategique multi-dimensionnelle

**Techniques recommandees:**

1. **Question Storming** (deep) - Cartographier toutes les decisions a prendre avant de chercher des solutions
2. **Six Thinking Hats** (structured) - Analyser chaque axe sous perspectives multiples (faits, risques, benefices, creativite)
3. **Cross-Pollination** (creative) - Apprendre des patterns i18n d'autres projets Docusaurus

**Rationale IA:** Sequence concue pour couvrir les 6 axes de maniere exhaustive, eviter les angles morts, et s'appuyer sur des patterns eprouves.

---

## Phase 1: Question Storming

### Questions initiales identifiees

**Business/utilisateur:** Clients francophones uniquement ? Trafic non-francophone ? Abandons barriere langue ?

**Faisabilite:** Qui traduit 132 fichiers ? Cout traduction pro ? IA suffisante ?

**Priorite:** Pourquoi maintenant ? Plus important que autres features ?

**Maintenance:** Qui met a jour EN quand FR change ? Detection obsolescence ?

### 5 Hesitations transformees en strategies

| Hesitation | Strategie |
|------------|-----------|
| Screenshots | Categoriser (essentiel vs nice-to-have) + automatiser via MCP Chrome |
| Maintenance | Detection auto desync + PRs generees automatiquement |
| Qui traduit | Claude MAX + communaute + pipeline 4 etapes (generation -> relecture -> contribution -> validation) |
| Scope | MVD 15-20 pages + bandeau "not translated" pour le reste |
| Blog | Phase 2, articles recents d'abord, changelogs 2023 = skip |

### Insights cles

- **MVD defini:** Intro -> Installation -> Getting Started -> Settings/Core = chemin critique
- **Workflow BMAD:** Permet aux contributeurs de reproduire le process
- **Automatisation SysAdmin:** Scripts screenshots = meme logique que checks Nagios
- **Permission de ne pas tout faire:** Libere de la pression d'exhaustivite

---

## Phase 2: Six Thinking Hats

### White Hat - Faits

| Donnee | Valeur |
|--------|--------|
| MVD reel | 20-30 pages (intro, installation, getting started, settings/core) |
| Contributeurs realistes | 3-5 personnes si workflow clair |
| Frequence updates FR | ~2 majeurs/mois + fixes hebdo |
| Trafic geo | A verifier (evidence qualitative: demandes EN sur Discord) |

**Pivot strategique identifie:** EN devient primary, FR devient heritage a maintenir.

### Black Hat - Risques

| Risque | Severite | Mitigation |
|--------|----------|------------|
| Perte base FR (URLs, SEO) | Recadre: SEO FR jamais travaille, rien a perdre | Redirects 301 |
| Dette traduction inversee (FR obsolete) | Haute | Detection auto + PRs generees |
| ROI international = 0 | Haute | Plan lancement multi-canal |
| Migration defaultLocale inconnue | Bloquante | POC 2-3 pages avant commit |

### Yellow Hat - Benefices

- **Game changer:** ClientXCMS est open source -> doc EN = contributeurs code internationaux
- Langue universelle du dev (issues/PRs en anglais)
- Visibilite ecosysteme open source global
- Potentiel sponsors (GitHub Sponsors, Open Collective)
- Traduction = relecture forcee = amelioration doc
- Contenu marketing organique (workflow BMAD + Claude)

### Green Hat - Creativite

- **Build in public via GitHub:** Process visible, commits racontent l'histoire
- **LinkedIn:** Posts reguliers, contenu reel, angle IA appliquee
- **Plan lancement:** Reddit r/selfhosted, Show HN, Awesome lists, Dev.to
- **Template reproductible:** Le repo devient "Comment i18n sa doc avec BMAD + Claude"

### Red Hat - Emotions

- **Excitation:** Sortir de la bulle FR, contributeurs internationaux, rentabiliser Claude MAX
- **Hesitation:** Charge de travail, motivation long terme, doute adoption EN
- **Instinct:** "Ca vaut le coup d'essayer" - pire cas = apprentissage, meilleur cas = decollage

### Blue Hat - Synthese

Le projet n'est plus "traduire la doc" mais **"positionner ClientXCMS comme projet open source international avec un workflow reproductible"**.

---

## Phase 3: Cross-Pollination (mode rapide)

### Switch defaultLocale - Comportement Docusaurus

Le `defaultLocale` est strip de l'URL. Changement FR->EN:
- Avant: `/docs/intro` = FR, `/en/docs/intro` = EN
- Apres: `/docs/intro` = EN, `/fr/docs/intro` = FR

**Impact:** Anciennes URLs pointent vers mauvaise langue. Solution: Redirects 301 CDN.

### Structure fichiers i18n confirmee

```
project/
├── docs/                    # defaultLocale (EN)
├── i18n/fr/                 # Traductions FR
│   ├── docusaurus-plugin-content-docs/current/
│   └── docusaurus-theme-classic/
└── docusaurus.config.ts
```

### Pieges documentes

- URLs cassees apres switch (Issue #4723)
- Search plugin incompatible potentiel (a verifier)
- Build lent si i18n vide (resolu Docusaurus 3.x)

### Strategie migration recommandee

1. POC 2-3 pages en local
2. Changer defaultLocale: 'en'
3. Deplacer contenu FR vers i18n/fr/
4. Creer contenu EN dans ./docs/
5. Configurer redirects 301
6. Tester plugin search local

---

## Organisation et Plan d'action

### Structure Epics

| Epic | Nom | Priorite | Stories estimees |
|------|-----|----------|------------------|
| 0 | Setup & Infrastructure i18n | CRITIQUE | 7 |
| 1 | MVD - Introduction | HAUTE | 2-3 |
| 2 | MVD - Installation | HAUTE | 5 |
| 3 | MVD - Getting Started | HAUTE | 3 |
| 4 | MVD - Settings Core | MOYENNE-HAUTE | 4 |
| 5 | Post-MVD - Extensions | BASSE | ~10 |
| 6 | Post-MVD - Developers | BASSE | ~5 |
| 7 | Blog | TRES BASSE | Variable |
| 8 | Lancement & Communication | HAUTE | 6 |

### Epic 0 : Setup & Infrastructure i18n (BLOQUANT)

| Story | Description |
|-------|-------------|
| 0.1 | POC migration defaultLocale (2-3 pages test) |
| 0.2 | Config i18n dans docusaurus.config.ts |
| 0.3 | Structure dossiers i18n/fr/ |
| 0.4 | Test plugin search local avec i18n |
| 0.5 | Composants React - extraction textes (Translate) |
| 0.6 | Bandeau "Not yet translated" |
| 0.7 | Config redirects 301 (preprod d'abord) |

### Epics 1-4 : MVD (Minimum Viable Documentation)

**Scope MVD:** 20-30 pages couvrant le chemin critique "Decouvre -> Installe -> Ca marche"

- Epic 1: Introduction (~3 pages)
- Epic 2: Installation - cloud, self-hosted, Plesk (~8 pages)
- Epic 3: Getting Started - config initiale (~5-10 pages)
- Epic 4: Settings/Core - parametres essentiels (~5-10 pages)

### Epic 8 : Lancement & Communication

| Story | Action | Timing |
|-------|--------|--------|
| 8.1 | Setup build in public | Des maintenant |
| 8.2 | Premier post LinkedIn | Apres Epic 0 |
| 8.3 | Post Reddit r/selfhosted | Apres MVD |
| 8.4 | Show HN | Apres MVD |
| 8.5 | Soumission Awesome lists | Apres MVD |
| 8.6 | Article Dev.to/Hashnode | Apres MVD |

### Workflow par story

```
1. Lire la page FR source
2. Generer traduction EN (Claude Code)
3. Deplacer FR vers i18n/fr/docusaurus-plugin-content-docs/current/
4. Placer EN dans ./docs/
5. Screenshots si necessaires (MCP Chrome FR + EN)
6. Verifier liens internes
7. Build local + test
8. Commit + PR
```

### Dependances

```
Epic 0 (Setup) ─────► Epic 1-4 (MVD) ─────► Epic 5-7 (Post-MVD)
       │                    │
       └── Epic 8.1-8.2 ────┴── Epic 8.3-8.6 (Lancement)
```

---

## Resume de session

### Decisions cles

| Decision | Choix |
|----------|-------|
| Langue principale | EN (pivot strategique) |
| Langue secondaire | FR (heritage a maintenir) |
| Scope initial | MVD 20-30 pages |
| Methode traduction | Claude Code MAX + relecture communaute |
| Screenshots | Categoriser + automatiser (MCP Chrome) |
| Blog | Phase 3, articles recents d'abord |
| Maintenance | Detection auto desync + PRs generees |

### Risques identifies et mitigations

| Risque | Mitigation |
|--------|------------|
| Migration defaultLocale inconnue | POC 2-3 pages AVANT tout commit |
| Dette traduction FR | Detection auto + PRs generees |
| ROI international = 0 | Plan lancement multi-canal |
| Plugin search incompatible | Test dans Epic 0.4 |

### Opportunites identifiees

- ClientXCMS open source = contributeurs code internationaux
- Build in public = visibilite organique
- Template reproductible = meta-visibilite
- Workflow BMAD + Claude = contenu marketing

### Prochaines actions immediates

1. **Creer Epic 0** dans le systeme de suivi
2. **Story 0.1** : POC migration sur 2-3 pages en local
3. **Story 8.1** : Commit initial du brainstorming (build in public)

---

## Ressources et references

- [Docusaurus i18n Tutorial](https://docusaurus.io/docs/i18n/tutorial)
- [Docusaurus i18n Introduction](https://docusaurus.io/docs/i18n/introduction)
- [Issue #4723 - defaultLocale fallback](https://github.com/facebook/docusaurus/issues/4723)
- [Discussion #10980 - folder structure](https://github.com/facebook/docusaurus/discussions/10980)

---

**Session completee le 2026-01-24**
**Techniques utilisees:** Question Storming, Six Thinking Hats, Cross-Pollination
**Idees generees:** ~45 insights
**Epics crees:** 8
**Stories estimees:** 30+

