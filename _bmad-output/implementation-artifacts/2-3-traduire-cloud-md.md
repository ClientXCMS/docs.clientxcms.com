# Story 2.3: Traduire cloud.md

Status: ready-for-dev

## Story

As a documentation reader,
I want the English Cloud installation page to be properly translated,
so that international users can understand how to set up ClientXCMS using the Cloud (SaaS) installation method.

## Acceptance Criteria

1. **AC1**: Complete EN translation (~5.4 KB)
   - All French text translated to natural English
   - Title "Cloud" remains as-is (same in EN)
   - Technical terminology accurate (CNAME, DNS, subdomain, etc.)
   - No literal translation - natural English phrasing

2. **AC2**: Screenshots remain unchanged
   - All existing screenshots kept (FR interface acceptable for MVP)
   - Image paths unchanged (`/img/next_gen/Installation/Cloud/`)
   - Alt text updated to English where applicable

3. **AC3**: CNAME instructions clear
   - DNS configuration steps translated clearly
   - Cloudflare section instructions accurate
   - OVH section instructions accurate
   - CheckHost verification steps clear

4. **AC4**: Links functional
   - External link to clientxcms.com/pricing works
   - External link to check-host.net works
   - Internal link to ../developpers/software/relier-domain-cname.md works

5. **AC5**: Frontmatter complete
   - `translated: true` added to frontmatter
   - `sidebar_position: 3` preserved

6. **AC6**: Admonitions translated
   - `:::info Cloudflare` block translated
   - `:::info TIPS` blocks translated (2 occurrences)
   - Admonitions render properly in EN

7. **AC7**: Build successful
   - `npm run build` passes without errors
   - Page renders correctly at `/installation/cloud` (EN)
   - Page renders correctly at `/fr/installation/cloud` (FR)
   - No "Not yet translated" banner appears on EN

## Tasks / Subtasks

