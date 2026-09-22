# Signaler une information liée à une version

Source : synthèse de guides de style technique (SUSE Documentation Style Guide et pratiques docs-as-code communément admises) sur le versioning en documentation.

## Ne jamais figer "la version actuelle"

Ne jamais écrire "la version actuelle est X.Y" ou citer un numéro de version précis d'un outil/framework dans une prose générale (ex : "Docusaurus 3.10") - cette phrase est fausse dès la prochaine mise à jour. Renvoyer vers la source de vérité (`package.json`, `composer.lock`, changelog du projet documenté) plutôt que de recopier un numéro.

## Lien vers une doc tierce versionnée : préférer l'URL sans version

Quand la doc officielle d'une dépendance propose une URL sans numéro de version qui redirige vers la dernière version (ex : `laravel.com/docs/controllers` plutôt que `laravel.com/docs/12.x/controllers`), toujours utiliser la forme sans version. Un lien figé sur une version précise devient faux dès que le projet documenté ou la dépendance elle-même monte de version - vérifié : le repo pointait encore vers `laravel.com/docs/11.x/...` alors que le core tourne en Laravel 12.

## Ancrer sur un point fixe, pas sur "maintenant"

Pour une fonctionnalité qui n'existe qu'à partir d'une version donnée : utiliser un repère fixe dans le temps ("Disponible depuis la version X.Y", "Depuis X.Y") plutôt qu'une comparaison à la version actuelle ("dans la dernière version", "récemment ajouté"). Un repère fixe reste vrai indéfiniment ; une comparaison au présent devient fausse dès qu'une version sort.

## Ne jamais documenter une fonctionnalité non sortie

Ne pas décrire comme disponible une fonctionnalité prévue mais pas encore livrée dans une version stable. Si le contenu doit exister par anticipation, le signaler explicitement comme à venir, jamais présenté au même niveau que l'existant.

## Fonctionnalité dépréciée ou supprimée

Une fonctionnalité retirée ou dépréciée reste documentée avec un avertissement explicite (dépréciation, date/version de retrait, alternative) plutôt que d'être supprimée silencieusement ou laissée telle quelle comme si elle était toujours d'actualité.
