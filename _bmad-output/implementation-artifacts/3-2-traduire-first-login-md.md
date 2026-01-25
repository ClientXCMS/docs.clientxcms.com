# Story 3.2: Traduire first_login.md

Status: done

## Story

As a documentation reader,
I want the English First Login page to be properly translated,
so that international users can understand how to access the admin panel and activate their first extensions.

## Acceptance Criteria

1. **AC1**: Complete EN translation (~1.5 KB)
   - All French text translated to natural English
   - Title "Premiere connexion" translated to "First Login"
   - Technical terminology accurate
   - No literal translation - natural English phrasing

2. **AC2**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position: 1` preserved

3. **AC3**: Screenshots unchanged
   - Both existing screenshots kept (FR interface acceptable for MVP)
   - Image paths unchanged (`/img/next_gen/Installation/Cloud/email.png`, `/img/next_gen/extensions/image_1.png`)
   - Alt text in English

4. **AC4**: Admonition translated
   - `:::info TIPS` block translated
   - Keyboard shortcut `Ctrl + /` preserved
   - Admonition renders properly in EN

5. **AC5**: Links functional
   - Internal link `/extensions/` works
   - Internal link `/getting_started/server` works

6. **AC6**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/getting_started/first_login` (EN)
   - Page renders correctly at `/fr/getting_started/first_login` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [x] Task 1: Translate EN file in /docs/ (AC: #2)
  - [x] 1.1 Modify `docs/getting_started/first_login.md` with EN content (default locale)
  - [x] 1.2 Preserve `sidebar_position: 1`
  - [x] 1.3 FR version already exists in `i18n/fr/.../getting_started/first_login.md`

- [x] Task 2: Translate header and intro section (AC: #1, #3)
  - [x] 2.1 Translate title "Premiere connexion" to "First Login"
  - [x] 2.2 Translate intro paragraph about login credentials
  - [x] 2.3 Keep image path unchanged

- [x] Task 3: Translate Dashboard paragraph (AC: #1, #4)
  - [x] 3.1 Translate Dashboard description paragraph
  - [x] 3.2 Translate :::info TIPS admonition
  - [x] 3.3 Preserve keyboard shortcut `Ctrl + /`

- [x] Task 4: Translate extensions section (AC: #1, #3, #5)
  - [x] 4.1 Translate "Activer les premieres extensions" heading to "Activate your first extensions"
  - [x] 4.2 Translate extension activation instructions
  - [x] 4.3 Translate Pterodactyl example
  - [x] 4.4 Keep image path unchanged
  - [x] 4.5 Verify links to `/extensions/` and `/getting_started/server`

- [x] Task 5: Build and test (AC: #6)
  - [x] 5.1 Run `npm run build`
  - [x] 5.2 Run `npm run serve` and test EN URL
  - [x] 5.3 Verify no "Not translated" banner
  - [x] 5.4 Verify FR page still works
  - [x] 5.5 Test both internal links

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN file (default locale) | `docs/getting_started/first_login.md` |
| FR file (i18n) | `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/first_login.md` |

### Current State Analysis

The FR file exists at `docs/getting_started/first_login.md` and contains:

```markdown
---
sidebar_position: 1
---
# Premiere connexion
Une fois que vous avez recu vos identifiants de connexion, vous pouvez vous connecter a l'administration de votre espace client en utilisant les informations envoyees par e-mail.

![Email](/img/next_gen/Installation/Cloud/email.png)

Vous vous retrouvez sur la page "Dashboard" de votre espace client. Cette page vous permet de voir un apercu de votre espace client et de naviguer vers les differentes sections de l'administration.

:::info TIPS
Vous pouvez rechercher facilement une page ou une information en utilisant la barre de recherche en haut a droite de la page ou en utilisant les raccourcis clavier `Ctrl + /`.
:::

# Activer les premieres extensions
Pour commencer, vous devez activer les premieres extensions de votre espace client. Pour cela, rendez-vous dans les `Parametres` puis dans `Extensions`.

Vous pouvez activer les extensions que vous souhaitez utiliser en cliquant sur le bouton `Activer`.

Si vous avez des extensions supplementaires avec votre licence, vous pouvez les activer par la meme occasion.

Par exemple, si vous souhaitez livrer des produits Pterodactyl, vous devez activer l'extension Pterodactyl.
![img](/img/next_gen/extensions/image_1.png)

Plus d'informations sur les extensions sont disponibles [ici](/extensions/).

Vous pouvez passer a la configuration de vos premiers serveurs en suivant les instructions [ici](/getting_started/server).
```

- **File size**: ~1.5 KB (27 lines)
- **Frontmatter**: Has `sidebar_position: 1`, MISSING `translated: true`
- **Images**: 2 screenshots (email.png, image_1.png)
- **Admonitions**: 1 info block (TIPS)
- **Internal links**: 2 (`/extensions/`, `/getting_started/server`)
- **Headings**: 2 h1 headings

### Translation Reference

| French | English |
|--------|---------|
| Premiere connexion | First Login |
| Une fois que vous avez recu vos identifiants de connexion | Once you have received your login credentials |
| vous pouvez vous connecter a l'administration | you can log in to the administration |
| votre espace client | your client area |
| les informations envoyees par e-mail | the information sent by email |
| Vous vous retrouvez sur la page | You will find yourself on the |
| Dashboard | Dashboard |
| Cette page vous permet de voir un apercu | This page allows you to see an overview |
| naviguer vers les differentes sections | navigate to the different sections |
| l'administration | the administration |
| Vous pouvez rechercher facilement | You can easily search |
| une page ou une information | a page or information |
| la barre de recherche | the search bar |
| en haut a droite de la page | in the top right of the page |
| les raccourcis clavier | the keyboard shortcut |
| Activer les premieres extensions | Activate your first extensions |
| Pour commencer | To get started |
| vous devez activer | you need to activate |
| les premieres extensions | the first extensions |
| rendez-vous dans | go to |
| Parametres | Settings |
| Extensions | Extensions |
| en cliquant sur le bouton | by clicking the |
| Activer | Activate |
| extensions supplementaires | additional extensions |
| votre licence | your license |
| par la meme occasion | at the same time |
| Par exemple | For example |
| si vous souhaitez livrer | if you want to provision |
| des produits Pterodactyl | Pterodactyl products |
| Plus d'informations | More information |
| sont disponibles | is available |
| Vous pouvez passer a | You can proceed to |
| la configuration de vos premiers serveurs | the configuration of your first servers |
| en suivant les instructions | by following the instructions |

### Expected EN Content

```markdown
---
sidebar_position: 1
translated: true
---
# First Login

Once you have received your login credentials, you can log in to your client area administration using the information sent by email.

![Email](/img/next_gen/Installation/Cloud/email.png)

You will find yourself on the "Dashboard" page of your client area. This page allows you to see an overview of your client area and navigate to the different sections of the administration.

:::info TIPS
You can easily search for a page or information using the search bar in the top right of the page or by using the keyboard shortcut `Ctrl + /`.
:::

# Activate your first extensions

To get started, you need to activate the first extensions of your client area. To do this, go to `Settings` then `Extensions`.

You can activate the extensions you want to use by clicking the `Activate` button.

If you have additional extensions with your license, you can activate them at the same time.

For example, if you want to provision Pterodactyl products, you need to activate the Pterodactyl extension.
![Extensions](/img/next_gen/extensions/image_1.png)

More information on extensions is available [here](/extensions/).

You can proceed to the configuration of your first servers by following the instructions [here](/getting_started/server).
```

### Terminology Consistency (from Epic 2 & Story 3-1)

Maintain consistent terminology:
- "client area" (espace client)
- "admin panel" / "administration" (panneau admin)
- "Dashboard" (Dashboard - keep as-is)
- "Settings" (Parametres)
- "Extensions" (Extensions - keep as-is)
- "Activate" (Activer)

### Previous Story Learnings (Stories 2-x, 3-1)

From completed stories:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Natural English**: Avoid literal translation - use idiomatic phrasing
3. **Build verification**: Always run `npm run build` before marking complete
4. **No emoji**: EN pages should not have emoji per project standards
5. **Preserve structure**: Keep same heading levels and organization
6. **Admonitions**: `:::info` syntax works in Docusaurus 3, translate content inside
7. **Internal links**: Keep paths unchanged (`/extensions/`, `/getting_started/server`)
8. **Image paths**: Keep unchanged, update alt text to English
9. **Screenshots FR acceptable**: Per epic guidelines, FR interface screenshots are acceptable for MVP

### Git Intelligence (Recent Commits)

Recent commits show pattern:
- `c6cfc51` - Story 3-1 created
- `6d2b9de` - Docker page translated
- `354b0f4` - Plesk page translated

Commit message for this story should be:
```
docs(i18n): translate First Login page to English
```

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/getting_started/first_login
# FR: http://localhost:3001/fr/getting_started/first_login
```

### Project Structure Notes

- **Docusaurus version**: 3.9
- **Default locale**: `en`
- **Route base path**: `/` (docs served at root)
- **EN files location**: `/docs/` (default locale - NO i18n/en/ folder!)
- **FR files location**: `/i18n/fr/docusaurus-plugin-content-docs/current/`

### Architecture Compliance

- No code changes required (content-only story)
- Frontmatter must follow Docusaurus 3 format
- Standard markdown format (no MDX components in this file)
- Admonitions use Docusaurus syntax (:::type)
- Images use standard markdown syntax

### Testing Requirements

- Visual verification of page rendering
- Both images render correctly
- Link click testing (2 internal links)
- Build success verification
- Admonition (info TIPS) rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **Two h1 headings**: The source file has 2 h1 headings ("Premiere connexion" and "Activer les premieres extensions"). This is unusual but should be preserved for consistency.

2. **Email screenshot**: The email.png screenshot shows a French email. This is acceptable for MVP per epic guidelines.

3. **Extensions screenshot**: The image_1.png screenshot shows the FR extensions interface. This is acceptable for MVP.

4. **Keyboard shortcut**: The `Ctrl + /` shortcut is universal and should be preserved as-is.

5. **Dashboard term**: "Dashboard" is used as-is in the French source and should remain in English.

6. **Pterodactyl**: This is a proper noun (game server management panel) - keep as-is.

### File Structure Context (Epic 3)

This is story 3.2 (second of 9). The complete Getting Started section:
1. getting_started.md (index) - Story 3.1 (ready-for-dev)
2. first_login.md - THIS STORY
3. personalization.md - Story 3.3
4. server.md - Story 3.4
5. products.md - Story 3.5
6. payments.md - Story 3.6
7. accounts.md - Story 3.7
8. service.md - Story 3.8
9. finish.md - Story 3.9

### References

- [Source: _bmad-output/planning-artifacts/epic-3-mvd-getting-started.md#Story 3.2]
- [Source: _bmad-output/implementation-artifacts/3-1-traduire-getting-started-md-index.md] - Previous story reference
- [Source: _bmad-output/implementation-artifacts/2-5-traduire-plesk-md.md] - Pattern reference
- [Source: docs/getting_started/first_login.md] - FR source file
- [Docusaurus i18n](https://docusaurus.io/docs/i18n/introduction)
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

- Code review fix: Corrected file structure (EN in /docs/, not /i18n/en/)
- Removed invalid i18n/en/ directory that caused build errors

### Completion Notes List

- Translated first_login.md from FR to EN with natural phrasing
- Corrected file structure approach (EN in /docs/, not in /i18n/en/)
- Preserved both screenshot paths unchanged (FR interface acceptable for MVP)
- Translated :::info TIPS admonition with keyboard shortcut preserved
- Maintained internal links to `/extensions/` and `/getting_started/server`
- Build successful for both EN and FR locales

### Change Log

- 2026-01-24: Story 3-2 completed - First Login page translated to English
- 2026-01-24: Code review fix - Corrected file structure (EN content in /docs/, removed invalid i18n/en/ directory)

### File List

- docs/getting_started/first_login.md (MODIFIED - FR to EN)
