---
translated: true
---

# Pennylane
Pennylane automates the recording of revenue in your accounting book. Each sale, payment, or settled invoice in CLIENTXCMS is automatically synchronized to the correct revenue account, without manual entry. Configure your products, let Pennylane generate the entries, and keep a complete history: date, amount, customer, invoice, and direct link.


:::info
To use the following features, the Pennylane addon must be enabled on your CLIENTXCMS. [click here to enable it](../)
:::

:::info Accounting
The Pennylane addon only imports invoices once they are paid. Unpaid, cancelled, or other invoices will not be imported into Pennylane. It does not import manual payments made with customer credits since they are already recorded as revenue when the credit is added.
:::
## Configuration
You can configure your Pennylane environment in your `.env` file by adding the following lines:

```env
PENNYLANE_API_KEY=your_api_key
```
Replace `your_api_key` with your Pennylane API key.
You can find your API key in your Pennylane account under `Settings` > `Integration` > `API Key` > `Add a key`.

## Migrating Existing Data
If you already have paid invoices in CLIENTXCMS before installing Pennylane, you can migrate this data to Pennylane using the following artisan command:
```bash
php artisan pennylane:process-invoices --start-date=YYYY-MM-DD --end-date=YYYY-MM-DD
```
Replace `YYYY-MM-DD` with the start and end dates of the period you want to migrate. This command will process all paid invoices between these two dates and record them in Pennylane.
This will only import paid invoices. Unpaid, cancelled, or other invoices will not be migrated.
