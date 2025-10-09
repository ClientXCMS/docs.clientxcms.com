import ThemedImage from '@theme/ThemedImage';

# Paramètres

Le panneau de paramètres de ClientXCMS vous permet de configurer tous les aspects de votre plateforme. Les paramètres sont organisés en 9 catégories principales pour une gestion optimale de votre espace client.

## Configuration détaillée par catégorie

Accédez directement aux différentes sections de configuration :

<style>
{`
.settings-card {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 8px;
  padding: 1rem;
  background: var(--ifm-card-background-color);
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  color: inherit;
  display: block;
}

.settings-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-color: var(--ifm-color-primary);
  text-decoration: none;
  color: inherit;
}

.settings-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.settings-card p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--ifm-color-emphasis-700);
}
`}
</style>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>

<a href="#paramètres-généraux" className="settings-card">
  <h3>🏢 Paramètres généraux</h3>
  <p>Configuration de base (nom, logo, mail, maintenance, langues, licence)</p>
</a>

<a href="#approvisionnement" className="settings-card">
  <h3>⚙️ Approvisionnement</h3>
  <p>Gestion des services et serveurs</p>
</a>

<a href="#paramètres-de-la-boutique" className="settings-card">
  <h3>🛒 Paramètres de la boutique</h3>
  <p>Produits, paiements, coupons, facturation</p>
</a>

<a href="#paramètres-des-extensions" className="settings-card">
  <h3>🧩 Paramètres des extensions</h3>
  <p>Modules et addons installés</p>
</a>

<a href="#proxmox" className="settings-card">
  <h3>🖥️ Proxmox</h3>
  <p>IPAM, modèles KVM, systèmes LXC</p>
</a>

<a href="#sécurité" className="settings-card">
  <h3>🔒 Sécurité</h3>
  <p>Personnels, API, base de données, logs</p>
</a>

<a href="#facturation" className="settings-card">
  <h3>💰 Facturation</h3>
  <p>Abonnements, factures, transferts</p>
</a>

<a href="#centre-daide" className="settings-card">
  <h3>🎧 Centre d'aide</h3>
  <p>Helpdesk et support client</p>
</a>

<a href="#personnalisation" className="settings-card">
  <h3>🎨 Personnalisation</h3>
  <p>Interface, thème, SEO, menus</p>
</a>

</div>


## Vue d'ensemble des catégories

### Paramètres généraux
**Paramètres généraux de CLIENTXCMS (nom, adresse, logo, favicon, mail)**

<ThemedImage
  alt="Paramètres généraux"
  sources={{
    light: '/img/next_gen/settings/settings_0.png',
    dark: '/img/next_gen/settings/settings_0_dark.png'
  }}
/>

Configuration de base de votre plateforme incluant l'identité visuelle, les paramètres de communication, la gestion des langues et la validation de licence. Ces éléments forment le socle de votre espace client.

**Configuration disponible :**
* **[Paramètres globaux](./core/app)** : Nom, adresse, logo, favicon de l'espace client
* **[Paramètres de messagerie](./core/mail)** : Notifications par e-mail et serveur SMTP  
* **[Mode maintenance](./core/maintenance)** : Activation/désactivation temporaire de l'accès client
* **[Langues](./core/locales)** : Gestion des langues disponibles
* **[Licence](./core/license)** : Validation de votre licence ClientXCMS

**[→ Configurer les paramètres généraux](./core)**

### Approvisionnement
**Gérez l'approvisionnement des services pour les clients**

<ThemedImage
  alt="Approvisionnement"
  sources={{
    light: '/img/next_gen/settings/settings_1.png',
    dark: '/img/next_gen/settings/settings_1_dark.png'
  }}
/>

Gestion complète de votre infrastructure de services. Cette section centralise la configuration des serveurs, des options de services et des paramètres d'approvisionnement automatique pour vos clients.

