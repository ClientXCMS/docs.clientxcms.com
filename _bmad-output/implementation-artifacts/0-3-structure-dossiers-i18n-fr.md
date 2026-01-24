# Story 0.3: Structure dossiers i18n/fr/

Status: done

## Story

As a **French-speaking user**,
I want **to access the complete French documentation**,
so that **I can read all content in my native language**.

## Context

Copier tout le contenu FR de `docs/` vers `i18n/fr/` pour une separation complete des locales. Cela permet d'avoir:
- `docs/` = contenu EN (a traduire progressivement)
- `i18n/fr/` = contenu FR complet

## Acceptance Criteria

1. [x] **AC1**: 132 fichiers MD copies dans `i18n/fr/docusaurus-plugin-content-docs/current/`
2. [x] **AC2**: Versions FR originales restaurees (introduction.md, requis.md)
3. [x] **AC3**: Build OK pour les deux locales
4. [x] **AC4**: `/fr/` affiche contenu FR complet

## Tasks / Subtasks

- [x] Task 1: Copier tous les fichiers docs (AC: 1)
  - [x] 1.1 Identifier tous les fichiers MD dans docs/
  - [x] 1.2 Copier vers i18n/fr/docusaurus-plugin-content-docs/current/
  - [x] 1.3 Preserver la structure des dossiers

- [x] Task 2: Restaurer les versions FR (AC: 2)
  - [x] 2.1 Restaurer introduction.md en FR dans i18n/fr/
  - [x] 2.2 Restaurer requis.md en FR dans i18n/fr/

- [x] Task 3: Valider le build (AC: 3, 4)
  - [x] 3.1 Executer npm run build
  - [x] 3.2 Verifier /fr/ affiche tout le contenu

## Dev Notes

### Statistiques

- 132 fichiers MD copies
- 146 fichiers au total (incluant _category_.json, images)
- 14,304 lignes ajoutees

### Structure creee

```
i18n/fr/docusaurus-plugin-content-docs/current/
  customers.md
  developpers/
    api.md
    commands.md
    extensions/
    software/
    themes/
  emails.txt
  extensions/
    addons/
    modules/
  getting_started/
  installation/
  introductions/
  invoices.md
  services.md
  settings/
```

### Separation des locales

Apres cette story:
- `docs/` contient le contenu EN (en cours de traduction)
- `i18n/fr/` contient le contenu FR complet et independant

### References

- [Source: _bmad-output/planning-artifacts/epic-0-setup-infrastructure.md#Story 0.3]

## Dev Agent Record

### Agent Model Used

Claude (session manuelle)

### Completion Notes List

- Copie complete de 132 fichiers
- Structure miroir preservee
- Build OK pour EN et FR

### Commit

`20a4c16` - feat(i18n): copy complete FR content to i18n structure
