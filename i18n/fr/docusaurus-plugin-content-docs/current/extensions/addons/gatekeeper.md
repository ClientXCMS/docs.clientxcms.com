# Gatekeeper

L'addon **Gatekeeper** bloque des adresses IP, des plages d'adresses (CIDR) et des pays sur votre ClientXCMS. Un blocage peut couvrir tout le site ou seulement les formulaires de connexion et d'inscription. Depuis la fiche d'un client, vous pouvez aussi bannir toutes les adresses IP qu'il a utilisées et retrouver les autres comptes qui partagent ces adresses.

:::info Addon requis
Activez l'addon **Gatekeeper** dans **Paramètres > Extensions** avant de le configurer. L'activation crée ses tables et indexe les adresses IP déjà présentes dans l'historique des actions.
:::

![Règles Gatekeeper](/img/next_gen/extensions/addons/gatekeeper/rules-index.png#gh-light-mode-only)![Règles Gatekeeper](/img/next_gen/extensions/addons/gatekeeper/rules-index-dark.png#gh-dark-mode-only)

## Où le trouver

Gatekeeper se trouve dans **Paramètres > Sécurité**, avec deux entrées :

| Entrée | Contenu |
| :--- | :--- |
| **Gatekeeper** | Indicateurs, règles, journal des blocages, ajout en masse, import et export CSV, test d'une IP. |
| **Paramètres Gatekeeper** | Comportement global, message affiché, chemins exclus et fournisseurs de géolocalisation. |

Deux permissions contrôlent l'accès : `admin.show_gatekeeper` (consulter) et `admin.manage_gatekeeper` (créer, modifier et supprimer). Attribuez-les aux rôles du personnel concernés.

## Vérification d'une requête

1. Les requêtes vers l'administration et celles d'un membre du personnel connecté ne sont jamais vérifiées. Vous ne pouvez pas vous bloquer l'accès à l'administration.
2. Les chemins listés dans **Chemins jamais filtrés** sont ignorés, par exemple les notifications des moyens de paiement.
3. Gatekeeper cherche les règles qui correspondent à l'adresse IP et au pays du visiteur pour la page demandée.
4. Une règle **Autoriser** passe toujours avant une règle **Bloquer**.
5. Si une règle de blocage correspond, le visiteur voit une page « Accès refusé » avec une référence. Sur un formulaire de connexion ou d'inscription, le formulaire affiche un message d'erreur à la place. Les appels API reçoivent une réponse JSON `403`.

Le mode **Journaliser seulement** enregistre les correspondances dans le journal sans bloquer personne. Utilisez-le pour tester de nouvelles règles avant de les appliquer.

## Indicateurs

Quatre indicateurs s'affichent en haut de la page **Gatekeeper** :

| Indicateur | Signification |
| :--- | :--- |
| **Blocages actifs** | Règles de blocage activées et non expirées. |
| **Règles autorisées** | Règles d'autorisation (liste blanche) activées. |
| **Requêtes bloquées (24 h)** | Entrées enregistrées dans le journal des blocages sur les dernières 24 heures. |
| **Règles expirées** | Règles dont la date d'expiration est passée. Elles sont supprimées chaque jour. |

## Créer une règle

1. Ouvrez **Paramètres > Sécurité > Gatekeeper**.
2. Cliquez sur **Créer**.
3. Remplissez le formulaire, puis cliquez sur **Créer**.

![Créer une règle](/img/next_gen/extensions/addons/gatekeeper/rule-create.png#gh-light-mode-only)![Créer une règle](/img/next_gen/extensions/addons/gatekeeper/rule-create-dark.png#gh-dark-mode-only)

| Champ | Description |
| :--- | :--- |
| **Type** | **Détection automatique**, **Adresse IP**, **Plage CIDR** ou **Pays**. La détection automatique reconnaît le format de la valeur. |
| **Valeur** | Une adresse IPv4 ou IPv6 (`203.0.113.7`), une plage CIDR (`203.0.113.0/24`, `2001:db8::/48`) ou un code pays ISO (`RU`). Vous pouvez aussi choisir un pays dans la liste. `T1` cible les nœuds de sortie Tor lorsque votre site est derrière Cloudflare. |
| **Action** | **Bloquer**, ou **Autoriser (liste blanche)** pour toujours laisser passer une adresse. |
| **Portée** | **Tout le site**, **Connexion + inscription**, **Connexion uniquement** ou **Inscription uniquement**. |
| **Expiration** | Vide pour une règle permanente. Accepte une date ou un raccourci : `30m`, `12h`, `7d`. |
| **Raison (interne)** | Note pour votre équipe. Elle peut être affichée au visiteur si **Afficher la raison de la règle** est activé. |
| **ID client associé** | Rattache la règle à un compte client. |
| **Activée** | Désactive la règle sans la supprimer. |

:::warning Votre propre adresse IP
Gatekeeper refuse une règle de blocage qui couvre votre adresse IP actuelle, affichée au-dessus du formulaire. Pour la créer quand même, cochez **Je sais que cette règle couvre ma propre IP**. L'administration n'est jamais bloquée.
:::

## Ajouter plusieurs valeurs d'un coup

Cliquez sur **Ajout en masse** pour coller une valeur par ligne. Ajoutez `# raison` en fin de ligne pour enregistrer une raison pour cette valeur. Les doublons sont ignorés.

```text
203.0.113.7
198.51.100.0/24 # scanner
2001:db8::/48
RU
```

![Ajout en masse](/img/next_gen/extensions/addons/gatekeeper/bulk-add.png#gh-light-mode-only)![Ajout en masse](/img/next_gen/extensions/addons/gatekeeper/bulk-add-dark.png#gh-dark-mode-only)

Le même panneau importe un fichier CSV. **Exporter** produit un fichier au format attendu, avec les colonnes `type`, `value`, `action`, `scope`, `reason`, `enabled` et `expires_at`. Utilisez-le pour copier vos règles d'une instance à une autre.

## Tester une adresse IP

La section **Tester une IP**, en bas de la page des règles, indique quelle règle s'applique à une adresse sur tout le site, à la connexion et à l'inscription. Elle affiche aussi le pays et l'ASN trouvés par les fournisseurs de géolocalisation, les comptes clients qui ont utilisé cette IP et le nombre de blocages enregistrés.

![Tester une IP](/img/next_gen/extensions/addons/gatekeeper/test-ip.png#gh-light-mode-only)![Tester une IP](/img/next_gen/extensions/addons/gatekeeper/test-ip-dark.png#gh-dark-mode-only)

## Journal des blocages

Cliquez sur **Journal** pour voir les requêtes refusées : date, adresse IP, pays, règle, contexte et page. Gatekeeper enregistre au plus une entrée par adresse IP, règle et minute, pour qu'une rafale ne remplisse pas la base de données. La colonne de droite liste les adresses IP les plus bloquées sur les 7 derniers jours.

![Journal des blocages](/img/next_gen/extensions/addons/gatekeeper/hits.png#gh-light-mode-only)![Journal des blocages](/img/next_gen/extensions/addons/gatekeeper/hits-dark.png#gh-dark-mode-only)

Les entrées plus anciennes que la durée de conservation définie dans les paramètres sont supprimées chaque jour.

## Bannir les adresses IP d'un client

La fiche client comporte un onglet **Adresses IP**. Il liste les adresses IP trouvées dans l'historique (connexions, échecs de connexion et inscription), avec leur pays et leur ASN lorsqu'une base locale est disponible.

![Onglet Adresses IP](/img/next_gen/extensions/addons/gatekeeper/customer-tab.png#gh-light-mode-only)![Onglet Adresses IP](/img/next_gen/extensions/addons/gatekeeper/customer-tab-dark.png#gh-dark-mode-only)

L'onglet affiche aussi :

- **Comptes liés (IP partagée)** : les autres comptes qui ont utilisé l'une de ces adresses, ce qui peut révéler des comptes multiples. Une IP partagée peut aussi être un réseau d'entreprise, un VPN ou un opérateur mobile.
- **Règles créées depuis ce client**, avec un bouton pour toutes les retirer.

Pour bannir les adresses :

1. Sur la fiche client, cliquez sur **Bannir les IPs**, dans l'onglet ou dans le menu des actions.
2. Sélectionnez les adresses. Les adresses IP vues uniquement sur des échecs de connexion ne sont pas présélectionnées, car elles peuvent appartenir à un attaquant.
3. Si besoin, cochez **Bannir toute la plage** pour bloquer le réseau `/24` (IPv4) ou `/64` (IPv6), et définissez une portée, une raison et une expiration.
4. Si besoin, cochez **Bannir aussi le compte client**.
5. Cliquez sur **Bannir les IPs sélectionnées**.

![Panneau Bannir les IPs](/img/next_gen/extensions/addons/gatekeeper/customer-ban.png#gh-light-mode-only)![Panneau Bannir les IPs](/img/next_gen/extensions/addons/gatekeeper/customer-ban-dark.png#gh-dark-mode-only)

Le panneau de bannissement d'un client de ClientXCMS propose aussi **Bannir aussi ses adresses IP (Gatekeeper)**. À la réactivation du compte, **Retirer aussi ses IPs bannies (Gatekeeper)** supprime les règles créées depuis ce client.

Dans l'historique des actions, le détail d'une connexion ou d'une inscription affiche un bouton pour bannir son adresse IP. L'historique peut aussi être filtré par adresse IP.

## Paramètres

Ouvrez **Paramètres > Sécurité > Paramètres Gatekeeper**.

![Paramètres Gatekeeper](/img/next_gen/extensions/addons/gatekeeper/settings.png#gh-light-mode-only)![Paramètres Gatekeeper](/img/next_gen/extensions/addons/gatekeeper/settings-dark.png#gh-dark-mode-only)

| Paramètre | Description |
| :--- | :--- |
| **Activer Gatekeeper** | Active ou désactive toutes les vérifications. |
| **Mode** | **Bloquer**, ou **Journaliser seulement** pour enregistrer les correspondances sans bloquer. |
| **En-tête du pays** | En-tête qui transmet le pays du visiteur, `CF-IPCountry` par défaut avec Cloudflare. Laissez-le vide si aucun proxy ne renseigne cet en-tête, sinon les visiteurs peuvent le falsifier. |
| **Appels aux API de géolocalisation** | Quand les services externes peuvent être appelés : sur toutes les pages, seulement à la connexion et à l'inscription, ou jamais. |
| **Vérifier aussi le pays saisi dans le formulaire d'inscription** | Applique les règles pays de portée **Inscription** au pays saisi par le client. |
| **Afficher la raison de la règle au visiteur bloqué** | Ajoute la raison de la règle au message. |
| **Message affiché aux visiteurs bloqués** | Vide pour le message par défaut. |
| **Chemins jamais filtrés** | Un motif par ligne, par exemple `gateways/*/notification`. Gardez les notifications des moyens de paiement dans cette liste. |
| **Conservation du journal (jours)** | Les entrées du journal plus anciennes sont supprimées. |

## Géolocalisation

Les règles pays ont besoin du pays du visiteur. Gatekeeper lit d'abord l'en-tête du pays, puis interroge les fournisseurs activés par **Priorité** croissante jusqu'à ce que l'un d'eux renvoie un pays. Les résultats sont mis en cache par adresse IP (24 heures par défaut, 1 heure quand rien n'est trouvé). Un fournisseur en erreur est mis en pause pendant 5 minutes.

![Fournisseurs de géolocalisation](/img/next_gen/extensions/addons/gatekeeper/geolocation.png#gh-light-mode-only)![Fournisseurs de géolocalisation](/img/next_gen/extensions/addons/gatekeeper/geolocation-dark.png#gh-dark-mode-only)

| Fournisseur | Type | Identifiants | Données |
| :--- | :--- | :--- | :--- |
| **MaxMind GeoLite2 / GeoIP2 (.mmdb)** | Base locale | ID de compte et clé de licence MaxMind, pour le téléchargement | Pays, ASN avec la base GeoLite2-ASN |
| **MaxMind (web service)** | API | ID de compte et clé de licence MaxMind | Pays. Insights renvoie aussi l'ASN et les indicateurs proxy et hébergeur. |
| **ipinfo.io** | API | Jeton | Pays et ASN. Les indicateurs VPN et hébergeur dépendent de votre offre. |
| **ipapi.co** | API | Clé API optionnelle | Pays et ASN |
| **ip-api.com** | API | Clé Pro optionnelle | Pays, ASN, indicateurs proxy et hébergeur |

Les clés API et les clés de licence sont chiffrées avant d'être enregistrées et ne sont plus jamais affichées. Laissez un champ de clé vide pour conserver la valeur enregistrée, ou cochez **Supprimer la clé enregistrée** pour l'effacer.

:::warning ip-api.com sans clé
Sans clé Pro, ip-api.com est appelé uniquement en HTTP, limité à 45 requêtes par minute et réservé à un usage non commercial.
:::

### Télécharger les bases MaxMind

La base locale est le fournisseur recommandé : les recherches ne quittent pas votre serveur et ne consomment aucun quota d'API.

1. Créez un compte gratuit sur [maxmind.com](https://www.maxmind.com/en/geolite2/signup), puis générez une clé de licence dans **Manage License Keys**.
2. Dans le bloc **MaxMind GeoLite2 / GeoIP2 (.mmdb)**, renseignez votre **ID de compte MaxMind** et votre **Clé de licence**.
3. Choisissez l'**Édition**, par exemple `GeoLite2-Country`, et cochez **Télécharger aussi GeoLite2-ASN** si vous voulez l'ASN.
4. Cochez **Mise à jour automatique (2 fois par semaine)**, puis enregistrez.
5. Dans la section **Bases MaxMind**, cliquez sur **Mettre à jour maintenant**.

Les fichiers sont enregistrés dans `storage/app/gatekeeper/`. Gatekeeper vérifie la somme de contrôle SHA-256 de chaque téléchargement. Vous pouvez aussi utiliser vos propres fichiers `.mmdb` en renseignant les champs de chemin.

### Tester les fournisseurs

**Tester les fournisseurs** interroge chaque fournisseur configuré pour une adresse IP, sans passer par le cache. Le tableau affiche le pays, l'ASN, les indicateurs, le temps de réponse ou l'erreur de chaque fournisseur.

![Test des fournisseurs](/img/next_gen/extensions/addons/gatekeeper/geolocation-test.png#gh-light-mode-only)![Test des fournisseurs](/img/next_gen/extensions/addons/gatekeeper/geolocation-test-dark.png#gh-dark-mode-only)

## Tâches planifiées

Gatekeeper s'appuie sur le planificateur de ClientXCMS : la tâche cron doit donc être active.

| Commande | Fréquence | Rôle |
| :--- | :--- | :--- |
| `gatekeeper:sync-history` | Toutes les 10 minutes | Indexe les adresses IP de l'historique des actions pour retrouver les comptes liés. `--reset` reconstruit l'index. |
| `gatekeeper:purge` | Tous les jours | Supprime les règles expirées et les anciennes entrées du journal. |
| `gatekeeper:geoip-update --scheduled` | Mercredi et samedi | Met à jour les bases MaxMind si la mise à jour automatique est activée. |
