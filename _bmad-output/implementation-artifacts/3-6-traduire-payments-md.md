# Story 3.6: Traduire payments.md

Status: ready-for-dev

## Story

As a documentation reader,
I want the English Payments Configuration page to be properly translated,
so that international users can understand how to configure payment gateways and invoice settings in ClientXCMS.

## Acceptance Criteria

1. **AC1**: Complete EN translation (~2.8 KB)
   - All French text translated to natural English
   - Title "Configuration des paiements" translated to "Payment Configuration"
   - Payment gateway names unchanged (Stripe, PayPal, PayPal Express Checkout, Stancer, Balance)
   - No literal translation - natural English phrasing

2. **AC2**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position: 6` preserved

3. **AC3**: MDX components functional
   - `<Tabs>` and `<TabItem>` components work correctly
   - 5 tabs render properly (PayPalExpressCheckout, Stripe, Balance, PayPal, Stancer)
   - Tab labels unchanged (payment gateway names)
   - Import statements preserved exactly

4. **AC4**: Links functional
   - Internal link to `../settings/store/payment_gateways/` works
   - Internal link to `/settings/store/payment_gateways/paypal_express_checkout` works
   - Internal link to `/settings/store/payment_gateways/stripe` works
   - Internal link to `/settings/store/payment_gateways/paypal` works
   - Internal link to `/settings/store/payment_gateways/stancer` works

5. **AC5**: Admonition translated
   - 1 `:::info` block translated
   - Content about tax-exclusive pricing translated correctly

6. **AC6**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/getting_started/payments` (EN)
   - Page renders correctly at `/fr/getting_started/payments` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [ ] Task 1: Update EN file with translated frontmatter (AC: #2)
  - [ ] 1.1 Edit file at `docs/getting_started/payments.md`
  - [ ] 1.2 Add `translated: true` to frontmatter
  - [ ] 1.3 Preserve `sidebar_position: 6`

- [ ] Task 2: Translate header and intro (AC: #1, #4)
  - [ ] 2.1 Translate title "Configuration des paiements" to "Payment Configuration"
  - [ ] 2.2 Translate intro paragraph about configuring payment methods
  - [ ] 2.3 Keep internal link to `../settings/store/payment_gateways/`
  - [ ] 2.4 Keep navigation path format: `Settings` then `Store Settings`

- [ ] Task 3: Preserve MDX imports and Tabs structure (AC: #3)
  - [ ] 3.1 Keep import statements exactly as-is
  - [ ] 3.2 Keep `<Tabs>` and `<TabItem>` structure unchanged
  - [ ] 3.3 Keep tab value and label attributes unchanged (payment gateway names)

- [ ] Task 4: Translate PayPal Express Checkout tab (AC: #1, #4)
  - [ ] 4.1 Translate tab content about PayPal Express Checkout configuration
  - [ ] 4.2 Keep link to `/settings/store/payment_gateways/paypal_express_checkout`

- [ ] Task 5: Translate Stripe tab (AC: #1, #4)
  - [ ] 5.1 Translate tab content about Stripe configuration
  - [ ] 5.2 Keep link to `/settings/store/payment_gateways/stripe`

- [ ] Task 6: Translate Balance tab (AC: #1)
  - [ ] 6.1 Translate tab content about adding balance to customer account

- [ ] Task 7: Translate PayPal tab (AC: #1, #4)
  - [ ] 7.1 Translate tab content about PayPal configuration
  - [ ] 7.2 Keep link to `/settings/store/payment_gateways/paypal`

- [ ] Task 8: Translate Stancer tab (AC: #1, #4)
  - [ ] 8.1 Translate tab content about Stancer configuration
  - [ ] 8.2 Keep link to `/settings/store/payment_gateways/stancer`

- [ ] Task 9: Translate Invoice Customization section (AC: #1)
  - [ ] 9.1 Translate section title "Personalisation de la facture" to "Invoice Customization"
  - [ ] 9.2 Translate billing address and terms & conditions instructions
  - [ ] 9.3 Keep navigation path format: `Settings` > `Billing` > `Billing`
  - [ ] 9.4 Translate invoice prefix explanation with example `INV-2024-01-001`

- [ ] Task 10: Translate VAT/Tax section (AC: #1, #5)
  - [ ] 10.1 Translate section title "Desactiver la TVA" to "Disable VAT"
  - [ ] 10.2 Translate VAT settings instructions
  - [ ] 10.3 Translate :::info admonition about tax-exclusive pricing

- [ ] Task 11: Translate Terms and Conditions section (AC: #1)
  - [ ] 11.1 Translate section title "Conditions generales de vente" to "Terms and Conditions"
  - [ ] 11.2 Translate instructions about setting terms and conditions

- [ ] Task 12: Build and test (AC: #6)
  - [ ] 12.1 Run `npm run build`
  - [ ] 12.2 Run `npm run serve` and test EN URL
  - [ ] 12.3 Verify all 5 tabs render correctly
  - [ ] 12.4 Verify no "Not translated" banner
  - [ ] 12.5 Verify FR page still works
  - [ ] 12.6 Test all 5 internal links

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN file to translate | `docs/getting_started/payments.md` |
| FR reference file | `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/payments.md` |

### Current State Analysis

The file at `docs/getting_started/payments.md` is currently in French and needs translation.

**Current FR content:**
```markdown
---
sidebar_position: 6
---
# Configuration des paiements
Vous pouvez configurer plusieurs methodes de paiement pour votre espace client. La liste est disponible [ici](../settings/store/payment_gateways/).

Vous pouvez configurer vos methodes de paiement en allant dans le menu `Parametres` puis dans la section `Parametres de boutique` et enfin selectionnez la methode de paiement que vous souhaitez configurer.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="PayPalExpressCheckout" label="PayPal Express Checkout">
Le processus de configuration de PayPal Express Checkout est disponible [ici](/settings/store/payment_gateways/paypal_express_checkout).
</TabItem>
<TabItem value="Stripe" label="Stripe">
Le processus de configuration de Stripe est disponible [ici](/settings/store/payment_gateways/stripe).
</TabItem>
<TabItem value="Balance" label="Balance">
Vous pouvez ajouter un solde a votre compte client depuis la fiche client.
</TabItem>
<TabItem value="PayPal" label="PayPal">
Le processus de configuration de PayPal est disponible [ici](/settings/store/payment_gateways/paypal).
</TabItem>
<TabItem value="Stancer" label="Stancer">
Le processus de configuration de Stancer est disponible [ici](/settings/store/payment_gateways/stancer).
</TabItem>
</Tabs>

## Personalisation de la facture
Vous pouvez modifier l'adresse de facturation ou les termes et conditions de la facture en allant dans les parametres de facturation dans `Parametres` > `Facturation` > `Facturation`.

Vous pouvez egalement modifier le prefixe de la facture en mettant un prefixe specifique a votre entreprise. Nous vous recommandons d'utiliser un prefixe court de 3 a 5 caracteres. Le prefixe est utilise pour generer l'identifiant unique de la facture. Par exemple : `INV-2024-01-001` pour la premiere facture de l'annee 2024. Cela permet de garder une trace des factures plus facilement.

## Desactiver la TVA

Vous pouvez desactiver la TVA pour votre entreprise en allant dans les parametres de facturation dans `Parametres` > `Facturation` > `Facturation`. Vous pouvez egalement modifier le taux de TVA par defaut selon votre pays ou l'affichage des prix avec ou sans TVA.

:::info
Prenez en compte que tout les prix configures dans votre boutique doivent etre hors taxe. La TVA sera ajoutee au prix lors du paiement. Si vous souhaitez afficher les prix TTC, vous pouvez definir le prix d'affichage en TTC.
:::

## Conditions generales de vente

Vous pouvez definir des conditions generales de vente pour votre boutique en allant dans les parametres de facturation dans `Parametres` > `Facturation` > `Facturation`. Les conditions generales de vente seront affichees sur la page de paiement pour que l'utilisateur les accepte avant de valider sa commande.
```

**File characteristics:**
- **File size**: ~2.8 KB (45 lines)
- **Frontmatter**: Has `sidebar_position: 6`, MISSING `translated: true`
- **MDX Components**: Uses `<Tabs>` and `<TabItem>` from `@theme/Tabs`
- **Images**: None
- **Admonitions**: 1 info block
- **Internal links**: 5 links to payment gateway configurations
- **Tabs**: 5 payment gateways (PayPalExpressCheckout, Stripe, Balance, PayPal, Stancer)
- **Headings**: 1 h1 + 3 h2

### Translation Reference

| French | English |
|--------|---------|
| Configuration des paiements | Payment Configuration |
| Vous pouvez configurer plusieurs methodes de paiement | You can configure multiple payment methods |
| pour votre espace client | for your client area |
| La liste est disponible | The list is available |
| Vous pouvez configurer vos methodes de paiement | You can configure your payment methods |
| en allant dans le menu | by going to the menu |
| Parametres | Settings |
| Parametres de boutique | Store Settings |
| selectionnez la methode de paiement | select the payment method |
| que vous souhaitez configurer | you want to configure |
| Le processus de configuration de | The configuration process for |
| est disponible | is available |
| Vous pouvez ajouter un solde | You can add balance |
| a votre compte client | to your customer account |
| depuis la fiche client | from the customer profile |
| Personalisation de la facture | Invoice Customization |
| Vous pouvez modifier | You can modify |
| l'adresse de facturation | the billing address |
| les termes et conditions de la facture | the invoice terms and conditions |
| les parametres de facturation | the billing settings |
| Facturation | Billing |
| le prefixe de la facture | the invoice prefix |
| un prefixe specifique a votre entreprise | a prefix specific to your business |
| Nous vous recommandons | We recommend |
| d'utiliser un prefixe court | using a short prefix |
| de 3 a 5 caracteres | of 3 to 5 characters |
| generer l'identifiant unique | generate the unique identifier |
| la premiere facture de l'annee | the first invoice of the year |
| garder une trace des factures | keep track of invoices |
| plus facilement | more easily |
| Desactiver la TVA | Disable VAT |
| desactiver la TVA pour votre entreprise | disable VAT for your business |
| modifier le taux de TVA par defaut | change the default VAT rate |
| selon votre pays | according to your country |
| l'affichage des prix | the price display |
| avec ou sans TVA | with or without VAT |
| Prenez en compte que | Please note that |
| tout les prix configures | all prices configured |
| dans votre boutique | in your store |
| doivent etre hors taxe | must be tax-exclusive |
| sera ajoutee au prix | will be added to the price |
| lors du paiement | at checkout |
| afficher les prix TTC | display prices including VAT |
| definir le prix d'affichage en TTC | set the display price as tax-inclusive |
| Conditions generales de vente | Terms and Conditions |
| definir des conditions generales de vente | set terms and conditions |
| seront affichees | will be displayed |
| sur la page de paiement | on the payment page |
| pour que l'utilisateur les accepte | for the user to accept |
| avant de valider sa commande | before confirming their order |

### Expected EN Content

```markdown
---
sidebar_position: 6
translated: true
---
# Payment Configuration

You can configure multiple payment methods for your client area. The list is available [here](../settings/store/payment_gateways/).

You can configure your payment methods by going to the `Settings` menu, then the `Store Settings` section, and selecting the payment method you want to configure.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="PayPalExpressCheckout" label="PayPal Express Checkout">
The configuration process for PayPal Express Checkout is available [here](/settings/store/payment_gateways/paypal_express_checkout).
</TabItem>
<TabItem value="Stripe" label="Stripe">
The configuration process for Stripe is available [here](/settings/store/payment_gateways/stripe).
</TabItem>
<TabItem value="Balance" label="Balance">
You can add balance to your customer account from the customer profile.
</TabItem>
<TabItem value="PayPal" label="PayPal">
The configuration process for PayPal is available [here](/settings/store/payment_gateways/paypal).
</TabItem>
<TabItem value="Stancer" label="Stancer">
The configuration process for Stancer is available [here](/settings/store/payment_gateways/stancer).
</TabItem>
</Tabs>

## Invoice Customization

You can modify the billing address or invoice terms and conditions by going to the billing settings in `Settings` > `Billing` > `Billing`.

You can also change the invoice prefix by setting a prefix specific to your business. We recommend using a short prefix of 3 to 5 characters. The prefix is used to generate the unique invoice identifier. For example: `INV-2024-01-001` for the first invoice of 2024. This makes it easier to keep track of invoices.

## Disable VAT

You can disable VAT for your business by going to the billing settings in `Settings` > `Billing` > `Billing`. You can also change the default VAT rate according to your country or toggle price display with or without VAT.

:::info
Please note that all prices configured in your store must be tax-exclusive. VAT will be added to the price at checkout. If you want to display prices including VAT, you can set the display price as tax-inclusive.
:::

## Terms and Conditions

You can set terms and conditions for your store by going to the billing settings in `Settings` > `Billing` > `Billing`. The terms and conditions will be displayed on the payment page for users to accept before confirming their order.
```

### Terminology Consistency (from Epic 2 & Epic 3 Stories)

Maintain consistent terminology:
- "Settings" (Parametres)
- "Store Settings" (Parametres de boutique)
- "Billing" (Facturation)
- "client area" (espace client)
- "customer account" (compte client)
- "customer profile" (fiche client)
- "payment methods" (methodes de paiement)
- "billing address" (adresse de facturation)
- "invoice" (facture)
- "VAT" (TVA)
- "tax-exclusive" (hors taxe)
- "tax-inclusive" (TTC)
- Product names unchanged: PayPal, Stripe, PayPal Express Checkout, Stancer, Balance

### Previous Story Learnings (Stories 2-x, 3-1 to 3-5)

From completed stories:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Natural English**: Avoid literal translation - use idiomatic phrasing
3. **Build verification**: Always run `npm run build` before marking complete
4. **No emoji**: EN pages should not have emoji per project standards
5. **Preserve structure**: Keep same heading levels and organization
6. **Admonitions**: `:::info` syntax works in Docusaurus 3, translate content inside
7. **Internal links**: Keep paths unchanged (case-sensitive!)
8. **MDX imports**: Import statements must be preserved exactly as-is
9. **Tab components**: Docusaurus Tabs/TabItem work in translated pages
10. **Navigation paths**: Use backticks for menu paths (`Settings` then `Store`)

### Git Intelligence (Recent Commits)

Recent commits show pattern:
- `6fbf553` - Getting Started index translated
- `806a749` - Story 3-5 created
- `95f3c9a` - Upgrade page translated
- `89895a6` - Story 3-4 created

Commit message for this story translation should be:
```
docs(i18n): translate Payments page to English
```

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/getting_started/payments
# FR: http://localhost:3001/fr/getting_started/payments
```

### Project Structure Notes

- **Docusaurus version**: 3.9
- **Default locale**: `en`
- **Route base path**: `/` (docs served at root)
- **EN files location**: `docs/` (default locale)
- **FR files location**: `i18n/fr/docusaurus-plugin-content-docs/current/`
- **MDX support**: Enabled, supports React components

### Architecture Compliance

- No code changes required (content-only story)
- Frontmatter must follow Docusaurus 3 format
- MDX format with React component imports
- Tabs/TabItem components from `@theme/Tabs`
- Admonitions use Docusaurus syntax (:::type)

### Testing Requirements

- Visual verification of page rendering
- All 5 tabs clickable and display correct content
- Link click testing (5 internal links to payment gateway pages)
- Build success verification
- Admonition (1 info block) rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **"Personalisation" typo in source**: The FR heading has "Personalisation" (missing 'n') - use correct English "Customization".

2. **Repeated navigation path**: The same path `Settings > Billing > Billing` appears 3 times in the document - keep consistent translation.

3. **Tax terminology**:
   - "TVA" = "VAT" (Value Added Tax) - standard international term
   - "hors taxe" = "tax-exclusive" or "excluding tax"
   - "TTC" (Toutes Taxes Comprises) = "tax-inclusive" or "including VAT"

4. **Balance tab**: "Balance" is kept as-is (not translated) since it's a feature name in the UI.

5. **Payment gateway names**: Keep unchanged (PayPal, Stripe, PayPal Express Checkout, Stancer).

6. **Import placement**: The import statements appear after the intro text. This is valid MDX and should be preserved exactly.

7. **Links case-sensitivity**: Internal links use lowercase paths - verify these exist:
   - `../settings/store/payment_gateways/`
   - `/settings/store/payment_gateways/paypal_express_checkout`
   - `/settings/store/payment_gateways/stripe`
   - `/settings/store/payment_gateways/paypal`
   - `/settings/store/payment_gateways/stancer`

8. **Context reference**: This page follows `products.md` (Story 3-5) and precedes `accounts.md` (Story 3-7).

### File Structure Context (Epic 3)

This is story 3.6 (sixth of 9). The complete Getting Started section:
1. getting_started.md (index) - Story 3.1 (review)
2. first_login.md - Story 3.2 (ready-for-dev)
3. personalization.md - Story 3.3 (ready-for-dev)
4. server.md - Story 3.4 (ready-for-dev)
5. products.md - Story 3.5 (ready-for-dev)
6. payments.md - THIS STORY
7. accounts.md - Story 3.7 (backlog)
8. service.md - Story 3.8 (backlog)
9. finish.md - Story 3.9 (backlog)

### References

- [Source: _bmad-output/planning-artifacts/epic-3-mvd-getting-started.md#Story 3.6]
- [Source: _bmad-output/implementation-artifacts/3-5-traduire-products-md.md] - Previous story reference
- [Source: docs/getting_started/payments.md] - EN file to translate
- [Docusaurus i18n](https://docusaurus.io/docs/i18n/introduction)
- [Docusaurus Tabs](https://docusaurus.io/docs/markdown-features/tabs)
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
