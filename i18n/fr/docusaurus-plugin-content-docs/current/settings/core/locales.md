---
sidebar_position: 3
---

# Langues

Dans **CLIENTXCMS**, la gestion des **langues** vous permet d'**internationaliser votre plateforme** et de **toucher une clientèle mondiale**. <br/>
L'objectif est simple : **offrir une expérience native à chaque utilisateur** dans sa langue préférée et **élargir votre marché potentiel**. Une plateforme multilingue améliore l'accessibilité, renforce la confiance des clients internationaux et augmente vos opportunités commerciales.

Le système de langues prend en charge l'interface complète, les e-mails automatiques et même vos contenus personnalisés.

Vous pouvez gérer les langues depuis :

`Paramètres` > `Paramètres généraux` > `Langues`

![Accès à la configuration des langues](/img/next_gen/settings/core/locales/image.png)

:::tip Astuce
Une plateforme disponible dans la langue native de vos clients **augmente significativement** les taux de conversion.
C'est un investissement minimal pour un impact commercial maximal.
:::

## Pourquoi proposer plusieurs langues ?

Le multilinguisme est essentiel pour :

* **Élargir votre marché** à l'international sans barrière linguistique
* **Améliorer l'expérience client** en proposant une interface native
* **Augmenter la confiance** des utilisateurs non francophones
* **Optimiser votre référencement** dans différents pays

:::tip Astuce
C'est comme avoir plusieurs vitrines dans différents pays 🌍 — chaque client se sent chez lui, peu importe sa langue maternelle.
:::

## Langues disponibles

CLIENTXCMS propose actuellement les langues suivantes :

| Langue | Code | Statut |
|--------|------|---------|
| 🇫🇷 **Français** | `fr` | Langue par défaut |
| 🇬🇧 **Anglais** | `en` | Disponible |
| 🇪🇸 **Espagnol** | `es` | Disponible |
| 🇩🇪 **Allemand** | `de` | Disponible |
| 🇮🇹 **Italien** | `it` | Disponible |

:::info Note
D'autres langues peuvent être ajoutées sur demande de la communauté. Les traductions sont maintenues et améliorées régulièrement.
:::

## Gestion des langues

### Télécharger une langue

Pour ajouter une nouvelle langue à votre plateforme :

1. Accédez à la page de gestion des langues
2. Localisez la langue souhaitée dans la liste
3. Cliquez sur le bouton **"Télécharger"**
4. La langue sera automatiquement installée et activée

:::tip Astuce
L'installation est instantanée et ne nécessite aucun redémarrage. Vos utilisateurs peuvent immédiatement changer de langue.
:::

### Mettre à jour les traductions

Les fichiers de langue sont régulièrement améliorés pour :
- Corriger d'éventuelles erreurs de traduction
- Ajouter les traductions des nouvelles fonctionnalités
- Améliorer la qualité linguistique

Pour mettre à jour une langue :

1. Le bouton **"Mettre à jour"** apparaît pour chaque langue installée
2. Cliquez dessus pour télécharger la dernière version
3. Les traductions sont mises à jour instantanément

:::info Important
Le bouton "Mettre à jour" reste toujours visible, même si vous avez la dernière version. Cela permet de **réinstaller** la langue en cas de problème ou de personnalisation accidentelle.
:::

## Configuration de la langue par défaut

### Définir la langue principale

La langue par défaut est celle affichée :
- Aux nouveaux visiteurs
- Lorsque la langue du navigateur n'est pas disponible
- Dans les communications système

Pour la modifier :
1. Allez dans `Paramètres` > `Paramètres généraux`
2. Sélectionnez la nouvelle langue par défaut
3. Enregistrez les modifications

### Comportement automatique

CLIENTXCMS détecte automatiquement :
- La langue du navigateur du visiteur
- La préférence enregistrée de l'utilisateur connecté
- La langue par défaut si aucune correspondance

## Impact sur votre plateforme

### Éléments traduits

Lorsqu'une langue est activée, les éléments suivants sont traduits :

✅ **Interface utilisateur** : Tous les menus, boutons et messages
✅ **E-mails automatiques** : Notifications, factures, confirmations
✅ **Messages système** : Erreurs, confirmations, alertes
✅ **Contenu statique** : Pages légales, conditions générales

### Éléments à traduire manuellement

Certains contenus nécessitent une traduction manuelle :

📝 **Descriptions de produits** : Via l'interface de gestion des produits
📝 **Pages personnalisées** : Contenu créé spécifiquement
📝 **Annonces et actualités** : Communications marketing
📝 **Métadonnées SEO** : Titres et descriptions pour le référencement

## Personnalisation des traductions

### Modifier les traductions existantes

Si vous souhaitez adapter certaines traductions :

1. Les fichiers de langue sont stockés dans `/resources/lang/`
2. Chaque langue a son propre dossier (ex: `fr/`, `en/`)
3. Modifiez les fichiers PHP avec précaution
4. Testez vos modifications en environnement de développement

:::warning Attention
Les modifications manuelles seront **écrasées** lors des mises à jour. Documentez vos changements pour pouvoir les réappliquer.
:::

### Ajouter des traductions personnalisées

Pour vos contenus spécifiques :

```php
// Dans vos vues ou contrôleurs
__('custom.my_translation_key')

// Dans le fichier de langue
'my_translation_key' => 'Ma traduction personnalisée',
```

## Bonnes pratiques

### Pour l'expérience utilisateur

1. **Sélecteur visible** : Placez le sélecteur de langue dans l'en-tête
2. **Drapeaux clairs** : Utilisez des icônes reconnaissables
3. **Mémorisation** : La préférence doit être sauvegardée
4. **Cohérence** : Traduisez TOUT ou rien

### Pour le référencement

1. **URLs localisées** : Utilisez des sous-domaines ou répertoires
2. **Balises hreflang** : Indiquez les alternatives linguistiques
3. **Contenu unique** : Évitez les traductions automatiques de mauvaise qualité
4. **Sitemap multilingue** : Incluez toutes les versions

### Pour la maintenance

1. **Documentation** : Notez vos personnalisations
2. **Tests réguliers** : Vérifiez après chaque mise à jour
3. **Feedback utilisateurs** : Collectez les retours sur la qualité
4. **Veille** : Surveillez les nouvelles langues disponibles

## Cas d'usage avancés

### Activation conditionnelle

Vous pouvez activer des langues selon vos besoins :

- **Phase de test** : Commencez avec 2-3 langues principales
- **Expansion graduelle** : Ajoutez des langues selon la demande
- **Marchés ciblés** : Activez uniquement les langues pertinentes

### Intégration avec les modules

Certains modules supportent le multilinguisme :
- Traduction automatique des produits
- Génération de factures multilingues
- Support client dans plusieurs langues

:::tip À retenir
Le multilinguisme est un **avantage concurrentiel majeur**. Chaque langue ajoutée ouvre votre business à des millions de nouveaux clients potentiels. L'effort d'implementation est minimal comparé au potentiel de croissance.
:::