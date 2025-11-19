# Paramètres du centre d'aide
Les paramètres du centre d'aide vous permettent de personnaliser le centre d'aide à votre image. Vous pouvez modifier les paramètres du centre d'aide depuis les `Paramètres` > `Centre d'aide` > `Paramètres du centre d'aide`. 

**Fermeture automatique des tickets après inactivité** : Nombre de jours avant la fermeture automatique des tickets après inactivité. Par défaut, il est de 7 jours. Vous pouvez désactiver cette fonctionnalité en mettant la valeur à 0.

**URL du webhook** : URL de votre endpoint pour recevoir les notifications de tickets (POST JSON). Utilisez une URL en HTTPS si possible.

- Si l'URL fournie est un webhook Discord (ex. https://discord.com/api/webhooks/xxxxx), les notifications apparaîtront automatiquement sous forme d'embed (capture ci‑dessous).
  ![image](https://cdn.clientxcms.com/ressources/docs/ticket.png)

- Si vous utilisez un webhook personnalisé, CLIENTXCMS enverra une requête HTTP POST avec un payload JSON structuré. Exemple :

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
	<TabItem value="ticket_create" label="Création d'un ticket">


```json
{
   "payload": {
        "action": "helpdesk_create",
        "_url": "https://example.com/admin/helpdesk/tickets/1",
        "ticketid": "1",
        "customer_url": "https://example.com/admin/customers/1",
        "department": "Général",
        "priority": "Basse",
        "subject": "Test ticket",
        "message": "Bonjour, voici le contenu du ticket.",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com",
        "appname": "CLIENTXCMS",
        "appurl": "https://example.com/"
  }
}
```
	</TabItem>

	<TabItem value="ticket_close" label="Fermeture d'un ticket">

```json
{
   "payload": {
        "action": "helpdesk_closed",
        "_url": "https://example.com/admin/helpdesk/tickets/1",
        "ticketid": "1",
        "customer_url": "https://example.com/admin/customers/1",
        "department": "Général",
        "priority": "Basse",
        "subject": "Test ticket",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com",
        "appname": "CLIENTXCMS",
        "appurl": "https://example.com/"
	}
}
```

	</TabItem>

    <TabItem value="ticket_answer_staff" label="Réponse du staff">
```json
{
    "payload": {
        "action": "helpdesk_answered_staff",
        "_url": "https://example.com/admin/helpdesk/tickets/1",
        "ticketid": "1",
        "customer_url": "https://example.com/admin/customers/1",
        "department": "Général",
        "priority": "Basse",
        "subject": "Test ticket",
        "message": "Bonjour, voici le contenu de la réponse du staff.",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com",
        "appname": "CLIENTXCMS",
        "appurl": "https://example.com/"
    }
}
```
    </TabItem>
    <TabItem value="ticket_answer_customer" label="Réponse du client">
```json
{
    "payload": {
        "action": "helpdesk_answered_customer",
        "_url": "https://example.com/admin/helpdesk/tickets/1",
        "ticketid": "1",
        "customer_url": "https://example.com/admin/customers/1",
        "department": "Général",
        "priority": "Basse",
        "subject": "Test ticket",
        "message": "Bonjour, voici le contenu de la réponse du client.",
        "customername": "Martin Dev",
        "customeremail": "test@clientxcms.com"
        "appname": "CLIENTXCMS",
        "appurl": "https://example.com/"
    }
}
```
    </TabItem>

</Tabs>

Notes utiles :

- `action` : indique l'événement (ex. `create`, `answered_staff`, `answered_customer`).
- `_url` : lien interne vers l'édition du ticket 
- Les valeurs sont au format chaîne. Adaptez votre traitement côté serveur selon vos besoins.

**Autorisation de re-ouverture des tickets** : Vous pouvez autoriser la ré-ouverture des tickets par les clients. Par défaut, cette fonctionnalité est définit à 7 jours. Vous pouvez désactiver cette fonctionnalité en mettant la valeur à 0 ou -1 pour une ré-ouverture illimitée.

**Autoriser les pièces jointes** : Vous pouvez autoriser les pièces jointes dans les tickets. Par défaut, cette fonctionnalité est désactivée.

**Taille maximale des pièces jointes** : Taille maximale des pièces jointes en Mo. Par défaut, elle est de 5 Mo.

**Types de fichiers autorisés** : Types de fichiers autorisés pour les pièces jointes. Par défaut, les types de fichiers autorisés sont `jpg,jpeg,png,doc,docx, xls, xlsx`. Vous pouvez ajouter des types de fichiers en les séparant par une virgule.
:::info
Vous devez faire attention à la taille des pièces jointes pour ne pas surcharger votre serveur. Et faites attention aux types de fichiers autorisés pour éviter les attaques de sécurité. Nous vous recommandons de ne pas rajouter de types de fichiers sensibles.