---
sidebar_position: 1
---

# Variables
**ClientXCMS** utilise le moteur de rendu [twig](https://twig.symfony.com) pour afficher les pages de l'espace client.
## Syntaxe simple
Plus d'informations [ici](https://twig.symfony.com/doc/3.x/templates.html)
### Boucle
```twig
{% for user in users %}
    * {{ user.name }}
{% else %}
    No users have been found.
{% endfor %}
```
### Condition
```twig
{% if 'ClientXCMS' ends with 'S' %}

{% endif %}
{% if 'ClientXCMS' ends with 'S' %}

{% else %}

{% endif %}

```
### Ternaire
```twig
{{ current_user() ? "Vous êtes actuellment connecté" : "Veuillez vous connecter ! " }}
```
### Afficher une valeur
```twig
{{ current_user().email }}
```
Vous pouvez personnaliser avec des variables qui prennent la valeur des informations de l'utilisateur actuellement connecté.

Liste complète des variables est disponible depuis la page "Variables" quand on modifie un modèle d'email.
