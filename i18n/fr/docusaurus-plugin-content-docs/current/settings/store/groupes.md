---
sidebar_position: 2
---

# Groupes

Dans **CLIENTXCMS**, un **groupe** correspond à une **catégorie logique de produits** que vous proposez dans votre boutique. <br/>
L’objectif est simple : **organiser vos services et améliorer le processus d'achat** pour que vos clients puissent **naviguer facilement et acheter rapidement**. Un bon groupement améliore l’expérience utilisateur, guide la décision d’achat et donne à votre boutique un aspect structuré et professionnel.

Chaque groupe peut être entièrement personnalisé : nom de ce dernier, description, visibilité, etc...

Vous pouvez gérer les groupes depuis :

`Paramètres` > `Paramètres de la boutique` > `Groupes`

![Accès à la configuration des groupes](/img/next_gen/settings/store/groups/settings.png)

:::tip Astuce
Un produit **doit toujours appartenir à un groupe** pour apparaître dans la boutique.
Prenez donc un moment pour structurer vos groupes avant d’ajouter de nouveaux services.
:::
---

## Pourquoi utiliser des groupes ?

Imaginons que vous vendiez des services d’hébergement pterodactyl, des VPS, et des noms de domaine.
Créer un groupe distinct pour chacun de ces types de produits permet à vos clients de :

* Voir tout ce qui est lié à un même service au même endroit
* Comprendre rapidement les différences entre les offres
* Gagner du temps pour vos clients dans leur parcours d’achat

:::tip Astuce
C’est un peu comme organiser les rayons d’un magasin 🛒 — plus c’est clair, plus c’est efficace.
:::

## Interfaces utilisateur

### Vue côté boutique

La boutique est disponible à partir de l'URL : `/store`

Chaque groupe est accessible via une URL structurée comme suit :

https://demo.clientxcms.com/store/nomdugroupe

Par exemple, pour un groupe nommé **VPS** :
https://demo.clientxcms.com/store/vps


