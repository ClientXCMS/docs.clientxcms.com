# Worker 1 - Settings Core + Billing + Helpdesk

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-1

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

1. settings-core-index -> docs/settings/core/core.md
2. settings-core-app -> docs/settings/core/app.md
3. settings-core-mail -> docs/settings/core/mail.md
4. settings-core-maintenance -> docs/settings/core/maintenance.md
5. settings-core-license -> docs/settings/core/license.md
6. settings-core-locales -> docs/settings/core/locales.md
7. settings-index -> docs/settings/settings.md
8. settings-billing-index -> docs/settings/billing/billing.md
9. settings-helpdesk-index -> docs/settings/helpdesk/helpdesk.md
10. settings-helpdesk-departments -> docs/settings/helpdesk/departments.md
11. settings-helpdesk-settings -> docs/settings/helpdesk/helpdesk-settings.md

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
6. Mettre a jour sprint-status.yaml: status: done, owner: worker-1
7. Commit: `git commit -m "done: <story-id>"`
8. Push: `git pull --rebase alexwrite feat/i18n && git push alexwrite feat/i18n`
9. Passer a la story suivante

## Regles de traduction

- Traduire tout le texte FR en anglais clair et professionnel
- NE PAS traduire : noms de variables, code, commandes, chemins
- Garder le format markdown exact
- Garder les admonitions : `:::tip` -> `:::tip` (pas de changement de format)

## Exemple

**Avant (FR):**
```markdown
:::tip Astuce
Configurez votre serveur avant de continuer.
:::
```

**Apres (EN):**
```markdown
:::tip Tip
Configure your server before continuing.
:::
```

## Commence maintenant

Clone/sync le repo et traite tes 11 stories dans l'ordre. Signale quand tu as termine.
