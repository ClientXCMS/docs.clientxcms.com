# Epic 1: MVD - Introduction

**Status:** IN PROGRESS
**Priority:** HAUTE
**Branch:** feat/i18n
**Dependances:** Epic 0 (COMPLETE)

---

## Objectif

Finaliser la section Introduction en anglais avec qualite production.

**Resultat attendu:**
- Page introduction.md en EN de qualite professionnelle
- Contenu adapte au public international
- Coherence avec le reste du site EN

---

## Scope

**Dossier:** `docs/introductions/`

| Fichier | Status actuel | Action |
|---------|---------------|--------|
| introduction.md | Traduit (POC) | Relecture + polish |
| _category_.json | EN (Project Information) | OK |

**Total:** 1 page

---

## Stories

### Story 1.1: Relecture introduction.md

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Relire et ameliorer la traduction EN de introduction.md faite pendant le POC.

**Page source FR:** `i18n/fr/docusaurus-plugin-content-docs/current/introductions/introduction.md`
**Page cible EN:** `docs/introductions/introduction.md`

**Acceptance Criteria:**
- [ ] Relecture complete du texte EN
- [ ] Terminologie coherente (CMS, client area, etc.)
- [ ] Liens fonctionnels
- [ ] Image existante OK (pas de screenshot a refaire)
- [ ] frontmatter `translated: true` present
- [ ] Build OK

**Checklist relecture:**
- [ ] Titre et introduction clairs
- [ ] Section "Overview" - contexte projet
- [ ] Section "Next Gen" - explication rewrite
- [ ] Section "Features" - liste complete
- [ ] Section "Contributing" - appel a contribution

---

### Story 1.2: Validation finale

**Status:** TODO
**Priorite:** HAUTE

**Description:**
Validation finale avant de marquer l'Epic comme complete.

**Acceptance Criteria:**
- [ ] Test navigation EN: / affiche introduction EN
- [ ] Test navigation FR: /fr/ affiche introduction FR
- [ ] Pas de bandeau "Not translated" sur introduction EN
- [ ] Liens "Next" vers Installation fonctionnels
- [ ] Screenshot de validation (optionnel)

---

## Definition of Done

- [ ] introduction.md en EN de qualite production
- [ ] frontmatter `translated: true` present
- [ ] Build OK pour EN et FR
- [ ] Navigation fonctionnelle
- [ ] Pas de bandeau "Not translated"

---

## Dependances

**Requiert:**
- Epic 0: Setup & Infrastructure (COMPLETE)

**Bloque:**
- Rien (peut etre fait en parallele avec Epic 2-4)

---

## Notes techniques

### Frontmatter requis

```yaml
---
sidebar_position: 1
slug: /
translated: true
---
```

### Commande de test

```bash
npm run build && npm run serve -- --port 3001
# Verifier http://localhost:3001/ et http://localhost:3001/fr/
```

---

## Estimation

**Effort:** 0.5h (relecture + validation)
**Complexite:** Faible (deja traduit dans POC)
