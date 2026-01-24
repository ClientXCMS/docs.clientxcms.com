# Worker 3 - Settings Security + Store

Tu es un worker de traduction pour la doc ClientXCMS.

## Config
- REPO: git@github.com:alexwrite/docs.clientxcms.com.git
- BRANCH: feat/i18n
- WORKER_ID: worker-3

## CRITICAL - Git Rules

```bash
# FIRST: Clone or navigate to repo
git clone git@github.com:alexwrite/docs.clientxcms.com.git
cd docs.clientxcms.com

# ALWAYS stay on feat/i18n - NEVER create new branches
git checkout feat/i18n
git pull --rebase alexwrite feat/i18n
```

- NEVER run `git checkout -b` or create new branches
- ALWAYS push to `alexwrite feat/i18n`
- If push fails, run `git pull --rebase alexwrite feat/i18n` then push again

## Tes stories assignees (dans l'ordre)

1. settings-security-index -> docs/settings/security/security.md
2. settings-security-settings -> docs/settings/security/security-setting.md
3. settings-security-staffs -> docs/settings/security/staffs.md
4. settings-security-database -> docs/settings/security/database.md
5. settings-security-history -> docs/settings/security/history.md
6. settings-security-questions -> docs/settings/security/security-questions.md
7. settings-store-index -> docs/settings/store/store.md
8. settings-store-products -> docs/settings/store/products.md
9. settings-store-groupes -> docs/settings/store/groupes.md
10. settings-store-coupon -> docs/settings/store/coupon.md
11. settings-store-gateways-index -> docs/settings/store/payment_gateways/payment_gateways.md
12. settings-store-gateways-stripe -> docs/settings/store/payment_gateways/stripe.md
13. settings-store-gateways-paypal -> docs/settings/store/payment_gateways/paypal.md
14. settings-store-gateways-paypal-express -> docs/settings/store/payment_gateways/paypal_express_checkout.md
15. settings-store-gateways-mollie -> docs/settings/store/payment_gateways/mollie.md
16. settings-store-gateways-stancer -> docs/settings/store/payment_gateways/stancer.md
17. settings-store-gateways-balance -> docs/settings/store/payment_gateways/balance.md
18. settings-store-gateways-bank -> docs/settings/store/payment_gateways/bank_transfert.md

## Workflow pour chaque story

git pull --rebase alexwrite feat/i18n

1. Lire le fichier source (FR)
2. Traduire FR -> EN :
   - Garder termes techniques, code blocks, chemins, URLs
   - Garder format admonitions (:::tip, :::warning, :::info)
   - Ajouter frontmatter: `translated: true`
3. Ecrire dans docs/<path>.md
4. Verifier que i18n/fr/.../path.md garde le FR original
5. Commit: `git commit -m "docs(i18n): translate <filename>"`
6. Push: `git pull --rebase alexwrite feat/i18n && git push alexwrite feat/i18n`
7. Passer a la story suivante

## Regles de traduction

- Traduire tout le texte FR en anglais clair et professionnel
- NE PAS traduire : noms de variables, code, commandes, chemins
- Garder le format markdown exact
- Garder les admonitions : `:::tip` -> `:::tip` (pas de changement de format)

## Commence maintenant

Clone/sync le repo et traite tes 18 stories dans l'ordre. Signale quand tu as termine.
