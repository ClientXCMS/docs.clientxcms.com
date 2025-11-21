---
sidebar_position: 1
---

# Produits

Dans **CLIENTXCMS**, un **produit** correspond à un **service que vous proposez à la location** dans votre boutique. <br/>
L’objectif est clair : **définir précisément chaque offre, personnaliser son apparence et maîtriser sa commercialisation**. Une bonne configuration des produits permet à vos clients de **comprendre rapidement ce qu’ils achètent** et de passer commande en toute confiance.

Chaque produit peut être entièrement personnalisé : nom, description, prix, type, durée, gestion du stock, visibilité, etc.

Vous pouvez gérer les produits depuis :

`Paramètres` > `Paramètres de la boutique` > `Produits`

![Accès à la configuration des produits](/img/next_gen/settings/store/products/settings.png)

:::tip Astuce
Un produit **ne peut pas exister sans être rattaché à un groupe**.
Avant de créer un produit, assurez-vous que les groupes sont bien définis pour garantir une boutique cohérente et facile à naviguer.
:::

## Pourquoi utiliser des produits ?

Les produits sont le cœur de votre boutique. Ils représentent concrètement ce que vous vendez — que ce soit un service d'hébergement comme un VPS, une instance Plesk, cPanel ou tout autre service.

Créer des produits bien définis vous permet de :

* Présenter clairement chaque service proposé à vos clients
* Définir précisément les caractéristiques, les prix et les options de chaque offre
* Gérer facilement la facturation, la durée, et le renouvellement de vos services

:::tip Astuce
C’est un peu comme étiqueter chaque article dans un magasin 🏷️ — vos clients savent exactement ce qu’ils achètent, et vous, vous gardez le contrôle sur chaque aspect de la vente.
:::

## Interfaces utilisateur
### Vue côté boutique

Les produits sont affichés dans la boutique et organisés par **groupes**.  
Chaque groupe est accessible via une URL structurée comme suit :

https://demo.clientxcms.com/store/nomdugroupe

Par exemple, pour un groupe nommé **pterodactyl** :
https://demo.clientxcms.com/store/pterodactyl

![Vision dans un groupe de produit](/img/next_gen/settings/store/products/store_list.png)

Cela permet de **classer vos offres par type de service**, comme par exemple :

- Hébergement Pterodactyl
- Hébergement Minecraft
- VPS KVM
- VPS LXC
- Licences ClientXCMS
- Starter Pack Hébergeur

## Vue administrateur

Dans l’interface d’administration, vous disposez d’une liste complète des produits créés. Vous pouvez :
- **Rechercher** un produit par son nom ou le groupe de produit
- **Filtrer** par groupe
- **Effectuer des actions** comme modifier, dupliquer ou supprimer un produit

![Vue de la liste des produits en administration](/img/next_gen/settings/store/products/admin_list.png)

### Actions disponibles

| Action        | Description                                  |
|---------------|----------------------------------------------|
| **Cloner**    | Duplique le produit existant                 |
| **Afficher**  | Ouvre le produit pour l’éditer               |
| **Supprimer** | Supprime définitivement le produit           |

:::danger Attention
La suppression d’un produit peut provoquer des erreurs si celui-ci est lié à des services ou commandes.  
Procédez avec prudence, nous recommandons de ne rien supprimer sous aucun pretexte à aucun moment du cycle de vie de votre CMS.
:::

### Types de produits

Chaque produit doit obligatoirement être **associé à un type**.  
Les types sont fournis par les **modules d’approvisionnement** (comme *Pterodactyl*, *Proxmox* ou *Plesk*) que vous pouvez activer dans les paramètres d'administration situé dans `Paramètres` > `Paramètres des extensions` > `Extensions`

Ces types permettent à CLIENTXCMS de synchroniser automatiquement vos produits avec les modules de gestion (facturation, création de service, configuration, etc.).

Merci de vous reporter directement à la section des [modules](../../../extensions) pour plus d'information à ce sujet.

### Cycles de facturation disponibles

Un **cycle de facturation** détermine la fréquence à laquelle le client paiera pour le produit.

Voici les cycles disponibles :

- **Mensuel**
- **Trimestriel**
- **Semestriel**
- **Annuel**
- **Biannuel**
- **Triennal**
- **Hebdomadaire**

Chaque cycle peut avoir son propre prix.

## Créer un nouveau produit

Pour ajouter un produit à votre boutique, cliquez sur le bouton **« Créer »** en haut à droite de la page.

