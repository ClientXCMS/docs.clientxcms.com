# Worker 4 - Root Docs + Extensions Modules + Addons (part 1)

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-4

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

1. docs-customers -> docs/customers.md
2. docs-invoices -> docs/invoices.md
3. docs-services -> docs/services.md
4. ext-modules-index -> docs/extensions/modules/modules.md
5. ext-modules-pterodactyl -> docs/extensions/modules/Pterodactyl.md
6. ext-modules-pelican -> docs/extensions/modules/Pelican.md
7. ext-modules-wisp -> docs/extensions/modules/Wisp.md
8. ext-modules-pterobox -> docs/extensions/modules/Pterobox.md
9. ext-modules-proxmox -> docs/extensions/modules/Proxmox.md
10. ext-modules-cpanel -> docs/extensions/modules/cPanel.md
11. ext-modules-plesk -> docs/extensions/modules/Plesk.md
12. ext-modules-virtualizor -> docs/extensions/modules/VirtualizorCloud.md
13. ext-index -> docs/extensions/extensions.md
14. ext-addons-index -> docs/extensions/addons/addons.md
15. ext-addons-socialauthplus -> docs/extensions/addons/socialauthplus.md

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
6. Mettre a jour sprint-status.yaml: status: done, owner: worker-4
7. Commit: `git commit -m "done: <story-id>"`
8. Push: `git pull --rebase alexwrite feat/i18n && git push alexwrite feat/i18n`
9. Passer a la story suivante

## Regles de traduction

- Traduire tout le texte FR en anglais clair et professionnel
- NE PAS traduire : noms de variables, code, commandes, chemins
- Garder le format markdown exact
- Garder les admonitions : `:::tip` -> `:::tip` (pas de changement de format)

## Commence maintenant

Clone/sync le repo et traite tes 15 stories dans l'ordre. Signale quand tu as termine.
