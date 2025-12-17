---
sidebar_position: 5
---

# Déploiement automatisé avec Ansible

**Ansible** permet un déploiement entièrement automatisé de ClientXCMS, de l'installation des prérequis jusqu'à la mise en production. Cette méthode est recommandée pour les environnements de production et les déploiements multi-serveurs.

## Prérequis

### Sur la machine de contrôle (votre ordinateur)
- **Ansible 2.9+** installé
- **Git** pour cloner le playbook
- **Accès SSH** aux serveurs cibles

### Sur les serveurs cibles
- **Ubuntu 22.04+**, **Debian 11+** ou **Rocky/AlmaLinux 9+**
- **Accès root** ou utilisateur avec privilèges sudo
- **Connexion internet** pour télécharger les paquets

## Installation du playbook

### 1. Cloner le dépôt Ansible

```bash
git clone https://github.com/ClientXCMS/ansible.git clientxcms-ansible
cd clientxcms-ansible
```

### 2. Configuration de l'inventaire

Éditez le fichier d'inventaire selon votre environnement :

#### Production
```bash
# inventory/production.yml
[clientxcms]
serveur1.example.com ansible_host=192.168.1.100 ansible_user=root
serveur2.example.com ansible_host=192.168.1.101 ansible_user=root

[clientxcms:vars]
environment_name=production
```

#### Développement
```bash
# inventory/development.yml
[clientxcms]
dev.local ansible_host=192.168.1.50 ansible_user=root

[clientxcms:vars]
environment_name=development
```

## Déploiement

### Nouveau déploiement production

Pour un premier déploiement sur un serveur de production :

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx" \
  -e "clientxcms_domain=manager.example.com" \
  -e "clientxcms_admin_email=admin@example.com" \
  -e "clientxcms_oauth_client_id=VOTRE_CLIENT_ID" \
  -e "clientxcms_oauth_client_secret=VOTRE_CLIENT_SECRET"
```

### Déploiement développement

Pour un environnement de développement ou de test :

```bash
ansible-playbook -i inventory/development.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx"
```

### Choix du serveur web

Le playbook prend en charge deux serveurs web :

```bash
# Nginx (recommandé pour la production)
-e "webserver=nginx"

# Apache (compatible hébergement partagé)
-e "webserver=apache"
```

## Variables de configuration

### Variables obligatoires (production)

| Variable | Description | Exemple |
|----------|-------------|---------|
| `webserver` | Serveur web à installer | `nginx` ou `apache` |
| `clientxcms_domain` | Nom de domaine | `manager.example.com` |
| `clientxcms_admin_email` | Email administrateur | `admin@example.com` |
| `clientxcms_oauth_client_id` | ID OAuth ClientXCMS | `9707826860385` |
| `clientxcms_oauth_client_secret` | Secret OAuth | `votre_secret` |

### Variables optionnelles

| Variable | Description | Défaut |
|----------|-------------|--------|
| `clientxcms_force_reinstall` | Forcer la réinstallation | `false` |
| `clientxcms_ssl_enabled` | Activer SSL/Let's Encrypt | `true` (prod), `false` (dev) |
| `clientxcms_repo_branch` | Branche Git à déployer | `master` |

### Obtenir les identifiants OAuth

Les identifiants OAuth sont requis en production et s'obtiennent depuis votre compte ClientXCMS :

1. Connectez-vous sur [clientxcms.com](https://clientxcms.com)
2. Accédez à **Mon Compte** > **Mes services** > **Gérer le service** > **Onglet Service**
3. Section **Authentification**
4. Notez le **OAuth Client ID** et le **OAuth Secret**

## Composants installés

Le playbook Ansible installe et configure automatiquement :

### Infrastructure système
- **PHP 8.3** avec toutes les extensions requises
- **MariaDB 10.11+** (base de données)
- **Nginx** ou **Apache** (serveur web)
- **PHP-FPM** (gestionnaire de processus)

### Sécurité
- **Certificats SSL** (Let's Encrypt en production)
- **Pare-feu** configuré (ports 22, 80, 443)
- **Permissions** et utilisateurs sécurisés
- **Configuration PHP** durcie

### ClientXCMS
- **Code source** depuis Git
- **Dépendances Composer** et **NPM**
- **Configuration** `.env` automatique
- **Base de données** initialisée
- **Tâches cron** et **queues Laravel**

## Gestion des mises à jour

### Mise à jour d'une instance spécifique

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "clientxcms_update_mode=true" \
  -e "clientxcms_domain=manager.example.com"
```

### Mise à jour de toutes les instances

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "clientxcms_update_mode=true"
```

### Processus de mise à jour

1. **Backup automatique** (fichiers + base de données)
2. **Mode maintenance** (`php artisan down`)
3. **Récupération** du code source Git
4. **Installation** des dépendances
5. **Migrations** de base de données
6. **Nettoyage** des caches
7. **Compilation** des assets
8. **Sortie de maintenance** (`php artisan up`)

:::info Backups automatiques
Chaque mise à jour génère un backup complet dans `/var/backups/clientxcms/[domain]/[timestamp]/`
:::

## Gestion des erreurs et rollback

### En cas d'échec de mise à jour

Si une mise à jour échoue, le playbook affiche la commande de rollback exacte :

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "clientxcms_rollback_mode=true" \
  -e "clientxcms_domain=manager.example.com" \
  -e "clientxcms_rollback_timestamp=1709123456"
```

