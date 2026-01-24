# Story 2.4: Traduire selfhosted.md

Status: ready-for-dev

## Story

As a documentation reader,
I want the English Self-hosted installation page to be properly translated,
so that international users can install ClientXCMS on their own servers with clear, comprehensive instructions.

## Acceptance Criteria

1. **AC1**: Complete EN translation (~17.5 KB)
   - All French text translated to natural English
   - Title "Autohebergement" translated to "Self-hosted"
   - Technical terminology accurate (PHP, Composer, MySQL, Apache, Nginx, etc.)
   - No literal translation - natural English phrasing

2. **AC2**: All code blocks unchanged
   - Bash commands remain identical
   - SQL commands remain identical
   - Configuration files (Apache vhost, Nginx config, Supervisor, .env) unchanged
   - Only translate comments within code blocks if present

3. **AC3**: Server instructions clear
   - PHP 8.3 installation steps clear for both Ubuntu/Debian and CentOS/RHEL
   - Composer installation steps clear
   - MySQL/MariaDB setup steps clear
   - Artisan commands preserved

4. **AC4**: Apache and Nginx sections translated
   - Both web server tabs properly translated
   - VirtualHost configuration examples preserved
   - Instructions for enabling sites translated

5. **AC5**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position: 5` preserved
   - Component imports preserved (Tabs, TabItem)

6. **AC6**: Admonitions translated
   - All `:::info` blocks translated (6+ occurrences)
   - Admonition titles preserved or translated appropriately

7. **AC7**: Links functional
   - Internal links: ./cloud, ./requis work
   - External links: clientxcms.com/*, github.com/ClientXCMS/*, cdn.clientxcms.com/* work

8. **AC8**: Images preserved
   - All image paths unchanged
   - Alt text updated to English

9. **AC9**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/installation/selfhosted` (EN)
   - Page renders correctly at `/fr/installation/selfhosted` (FR)
   - No "Not yet translated" banner appears on EN
   - Tabs component renders correctly

## Tasks / Subtasks

