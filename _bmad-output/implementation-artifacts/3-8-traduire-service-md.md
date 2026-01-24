# Story 3.8: Traduire service.md

Status: ready-for-dev

## Story

As a documentation reader,
I want the English Service Creation page to be properly translated,
so that international users can understand how to create their first service in ClientXCMS.

## Acceptance Criteria

1. **AC1**: Complete EN translation (~2 KB)
   - All French text translated to natural English
   - Title "Creer son premier service" translated to "Creating Your First Service"
   - Field names list translated accurately
   - No literal translation - natural English phrasing

2. **AC2**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position: 7` preserved

3. **AC3**: Images preserved
   - 3 image paths unchanged:
     - `/img/next_gen/services/create_step1.png`
     - `/img/next_gen/services/create_service.png`
     - `/img/next_gen/services/delivery_log.png`
   - Alt text remains as `img`

4. **AC4**: Links functional
   - Internal link to `../extensions/modules/Pterodactyl.md#erreurs-courantes` works
   - Note: Anchor may need to change to English anchor if Pterodactyl page is translated

5. **AC5**: Admonition translated
   - 1 `:::info` block translated
   - Content about invoice creation via order translated correctly

6. **AC6**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/getting_started/service` (EN)
   - Page renders correctly at `/fr/getting_started/service` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [ ] Task 1: Update EN file with translated frontmatter (AC: #2)
  - [ ] 1.1 Edit file at `docs/getting_started/service.md`
  - [ ] 1.2 Add `translated: true` to frontmatter
  - [ ] 1.3 Preserve `sidebar_position: 7`

- [ ] Task 2: Translate header and intro (AC: #1, #3)
  - [ ] 2.1 Translate title "Creer son premier service" to "Creating Your First Service"
  - [ ] 2.2 Translate intro paragraph about creating a service from client area
  - [ ] 2.3 Keep navigation path format with backticks: `Admin Panel` > `Services` > `Create`
  - [ ] 2.4 Translate step 1 instructions (select client, product, service type)
  - [ ] 2.5 Preserve image path `/img/next_gen/services/create_step1.png`

- [ ] Task 3: Translate form fields list (AC: #1)
  - [ ] 3.1 Translate step 2 introduction paragraph
  - [ ] 3.2 Translate all 9 field definitions:
    - "Nom du service" -> "Service Name"
    - "Expiration" -> "Expiration"
    - "Description" -> "Description"
    - "Prix" -> "Price"
    - "Prix initial" -> "Initial Price"
    - "Serveur" -> "Server"
    - "Recurrence" -> "Billing Cycle"
    - "Notes" -> "Notes"
    - "Renouvellement maximum" -> "Maximum Renewals"
  - [ ] 3.3 Translate field descriptions accurately
  - [ ] 3.4 Preserve image path `/img/next_gen/services/create_service.png`

- [ ] Task 4: Translate info admonition (AC: #5)
  - [ ] 4.1 Translate :::info block about invoice creation
  - [ ] 4.2 Explain that service creation doesn't create invoice - requires order

- [ ] Task 5: Translate Delivery Problem section (AC: #1, #3, #4)
  - [ ] 5.1 Translate heading "Probleme de livraison" to "Delivery Issues"
  - [ ] 5.2 Translate troubleshooting instructions
  - [ ] 5.3 Keep navigation path: `Admin Panel` > `Settings` > `History`
  - [ ] 5.4 Keep log file name 'services-delivery.log' unchanged
  - [ ] 5.5 Preserve image path `/img/next_gen/services/delivery_log.png`
  - [ ] 5.6 Translate Pterodactyl example
  - [ ] 5.7 Keep link to Pterodactyl module page (verify anchor)

- [ ] Task 6: Translate Service Overview section (AC: #1, #3)
  - [ ] 6.1 Translate heading "Apercu d'un service" to "Service Overview"
  - [ ] 6.2 Translate brief intro text
  - [ ] 6.3 Preserve image path `/img/next_gen/services/show_service.png`

- [ ] Task 7: Build and test (AC: #6)
  - [ ] 7.1 Run `npm run build`
  - [ ] 7.2 Run `npm run serve` and test EN URL
  - [ ] 7.3 Verify all 3 images render correctly
  - [ ] 7.4 Verify no "Not translated" banner
  - [ ] 7.5 Verify FR page still works
  - [ ] 7.6 Test internal link to Pterodactyl page

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN file to translate | `docs/getting_started/service.md` |
| FR reference file | `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/service.md` |

### Current State Analysis

The file at `docs/getting_started/service.md` is currently in French and needs translation.

**Current FR content:**
```markdown
---
sidebar_position: 7
---
# Creer son premier service
Vous pouvez creer un service en quelques clics depuis votre espace client. Pour cela, rendez-vous sur `Espace Administation` > `Services` > `Creer`.

Dans cette etape, veuillez selectionner le client, le produit que vous avez cree et le type de service. Puis cliquez sur suivant.
![img](/img/next_gen/services/create_step1.png)