### Processus de rollback

1. **Vérification** de l'existence du backup
2. **Affichage** des détails (date, commit git)
3. **Confirmation** utilisateur
4. **Restauration** des fichiers (préserve `.env`)
5. **Restauration** de la base de données
6. **Nettoyage** des caches

## Options avancées

### Mode simulation (dry-run)

Testez le déploiement sans appliquer les modifications :

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  --check \
  -e "webserver=nginx"
```

### Mode verbeux (debug)

Affichez plus d'informations lors de l'exécution :

```bash
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -vvv \
  -e "webserver=nginx"
```

### Utilisation de tags

Exécutez uniquement certaines parties du playbook :

```bash
# Installation des prérequis uniquement
--tags prerequisites

# Déploiement ClientXCMS uniquement  
--tags clientxcms

# Mode mise à jour uniquement
--tags update
```

## Structure des fichiers de backup

```
/var/backups/clientxcms/
├── manager.example.com/
│   ├── 1709123456/
│   │   ├── files.tar.gz          # Archive complète des fichiers
│   │   ├── database.sql          # Dump MySQL/MariaDB
│   │   └── metadata.json         # Métadonnées (date, commit, etc.)
│   └── 1709234567/
│       └── ...
└── autre-domaine.com/
    └── ...
```

## Exemples complets

### Déploiement production multi-domaines

```bash
# Premier domaine
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx" \
  -e "clientxcms_domain=client1.example.com" \
  -e "clientxcms_admin_email=admin@client1.com" \
  -e "clientxcms_oauth_client_id=8387752805262" \
  -e "clientxcms_oauth_client_secret=SECRET1"

# Deuxième domaine sur le même serveur
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx" \
  -e "clientxcms_domain=client2.example.com" \
  -e "clientxcms_admin_email=admin@client2.com" \
  -e "clientxcms_oauth_client_id=9274638291847" \
  -e "clientxcms_oauth_client_secret=SECRET2"
```

### Mise à jour planifiée avec rétention personnalisée

```bash
# Garder 10 backups au lieu de 5 par défaut
ansible-playbook -i inventory/production.yml playbooks/deploy-clientxcms.yml \
  -e "clientxcms_update_mode=true" \
  -e "clientxcms_backup_retention=10"
```

### Déploiement avec branche spécifique

```bash
# Déployer la branche develop pour les tests
ansible-playbook -i inventory/staging.yml playbooks/deploy-clientxcms.yml \
  -e "webserver=nginx" \
  -e "clientxcms_domain=staging.example.com" \
  -e "clientxcms_repo_branch=develop"
```

## Détection automatique des instances

Le playbook détecte automatiquement les instances ClientXCMS existantes via :

1. **Scan** de `/var/www/` pour les répertoires
2. **Vérification** du fichier marqueur `storage/installed`  
3. **Validation** de la présence du fichier `artisan`

Si aucun domaine spécifique n'est fourni, toutes les instances détectées seront mises à jour.

## Bonnes pratiques

### Sécurité
- **Ne pas** commiter les secrets OAuth dans Git ou bien penser à utiliser Vault pour les secrets et informations sensibles à chiffrer.
- Utiliser un **utilisateur dédié** pour Ansible
- **Tester** d'abord sur un environnement de staging
- **Vérifier** les backups régulièrement

### Performance
- Utiliser **Nginx + PHP-FPM** pour la production
- Activer **OPcache** PHP (fait automatiquement)
- Configurer **MariaDB** selon votre charge
- Monitorer les **ressources** serveur avec Grafana (prévu dans une prochaine mise à jour de la playbook)

### Maintenance
- **Planifier** les mises à jour pendant les créneaux de faible trafic
- **Conserver** les backups selon votre politique de rétention
- **Tester** les rollbacks sur un environnement de test
- **Documenter** vos configurations spécifiques

:::tip Recommandation
Pour un déploiement professionnel, utilisez Ansible avec un serveur de contrôle dédié et des clés SSH plutôt que des mots de passe.
:::

## Support et dépannage

L’équipe de **ClientXCMS** ne fournit **aucun support externe** concernant l’utilisation d’Ansible et des playbooks fournis.  
Nous restons toutefois disponibles sur les **canaux communautaires**, mais cette assistance **n’entre pas dans l’offre de support officielle**.

### Logs disponibles

- **Ansible** : `/var/log/ansible.log`
- **ClientXCMS** : `storage/logs/laravel.log`
- **Nginx** : `/var/log/nginx/`
- **Apache** : `/var/log/apache2/` ou `/var/log/httpd/`

### Résolution de problèmes courants

#### Erreur de connexion SSH

```bash
# Vérifiez la connectivité
ansible -i inventory/production.yml all -m ping
````

#### Erreur d’authentification OAuth

* Vérifiez vos identifiants sur [clientxcms.com](https://clientxcms.com)
* Assurez-vous que l’application OAuth est bien active

#### Échec du déploiement SSL

* Vérifiez que le domaine pointe correctement vers le serveur
* Attendez la propagation DNS (jusqu’à **48 h**)
* **N’activez pas le proxy Cloudflare** lors de la génération des certificats

### Ressources d’aide

Pour obtenir de l’aide supplémentaire, consultez :

* **[Documentation ClientXCMS](https://docs.clientxcms.com)**
* **[GitHub Issues](https://github.com/ClientXCMS/ansible/issues)**
* **[Discord communautaire](https://discord.gg/clientxcms)**