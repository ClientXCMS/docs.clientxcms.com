# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official documentation website for ClientXCMS, built with Docusaurus 3. French-language documentation for the ClientXCMS content management system.

## Core Development Commands

```bash
npm install          # Install dependencies
npm run start        # Development server at http://localhost:3000
npm run build        # Production build
npm run serve        # Serve built version
npm run prod         # Build and serve combined
npm run typecheck    # TypeScript type checking
npm run clear        # Clear Docusaurus cache
```

## Architecture

### Content Structure
- `/docs/` - Markdown documentation files
- `/blog/` - Blog posts
- `/src/components/` - Custom React components
- `/src/css/` - Custom styles
- `/static/` - Static assets

### Documentation Hierarchy
```
docs/
  introductions/     # Project overview
  installation/      # Installation guides (cloud, self-hosted, Plesk)
  getting_started/   # Initial setup
  settings/          # Configuration by feature
  extensions/        # Modules and addons
  developpers/       # API, themes, extensions guides
```

### Asset Mirror Structure
Assets must mirror the documentation path:
- Doc: `/docs/settings/core/maintenance`
- Assets: `/static/img/next_gen/settings/core/maintenance`

All images must be hosted within the repository (no external hosting).

### Configuration
- `docusaurus.config.ts` - Main config, presets, plugins, theme
- `sidebars.ts` - Auto-generated from folder structure
- `static/api-docs.json` - OpenAPI spec for `/api` route (Redocusaurus)

### Key Technical Details
- Docs served at root (`routeBasePath: '/'`)
- Single locale: French (`fr`)
- Local search via `@easyops-cn/docusaurus-search-local`
- API documentation via Redocusaurus preset
- Version label: "NEXT GEN" (no active versioning currently)

## Branching & Deployment

| Branch | Environment | URL |
|--------|-------------|-----|
| `V2` | Production | https://docs.clientxcms.com |
| `preprod` | Pre-production | https://preprod-docs.clientxcms.com |

- Feature branches: `feat/feature-name`
- Fix branches: `fix/issue-name`
- Never push directly to `V2`
- PRs to `preprod` for new content, `V2` for hotfixes only

### CI/CD
- PRs trigger `npm run build` test (non-dependabot)
- Push to `V2` triggers Docker build and deployment

## Content Guidelines

### File Naming
- Lowercase only
- English names
- Kebab-case for multi-word names

### Category Configuration
Each folder can have `_category_.json`:
```json
{
  "label": "Display Name",
  "position": 1
}
```
