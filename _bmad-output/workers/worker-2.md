# Worker 2 - Settings Personalization + Provisioning

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-2

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

1. settings-personalization-index -> docs/settings/personalization/personalization.md
2. settings-personalization-home -> docs/settings/personalization/home.md
3. settings-personalization-front-menu -> docs/settings/personalization/front_menu.md
4. settings-personalization-bottom-menu -> docs/settings/personalization/bottom_menu.md
5. settings-personalization-sections -> docs/settings/personalization/sections.md
6. settings-personalization-seo -> docs/settings/personalization/seo.md
7. settings-personalization-socials -> docs/settings/personalization/socials.md
8. settings-provisioning-index -> docs/settings/provisioning/provisioning.md
9. settings-provisioning-servers -> docs/settings/provisioning/servers.md
10. settings-provisioning-services -> docs/settings/provisioning/services.md
11. settings-provisioning-configoptions -> docs/settings/provisioning/configoptions.md
12. settings-provisioning-cancellation -> docs/settings/provisioning/cancellation_reasons.md

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
6. Mettre a jour sprint-status.yaml: status: done, owner: worker-2
7. Commit: `git commit -m "done: <story-id>"`
8. Push: `git pull --rebase alexwrite feat/i18n && git push alexwrite feat/i18n`
9. Passer a la story suivante

## Regles de traduction

- Traduire tout le texte FR en anglais clair et professionnel
- NE PAS traduire : noms de variables, code, commandes, chemins
- Garder le format markdown exact
- Garder les admonitions : `:::tip` -> `:::tip` (pas de changement de format)

## Commence maintenant

Clone/sync le repo et traite tes 12 stories dans l'ordre. Signale quand tu as termine.
