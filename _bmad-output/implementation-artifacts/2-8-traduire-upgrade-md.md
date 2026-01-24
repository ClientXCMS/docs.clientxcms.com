# Story 2.8: Traduire upgrade.md

Status: ready-for-dev

## Story

As a documentation reader,
I want the English upgrade page to be properly translated,
so that international users can update their ClientXCMS installation with clear instructions.

## Acceptance Criteria

1. **AC1**: Complete EN translation (~3.3 KB)
   - All French text translated to natural English
   - Title "Upgrade" (translate header from "Mise a jour")
   - Technical terminology accurate (Laravel, artisan, Git, npm, etc.)
   - No literal translation - natural English phrasing

2. **AC2**: Code blocks unchanged
   - All bash blocks remain exactly as-is
   - All command flags and variable names unchanged
   - File paths unchanged (/var/www/clientxcms)

3. **AC3**: Introduction section clear
   - Purpose of updates explained (bugs, features, extensions)
   - Clear and concise

4. **AC4**: Cloud section clear
   - Automatic update message clear
   - No action required message translated

5. **AC5**: Self-hosted section clear
   - Manual update requirement explained
   - Warning admonition translated (backup recommendation)
   - Two methods (Archive and Git) explained

6. **AC6**: Archive (release) tab clear
   - All 6 steps translated
   - Step descriptions translated (download, maintenance, extract, dependencies, cache, exit maintenance)
   - Commands unchanged

7. **AC7**: Git tab clear
   - All 5 steps translated
   - Step descriptions translated (fetch/pull, maintenance, dependencies, cache, exit maintenance)
   - Commands unchanged

8. **AC8**: Plesk section clear
   - Laravel Toolkit reference clear
   - Steps for Git deployment translated
   - Image reference kept

9. **AC9**: Tabs component works
   - `import Tabs from '@theme/Tabs'` unchanged
   - `import TabItem from '@theme/TabItem'` unchanged
   - Tab labels translated ("Archive (release)" and "Git")

10. **AC10**: Admonitions translated
    - `:::warning` block about backup translated
    - Admonition type (`warning`) unchanged

11. **AC11**: Frontmatter complete
    - `translated: true` added to frontmatter
    - `sidebar_position` preserved if present

12. **AC12**: Image reference functional
    - Internal image: `/img/next_gen/Installation/Plesk/Plesk_Git_deploy.png` path unchanged
    - Alt text can be translated

