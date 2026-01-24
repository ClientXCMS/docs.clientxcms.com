# Story 2.1: Relecture requis.md

Status: review

## Story

As a documentation reader,
I want the English Requirements page to be polished and professional,
so that international users understand the technical prerequisites for installing ClientXCMS.

## Acceptance Criteria

1. **AC1**: Complete proofreading of the EN text
   - Grammar and spelling verified
   - Natural English phrasing (not literal translation)
   - Technical terminology accurate (PHP, MariaDB, extensions, etc.)

2. **AC2**: Terminology consistency validated
   - "SaaS" vs "On-Premise" used consistently
   - PHP extension names correct (php-dom, php-gd, etc.)
   - Database terminology matches industry standards
   - Units consistent (GB not Go, RAM terminology)

3. **AC3**: All internal links functional
   - Link to selfhosted page works
   - Link to plesk page works
   - Link to docker page works
   - All links use relative paths (not absolute URLs)

4. **AC4**: External links verified
   - CTXHosting link (https://ctxhosting.fr) accessible
   - ClientXCMS pricing link functional
   - PHP supported versions link functional

5. **AC5**: Frontmatter complete
   - `translated: true` present
   - `sidebar_position: 1` correct
   - No unnecessary frontmatter

6. **AC6**: Admonitions correct
   - `:::info` blocks render properly
   - `:::warning` blocks render properly
   - Admonition content is clear and helpful

7. **AC7**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/installation/requis` (EN)
   - Page renders correctly at `/fr/installation/requis` (FR)
   - No "Not yet translated" banner appears

## Tasks / Subtasks

- [x] Task 1: Review EN translation quality (AC: #1)
  - [x] 1.1 Read through entire page for grammar/spelling
  - [x] 1.2 Check for awkward literal translations
  - [x] 1.3 Verify natural English flow in technical sections
  - [x] 1.4 Verify PHP extensions descriptions are accurate

- [x] Task 2: Validate terminology (AC: #2)
  - [x] 2.1 Check "SaaS Installation" section terminology
  - [x] 2.2 Check "On-Premise Installation" section terminology
  - [x] 2.3 Verify PHP version references (8.1, 8.3)
  - [x] 2.4 Verify database section terminology (MariaDB, MySQL, PostgreSQL)
  - [x] 2.5 Ensure units are in English format (GB, not Go)

- [x] Task 3: Verify internal links (AC: #3)
  - [x] 3.1 Test link to `./selfhosted` page
  - [x] 3.2 Test link to `./plesk` page
  - [x] 3.3 Test link to `./docker` page
  - [x] 3.4 Verify all links use relative paths

- [x] Task 4: Verify external links (AC: #4)
  - [x] 4.1 Test CTXHosting link (https://ctxhosting.fr)
  - [x] 4.2 Test ClientXCMS pricing link
  - [x] 4.3 Test PHP supported versions link

- [x] Task 5: Validate frontmatter (AC: #5)
  - [x] 5.1 Confirm `translated: true` present
  - [x] 5.2 Confirm `sidebar_position: 1` correct
  - [x] 5.3 Verify no extra/unnecessary frontmatter

- [x] Task 6: Verify admonitions (AC: #6)
  - [x] 6.1 Check CTXHosting info block renders correctly
  - [x] 6.2 Check PHP EOL warning block renders correctly
  - [x] 6.3 Check production recommendation info block renders correctly

- [x] Task 7: Build and test (AC: #7)
  - [x] 7.1 Run `npm run build`
  - [x] 7.2 Run `npm run serve` and test EN URL
  - [x] 7.3 Test FR URL for comparison
  - [x] 7.4 Verify no "Not translated" banner

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN Target file | `docs/installation/requis.md` |
| FR Source file | `i18n/fr/docusaurus-plugin-content-docs/current/installation/requis.md` |

### Current State Analysis

The EN translation already exists and has `translated: true` in frontmatter. This was done during the POC phase (Epic 0). The current state:

- **File size**: ~5.2 KB
- **Frontmatter**: `sidebar_position: 1`, `translated: true`
- **Structure**: Complete with all sections translated
- **Quality**: Good overall, needs proofreading pass

### Differences Observed Between FR and EN

| Aspect | FR Source | EN Target | Action Needed |
|--------|-----------|-----------|---------------|
| Title | "Prerequis" | "Requirements" | OK - correct translation |
| Emoji | Uses emoji in links | No emoji | OK - project standard |
| Units | "25 Go", "2 Go" | "25 GB", "2 GB" | OK - correct localization |
| Links | Uses relative paths | Uses relative paths | OK - consistent |

### Key Technical Content to Verify

1. **PHP Requirements**
   - Minimum: PHP 8.1+
   - Recommended: PHP 8.3+
   - EOL warning: PHP 8.1 EOL January 2026
   - Security fixes: PHP 8.3 until December 31, 2027

2. **PHP Extensions List**
   - Essential: php-dom, php-gd, php-intl, php-libxml, php-simplexml, php-zip
   - Laravel standard: php-common, php-curl, php-mbstring, php-bcmath, php-openssl, php-pdo, php-pdo-mysql, php-xml
   - Recommended: php-fpm, php-opcache

3. **Database Requirements**
   - Recommended: MariaDB 10.11+
   - Supported: MySQL 8.0.38+, PostgreSQL 15+, SQLite (dev only)

4. **System Requirements**
   - OS: Linux (Ubuntu 22.04+, Debian 11+, CentOS 8+) or Windows Server
   - Disk: 25 GB minimum
   - RAM: 2 GB minimum, 4 GB recommended

### Terminology Reference

| French | English (Expected) | Status |
|--------|-------------------|--------|
| Prerequis | Requirements | OK |
| autohébergement | self-hosted / on-premise | OK |
| Go (gigaoctets) | GB (gigabytes) | OK |
| Memoire vive | RAM | OK |
| Espace disque | Disk Space | OK |
| extensions PHP | PHP extensions | OK |
| base de donnees | database | OK |

### Previous Story Learnings (Epic 1)

From story 1-1 and 1-2:

1. **Image hosting**: All images must be local (moved from external URLs)
2. **Alt text**: Required for accessibility
3. **Meta description**: Optional but good for SEO
4. **Emoji removal**: FR pages may have emoji - EN pages should not per project standards
5. **Build verification**: Always run `npm run build` before marking complete
6. **Link format**: Use native `<a>` for locale switches, `<Link>` for internal navigation

### Build Commands

```bash
# Install dependencies if needed
npm install

# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/installation/requis
# FR: http://localhost:3001/fr/installation/requis
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
- No React components to modify
- Bandeau "Not translated" should NOT appear (since `translated: true`)

### Testing Requirements

- Visual verification of page rendering
- Link click testing
- Build success verification
- Admonition rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **Other installation pages not translated yet** - Links to `./selfhosted`, `./plesk`, `./docker` will lead to pages that may show "Not translated" banner. This is expected and will be fixed in stories 2-4, 2-5, 2-6.

2. **Code blocks** - All `bash` code blocks should remain unchanged (commands are language-agnostic).

3. **Admonitions** - The `:::info` and `:::warning` syntax should render correctly in Docusaurus 3.

### References

- [Source: _bmad-output/planning-artifacts/epic-2-mvd-installation.md#Story 2.1]
- [Source: _bmad-output/implementation-artifacts/1-1-relecture-introduction-md.md] - Pattern reference
- [Source: docs/installation/requis.md] - Current EN file
- [Source: i18n/fr/.../installation/requis.md] - FR source reference
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

None - content review story with no code changes.

### Completion Notes List

- 2026-01-24: Completed full proofreading of docs/installation/requis.md
- Translation quality verified: grammar, spelling, natural English phrasing all correct
- Terminology validated: SaaS/On-Premise consistent, PHP extensions accurate, units in GB format
- All internal links verified: ./selfhosted, ./plesk, ./docker all use relative paths and target files exist
- All external links verified accessible: ctxhosting.fr, clientxcms.com/pricing, php.net/supported-versions.php
- Frontmatter validated: `translated: true` and `sidebar_position: 1` present
- All 3 admonitions render correctly (CTXHosting info, PHP 8.1 EOL warning, Production Recommendation info)
- Build successful for both EN and FR locales
- Pages render correctly at /installation/requis (EN) and /fr/installation/requis (FR)
- No "Not yet translated" banner appears on either locale

### File List

- docs/installation/requis.md (reviewed, no changes needed)

### Change Log

- 2026-01-24: Story 2-1 completed - EN translation of requis.md verified and validated

