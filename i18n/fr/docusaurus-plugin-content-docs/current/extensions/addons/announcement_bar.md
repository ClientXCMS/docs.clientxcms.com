---
sidebar_position: 1
---

# Announcement Bar
L'addon Announcement Bar permet d'afficher une barre de notification en haut de votre site web pour informer vos utilisateurs des nouveautés, promotions ou alertes importantes.

:::warning
Cet addon nécessite une version v2.14.9 ou supérieure de ClientXCMS.
:::

## Configuration
Vous pouvez gérer la configuration de l'announcement bar dans `Espace d'administration ` > `Paramètres` > `Personalisations ` > `Bandeau d'annonce`

**HTML du bandeau** : Vous pouvez mettre du HTML dans le champ de texte pour personnaliser le contenu de la barre d'annonce.
**Début d'affichage** : Vous pouvez définir la date et l'heure de début d'affichage de la barre d'annonce.
**Fin d'affichage** : Vous pouvez définir la date et l'heure de fin d'affichage de la barre d'annonce.
**Activer le bandeau** : Vous pouvez activer ou désactiver l'announcement bar.
:::info
Vérifiez que le thème que vous utilisez supporte l'affichage de l'announcement bar. Certains thèmes personnalisés peuvent ne pas afficher cette fonctionnalité.
:::

## Comment supporter l'addon sur un thème ?
Pour que l'announcement bar s'affiche correctement, votre thème doit inclure le code suivant dans votre fichier `layouts/client.blade.php` ou `layouts/front.blade.php` ou équivalent, juste après la balise `<body>` :

```php
    {!! app('seo')->header() !!}
```

## Exemple d'affichage de l'announcement bar :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="example1" label="Exemple 1">
### Preview : 
    ![img](/img/next_gen/extensions/addons/announcement_bar/example1.png)
### Code source : 
```html
<div class="bg-gray-400 backdrop-blur-lg dark:bg-neutral-900/60">
    <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <!-- Grid -->
        <div class="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
            <div class="flex items-center gap-x-3 md:gap-x-5">
                <div class="grow">
                    <p class="md:text-xl text-gray-800 font-semibold dark:text-neutral-200">
                        Démarrez dès aujourd'hui. 
                    </p>
                    <p class="text-sm md:text-base text-gray-800 dark:text-neutral-200">
                        Profitez du code promo <span class="font-semibold text-primary">"TEST"</span> pour une remise de 5% sur votre première commande.
                    </p>
                </div>
            </div>
            <div class="text-center sm:text-start flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
                <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/store">
                    Commencer
                </a>
                <a class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300" href="/client/support/submit">
                    Nous contacter
                </a>
            </div>
        </div>
    </div>
</div>
```
</TabItem>

    <TabItem value="example2" label="Exemple 2">
```html
<div class="bg-emerald-500 rounded-lg">
    <div class="max-w-7xl px-4 py-4 sm:px-6 lg:px-8 mx-auto">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3 text-center sm:text-left">
                <svg class="w-6 h-6 text-white hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"></path>
                </svg>
                <div>
                    <p class="text-white font-semibold text-lg">
                        Frais d'installation offert dès 50€ d'achat
                    </p>
                    <p class="text-emerald-100 text-sm">
                        Profitez-en avant la fin du mois
                    </p>
                </div>
            </div>
            <div class="flex gap-3">
                <a href="#" class="px-6 py-2 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                    Découvrir
                </a>
                <button data-announcement-dismiss class="px-3 py-2 text-white hover:bg-emerald-600 rounded-lg transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    </div>
```
    </TabItem>
    <TabItem value="example3" label="Exemple 3">
### Preview : 
    ![img](/img/next_gen/extensions/addons/announcement_bar/example3.png)

### Code source : 
```html
<div class="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
    <div class="max-w-7xl px-4 py-3 sm:px-6 lg:px-8 mx-auto">
        <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                </svg>
                <p class="text-sm md:text-base text-white font-medium">
                    <span class="font-bold">Offre Spéciale:</span> -30% sur toute la collection Été avec le code <span class="px-2 py-1 bg-white/20 rounded font-mono">ETE30</span>
                </p>
            </div>
            <button data-announcement-dismiss class="text-white hover:text-gray-200 transition-colors">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </div>
</div>
```
</TabItem>
<TabItem value="example4" label="Exemple 4">
### Preview :
    ![img](/img/next_gen/extensions/addons/announcement_bar/example4.png)
### Code source :
```html
<div id="bar5" class="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                <div class="max-w-7xl px-4 py-4 sm:px-6 lg:px-8 mx-auto">
                    <div class="flex flex-col lg:flex-row items-center justify-between gap-4">
                        <div class="flex items-center gap-4 text-center lg:text-left">
                            <svg class="w-8 h-8 text-white hidden lg:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                            </svg>
                            <div>
                                <p class="text-white font-bold text-xl">
                                    Offres exclusives du moment
                                </p>
                                <div class="flex flex-wrap gap-2 mt-2 justify-center lg:justify-start">
                                    <span class="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                                        WELCOME10 → -10%
                                    </span>
                                    <span class="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                                        FIRST20 → -20€
                                    </span>
                                    <span class="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                                        FREE50 → Livraison offerte
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <a href="#" class="px-6 py-3 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-colors shadow-lg">
                                Commander maintenant
                            </a>
                            <button data-announcement-dismiss class="p-3 text-white hover:bg-white/10 rounded-full transition-colors">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
</div>
```
</TabItem>
    
    </Tabs>

    ### Comment ajouter un bouton de fermeture ?
    Vous pouvez ajouter un bouton de fermeture à l'announcement bar en utilisant le code HTML et
    JavaScript suivant :
```html
<button  type="button" data-announcement-dismiss><i class="bi bi-x-lg"></i></button>
<!-- or -->
<button type="button" onclick="clientxAnnouncementBarHide()"><i class="bi bi-x-lg"></i></button>
```