# Business Lookup France

Business Lookup France permet au client de rechercher une entreprise française par raison sociale, SIREN ou SIRET. Lorsqu'il sélectionne le bon établissement, ClientXCMS remplit automatiquement les informations légales et fiscales disponibles de l'entreprise pendant la commande.

## Configuration

Ouvrez **Paramètres > Facturation > Business Lookup France**, puis configurez :

- **Activer la recherche** : affiche la recherche d'entreprise française ;
- **Délai HTTP** : durée maximale d'une requête vers le registre officiel ;
- **Cache des recherches** : durée de conservation des résultats de recherche ;
- **Cache des entreprises actives** : durée de conservation des entreprises actives ;
- **Cache des entreprises inactives** : durée de conservation des entreprises inactives ;
- **Cache des recherches sans résultat** : durée de conservation d'une recherche infructueuse.

Enregistrez, puis cliquez sur **Tester la connexion**.

![Paramètres Business Lookup France](/img/next_gen/extensions/addons/busniness-lookup-fr/config.png)

## Parcours client

Pendant la commande, le client recherche son entreprise par raison sociale, SIREN ou SIRET et sélectionne le bon établissement. ClientXCMS renseigne automatiquement les champs disponibles, notamment la raison sociale, le SIREN, le SIRET et le numéro RNA d'une association. Le client peut ensuite compléter ou vérifier les informations fiscales avant de commander.

![Remplissage automatique des informations d'une entreprise française](/img/next_gen/extensions/addons/busniness-lookup-fr/show_render.png)

Cet addon complète [EU VAT Check](./vat-check-eu.md) : Business Lookup France récupère les informations d'immatriculation françaises, tandis que VIES vérifie le numéro de TVA européen.