![Création d'un produit](/img/next_gen/settings/store/products/create_product.png)

### Paramètres à définir

Voici les champs à compléter lors de la création d’un produit :

**Nom** | (texte)<br />

Le nom du produit tel qu’il apparaîtra dans votre boutique, ce dernier sera également sa référence commerciale sur les factures

**Stock disponible** |  (champ numérique)<br />

Quantité disponible pour ce produit. Reportez-vous à la section [Gérer le stock d’un produit](./products#gérer-le-stock-dun-produit) pour en savoir plus.

**Type de produit** | (menu déroulant)<br />

Sélectionnez le type de service que vous souhaitez livrer à votre client. Pour plus d'informations, consultez la section dédiée aux [types de produits](./products#types-de-produits).

**Statut** | (menu déroulant)<br />

Définit la visibilité du produit dans la boutique :

* **Actif** : Disponible à l'achat dans la boutique
* **Non référencé** : Accessible uniquement via un lien direct
* **Caché** : Indisponible à l'achat

Merci de vous reporter à la section dédié [au statut d'un produit](./products#statut-du-produit). pour de plus ample informations à ce sujet. <br />

**Groupe de produit** | (menu déroulant)<br />

Associez votre produit à un groupe pour qu’il apparaisse correctement dans la boutique.<br />
Merci de vous reporter à la page dédié aux [groupes](./groupes) pour de plus ample informations à ce sujet.<br />

**Ordre de tri** | (champ numérique)<br />

Détermine la position du produit dans son groupe. Un chiffre plus bas le place plus haut dans la liste.

**Épinglé** | (case à cocher)<br />

Permet de mettre en avant ce produit. Il sera affiché en tête de liste dans son groupe.

**Description** | (zone de texte avec éditeur HTML)<br />

Rédigez ici une courte description qui sera affichée dans la description du produit. Ce champ prend en charge le HTML et le CSS via l'éditeur intégré (compatible avec TailwindCSS).

> ⚠️ Soyez rigoureux : un code mal structuré ou une balise non fermée peut altérer l'affichage du CMS.

Exemple de description en HTML

```html
<p class="ql-align-center">Une solution conçue pour allier accessibilité et fiabilité, soutenue par votre engagement.</p>
<p class="ql-align-center"><em>(Offre réservée aux adhérents de l'association)</em></p>
<ol>
    <li class="ql-align-center"><strong>Processeur</strong> : 8 vCPU Ryzen 9 7950x3D @ 4.2 GHz jusqu'à 5.7 GHz</li>
    <li class="ql-align-center"><strong>Mémoire vive</strong> : 32 Go de RAM DDR5</li>
    <li class="ql-align-center"><strong>Stockage</strong> : 200 Go SSD</li>
    <li class="ql-align-center"><strong>Connectivité</strong> : IPv4 incluse, 1 Gbps en burst</li>
</ol>
<p class="ql-align-center">🛡️ | Protection Anti-DDoS (L3/L4 & L7) via <a href="https://demo.clientxcms.com" target="_blank" rel="noopener noreferrer">ClientXCMS</a></p>
<p class="ql-align-center">🚚 | Livraison en <strong>quelques minutes seulement</strong></p>
```

:::tip Astuce
Prenez le temps de rédiger un **nom clair** et une **description engageante**. C’est souvent le premier contact qu’a un client avec votre service. Une bonne présentation peut faire toute la différence – et améliorer votre référencement naturel.
:::

:::tip Astuce
Certain thème supporte les descriptions personnalisées dans les mêtadata du produit. Plus d'informations dans la documentation du thème utilisé. Vous pouvez générer les descriptions avec ce [outil en ligne](https://cdn.clientxcms.com/ressources/simulator).
:::

## Configuration des prix

Chaque cycle de facturation peut avoir :
- un **prix** distinct
- des **frais d’installation** facultatifs

🟢 Un produit avec un prix de `0` est **considéré comme gratuit**.  
🔴 Si vous laissez le champ prix vide pour un cycle, **il sera désactivé**.

### Utiliser la calculatrice intégrée

![Interface de la calculatrice de prix](/img/next_gen/settings/store/products/create_pricing2.png)

CLIENTXCMS propose une **calculatrice de prix intégrée**.  
Elle vous aide à :
- appliquer une **réduction en %**

Cette fonction est idéale pour proposer des offres dégressives cohérentes.

Les tarifs calculés apparaîtront ainsi dans la fiche produit côté panier.

Cela permet de simplifier le choix du client tout en maintenant une cohérence commerciale dans vos offres.

:::tip Astuce
Si vous souhaitez configurer des cycles de facturation additionnels avant d’ouvrir la calculatrice, cliquez sur le bouton « Configurer plus de tarifs ».
Cela permettra d’afficher tous les cycles disponibles.
Sans cette étape, la calculatrice appliquera votre réduction uniquement sur les cycles visibles à l’écran.
:::

### Affichage des cycles de facturation

Les cycles de facturation configuré pour un produit sont automatiquement affichés sur la page de configuration, juste avant l'ajout au panier.

![Affichage des cycles](/img/next_gen/settings/store/products/config_billing.png)

Cela permet au client de choisir facilement la durée de souscription souhaitée.

### Présélection d’un cycle via l’URL

Il est possible de **préselectionner un cycle de facturation** par défaut, directement depuis l’URL, à l’aide du paramètre `billing`.  
Cela est particulièrement utile pour orienter vos visiteurs vers un cycle associée à une offre précise depuis votre site vitrine.

Par exemple, pour présélectionner un cycle **annuel**, ajoutez ce paramètre à votre URL :

Ce qui donne une URL complète comme :
https://demo.clientxcms.com/store/basket/add/4?billing=annually

#### Paramètres disponibles pour préselectionner le cycle de facturation

Voici les valeurs possibles du paramètre `billing` :

| Valeur du paramètre | Cycle de facturation | Description                           |
|----------------------|----------------------|---------------------------------------|
| `monthly`            | Mensuel              | Facturation tous les mois             |
| `quarterly`          | Trimestriel          | Facturation tous les 3 mois           |
| `semiannually`       | Semestriel           | Facturation tous les 6 mois           |
| `annually`           | Annuel               | Facturation tous les 12 mois          |
| `biennially`         | Biannuel             | Facturation tous les 24 mois          |
| `triennially`        | Triennal             | Facturation tous les 36 mois          |
| `weekly`             | Hebdomadaire         | Facturation chaque semaine            |

:::tip Astuce
Assurez-vous que le cycle sélectionné est bien **tarifé** dans la configuration du produit. Si le champ de prix est vide, le cycle ne pourra pas être affiché ni sélectionné.
:::

### Activer des cycles de facturation supplémentaires

Par défaut, certains cycles comme le **biannuel**, le **triennal** ou **l’hebdomadaire** peuvent ne pas être visibles dans l’interface de configuration du produit.

Pour les rendre disponibles, cliquez sur le bouton **« Configurer plus de tarifs »** dans la section des prix de la fiche produit.

![Configurer d'autres cycles de facturation](/img/next_gen/settings/store/products/config_more_princing.png)

Vous pourrez alors ajouter et personnaliser les tarifs de ces cycles selon vos besoins.

:::info
Assurez-vous de **renseigner un prix pour chaque cycle de facturation que vous activez**, sans quoi il ne sera pas affiché aux clients dans la boutique. <br/>
Concernant les **frais d'installation**, même si vous videz le champ, ils seront automatiquement ramenés à zéro — c’est un comportement normal du système.
:::

## Édition d’un produit

L’édition d’un produit vous permet de **modifier ses caractéristiques**, comme si vous le recréiez, tout en conservant son lien avec les commandes existantes ou son historique de ventes.

### Accéder à l’édition

Pour éditer un produit :

1. Rendez-vous dans la liste des produits.
2. Cliquez sur le bouton **« Afficher »** dans la colonne **Actions** du produit concerné.

![Accès à l'édition d'un produit](/img/next_gen/settings/store/products/edit_product.png)

### Modifier les informations générales

Une fois dans l’interface d’édition, vous pouvez modifier :
- Le **nom du produit**
- Sa **description**
- Son **type**, **groupe**, **stock**, **ordre d’affichage**, etc.

![Affichage d'un service](/img/next_gen/settings/store/products/view_product.png)

Cela fonctionne exactement comme lors de la **création** du produit. Les modifications sont prises en compte immédiatement après l’enregistrement.

## Configuration technique du produit

Chaque produit peut avoir une **configuration spécifique** selon son type (ex. : hébergement pterodactyl, VPS livré sur un proxmox, licence ClientXCMS, etc.). Cette configuration détermine **les ressources et les limitations** de l’offre, c'est la configuration du produit.

### Exemple avec un module : Pterodactyl

<div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>

<div style={{ flex: '1 1 400px' }}>

Si votre produit repose sur le module **Pterodactyl**, vous pouvez configurer :

| Fonctionnalité                            | Description                                                                 |
|------------------------------------------|------------------------------------------------------------------------------|
| Nom / Description du serveur             | Permet de personnaliser le nom et la description affichés à la livraison.    |
| L’emplacement de livraison               | Définit le serveur physique sur lequel le service sera déployé.              |
| L’œuf                                    | Sélectionne l’egg Pterodactyl à utiliser pour le service.                    |
| Commande de démarrage                    | Détermine comment l’instance démarre sur le serveur Pterodactyl.             |
| Image Docker                             | Définit l’image système utilisée pour le déploiement.                        |
| CPU                                      | Spécifie le nombre de cœurs alloués à l’instance.                            |
| RAM                                      | Quantité de mémoire vive allouée.                                            |
| Stockage                                 | Espace disque attribué à l’instance.                                         |
| Allocations (ports)                      | Nombre de ports assignés au service.                                         |
| Backups / Bases de données               | Nombre de sauvegardes ou de bases de données autorisées.                     |

</div>

<div style={{ flex: '1 1 200px', textAlign: 'center' }}>
  <img src="/img/next_gen/extensions/modules/pterodactyl/images_4.png" alt="Exemple de configuration Pterodactyl" style={{ maxWidth: '100%', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
</div>

</div>

:::info  
Les champs affichés dépendent du **type de produit** et du **module d’approvisionnement** activé.  
Consultez la documentation spécifique du module pour connaître les paramètres disponibles pour ce dernier.  
:::

## Supprimer un produit

:::danger Avertissement
La suppression d’un produit peut provoquer des dysfonctionnements dans le système, notamment si le produit est lié à des services ou une commande existantes. Les recommandations de l'équipe sont de ne jamais supprimer un élément quelques soit le cycle de vie du CMS.
:::

Pour supprimer un produit :
1. Cliquez sur le bouton rouge **« Supprimer »** dans la colonne **Actions**.
2. Confirmez l’opération.

![Supression d'un produit](/img/next_gen/settings/store/products/edit_product.png)

## Statut du produit

Le **statut** détermine la visibilité et l’accessibilité du produit :

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>

<div style={{ flex: 1 }}>

| Statut           | Visibilité                               |
|------------------|------------------------------------------|
| **Actif**        | Disponible à l'achat                     |
| **Non référencé**| Accessible uniquement via un lien direct |
| **Caché**        | Indisponible à l'achat                   |

</div>

<div style={{ flex: 1 }}>
  <img src="/img/next_gen/settings/store/products/statut_product.png" alt="Statut d'un produit" style={{ maxWidth: '100%' }} />
</div>

</div>

## Lien direct pour ajouter un produit au panier

Lorsque vous éditez un produit, un lien est généré automatiquement.  
Ce dernier permet d’ajouter le produit au panier depuis votre site vitrine :

https://demo.clientxcms.com/store/basket/add/[id]

Remplacez `[id]` par l’ID réel du produit ou bien récupérer le lien directement sur la page de votre produit.

![Lien Basket](/img/next_gen/settings/store/products/view_link_basket.png)

## Gérer le stock d’un produit

### Stock manuel

- Définissez une valeur dans le champ **Stock disponible** :
  - `0` → Le produit est **indisponible à l’achat**.
  - `-1` → Le stock est **illimité**.

### Stock automatique

CLIENTXCMS permet d’automatiser la gestion du stock grâce à une métadonnée :

| Clé          | Valeur | Effet                              |
|--------------|--------|-------------------------------------|
| `auto_stock` | `true` | Le stock est ajusté automatiquement |

- Lorsqu’un **service est commandé**, le stock est décrémenté.
- Lorsqu’un **service est expiré ou supprimé**, le stock est incrémenté.

### Désactiver la gestion de stock

Pour forcer l’interface à ignorer toute gestion de stock, utilisez la métadonnée :

| Clé             | Valeur | Effet                              |
|------------------|--------|-------------------------------------|
| `disabled_stock` | `true` | La gestion de stock est désactivée |

## Métadonnées disponibles

Les **métadonnées** permettent d’ajouter des options personnalisées à un produit.

Voici les clés disponibles :

| Clé                             | Valeur              | Description                              |
|---------------------------------|---------------------|------------------------------------------|
| `basket_url`                    | Texte               | Lien pour ajouter le produit au panier   |
| `is_personalized_product`       | `true`              | Produit réalisé à la demande             |
| `basket_title`                  | Texte               | Titre du bouton d’ajout au panier        |
| `allow_only_as_much_services`   | `active:3` / `all:5`| Limite le nombre de services autorisés   |
| `auto_stock`                    | `true`              | Active la gestion automatique du stock   |
| `disabled_stock`                | `true`              | Désactive toute gestion de stock         |
| `pinned_label`                  | Texte               | Étiquette spéciale visible en boutique   |
| `max_renewals`                  | Nombre              | Nombre total de renouvellements possibles|

:::tip À retenir
Utilisez les métadonnées pour affiner le comportement du produit sans modifier son code ou son module source.
:::