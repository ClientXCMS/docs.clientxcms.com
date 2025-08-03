---
sidebar_position: 1
---

# Paramètres de sécurité

Dans **CLIENTXCMS**, les **paramètres de sécurité** constituent la première ligne de défense de votre plateforme. <br/>
L'objectif est vital : **configurer les mécanismes de protection fondamentaux** pour **sécuriser l'authentification**, **filtrer les accès malveillants** et **renforcer la robustesse de votre système**. Une configuration sécuritaire appropriée protège vos données, prévient les intrusions et maintient la confiance de vos utilisateurs.

Ces paramètres contrôlent l'authentification, le chiffrement des mots de passe, les protections anti-spam et l'accès à l'administration.

Vous pouvez gérer les paramètres de sécurité depuis :

`Paramètres` > `Sécurité` > `Paramètres de sécurité`

:::tip Astuce
La sécurité commence par de bons paramètres de base. 
Chaque option que vous configurez ici **renforce significativement** la protection de votre plateforme.
:::

## Pourquoi configurer ces paramètres ?

Les paramètres de sécurité sont essentiels pour :

* **Protéger les comptes utilisateurs** avec un chiffrement robuste
* **Filtrer les inscriptions malveillantes** et le spam
* **Sécuriser l'accès administrateur** avec des URLs personnalisées
* **Contrôler l'authentification** selon vos besoins métier

:::tip Astuce
C'est comme ajuster les serrures et alarmes de votre maison 🏠 — plus c'est bien configuré, plus vous dormez tranquille.
:::

## Chiffrement des mots de passe

### Algorithmes de hashage

**Driver de hashage** | (menu déroulant)<br />
Choisissez l'algorithme utilisé pour chiffrer les mots de passe des utilisateurs.

| Algorithm | Sécurité | Performance | Recommandation |
|-----------|----------|-------------|----------------|
| **bcrypt** | ✅ Élevée | ⚡ Rapide | Par défaut, recommandé |
| **argon2** | ✅✅ Très élevée | 🐌 Plus lent | Haute sécurité |
| **argon2id** | ✅✅✅ Maximale | 🐌🐌 Le plus lent | Sécurité critique |

:::info Migration depuis la v1
Pour les utilisateurs migrant depuis CLIENTXCMS v1, conservez `argon` pour maintenir la compatibilité avec les mots de passe existants.
:::

:::warning Important - Changement d'algorithme
Changer l'algorithme de hashage rendra **tous les mots de passe existants invalides**. Les utilisateurs devront réinitialiser leur mot de passe pour se reconnecter.
:::

### Sécurité administrative

Les mots de passe des **administrateurs** sont toujours chiffrés avec `bcrypt` pour garantir un accès rapide et sécurisé à l'interface d'administration, quel que soit l'algorithme choisi pour les utilisateurs.

## Authentification et accès

### Gestion des sessions

**Délai de vérification du mot de passe** | (secondes)<br />
Durée pendant laquelle un utilisateur peut effectuer des actions sensibles sans ressaisir son mot de passe.

- **Valeur par défaut** : `10800` secondes (3 heures)
- **Sécurité élevée** : `1800` secondes (30 minutes)
- **Convivialité** : `21600` secondes (6 heures)

### Contrôle des inscriptions

**Autoriser l'inscription** | (interrupteur)<br />
Active ou désactive la possibilité pour de nouveaux utilisateurs de créer un compte.
Désactivez cette option pour une plateforme sur invitation uniquement.

**Confirmation automatique de l'inscription** | (interrupteur)<br />
Détermine si les nouveaux comptes sont automatiquement activés ou nécessitent une validation manuelle.

- **Activé** : Les utilisateurs peuvent se connecter immédiatement
- **Désactivé** : Validation manuelle requise par un administrateur

**Autoriser la réinitialisation du mot de passe** | (interrupteur)<br />
Permet aux utilisateurs de réinitialiser leur mot de passe via e-mail.
Désactivez uniquement si vous gérez les mots de passe manuellement.

### Contrôle d'accès global

**Forcer la connexion** | (interrupteur)<br />
Oblige tous les visiteurs à s'authentifier pour accéder à n'importe quelle page de la plateforme.
Idéal pour une plateforme privée ou en développement.

