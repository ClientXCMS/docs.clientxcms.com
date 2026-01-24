# Story 2.6: Traduire docker.md

Status: ready-for-dev

## Story

As a documentation reader,
I want the English Docker installation page to be properly translated,
so that international users can install ClientXCMS using Docker containers with clear instructions.

## Acceptance Criteria

1. **AC1**: Complete EN translation (~1.9 KB)
   - All French text translated to natural English
   - Title "Docker" remains as-is (product name)
   - Technical terminology accurate (Docker, Docker Compose, containers, etc.)
   - No literal translation - natural English phrasing

2. **AC2**: Code blocks unchanged
   - All 6 code blocks remain exactly as-is (bash, env, yaml)
   - Commands unchanged (docker compose, git clone, cp, nano, etc.)
   - .env variable names unchanged
   - docker-compose.yml example unchanged

3. **AC3**: Prerequisites section clear
   - Docker and Docker Compose installation links functional
   - Server requirements clear
   - Domain requirement clear

4. **AC4**: Installation steps clear
   - Directory creation steps clear (step 1)
   - Git clone steps clear (step 2)
   - Configuration file setup clear (steps 3-4)
   - Container launch clear (step 5)
   - Admin account creation clear (step 6)
   - License validation clear (step 7)

5. **AC5**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position` preserved if present (or added)

6. **AC6**: Links functional
   - External link: https://docs.docker.com/get-docker/ works
   - External link: https://docs.docker.com/compose/install/ works

7. **AC7**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/installation/docker` (EN)
   - Page renders correctly at `/fr/installation/docker` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [ ] Task 1: Add frontmatter with translated flag (AC: #5)
  - [ ] 1.1 Add `---` block at top of file
  - [ ] 1.2 Add `translated: true`
  - [ ] 1.3 Add `sidebar_position: 5` (after plesk.md)

- [ ] Task 2: Translate introduction paragraph (AC: #1)
  - [ ] 2.1 Translate "Vous pouvez installer ClientXCMS via Docker..."
  - [ ] 2.2 Natural English phrasing

- [ ] Task 3: Translate prerequisites section (AC: #1, #3)
  - [ ] 3.1 Translate "Prerequis" heading to "Prerequisites"
  - [ ] 3.2 Translate "Avant de commencer..." paragraph
  - [ ] 3.3 Translate server requirements list item
  - [ ] 3.4 Translate domain requirements list item
  - [ ] 3.5 Translate "Lancer les commandes suivantes..." paragraph
  - [ ] 3.6 Keep code blocks unchanged (docker compose build, docker compose up -d)

- [ ] Task 4: Translate installation section (AC: #1, #4)
  - [ ] 4.1 Translate "Installation" heading (keep as-is in EN)
  - [ ] 4.2 Translate step 1 (directory creation)
  - [ ] 4.3 Translate step 2 (git clone repository)
  - [ ] 4.4 Translate step 3 (copy docker-compose example)
  - [ ] 4.5 Translate step 4 (environment file configuration)
  - [ ] 4.6 Translate "Vous pouvez modifier les variables..." explanation
  - [ ] 4.7 Translate "Le docker se chargera de generer..." (SSL via Let's Encrypt)
  - [ ] 4.8 Translate step 5 (launch containers)
  - [ ] 4.9 Translate step 6 (add admin account)
  - [ ] 4.10 Translate step 7 (access domain for license confirmation)

- [ ] Task 5: Keep all code blocks unchanged (AC: #2)
  - [ ] 5.1 Verify bash blocks unchanged (6 blocks)
  - [ ] 5.2 Verify env block unchanged
  - [ ] 5.3 Verify yaml block unchanged

- [ ] Task 6: Verify links (AC: #6)
  - [ ] 6.1 Verify https://docs.docker.com/get-docker/ link
  - [ ] 6.2 Verify https://docs.docker.com/compose/install/ link

- [ ] Task 7: Build and test (AC: #7)
  - [ ] 7.1 Run `npm run build`
  - [ ] 7.2 Run `npm run serve` and test EN URL
  - [ ] 7.3 Verify no "Not translated" banner
  - [ ] 7.4 Verify locale switcher works

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN Target file | `docs/installation/docker.md` |
| FR Source file | `i18n/fr/docusaurus-plugin-content-docs/current/installation/docker.md` |

### Current State Analysis

The EN file currently contains French text (identical to FR source - not yet translated). This needs full translation.

- **File size**: ~1.9 KB (60 lines) - smallest file in Epic 2
- **Frontmatter**: MISSING (needs to add `---` block with `translated: true`)
- **Sections**: 2 main sections (Prerequisites, Installation)
- **Images**: 0 screenshots (pure text/code content)
- **Code blocks**: 6 bash blocks + 1 env block + 1 yaml block
- **Admonitions**: 0
- **External links**: 2 (Docker documentation)
- **Internal links**: 0

### Document Structure Overview

1. **Introduction** - Brief intro about Docker installation
2. **Prerequisites** - Server requirements with Docker/Docker Compose links
3. **Installation** - 7 numbered steps for complete setup

### Translation Reference

| French | English |
|--------|---------|
| Vous pouvez installer ClientXCMS via Docker | You can install ClientXCMS via Docker |
| en suivant les etapes ci-dessous | by following the steps below |
| Prerequis | Prerequisites |
| Avant de commencer | Before you begin |
| assurez-vous d'avoir les elements suivants | make sure you have the following |
| Un serveur avec Docker et Docker Compose installes | A server with Docker and Docker Compose installed |
| Vous pouvez suivre les instructions d'installation de | You can follow the installation instructions for |
| Un nom de domaine pointant vers votre serveur | A domain name pointing to your server |
| Lancer les commandes suivantes pour installer Docker | Run the following commands to install Docker |
| sur un serveur Ubuntu | on an Ubuntu server |
| Creez un repertoire pour ClientXCMS et accedez-y | Create a directory for ClientXCMS and navigate to it |
| Clonez le depot Git de ClientXCMS | Clone the ClientXCMS Git repository |
| Copiez le fichier d'exemple de configuration | Copy the example configuration file |
| Modifiez le fichier d'environnement pour configurer | Edit the environment file to configure |
| les variables necessaires | the necessary variables |
| notamment la connexion a la base de donnees | including the database connection |
| et le nom de domaine | and the domain name |
| Vous pouvez modifier les variables comme le domaine | You can modify variables such as the domain |
| Ainsi que vos cles API | As well as your API keys |
| la connexion a la base de donnees, etc. | the database connection, etc. |
| Le docker se chargera de generer le certificat SSL | Docker will generate the SSL certificate |
| via Let's Encrypt automatiquement | via Let's Encrypt automatically |
| en rajoutant l'email dans le fichier | by adding the email in the file |
| Lancez les conteneurs Docker | Launch the Docker containers |
| Ajouter un compte administrateur | Add an administrator account |
| Accedez a votre nom de domaine dans un navigateur web | Access your domain name in a web browser |
| pour terminer l'installation | to complete the installation |
| en confirmation l'acces a la licence | by confirming license access |

### Expected EN Content Structure

```markdown
---
sidebar_position: 5
translated: true
---

# Docker

You can install ClientXCMS via Docker by following the steps below.

## Prerequisites

Before you begin, make sure you have the following:
- A server with Docker and Docker Compose installed. You can follow the installation instructions for:
    - [Docker](https://docs.docker.com/get-docker/)
    - [Docker Compose](https://docs.docker.com/compose/install/)
- A domain name pointing to your server.

Run the following commands to install Docker and Docker Compose on an Ubuntu server:
```bash
docker compose build
```
```bash
docker compose up -d
```

## Installation

1. Create a directory for ClientXCMS and navigate to it:
```bash
mkdir /var/www
cd /var/www
```

2. Clone the ClientXCMS Git repository:
```bash
git clone https://github.com/ClientXCMS/clientxcms.git
cd clientxcms
```

3. Copy the example Docker Compose configuration file:
```bash
cp docker-compose.example.yml docker-compose.yml
```

4. Edit the environment file to configure the necessary variables, including the database connection and domain name:
```bash
cp .env.example .env
nano .env
```

You can modify variables such as the domain:
```env
APP_URL=https://your-domain.com
OAUTH_CLIENT_ID="XX"
OAUTH_CLIENT_SECRET="XX"
```
As well as your API keys, database connection, etc.

Docker will generate the SSL certificate via Let's Encrypt automatically by adding the email in the docker-compose.yml file:
```yaml
- LETSENCRYPT_EMAIL=your_email@example.com
```

5. Launch the Docker containers:
```bash
docker-compose up --build -d
```

6. Add an administrator account:
```bash
docker exec -it clientxcms_app-1 php artisan clientxcms:install-admin
```

7. Access your domain name in a web browser to complete the installation by confirming license access.
```

### Previous Story Learnings (Stories 2-1 to 2-5)

From completed stories in Epic 2:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Terminology**: Keep technical terms (Docker, Docker Compose, Let's Encrypt, Git) as-is
3. **Build verification**: Always run `npm run build` before marking complete
4. **No emoji**: EN pages should not have emoji per project standards
5. **External links**: Keep external URLs as-is (docs.docker.com)
6. **Code unchanged**: Keep all code blocks, commands, configuration values unchanged
7. **File simplicity**: This is the simplest file (no images, no admonitions)
8. **sidebar_position pattern**: Previous files use positions 2-4, docker should be 5

### Git Intelligence (Recent Commits)

Recent commits show:
- `7308e37` - selfhosted.md translated (story 2-4)
- `6fec9a9` - Story 2-5 created (plesk.md)
- `e9dd8be` - Code review for story 2-2
- `440e727` - cloud.md translated (story 2-3)

Learnings applicable to this story:
- Same translation pattern as previous stories
- Keep all code blocks exactly as-is
- Simple file = quick implementation
- No need for image alt text updates (no images)

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/installation/docker
# FR: http://localhost:3001/fr/installation/docker
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
- No admonitions in this file
- Standard markdown image syntax (none needed)

### Testing Requirements

- Visual verification of page rendering
- Code block syntax highlighting verification
- Link click testing (2 external Docker docs links)
- Build success verification
- No automated tests needed (content review)

### Known Considerations

1. **No screenshots**: This is the only Installation page without screenshots. Pure text/code content makes translation straightforward.

2. **Code blocks**: All code blocks must remain exactly as-is. The translation is text-only around the code.

3. **Docker commands**: Keep all Docker commands unchanged:
   - `docker compose build`
   - `docker compose up -d`
   - `docker-compose up --build -d`
   - `docker exec -it clientxcms_app-1 php artisan clientxcms:install-admin`

4. **Variable examples**: Keep example values as-is:
   - `APP_URL=https://votre-domaine.com` -> Change only to `APP_URL=https://your-domain.com`
   - `OAUTH_CLIENT_ID="XX"` - unchanged
   - `OAUTH_CLIENT_SECRET="XX"` - unchanged
   - `LETSENCRYPT_EMAIL=your_email@example.com` - unchanged

5. **Missing frontmatter**: Unlike other files, this one has NO frontmatter. Need to add complete `---` block.

6. **Content accuracy note**: The FR source has a minor issue - it shows `docker compose build` in prerequisites but these commands are for an existing project. The "Run following commands" text is misleading. However, for translation purposes, translate the text as-is; content fixes are out of scope for this story.

7. **Sidebar position**: Based on the installation order in the documentation:
   - installation.md (index) - position 1
   - requis.md - position 2
   - cloud.md - position 3
   - selfhosted.md - position 4 (to verify)
   - plesk.md - position 4
   - docker.md - should be position 5 or 6
   - ansible.md - position 6 or 7
   - upgrade.md - position 7 or 8

### References

- [Source: _bmad-output/planning-artifacts/epic-2-mvd-installation.md#Story 2.6]
- [Source: _bmad-output/implementation-artifacts/2-3-traduire-cloud-md.md] - Pattern reference
- [Source: _bmad-output/implementation-artifacts/2-5-traduire-plesk-md.md] - Pattern reference (same epic)
- [Source: docs/installation/docker.md] - Current EN file (needs translation)
- [Source: i18n/fr/.../installation/docker.md] - FR source reference
- [Docker Installation Docs](https://docs.docker.com/get-docker/)
- [Docker Compose Installation Docs](https://docs.docker.com/compose/install/)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

