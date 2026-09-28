# CLAUDE.md

Documentation officielle ClientXCMS (Docusaurus, https://docs.clientxcms.com). Version exacte : `package.json`.

## Commandes

Ne jamais exécuter de commande npm/build/déploiement directement : demander à l'utilisateur de lancer les commandes documentées dans `README.md`.

## Structure

- `/docs/` - contenu anglais (source de vérité)
- `/i18n/fr/docusaurus-plugin-content-docs/current/` - miroir français, même arborescence
- `/blog/`, `/src/`, `/static/` - blog, composants, assets
- Les assets locaux suivent le chemin de la doc (`/docs/settings/core/x` -> `/static/img/next_gen/settings/core/x`) ; certaines pages référencent aussi des images externes (`cdn.clientxcms.com` notamment)

## Branches

| Branche | Rôle |
|---|---|
| `V2` | Production (branche par défaut) |
| `preprod` | Pré-production |

Détail du workflow git et des remotes : `.claude/rules/git-workflow.md` (chargé automatiquement).
Parité i18n et qualité de contenu : `.claude/rules/content-i18n.md` (chargé automatiquement).
Style de rédaction : `.claude/rules/writing-style.md` (chargé automatiquement).
Qualité rédactionnelle (clarté, précision, structure) : `.claude/rules/documentation-quality.md` (chargé automatiquement).
Architecture de l'information et présentation : `.claude/rules/information-architecture.md` (chargé automatiquement).
Captures d'écran : `.claude/rules/screenshots.md` (chargé automatiquement).
Terminologie : `.claude/rules/terminology.md` (chargé automatiquement).
Signaler une info liée à une version : `.claude/rules/versioning.md` (chargé automatiquement).

## Nommage

- Fichiers en minuscules, kebab-case, noms en anglais
- `_category_.json` par dossier : `{"label": "...", "position": N}`
