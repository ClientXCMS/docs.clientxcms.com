# i18n et qualité de contenu

## Parité EN/FR obligatoire

Chaque page de `/docs/` (source anglaise) doit avoir son miroir dans `/i18n/fr/docusaurus-plugin-content-docs/current/` au même chemin relatif. Éditer une page sans vérifier si son miroir FR a besoin du même changement est une livraison incomplète.

## Admonitions MDX équilibrées

`:::tip`, `:::warning`, `:::info` doivent être en nombre pair dans un fichier. Vérifier avec `grep -c ":::" <fichier>` avant de committer un fichier touché.

## Lire le fichier entier avant d'éditer

Sur les pages longues (settings, guides), lire le fichier en entier avant modification, pas seulement le contexte autour du diff : un bloc dupliqué ou une section orpheline ne se voit pas sur un petit diff.
