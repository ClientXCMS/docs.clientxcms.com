# Story 0.7: Config redirects 301

Status: skipped

## Story

As a **user accessing old documentation URLs**,
I want **to be automatically redirected to the correct new URL structure**,
so that **bookmarks and external links continue working after the i18n migration**.

## Context

Avec le changement de `defaultLocale` de 'fr' vers 'en', la structure des URLs a change:
- Avant: `/docs/introduction` (FR par defaut)
- Apres: `/introduction` (EN par defaut), `/fr/introduction` (FR)

Les utilisateurs avec des bookmarks ou des liens externes vers les anciennes URLs doivent etre rediriges correctement.

## Acceptance Criteria

1. **AC1**: Les anciennes URLs `/docs/*` redirigent vers les nouvelles URLs EN (`/*`)
2. **AC2**: Les redirects sont des 301 (permanent) pour le SEO
3. **AC3**: Les tests passent sur preprod avant deploiement en production
4. **AC4**: Le build Docusaurus passe sans erreur

## Tasks / Subtasks

- [ ] Task 1: Rechercher la meilleure approche pour les redirects (AC: 1, 2)
  - [ ] 1.1 Verifier si `@docusaurus/plugin-client-redirects` supporte le cas d'usage
  - [ ] 1.2 Evaluer l'option CDN/Nginx si plugin insuffisant
  - [ ] 1.3 Documenter l'approche choisie

- [ ] Task 2: Implementer les redirects (AC: 1, 2, 4)
  - [ ] 2.1 Installer/configurer le plugin ou la solution choisie
  - [ ] 2.2 Definir les regles de redirect
  - [ ] 2.3 Verifier que le build passe

- [ ] Task 3: Tester sur preprod (AC: 3)
  - [ ] 3.1 Deployer sur preprod
  - [ ] 3.2 Tester les URLs critiques manuellement
  - [ ] 3.3 Verifier les headers 301 avec curl

## Dev Notes

### Approches possibles

1. **@docusaurus/plugin-client-redirects**
   - Plugin officiel Docusaurus
   - Genere des pages HTML avec meta refresh
   - Attention: ce sont des redirects client-side, pas de vrais 301

2. **Configuration Nginx/CDN**
   - Vrais redirects 301 server-side
   - Meilleur pour le SEO
   - Necessite acces a la config serveur

3. **Vercel/Cloudflare redirects**
   - Si heberge sur ces plateformes
   - Configuration via fichier `_redirects` ou `vercel.json`

### URLs critiques a tester

```
/docs/introductions/introduction -> /introduction
/docs/installation/requis -> /installation/requis
/docs/installation/cloud -> /installation/cloud
/docs/getting_started/first_login -> /getting_started/first_login
```

### Project Structure Notes

- Config principale: `docusaurus.config.ts`
- Si plugin: ajouter dans `plugins` array
- Si Nginx: a configurer sur le serveur de deploiement

### References

- [Source: _bmad-output/planning-artifacts/epic-0-setup-infrastructure.md#Story 0.7]
- [Docusaurus Client Redirects](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-client-redirects)

## Dev Agent Record

### Agent Model Used

Claude Opus 4.5

### Debug Log References

N/A

### Completion Notes List

- Story abandonnee apres analyse
- Raison: L'AC1 mentionnait des redirects `/docs/*` mais le site utilise `routeBasePath: '/'` donc pas de prefix `/docs/`
- La vraie intention (redirect automatique FR basee sur langue navigateur) necessite une approche differente (JS ou Nginx)
- Decision utilisateur: Skip cette story, a revoir plus tard si necessaire

### File List

Aucun fichier modifie (story skipped)