13. **AC13**: Build successful
    - `npm run build` passes without errors
    - Page renders correctly at `/installation/upgrade` (EN)
    - Page renders correctly at `/fr/installation/upgrade` (FR)
    - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [ ] Task 1: Add frontmatter with translated flag (AC: #11)
  - [ ] 1.1 Add `---` block at top of file if not present
  - [ ] 1.2 Add `translated: true`
  - [ ] 1.3 Verify/add `sidebar_position` if needed

- [ ] Task 2: Translate page title and introduction (AC: #1, #3)
  - [ ] 2.1 Translate "Mise a jour" to "Upgrade"
  - [ ] 2.2 Translate introduction paragraph about regular updates

- [ ] Task 3: Translate Cloud section (AC: #1, #4)
  - [ ] 3.1 Translate "Cloud" heading (keep as "Cloud")
  - [ ] 3.2 Translate automatic update explanation paragraph

- [ ] Task 4: Translate Self-hosted section (AC: #1, #5)
  - [ ] 4.1 Translate "Autohebergement" to "Self-hosted"
  - [ ] 4.2 Translate manual update explanation
  - [ ] 4.3 Translate :::warning admonition (backup recommendation)
  - [ ] 4.4 Translate method choice paragraph (Archive or Git)

- [ ] Task 5: Translate Archive tab (AC: #1, #6, #9)
  - [ ] 5.1 Translate tab label "Archive (release)" (may keep as-is or adjust)
  - [ ] 5.2 Translate step 1: Download release
  - [ ] 5.3 Translate step 2: Put in maintenance
  - [ ] 5.4 Translate step 3: Extract and replace files
  - [ ] 5.5 Translate step 4: Install dependencies and run migrations
  - [ ] 5.6 Translate step 5: Clear caches and rebuild assets
  - [ ] 5.7 Translate step 6: Exit maintenance and run post-update hooks
  - [ ] 5.8 Keep all code blocks unchanged

- [ ] Task 6: Translate Git tab (AC: #1, #7, #9)
  - [ ] 6.1 Translate tab label "Git" (keep as "Git")
  - [ ] 6.2 Translate step 1: Fetch and pull from remote
  - [ ] 6.3 Translate step 2: Put in maintenance
  - [ ] 6.4 Translate step 3: Install dependencies and run migrations
  - [ ] 6.5 Translate step 4: Clear caches and rebuild assets
  - [ ] 6.6 Translate step 5: Exit maintenance and run post-update hooks
  - [ ] 6.7 Keep all code blocks unchanged

- [ ] Task 7: Translate Plesk section (AC: #1, #8, #12)
  - [ ] 7.1 Translate "Plesk" heading (keep as "Plesk")
  - [ ] 7.2 Translate introduction paragraph about Laravel Toolkit
  - [ ] 7.3 Translate steps 1-4
  - [ ] 7.4 Translate image alt text
  - [ ] 7.5 Keep image path unchanged

- [ ] Task 8: Build and test (AC: #13)
  - [ ] 8.1 Run `npm run build`
  - [ ] 8.2 Run `npm run serve` and test EN URL
  - [ ] 8.3 Verify no "Not translated" banner
  - [ ] 8.4 Verify Tabs component works (both tabs clickable)
  - [ ] 8.5 Verify image loads correctly

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN Target file | `docs/installation/upgrade.md` |
| FR Source file | `i18n/fr/docusaurus-plugin-content-docs/current/installation/upgrade.md` |

### Current State Analysis

The EN file currently contains French text (identical to FR source - not yet translated). This needs full translation.

- **File size**: ~3.3 KB (121 lines) - Medium file
- **Frontmatter**: MISSING `translated: true`
- **Sections**: 3 main sections (Cloud, Self-hosted, Plesk)
- **Images**: 1 screenshot (Plesk Git deploy)
- **Code blocks**: ~10 bash blocks
- **Admonitions**: 1 (warning)
- **Tables**: 0
- **External links**: 1 (GitHub releases)
- **Internal links**: 0
- **React components**: Tabs/TabItem for Archive vs Git methods

### Document Structure Overview

1. **Introduction** - Brief intro about regular updates
2. **Cloud** - Automatic updates (no action required)
3. **Self-hosted** - Manual update process
   - Warning about backup
   - Two methods in tabs:
     - Archive (release): 6 steps
     - Git: 5 steps
4. **Plesk** - Special instructions for Plesk users

### Translation Reference - Key Terms

| French | English |
|--------|---------|
| Mise a jour | Upgrade |
| L'espace est regulierement mis a jour | The application is regularly updated |
| pour corriger des bugs, ajouter de nouvelles fonctionnalites ou extensions | to fix bugs, add new features or extensions |
| La mise a jour de l'espace client en cloud est automatique | Cloud updates are automatic |
| Vous n'avez rien a faire | You don't need to do anything |
| l'espace client se mettra a jour automatiquement | the application will update automatically |
| Autohebergement | Self-hosted |
| La mise a jour de l'espace client en autohebergement est manuelle | Self-hosted updates are manual |
| Vous devez remplacer les fichiers de l'espace client par les nouveaux fichiers | You need to replace the application files with the new ones |
| Nous vous recommandons de faire une sauvegarde | We recommend making a backup |
| de votre espace client et de la base de donnees | of your application and database |
| avant de commencer une mise a jour | before starting an update |
| Pour mettre a jour ClientXCMS | To update ClientXCMS |
| choisissez l'une des methodes ci-dessous | choose one of the methods below |
| telechargement de la release (archive) | downloading the release (archive) |
| mise a jour via Git | updating via Git |
| Telechargez la release la plus recente depuis GitHub | Download the latest release from GitHub |
| et enregistrez-la en | and save it as |
| Mettez votre espace client en maintenance | Put your application in maintenance mode |
| Decompressez l'archive et remplacez les fichiers | Extract the archive and replace the files |
| Installez les dependances et executez les migrations | Install dependencies and run migrations |
| Nettoyez les caches et reconstruisez les assets | Clear caches and rebuild assets |
| Sortez de la maintenance et executez les hooks post-update | Exit maintenance mode and run post-update hooks |
| Si vous avez installe votre instance via Git | If you installed your instance via Git |
| vous pouvez mettre a jour en tirant la branche distante | you can update by pulling the remote branch |
| Si vous utilisez Plesk et que vous avez installe l'espace client via le Laravel Toolkit | If you use Plesk and installed the application via the Laravel Toolkit |
| vous pouvez suivre les etapes suivantes | you can follow these steps |
| Connectez-vous a votre espace Plesk | Log in to your Plesk panel |
| Allez dans le gestionnaire des depots Git | Go to the Git repository manager |
| Mettez a jour le depot Git avec la nouvelle version | Update the Git repository with the new version |
| en cliquant sur le bouton "Deployer maintenant" | by clicking the "Deploy Now" button |
| Deploiement Git - Plesk | Git Deployment - Plesk |
| Suivez les etapes 4 a 13 de la mise a jour en autohebergement ci-dessus | Follow steps 4 to 13 of the self-hosted update above |
| en utilisant l'interface du Laravel Toolkit | using the Laravel Toolkit interface |

### Previous Story Learnings (Stories 2-1 to 2-7)

From completed stories in Epic 2:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Terminology**: Keep technical terms (Laravel, artisan, Git, npm, composer, PHP) as-is
3. **Admonitions**: `:::warning` syntax works in Docusaurus 3, translate content inside
4. **Build verification**: Always run `npm run build` before marking complete
5. **No emoji**: EN pages should not have emoji per project standards
6. **External links**: Keep external URLs as-is
7. **Code unchanged**: Keep all code blocks, commands unchanged
8. **Image paths**: Keep image paths exactly as-is
9. **Tabs component**: Keep imports and component syntax unchanged, translate labels if needed

### Git Intelligence (Recent Commits)

Recent commits show:
- `c9e57a7` - Story 2-7 created (ansible.md)
- `354b0f4` - plesk.md translated (story 2-5)
- `abfe040` - Story 2-6 created (docker.md)
- `db5dfc8` - Code review for story 2-3
- `7308e37` - selfhosted.md translated (story 2-4)

Learnings applicable to this story:
- Same translation pattern as previous stories
- Keep all code blocks exactly as-is
- Tabs component works correctly in previous translations
- Image references must keep exact paths

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/installation/upgrade
# FR: http://localhost:3001/fr/installation/upgrade
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
- Tabs/TabItem React components - keep import syntax unchanged
- Admonitions use Docusaurus syntax (:::type)
- Code blocks use standard markdown fenced syntax with language hints

### Testing Requirements

- Visual verification of page rendering
- All code blocks render with proper syntax highlighting
- Tabs component works (both tabs clickable and switch content)
- Image loads correctly
- Link click testing (1 external - GitHub)
- Build success verification
- Admonition (warning) rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **Medium file size**: At ~3.3 KB and 121 lines, this is a medium-sized translation task in Epic 2.

2. **Tabs component**: Uses Docusaurus Tabs/TabItem components. Keep imports and JSX syntax exactly as-is. Only translate the `label` attribute values if needed.

3. **Warning admonition**: The `:::warning` block about backup is critical - must maintain the warning sentiment while translating to natural English.

4. **Step references in Plesk section**: The text says "Follow steps 4 to 13 of the self-hosted update above" - this reference should be accurate to the actual steps (currently 6 steps in each tab, so this may be outdated text - translate as-is but note this inconsistency).

5. **Image alt text**: The image has French alt text "Deploiement Git - Plesk". This should be translated to "Git Deployment - Plesk".

6. **Tab labels**:
   - "Archive (release)" - can keep as-is (English term)
   - "Git" - keep as-is

7. **External link**: GitHub releases URL `https://github.com/ClientXCMS/ClientXCMS/releases/latest` - keep unchanged.

8. **File naming for EN**: The file `upgrade.md` is correct for EN. The URL will be `/installation/upgrade`.

9. **Sidebar position**: Check if frontmatter needs `sidebar_position` to maintain correct order in sidebar.

### References

- [Source: _bmad-output/planning-artifacts/epic-2-mvd-installation.md#Story 2.8]
- [Source: _bmad-output/implementation-artifacts/2-7-traduire-ansible-md.md] - Pattern reference (same epic)
- [Source: docs/installation/upgrade.md] - Current EN file (needs translation)
- [Source: i18n/fr/.../installation/upgrade.md] - FR source reference
- [Docusaurus Tabs](https://docusaurus.io/docs/markdown-features/tabs)
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