Dans cette seconde etape, vous pouvez remplir le formulaire et choisir selon le type de module, les VPS ou serveurs de jeux deja existants que vous avez sur votre serveur. Puis cliquez sur importer

- **Nom du service** : Nom du service
- **Expiration** : Date d'expiration du service
- **Description** : Description du service - visible par le client, non modifiable par le client
- **Prix** : Prix du service
- **Prix initial** : Prix initial du service
- **Serveur** : Serveur ou le service est heberge
- **Recurrence** : Cycle de facturation
- **Notes** : Notes sur le service
- **Renouvellement maximum** : Nombre maximum de renouvellements (vide pour illimite)

![img](/img/next_gen/services/create_service.png)

:::info
La creation ne cree pas de facture, il faudra passer par une commande sur votre compte client pour generer une facture.
:::

## Probleme de livraison

Si vous avez un probleme de livraison de service, rendez-vous sur `Espace Administation` > `Parametres` > `Historique` et recherchez le fichier 'services-delivery.log'. Vous pouvez egalement consulter la page du module d'approvisionnement pour plus d'informations.
![img](/img/next_gen/services/delivery_log.png)

Par exemple, dans ce cas de figure, le service n'a pas pu etre livre, car le pterodactyl n'a plus d'allocation disponible. Plus d'informations sur la configuration du module Pterodactyl [ici](../extensions/modules/Pterodactyl.md#erreurs-courantes).

## Apercu d'un service
Voici un apercu d'un service.
![img](/img/next_gen/services/show_service.png)
```

**File characteristics:**
- **File size**: ~2 KB (37 lines)
- **Frontmatter**: Has `sidebar_position: 7`, MISSING `translated: true`
- **Images**: 3 images (create_step1.png, create_service.png, delivery_log.png)
- **Admonitions**: 1 info block
- **Internal links**: 1 link to Pterodactyl module documentation
- **Headings**: 1 h1 + 2 h2
- **Lists**: 1 bullet list with 9 form field definitions

### Translation Reference

| French | English |
|--------|---------|
| Creer son premier service | Creating Your First Service |
| Vous pouvez creer un service | You can create a service |
| en quelques clics | in just a few clicks |
| depuis votre espace client | from your admin panel |
| rendez-vous sur | go to |
| Espace Administration | Admin Panel |
| Services | Services |
| Creer | Create |
| Dans cette etape | In this step |
| veuillez selectionner | please select |
| le client | the client |
| le produit que vous avez cree | the product you created |
| le type de service | the service type |
| Puis cliquez sur suivant | Then click next |
| Dans cette seconde etape | In this second step |
| vous pouvez remplir le formulaire | you can fill out the form |
| choisir selon le type de module | choose based on the module type |
| les VPS ou serveurs de jeux deja existants | existing VPS or game servers |
| que vous avez sur votre serveur | that you have on your server |
| Puis cliquez sur importer | Then click import |
| Nom du service | Service Name |
| Date d'expiration du service | Service expiration date |
| visible par le client | visible to the customer |
| non modifiable par le client | not editable by the customer |
| Prix du service | Service price |
| Prix initial du service | Initial service price |
| Serveur ou le service est heberge | Server where the service is hosted |
| Cycle de facturation | Billing Cycle |
| Notes sur le service | Notes about the service |
| Nombre maximum de renouvellements | Maximum number of renewals |
| vide pour illimite | empty for unlimited |
| La creation ne cree pas de facture | Creating a service does not create an invoice |
| il faudra passer par une commande | you will need to place an order |
| sur votre compte client | through your customer account |
| pour generer une facture | to generate an invoice |
| Probleme de livraison | Delivery Issues |
| Si vous avez un probleme de livraison | If you have a delivery issue |
| Parametres | Settings |
| Historique | History |
| recherchez le fichier | look for the file |
| Vous pouvez egalement consulter | You can also check |
| la page du module d'approvisionnement | the provisioning module page |
| pour plus d'informations | for more information |
| Par exemple | For example |
| dans ce cas de figure | in this case |
| le service n'a pas pu etre livre | the service could not be delivered |
| car le pterodactyl n'a plus d'allocation disponible | because Pterodactyl has no more available allocations |
| Plus d'informations | More information |
| sur la configuration du module Pterodactyl | about configuring the Pterodactyl module |
| Apercu d'un service | Service Overview |
| Voici un apercu d'un service | Here is an overview of a service |

### Expected EN Content

```markdown
---
sidebar_position: 7
translated: true
---
# Creating Your First Service

You can create a service in just a few clicks from your admin panel. To do so, go to `Admin Panel` > `Services` > `Create`.

In this step, please select the client, the product you created, and the service type. Then click next.
![img](/img/next_gen/services/create_step1.png)

In this second step, you can fill out the form and choose, based on the module type, the existing VPS or game servers that you have on your server. Then click import.

- **Service Name**: Name of the service
- **Expiration**: Service expiration date
- **Description**: Service description - visible to the customer, not editable by the customer
- **Price**: Service price
- **Initial Price**: Initial service price
- **Server**: Server where the service is hosted
- **Billing Cycle**: Billing cycle
- **Notes**: Notes about the service
- **Maximum Renewals**: Maximum number of renewals (empty for unlimited)

![img](/img/next_gen/services/create_service.png)

:::info
Creating a service does not create an invoice. You will need to place an order through your customer account to generate an invoice.
:::

## Delivery Issues

If you have a service delivery issue, go to `Admin Panel` > `Settings` > `History` and look for the file 'services-delivery.log'. You can also check the provisioning module page for more information.
![img](/img/next_gen/services/delivery_log.png)

For example, in this case, the service could not be delivered because Pterodactyl has no more available allocations. More information about configuring the Pterodactyl module is available [here](../extensions/modules/Pterodactyl.md#erreurs-courantes).

## Service Overview

Here is an overview of a service.
![img](/img/next_gen/services/show_service.png)
```

### Terminology Consistency (from Epic 2 & Epic 3 Stories)

Maintain consistent terminology:
- "Admin Panel" (Espace Administration)
- "Settings" (Parametres)
- "Services" (Services) - keep same term
- "client area" (espace client)
- "customer" (client) - for end users
- "client" (client) - when referring to customer record
- "order" (commande)
- "invoice" (facture)
- "service" (service) - keep same term
- "product" (produit)
- "Billing Cycle" (Recurrence/Cycle de facturation)
- Product/module names unchanged: Pterodactyl, VPS

### Previous Story Learnings (Stories 3-1 to 3-7)

From completed stories:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Natural English**: Avoid literal translation - use idiomatic phrasing
3. **Build verification**: Always run `npm run build` before marking complete
4. **No emoji**: EN pages should not have emoji per project standards
5. **Preserve structure**: Keep same heading levels and organization
6. **Admonitions**: `:::info` syntax works in Docusaurus 3, translate content inside
7. **Internal links**: Keep paths unchanged, anchors may need attention if target page translated
8. **Navigation paths**: Use backticks for menu paths (`Settings` > `History`)
9. **Images**: Keep image paths exactly as-is, they are locale-independent
10. **Field lists**: Keep bold format for field names, translate descriptions

### Git Intelligence (Recent Commits)

Recent commits show pattern:
- `4e28dfa` - Payments page translated (Story 3-6)
- `a090e9d` - Products page translated (Story 3-5)
- `0ee9c73` - Server Configuration page translated (Story 3-4)
- `b389dba` - File structure fix
- `a4049d0` - Personalization page translated (Story 3-3)

Commit message for this story translation should be:
```
docs(i18n): translate Service Creation page to English
```

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/getting_started/service
# FR: http://localhost:3001/fr/getting_started/service
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
- Standard markdown format (no MDX components in this file)
- Images use standard markdown syntax
- Admonitions use Docusaurus syntax (:::type)

### Testing Requirements

- Visual verification of page rendering
- All 3 images display correctly
- Link click testing (1 internal link to Pterodactyl module)
- Build success verification
- Admonition (1 info block) rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **Typo in source**: "Espace Administation" has typo (missing 'r') - use correct English "Admin Panel".

2. **Pterodactyl link anchor**: The link `../extensions/modules/Pterodactyl.md#erreurs-courantes` points to a French anchor. If the Pterodactyl page is translated, this anchor may need updating to `#common-errors`. For now, keep as-is since the extensions section is not yet translated (Epic 5).

3. **"Recurrence" translation**: The French term "Recurrence" in the context of billing should be translated as "Billing Cycle" for clarity in English.

4. **"Importer" button**: Translated as "import" - this appears to be UI text that may still be in French in the interface. Keep translation accurate to documented action.

5. **VPS term**: Keep "VPS" as-is (common international abbreviation).

6. **Pterodactyl**: Keep product name unchanged (proper noun).

7. **Context reference**: This page follows `accounts.md` (Story 3-7) and precedes `finish.md` (Story 3-9). This is the penultimate step in the Getting Started guide.

8. **Admin Panel vs Client Area**: Note the distinction - "Espace Administration" = "Admin Panel" (for administrators), "espace client" = "client area" (for customers).

### File Structure Context (Epic 3)

This is story 3.8 (eighth of 9). The complete Getting Started section:
1. getting_started.md (index) - Story 3.1 (done)
2. first_login.md - Story 3.2 (done)
3. personalization.md - Story 3.3 (done)
4. server.md - Story 3.4 (review)
5. products.md - Story 3.5 (review)
6. payments.md - Story 3.6 (review)
7. accounts.md - Story 3.7 (backlog)
8. service.md - THIS STORY
9. finish.md - Story 3.9 (backlog)

### References

- [Source: _bmad-output/planning-artifacts/epic-3-mvd-getting-started.md#Story 3.8]
- [Source: _bmad-output/implementation-artifacts/3-6-traduire-payments-md.md] - Previous completed story reference
- [Source: docs/getting_started/service.md] - EN file to translate
- [Docusaurus i18n](https://docusaurus.io/docs/i18n/introduction)
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
