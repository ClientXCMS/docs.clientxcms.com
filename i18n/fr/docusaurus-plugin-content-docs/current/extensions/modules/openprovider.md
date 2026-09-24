# OpenProvider

OpenProvider connecte ClientXCMS au registrar OpenProvider. Le module permet d'importer les extensions que vous souhaitez vendre, de récupérer les prix du fournisseur, de configurer vos marges et d'approvisionner automatiquement les noms de domaine.

:::info Module requis
Activez le module OpenProvider dans ClientXCMS avant de commencer cette configuration.
:::

## Récupérer vos identifiants OpenProvider

OpenProvider authentifie les appels API avec l'adresse e-mail et le mot de passe d'une personne de contact dont l'accès API est activé. Dans ClientXCMS, la **Register env key** correspond donc à l'adresse e-mail du compte OpenProvider et le champ **Mot de passe/Clé API** au mot de passe de ce compte.

### Identifiants de production

1. Connectez-vous au [panneau de contrôle OpenProvider](https://cp.openprovider.eu/).
2. Ouvrez **Account overview > Contact persons**.
3. Ajoutez une personne de contact ou modifiez celle que ClientXCMS doit utiliser.
4. Ouvrez son onglet **API**, puis activez l'accès à l'API.
5. Utilisez l'adresse e-mail et le mot de passe de ce contact dans ClientXCMS.

Le compte doit être actif. Selon les extensions vendues, vous devrez également accepter les contrats proposés par les registres.

### Identifiants de test (sandbox)

La sandbox est un environnement séparé : les identifiants de production n'y fonctionnent pas.

1. Créez un compte dédié sur [cp.sandbox.openprovider.nl/signup](https://cp.sandbox.openprovider.nl/signup).
2. Connectez-vous au [panneau de contrôle de la sandbox](https://cp.sandbox.openprovider.nl/).
3. Activez l'accès API de la personne de contact comme indiqué ci-dessus.
4. Utilisez l'adresse e-mail et le mot de passe de ce contact sandbox dans ClientXCMS.
5. Activez le **mode test** pendant la configuration du serveur.

:::warning Limites de la sandbox
La sandbox ne prend pas en charge le transfert de domaines et certaines extensions peuvent être indisponibles. Désactivez le **mode test** et utilisez vos identifiants de production avant de vendre de vrais domaines.
:::

## Configurer le serveur

Dans l'administration ClientXCMS, ouvrez **Paramètres > Approvisionnement > Serveurs**, créez un serveur, puis sélectionnez **OpenProvider**.

Renseignez le nom du serveur et les identifiants suivants :

- **Register env key** : l'adresse e-mail du contact OpenProvider dont l'accès API est activé ;
- **Mot de passe/Clé API** : le mot de passe de ce contact ;
- **Mode test** : activez-le uniquement avec le compte sandbox OpenProvider.

Testez la connexion, puis enregistrez le serveur.

![Configuration du serveur OpenProvider dans ClientXCMS](/img/next_gen/extensions/modules/openprovider/config_servers.png)

## Créer le produit domaine

Créez un produit unique pour tous les fournisseurs et toutes les extensions. Il n'est pas nécessaire de créer un produit distinct pour chaque TLD.

1. Ouvrez **Paramètres > Boutique > Produits**, puis cliquez sur **Créer**.
2. Nommez le produit `Domain` et ajoutez une courte description.
3. Sélectionnez le type de produit domaine.
4. Définissez son prix de base à `0`. Le prix réel sera configuré pour chaque extension importée.
5. Enregistrez le produit.

![Création du produit Domain commun à toutes les extensions](/img/next_gen/extensions/modules/openprovider/create_products.png)

## Importer les extensions de domaines

1. Ouvrez **Paramètres > Approvisionnement > Extensions de domaines**.
2. Démarrez une importation, sélectionnez **OpenProvider** comme fournisseur, puis choisissez le serveur configuré précédemment.
3. Sélectionnez les extensions que vous souhaitez vendre. ClientXCMS charge alors les prix transmis par OpenProvider.

![Sélection des extensions OpenProvider à importer](/img/next_gen/extensions/modules/openprovider/record_domains1.png)

Vous pouvez ensuite définir vos prix de vente de deux manières :

- un **prix fixe** pour les extensions sélectionnées ;
- une **marge en pourcentage** appliquée au prix du fournisseur.

La sélection multiple permet d'appliquer un premier prix ou pourcentage à un groupe d'extensions, puis de sélectionner un autre groupe et de lui appliquer une tarification différente. Vérifiez les prix d'enregistrement, de renouvellement et de transfert, puis confirmez l'importation.

![Application des prix aux extensions sélectionnées](/img/next_gen/extensions/modules/openprovider/record_domains.png)

## Configurer les DNS par défaut

Après l'importation, ouvrez l'une des extensions depuis la liste des extensions de domaines.

1. Ajoutez les serveurs de noms qui seront affectés par défaut aux nouveaux domaines.
2. Ajoutez les enregistrements DNS que ClientXCMS devra créer automatiquement. Vous pouvez, par exemple, ajouter un enregistrement `A` pointant vers votre serveur web.
3. Enregistrez l'extension.

![Configuration des serveurs de noms et des DNS par défaut](/img/next_gen/extensions/modules/openprovider/set_defaultl_dns.png)

Revenez à la liste des extensions et sélectionnez celle que vous venez de configurer. Utilisez l'action de copie pour appliquer facilement la même configuration aux autres extensions sélectionnées, sans tout ressaisir pour chaque TLD.

![Copie de la configuration vers les autres extensions](/img/next_gen/extensions/modules/openprovider/show_extensions.png)

:::tip Avant l'ouverture des ventes
Passez une commande de test et vérifiez la recherche de disponibilité, les prix de vente, l'enregistrement, les serveurs de noms et les DNS par défaut. Une commande effectuée dans la sandbox n'enregistre pas de véritable domaine.
:::
