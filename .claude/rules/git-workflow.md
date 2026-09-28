# Workflow git

## Remotes

| Remote | Pointe vers | Usage |
|---|---|---|
| `origin` | `ClientXCMS/docs.clientxcms.com` | Dépôt officiel |
| `fork` (nom local, propre à chaque contributeur) | Le fork personnel du contributeur | Pour une session de travail groupant plusieurs sujets (partir de `preprod`) |

## Pull Requests uniquement

Toute contribution part d'une branche (`feat/nom-feature`, `fix/nom-issue`) et arrive sur `preprod` via une Pull Request - jamais de push direct. `preprod` est ensuite promue vers `V2` par l'équipe ClientXCMS, de manière hebdomadaire.
