# Avis clients
L'extension **Avis clients** permet de collecter et d'afficher les avis de vos clients sur votre espace client. Les avis clients sont essentiels pour renforcer la confiance des acheteurs potentiels et améliorer la crédibilité de votre hébergeur en ligne.

![img](/img/next_gen/extensions/addons/customers_reviews/reviews.png)



## Configuration

Pour configurer l’extension **Avis clients**, rendez-vous dans :
`Espace d’administration` → `Paramètres` → `Avis clients` → `Configuration`

L’onglet **Configuration** est découpé en plusieurs sections accessibles via les sous-onglets :

* Collecte & Envoi
* Modération
* Récompenses
* Affichage
* Intégrations


## Collecte & Envoi

Cette section permet de gérer l’envoi automatique des demandes d’avis par email.

* **Email immédiat à la livraison**
  Envoie automatiquement un email de demande d’avis dès qu’un service est livré au client.

* **Délai avant relance automatique**
  Nombre de jours après la livraison avant l’envoi d’un email de relance si aucun avis n’a été soumis.
  `0` permet de désactiver totalement la relance automatique.


## Modération

Cette section définit les règles de validation et de publication des avis.

### Règles de modération

* **Validation manuelle obligatoire**
  Tous les avis doivent être approuvés manuellement avant d’être publiés.

* **Activer la modération intelligente par note**
  Active la publication automatique des avis atteignant un seuil de note défini.
  Si désactivée, tous les avis nécessitent une validation manuelle.

* **Seuil d’auto-publication**
  Note minimale (en étoiles) requise pour qu’un avis soit publié automatiquement.
  Exemple : 4 étoiles ou plus.

### Clients de confiance

Permet d’accorder des privilèges de publication automatique aux clients fidèles.

* **Activer le système de confiance**
  Autorise certains clients à publier leurs avis sans validation manuelle.

* **Ancienneté minimum requise**
  Nombre minimum de mois de fidélité requis pour être considéré comme client de confiance.

* **Services actifs minimum**
  Nombre minimum de services actifs requis pour accéder au statut de client de confiance.

* **Note minimum pour auto-publication**
  Note minimale requise pour qu’un avis d’un client de confiance soit publié automatiquement.


## Récompenses

Cette section permet d’inciter les clients à laisser un avis via un système de crédit.

* **Activer les récompenses**
  Active le crédit automatique du compte client lorsqu’un avis est publié.

* **Montant de la récompense**
  Montant du crédit (en euros) ajouté au compte client après validation et publication de l’avis.

* **Retirer la récompense en cas de suppression**
  Retire le crédit accordé si l’avis est supprimé définitivement.


## Affichage

Cette section contrôle la manière dont les avis sont affichés sur le site public et les fiches produits.

### Widgets sur les produits

* **Afficher les étoiles**
  Affiche la note moyenne et le nombre d’avis sur les cartes produits.

* **Badge “Top Rated”**
  Affiche un badge spécial sur les produits les mieux notés.

* **Note minimum “Top Rated”**
  Note minimale requise pour qu’un produit obtienne le badge “Top Rated”.

* **Avis minimum pour le badge**
  Nombre minimum d’avis publiés requis pour afficher le badge.

### Affichage public

* **Avis par page**
  Nombre d’avis affichés par page sur l’espace public.

* **Afficher le nom du client**
  Affiche le nom du client sous chaque avis publié.

* **Restreindre aux services livrés**
  Seuls les clients ayant un service actif ou livré peuvent laisser un avis.


## Intégrations

Cette section permet d’intégrer le système d’avis avec des services externes.

### Webhook Discord

* **URL du Webhook**
  URL du webhook Discord utilisé pour recevoir des notifications lorsqu’un avis est :

  * soumis
  * approuvé
  * rejeté

![img](/img/next_gen/extensions/addons/customers_reviews/discord_webhook.png)

### Produits désactivés

* **Produits sans avis**
  Liste des produits pour lesquels les avis clients sont désactivés.
  Les clients ne pourront pas soumettre d’avis sur ces produits.
## Avis
![img](/img/next_gen/extensions/addons/customers_reviews/reviews_admin.png)
L’onglet **Avis** permet de gérer l’ensemble des avis clients soumis via le formulaire. Vous pouvez y approuver, rejeter ou supprimer des avis.
Si l’option de modération intelligente est activée, les avis atteignant le seuil de note défini seront publiés automatiquement.
### Affichage de l'avis 
![img](/img/next_gen/extensions/addons/customers_reviews/review_detail.png)
Vous pouvez cliquer sur un avis pour afficher ses détails complets, y compris les réponses aux questions personnalisées si elles ont été configurées.

