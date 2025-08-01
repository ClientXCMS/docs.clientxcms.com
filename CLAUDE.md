# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet Overview

This is the official documentation website for ClientXCMS, built with Docusaurus 3. The site serves as the main documentation hub for the ClientXCMS content management system, providing installation guides, configuration instructions, and extension documentation.

## Core Development Commands

### Development
- `npm install` - Install dependencies
- `npm run start` - Start development server (http://localhost:3000)
- `npm run build` - Build production version
- `npm run serve` - Serve built version locally
- `npm run prod` - Build and serve in one command
- `npm run typecheck` - Run TypeScript type checking

### Utility Commands
- `npm run clear` - Clear Docusaurus cache
- `npm run swizzle` - Customize Docusaurus components
- `npm run write-translations` - Generate translation files
- `npm run write-heading-ids` - Generate heading IDs

## Architecture & Structure

### Content Organization
- `/docs/` - Main documentation content (Markdown files)
- `/blog/` - Blog posts and announcements
- `/static/` - Static assets (images, files)
- `/src/` - Custom React components and styles

### Documentation Structure
Documentation is organized hierarchically:
- `introductions/` - Project introductions and overview
- `installation/` - Installation guides (cloud, self-hosted, Plesk)
- `getting_started/` - Initial setup and configuration
- `settings/` - Configuration documentation organized by feature
- `extensions/` - Modules and addons documentation
- `developpers/` - Developer guides for API, themes, extensions

### Asset Management
Assets follow a mirror structure:
- Documentation path: `/docs/settings/core/maintenance`
- Corresponding assets: `/static/next_gen/settings/core/maintenance`

### Configuration Files
- `docusaurus.config.ts` - Main Docusaurus configuration
- `sidebars.ts` - Sidebar navigation (auto-generated from folder structure)
- `tsconfig.json` - TypeScript configuration

## Branching Strategy

### Branch Structure
- `V2` - Main production branch
- `preprod` - Pre-production testing branch
- Feature branches: `feat/feature-name`
- Fix branches: `fix/issue-name`

### Deployment
- Production: https://docs.clientxcms.com (from V2 branch)
- Pre-production: https://preprod-docs.clientxcms.com (from preprod branch)

## Content Guidelines

### File Naming
- All files and folders must be lowercase
- Use English names for consistency
- Follow kebab-case for multi-word names

### Documentation Categories
Each category has a `_category_.json` file defining:
- `label` - Display name in sidebar
- `position` - Order in navigation

### Image Management
- All images must be hosted within the repository
- Use the mirror structure in `/static/next_gen/`
- No external image hosting allowed

## Development Workflow

1. Clone repository and install dependencies
2. Create feature branch from appropriate base (`preprod` for new features, `V2` for hotfixes)
3. Make changes and test locally with `npm run start`
4. Commit changes and push to feature branch
5. Create pull request to appropriate base branch

## Technical Details

### Framework
- Docusaurus 3.8.1 with TypeScript support
- React 19.1.0 for custom components
- Local search plugin (@easyops-cn/docusaurus-search-local)

### Internationalization
- Default locale: French (`fr`)
- Configured for single language documentation

### Plugins
- Google Analytics integration (GTAG)
- Local search functionality
- Environment variables support via dotenv

## Environment Requirements
- Node.js >= 18.0
- npm for package management
- Git for version control