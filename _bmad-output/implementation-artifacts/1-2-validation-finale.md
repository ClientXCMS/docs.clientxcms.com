# Story 1.2: Validation finale

Status: ready-for-dev

## Story

As a documentation reader,
I want to navigate between EN and FR introduction pages seamlessly,
so that I can access ClientXCMS documentation in my preferred language.

## Acceptance Criteria

1. **AC1**: EN navigation functional at root path
   - URL `/` displays the English introduction page
   - Page title is "Introduction" (EN)
   - Content is fully in English

2. **AC2**: FR navigation functional with prefix
   - URL `/fr/` displays the French introduction page
   - Page title is "Introduction" (FR)
   - Content is fully in French

3. **AC3**: No "Not yet translated" banner on EN introduction
   - The banner component should NOT appear on introduction page
   - `translated: true` frontmatter is present and effective
   - Visual verification confirms banner absence

4. **AC4**: Language switcher functional
   - Switching from EN to FR redirects to `/fr/`
   - Switching from FR to EN redirects to `/`
   - No 404 errors during language switch

5. **AC5**: "Next" navigation links functional
   - EN: "Next" link points to Installation section (EN)
   - FR: "Suivant" link points to Installation section (FR)
   - Links work and lead to correct language version

6. **AC6**: Build verification
   - `npm run build` passes without errors
   - No broken link warnings for introduction pages
   - Both locales build successfully

## Tasks / Subtasks

- [ ] Task 1: Verify EN navigation (AC: #1)
  - [ ] 1.1 Start dev server with `npm run serve`
  - [ ] 1.2 Navigate to `http://localhost:3000/`
  - [ ] 1.3 Verify page displays in English
  - [ ] 1.4 Take screenshot for validation

- [ ] Task 2: Verify FR navigation (AC: #2)
  - [ ] 2.1 Navigate to `http://localhost:3000/fr/`
  - [ ] 2.2 Verify page displays in French
  - [ ] 2.3 Take screenshot for validation

- [ ] Task 3: Verify banner absence (AC: #3)
  - [ ] 3.1 Confirm no "Not yet translated" banner on EN page
  - [ ] 3.2 Verify `translated: true` in frontmatter
  - [ ] 3.3 Document verification

- [ ] Task 4: Test language switcher (AC: #4)
  - [ ] 4.1 On EN page, click language switcher to FR
  - [ ] 4.2 Verify redirect to `/fr/`
  - [ ] 4.3 On FR page, click language switcher to EN
  - [ ] 4.4 Verify redirect to `/`
  - [ ] 4.5 Confirm no 404 errors

- [ ] Task 5: Test "Next" navigation links (AC: #5)
  - [ ] 5.1 On EN page, click "Next" link at bottom
  - [ ] 5.2 Verify it leads to EN Installation page
  - [ ] 5.3 On FR page, click "Suivant" link at bottom
  - [ ] 5.4 Verify it leads to FR Installation page

- [ ] Task 6: Final build verification (AC: #6)
  - [ ] 6.1 Run `npm run build`
  - [ ] 6.2 Verify build completes without errors
  - [ ] 6.3 Check for broken link warnings

## Dev Notes

### Story Context

This is the FINAL validation story for Epic 1 (MVD - Introduction). Story 1-1 has already been completed with comprehensive proofreading and code review. This story is purely validation - no code changes expected unless issues are found.

### Previous Story Intelligence (Story 1-1)

From the completed story 1-1:
- **Image moved locally**: Dashboard preview now at `/static/img/next_gen/introductions/dashboard-preview.png`
- **Alt text added**: "ClientXCMS Next Gen dashboard preview" for accessibility
- **Meta description added**: SEO optimization in frontmatter
- **FR file updated**: Consistency fixes applied (emoji removed, formatting fixed)
- **Build verified**: 0 errors on EN introduction page

Key commits:
- `0d7d3e7` docs(i18n): code review fixes for story 1-1
- `5e8e61c` docs(i18n): complete story 1-1 proofreading EN introduction

### File Locations

| Purpose | Path |
|---------|------|
| EN Introduction | `docs/introductions/introduction.md` |
| FR Introduction | `i18n/fr/docusaurus-plugin-content-docs/current/introductions/introduction.md` |
| Banner component | `src/theme/DocItem/Layout/index.tsx` |
| Image asset | `static/img/next_gen/introductions/dashboard-preview.png` |

### Expected Frontmatter (EN)

```yaml
---
sidebar_position: 1
slug: /
translated: true
description: Official documentation for CLIENTXCMS, a Client Management System for game and server hosting providers. Learn how to install, configure, and use our CMS.
---
```

### Banner Logic Reference

From PRD (src/theme/DocItem/Layout/index.tsx):
```typescript
function useShowNotTranslatedBanner(): boolean {
  const {i18n} = useDocusaurusContext();
  const {frontMatter} = useDoc();

  const isDefaultLocale = i18n.currentLocale === i18n.defaultLocale;
  const isTranslated = frontMatter.translated === true;

  return isDefaultLocale && !isTranslated;
}
```

The banner should NOT show because:
1. `isDefaultLocale` = true (EN is default)
2. `isTranslated` = true (frontmatter set)
3. Result: `true && !true` = false (no banner)

### Test Commands

```bash
# Build verification
npm run build

# Start server for testing (production build)
npm run serve -- --port 3001

# Or use development server
npm run start

# Test URLs:
# EN: http://localhost:3001/
# FR: http://localhost:3001/fr/
```

### Validation Approach

This is a VALIDATION story, not implementation. Use MCP Chrome DevTools for:
1. Navigate to URLs
2. Take screenshots
3. Click navigation elements
4. Verify visual state

No code changes should be needed. If issues are found:
1. Document the issue in Dev Notes
2. Create a fix commit if simple
3. Or escalate to PM if complex

### Project Structure Notes

- **Docusaurus version**: 3.9
- **Default locale**: `en`
- **Route base path**: `/` (docs served at root)
- **Language switcher**: Located in navbar (top right)

### Architecture Compliance

- No code changes expected (validation-only story)
- If fixes needed, follow Docusaurus 3 patterns
- Maintain frontmatter consistency with Story 1-1

### Testing Requirements

- Visual verification via browser
- Manual navigation testing
- Build success verification
- MCP Chrome DevTools for automated screenshot capture

### Known Considerations

1. **Installation section may not be translated yet** - "Next" link functionality depends on Installation pages existing in EN. May show untranslated banner on next page (expected behavior).

2. **Language switcher behavior** - Uses Docusaurus built-in locale dropdown. Should work out of box.

3. **Broken links in other pages** - Build may show warnings for other FR pages (pre-existing, not related to this story). Focus only on introduction pages.

### References

- [Source: _bmad-output/planning-artifacts/epic-1-mvd-introduction.md#Story 1.2]
- [Source: _bmad-output/planning-artifacts/i18n-prd.md#Section 5 - Architecture i18n]
- [Source: _bmad-output/implementation-artifacts/1-1-relecture-introduction-md.md]
- [Docusaurus i18n Tutorial](https://docusaurus.io/docs/i18n/tutorial)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

