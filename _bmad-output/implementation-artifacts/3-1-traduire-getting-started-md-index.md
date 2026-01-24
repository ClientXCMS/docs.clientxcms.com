# Story 3.1: Traduire getting_started.md (index)

Status: ready-for-dev

## Story

As a documentation reader,
I want the English Getting Started index page to be properly translated,
so that international users can access the onboarding guide with a clear introduction.

## Acceptance Criteria

1. **AC1**: Complete EN translation
   - All French text translated to natural English
   - Title "Comment bien demarrer" translated appropriately
   - Introduction paragraph translated with natural phrasing
   - No literal translation - idiomatic English

2. **AC2**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position: 3` preserved

3. **AC3**: Links functional (if any)
   - All internal links to sub-pages functional
   - Navigation to next pages works

4. **AC4**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/getting_started` (EN)
   - Page renders correctly at `/fr/getting_started` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [ ] Task 1: Create EN file with frontmatter (AC: #2)
  - [ ] 1.1 Create directory if not exists: `docs/i18n/en/docusaurus-plugin-content-docs/current/getting_started/`
  - [ ] 1.2 Create file `getting_started.md` with frontmatter
  - [ ] 1.3 Add `translated: true`
  - [ ] 1.4 Add `sidebar_position: 3`

- [ ] Task 2: Translate content (AC: #1)
  - [ ] 2.1 Translate title "Comment bien demarrer" to "Getting Started"
  - [ ] 2.2 Translate "Introduction" heading
  - [ ] 2.3 Translate welcome paragraph with natural English phrasing
  - [ ] 2.4 Ensure terminology consistency with Epic 2 translations

- [ ] Task 3: Build and test (AC: #4)
  - [ ] 3.1 Run `npm run build`
  - [ ] 3.2 Run `npm run serve` and test EN URL
  - [ ] 3.3 Verify no "Not translated" banner
  - [ ] 3.4 Verify FR page still works

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| FR Source file | `docs/getting_started/getting_started.md` |
| EN Target file | `docs/i18n/en/docusaurus-plugin-content-docs/current/getting_started/getting_started.md` |

### Current State Analysis

The FR file exists at `docs/getting_started/getting_started.md` and contains:

```markdown
---
sidebar_position: 3
---
# Comment bien demarrer
## Introduction
Bienvenue dans le processus de demarrage de votre espace client. Nous allons vous guider a travers les etapes necessaires pour configurer votre espace client et commencer a utiliser les services de la plateforme. Nous vous recommandons de suivre les etapes dans l'ordre pour une meilleure experience utilisateur.
```

- **File size**: ~0.4 KB (very short - 7 lines)
- **Frontmatter**: Has `sidebar_position: 3`, MISSING `translated: true`
- **Content**: Title + Introduction heading + 1 paragraph
- **Links**: None in current content (sub-pages linked via Docusaurus sidebar)

### Translation Reference

| French | English |
|--------|---------|
| Comment bien demarrer | Getting Started |
| Introduction | Introduction |
| Bienvenue dans le processus de demarrage | Welcome to the setup process |
| votre espace client | your client area |
| les etapes necessaires | the necessary steps |
| configurer votre espace client | configure your client area |
| les services de la plateforme | the platform's services |
| pour une meilleure experience utilisateur | for a better user experience |

### Terminology Consistency (from Epic 2)

Maintain consistent terminology from Epic 2 translations:
- "client area" (espace client)
- "admin panel" (panneau admin)
- "service" (service)
- "product" (produit)
- "platform" (plateforme)

### Previous Story Learnings (Epic 2)

From completed stories in Epic 2:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Natural English**: Avoid literal translation - use idiomatic phrasing
3. **Build verification**: Always run `npm run build` before marking complete
4. **No emoji**: EN pages should not have emoji per project standards
5. **Preserve structure**: Keep same heading levels and organization

### Git Intelligence (Recent Commits)

Recent commits show pattern:
- `473e640` - Story 2-8 created (upgrade.md)
- `354b0f4` - Plesk page translated
- Pattern: `docs(i18n): translate X page to English`

Commit message for this story should be:
```
docs(i18n): translate Getting Started index page to English
```

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/getting_started
# FR: http://localhost:3001/fr/getting_started
```

### Project Structure Notes

- **Docusaurus version**: 3.9
- **Default locale**: `en`
- **Route base path**: `/` (docs served at root)
- **EN files location**: `docs/` directory (or `docs/i18n/en/...`)
- **FR files location**: Source files in `docs/` with translations in `i18n/fr/`

### Architecture Compliance

- No code changes required (content-only story)
- Frontmatter must follow Docusaurus 3 format
- Standard markdown format (no MDX components in this file)
- No admonitions or special components

### Testing Requirements

- Visual verification of page rendering
- Navigation to sub-pages works
- Build success verification
- No automated tests needed (content review)

### Known Considerations

1. **Simple file**: This is the simplest file in Epic 3 - good starting point for the epic
2. **Index page**: Sets the tone for the entire Getting Started section
3. **Sub-page navigation**: Docusaurus handles sidebar navigation automatically

### File Structure for Epic 3

This is story 3.1 (first of 9). The complete Getting Started section:
1. getting_started.md (index) - THIS STORY
2. first_login.md
3. personalization.md
4. server.md
5. products.md
6. payments.md
7. accounts.md
8. service.md
9. finish.md

### Expected Translation Output

```markdown
---
sidebar_position: 3
translated: true
---
# Getting Started
## Introduction
Welcome to the setup process for your client area. We will guide you through the necessary steps to configure your client area and start using the platform's services. We recommend following the steps in order for a better user experience.
```

### References

- [Source: _bmad-output/planning-artifacts/epic-3-mvd-getting-started.md#Story 3.1]
- [Source: _bmad-output/implementation-artifacts/2-4-traduire-selfhosted-md.md] - Pattern reference
- [Source: docs/getting_started/getting_started.md] - FR source file
- [Docusaurus i18n](https://docusaurus.io/docs/i18n/introduction)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
