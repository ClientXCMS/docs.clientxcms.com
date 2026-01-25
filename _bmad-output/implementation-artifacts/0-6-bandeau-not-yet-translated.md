# Story 0.6: Bandeau "Not yet translated"

Status: done

## Story

As a **user viewing an untranslated English page**,
I want **to see a clear indicator that the page is not yet translated**,
so that **I know French content is available and can navigate to it**.

## Context

Avec le nouveau defaultLocale EN, les pages non traduites affichent le contenu FR original. Il faut un bandeau automatique pour:
- Informer l'utilisateur que la page n'est pas encore traduite
- Fournir un lien vers la version FR

## Acceptance Criteria

1. [x] **AC1**: Composant NotTranslatedBanner cree
2. [x] **AC2**: DocItem/Layout swizzle pour integration automatique
3. [x] **AC3**: Affichage base sur frontmatter `translated: true`
4. [x] **AC4**: Lien vers version FR de la page
5. [x] **AC5**: Style warning discret mais visible
6. [x] **AC6**: Traductions FR du bandeau

## Tasks / Subtasks

- [x] Task 1: Creer le composant NotTranslatedBanner (AC: 1, 4, 5)
  - [x] 1.1 Creer src/components/NotTranslatedBanner/index.tsx
  - [x] 1.2 Ajouter les styles CSS module
  - [x] 1.3 Implementer le lien vers /fr/

- [x] Task 2: Integrer dans DocItem/Layout (AC: 2, 3)
  - [x] 2.1 Swizzle DocItem/Layout
  - [x] 2.2 Detecter frontmatter `translated: true`
  - [x] 2.3 Afficher bandeau si non traduit et locale EN

- [x] Task 3: Ajouter les traductions (AC: 6)
  - [x] 3.1 Ajouter messages EN par defaut
  - [x] 3.2 Ajouter traductions FR dans code.json

- [x] Task 4: Marquer les pages traduites (AC: 3)
  - [x] 4.1 Ajouter `translated: true` a introduction.md
  - [x] 4.2 Ajouter `translated: true` a requis.md

## Dev Notes

### Logique d'affichage

```
SI locale == 'en' ET frontmatter.translated != true
  ALORS afficher bandeau
SINON
  ne rien afficher
```

### Structure du composant

```tsx
// src/components/NotTranslatedBanner/index.tsx
export default function NotTranslatedBanner() {
  return (
    <div className={styles.banner}>
      <Translate id="banner.notTranslated.message">
        This page has not been translated yet.
      </Translate>
      <a href={frenchUrl}>
        <Translate id="banner.notTranslated.link">
          View in French
        </Translate>
      </a>
    </div>
  );
}
```

### Fichiers crees/modifies

```
src/components/NotTranslatedBanner/index.tsx       (nouveau)
src/components/NotTranslatedBanner/styles.module.css (nouveau)
src/theme/DocItem/Layout/index.tsx                 (swizzle)
src/theme/DocItem/Layout/styles.module.css         (nouveau)
docs/introductions/introduction.md                 (+1 ligne frontmatter)
docs/installation/requis.md                        (+1 ligne frontmatter)
i18n/fr/code.json                                  (traductions bandeau)
```

### References

- [Source: _bmad-output/planning-artifacts/epic-0-setup-infrastructure.md#Story 0.6]
- [Docusaurus Swizzling](https://docusaurus.io/docs/swizzling)

## Dev Agent Record

### Agent Model Used

Claude (session manuelle)

### Completion Notes List

- Bandeau avec style warning (orange/jaune)
- Detection automatique via frontmatter
- Lien dynamique vers version FR
- UX non intrusive

### Commit

`17f474e` - feat(i18n): add "Not yet translated" banner for untranslated pages
