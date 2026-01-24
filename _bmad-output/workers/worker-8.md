# Worker 8 - Blog Posts (Part 1 - 2025)

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-8

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

1. blog/2025-12-31-bonne-annee-2026.md
2. blog/2025-12-15-nouvelle-version-2.14.10.md
3. blog/2025-12-15-nouveaux-addons-faq-avis-clients-netbox-supportid.md
4. blog/2025-11-21-update-clientxcms-novembre-2025.md
5. blog/2025-11-20-nouvelle-version-2.14.9.md
6. blog/2025-09-05-lancement-opensource.md
7. blog/2025-08-21-nouvelle-version-2.14.8.md
8. blog/2025-08-01-lancement-giftcard-discordgift.md
9. blog/2025-07-16-nouvelle-version-2.14.7.md
10. blog/2025-07-11-nouveau-forum.md
11. blog/2025-07-09-retour-ctxreselling.md
12. blog/2025-07-02-nouvelle-version-2.14.6.md
13. blog/2025-05-31-mise-en-opensource.md
14. blog/2025-05-28-nouvelle-version-2.14.5.md
15. blog/2025-04-25-nouvelle-version-2.14.4.md
16. blog/2025-03-18-nouvelle-version-2.14.3.md
17. blog/2025-03-14-nouveau-programme-partenaire.md
18. blog/2025-02-26-nouveau-support-ia.md

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