![Vue d'un groupe sur la boutique](/img/next_gen/settings/store/groups/view_group.png)

Cela permet de **classer vos offres par type de service**, comme par exemple :

- Hébergement Minecraft
- VPS KVM
- VPS LXC
- Licences ClientXCMS
- Starter Pack Hébergeur

### Vue administrateur

Dans l’interface d’administration, vous disposez d’une liste complète des groupes créés. Vous pouvez :
- **Rechercher** un groupe par son nom
- **Effectuer des actions** comme afficher, modifier, dupliquer ou supprimer un produit

![Vue de la liste des groupes dans l'administration](/img/next_gen/settings/store/groups/view_group_in_admin.png)

## Gérer les groupes de produits
### Crée un nouveau groupe

Créer un groupe vous permet d’organiser vos produits de manière logique et visuelle dans la boutique. Voici les champs à renseigner lors de la création :

![Créer un groupe](/img/next_gen/settings/store/groups/create_group.png)

**Nom** | (texte)<br />
Le nom du groupe tel qu’il apparaîtra dans la boutique.

**Slug** | (texte)<br />
La fin personnalisée de l’URL, permettant d’accéder directement à la page du groupe.
(exemple : `vps-linux` donnera une URL du type : `clientxcms.com/store/vps-linux`)

**Groupe Parent** | (menu déroulant)<br />
Si ce groupe appartient à une catégorie supérieure, vous pouvez le rattacher ici. Utile pour créer des hiérarchies (ex. : `VPS` > `VPS Linux`).

**Statut** | (menu déroulant)<br />
Définit la visibilité du groupe dans la boutique :  
- **Actif** : Disponible à l'achat
- **Non référencé** : Accessible uniquement via un lien direct  
- **Caché** : Indisponible à l'achat

**Description** | (zone de texte)<br />
 Un court texte explicatif qui sera visible sur la page du groupe, pour aider le client à comprendre l’offre globale.

**Image** | (fichiers)<br />
Illustration affichée sur la boutique. Cela permet de rendre l’interface plus visuelle et attractive.

**Ordre de tri** | (champ numérique)<br />
 Contrôle la position du groupe dans la liste affichée. Plus le chiffre est bas, plus le groupe apparaît haut dans la boutique.

**Épinglé** | (case à cocher)<br />
 Activez cette option pour mettre le groupe en avant — il s’affichera en tête de liste dans votre boutique.

**Utiliser l'image comme arrière-plan** | (case à cocher)<br />
Permet d’appliquer l’image sélectionnée comme arrière-plan du groupe sur la page boutique. Idéal pour créer une ambiance ou un repère visuel fort.

:::tip Astuce
Prenez le temps de rédiger un nom et une description clairs et engageants. C’est souvent la première chose que vos clients liront avant de découvrir vos produits et cela améliorera votre référencement.
:::

Voici une version améliorée et plus détaillée de ta section **"Cloner un groupe"**, avec un style cohérent et une explication claire des deux options. Je t’indique également où insérer les captures d’écran pour une UX optimale :

### Cloner un groupe

Vous pouvez cloner un groupe existant depuis l’interface d’administration en cliquant sur le bouton **« Cloner »** situé à droite du groupe concerné, dans la liste de vos groupes.

Une fois cette action lancée, **deux choix s’offrent à vous** :

* **Cloner avec les produits** :
  Cette option permet de dupliquer non seulement les paramètres du groupe (nom, description, visibilité...), mais également **tous les produits** qu’il contient.
  Les produits clonés auront les mêmes réglages que les originaux, ce qui vous permet de gagner du temps si vous souhaitez proposer une offre similaire dans une autre catégorie.

* **Cloner sans les produits** :
  Ici, seul le groupe est dupliqué, sans aucun produit.
  C’est idéal si vous souhaitez repartir d’un modèle de groupe sans dupliquer son contenu.

---

**Captures d’écran :**

1. **Liste des groupes avec le bouton "Cloner" visible**
![Vue de la liste des groupes avec l'option "cloner" dans l'administration](/img/next_gen/settings/store/groups/view_feature_cloning_into_group_in_admin.png)

2. **Fenêtre modale avec les deux options "Avec les produits" / "Sans les produits"**

![Vue de la liste des groupes avec la fenêtre modal de l'option "cloner" dans l'administration](/img/next_gen/settings/store/groups/view_feature_cloning_into_group_modal_in_admin.png)

3. **Résultat final : aperçu du groupe cloné avec ou sans produits selon l’option choisie**

![Vue du groupe cloner sans les groupes dans l'administration](/img/next_gen/settings/store/groups/view_after_cloning_without_product_into_group_in_admin.png)


### Editer un groupe

Pour éditer un groupe, appuyez sur le bouton "Afficher" présent dans la liste de vos groupes sur l'interface d'administration.<br />
![Vue de la liste des groupes dans l'administration](/img/next_gen/settings/store/groups/view_group_in_admin.png)

Modifiez les informations nécessaire à l'édition initié puis enregistrer vos modifications avec le bouton "Mettre à jours les détails".

![Éditer un groupe dans l'administration](/img/next_gen/settings/store/groups/edit_group_in_admin.png)

#### Statut du groupe

Le **statut** détermine la visibilité et l’accessibilité du produit :

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>

<div style={{ flex: 1 }}>

| Statut           | Visibilité                                                |
|------------------|-----------------------------------------------------------|
| **Actif**        | Disponible à l'achat                                      |
| **Non référencé**| Accessible uniquement via un lien direct                  |
| **Caché**        | Indisponible à l'achat                                    |

</div>

<div style={{ flex: 1 }}>
  <img src="/img/next_gen/settings/store/products/statut_product.png" alt="Statut d'un produit" style={{ maxWidth: '100%' }} />
</div>

</div>

#### Traduire un groupe

CLIENTXCMS intègre un **système de traduction complet** vous permettant d’adapter chaque groupe à différentes langues, sans compromis sur la précision ou l’expérience utilisateur.

Chaque champ (nom, description, slug, etc.) est **entièrement personnalisable** selon la langue sélectionnée. Vous pouvez donc affiner chaque traduction manuellement pour garantir une cohérence parfaite avec votre offre.

![Traduire un groupe dans l'administration](/img/next_gen/settings/store/groups/trad_group_in_admin.png)

Merci de vous référer à la section lié [aux traductions](../core/locales) pour de plus ample informations à ce sujet.

:::tip Astuce
La qualité de vos traductions peut grandement améliorer la perception de votre boutique par les utilisateurs internationaux — prenez le temps de les adapter avec soin.
:::

### Supprimer un groupe
La suppression d’un groupe est possible uniquement s’il ne contient aucun produit.<br />
Cette restriction permet d’éviter toute suppression accidentelle de services visibles en boutique.

✅ **Étapes à suivre :**

1. Assurez-vous que le groupe concerné ne contient **aucun produit actif**.
2. Une fois cette condition remplie, vous pourrez supprimer ce dernier depuis la page de gestion des groupes au sein de votre espace d'adminsitration.
3. Cliquez sur ce bouton : une **demande de confirmation** s’affichera pour valider votre action.
4. Après confirmation, le groupe sera définitivement supprimé.

![Supprimer un groupe dans l'administration](/img/next_gen/settings/store/groups/delete_group_in_admin.png)

:::danger Avertissement
La suppression est **définitive** : le groupe ne pourra pas être restauré une fois supprimé.
Assurez-vous d’avoir bien retiré ou déplacé les produits liés avant de procéder sinon vous ne pourrez effectué aucune action de suppression du groupe.
:::

### Cacher un groupe
Cette option vous permet de rendre un groupe invisible dans la boutique, en un seul clic.

Lorsque cette case est cochée :

* Le **groupe** n’apparaît plus dans l’interface publique,
* Et **aucun des produits associés** ne sera visible ou disponible à l’achat.

C’est une solution idéale si vous souhaitez **désactiver temporairement une gamme de services** sans la supprimer.

✅ **Comment faire ?**<br />
Changer simplement le Statut de votre groupe **dans le menu déroulant** située au sein de l'édition de votre groupe.

![Cacher un groupe dans l'administration](/img/next_gen/settings/store/groups/cached_group_in_admin.png)

:::tip Astuce
Vous pouvez réactiver l’affichage du groupe à tout moment en séléctionnant "Actif"
C’est une manière souple de gérer les produits saisonniers, les offres en maintenance ou les lancements différés.
:::

## Gestion avancée
### Métadonnées disponibles

| Clé                          | Valeur   | Description                            |
|------------------------------|----------|----------------------------------------|
| `use_image_as_background`    | `true`   | Lien pour ajouter le produit au panier |
| `pinned_label`               | Texte    | Produit réalisé à la demande           |
| `group_url`                  | Texte    | Titre du bouton d’ajout au panier      |

:::tip À retenir
Utilisez les métadonnées pour affiner le comportement du produit sans modifier son code ou son module source.
:::