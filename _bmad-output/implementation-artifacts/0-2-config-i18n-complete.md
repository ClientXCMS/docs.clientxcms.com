# Story 0.2: Config i18n complete

Status: done

## Story

As a **documentation user**,
I want **the UI elements (navbar, footer, theme) to be properly translated**,
so that **the interface is fully localized in French when viewing FR content**.

## Context

Generer et configurer tous les fichiers de traduction UI pour que l'interface Docusaurus soit entierement traduite en francais.

## Acceptance Criteria

1. [x] **AC1**: `npm run write-translations -- --locale fr` execute
2. [x] **AC2**: code.json avec traductions FR pour le theme
3. [x] **AC3**: navbar.json avec labels FR pour la navigation
4. [x] **AC4**: footer.json avec labels FR pour le footer
5. [x] **AC5**: current.json avec categories sidebar FR
6. [x] **AC6**: Labels EN dans docusaurus.config.ts comme defaut

## Tasks / Subtasks

- [x] Task 1: Generer les fichiers de traduction (AC: 1)
  - [x] 1.1 Executer npm run write-translations -- --locale fr
  - [x] 1.2 Verifier les fichiers generes

- [x] Task 2: Traduire les fichiers UI (AC: 2, 3, 4, 5)
  - [x] 2.1 Traduire code.json (92 entrees)
  - [x] 2.2 Traduire navbar.json
  - [x] 2.3 Traduire footer.json
  - [x] 2.4 Traduire current.json (categories sidebar)
  - [x] 2.5 Ajouter options.json pour le blog

- [x] Task 3: Configurer les labels EN par defaut (AC: 6)
  - [x] 3.1 Mettre a jour docusaurus.config.ts avec labels EN

## Dev Notes

### Fichiers de traduction crees

```
i18n/fr/code.json                                   (364 lignes, 92+ traductions)
i18n/fr/docusaurus-plugin-content-blog/options.json (14 lignes)
i18n/fr/docusaurus-plugin-content-docs/current.json (90 lignes)
i18n/fr/docusaurus-theme-classic/footer.json        (98 lignes)
i18n/fr/docusaurus-theme-classic/navbar.json        (50 lignes)
```

### Structure des traductions

- `code.json`: Textes du theme (boutons, labels, messages)
- `navbar.json`: Items de navigation
- `footer.json`: Liens et textes du footer
- `current.json`: Labels des categories dans la sidebar

### References

- [Source: _bmad-output/planning-artifacts/epic-0-setup-infrastructure.md#Story 0.2]
- [Docusaurus i18n Tutorial](https://docusaurus.io/docs/i18n/tutorial)

## Dev Agent Record

### Agent Model Used

Claude (session manuelle)

### Completion Notes List

- 630 lignes ajoutees au total
- Toutes les traductions UI completes
- Build OK

### Commit

`6e6dc58` - feat(i18n): add complete French translation files for UI elements
