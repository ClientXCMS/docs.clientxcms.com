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

## Authentification multifacteur (MFA)

Les paramètres suivants rendent l'authentification multifacteur obligatoire :

| Paramètre | Description |
|-----------|-------------|
| `force_2fa_admin` | Oblige les administrateurs à configurer et à utiliser la MFA |
| `force_2fa_client` | Oblige les clients à configurer et à utiliser la MFA |

### Récupérer l'accès lorsque la MFA est forcée

Si un problème de configuration de la MFA empêche les connexions, vous pouvez désactiver temporairement cette obligation directement dans la base de données :

```sql
UPDATE settings SET value = 'false' WHERE `key` IN ('force_2fa_admin', 'force_2fa_client');
```

Videz ensuite le cache de l'application depuis la racine du projet :

```bash
php artisan cache:clear
```

:::warning Mesure de récupération temporaire
Cette commande désactive la MFA obligatoire pour les administrateurs et les clients. Corrigez la configuration de la MFA ou du service SMS, puis réactivez les options appropriées dans les paramètres de sécurité.
:::

### MFA par SMS

Dans les paramètres de la MFA par SMS, vous pourrez sélectionner votre fournisseur SMS. Les fournisseurs disponibles sont **OVH** et **Twilio**. Une fois le fournisseur sélectionné, remplissez les champs affichés pour celui-ci.

#### OVH

| Champ | Valeur attendue |
|-------|-----------------|
| **Endpoint** | Région de l'API OVH : `ovh-eu`, `ovh-ca` ou `ovh-us` |
| **Clé d'application** | Clé d'application OVH |
| **Secret de l'application** | Secret de l'application OVH |
| **Clé consommateur** | Clé consommateur OVH |
| **Nom du service** | Nom du service SMS OVH |
| **Expéditeur** | Expéditeur affiché dans les SMS |

#### Twilio

| Champ | Valeur attendue |
|-------|-----------------|
| **SID du compte** | SID du compte Twilio |
| **Jeton d'authentification** | Jeton d'authentification Twilio |
| **Numéro expéditeur** | Numéro de téléphone expéditeur Twilio |

:::warning Identifiants sensibles
Les secrets des fournisseurs SMS sont sensibles. Ne les publiez pas, ne les partagez pas et remplacez-les immédiatement s'ils sont exposés.
:::

## Paramètres RGPD

Des paramètres supplémentaires de confidentialité sont disponibles :

| Paramètre | Description |
|-----------|-------------|
| `gdrp_cookies_privacy_link` | Lien vers la politique de confidentialité affiché avec les informations sur les cookies |
| `gdpr_purge_inactive_days` | Nombre de jours d'inactivité avant la purge des données personnelles éligibles |

## Logs de sécurité

Les erreurs d'authentification, de configuration et du système peuvent être consultées depuis `Paramètres` > `Sécurité` > `Historique`. Consultez la page [Historique et logs](./history.md) pour connaître les fichiers disponibles, leur durée de conservation et les actions de diagnostic.

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

### Problème de connection avec un captcha mal configuré
Si vous avez un problème de connexion à cause d'un captcha mal configuré, vous pouvez désactiver temporairement le captcha vous connectant à votre base de données et en modifiant la valeur `captcha_driver` dans la table `settings` à `none`. Cela désactivera le captcha et vous permettra de vous connecter à votre espace client pour corriger la configuration du captcha.
Commande SQL à exécuter :
```sql
UPDATE settings SET value = 'none' WHERE `key` = 'captcha_driver';
```

Vous pouvez ensuite vider le cache de l'application en exécutant la commande suivante dans votre terminal à la racine de votre projet :
```bash
php artisan cache:clear
```
Vous devriez maintenant pouvoir vous connecter à votre espace client et corriger la configuration du captcha.
Les mots de passe des **administrateurs** sont toujours chiffrés avec `bcrypt` pour garantir un accès rapide et sécurisé à l'interface d'administration, quel que soit l'algorithme choisi pour les utilisateurs.
