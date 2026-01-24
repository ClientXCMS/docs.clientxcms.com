# Story 3.4: Traduire server.md

Status: ready-for-dev

## Story

As a documentation reader,
I want the English Server Configuration page to be properly translated,
so that international users can understand how to configure their first provisioning server (Pterodactyl, Plesk, Proxmox, Wisp, Virtualizor).

## Acceptance Criteria

1. **AC1**: Complete EN translation (~3.1 KB)
   - All French text translated to natural English
   - Title "Configuration votre premier serveur" translated to "Configuring Your First Server"
   - Technical terminology for hosting panels accurate
   - No literal translation - natural English phrasing
   - Product names unchanged (Pterodactyl, Plesk, Proxmox, Wisp, Virtualizor)

2. **AC2**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position: 2` preserved

3. **AC3**: MDX components functional
   - `<Tabs>` and `<TabItem>` components work correctly
   - 5 tabs render properly (Pterodactyl, Plesk, Proxmox, Wisp, VirtualizorCloud)
   - Tab labels unchanged (product names)
   - Import statements preserved exactly

4. **AC4**: Screenshots unchanged
   - 6 existing screenshots kept (FR interface acceptable for MVP)
   - Image paths unchanged:
     - `/img/next_gen/settings/provisioning/servers/create_server.png`
     - `/img/next_gen/extensions/modules/pterodactyl/images_1.png`
     - `/img/next_gen/extensions/modules/plesk/image.png`
     - `/img/next_gen/extensions/modules/proxmox/image_1.png`
     - `/img/next_gen/extensions/modules/wisp/images_1.png`
     - `/img/next_gen/extensions/modules/virtualizorcloud/image.png`
   - Alt text can remain "img" (consistent with source)

5. **AC5**: Admonitions translated
   - 5 `:::info` blocks translated
   - "Complement d'information" translated to "Additional Information"
   - Admonitions render properly in EN

6. **AC6**: Links functional
   - Internal link `/extensions/modules/Pterodactyl` works
   - Internal link `/extensions/modules/Plesk` works
   - Internal link `/extensions/modules/Proxmox` works
   - Internal link `/extensions/modules/Wisp` works

7. **AC7**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/getting_started/server` (EN)
   - Page renders correctly at `/fr/getting_started/server` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [ ] Task 1: Update EN file with translated frontmatter (AC: #2)
  - [ ] 1.1 Edit file at `docs/getting_started/server.md`
  - [ ] 1.2 Add `translated: true` to frontmatter
  - [ ] 1.3 Preserve `sidebar_position: 2`

- [ ] Task 2: Translate header and intro (AC: #1)
  - [ ] 2.1 Translate title "Configuration votre premier serveur" to "Configuring Your First Server"
  - [ ] 2.2 Translate intro paragraph about connecting Pterodactyl or other service delivery systems
  - [ ] 2.3 Keep navigation path format: Settings > Provisioning > Servers > Create

- [ ] Task 3: Preserve MDX imports and Tabs structure (AC: #3)
  - [ ] 3.1 Keep import statements exactly as-is
  - [ ] 3.2 Keep `<Tabs>` and `<TabItem>` structure unchanged
  - [ ] 3.3 Keep tab value and label attributes unchanged (product names)

- [ ] Task 4: Translate Pterodactyl tab content (AC: #1, #4, #5, #6)
  - [ ] 4.1 Keep image path unchanged
  - [ ] 4.2 Translate field labels to English
  - [ ] 4.3 Translate :::info admonition
  - [ ] 4.4 Keep link to `/extensions/modules/Pterodactyl`

- [ ] Task 5: Translate Plesk tab content (AC: #1, #4, #5, #6)
  - [ ] 5.1 Keep image path unchanged
  - [ ] 5.2 Translate field labels to English
  - [ ] 5.3 Translate port requirement and test connection instructions
  - [ ] 5.4 Translate :::info admonition
  - [ ] 5.5 Keep link to `/extensions/modules/Plesk`

- [ ] Task 6: Translate Proxmox tab content (AC: #1, #4, #5, #6)
  - [ ] 6.1 Keep image path unchanged
  - [ ] 6.2 Translate field descriptions (bullet list format)
  - [ ] 6.3 Translate :::info admonition
  - [ ] 6.4 Keep link to `/extensions/modules/Proxmox`

- [ ] Task 7: Translate Wisp tab content (AC: #1, #4, #5)
  - [ ] 7.1 Keep image path unchanged
  - [ ] 7.2 Translate field labels to English
  - [ ] 7.3 Translate :::info admonition
  - [ ] 7.4 Keep link to `/extensions/modules/Wisp`

- [ ] Task 8: Translate VirtualizorCloud tab content (AC: #1, #4)
  - [ ] 8.1 Keep image path unchanged
  - [ ] 8.2 Translate field labels to English
  - [ ] 8.3 Translate port requirement and test connection instructions
  - [ ] 8.4 Note: No :::info admonition in this tab

- [ ] Task 9: Build and test (AC: #7)
  - [ ] 9.1 Run `npm run build`
  - [ ] 9.2 Run `npm run serve` and test EN URL
  - [ ] 9.3 Verify all 5 tabs render correctly
  - [ ] 9.4 Verify no "Not translated" banner
  - [ ] 9.5 Verify FR page still works
  - [ ] 9.6 Test all 4 internal links

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN file to translate | `docs/getting_started/server.md` |
| FR reference file | `i18n/fr/docusaurus-plugin-content-docs/current/getting_started/server.md` |

### Current State Analysis

The file at `docs/getting_started/server.md` is currently in French and needs translation.

**File characteristics:**
- **File size**: ~3.1 KB (97 lines)
- **Frontmatter**: Has `sidebar_position: 2`, MISSING `translated: true`
- **MDX Components**: Uses `<Tabs>` and `<TabItem>` from `@theme/Tabs`
- **Images**: 6 screenshots (1 main + 5 per-panel)
- **Admonitions**: 5 info blocks (4 with links, 1 without)
- **Internal links**: 4 links to extension modules
- **Tabs**: 5 panels (Pterodactyl, Plesk, Proxmox, Wisp, VirtualizorCloud)

### Translation Reference

| French | English |
|--------|---------|
| Configuration votre premier serveur | Configuring Your First Server |
| Pour connecter votre Pterodactyl ou autre systeme de livraison de service | To connect your Pterodactyl or other service delivery system |
| vous devez configurer le premier serveur | you need to configure your first server |
| Pour cela, rendez-vous dans | To do this, go to |
| Parametres | Settings |
| Approvisonnement | Provisioning |
| Serveurs | Servers |
| Creer | Create |
| Adresse IP | IP Address |
| Nom d'hote | Hostname |
| Port | Port |
| avec un domaine | with a domain |
| avec une IP | with an IP |
| Cle client | Client Key |
| Cle application | Application Key |
| Complement d'information | Additional Information |
| Plus d'informations sur | More information about |
| sont disponibles | is available |
| Sous domaine ou adresse IP | Subdomain or IP address |
| Nom d'utilisateur admin | Admin username |
| Mot de passe admin | Admin password |
| Le port suivant doit etre ouvert | The following port must be open |
| pour connecter CLIENTXCMS a votre | to connect CLIENTXCMS to your |
| Vous pouvez tester la connexion | You can test the connection |
| et verifier que le serveur renvoie | and verify that the server returns |
| en reponse | in response |
| la configuration de | the configuration of |
| les cles API | the API keys |
| Le nom que vous souhaitez attribuer | The name you want to assign |
| Type de serveur | Server type |
| Le port par defaut est | The default port is |
| Si vous avez configure un proxy avec SSL | If you have configured a proxy with SSL |
| vous pouvez utiliser | you can use |
| L'ID du jeton | The token ID |
| Le secret associe au jeton | The secret associated with the token |
| pour l'API | for the API |
| Virtualizor pour revendeurs | Virtualizor for Resellers |

### Expected EN Content

```markdown
---
sidebar_position: 2
translated: true
---
# Configuring Your First Server

To connect your Pterodactyl or other service delivery system, you need to configure your first server. To do this, go to `Settings` then `Provisioning` then `Servers` and `Create`.

![img](/img/next_gen/settings/provisioning/servers/create_server.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Pterodactyl" label="Pterodactyl">

![img](/img/next_gen/extensions/modules/pterodactyl/images_1.png)

**IP Address**: IP address of the Pterodactyl server.

**Hostname**: Hostname of the Pterodactyl server.

**Port**: 443 with a domain or 80 with an IP.

**Client API**: Client key.

**Application API**: Application key.

:::info Additional Information

More information about API keys is available [here](/extensions/modules/Pterodactyl).
:::
</TabItem>
<TabItem value="Plesk" label="Plesk">

![img](/img/next_gen/extensions/modules/plesk/image.png)

**IP Address**: Subdomain or IP address of the Plesk server.

**Username**: Admin username.

**Password**: Admin password.

The following port must be open to connect CLIENTXCMS to your Plesk: 8443

You can test the connection to the server and verify that it returns *"Success"* in response.

:::info Additional Information

More information about Plesk configuration is available [here](/extensions/modules/Plesk).
:::
</TabItem>
<TabItem value="Proxmox" label="Proxmox">

![img](/img/next_gen/extensions/modules/proxmox/image_1.png)

- **Name:** The name you want to assign to the Proxmox server.
- **Server Type:** Proxmox.
- **Hostname:** The hostname of the Proxmox VE.
- **IP Address:** The IP address of the Proxmox VE.
- **Port:** The default port is `8006`. If you have configured a proxy with SSL, you can use `443` or `80`.
- **Token ID:** The Proxmox API token ID.
- **Secret:** The secret associated with the Proxmox API token.

:::info Additional Information
More information about Proxmox configuration is available [here](/extensions/modules/Proxmox).
:::
</TabItem>
<TabItem value="Wisp" label="Wisp">

![img](/img/next_gen/extensions/modules/wisp/images_1.png)

**IP Address**: IP address of the Wisp server.

**Hostname**: Hostname of the Wisp server.

**Port**: 443 with a domain or 80 with an IP.

**Client API**: Client key.

**Application API**: Application key.

:::info Additional Information
More information about API keys is available [here](/extensions/modules/Wisp).
:::
</TabItem>
<TabItem value="VirtualizorCloud" label="Virtualizor for Resellers">

![img](/img/next_gen/extensions/modules/virtualizorcloud/image.png)

**IP Address**: Subdomain or IP address of the Virtualizor Cloud server.

**Key**: API KEY

**Password**: API PASSWORD

The following port must be open to connect CLIENTXCMS to your Virtualizor Cloud: 4083

You can test the connection to the server and verify that it returns *"Success"* in response.
</TabItem>
</Tabs>
```

### Terminology Consistency (from Epic 2 & Epic 3 Stories)

Maintain consistent terminology:
- "Settings" (Parametres)
- "Provisioning" (Approvisonnement)
- "Servers" (Serveurs)
- "Create" (Creer)
- "IP Address" (Adresse IP)
- "Hostname" (Nom d'hote)
- "Port" (Port)
- "Additional Information" (Complement d'information)
- Product names unchanged: Pterodactyl, Plesk, Proxmox, Wisp, Virtualizor, CLIENTXCMS

### Previous Story Learnings (Stories 2-x, 3-1, 3-2, 3-3)

From completed stories:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Natural English**: Avoid literal translation - use idiomatic phrasing
3. **Build verification**: Always run `npm run build` before marking complete
4. **No emoji**: EN pages should not have emoji per project standards
5. **Preserve structure**: Keep same heading levels and organization
6. **Admonitions**: `:::info` syntax works in Docusaurus 3, translate content inside
7. **Internal links**: Keep paths unchanged (case-sensitive!)
8. **Image paths**: Keep unchanged
9. **Screenshots FR acceptable**: Per epic guidelines, FR interface screenshots are acceptable for MVP
10. **MDX imports**: Import statements must be preserved exactly as-is
11. **Tab components**: Docusaurus Tabs/TabItem work in translated pages

### Git Intelligence (Recent Commits)

Recent commits show pattern:
- `6dc3081` - Story 3-3 created
- `6ed27ec` - Ansible page translated
- `3e76ce2` - Code review 2-6
- `5797d5d` - Story 3-2 created

Commit message for this story translation should be:
```
docs(i18n): translate Server Configuration page to English
```

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/getting_started/server
# FR: http://localhost:3001/fr/getting_started/server
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
- Images use standard markdown syntax

### Testing Requirements

- Visual verification of page rendering
- All 5 tabs clickable and display correct content
- All 6 images render correctly
- Link click testing (4 internal links to extension modules)
- Build success verification
- Admonition (5 info blocks) rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **Tab label "Virtualizor pour revendeurs"**: Should be translated to "Virtualizor for Resellers" in the `label` attribute.

2. **Wisp tab content error in source**: The FR source incorrectly says "Adresse IP du Pterodactyl" instead of "Wisp" - this should be corrected in EN translation.

3. **CLIENTXCMS spelling**: Keep as uppercase CLIENTXCMS (product name).

4. **Port numbers**: Keep unchanged (443, 80, 8443, 8006, 4083).

5. **"Success" in quotes**: Keep the formatting with asterisks for emphasis.

6. **Import placement**: The import statements appear after the first image. This is valid MDX and should be preserved exactly.

7. **Links case-sensitivity**: Internal links to `/extensions/modules/Pterodactyl`, `/extensions/modules/Plesk`, etc. are case-sensitive - verify these exist.

### File Structure Context (Epic 3)

This is story 3.4 (fourth of 9). The complete Getting Started section:
1. getting_started.md (index) - Story 3.1 (ready-for-dev)
2. first_login.md - Story 3.2 (ready-for-dev)
3. personalization.md - Story 3.3 (ready-for-dev)
4. server.md - THIS STORY
5. products.md - Story 3.5 (backlog)
6. payments.md - Story 3.6 (backlog)
7. accounts.md - Story 3.7 (backlog)
8. service.md - Story 3.8 (backlog)
9. finish.md - Story 3.9 (backlog)

### References

- [Source: _bmad-output/planning-artifacts/epic-3-mvd-getting-started.md#Story 3.4]
- [Source: _bmad-output/implementation-artifacts/3-3-traduire-personalization-md.md] - Previous story reference
- [Source: docs/getting_started/server.md] - EN file to translate
- [Docusaurus i18n](https://docusaurus.io/docs/i18n/introduction)
- [Docusaurus Tabs](https://docusaurus.io/docs/markdown-features/tabs)
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
