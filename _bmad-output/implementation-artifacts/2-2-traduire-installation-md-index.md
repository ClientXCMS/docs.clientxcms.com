# Story 2.2: Traduire installation.md (index)

Status: ready-for-dev

## Story

As a documentation reader,
I want the English Installation index page to be properly translated,
so that international users can navigate to the appropriate installation method for their needs.

## Acceptance Criteria

1. **AC1**: Complete EN translation
   - All French text translated to natural English
   - Title "Installation" remains as-is (same in EN)
   - Technical terminology accurate (Cloud, Self-hosted, etc.)
   - No literal translation - natural English phrasing

2. **AC2**: Links remain functional
   - Link to clientxcms.com/cloud works
   - Link to clientxcms.com/pricing works
   - Internal link to ./selfhosted works
   - DocCardList component renders correctly

3. **AC3**: Frontmatter complete
   - `translated: true` added to frontmatter
   - Component imports preserved

4. **AC4**: Admonitions correct
   - `:::success` block translated
   - `:::warning` block translated
   - Admonitions render properly in EN

5. **AC5**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/installation` (EN)
   - Page renders correctly at `/fr/installation` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [ ] Task 1: Add frontmatter with translated flag (AC: #3)
  - [ ] 1.1 Add `---` block at top of file
  - [ ] 1.2 Add `translated: true`

- [ ] Task 2: Translate introduction paragraph (AC: #1)
  - [ ] 2.1 Translate "L'espace client peut etre installe..." to English
  - [ ] 2.2 Use "Cloud" vs "Self-hosted" terminology

- [ ] Task 3: Translate Cloud section (AC: #1, #4)
  - [ ] 3.1 Translate "L'installation la plus simple..." paragraph
  - [ ] 3.2 Translate ":::success Remarque" to ":::success Note"
  - [ ] 3.3 Translate success admonition content
  - [ ] 3.4 Translate "L'offre cloud est disponible..." paragraph

- [ ] Task 4: Translate Self-hosted section (AC: #1, #4)
  - [ ] 4.1 Translate "Autohebergement" heading to "Self-hosted"
  - [ ] 4.2 Translate "L'installation en autohebergement..." paragraph
  - [ ] 4.3 Translate ":::warning" admonition content
  - [ ] 4.4 Preserve ./selfhosted link

- [ ] Task 5: Verify links (AC: #2)
  - [ ] 5.1 Verify https://clientxcms.com/cloud link
  - [ ] 5.2 Verify https://clientxcms.com/pricing link
  - [ ] 5.3 Verify ./selfhosted internal link

- [ ] Task 6: Build and test (AC: #5)
  - [ ] 6.1 Run `npm run build`
  - [ ] 6.2 Run `npm run serve` and test EN URL
  - [ ] 6.3 Verify DocCardList renders correctly
  - [ ] 6.4 Verify no "Not translated" banner

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN Target file | `docs/installation/installation.md` |
| FR Source file | `i18n/fr/docusaurus-plugin-content-docs/current/installation/installation.md` |

### Current State Analysis

The EN file currently contains French text (not yet translated). This is a direct copy from the FR source that needs translation.

- **File size**: ~1.3 KB (short page)
- **Frontmatter**: MISSING - needs to be added with `translated: true`
- **Components**: Uses `DocCardList` from '@theme/DocCardList'
- **Admonitions**: 2 admonitions (:::success and :::warning)

### Translation Reference

| French | English |
|--------|---------|
| L'espace client | The client area |
| autohébergement | self-hosted |
| serveurs de CLIENTXCMS | CLIENTXCMS servers |
| Remarque | Note |
| accreditation validée | validated accreditation |
| serveur web | web server |
| base de données | database |
| connaissances en administration système | system administration knowledge |

### Expected EN Content Structure

```markdown
---
translated: true
---

import DocCardList from '@theme/DocCardList';

# Installation

The client area can be installed in two different ways: self-hosted or on CLIENTXCMS servers. This page will guide you in choosing the installation method that best suits your needs.

<DocCardList />

## Cloud

The simplest installation method, allowing automatic setup in just a few minutes. Simply go to [this page](https://clientxcms.com/cloud) and follow the instructions.

:::success Note
You can switch your extensions at any time from your client area.
:::

The cloud offering is available for all Premium and Enterprise licenses. You can find more information about cloud offerings [here](https://clientxcms.com/pricing).

## Self-hosted

Self-hosted installation is more complex and requires validated accreditation. You will need a web server, a database, and PHP. You can follow the self-hosted installation instructions [here](./selfhosted).

:::warning
Self-hosted installation requires system administration knowledge. If you are not confident, we recommend opting for Cloud installation.
:::
```

### Previous Story Learnings (Story 2-1)

From the completed story 2-1 (requis.md proofreading):

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Terminology**: Use "Self-hosted" (not "On-Premise") for installation type
3. **Admonitions**: `:::success` and `:::warning` syntax works in Docusaurus 3
4. **Links**: Keep relative paths (./selfhosted) for internal links
5. **Build verification**: Always run `npm run build` before marking complete
6. **No emoji**: EN pages should not have emoji per project standards

### Git Intelligence (Recent Commits)

Recent commits show:
- `a8cdc8e` - Story 2-1 completed (requis.md proofreading)
- `e2d5365` - Fixed locale switch button 404
- `20553f5` - Converted absolute URLs to relative paths

Learnings applicable to this story:
- Use relative paths for all internal links
- Test locale switcher after translation

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/installation
# FR: http://localhost:3001/fr/installation
```

### Project Structure Notes

- **Docusaurus version**: 3.9
- **Default locale**: `en`
- **Route base path**: `/` (docs served at root)
- **EN files location**: `docs/` directory
- **FR files location**: `i18n/fr/docusaurus-plugin-content-docs/current/`

### Architecture Compliance

- No code changes required (content-only story)
- Frontmatter must follow Docusaurus 3 format
- DocCardList component import must be preserved
- MDX format with JSX component
- Admonitions use Docusaurus syntax (:::type)

### Testing Requirements

- Visual verification of page rendering
- DocCardList component renders installation sub-pages
- Link click testing
- Build success verification
- Admonition rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **DocCardList**: This component auto-generates cards for all child pages in the installation folder. Do not modify or remove.

2. **Other installation pages**: Links to child pages (cloud.md, selfhosted.md, etc.) will work but those pages may show "Not translated" banner until their respective stories are completed.

3. **Admonition types**:
   - `:::success` renders as green box with checkmark
   - `:::warning` renders as yellow box with warning icon

4. **External links**: Links to clientxcms.com should remain as-is (external site).

### References

- [Source: _bmad-output/planning-artifacts/epic-2-mvd-installation.md#Story 2.2]
- [Source: _bmad-output/implementation-artifacts/2-1-relecture-requis-md.md] - Pattern reference
- [Source: docs/installation/installation.md] - Current EN file (needs translation)
- [Source: i18n/fr/.../installation/installation.md] - FR source reference
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)
- [Docusaurus DocCardList](https://docusaurus.io/docs/sidebar/autogenerated#category-index-convention)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
