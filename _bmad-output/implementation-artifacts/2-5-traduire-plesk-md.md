# Story 2.5: Traduire plesk.md

Status: review

## Story

As a documentation reader,
I want the English Plesk installation page to be properly translated,
so that international users can install ClientXCMS on their Plesk-managed servers with clear instructions.

## Acceptance Criteria

1. **AC1**: Complete EN translation (~5.5 KB)
   - All French text translated to natural English
   - Title "Plesk" remains as-is (product name)
   - Technical terminology accurate (Plesk, Laravel Toolkit, SSL, PHP, Node.js, etc.)
   - No literal translation - natural English phrasing

2. **AC2**: Screenshots unchanged
   - All 17 existing screenshots kept (FR interface acceptable for MVP)
   - Image paths unchanged (`/img/next_gen/Installation/Plesk/`)
   - Alt text updated to English

3. **AC3**: Plesk instructions clear
   - Subscription and domain setup steps clear
   - Laravel Toolkit extension installation clear
   - SSL certificate generation steps clear
   - PHP version configuration clear

4. **AC4**: Laravel environment setup clear
   - Remote repository installation steps clear
   - Artisan commands explanation clear
   - Node.js commands explanation clear

5. **AC5**: Database configuration clear
   - Database creation steps clear
   - .env file configuration steps clear
   - Connection parameters explanation accurate