## Filtrage et protection anti-spam

### Emails bannis

**Emails bannis** | (liste, séparée par des virgules)<br />
Bloquez les domaines ou adresses e-mail spécifiques pour prévenir le spam et les inscriptions malveillantes.

**Exemples d'utilisation** :

```
# Domaines temporaires
mailinator.com, yopmail.com, 10minutemail.com

# Domaines spécifiques  
spam@example.com, fake-domain.xyz

# Patterns de domaines
*.temp-mail.org, *.disposable.email
```

**Cas d'usage courants** :
- Services d'emails temporaires
- Domaines connus pour le spam
- Adresses de test spécifiques
- Concurrents (usage avancé)

## Sécurisation de l'administration

### URL d'administration personnalisée

**Préfixe de l'administration** | (texte)<br />
Personnalisez l'URL d'accès à votre interface d'administration pour masquer l'accès standard.

**Exemples de configuration** :

| Préfixe | URL d'accès | Niveau de sécurité |
|---------|-------------|-------------------|
| `admin` | `/admin` | ⚠️ Standard (évitez) |
| `backoffice` | `/backoffice` | ✅ Mieux |
| `manage-2024` | `/manage-2024` | ✅✅ Recommandé |
| `secure-xyz789` | `/secure-xyz789` | ✅✅✅ Optimal |

:::tip Bonnes pratiques
- Utilisez un préfixe **unique et non prévisible**
- Évitez les mots évidents comme "admin", "panel", "dashboard"
- Incluez des chiffres ou caractères spéciaux
- Changez périodiquement pour renforcer la sécurité
:::

## Protection CAPTCHA

### Configuration du service CAPTCHA

**Driver de CAPTCHA** | (menu déroulant)<br />
Choisissez le service de protection contre les bots et le spam automatisé.

| Service | Avantages | Inconvénients |
|---------|-----------|---------------|
| **none** | Aucune friction | ❌ Aucune protection |
| **reCAPTCHA** | Largement supporté | 🔍 Collecte de données Google |
| **hCaptcha** | Respectueux de la vie privée | ⚡ Moins connu |
| **Cloudflare Turnstile** | Performance optimale | 🆕 Plus récent |

### Configuration des clés

**Clé du site** | (clé publique)<br />
La clé publique fournie par votre service CAPTCHA, visible côté client.

**Clé secrète** | (clé privée)<br />
La clé secrète pour valider les réponses CAPTCHA côté serveur.

:::warning Sécurité des clés
- Ne partagez **jamais** votre clé secrète
- Renouvelez les clés si elles sont compromises
- Configurez les domaines autorisés dans votre tableau de bord CAPTCHA
:::

### Configuration détaillée

Pour une configuration avancée des CAPTCHAs, consultez la [documentation développeur](/developpers/software/captcha).

## Exemples de configuration

### Configuration haute sécurité

```
Driver de hashage : argon2id
Délai de vérification : 1800 secondes
Emails bannis : Domaines temporaires bloqués
Préfixe admin : secure-admin-2024
CAPTCHA : Cloudflare Turnstile activé
```

### Configuration équilibrée

```
Driver de hashage : bcrypt
Délai de vérification : 10800 secondes  
Emails bannis : Services temporaires principaux
Préfixe admin : backoffice
CAPTCHA : hCaptcha activé
```

### Configuration développement

```
Driver de hashage : bcrypt
Délai de vérification : 21600 secondes
Emails bannis : Aucun
Préfixe admin : admin
CAPTCHA : none
```

## Surveillance et maintenance

### Bonnes pratiques

1. **Audit régulier** : Vérifiez périodiquement vos paramètres
2. **Veille sécuritaire** : Suivez les recommandations de sécurité
3. **Tests de pénétration** : Testez vos protections régulièrement
4. **Formation équipe** : Sensibilisez vos collaborateurs

### Indicateurs de surveillance

- Tentatives de connexion admin échouées
- Inscriptions bloquées par email banni
- Échecs de validation CAPTCHA
- Réinitialisations de mots de passe

:::tip À retenir
La sécurité est un équilibre entre protection et convivialité. Adaptez vos paramètres à votre contexte : plus de sécurité pour les données sensibles, plus de flexibilité pour l'expérience utilisateur standard.
:::