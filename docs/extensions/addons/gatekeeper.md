# Gatekeeper

The **Gatekeeper** addon blocks IP addresses, IP ranges (CIDR) and countries on your ClientXCMS. A block can cover the whole site or only the login and registration forms. From a customer's page, you can also ban every IP address the customer has used and find other accounts that share those addresses.

:::info Addon required
Enable the **Gatekeeper** addon in **Settings > Extensions** before configuring it. Enabling it creates its tables and indexes the IP addresses already present in the action history.
:::

![Gatekeeper rules](/img/next_gen/extensions/addons/gatekeeper/rules-index.png#gh-light-mode-only)![Gatekeeper rules](/img/next_gen/extensions/addons/gatekeeper/rules-index-dark.png#gh-dark-mode-only)

## Where to find it

Gatekeeper is in **Settings > Security**, with two entries:

| Entry | Content |
| :--- | :--- |
| **Gatekeeper** | Indicators, rules, block log, bulk add, CSV import and export, IP test. |
| **Gatekeeper settings** | Global behaviour, displayed message, excluded paths and geolocation providers. |

Two permissions control access: `admin.show_gatekeeper` (view) and `admin.manage_gatekeeper` (create, edit and delete). Assign them to the relevant staff roles.

## How a request is checked

1. Requests to the administration area and requests from a logged-in staff member are never checked. You cannot lock yourself out of the administration.
2. Paths listed in **Paths never filtered** are skipped, such as payment gateway notifications.
3. Gatekeeper finds the rules that match the visitor's IP address and country for the current page.
4. An **Allow** rule always wins over a **Block** rule.
5. If a block rule matches, the visitor sees an "Access denied" page with a reference. On a login or registration form, the form shows an error message instead. API calls receive a JSON `403` response.

The **Log only** mode records matches in the block log without blocking anybody. Use it to test new rules before enforcing them.

## Indicators

Four indicators are shown at the top of the **Gatekeeper** page:

| Indicator | Meaning |
| :--- | :--- |
| **Active blocks** | Enabled block rules that have not expired. |
| **Allow rules** | Enabled allow rules (whitelist). |
| **Blocked requests (24h)** | Entries recorded in the block log over the last 24 hours. |
| **Expired rules** | Rules whose expiration date has passed. They are deleted every day. |

## Create a rule

1. Open **Settings > Security > Gatekeeper**.
2. Click **Create**.
3. Fill in the form, then click **Create**.

![Create a rule](/img/next_gen/extensions/addons/gatekeeper/rule-create.png#gh-light-mode-only)![Create a rule](/img/next_gen/extensions/addons/gatekeeper/rule-create-dark.png#gh-dark-mode-only)

| Field | Description |
| :--- | :--- |
| **Type** | **Auto-detect**, **IP address**, **CIDR range** or **Country**. Auto-detect recognises the value format. |
| **Value** | An IPv4 or IPv6 address (`203.0.113.7`), a CIDR range (`203.0.113.0/24`, `2001:db8::/48`) or an ISO country code (`RU`). You can also pick a country from the list. `T1` targets Tor exit nodes when your site is behind Cloudflare. |
| **Action** | **Block**, or **Allow (whitelist)** to always let an address through. |
| **Scope** | **Whole site**, **Login + registration**, **Login only** or **Registration only**. |
| **Expiration** | Empty for a permanent rule. Accepts a date or a shortcut: `30m`, `12h`, `7d`. |
| **Reason (internal)** | Note for your team. It can be shown to the visitor if **Show the rule reason** is enabled. |
| **Related customer ID** | Links the rule to a customer account. |
| **Enabled** | Disables the rule without deleting it. |

:::warning Your own IP address
Gatekeeper refuses a block rule that covers your current IP address, shown above the form. To create it anyway, tick **I know this rule covers my own IP**. The administration itself is never blocked.
:::

## Add many values at once

Click **Bulk add** to paste one value per line. Add `# reason` at the end of a line to store a reason for that value. Duplicates are skipped.

```text
203.0.113.7
198.51.100.0/24 # scanner
2001:db8::/48
RU
```

![Bulk add](/img/next_gen/extensions/addons/gatekeeper/bulk-add.png#gh-light-mode-only)![Bulk add](/img/next_gen/extensions/addons/gatekeeper/bulk-add-dark.png#gh-dark-mode-only)

The same panel imports a CSV file. **Export** produces a file in the expected format, with the columns `type`, `value`, `action`, `scope`, `reason`, `enabled` and `expires_at`. Use it to copy your rules from one instance to another.

## Test an IP address

The **Test an IP** section at the bottom of the rules page shows which rule applies to an address on the whole site, at login and at registration. It also shows the country and ASN found by the geolocation providers, the customer accounts that used this IP, and the number of recorded blocks.

![Test an IP](/img/next_gen/extensions/addons/gatekeeper/test-ip.png#gh-light-mode-only)![Test an IP](/img/next_gen/extensions/addons/gatekeeper/test-ip-dark.png#gh-dark-mode-only)

## Block log

Click **Log** to see the refused requests: date, IP address, country, rule, context and page. Gatekeeper records at most one entry per IP address, rule and minute, so a flood does not fill the database. The right column lists the most blocked IP addresses over the last 7 days.

![Block log](/img/next_gen/extensions/addons/gatekeeper/hits.png#gh-light-mode-only)![Block log](/img/next_gen/extensions/addons/gatekeeper/hits-dark.png#gh-dark-mode-only)

Entries older than the retention period set in the settings are deleted every day.

## Ban a customer's IP addresses

The customer page has an **IP addresses** tab. It lists the IP addresses found in the history (logins, failed logins and registration), with their country and ASN when a local database is available.

![IP addresses tab](/img/next_gen/extensions/addons/gatekeeper/customer-tab.png#gh-light-mode-only)![IP addresses tab](/img/next_gen/extensions/addons/gatekeeper/customer-tab-dark.png#gh-dark-mode-only)

The tab also shows:

- **Linked accounts (shared IP)**: other accounts that used one of these addresses, which can reveal multiple accounts. A shared IP can also be a company network, a VPN or a mobile carrier.
- **Rules created from this customer**, with a button to remove them all.

To ban the addresses:

1. On the customer page, click **Ban IPs** in the tab or in the actions menu.
2. Select the addresses. IP addresses seen only on failed logins are not pre-selected, because they may belong to an attacker.
3. Optionally, tick **Ban the whole range** to block the `/24` (IPv4) or `/64` (IPv6) network, and set a scope, a reason and an expiration.
4. Optionally, tick **Also ban the customer account**.
5. Click **Ban selected IPs**.

![Ban IPs panel](/img/next_gen/extensions/addons/gatekeeper/customer-ban.png#gh-light-mode-only)![Ban IPs panel](/img/next_gen/extensions/addons/gatekeeper/customer-ban-dark.png#gh-dark-mode-only)

The ClientXCMS ban panel of a customer also offers **Also ban their IP addresses (Gatekeeper)**. When you reactivate the account, **Also remove their banned IPs (Gatekeeper)** deletes the rules created from it.

In the action history, the detail of a login or registration entry shows a button to ban its IP address. The history can also be filtered by IP address.

## Settings

Open **Settings > Security > Gatekeeper settings**.

![Gatekeeper settings](/img/next_gen/extensions/addons/gatekeeper/settings.png#gh-light-mode-only)![Gatekeeper settings](/img/next_gen/extensions/addons/gatekeeper/settings-dark.png#gh-dark-mode-only)

| Setting | Description |
| :--- | :--- |
| **Enable Gatekeeper** | Turns all checks on or off. |
| **Mode** | **Block**, or **Log only** to record matches without blocking. |
| **Country header** | Header that carries the visitor's country, `CF-IPCountry` by default with Cloudflare. Leave it empty if no proxy sets this header, otherwise visitors can forge it. |
| **Geolocation API calls** | When external services may be called: on every page, only on login and registration, or never. |
| **Also check the country typed in the registration form** | Applies country rules with the **Registration** scope to the country entered by the customer. |
| **Show the rule reason to the blocked visitor** | Appends the rule reason to the message. |
| **Message shown to blocked visitors** | Empty for the default message. |
| **Paths never filtered** | One pattern per line, for example `gateways/*/notification`. Keep payment gateway notifications in this list. |
| **Log retention (days)** | Block log entries older than this are deleted. |

## Geolocation

Country rules need the visitor's country. Gatekeeper first reads the country header, then queries the enabled providers by increasing **Priority** until one returns a country. Results are cached per IP address (24 hours by default, 1 hour when nothing is found). A provider that fails is paused for 5 minutes.

![Geolocation providers](/img/next_gen/extensions/addons/gatekeeper/geolocation.png#gh-light-mode-only)![Geolocation providers](/img/next_gen/extensions/addons/gatekeeper/geolocation-dark.png#gh-dark-mode-only)

| Provider | Type | Credentials | Data |
| :--- | :--- | :--- | :--- |
| **MaxMind GeoLite2 / GeoIP2 (.mmdb)** | Local database | MaxMind account ID and license key, for downloads | Country, ASN with the GeoLite2-ASN database |
| **MaxMind (web service)** | API | MaxMind account ID and license key | Country. Insights also returns the ASN and proxy and hosting flags. |
| **ipinfo.io** | API | Token | Country and ASN. VPN and hosting flags depend on your plan. |
| **ipapi.co** | API | Optional API key | Country and ASN |
| **ip-api.com** | API | Optional Pro key | Country, ASN, proxy and hosting flags |

API keys and license keys are encrypted before being stored and are never displayed again. Leave a key field empty to keep the saved value, or tick **Remove the saved key** to delete it.

:::warning ip-api.com without a key
Without a Pro key, ip-api.com is called over HTTP only, is limited to 45 requests per minute and is reserved for non-commercial use.
:::

### Download the MaxMind databases

The local database is the recommended provider: lookups do not leave your server and do not use any API quota.

1. Create a free account on [maxmind.com](https://www.maxmind.com/en/geolite2/signup), then generate a license key in **Manage License Keys**.
2. In the **MaxMind GeoLite2 / GeoIP2 (.mmdb)** block, enter your **MaxMind account ID** and **License key**.
3. Choose the **Edition**, for example `GeoLite2-Country`, and tick **Also download GeoLite2-ASN** if you want the ASN.
4. Tick **Automatic update (twice a week)**, then save.
5. In the **MaxMind databases** section, click **Update now**.

The files are stored in `storage/app/gatekeeper/`. Gatekeeper checks the SHA-256 checksum of each download. You can also use your own `.mmdb` files by filling in the path fields.

### Test the providers

**Test the providers** queries every configured provider for one IP address, without using the cache. The table shows the country, ASN, flags, response time or error of each provider.

![Provider test](/img/next_gen/extensions/addons/gatekeeper/geolocation-test.png#gh-light-mode-only)![Provider test](/img/next_gen/extensions/addons/gatekeeper/geolocation-test-dark.png#gh-dark-mode-only)

## Scheduled tasks

Gatekeeper relies on the ClientXCMS scheduler, so the cron task must be running.

| Command | Frequency | Role |
| :--- | :--- | :--- |
| `gatekeeper:sync-history` | Every 10 minutes | Indexes IP addresses from the action history to find linked accounts. `--reset` rebuilds the index. |
| `gatekeeper:purge` | Every day | Deletes expired rules and old block log entries. |
| `gatekeeper:geoip-update --scheduled` | Wednesday and Saturday | Updates the MaxMind databases when automatic update is enabled. |