**Configuration disponible :**
* **[Paramètres des services](./provisioning/services)** : Configuration des options de services
* **[Serveurs](./provisioning/servers)** : Liste et état des serveurs configurés
* **Sous-domaines** : Gestion des sous-domaines autorisés
* **[Options de configuration](./provisioning/provisioning.md)** : Personnalisation des services
* **[Configuration](./provisioning/provisioning.md)** : Options générales d'approvisionnement

**[→ Configurer l'approvisionnement](./provisioning)**

### Paramètres de la boutique
**Paramètres de la boutique (PayPal, TVA, etc.)**

<ThemedImage
  alt="Paramètres de la boutique"
  sources={{
    light: '/img/next_gen/settings/settings_2.png',
    dark: '/img/next_gen/settings/settings_2_dark.png'
  }}
/>

Configuration complète de votre boutique en ligne. Gérez vos produits, moyens de paiement, promotions et tous les aspects commerciaux de votre plateforme pour offrir une expérience d'achat optimale à vos clients.

**Configuration disponible :**
* **[Produits](./store/products)** : Gestion du catalogue et des offres
* **[Groupes](./store/groupes)** : Organisation des produits par catégories
* **[Coupons](./store/coupon)** : Système de réductions et promotions
* **[PayPal Express Checkout](./store/payment_gateways/paypal_express_checkout)** : Configuration du paiement PayPal Express
* **[PayPal](./store/payment_gateways/paypal)** : Configuration PayPal standard
* **[Balance](./store/payment_gateways/balance)** : Système de portefeuille client
* **[Stripe](./store/payment_gateways/stripe)** : Configuration du processeur de paiement Stripe
* **[Virement Bancaire](./store/payment_gateways/bank_transfert)** : Paramètres des virements bancaires
* **[Stancer](./store/payment_gateways/stancer)** : Configuration du processeur Stancer
* **Paramètres Fonds** : Gestion des transferts de fonds
* **Carte-cadeau** : Système de cartes-cadeaux

**[→ Configurer la boutique](./store)**

### Paramètres des extensions
**Gérez les paramètres des extensions installées**

<ThemedImage
  alt="Paramètres des extensions"
  sources={{
    light: '/img/next_gen/settings/settings_3.png',
    dark: '/img/next_gen/settings/settings_3_dark.png'
  }}
/>

Configuration des modules et extensions installés sur votre plateforme. Cette section permet de gérer les paramètres spécifiques à chaque extension pour étendre les fonctionnalités de ClientXCMS.

**Configuration disponible :**
* **Extensions** : Gestion des extensions du Marketplace
* **Discord Link** : Intégration avec Discord
* **Double comptes** : Détection des comptes multiples
* **Sentry** : Service de surveillance des erreurs
* **Contacts** : Gestion des demandes de contact
* **Paramètres des cartes cadeaux** : Configuration avancée des cartes-cadeaux

**[→ Gérer les extensions](../extensions)**

:::info
Consultez la section [Extensions](../extensions) pour plus d'informations sur l'installation et la configuration des modules.
:::

### Proxmox
**Gérez les différentes options du module Proxmox (IPAM, Modèles, Oses)**

<ThemedImage
  alt="Proxmox"
  sources={{
    light: '/img/next_gen/settings/settings_4.png',
    dark: '/img/next_gen/settings/settings_4_dark.png'
  }}
/>

Configuration spécifique à l'intégration Proxmox pour la gestion de machines virtuelles et conteneurs. Cette section permet de configurer les templates, la gestion des adresses IP et le suivi des opérations.

**Configuration disponible :**
* **IPAM** : Gestionnaire d'adresses IPv4 et IPv6
* **Modèles KVM** : Templates de machines virtuelles
* **Systèmes d'exploitation LXC** : Templates de conteneurs
* **Historique** : Suivi des actions sur les machines virtuelles

**[→ Configurer Proxmox](../extensions/modules/Proxmox.md)**

:::note
Cette section n'est disponible que si le module Proxmox est installé et activé.
:::

### Sécurité
**Paramètres de sécurité de l'espace client**

<ThemedImage
  alt="Sécurité"
  sources={{
    light: '/img/next_gen/settings/settings_5.png',
    dark: '/img/next_gen/settings/settings_5_dark.png'
  }}
/>

Gestion complète de la sécurité de votre plateforme. Configurez les accès administrateurs, les politiques de sécurité, surveillez les activités et gérez les permissions pour maintenir un environnement sécurisé.

**Configuration disponible :**
* **[Personnels](./security/staffs)** : Gestion des accès administrateurs
* **Clés API** : Gestion des clés d'accès API
* **[Base de données](./security/database)** : Accès et migration de la base
* **[Paramètres de sécurité](./security/security-setting)** : Politiques de sécurité globales
* **[Historique](./security/history)** : Logs système et diagnostics
* **Journaux des actions** : Suivi détaillé des activités
* **Rôles** : Gestion des permissions personnalisées

**[→ Configurer la sécurité](./security)**

### Facturation
**Gestion des abonnements et des paiements**

<ThemedImage
  alt="Facturation"
  sources={{
    light: '/img/next_gen/settings/settings_6.png',
    dark: '/img/next_gen/settings/settings_6_dark.png'
  }}
/>

Système de facturation avancé pour gérer les abonnements, renouvellements et transactions. Configurez les paramètres de facturation, taxes et suivez l'historique des paiements de vos clients.

**Configuration disponible :**
* **Abonnements** : Gestion des renouvellements automatiques
* **[Facturation](./billing/billing.md)** : Configuration des factures et taxes
* **Améliorations des services** : Upgrades et downgrades
* **Transferts de fonds** : Historique des transactions

**[→ Configurer la facturation](./billing)**

### Centre d'aide
**Paramétrez le centre d'aide et gérez les tickets de support**

<ThemedImage
  alt="Centre d'aide"
  sources={{
    light: '/img/next_gen/settings/settings_7.png',
    dark: '/img/next_gen/settings/settings_7_dark.png'
  }}
/>

Support client intégré pour gérer les demandes d'assistance. Configurez les départements de support, organisez vos équipes et paramétrez le système de tickets pour offrir un support efficace.

**Configuration disponible :**
* **[Paramètres du centre d'aide](./helpdesk/helpdesk-settings)** : Configuration générale du helpdesk
* **[Départements de support](./helpdesk/departments)** : Organisation des équipes de support

**[→ Configurer le centre d'aide](./helpdesk)**

### Personnalisation
**Personnalisez les menus de l'espaces client et les réseaux sociaux de l'entreprise**

<ThemedImage
  alt="Personnalisation"
  sources={{
    light: '/img/next_gen/settings/settings_8.png',
    dark: '/img/next_gen/settings/settings_8_dark.png'
  }}
/>

Customisation complète de l'interface et de l'expérience utilisateur. Personnalisez l'apparence, les menus, les pages et optimisez votre espace client selon votre identité de marque et vos besoins spécifiques.

**Configuration disponible :**
* **Paramètres du thème** : Configuration visuelle et esthétique
* **[Page d'accueil](./personalization/home)** : Personnalisation de la page principale
* **[Réseaux sociaux](./personalization/socials)** : Liens et intégrations sociales
* **[Menu de haut de page](./personalization/front_menu)** : Navigation principale
* **[Menu de bas de page](./personalization/bottom_menu)** : Pied de page et liens rapides
* **Couleurs principales** : Charte graphique et thème
* **[Paramètres SEO](./personalization/seo)** : Optimisation pour les moteurs de recherche
* **[Sections](./personalization/sections)** : Personnalisation des sections client
* **Modèles d'email** : Templates de notification
* **Social Auth+** : Connexion via fournisseurs tiers
* **Pages** : Gestion des pages dynamiques
* **Préférences de la page de contact** : Configuration du formulaire de contact

**[→ Personnaliser l'interface](./personalization)**