6. **AC6**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position: 4` preserved

7. **AC7**: Admonition translated
   - `:::warning` block about database preservation translated
   - Admonition renders properly in EN

8. **AC8**: Links functional
   - Internal link: ./cloud works
   - External link: https://github.com/ClientXCMS/ClientXCMS works
   - External link: https://clientxcms.com/client/services/ works

9. **AC9**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/installation/plesk` (EN)
   - Page renders correctly at `/fr/installation/plesk` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [x] Task 1: Add frontmatter with translated flag (AC: #6)
  - [x] 1.1 Ensure `---` block at top of file
  - [x] 1.2 Add `translated: true`
  - [x] 1.3 Verify `sidebar_position: 4` present

- [x] Task 2: Translate introduction paragraph (AC: #1)
  - [x] 2.1 Translate intro sentence about Plesk installation
  - [x] 2.2 Translate Cloud reference sentence
  - [x] 2.3 Verify internal link to ./cloud

- [x] Task 3: Translate subscription and domain section (AC: #1, #3, #7)
  - [x] 3.1 Translate "Mise en place de l'abonnement et du domaine" heading
  - [x] 3.2 Translate step 1 (domain creation)
  - [x] 3.3 Translate step 2 (migration backup)
  - [x] 3.4 Translate :::warning admonition (database preservation)
  - [x] 3.5 Translate step 3 (Plesk Admin extensions menu)
  - [x] 3.6 Translate step 4 (Laravel Toolkit extension)
  - [x] 3.7 Translate step 5 (SSL certificate)
  - [x] 3.8 Translate step 6 (PHP version)
  - [x] 3.9 Update all image alt texts in this section

- [x] Task 4: Translate Laravel environment section (AC: #1, #4)
  - [x] 4.1 Translate "Installation de l'environnement Laravel" heading
  - [x] 4.2 Translate step 1 (Laravel menu)
  - [x] 4.3 Translate step 2 (remote repository installation)
  - [x] 4.4 Translate step 3 (deployment wait)
  - [x] 4.5 Update all image alt texts in this section

- [x] Task 5: Translate database configuration section (AC: #1, #5)
  - [x] 5.1 Translate "Configuration de la base de donnees" heading
  - [x] 5.2 Translate step 1 (database creation)
  - [x] 5.3 Translate step 2 (secure password)
  - [x] 5.4 Translate step 3 (file manager navigation)
  - [x] 5.5 Translate step 4 (.env.example rename)
  - [x] 5.6 Translate step 5 (.env configuration values)
  - [x] 5.7 Update all image alt texts in this section

- [x] Task 6: Translate environment init commands section (AC: #1, #4)
  - [x] 6.1 Translate "Commandes d'initialisation de l'environnement" heading
  - [x] 6.2 Translate step 1 (Laravel tab)
  - [x] 6.3 Translate step 2 (Artisan section)
  - [x] 6.4 Translate step 3 (Artisan commands list)
  - [x] 6.5 Translate step 4 (Node.js section)
  - [x] 6.6 Translate step 5 (Node.js version)
  - [x] 6.7 Translate step 6 (npm commands)
  - [x] 6.8 Update all image alt texts in this section

- [x] Task 7: Translate ClientXCMS configuration section (AC: #1)
  - [x] 7.1 Translate "Configuration de ClientXCMS" heading
  - [x] 7.2 Translate step 1 (installation page)
  - [x] 7.3 Translate step 2 (hosting name)
  - [x] 7.4 Translate step 3 (OAuth credentials)
  - [x] 7.5 Update all image alt texts in this section

- [x] Task 8: Translate cron tasks section (AC: #1)
  - [x] 8.1 Translate "Configuration des taches cron" heading
  - [x] 8.2 Translate step 1 (scheduled tasks menu)
  - [x] 8.3 Translate step 2 (add scheduled task)
  - [x] 8.4 Translate step 3 (configure tasks)
  - [x] 8.5 Update image alt text

- [x] Task 9: Verify links (AC: #8)
  - [x] 9.1 Verify ./cloud internal link
  - [x] 9.2 Verify https://github.com/ClientXCMS/ClientXCMS external link
  - [x] 9.3 Verify https://clientxcms.com/client/services/ external link

- [x] Task 10: Build and test (AC: #9)
  - [x] 10.1 Run `npm run build`
  - [x] 10.2 Run `npm run serve` and test EN URL
  - [x] 10.3 Verify no "Not translated" banner
  - [x] 10.4 Verify locale switcher works
  - [x] 10.5 Verify all 17 images render correctly

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN Target file | `docs/installation/plesk.md` |
| FR Source file | `i18n/fr/docusaurus-plugin-content-docs/current/installation/plesk.md` |

### Current State Analysis

The EN file currently contains French text (identical to FR source - not yet translated). This needs full translation.

- **File size**: ~5.5 KB (90 lines)
- **Frontmatter**: Has `sidebar_position: 4`, MISSING `translated: true`
- **Sections**: 6 main sections
- **Images**: 17 screenshots (FR Plesk interface)
- **Admonitions**: 1 warning block
- **External links**: 2 (github.com/ClientXCMS, clientxcms.com/client/services)
- **Internal links**: 1 (./cloud)

### Document Structure Overview

1. **Introduction** - Brief intro linking to Cloud alternative
2. **Mise en place de l'abonnement et du domaine** - 6 steps for subscription/domain setup
3. **Installation de l'environnement Laravel** - 3 steps for Laravel environment
4. **Configuration de la base de donnees** - 5 steps for database setup
5. **Commandes d'initialisation de l'environnement** - 6 steps for Artisan/Node commands
6. **Configuration de ClientXCMS** - 3 steps for license activation
7. **Configuration des taches cron** - 3 steps for cron setup

### Translation Reference

| French | English |
|--------|---------|
| Mise en place de l'abonnement et du domaine | Subscription and domain setup |
| Installation de l'environnement Laravel | Laravel environment installation |
| Configuration de la base de donnees | Database configuration |
| Commandes d'initialisation de l'environnement | Environment initialization commands |
| Configuration de ClientXCMS | ClientXCMS configuration |
| Configuration des taches cron | Cron tasks configuration |
| autohebergees | self-hosted |
| offres Cloud | Cloud offerings |
| espace client | client area |
| Creez un nom de domaine | Create a domain name |
| Recherchez et installez | Search and install |
| Generez un certificat SSL | Generate an SSL certificate |
| tableau de bord | dashboard |
| gestionnaire de fichiers | file manager |
| Renommez le fichier | Rename the file |
| Modifiez les valeurs | Modify the values |
| Taches planifiees | Scheduled tasks |
| Outils et parametres | Tools and settings |
| Ajoutez une tache planifiee | Add a scheduled task |

### Expected EN Content Structure

```markdown
---
sidebar_position: 4
translated: true
---

# Plesk

This page will guide you through the installation of ClientXCMS Next Gen for self-hosted versions on Plesk. Cloud offerings are automatically installed on CLIENTXCMS servers. Cloud installation is available [here](./cloud).

## Subscription and Domain Setup

1. Create a domain name corresponding to your license.
2. If you already have a client area, save the `.env` file in your site root (for migration) and backup all ClientXCMS or WHMCS files.
   :::warning
   Do not delete or modify the old client area database if you want to reimport your customers, invoices, services, product configurations, etc.
   :::
3. If you have Plesk Administrator access, in the side menu, click "Extensions" under "Server Management".
4. Search and install the "Laravel Toolkit" extension if not already done.
5. Generate a free SSL certificate via Let's Encrypt.
6. In your domain dashboard, click "PHP" under development tools. Use PHP version **8.3** for optimal compatibility.

## Laravel Environment Installation

1. Return to your domain management. Under the "Get Started" menu, select "Laravel".
2. Click "Install application", choose "Install from remote repository", enter the URL: https://github.com/ClientXCMS/ClientXCMS and confirm.
3. Wait for the CLIENTXCMS deployment to complete.

## Database Configuration

1. Create a database in the domain management dashboard, under "Files & Databases" -> "Databases".
2. Use a strong password for security reasons and note the connection information before confirming.
3. In the Plesk file manager, go to the Laravel project root (default "httpdocs").
4. Rename the `.env.example` file to `.env` or open the file.
5. Click on the `.env` file and modify the values:
    - `APP_ENV=production` -> `APP_ENV=dev`
    - `APP_URL=http://localhost` -> `APP_URL=https://your.domain.com` (enter your client area domain)
    - `DB_DATABASE=laravel` -> Your database name
    - `DB_USERNAME=root` -> Database username
    - `DB_PASSWORD=""` -> Database user password (in "quotes" to avoid syntax errors)

## Environment Initialization Commands

1. Return to the "Get Started" tab then click "Laravel".
2. Click on the "Artisan" section.
3. Execute the following commands in this order:
    - `key:generate`
    - `db:seed --force`
    - `migrate --force`
    - `storage:link`
4. Click on the "Node.js" section.
5. Select the most recent Node.js version installed on your Plesk server (e.g., Node.js 21).
6. Execute the following commands in this order:
    - `install`
    - `run build`

## ClientXCMS Configuration

1. Go to your client area address. You should see an installation page similar to this one.
2. Replace "CLIENTXCMS" with your hosting company name.
3. To find the **Client ID** and **Client Secret**, go to the ClientXCMS client area: [https://clientxcms.com/client/services/](https://clientxcms.com/client/services/), in the relevant NextGen license management.
   The "**OAuth Client ID**" and "**OAuth Secret**" identifiers are needed to connect the ClientXCMS license to your site. Then click the "Connect" button on your instance.

## Cron Tasks Configuration

1. In the domain management dashboard, click "Scheduled Tasks" under "Tools & Settings".
2. Click "Add a scheduled task".
3. Configure the following cron tasks.
```

### Previous Story Learnings (Stories 2-1, 2-2, 2-3, 2-4)

From completed stories in Epic 2:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Terminology**: Keep technical terms (Plesk, Laravel, PHP, MySQL, Node.js, Artisan) as-is
3. **Admonitions**: `:::warning` syntax works in Docusaurus 3, translate content inside
4. **Build verification**: Always run `npm run build` before marking complete
5. **No emoji**: EN pages should not have emoji per project standards
6. **Alt text**: Update image alt text to English
7. **External links**: Keep external URLs as-is (github.com, clientxcms.com)
8. **Internal links**: Keep relative paths (./cloud)
9. **Code unchanged**: Keep all code blocks, commands, configuration values unchanged
10. **Screenshots FR acceptable**: Per epic guidelines, FR interface screenshots are acceptable for MVP

### Git Intelligence (Recent Commits)

Recent commits show:
- `e9dd8be` - Code review for story 2-2
- `440e727` - cloud.md translated (story 2-3)
- `5a90dcc` - Story 2-4 created (selfhosted.md)
- `4a0c4a1` - Story 2-3 created (cloud.md)
- `6274bc7` - installation.md translated (story 2-2)

Learnings applicable to this story:
- Use relative paths for all internal links
- Test locale switcher after translation
- Verify build for both EN and FR
- All stories follow same pattern successfully

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/installation/plesk
# FR: http://localhost:3001/fr/installation/plesk
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
- No React components in this file (pure markdown)
- Admonitions use Docusaurus syntax (:::type)
- Images use standard markdown syntax

### Testing Requirements

- Visual verification of page rendering
- All 17 images render correctly
- Link click testing (1 internal, 2 external)
- Build success verification
- Admonition (warning) rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **Screenshots in French**: The 17 screenshots show the FR Plesk interface. This is acceptable for MVP per epic guidelines. Screenshots will be updated to EN in a future phase if needed.

2. **Plesk-specific terminology**: Some menu items should match actual Plesk interface (which may be in English). Review terms like:
   - "Extensions" / "Gestion des serveurs" -> "Extensions" / "Server Management"
   - "Demarrer" menu -> "Get Started" menu
   - "Fichiers et bases de donnees" -> "Files & Databases"
   - "Outils et parametres" -> "Tools & Settings"

3. **Laravel Toolkit**: This is an official Plesk extension name - keep as-is.

4. **Artisan commands**: Keep all Artisan commands exactly as-is:
   - `key:generate`
   - `db:seed --force`
   - `migrate --force`
   - `storage:link`

5. **npm commands**: Keep all npm commands exactly as-is:
   - `install`
   - `run build`

6. **.env values**: Keep example values (APP_ENV, APP_URL, DB_*) as-is, only translate surrounding explanation text.

7. **Warning admonition**: The database preservation warning is critical for users migrating. Translate carefully to preserve meaning.

8. **Image count**: This page has the most images (17) in Epic 2. Ensure all render correctly after translation.

### Image Alt Text Updates Required

| Current FR Alt | Proposed EN Alt |
|----------------|-----------------|
| Menu "Extensions" - Plesk | "Extensions" menu - Plesk |
| Extension "Laravel ToolKit" - Plesk | "Laravel ToolKit" extension - Plesk |
| Certificat SSL - Plesk | SSL Certificate - Plesk |
| PHP version - Plesk | PHP version - Plesk |
| Laravel env - Plesk | Laravel environment - Plesk |
| Laravel install - Plesk | Laravel installation - Plesk |
| Laravel install 2 - Plesk | Laravel installation 2 - Plesk |
| Bases de donnees - Plesk | Databases - Plesk |
| Bases de donnees (creation) - Plesk | Databases (creation) - Plesk |
| Fichier .env.example (renommage) - Plesk | .env.example file (rename) - Plesk |
| Laravel env (gestion) - Plesk | Laravel environment (management) - Plesk |
| Laravel env (commandes Artisan) | Laravel environment (Artisan commands) |
| Laravel env (commandes NodeJS) | Laravel environment (Node.js commands) |
| Page installation - ClientXCMS | Installation page - ClientXCMS |
| Gestion licence - Plesk | License management - Plesk |
| Taches planifiees - Plesk | Scheduled tasks - Plesk |

### References

- [Source: _bmad-output/planning-artifacts/epic-2-mvd-installation.md#Story 2.5]
- [Source: _bmad-output/implementation-artifacts/2-3-traduire-cloud-md.md] - Pattern reference (similar structure)
- [Source: _bmad-output/implementation-artifacts/2-4-traduire-selfhosted-md.md] - Pattern reference (same epic)
- [Source: docs/installation/plesk.md] - Current EN file (needs translation)
- [Source: i18n/fr/.../installation/plesk.md] - FR source reference
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5 (claude-opus-4-5-20251101)

### Debug Log References

N/A - Content translation story, no debugging required

### Completion Notes List

- Translated complete plesk.md file from French to English (90 lines, 17 images)
- Added `translated: true` to frontmatter
- Preserved `sidebar_position: 4`
- Translated all 7 sections: Introduction, Subscription/Domain Setup, Laravel Environment, Database Configuration, Environment Init Commands, ClientXCMS Configuration, Cron Tasks
- Updated all 17 image alt texts to English
- Preserved all technical terms (Plesk, Laravel Toolkit, Artisan, Node.js, PHP 8.3)
- Preserved all code blocks and configuration values unchanged
- Translated :::warning admonition about database preservation
- Verified all links: ./cloud (internal), github.com/ClientXCMS, clientxcms.com/client/services
- Build successful for both EN and FR locales
- No "Not yet translated" banner appears on EN page
- All acceptance criteria satisfied

### File List

| Action | File |
|--------|------|
| Modified | `docs/installation/plesk.md` |

## Change Log

| Date | Change |
|------|--------|
| 2026-01-24 | Translated plesk.md from French to English - all 10 tasks completed |
