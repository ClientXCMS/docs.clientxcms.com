# Worker 7 - Developers Implementation Guides + Software

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-7

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

### Implementation Guides (10 fichiers)
1. dev-ext-impl-index -> docs/developpers/extensions/implementation_guides/implementation_guides.md
2. dev-ext-impl-gateway -> docs/developpers/extensions/implementation_guides/gateway.md
3. dev-ext-impl-navigation -> docs/developpers/extensions/implementation_guides/navigation.md
4. dev-ext-impl-email -> docs/developpers/extensions/implementation_guides/email.md
5. dev-ext-impl-settings -> docs/developpers/extensions/implementation_guides/settings.md
6. dev-ext-impl-product-index -> docs/developpers/extensions/implementation_guides/product/product.md
7. dev-ext-impl-product-config -> docs/developpers/extensions/implementation_guides/product/configuration.md
8. dev-ext-impl-product-data -> docs/developpers/extensions/implementation_guides/product/data.md
9. dev-ext-impl-product-panel -> docs/developpers/extensions/implementation_guides/product/panel.md
10. dev-ext-impl-product-server -> docs/developpers/extensions/implementation_guides/product/server.md

### Software Guides (8 fichiers)
11. dev-software-index -> docs/developpers/software/software.md
12. dev-software-captcha -> docs/developpers/software/captcha.md
13. dev-software-phpmyadmin -> docs/developpers/software/phpmyadmin.md
14. dev-software-proxmox -> docs/developpers/software/proxmox.md
15. dev-software-fivem -> docs/developpers/software/fivem-changer-cle.md
16. dev-software-domain-a -> docs/developpers/software/relier-domain-a.md
17. dev-software-domain-cname -> docs/developpers/software/relier-domain-cname.md
18. dev-software-migrate-cloud -> docs/developpers/software/migrate_cloud_to_v2.md

## Workflow pour chaque story

git pull --rebase alexwrite feat/i18n

1. Lire le fichier source (FR)
2. Traduire FR -> EN :
   - Garder termes techniques, code blocks, chemins, URLs
   - Garder format admonitions (:::tip, :::warning, :::info)
   - Ajouter frontmatter: `translated: true`
3. Ecrire dans docs/<path>.md
4. Verifier que i18n/fr/.../path.md garde le FR original
5. Commit: `git commit -m "docs(i18n): translate <filename>"`
6. Push: `git pull --rebase alexwrite feat/i18n && git push alexwrite feat/i18n`
7. Passer a la story suivante

## Regles de traduction

- Traduire tout le texte FR en anglais clair et professionnel
- NE PAS traduire : noms de variables, code, commandes, chemins
- Garder le format markdown exact
- Garder les admonitions : `:::tip` -> `:::tip` (pas de changement de format)

## Commence maintenant

Clone/sync le repo et traite tes 18 stories dans l'ordre. Signale quand tu as termine.
