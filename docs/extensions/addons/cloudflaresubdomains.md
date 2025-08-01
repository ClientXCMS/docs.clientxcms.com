# Cloudflare Subdomains

Cette extension permet de gérer les sous-domaines avec Cloudflare. Elle est utile pour les utilisateurs qui souhaitent offrir à leurs clients la possibilité de créer des sous-domaines personnalisés pour leurs services.

## Type supporté
- cPanel
- Pterodactyl
- Plesk

::info Modules
Pour utiliser la fonctionnalité de sous-domaines avec Pterodactyl, veuillez installer le package `clientxcms/sso-pterodactyl` via Composer. Vous pouvez le faire en exécutant la commande suivante dans votre terminal :
```bash
composer require clientxcms/sso-pterodactyl
```
Celui ci rajoutera les endpoints nécessaires pour la gestion des sous-domaines dans Pterodactyl
## Installation
Vous pouvez l’activer depuis la section **Extensions**, puis le configurer via les **paramètres d’extension** disponible dans la section **Approvisionnement**.

### Création de l'API Cloudflare
![img](/img/next_gen/extensions/addons/cloudflaresubdomains/api.png)
Pour utiliser cette extension, vous devez créer une clé API dans votre compte Cloudflare. Voici comment
1. Connectez-vous à votre compte Cloudflare.
2. Allez dans la section **Mon profil**.
3. Cliquez sur **API Tokens**.
4. Cliquez sur **Create Token**.
5. Sélectionnez **Edit zone DNS** dans les permissions.
6. Sélectionnez les zones que vous souhaitez gérer avec cette clé.
7. Cliquez sur **Continue to summary** puis sur **Create Token**.
8. Copiez la clé API générée.
9. Collez la clé API dans les paramètres de l'extension Cloudflare Subdomains dans CLIENTXCMS.
![img](/img/next_gen/extensions/addons/cloudflaresubdomains/config.png)

**Clé API** : La clé API que vous avez générée dans votre compte Cloudflare.

**TTL** : Le TTL (Time To Live) est le temps pendant lequel les enregistrements DNS sont mis en cache. Par défaut, il est réglé sur 1 heure (3600 secondes). Vous pouvez le modifier selon vos besoins.

**Proxied** : Cette option permet de choisir si le trafic vers le sous-domaine doit passer par le réseau Cloudflare. Si vous activez cette option, le trafic sera protégé par Cloudflare et bénéficiera de ses fonctionnalités de sécurité et de performance. Si vous la désactivez, le trafic ira directement vers votre serveur.

Puis vous pouvez cliquer sur **Enregistrer** pour sauvegarder vos paramètres.

## Configurer un sous-domaine
Pour configurer un sous-domaine, allez dans les paramètres > Approvisionnement > Sous-domaines et selectionnez le domaine que vous souhaitez automatiser.

![img](/img/next_gen/extensions/addons/cloudflaresubdomains/config2.png)

Celui ci ajoutez une metadonnées **cloudflare_zone_id** avec l'ID de la zone Cloudflare que vous souhaitez utiliser pour les sous-domaines.
Vous pouvez trouver l'ID de la zone dans votre tableau de bord Cloudflare, dans la section **Overview** du domaine concerné.

![img](/img/next_gen/extensions/addons/cloudflaresubdomains/zone_id.png)

## Liste des sous-domaines
Vous pouvez consulter la liste des sous-domaines créés dans la section **Sous-domaines** de l'extension Cloudflare Subdomains. Cette liste affiche les sous-domaines créés, leur statut et les actions possibles.
![img](/img/next_gen/extensions/addons/cloudflaresubdomains/domains.png)

Ils se supprimeront automatiquement si le service est expiré ou supprimé.
Vous pouvez y retrouver les colonnes suivantes :
- **ID de l'enregistrement** : L'ID de l'enregistrement DNS dans Cloudflare.
- **Sous-domaine** : Le sous-domaine créé pour le service.
- **Cible** : l'IP auquel le sous-domaine est associé.
- **Service** : Le service auquel le sous-domaine est associé.
- **Suppression** : Un bouton pour supprimer le sous-domaine.