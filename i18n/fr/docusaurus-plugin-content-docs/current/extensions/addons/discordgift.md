# Cadeaux Discord
> Cette page explique pas à pas comment configurer, utiliser et personnaliser l’addon **Cadeaux Discord / Discord Gift** de ClientXCMS.
> Objectif : automatiser des « cadeaux Discord » (crédits aléatoires) envoyés à vos utilisateurs via un code unique, le tout piloté par Webhook.

---

## 1. Principe général

1. **Planification**

   * Vous définissez un créneau (durée d’activation & délai avant le prochain cadeau).
   * Un code unique (par ex. `CC-PZCRYGZ3`) est généré et communiqué sur votre serveur Discord.

2. **Distribution**

   * Chaque utilisateur peut utiliser le code **une seule fois** depuis l’espace client (ou l’API).
   * Le montant crédité est aléatoire entre un **minimum** et un **maximum** que vous fixez.

3. **Notification**

   * L'addon envoie automatiquement un ou plusieurs messages Webhook :

     * *Démarrage* : annonce du cadeau.
     * *Utilisation* : lorsqu’un membre utilise le code.
     * *Fin* : lorsqu’il n’y a plus d’utilisations possibles ou à l’expiration.

4. **Suivi**

   * Un graphique dans l’administration retrace les utilisations sur les 30 derniers lancements.

---

## 2. Prérequis

Une fois l'extension activée, vous pouvez accéder à la configuration de l'addon dans Espace d'administration  > Paramètres > Section "Personnalisation" > "Cadeaux Discord"

| Élément          | Version / Détail                                                                    |
| ---------------- | ----------------------------------------------------------------------------------- |
| Dépendances      | [**Cartes-Cadeaux**](https://clientxcms.com/marketplace/giftcard)                   |
| Add-on           | [**Discord Gift / Cadeaux Discord**](https://clientxcms.com/marketplace/discordgift)|
| Discord          | Permissions « Manage Webhooks » sur le salon cible                                  |
| Rôle utilisateur | Doit disposer de l’autorisation d’utiliser les codes cadeaux (paramètre par défaut) |

---

## 3. Création du Webhook Discord

1. Ouvrez le salon Discord où vous souhaitez publier l’annonce.
2. **Éditer le canal → Intégrations → Webhooks → *Nouveau Webhook***.
3. Copiez l’URL fournie (`https://discord.com/api/webhooks/{id}/{token}`).
4. Collez-la dans le champ **URL du Webhook Discord** (voir § 4).

---

## 4. Paramètres principaux

| Nom du champ                                 | Fonction                                           | Exemple                                       |
| -------------------------------------------- | -------------------------------------------------- | --------------------------------------------- |
| **URL du Webhook Discord**                   | URL copié à l’étape précédente                     | `https://discord.com/api/webhooks/13940089/…` |
| **Montant minimum donné**                    | Crédit le plus bas (en centimes)                   | `1000` → 10 €                                 |
| **Montant maximum donné**                    | Crédit le plus haut (en centimes)                  | `5000` → 50 €                                 |
| **Heures entre les cadeaux**                 | Intervalle avant le prochain lancement automatique | `1` = 1 h                                     |
| **Expiration (en minutes)**                  | Durée pendant laquelle le code reste valide        | `65`                                          |
| **Nombre maximum d’utilisations**            | Nombre de personnes pouvant utiliser le code       | `1` ou `∞`                                    |
| **Afficher le minuteur sur l’espace client** | Barre de décompte visible pour les clients         | ✅ / ❌                                         |
| **Prochain cadeau Discord défini**           | Date/heure UTC du prochain lancement (modifiable)  | `2025-07-16 01:11:00`                         |

> ℹ️ *Les montants sont stockés en centimes pour éviter les décimales (convention ClientXCMS)*.

---

## 5. Messages Webhook

![img](/img/next_gen/extensions/addons/discordgift/discordgift_webhooks.png)

Chaque événement peut déclencher un JSON personnalisé :

### 5.1 Placeholders disponibles

| Placeholder       | Remplacé par…                    |
| ----------------- | -------------------------------- |
| `%code%`          | Code cadeau actuel               |
| `%amount%`        | Montant crédité (formaté)        |
| `%min%` / `%max%` | Valeurs Mini / Maxi              |
| `%time%`          | Durée avant expiration (minutes) |
| `%count%`         | Utilisations restantes           |

### 5.2 Exemple : **Message au démarrage**

```json
{
  "content": null,
  "embeds": [
    {
      "title": "Démarrage des cadeaux Discord",
      "description": "Bonne nouvelles ! Vous avez %time% minutes pour récupérer entre %min%€ et %max%€ de crédit avec le code `%code%` ! Attention il n'y a que %count% utilisations possibles !",
      "color": 5814783
    }
  ]
}
```

### 5.3 Exemple : **Message lors de l’utilisation**

```json
{
  "content": null,
  "embeds": [
    {
      "title": "Cadeau Discord utilisé",
      "description": "Un cadeau Discord a été utilisé ! Le code `%code%` a été utilisé par un utilisateur pour un montant de **%amount%€** crédits ! (%count% utilisations restantes)",
      "color": 5814783
    }
  ]
}
```

### 5.4 Exemple : **Message à la fin**

```json
{
  "content": null,
  "embeds": [
    {
      "title": "Fin des cadeaux Discord",
      "description": "Les cadeaux Discord sont terminés ! Merci à tous d'avoir participé ! Un nouveau événement sera bientôt lancé !",
      "color": 5814783
    }
  ]
}
```

> Vous pouvez décocher « Déclencher au début / à la fin / lors de l’utilisation » selon vos besoins.

---

## 6. Tableau de bord & graphique

* **Graphique des utilisations**
  Affiche le nombre d’utilisations (points verts) pour chacun des 30 derniers lancements. Utile pour suivre l’engagement et ajuster la valeur du cadeau ou la fréquence.
  ![img](/img/next_gen/extensions/addons/discordgift/discordgift_graph_utilisations.png)

* **Section Paramètres**
  Tous les champs sont réactifs ; cliquer sur **Enregistrer** applique immédiatement les nouvelles valeurs et met à jour la planification.
  ![img](/img/next_gen/extensions/addons/discordgift/discordgift_admin_config.png)

---

## 7. Bonnes pratiques

1. **Limiter les montants** : fixez un max raisonnable pour éviter des crédits trop élevés accidentellement.
2. **Webhook dédié** : créez un Webhook spécifique à L'addon afin de ne pas mélanger avec d’autres intégrations.
3. **Tester sur un salon privé** : avant le premier lancement public, vérifiez vos messages dans un canal réservé au staff.
4. **Utilisations multiples** : si vous fixez `Nombre maximum d’utilisations > 1`, préviennez clairement la communauté pour éviter les malentendus.
5. **Logs** : couplé au module de facturation, chaque utilisation est historisée pour un audit complet.
     |
