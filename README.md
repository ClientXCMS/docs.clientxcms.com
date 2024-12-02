# Clientxcms Documentation 🚀 [![Build Image](https://github.com/ClientXCMS/docs.clientxcms.com/actions/workflows/docker-images.yml/badge.svg?branch=V2)](https://github.com/ClientXCMS/docs.clientxcms.com/actions/workflows/docker-images.yml)

Bienvenue dans la documentation officielle du projet **Clientxcms** ! Ce projet utilise **Docusaurus** pour créer une documentation moderne, claire et rapide.

---

## 🚀 Mise en route

### **1. Installation des dépendances**
Assurez-vous d'avoir **Node.js** et **npm** installés sur votre machine. Exécutez la commande suivante pour installer les paquets nécessaires :

```bash
npm install
```

> Cette commande installe toutes les dépendances nécessaires spécifiées dans le fichier `package.json`.

---

### **2. Lancer le serveur de développement**
Pour démarrer un environnement de développement local :

```bash
npm run start
```

> Cette commande démarre le serveur en mode développement. Accédez à votre documentation localement via [http://localhost:3000](http://localhost:3000). Toute modification dans vos fichiers sera rechargée automatiquement !

---

### **3. Construire le projet**
Pour générer une version statique de votre documentation :

```bash
npm run build
```

> Cette commande génère les fichiers statiques dans le dossier `build/`. Utilisez ces fichiers pour héberger votre documentation sur un serveur web.

---

### **4. Lancer en mode production**
Si vous souhaitez à la fois construire votre projet et lancer un serveur local en mode production, utilisez :

```bash
npm run prod
```

> Cette commande combine le `build` et le `serve` pour simplifier le workflow. Accédez à [http://localhost:3000](http://localhost:3000) pour voir le rendu final.

---

## 📝 Contribution

Nous accueillons les contributions ! Voici comment contribuer :

### **1. Cloner le projet**
Commencez par cloner le dépôt GitHub sur votre machine locale :

```bash
git clone https://github.com/ClientXCMS/docs.clientxcms.com.git
cd docs.clientxcms.com
```

### **2. Créez une branche pour vos modifications**
Travaillez sur une branche dédiée pour vos changements :

```bash
git checkout -b feat/nom-de-la-feature
```

### **3. Installez les dépendances**
Avant de commencer, assurez-vous d'installer toutes les dépendances :

```bash
npm install
```

### **4. Faites vos modifications**
Apportez vos changements et testez-les localement en utilisant :

```bash
npm run start
```

### **5. Poussez vos modifications**
Poussez votre branche vers le dépôt distant :

```bash
git add .
git commit -m "Ajout de la fonctionnalité X"
git push origin feat/nom-de-la-feature
```

### **6. Faites une Pull Request**
Créez une Pull Request vers la branche `preprod` via l'interface GitHub.

---

Merci d'utiliser **Clientxcms** ❤️ ! Si vous avez des questions, n'hésitez pas à nous contacter.

---

© 2024 Clientxcms. Tous droits réservés.
