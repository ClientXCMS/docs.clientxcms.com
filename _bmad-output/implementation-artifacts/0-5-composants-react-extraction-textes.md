# Story 0.5: Composants React - extraction textes

Status: done

## Story

As a **documentation user viewing the homepage**,
I want **the feature cards to be displayed in my language**,
so that **the entire user experience is localized**.

## Context

Les composants React (notamment HomepageFeatures) contiennent des textes en dur en francais. Il faut utiliser le composant `<Translate>` de Docusaurus pour les rendre traduisibles.

## Acceptance Criteria

1. [x] **AC1**: HomepageFeatures utilise `<Translate>` de Docusaurus
2. [x] **AC2**: 19 traductions FR ajoutees dans code.json
3. [x] **AC3**: Textes par defaut en EN dans le code
4. [x] **AC4**: Build OK

## Tasks / Subtasks

- [x] Task 1: Extraire les textes de HomepageFeatures (AC: 1, 3)
  - [x] 1.1 Importer Translate de @docusaurus/Translate
  - [x] 1.2 Convertir les textes FR en dur vers EN
  - [x] 1.3 Wrapper chaque texte avec <Translate>
  - [x] 1.4 Gerer les placeholders bold avec `values`

- [x] Task 2: Ajouter les traductions FR (AC: 2)
  - [x] 2.1 Ajouter les 19 entrees dans code.json
  - [x] 2.2 Traduire pour les 3 feature cards

- [x] Task 3: Valider (AC: 4)
  - [x] 3.1 Verifier le build
  - [x] 3.2 Tester EN et FR visuellement

## Dev Notes

### Composant Translate

```tsx
import Translate from '@docusaurus/Translate';

// Texte simple
<Translate id="homepage.feature.title">
  Default English text
</Translate>

// Avec placeholder
<Translate
  id="homepage.feature.description"
  values={{ bold: <strong>important</strong> }}
>
  {'Text with {bold} placeholder'}
</Translate>
```

### Feature cards traduites

1. **Revenue Management** - Gestion des revenus
2. **Installation & Configuration** - Installation & Configuration
3. **Client Area Customization** - Personnalisation de l'espace client

### Fichiers modifies

```
src/components/HomepageFeatures/index.tsx  (+98 -34 lignes)
i18n/fr/code.json                          (+76 lignes)
```

### References

- [Source: _bmad-output/planning-artifacts/epic-0-setup-infrastructure.md#Story 0.5]
- [Docusaurus Translate API](https://docusaurus.io/docs/docusaurus-core#translate)

## Dev Agent Record

### Agent Model Used

Claude (session manuelle)

### Completion Notes List

- 19 nouvelles traductions ajoutees
- Pattern Translate avec values pour bold
- Homepage entierement bilingue

### Commit

`b7bea2a` - feat(i18n): add Translate component to HomepageFeatures
