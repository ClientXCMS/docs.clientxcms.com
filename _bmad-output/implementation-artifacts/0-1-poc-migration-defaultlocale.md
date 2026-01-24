# Story 0.1: POC migration defaultLocale

Status: done

## Story

As a **documentation maintainer**,
I want **to validate the i18n migration strategy with a proof of concept**,
so that **we can confirm the technical approach before full rollout**.

## Context

Tester le changement de `defaultLocale` de 'fr' vers 'en' sur 2-3 pages pour valider la faisabilite technique de la migration i18n.

## Acceptance Criteria

1. [x] **AC1**: docusaurus.config.ts modifie avec `defaultLocale: 'en'`
2. [x] **AC2**: Locale dropdown actif dans la navbar
3. [x] **AC3**: introduction.md traduit en EN
4. [x] **AC4**: requis.md traduit en EN
5. [x] **AC5**: Versions FR copiees dans i18n/fr/
6. [x] **AC6**: Build passe sans erreur pour EN et FR
7. [x] **AC7**: Test manuel: `/` = EN, `/fr/` = FR

## Tasks / Subtasks

- [x] Task 1: Modifier docusaurus.config.ts (AC: 1, 2)
  - [x] 1.1 Changer defaultLocale de 'fr' a 'en'
  - [x] 1.2 Ajouter localeConfigs pour EN et FR
  - [x] 1.3 Activer localeDropdown dans navbar

- [x] Task 2: Traduire les pages POC (AC: 3, 4)
  - [x] 2.1 Traduire introduction.md en anglais
  - [x] 2.2 Traduire requis.md en anglais

- [x] Task 3: Creer structure i18n/fr/ (AC: 5)
  - [x] 3.1 Creer dossier i18n/fr/docusaurus-plugin-content-docs/current/
  - [x] 3.2 Copier versions FR de introduction.md et requis.md
  - [x] 3.3 Mettre a jour _category_.json pour FR

- [x] Task 4: Valider le build (AC: 6, 7)
  - [x] 4.1 Executer npm run build
  - [x] 4.2 Tester navigation EN et FR
  - [x] 4.3 Verifier le language switcher

## Dev Notes

### Decisions techniques

- `localeConfigs` definit les labels pour chaque langue (English, Francais)
- La structure i18n/fr/ suit la convention Docusaurus
- Les _category_.json doivent avoir des labels dans la langue cible

### Fichiers modifies

```
docusaurus.config.ts
docs/introductions/introduction.md
docs/installation/requis.md
docs/introductions/_category_.json
docs/installation/_category_.json
docs/developpers/extensions/_category_.json
docs/extensions/_category_.json
i18n/fr/docusaurus-plugin-content-docs/current/introductions/introduction.md
i18n/fr/docusaurus-plugin-content-docs/current/installation/requis.md
i18n/fr/docusaurus-plugin-content-docs/current/introductions/_category_.json
i18n/fr/docusaurus-plugin-content-docs/current/installation/_category_.json
```

### References

- [Source: _bmad-output/planning-artifacts/epic-0-setup-infrastructure.md#Story 0.1]

## Dev Agent Record

### Agent Model Used

Claude (session manuelle)

### Completion Notes List

- POC valide avec succes
- Build OK pour EN et FR
- Navigation entre langues fonctionnelle

### Commit

`11b5627` - feat(i18n): POC migration defaultLocale FR -> EN
