# Worker 5 - Extensions Addons (part 2)

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-5

## Tes stories assignees (dans l'ordre)

1. ext-addons-announcement-bar -> docs/extensions/addons/announcement_bar.md
2. ext-addons-customers-reviews -> docs/extensions/addons/customers_reviews.md
3. ext-addons-backup -> docs/extensions/addons/backup.md
4. ext-addons-discordgift -> docs/extensions/addons/discordgift.md
5. ext-addons-discordlink -> docs/extensions/addons/discordlink.md
6. ext-addons-giftcard -> docs/extensions/addons/giftcard.md
7. ext-addons-fund -> docs/extensions/addons/fund.md
8. ext-addons-reselling -> docs/extensions/addons/reselling_client.md
9. ext-addons-cloudflare -> docs/extensions/addons/cloudflaresubdomains.md
10. ext-addons-netbox -> docs/extensions/addons/netbox.md
11. ext-addons-supportid -> docs/extensions/addons/supportid.md
12. ext-addons-free-trial -> docs/extensions/addons/free_trial.md
13. ext-addons-faq -> docs/extensions/addons/faq.md
14. ext-addons-importation -> docs/extensions/addons/importation.md
15. ext-addons-pennylane -> docs/extensions/addons/pennylane.md
16. ext-addons-abby -> docs/extensions/addons/abby.md
17. ext-addons-sitemap -> docs/extensions/addons/sitemap.md
18. ext-addons-purchasealert -> docs/extensions/addons/purchasealert.md
19. ext-addons-antidouble -> docs/extensions/addons/antidoublecompte.md
20. ext-addons-page -> docs/extensions/addons/page.md

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
6. Mettre a jour sprint-status.yaml: status: done, owner: worker-5
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