- [ ] Task 1: Add frontmatter with translated flag (AC: #5)
  - [ ] 1.1 Ensure `---` block at top of file
  - [ ] 1.2 Add `translated: true`
  - [ ] 1.3 Verify `sidebar_position: 5` present
  - [ ] 1.4 Verify Tabs/TabItem imports preserved

- [ ] Task 2: Translate introduction and download section (AC: #1)
  - [ ] 2.1 Translate title "Autohebergement" to "Self-hosted"
  - [ ] 2.2 Translate intro paragraph
  - [ ] 2.3 Translate "Telechargement" section
  - [ ] 2.4 Translate :::info admonition (Debian 12 note)
  - [ ] 2.5 Update alt text for download_nextgen.png

- [ ] Task 3: Translate installation folder section (AC: #1, #2)
  - [ ] 3.1 Translate "Dossier d'installation" heading
  - [ ] 3.2 Translate instructions (keep bash commands unchanged)

- [ ] Task 4: Translate source code download section (AC: #1, #2)
  - [ ] 4.1 Translate "Telechargement du code source" heading
  - [ ] 4.2 Translate Archive ZIP tab content
  - [ ] 4.3 Translate Git tab content
  - [ ] 4.4 Translate :::info admonition (zip installation)

- [ ] Task 5: Translate environment setup section (AC: #1)
  - [ ] 5.1 Translate "Mise en place de l'environnement" heading
  - [ ] 5.2 Translate .env creation instructions

- [ ] Task 6: Translate PHP 8.3 installation section (AC: #1, #2)
  - [ ] 6.1 Translate "Installation de PHP 8.3" heading
  - [ ] 6.2 Translate "Ajout du depot Ondrej" heading
  - [ ] 6.3 Translate Ubuntu/Debian tab content
  - [ ] 6.4 Translate CentOS/RHEL/Rocky tab content
  - [ ] 6.5 Translate "Verification de l'installation" section
  - [ ] 6.6 Translate "Configuration PHP recommandee" section
  - [ ] 6.7 Keep all bash/ini code blocks unchanged

- [ ] Task 7: Translate Composer installation section (AC: #1, #2)
  - [ ] 7.1 Translate "Installation de Composer" heading
  - [ ] 7.2 Translate instructions (keep commands unchanged)

- [ ] Task 8: Translate MySQL setup section (AC: #1, #2)
  - [ ] 8.1 Translate "Mise en place de MySQL" heading
  - [ ] 8.2 Translate :::info admonition (MariaDB note)
  - [ ] 8.3 Translate mysql_secure_installation steps
  - [ ] 8.4 Keep all bash/sql commands unchanged

- [ ] Task 9: Translate web server setup section (AC: #1, #2, #4)
  - [ ] 9.1 Translate "Mise en place du serveur web" heading
  - [ ] 9.2 Translate Apache tab content
  - [ ] 9.3 Translate Apache :::info admonition (SSL note)
  - [ ] 9.4 Translate Nginx tab content
  - [ ] 9.5 Translate Nginx :::info admonition (SSL note)
  - [ ] 9.6 Keep all configuration examples unchanged

- [ ] Task 10: Translate database configuration section (AC: #1, #2)
  - [ ] 10.1 Translate "Configuration de la base de donnees" heading
  - [ ] 10.2 Translate instructions
  - [ ] 10.3 Keep SQL and .env examples unchanged

- [ ] Task 11: Translate other configurations section (AC: #1, #2)
  - [ ] 11.1 Translate "Autres configurations" heading
  - [ ] 11.2 Translate artisan commands explanations

- [ ] Task 12: Translate assets section (AC: #1, #2)
  - [ ] 12.1 Translate "Assets" heading
  - [ ] 12.2 Translate :::info admonition (Node.js note)
  - [ ] 12.3 Translate NVM/Node.js installation instructions
  - [ ] 12.4 Keep all bash commands unchanged

- [ ] Task 13: Translate scheduled tasks section (AC: #1, #2)
  - [ ] 13.1 Translate "Taches planifiees" heading
  - [ ] 13.2 Translate crontab instructions

- [ ] Task 14: Translate Laravel queues section (AC: #1, #2)
  - [ ] 14.1 Translate "Configuration des Queues Laravel" heading
  - [ ] 14.2 Translate queue driver explanations
  - [ ] 14.3 Translate Supervisor setup instructions
  - [ ] 14.4 Keep all configuration files unchanged

- [ ] Task 15: Translate ClientXCMS configuration section (AC: #1, #8)
  - [ ] 15.1 Translate "Configuration de ClientXCMS" heading
  - [ ] 15.2 Translate numbered steps
  - [ ] 15.3 Update alt text for images

- [ ] Task 16: Translate extension purchase section (AC: #1, #6)
  - [ ] 16.1 Translate "Achat d'extension" heading
  - [ ] 16.2 Translate error message and instructions
  - [ ] 16.3 Translate :::info admonition (themes note)
  - [ ] 16.4 Update alt text for download_extension.png

- [ ] Task 17: Translate cloud migration section (AC: #1)
  - [ ] 17.1 Translate "Migration depuis une version cloud" heading
  - [ ] 17.2 Translate all 8 numbered steps

- [ ] Task 18: Translate common problems section (AC: #1, #2)
  - [ ] 18.1 Translate "Problemes courants" heading
  - [ ] 18.2 Translate "Interface introuvable Jsonable" subsection
  - [ ] 18.3 Translate "Theme active mais non affiche" subsection
  - [ ] 18.4 Translate "Logo non affichage" subsection
  - [ ] 18.5 Translate "Probleme de permissions sur le dossier de logs" subsection
  - [ ] 18.6 Keep all bash commands unchanged

- [ ] Task 19: Verify links (AC: #7)
  - [ ] 19.1 Verify ./cloud internal link
  - [ ] 19.2 Verify ./requis internal link
  - [ ] 19.3 Verify https://clientxcms.com/client/downloads
  - [ ] 19.4 Verify https://github.com/ClientXCMS/ClientXCMS
  - [ ] 19.5 Verify https://clientxcms.com/pricing
  - [ ] 19.6 Verify https://cdn.clientxcms.com/ressources/docs/environment.example.txt
  - [ ] 19.7 Verify https://clientxcms.com/client/services/

- [ ] Task 20: Build and test (AC: #9)
  - [ ] 20.1 Run `npm run build`
  - [ ] 20.2 Run `npm run serve` and test EN URL
  - [ ] 20.3 Verify Tabs component renders (Archive ZIP / Git tabs)
  - [ ] 20.4 Verify Tabs component renders (Ubuntu/Debian / CentOS tabs)
  - [ ] 20.5 Verify Tabs component renders (Apache / Nginx tabs)
  - [ ] 20.6 Verify no "Not translated" banner

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN Target file | `docs/installation/selfhosted.md` |
| FR Source file | `i18n/fr/docusaurus-plugin-content-docs/current/installation/selfhosted.md` |

### Current State Analysis

The EN file currently contains French text (identical to FR source - not yet translated). This is the LONGEST file in Epic 2 and needs comprehensive translation.

- **File size**: ~17.5 KB (524 lines)
- **Frontmatter**: Has `sidebar_position: 5`, MISSING `translated: true`
- **Components**: Uses `Tabs` and `TabItem` from '@theme/Tabs'
- **Sections**: 15+ major sections
- **Code blocks**: ~40+ code blocks (bash, sql, ini, env)
- **Admonitions**: 6+ info blocks
- **Images**: 4 screenshots
- **Tabs**: 3 tab groups (ZIP/Git, Ubuntu/CentOS, Apache/Nginx)

### Document Structure Overview

1. **Introduction** - Self-hosted vs Cloud explanation
2. **Download** - Getting the source code
3. **Installation Folder** - Creating /var/www/clientxcms
4. **Source Code Download** - ZIP archive or Git clone (TABS)
5. **Environment Setup** - .env file creation
6. **PHP 8.3 Installation** - Ubuntu/Debian or CentOS/RHEL (TABS)
7. **Composer Installation** - Dependency management
8. **MySQL Setup** - MariaDB installation and security
9. **Web Server Setup** - Apache or Nginx (TABS)
10. **Database Configuration** - Creating DB and user
11. **Other Configurations** - Artisan commands
12. **Assets** - Node.js and npm build
13. **Scheduled Tasks** - Crontab setup
14. **Laravel Queues** - Supervisor configuration
15. **ClientXCMS Configuration** - License activation
16. **Extension Purchase** - Manual extension installation
17. **Cloud Migration** - Moving from Cloud to self-hosted
18. **Common Problems** - Troubleshooting section

### Translation Reference

| French | English |
|--------|---------|
| Autohebergement | Self-hosted |
| Telechargement | Download |
| Dossier d'installation | Installation folder |
| Mise en place | Setup |
| Serveur web | Web server |
| Base de donnees | Database |
| Taches planifiees | Scheduled tasks |
| Files d'attente | Queues |
| Problemes courants | Common problems |
| Vous pouvez | You can |
| Vous devez | You must |
| Pour installer | To install |
| En utilisant la commande suivante | Using the following command |
| Lorsque vous y etes invite | When prompted |
| Il est recommande | It is recommended |

### Code Blocks - DO NOT TRANSLATE

All code blocks must remain EXACTLY as in the French source:
- Bash commands (apt, dnf, mysql, php, npm, etc.)
- SQL queries (CREATE DATABASE, GRANT, etc.)
- Configuration files (Apache vhost, Nginx config, Supervisor)
- .env examples
- Crontab entries

### Previous Story Learnings (Stories 2-1, 2-2, 2-3)

From completed stories in Epic 2:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Terminology**: Keep technical terms as-is (PHP, MySQL, Apache, Nginx, Composer, Laravel, etc.)
3. **Admonitions**: `:::info` syntax works in Docusaurus 3, translate content inside
4. **Build verification**: Always run `npm run build` before marking complete
5. **No emoji**: EN pages should not have emoji per project standards
6. **Alt text**: Update image alt text to English
7. **Code blocks**: Keep all code unchanged - only translate surrounding text
8. **Tabs component**: MDX component must be preserved exactly

### Git Intelligence (Recent Commits)

Recent commits show:
- `4a0c4a1` - Story 2-3 created (cloud.md)
- `6274bc7` - Story 2-2 implemented (installation.md translated)
- `a2ccf91` - Story 2-1 PHP requirements updated

Learnings applicable to this story:
- Use relative paths for all internal links
- Test all Tabs components render correctly
- Verify build for both EN and FR

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/installation/selfhosted
# FR: http://localhost:3001/fr/installation/selfhosted
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
- MDX format with Tabs/TabItem components must be preserved
- Admonitions use Docusaurus syntax (:::type)
- Images use standard markdown syntax

### Testing Requirements

- Visual verification of page rendering
- All 4 images render correctly
- All 3 tab groups render and switch correctly
- Link click testing (2 internal, 5+ external)
- Build success verification
- Admonition rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **Screenshots in French**: The screenshots show the FR interface. This is acceptable for MVP per epic guidelines.

2. **Code comments in French**: Some bash commands have French comments (e.g., "# Mise a jour du systeme"). These should be translated to English.

3. **Technical accuracy**: All server administration commands must remain correct. Do not modify paths, package names, or configuration values.

4. **Tabs component**: The `<Tabs>` and `<TabItem>` components are MDX syntax and must be preserved exactly. Only translate the `label` attribute values.

5. **Long document**: This is the longest file in Epic 2. Consider translating section by section and testing incrementally.

6. **Queue options explanation**: The sync/database/redis/sqs explanations should be translated clearly.

7. **Common problems section**: Error messages should be kept in original form (they appear in the application), but explanations translated.

### Critical Sections Requiring Extra Care

1. **PHP Installation Tabs** - Both Ubuntu/Debian and CentOS paths must work
2. **Web Server Tabs** - Apache and Nginx configs are different, both critical
3. **Database Setup** - SQL commands and security steps must be accurate
4. **Supervisor Configuration** - INI file must remain valid
5. **Migration Steps** - 8-step process must be clear and accurate

### References

- [Source: _bmad-output/planning-artifacts/epic-2-mvd-installation.md#Story 2.4]
- [Source: _bmad-output/implementation-artifacts/2-1-relecture-requis-md.md] - Pattern reference
- [Source: _bmad-output/implementation-artifacts/2-3-traduire-cloud-md.md] - Recent pattern
- [Source: docs/installation/selfhosted.md] - Current EN file (needs translation)
- [Source: i18n/fr/.../installation/selfhosted.md] - FR source reference
- [Docusaurus Tabs](https://docusaurus.io/docs/markdown-features/tabs)
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
