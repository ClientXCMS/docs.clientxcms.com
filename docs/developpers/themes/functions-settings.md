---
sidebar_position: 3
---
# Fonctions & Paramètres
Cette page liste les fonctions et des clés de paramètres utilisables pour les thèmes.
## Fonctions
| Fonction                                                     | Description                                      |
|--------------------------------------------------------------|--------------------------------------------------|
| `{{ auth()->check() }}`                                      | Vérifie si l'utilisateur est connecté            |
| `{{ auth()->user() }}`                                       | Retourne l'utilisateur connecté                  |
| `{!! app('seo')->head() !!}`                                 | Retourne les meta à rajouter dans le head        |
| `{!! app('seo')->favicon() !!}`                              | Retourne la meta favicon                         |
| `{!! app('seo')->foot() !!}`                                 | Retourne les script de fin de page               |
| `{{ setting(key, value) }}`                                  | Retourne le titre du site                        |
| `{{ basket(false) }}`                                        | Retourne le model du panier                      |
| `{{ basket()->total() }}`                                    | Retourne le total du panier                      |
| `{{ basket()->quantity() }}`                                 | Retourne le nombre d'articles dans le panier     |
| `{{ basket()->items() }}`                                    | Retourne les articles du panier                  |
| `{{ is_darkmode() }}`                                        | Retourne vrai si la page est en mode sombre      |
| `{{ is_lightmode() }}`                                       | Retourne vrai si la page est en mode clair       |
| `{{ format_bytes($bytes, $precision = 2, $suffix = true) }}` | Retourne la taille en octets en Ko, Mo, Go, etc. |
| `{{ currency() }}`                                           | Renvoie la devise actuelle sous format ISO       |
| `{{ currency_symbol(?$currency = null) }}`                   | Renvoie la devise actuelle sous format monétaire |
| `{{ currencies() }}`                                         | Renvoie un tableau avec chaque devises           |
| `{{ tax_percent(?$iso = null) }}`                            | Renvoie le pourcentage de taxe pour un pays      |
| `{{ formatted_price($price, $currency = null) }}`            | Renvoie le prix formaté avec la devise           |
| `module_path($module, $path)`                                | Retourne le chemin d'un fichier d'un module      |
| `addon_path($module, $path)`                                 | Retourne le chemin d'un fichier d'un addon       |
| `theme_manager()`                                            | Renvoie l'instance du gestionnaire de thème      |
| `{{ is_subroute($route) }}`                                  | Retourne vrai si la route est une sous-route     |
| `{{ is_route($route) }}`                                     | Retourne vrai si la route est la route actuelle  |
| `{{ ctx_version() }}`                                        | Retourne la version de CLIENTXCMS                |
| `{{ theme_config($key, $default = null) }}`                  | Retourne la configuration du thème               |

## Paramètres

Vous pouvez les récupérer avec la fonction `{{ setting() }}`.

----------------
| Clé                        | Description                                        |
|----------------------------|----------------------------------------------------|
| `app_name`                 | Nom du site                                        |
| `app_url`                  | URL du site                                        |
| `app_timezone`             | Fuseau horaire du site                             |
| `app_address`              | Adresse du site                                    |
| `app_logo`                 | Logo du site                                       |
| `app_logo_text`            | Logo texte du site                                 |
| `app_favicon`              | Favicon du site                                    |
| `app_debug`                | Mode débogage du site                              |
| `app_env`                  | Environnement du site                              |
| `theme_header_logo`        | Affiche le logo dans le header du site             |
| `theme_switch_mode`        | Type de thème (both, light, dark)                  |
| `theme_footer_description` | Description du footer                              |
| `theme_home_title_meta`    | Titre meta de la page d'accueil                    |
| `theme_home_image_meta`    | Image meta de la page d'accueil                    |
| `seo_site_title`           | Titre du site (affiché à coté du titre de la page) |


