# CLIENTXCMS Documentation 🚀 [![Build Image](https://github.com/ClientXCMS/docs.clientxcms.com/actions/workflows/docker-images.yml/badge.svg?branch=V2)](https://github.com/ClientXCMS/docs.clientxcms.com/actions/workflows/docker-images.yml)

Bienvenue dans la documentation officielle de **CLIENTXCMS** écrit en markdown ! Vous trouverez ici toutes les informations nécessaires pour installer, configurer et utiliser notre CMS.

La documentation est disponible à l'addresse : [https://docs.clientxcms.com]()

---

## 📝 Contribution
Nous accueillons les contributions pour l'écriture de cette documentation !
Voici comment contribuer :

### 1. Cloner le projet
Commencez par cloner le dépôt GitHub sur votre machine locale :

```bash
git clone https://github.com/ClientXCMS/docs.clientxcms.com.git
cd docs.clientxcms.com
```

#### Installation des dépendances
Assurez-vous d'avoir **Node.js**, **npm** et **Git** installés sur votre machine. Exécutez la commande suivante pour installer les paquets nécessaires :

```bash
npm install
```

> Cette commande installe toutes les dépendances nécessaires spécifiées dans le fichier `package.json`.

---

### 2. Lancer le serveur de développement
Pour démarrer un environnement de développement local :

```bash
npm run start
```

> Cette commande démarre le serveur en mode développement. Accédez à votre documentation localement via [http://localhost:3000](http://localhost:3000). Toute modification dans vos fichiers sera rechargée automatiquement !


### 2. Créez une branche pour vos modifications
Travaillez sur une branche dédiée selon le type de modification :
#### Convention à lire

1. **Ne jamais push directement sur la branche `V2`** :  
   Toute modification doit passer par une branche intermédiaire. Créez une nouvelle branche pour vos changements avant d’ouvrir une PR.

2. **Nommage des fichiers et dossiers** :  
   - Tous les noms de fichiers et de dossiers doivent être en **minuscules**.  
   - Utilisez uniquement des noms en **anglais** pour assurer une cohérence internationale.  

#### Organisation des fichiers :

1. **Pages accessibles depuis "Paramètres"** :  
   - Les pages liées aux paramètres doivent être placées dans le dossier approprié sous `/docs/settings`.

2. **Modules et Addons** :  
   - Les modules et les add-ons doivent être rangés dans le dossier `/docs/extensions`.  
   - Structure des fichiers correspondante :  
     - URL d’accès : `/extensions/addons/page`  
     - Dossier : `/docs/extensions/addons/page`.

3. **Assets des pages** :  
   - Les fichiers assets (images, scripts, etc.) doivent être positionnés dans une infrastructure en miroir avec celle de la documentation.  
   - Exemple : Un asset utilisé sur la page `/docs/settings/core/maintenance` doit se trouver dans :  
     `/static/next_gen/settings/core/maintenance`.  

4. **Hébergement des images** :  
   - **Aucune image** ne doit être hébergée en dehors du dépôt de la documentation.  
   - Cela garantit que tous les assets sont centralisés et faciles à retrouver.

---

#### **Exemples pratiques :**

1. **Pour une page dans les paramètres** :  
   - URL : `/docs/settings/core/maintenance`  
   - Asset associé : `/static/next_gen/settings/core/maintenance`.

2. **Pour une extension ou un addon** :  
   - URL : `/extensions/addons/page`  
   - Documentation : `/docs/extensions/addons/page`.


#### Ajout d'une page
```bash
git checkout -b feat/nom-de-la-page-ajouter
```
#### Correction ou modification d'un page

```bash
git checkout -b fix/nom-de-la-page
```


### 3. Installez les dépendances
Avant de commencer, assurez-vous d'installer toutes les dépendances :

```bash
npm install
```

### 4. Faites vos modifications
Apportez vos changements et testez-les localement en utilisant :

```bash
npm run start
```

La documentation se réactualisera en temps réelle, vous pouvez mettre votre navigateur et votre éditeur l'un à coté de l'autre.

### 5. Poussez vos modifications
Poussez votre branche vers le dépôt distant :

```bash
git add .
git commit -m "Ajout de la fonctionnalité X"
git push origin feat/nom-de-la-feature
```

### 6. Faites une Pull Request avec vos modifications
Créez une Pull Request via l'interface GitHub.
Rendez vous dans l'onglet Pull request puis "New Pull request" en selectionnant  la branche `preprod` ou la branche `V2` selon le cas de figure.

Veuillez nous indiquer vos changements sur la description de la Pull request qu'on puisse vérifier vos modifications et accepter la pull request.

#### Cas de figure branche preprod
- Nouvelle page ajoutée
- Nouvelle extension documentée
- Ajout de section dans une une page existante
- Modification du blog ou non urgente

#### Cas de figure branche V2

*Hotfixes* : Correction de bugs critiques ou incidents en production (p. ex., crash de la documentation, régression majeure, problème de sécurité urgent).

*Petite modification immédiate* : Mise à jour urgente de contenu (p. ex., correction d’une faute de frappe critique ou d’un lien cassé en production).

*Lancement validé* : Déploiement d’une fonctionnalité validée ou qui a déjà été testée en preprod.
### Version de preprod

La version preprod de la documentation est disponible sur [https://preprod-docs.clientxcms.com/]()

Merci à tous à l'ensemble des contributeurs : 

<a href="https://github.com/clientxcms/docs.clientxcms.com/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=clientxcms/docs.clientxcms.com" />
</a>


© 2024 Assocation CLIENTXCMS. Tous droits réservés.
