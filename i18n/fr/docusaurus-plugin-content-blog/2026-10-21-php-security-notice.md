---
title: "Alerte de sécurité PHP : mettez à jour le serveur de votre instance ClientXCMS"
slug: /php-security-notice-cve-2026-109618-109619
authors: [martindev]
tags: [securite, php, clientxcms, mise-a-jour]
---

Le 21 octobre 2026, le projet PHP a publié des correctifs de sécurité concernant deux vulnérabilités critiques, **CVE-2026-109618** et **CVE-2026-109619**, toutes deux évaluées à **9,2/10 selon CVSS v4.0**.

Ces vulnérabilités peuvent permettre à un attaquant non authentifié d'exécuter du code à distance sur un serveur utilisant une version vulnérable de PHP. Les installations PHP servant des requêtes Web peuvent être concernées, notamment PHP-FPM, Apache avec mod_php, PHP-CGI, FrankenPHP et LiteSpeed.

:::important Il ne s'agit pas d'une faille de ClientXCMS
Ces vulnérabilités affectent **l'environnement d'exécution PHP**, et non ClientXCMS lui-même. Une instance ClientXCMS peut néanmoins être exposée lorsqu'elle fonctionne avec une version de PHP concernée, comme toute autre application PHP.
:::

![Alerte de sécurité PHP concernant les CVE-2026-109618 et CVE-2026-109619](/img/blog/php-security-notice/header.png)

<!-- truncate -->

## Offres Cloud et infrastructures gérées par ClientXCMS

Nos **offres ClientXCMS Cloud ainsi que les infrastructures administrées par nos équipes sont sécurisées**. Les clients utilisant ces services gérés n'ont pas à mettre eux-mêmes PHP à jour.

Si vous hébergez ClientXCMS sur votre propre VPS, serveur dédié ou hébergement tiers, la maintenance de PHP reste sous votre responsabilité. Vérifiez votre environnement et appliquez immédiatement les mises à jour de sécurité disponibles.

## Versions PHP corrigées

Les versions suivantes intègrent les correctifs annoncés par le projet PHP :

- PHP 8.5.12
- PHP 8.4.27
- PHP 8.3.36
- PHP 8.2.35

Les versions antérieures de ces branches doivent être mises à jour. PHP 8.1 et les versions plus anciennes ne sont plus maintenus par le projet PHP. Votre distribution ou votre fournisseur LTS peut proposer des correctifs rétroportés, mais une migration vers une branche maintenue doit être planifiée.

Selon [l'avis de sécurité officiel de PHP](https://www.php.net/archive/2026.php), la mise à jour est la seule solution complète. Les mesures temporaires réduisent uniquement l'exposition à certains scénarios d'attaque.

## Comment mettre PHP à jour

### 1. Vérifier la version actuelle

```bash
php -v
```

Vérifiez également les versions utilisées par PHP-FPM, Apache et chacun des pools PHP du serveur. La version affichée en ligne de commande peut être différente de celle réellement utilisée par votre site.

### 2. Mettre les paquets à jour

Avant toute mise à jour système, suivez votre procédure habituelle de sauvegarde et de maintenance.

**Debian / Ubuntu :**

```bash
sudo apt update
sudo apt upgrade
```

**AlmaLinux / Rocky Linux / RHEL :**

```bash
sudo dnf update 'php*'
```

Si vous utilisez un dépôt tiers ou celui d'un fournisseur, vérifiez qu'il propose un paquet corrigé pour votre environnement. Les distributions peuvent rétroporter le correctif sans afficher exactement le numéro de version publié par PHP : consultez alors l'avis de sécurité de votre fournisseur.

### 3. Redémarrer les services concernés

Redémarrez PHP-FPM ou Apache afin que les nouveaux binaires soient effectivement chargés. Par exemple :

```bash
sudo systemctl restart php8.4-fpm
```

Adaptez le nom du service à la version installée sur votre serveur. Si vous utilisez mod_php, redémarrez Apache. Assurez-vous que tous les workers et pools PHP ont été redémarrés.

### 4. Vérifier les panels d'administration

Si vous utilisez Plesk, cPanel ou un autre panel disposant de sa propre gestion des paquets PHP, installez les mises à jour fournies par son éditeur. Vérifiez chaque domaine et chaque gestionnaire PHP, car plusieurs versions peuvent être utilisées sur un même serveur.

### 5. Confirmer la mise à jour

Exécutez de nouveau `php -v` et contrôlez également la version utilisée par le site Web. Testez ensuite l'administration ClientXCMS, l'espace client, les tâches planifiées, les parcours de paiement et les workers en arrière-plan.

## Si aucun paquet corrigé n'est encore disponible

La mise à jour reste la seule solution complète. Dans l'attente du paquet de votre fournisseur, l'équipe de sécurité PHP recommande des mesures temporaires qui réduisent l'exposition sans rendre l'installation sûre.

Pour les scénarios confirmés liés aux sessions, désactivez le suivi de progression des téléversements dans le `php.ini` système, la configuration du pool PHP-FPM ou celle du serveur :

```ini
session.upload_progress.enabled = 0
```

Redémarrez tous les workers PHP après avoir appliqué ce paramètre. Ne comptez pas sur `ini_set()` ou sur un fichier `.user.ini` de PHP-FPM pour cette mesure.

Parmi les autres mesures temporaires publiées par PHP figurent la configuration de `memory_limit=-1` à un niveau que l'application ne peut pas modifier et, pour PHP 8.5, la configuration de `fatal_error_backtraces=0`. Ces mesures ont des conséquences opérationnelles et restent incomplètes : consultez [l'avis officiel](https://www.php.net/archive/2026.php) avant de les appliquer.

## Besoin d'aide ?

Nous vous recommandons de mettre immédiatement à jour les serveurs auto-hébergés. Si vous avez besoin d'aide pour identifier la version de PHP utilisée par votre instance ou valider la mise à jour, ouvrez un ticket auprès du support ClientXCMS ou contactez votre hébergeur.