- [ ] Task 1: Add frontmatter with translated flag (AC: #5)
  - [ ] 1.1 Ensure `---` block at top of file
  - [ ] 1.2 Add `translated: true`
  - [ ] 1.3 Verify `sidebar_position: 3` present

- [ ] Task 2: Translate introduction section (AC: #1)
  - [ ] 2.1 Translate page title description paragraph
  - [ ] 2.2 Translate "Cette page vous guidera..." to English

- [ ] Task 3: Translate Domain section (AC: #1)
  - [ ] 3.1 Translate "Domaine" heading to "Domain"
  - [ ] 3.2 Translate domain configuration paragraph
  - [ ] 3.3 Translate subdomain explanation paragraph

- [ ] Task 4: Translate Installation section (AC: #1, #3)
  - [ ] 4.1 Translate "Installation" heading (keep as-is)
  - [ ] 4.2 Translate cloud activation steps
  - [ ] 4.3 Translate CNAME configuration paragraph
  - [ ] 4.4 Translate CheckHost verification paragraph
  - [ ] 4.5 Translate installation completion paragraph
  - [ ] 4.6 Translate license validation paragraph

- [ ] Task 5: Translate Cloudflare subsection (AC: #1, #3, #6)
  - [ ] 5.1 Translate heading (keep "Cloudflare")
  - [ ] 5.2 Translate CNAME addition steps (1-3)
  - [ ] 5.3 Translate `:::info Cloudflare` admonition

- [ ] Task 6: Translate OVH subsection (AC: #1, #3)
  - [ ] 6.1 Translate heading (keep "OVH")
  - [ ] 6.2 Translate all 8 numbered steps

- [ ] Task 7: Translate Domain modification section (AC: #1, #6)
  - [ ] 7.1 Translate "Modification du domaine" to "Domain Modification"
  - [ ] 7.2 Translate domain change instructions
  - [ ] 7.3 Translate `:::info TIPS` admonition (60 days limit)

- [ ] Task 8: Translate Reinstallation section (AC: #1, #6)
  - [ ] 8.1 Translate "Reinstallation de l'instance" to "Instance Reinstallation"
  - [ ] 8.2 Translate reinstallation instructions
  - [ ] 8.3 Translate `:::info TIPS` admonition (order of operations)

- [ ] Task 9: Update image alt text (AC: #2)
  - [ ] 9.1 Update alt text for activation.png
  - [ ] 9.2 Update alt text for cname.png
  - [ ] 9.3 Update alt text for checkhost.png
  - [ ] 9.4 Update alt text for email.png
  - [ ] 9.5 Update alt text for cloudflare.png
  - [ ] 9.6 Update alt text for ovh.png
  - [ ] 9.7 Update alt text for change_domain.png
  - [ ] 9.8 Update alt text for reinstall.png

- [ ] Task 10: Verify links (AC: #4)
  - [ ] 10.1 Verify https://clientxcms.com/pricing link
  - [ ] 10.2 Verify https://check-host.net link
  - [ ] 10.3 Verify ../developpers/software/relier-domain-cname.md link

- [ ] Task 11: Build and test (AC: #7)
  - [ ] 11.1 Run `npm run build`
  - [ ] 11.2 Run `npm run serve` and test EN URL
  - [ ] 11.3 Verify no "Not translated" banner
  - [ ] 11.4 Verify locale switcher works

## Dev Notes

### File Locations

| Purpose | Path |
|---------|------|
| EN Target file | `docs/installation/cloud.md` |
| FR Source file | `i18n/fr/docusaurus-plugin-content-docs/current/installation/cloud.md` |

### Current State Analysis

The EN file currently contains French text (identical to FR source - not yet translated). This needs full translation.

- **File size**: ~5.4 KB
- **Frontmatter**: Has `sidebar_position: 3`, MISSING `translated: true`
- **Sections**: 6 main sections with 2 provider-specific subsections
- **Images**: 8 screenshots (FR interface)
- **Admonitions**: 3 info blocks
- **External links**: 2 (clientxcms.com/pricing, check-host.net)
- **Internal links**: 1 (../developpers/software/relier-domain-cname.md)

### Translation Reference

| French | English |
|--------|---------|
| Cette page vous guidera | This page will guide you |
| serveurs de CLIENTXCMS | CLIENTXCMS servers |
| espace client | client area |
| domaine / sous-domaine | domain / subdomain |
| Lors de la commande | When ordering |
| renseigner | enter / specify |
| enregistrement CNAME | CNAME record |
| Zone DNS | DNS Zone |
| Modifier / Modification | Change / Modification |
| Reinstallation | Reinstallation |
| instance | instance |
| Remarque / TIPS | Note / TIP |

### Expected EN Content Structure

```markdown
---
sidebar_position: 3
translated: true
---
# Cloud

This page will guide you through the installation of ClientXCMS Next Gen for cloud versions on CLIENTXCMS servers. Cloud offerings are automatically installed on CLIENTXCMS servers. This allows you to benefit from an optimized installation and automatic updates. This method is available for all Premium and Enterprise licenses.

## Domain
When ordering your license, you had to provide a domain name. This domain name will be used for the client area installation. If you haven't ordered a license yet, go to [this page](https://clientxcms.com/pricing) to order one.

If you want to install the client area on a subdomain, you can do so by entering the subdomain in the "Change Domain" section of your client area.

## Installation
The first step is to activate the cloud offering from your client area. To do this, go to the "My Services" page and click on the "Cloud" button in the navigation tabs.

![Cloud Activation](/img/next_gen/Installation/Cloud/activation.png)

After this, the system will indicate the server on which your client area will be installed. You simply need to link your domain to CLIENTXCMS servers. To do this, retrieve the CNAME record provided by the system and add it to your domain.

![CNAME Record](/img/next_gen/Installation/Cloud/cname.png)

For more information on adding the CNAME, a dedicated page is available [here](../developpers/software/relier-domain-cname.md)

To verify that your domain is properly linked to CLIENTXCMS servers, you can use the [CheckHost](https://check-host.net) website and enter your domain.
It should indicate that the CNAME record is properly linked to the CLIENTXCMS server IP address.

![CheckHost](/img/next_gen/Installation/Cloud/checkhost.png)

Our system will then install the client area on your domain. The process may take a few minutes. Once the installation is complete, you can access your admin area by going to your domain with the credentials sent by email.

![Email](/img/next_gen/Installation/Cloud/email.png)

Once on your domain, you will be automatically redirected to clientxcms.com to validate your license. You can then log in to your client area with the credentials sent by email.

### Cloudflare
Once you are logged into your Cloudflare account, you need to add a CNAME record for your subdomain.

![Adding a CNAME record](/img/next_gen/Installation/Cloud/cloudflare.png)
1. Click the "Add a record" button and select "CNAME" from the dropdown menu.

2. Enter the subdomain you specified in the "Change Domain" section of your client area in the "Name" field and the CNAME record provided by the system in the "Target" field.

3. Click "Save" to add the record.

:::info Cloudflare
You must disable the proxy for the subdomain you specified.
:::

### OVH
To add a CNAME record to your OVH domain, follow these steps:

![Adding a CNAME record](/img/next_gen/Installation/Cloud/ovh.png)

1. Log in to your OVH client area and click on "Domains" in the left menu.
2. Click on the domain you want to modify.
3. Click on the "DNS Zone" tab in the horizontal menu.
4. Click the "Add a record" button and select "CNAME" from the dropdown menu.
5. Enter the subdomain you specified in the "Change Domain" section of your client area in the "Name" field and the CNAME record provided by the system in the "Target" field.
6. Click "Next" to add the record.
7. Click "Confirm" to validate the changes.
8. Wait a few minutes for the changes to take effect.


## Domain Modification
You can change your client area domain at any time from your client area. To do this, go to the "Change Domain" page and enter the new domain you want to use.
You will need to add a CNAME record for the new domain beforehand.
![Change Domain](/img/next_gen/Installation/Cloud/change_domain.png)
:::info TIP
Domain modification is possible every 60 days. For subdomain changes, this is not considered a domain change.
:::

## Instance Reinstallation
If you want to reinstall your client area, you can do so from your client area. To do this, go to the "Cloud" page and click on the "Reinstall" button.
You will be asked to confirm the reinstallation. Once confirmed, the system will reinstall the client area on your domain.
![Reinstallation](/img/next_gen/Installation/Cloud/reinstall.png)

The login credentials will be sent to you by email once the installation is complete.

:::info TIP
In case of a reinstallation and domain change, you must change the domain before reinstalling the instance.
:::
```

### Previous Story Learnings (Stories 2-1, 2-2)

From completed stories in Epic 2:

1. **Frontmatter required**: Must add `translated: true` for banner to disappear
2. **Terminology**: Keep technical terms (CNAME, DNS, Cloudflare, OVH) as-is
3. **Admonitions**: `:::info` syntax works in Docusaurus 3, translate "Remarque"/"TIPS" to "Note"/"TIP"
4. **Build verification**: Always run `npm run build` before marking complete
5. **No emoji**: EN pages should not have emoji per project standards
6. **Alt text**: Update image alt text to English
7. **External links**: Keep external URLs as-is (clientxcms.com, check-host.net)
8. **Internal links**: Keep relative paths

### Git Intelligence (Recent Commits)

Recent commits show:
- `a2ccf91` - Updated PHP requirements and fixed requis.md EN/FR
- `34a1707` - Story 2-2 created (installation.md index)
- `a8cdc8e` - Story 2-1 completed (requis.md proofreading)
- `e2d5365` - Fixed locale switch button 404

Learnings applicable to this story:
- Use relative paths for all internal links
- Test locale switcher after translation
- Verify build for both EN and FR

### Build Commands

```bash
# Build to verify no errors
npm run build

# Serve for testing
npm run serve -- --port 3001

# Test URLs:
# EN: http://localhost:3001/installation/cloud
# FR: http://localhost:3001/fr/installation/cloud
```

### Project Structure Notes

- **Docusaurus version**: 3.9
- **Default locale**: `en`
- **Route base path**: `/` (docs served at root)
- **EN files location**: `docs/` directory
- **FR files location**: `i18n/fr/docusaurus-plugin-content-docs/current/`

### Architecture Compliance

- No code changes required (content-only story)
- Frontmatter must follow Docusaurus 3 format
- No React components in this file (pure markdown)
- Admonitions use Docusaurus syntax (:::type)
- Images use standard markdown syntax

### Testing Requirements

- Visual verification of page rendering
- All 8 images render correctly
- Link click testing (2 external, 1 internal)
- Build success verification
- Admonition rendering verification
- No automated tests needed (content review)

### Known Considerations

1. **Screenshots in French**: The screenshots show the FR interface. This is acceptable for MVP per epic guidelines. Screenshots will be updated to EN in a future phase if needed.

2. **CNAME technical accuracy**: DNS terminology must be precise. CNAME is a canonical name record that creates an alias.

3. **Provider-specific sections**: Cloudflare and OVH sections have specific UI terminology that should match the actual interface (even if interface is in English).

4. **Internal link target**: The link `../developpers/software/relier-domain-cname.md` points to developer documentation. Verify this file exists and link works.

5. **Admonition content**:
   - Cloudflare proxy warning is critical for functionality
   - 60-day domain change limit is important business rule
   - Reinstallation order of operations is critical

### References

- [Source: _bmad-output/planning-artifacts/epic-2-mvd-installation.md#Story 2.3]
- [Source: _bmad-output/implementation-artifacts/2-1-relecture-requis-md.md] - Pattern reference
- [Source: _bmad-output/implementation-artifacts/2-2-traduire-installation-md-index.md] - Pattern reference
- [Source: docs/installation/cloud.md] - Current EN file (needs translation)
- [Source: i18n/fr/.../installation/cloud.md] - FR source reference
- [Docusaurus Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
