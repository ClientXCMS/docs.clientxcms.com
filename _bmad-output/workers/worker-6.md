# Worker 6 - Developers (API, Extensions, Themes)

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-6

## Tes stories assignees (dans l'ordre)

1. dev-api -> docs/developpers/api.md
2. dev-commands -> docs/developpers/commands.md
3. dev-ext-index -> docs/developpers/extensions/extensions.md
4. dev-ext-create -> docs/developpers/extensions/create.md
5. dev-ext-configuration -> docs/developpers/extensions/configuration.md
6. dev-ext-database -> docs/developpers/extensions/database.md
7. dev-ext-routes -> docs/developpers/extensions/routes.md
8. dev-ext-schedules -> docs/developpers/extensions/schedules.md
9. dev-ext-def-index -> docs/developpers/extensions/definitions/definitions.md
10. dev-ext-def-events -> docs/developpers/extensions/definitions/events.md
11. dev-ext-def-models -> docs/developpers/extensions/definitions/models.md
12. dev-ext-def-permissions -> docs/developpers/extensions/definitions/permissions.md
13. dev-ext-def-translations -> docs/developpers/extensions/definitions/translations.md
14. dev-themes-index -> docs/developpers/themes/themes.md
15. dev-themes-create -> docs/developpers/themes/create-theme.md
16. dev-themes-config -> docs/developpers/themes/config.md
17. dev-themes-forms -> docs/developpers/themes/forms.md
18. dev-themes-sections -> docs/developpers/themes/sections.md
19. dev-themes-functions -> docs/developpers/themes/functions-settings.md
20. dev-themes-snippets -> docs/developpers/themes/code-snippets.md

## Workflow pour chaque story

```bash
git pull --rebase alexwrite feat/i18n
```

1. Lire le fichier source (FR)
2. Traduire FR -> EN :
   - Garder termes techniques, code blocks, chemins, URLs
   - Garder format admonitions (:::tip, :::warning, :::info)
   - Ajouter frontmatter: `translated: true`
3. Ecrire dans docs/<path>.md
4. Verifier que i18n/fr/.../path.md garde le FR original
5. Commit: `git commit -m "docs(i18n): translate <filename>"`
6. Mettre a jour sprint-status.yaml: status: done, owner: worker-6
7. Commit: `git commit -m "done: <story-id>"`
8. Push: `git pull --rebase alexwrite feat/i18n && git push alexwrite feat/i18n`
9. Passer a la story suivante

## Regles de traduction

- Traduire tout le texte FR en anglais clair et professionnel
- NE PAS traduire : noms de variables, code, commandes, chemins
- Garder le format markdown exact
- Garder les admonitions : `:::tip` -> `:::tip` (pas de changement de format)

## Commence maintenant

Clone/sync le repo et traite tes 20 stories dans l'ordre. Signale quand tu as termine.
