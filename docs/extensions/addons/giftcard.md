# Cartes-cadeaux

> Cette page détaille la mise en place, la gestion et l’utilisation de l’addon **Cartes-cadeaux / Gift cards** pour ClientXCMS.
> Objectif : permettre la création, la vente et l’utilisation de cartes-cadeaux (montant fixe ou aléatoire) avec suivi complet côté administration et côté client.

---

## 1. Principe général

1. **Paramétrage global**

   * Vous définissez les montants autorisés, le préfixe des codes et la durée de validité par défaut.
2. **Création & Gestion**

   * Depuis l’administration : générer une carte-cadeau manuellement (montant fixe ou aléatoire, nombre d’utilisations, destinataire optionnel) ou consulter les statistiques globales.
3. **Vente en boutique**

   * Les clients peuvent acheter une carte-cadeau (montants prédéfinis) via la passerelle de paiement de leur choix ; le code est envoyé par e-mail.
4. **Utilisation**

   * Le bénéficiaire saisit le code dans son espace client → le solde est crédité immédiatement.
5. **Suivi**

   * Tableaux de bord (admin + client) listent cartes commandées, utilisées, taux d’usage, total reversé, etc.

---

## 2. Prérequis

Une fois L'addon activé :

* **Administration → Paramètres → Paramètres des extensions → Paramètres des cartes-cadeaux**
* Interface de gestion : **Administration → Paramètres → Paramètres de la boutique → Cartes-cadeaux**

| Élément     | Version / Détail                                                |
| ----------- | --------------------------------------------------------------- |
| Add-on      | **Cartes-cadeaux** (Marketplace)                                    |
| Dépendances | Aucune, fonctionne en natif avec les moyens de paiement actifs |                                                    |
| Rôle client | Autorisation « Utiliser une carte-cadeau » (activée par défaut) |

---

## 3. Paramètres globaux (extension)

| Champ                          | Description                                               | Exemple                      |
| ------------------------------ | --------------------------------------------------------- | ---------------------------- |
| **Montants autorisés**         | Valeurs proposées à l’achat, séparées par virgule         | `10,20,50,100,200`           |
| **Expiration (jours)**         | Durée de validité par défaut des cartes créées ou vendues | `365`                        |
| **Autoriser l’achat**          | Active/désactive la vente dans l’espace client            | ✅                            |
| **Préfixe des cartes-cadeaux** | Ajouté automatiquement devant chaque code généré          | `CC` (donnera `CC-6MCP9IC8`) |

> Les montants sont exprimés dans la devise principale de votre boutique.

---

## 4. Interface d’administration

### 4.1 Tableau de bord
![img](/img/next_gen/extensions/addons/giftcards/giftcards_admin_view.png)

* **Cartes-cadeaux créées** : compteur total.
* **Montant total reversé** : somme créditée aux clients.
* **Taux d’utilisation** : pourcentage de cartes totalement consommées.

### 4.2 Liste & actions

| Colonne         | Description                                  |
| --------------- | -------------------------------------------- |
| `#`             | Identifiant interne                          |
| **Code**        | Code de la carte-cadeau                      |
| **Utilisation** | `x / y` (utilisations réalisées / maximales) |
| **Montant**     | Valeur fixe ou plage aléatoire               |
| **Créé**        | Date de génération                           |
| **Actions**     | **Afficher** (détails) / **Supprimer**       |

### 4.3 Filtres disponibles

* Code de la carte
* Montant
* Type (fixe / aléatoire)
* Identifiant interne
* Client (destinataire)

---

## 5. Création manuelle

![img](/img/next_gen/extensions/addons/giftcards/giftcards_creer_admin.png)

**Administration → Cartes-cadeaux → Créer**

| Champ                      | Type *Montant fixe*                  | Type *Montant aléatoire*   |
| -------------------------- | ------------------------------------ | -------------------------- |
| **Code de la carte**       | Pré-rempli (`CC-XXXXXXX`) modifiable | Pré-rempli modifiable      |
| **Montant**                | Valeur unique (ex. `25,00`)          | —                          |
| **Montant min / max**      | —                                    | Plage ex. `5,00` – `50,00` |
| **Utilisations maximales** | `-1` = illimité, sinon 1, 2 …        | Idem                       |
| **Expiration**             | Date/heure facultative               | Idem                       |
| **Client autorisé**        | Restreindre la carte à un client     | Idem                       |

Cliquez **Créer** : la carte apparaît dans la liste et peut être envoyée manuellement ou communiquée au bénéficiaire.

---

## 6. Expérience côté client

![img](/img/next_gen/extensions/addons/giftcards/giftcards_client_view.png)

> Menu **Mon compte → Moyens de paiement → Cartes-cadeaux**

1. **Ajouter une carte-cadeau**

   * Champ code + bouton **Ajouter**  ⇒ le crédit est transféré instantanément sur le solde.
2. **Offrir une carte-cadeau**

   * Sélection du montant (parmi ceux autorisés) + passerelle de paiement.
   * Option « Cette carte-cadeau est pour un ami » : envoie le code par e-mail au destinataire.
3. **Cartes commandées**

   * Liste des codes achetés, état *utilisé / non* et date.
4. **Cartes utilisées**

   * Historique des codes appliqués, montants et dates.

---

## 7. Bonnes pratiques

1. **Montants prédéfinis** : proposez des valeurs rondes (10 €, 20 €…) pour simplifier l’achat.
2. **Préfixe distinctif** : ex. `CC` pour « ClientXCMS » afin d’éviter la confusion avec les coupons.
3. **Expiration raisonnable** : 6 – 12 mois suffisent tout en respectant les obligations légales locales.
4. **Limitez les utilisations** : 1 par défaut ; illimité seulement pour des besoins précis (ex. programme fidélité).
5. **Support** : conservez l’ID interne (#) pour toute demande de traçabilité.
