# Worker 9 - Blog Posts (Part 2 - 2024 + older)

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-9

## CRITICAL - Git Rules

```bash
# FIRST: Clone or navigate to repo
git clone git@github.com:alexwrite/docs.clientxcms.com.git
cd docs.clientxcms.com

# ALWAYS stay on feat/i18n - NEVER create new branches
git checkout feat/i18n
git pull --rebase alexwrite feat/i18n
```

- NEVER run `git checkout -b` or create new branches
- ALWAYS push to `alexwrite feat/i18n`
- If push fails, run `git pull --rebase alexwrite feat/i18n` then push again

## Tes stories assignees (dans l'ordre)

1. blog/2025-02-25-nouvelle-version-2.14.2.md
2. blog/2025-02-24-nouvelle-version-2.14.1.md
3. blog/2025-02-08-nouvelle-version-2.14.0.md
4. blog/2024-12-31-fin-clientxcms-v1.md
5. blog/2024-11-18-mise-a-jour-addon-page.md
6. blog/2024-10-31-retour-de-virtualizorcloud.md
7. blog/2024-10-20-nouvelle-version-2.13.0.md
8. blog/2024-08-03-nouveau-site-internet.md
9. blog/2024-07-07-nouvelle-version-2.12.0.md
10. blog/2024-06-11-nouvelle-version-2.11.0.md
11. blog/2024-05-20-nouvelle-version-2.10.0.md
12. blog/2024-03-24-sortie-outil-migration.md
13. blog/2024-03-18-sortie-du-module-proxmox.md
14. blog/2024-01-31-lancement-beta.md
15. blog/2023-07-30-adieu-security-token.md
16. blog/2023-02-23-fonctionalites-cadeau-discord.md
17. blog/2023-01-27-fonctionalites-bot-discord-sync.md
18. blog/2022-08-24-nouvelle-docs.md

## Workflow pour chaque story

git pull --rebase alexwrite feat/i18n

1. Lire le fichier source (FR)
2. Traduire FR -> EN :
   - Garder termes techniques, code blocks, chemins, URLs
   - Garder format admonitions (:::tip, :::warning, :::info)
   - Ajouter frontmatter: `translated: true`
3. Ecrire dans blog/<filename>.md
4. Commit: `git commit -m "docs(i18n): translate <filename>"`
5. Push: `git pull --rebase alexwrite feat/i18n && git push alexwrite feat/i18n`
6. Passer a la story suivante

## Regles de traduction

- Traduire tout le texte FR en anglais clair et professionnel
- NE PAS traduire : noms de variables, code, commandes, chemins
- Garder le format markdown exact
- Garder les admonitions : `:::tip` -> `:::tip` (pas de changement de format)

## Commence maintenant

Clone/sync le repo et traite tes 18 stories dans l'ordre. Signale quand tu as termine.
