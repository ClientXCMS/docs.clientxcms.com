---
sidebar_position: 1
---

# Paramètres du centre d'aide

Dans **CLIENTXCMS**, les **paramètres du centre d'aide** définissent le comportement et les règles de fonctionnement de votre système de support. <br/>
L'objectif est stratégique : **optimiser l'efficacité du support**, **automatiser les processus répétitifs** et **garantir une expérience cohérente** pour vos clients et votre équipe. Une configuration appropriée améliore la productivité, réduit la charge de travail manuelle et maintient un niveau de service élevé.

Ces paramètres contrôlent les automatisations, les notifications, les pièces jointes et les intégrations externes.

Vous pouvez modifier les paramètres depuis :

`Paramètres` > `Centre d'aide` > `Paramètres du centre d'aide`

:::tip Astuce
Des paramètres bien configurés transforment votre centre d'aide en **machine bien huilée**. 
Chaque automatisation vous fait gagner du temps pour vous concentrer sur les cas complexes.
:::

## Pourquoi configurer ces paramètres ?

La configuration du centre d'aide est essentielle pour :

* **Automatiser la gestion** des tickets inactifs
* **Contrôler les interactions** avec les clients
* **Sécuriser les échanges** de fichiers
* **Intégrer avec vos outils** externes
* **Maintenir la qualité** du service

:::tip Astuce
C'est comme régler les paramètres d'une machine industrielle ⚙️ — plus c'est précis, plus c'est efficace et fiable.
:::

## Gestion automatique des tickets

### Fermeture automatique

**Fermeture automatique après inactivité** | (nombre de jours)<br />
Définit après combien de jours un ticket sans activité sera automatiquement fermé.

**Valeurs recommandées** :
- **7 jours** : Standard pour la plupart des cas
- **3 jours** : Support haute réactivité
- **14 jours** : Projets complexes nécessitant plus de temps
- **0** : Désactive la fermeture automatique

:::tip Avantages de la fermeture automatique
- **Nettoie automatiquement** les tickets abandonnés
- **Maintient des statistiques** précises
- **Libère la charge** de travail des équipes
- **Encourage la réactivité** des clients
:::

### Ré-ouverture contrôlée

**Autorisation de ré-ouverture** | (nombre de jours)<br />
Permet aux clients de rouvrir leurs tickets fermés pendant une période limitée.

**Options disponibles** :
- **7 jours** : Délai standard recommandé
- **0** : Désactive la ré-ouverture
- **-1** : Ré-ouverture illimitée dans le temps

**Cas d'usage** :
- **7 jours** : Pour les problèmes techniques standards
- **14 jours** : Pour les migrations ou projets complexes
- **0** : Pour forcer de nouveaux tickets et éviter la confusion
- **-1** : Pour un support premium avec suivi long terme

:::warning Attention
Une ré-ouverture illimitée peut créer des tickets très anciens difficiles à gérer. Privilégiez un délai raisonnable.
:::

## Gestion des pièces jointes

### Activation des fichiers

**Autoriser les pièces jointes** | (interrupteur)<br />
Active ou désactive la possibilité pour les clients de joindre des fichiers à leurs tickets.

**Avantages des pièces jointes** :
- **Captures d'écran** pour les problèmes visuels
- **Logs d'erreur** pour le diagnostic technique
- **Documents** pour les demandes administratives
- **Preuves** pour les réclamations

### Sécurité et limitations

**Taille maximale** | (Mo)<br />
Limite la taille des fichiers que les clients peuvent joindre.

**Recommandations par type d'usage** :

| Type de support | Taille recommandée | Justification |
|-----------------|-------------------|---------------|
| **Support général** | 5 Mo | Screenshots et documents légers |
| **Support technique** | 10 Mo | Logs et fichiers de configuration |
| **Support développeur** | 25 Mo | Archives de code et dumps |
| **Serveur limité** | 2 Mo | Économie d'espace disque |

### Types de fichiers autorisés

**Extensions acceptées** | (liste séparée par virgules)<br />
Définit quels types de fichiers sont acceptés dans les tickets.

**Configuration par défaut** : `jpg,jpeg,png,doc,docx,xls,xlsx`

**Configurations recommandées** :

#### Support standard
```
jpg,jpeg,png,gif,pdf,doc,docx,txt,log
```

#### Support technique avancé
```
jpg,jpeg,png,gif,pdf,doc,docx,txt,log,zip,rar,sql,json,xml
```

#### Support sécurisé (restrictif)
```
jpg,jpeg,png,pdf,txt
```

:::warning Sécurité des fichiers
**Types à éviter absolument** :
- `.exe, .bat, .cmd` : Fichiers exécutables
- `.php, .js, .html` : Scripts potentiellement malveillants
- `.scr, .pif` : Extensions souvent utilisées par les malwares

**Bonnes pratiques** :
- Limitez aux types strictement nécessaires
- Scannez les fichiers avec un antivirus
- Vérifiez régulièrement les uploads suspects
:::

## Intégrations et notifications

### Webhooks de notification

**URL du webhook** | (URL HTTPS)<br />
Configurez une URL pour recevoir des notifications en temps réel sur les événements du centre d'aide.

![Exemple de notification webhook](https://cdn.clientxcms.com/ressources/docs/ticket.png)

#### Types d'événements notifiés
- **Nouveau ticket** créé
- **Réponse client** ajoutée
- **Ticket fermé** 

### Organisation sécurisée
```
Fermeture automatique : 5 jours
Ré-ouverture : 0 (désactivée)
Pièces jointes : Activées (2 Mo)
Types autorisés : jpg,png,pdf,txt
Webhook : Système audit interne
```

## Optimisation des performances

### Surveillance des métriques

Analysez régulièrement :
- **Taux de ré-ouverture** : Indicateur de qualité des résolutions
- **Temps de fermeture** : Efficacité des automatisations
- **Volume de pièces jointes** : Impact sur l'espace disque
- **Types de fichiers** : Adaptation aux besoins réels

### Maintenance préventive

1. **Nettoyage périodique** : Supprimez les vieux fichiers
2. **Révision des paramètres** : Ajustez selon l'évolution
3. **Tests webhook** : Vérifiez la connectivité régulièrement
4. **Formation équipe** : Assurez-vous que tous maîtrisent les paramètres

:::tip À retenir
Les paramètres du centre d'aide doivent évoluer avec votre activité. Ce qui fonctionne pour une petite équipe peut ne pas convenir à une organisation plus importante. Révisez et ajustez régulièrement selon vos métriques et retours d'expérience.
:::
