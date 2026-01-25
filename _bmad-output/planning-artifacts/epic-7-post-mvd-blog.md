# Epic 7: Post-MVD - Blog

**Status:** TODO
**Priority:** TRES BASSE
**Branch:** feat/i18n
**Dependances:** Epics 1-6 (documentation complete)

---

## Objectif

Traduire les articles de blog recents pour maintenir une presence internationale coherente.

**Resultat attendu:**
- Articles recents (2024-2025) traduits en EN
- Changelogs majeurs disponibles internationalement
- Articles anciens (2022-2023) = skip ou traduction minimale

---

## Scope

**Dossier:** `blog/`

### Articles 2025 (5 articles) - PRIORITE

| Fichier | Sujet | Priorite | Status |
|---------|-------|----------|--------|
| 2025-03-14-nouveau-programme-partenaire.md | Programme partenaire | HAUTE | TODO |
| 2025-02-26-nouveau-support-ia.md | Support IA | HAUTE | TODO |
| 2025-02-25-nouvelle-version-2.14.2.md | Changelog | MOYENNE | TODO |
| 2025-02-24-nouvelle-version-2.14.1.md | Changelog | BASSE | TODO |
| 2025-02-08-nouvelle-version-2.14.0.md | Changelog | MOYENNE | TODO |

### Articles 2024 (10 articles) - SELECTIVE

| Fichier | Sujet | Priorite | Status |
|---------|-------|----------|--------|
| 2024-12-31-fin-clientxcms-v1.md | Fin v1 | HAUTE | TODO |
| 2024-11-18-mise-a-jour-addon-page.md | Addon update | BASSE | TODO |
| 2024-10-31-retour-de-virtualizorcloud.md | Module | BASSE | TODO |
| 2024-10-20-nouvelle-version-2.13.0.md | Changelog | BASSE | TODO |
| 2024-08-03-nouveau-site-internet.md | Website | MOYENNE | TODO |
| 2024-07-07-nouvelle-version-2.12.0.md | Changelog | BASSE | TODO |
| 2024-06-11-nouvelle-version-2.11.0.md | Changelog | BASSE | TODO |
| 2024-05-20-nouvelle-version-2.10.0.md | Changelog | BASSE | TODO |
| 2024-03-24-sortie-outil-migration.md | Migration | MOYENNE | TODO |
| 2024-03-18-sortie-du-module-proxmox.md | Proxmox | MOYENNE | TODO |
| 2024-01-31-lancement-beta.md | Beta launch | HAUTE | TODO |

### Articles 2022-2023 (21 articles) - SKIP

Ces articles sont des changelogs anciens ou announcements obsoletes. **Non prioritaires pour traduction.**

**Total scope actif:** 16 articles (~30-40 KB)

---

## Stories

### Story 7.1: Traduire articles 2025 (features)

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire les articles 2025 annoncant des features importantes.

**Acceptance Criteria:**
- [ ] nouveau-programme-partenaire.md traduit
- [ ] nouveau-support-ia.md traduit
- [ ] frontmatter `translated: true`
- [ ] Dates et metadata preservees

---

### Story 7.2: Traduire changelogs majeurs 2025

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire les changelogs v2.14.x.

**Acceptance Criteria:**
- [ ] nouvelle-version-2.14.0.md traduit
- [ ] nouvelle-version-2.14.2.md traduit (optionnel: 2.14.1)
- [ ] Format changelog maintenu
- [ ] frontmatter `translated: true`

---

### Story 7.3: Traduire articles strategiques 2024

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Traduire les articles strategiques de 2024.

**Acceptance Criteria:**
- [ ] fin-clientxcms-v1.md traduit (important pour contexte)
- [ ] lancement-beta.md traduit (histoire du projet)
- [ ] frontmatter `translated: true`

---

### Story 7.4: Traduire articles modules 2024

**Status:** TODO
**Priorite:** MOYENNE

**Description:**
Traduire les annonces de modules/features.

**Acceptance Criteria:**
- [ ] sortie-du-module-proxmox.md traduit
- [ ] sortie-outil-migration.md traduit
- [ ] nouveau-site-internet.md traduit
- [ ] frontmatter `translated: true`

---

### Story 7.5: Traduire changelogs 2024 (optionnel)

**Status:** TODO
**Priorite:** BASSE

**Description:**
Traduire les changelogs 2024 restants si temps disponible.

**Acceptance Criteria:**
- [ ] Changelogs v2.10-v2.13 traduits
- [ ] Format maintenu
- [ ] frontmatter `translated: true`

---

## Definition of Done

- [ ] Articles 2025 prioritaires traduits
- [ ] Articles strategiques 2024 traduits
- [ ] Build OK pour EN et FR
- [ ] Format blog Docusaurus maintenu

---

## Dependances

**Requiert:**
- Epics 1-4: MVD (priorite absolue)
- Epic 5-6: Extensions/Developers (recommande)

**Note:** Cet epic est le dernier de la roadmap i18n.

---

## Notes techniques

### Structure blog Docusaurus

```yaml
---
title: "Article Title"
authors: [martin]
tags: [changelog, feature]
translated: true
---

Content here...
```

### Regles traduction blog

- Garder les dates dans le nom de fichier
- Traduire title dans frontmatter
- Garder authors et tags originaux
- Ajouter `translated: true`

### Articles a SKIP

Les articles 2022-2023 ne sont pas prioritaires:
- Changelogs anciens (v1.x, v2.0-2.9)
- Annonces obsoletes
- Contenu historique peu consulte

---

## Estimation

**Effort:** 3-5h (scope reduit)
**Complexite:** Faible (contenu marketing, pas technique)