### Actions sur les avis
* **Approuver**
  Publie l’avis sur le site public.
* **Rejeter**
  Marque l’avis comme rejeté, il ne sera pas publié.
* **Supprimer**
  Supprime définitivement l’avis de la base de données.
* **Masquer**
  Cache l’avis de l’affichage public sans le supprimer. (Le client peut toujours le voir dans son espace, ainsi que la raison du masquage.)

Selon la configuration, l’approbation d’un avis peut également créditer automatiquement le compte client ou envoyer une notification via webhook Discord. Cela retirera également le crédit si l’avis est supprimé ou masqué.


## Configuration des questions

Pour gérer les questions posées aux clients lors de la soumission d’un avis :
`Espace d’administration` → `Paramètres` → `Avis clients` → `Questionnaires`

* **Identifiant unique**
  Identifiant interne unique de la question.

* **Type de question**
  Type de réponse attendu : notation par étoiles, texte libre, choix multiple, etc.

* **Ordre d’affichage**
  Position de la question dans le formulaire.

* **Question**
  Texte affiché au client.

* **Question facultative**
  Définit si la question est obligatoire ou non.

* **Question principale**
  Met en avant la question dans le formulaire.

* **Question globale**
  Applique la question à tous les produits.

### Configuration des questions
Pour configurer les questions d'avis, accédez à `Espace d'administration` > `Paramètres` > `Avis clients` > `Questionnaires`. Vous pouvez ajouter, modifier ou supprimer des questions que vos clients devront répondre lors de la soumission de leur avis.

![img](/img/next_gen/extensions/addons/customers_reviews/questions.png)

#### Création d'une question
Pour créer une nouvelle question, cliquez sur le bouton `Créer`. Vous pouvez définir le type de question (texte, évaluation par étoiles, choix multiple, etc.) et les options associées.

**Identifiant unique** : Chaque question doit avoir un identifiant unique pour faciliter la gestion des réponses.

**Type de question** : Choisissez le type de question en fonction des informations que vous souhaitez recueillir (Notation, texte libre, choix multiple, etc.).

**Ordre d'affichage** : Définissez l'ordre dans lequel les questions apparaîtront dans le formulaire d'avis.

**Question** : Saisissez le texte de la question qui sera affiché aux clients.

**Question facultative** : Cochez cette option si la question n'est pas obligatoire.

**Question principale** : Cochez cette option si la question doit être mise en avant dans le formulaire.

**Questions globales** : Cochez cette option si la question doit s'appliquer à tous les produits.

**Produits** : Sélectionnez les produits spécifiques auxquels la question s'applique si elle n'est pas globale.

**Options de la question** : Pour les questions à choix multiple, ajoutez les différentes options que les clients pourront sélectionner.

**Produits associés** : Affiche les produits liés à cette question.

#### Edition d'une question

Pour modifier une question existante, cliquez sur l'icône d'édition à côté de la question dans la liste. Apportez les modifications nécessaires et enregistrez.

## Rendu sur les produits

L'extension permet d'afficher les avis clients directement sur les pages produits de votre boutique. Cela affiche la note moyenne, le nombre d'avis.
![img](/img/next_gen/extensions/addons/customers_reviews/products.png)

### Support des thèmes
Pour supporter l'affichage des avis clients sur les produits, votre thème doit inclure les hooks suivants dans le fichier de template des produits :

```blade
    @includeWhen(app('extension')->extensionIsEnabled('customers_reviews'), 'customers_reviews::partials.product_widgets', ['product' => $product])
```

## Inviter des clients à laisser un avis
Pour inviter vos clients à laisser un avis, vous pouvez utiliser la fonctionnalité d'envoi automatique d'emails de demande d'avis. Cette fonctionnalité est disponible dans les `paramètres` > `Avis clients` > `Inviter des clients à laisser un avis`.

Vous pourrez selectionner les services auprès desquels envoyer une demande d'avis pour recevoir vos premiers retours clients de clients enregistrés.

## Statistiques des avis
Vous pouvez consulter les statistiques des avis clients dans `Espace d'administration` > `Avis client` > `Statistiques des clients`. Vous y trouverez meilleures produits, les produits à améliorer, ainsi que des statistiques globales sur les avis reçus.