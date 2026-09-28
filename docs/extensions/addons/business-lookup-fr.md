---
translated: true
---

# Business Lookup France

Business Lookup France lets customers search for a French company by its name, SIREN, or SIRET. Selecting a result automatically fills the company's available legal and tax information during checkout.

## Configuration

Go to **Settings > Billing > Business Lookup France** and configure:

- **Enable lookup**: displays the French-company search;
- **HTTP timeout**: maximum duration of an official-registry request;
- **Search cache**: cache duration for search results;
- **Active-company cache**: cache duration for active companies;
- **Inactive-company cache**: cache duration for inactive companies;
- **No-result cache**: cache duration for unsuccessful searches.

Save, then click **Test connection**.

![Business Lookup France settings](/img/next_gen/extensions/addons/busniness-lookup-fr/config.png)

## Customer experience

At checkout, the customer searches by company name, SIREN, or SIRET and selects the correct establishment. ClientXCMS fills fields such as the legal name, SIREN, SIRET, and association RNA number when available. The customer can then complete or verify the tax information before ordering.

![French company lookup during checkout](/img/next_gen/extensions/addons/busniness-lookup-fr/show_render.png)

This addon complements [EU VAT Check](./vat-check-eu.md): the company lookup retrieves French registration data, while VIES validates an EU VAT number.
