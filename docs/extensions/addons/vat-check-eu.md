---
translated: true
---

# EU VAT Check

The EU VAT Check addon validates European VAT numbers through the European Commission's VIES service. It helps verify customer tax information before invoicing.

:::info
VIES does not require an API key. Availability and returned company details depend on the tax authority of the relevant member state.
:::

## Configuration

Go to **Settings > Billing > EU VAT Check** and configure:

- **Enable VIES validation**: activates VAT-number checks;
- **HTTP timeout**: maximum duration of a VIES request;
- **Positive check validity**: number of days a successful result remains cached;
- **Requester VAT number**: optional VAT number sent with the validation request.

Save the settings, then click **Test VIES**.

![EU VAT Check settings](/img/next_gen/extensions/addons/vat-check-eu/config.png)

A short timeout prevents checkout from waiting too long during a VIES outage. Caching successful checks also limits repeated requests, but you should choose a validity period compatible with your compliance process.

:::warning
A successful VIES response confirms the status returned by the service at that time. Keep any evidence required by your accounting or tax procedures.
:::
