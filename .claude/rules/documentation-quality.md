# Qualité rédactionnelle

Sources : [Google Developer Documentation Style Guide](https://developers.google.com/style/highlights), [Diátaxis](https://diataxis.fr/).

## Clarté et concision

- Une idée par phrase. Phrases courtes, voix active (qui fait l'action doit être explicite).
- Placer la condition avant l'instruction ("Si X, faites Y" plutôt que "Faites Y si X").
- Titres et intitulés en casse de phrase, pas de Title Case.
- Termes UI en gras, code/commandes en police monospace, liens descriptifs (jamais "cliquez ici").
- Une liste numérotée pour une séquence d'étapes, une liste à puces pour une énumération sans ordre.

## Précision

- Aucune affirmation technique non vérifiée : si un comportement, un nom de champ ou une commande n'a pas été contrôlé à la source (code, doc officielle de la techno documentée), ne pas l'écrire comme un fait.
- Dates, versions, formats : toujours non ambigus.
- Ne pas laisser une page mélanger plusieurs objectifs (voir Diátaxis ci-dessous) : ça dilue la précision de chaque partie.

## Structure : les 4 types de contenu (Diátaxis)

Avant d'écrire une page, identifier laquelle des 4 catégories elle sert, et ne pas mélanger :

| Type | Répond à | Ne pas y mettre |
|---|---|---|
| Tutoriel | Apprendre en faisant, pour un débutant | Options avancées, discussion de choix d'architecture |
| Guide pratique (how-to) | Résoudre un problème précis d'un utilisateur qui sait déjà s'en servir | Pédagogie de base, exhaustivité |
| Référence | Décrire précisément et exhaustivement (API, config, options) | Ton narratif, justification du pourquoi |
| Explication | Comprendre le contexte, le pourquoi, les compromis | Instructions pas-à-pas |

Une page qui essaie de faire les quatre à la fois finit par mal servir chacun des quatre besoins.

## Niveau de détail

- Détailler uniquement ce qui a un impact réel sur ce que le lecteur doit faire ou comprendre. Le détail se justifie par l'utilité, pas par l'exhaustivité pour elle-même.
- Un cas limite, un piège connu, une valeur par défaut non intuitive : à détailler explicitement, ce sont les endroits où le lecteur se plante sans aide.
- Un point déjà couvert ailleurs dans la doc : lien vers cette page, pas de duplication du contenu.
