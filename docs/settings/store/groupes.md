---
translated: true
sidebar_position: 2
---

# Groups

In **CLIENTXCMS**, a **group** corresponds to a **logical category of products** that you offer in your store. <br/>
The objective is simple: **organize your services and improve the purchasing process** so your customers can **navigate easily and buy quickly**. Good grouping improves the user experience, guides purchasing decisions, and gives your store a structured and professional appearance.

Each group can be fully customized: name, description, visibility, etc.

You can manage groups from:

`Settings` > `Store Settings` > `Groups`

![Group configuration access](/img/next_gen/settings/store/groups/settings.png)

:::tip Tip
A product **must always belong to a group** to appear in the store.
Take a moment to structure your groups before adding new services.
:::
---

## Why use groups?

Imagine you sell pterodactyl hosting services, VPS, and domain names.
Creating a distinct group for each of these product types allows your customers to:

* See everything related to the same service in one place
* Quickly understand the differences between offers
* Save time for your customers in their purchasing journey

:::tip Tip
It's a bit like organizing store aisles 🛒 — the clearer it is, the more effective it is.
:::

## User Interfaces

### Store-side View

The store is available from the URL: `/store`

Each group is accessible via a structured URL as follows:

https://demo.clientxcms.com/store/groupname

For example, for a group named **VPS**:
https://demo.clientxcms.com/store/vps


![Group view on the store](/img/next_gen/settings/store/groups/view_group.png)

This allows you to **organize your offers by service type**, such as:

- Minecraft Hosting
- KVM VPS
- LXC VPS
- ClientXCMS Licenses
- Hosting Starter Pack

### Administrator View

In the administration interface, you have a complete list of created groups. You can:
- **Search** for a group by name
- **Perform actions** like view, edit, duplicate, or delete a product

![Group list view in administration](/img/next_gen/settings/store/groups/view_group_in_admin.png)

## Managing Product Groups
### Creating a New Group

Creating a group allows you to organize your products logically and visually in the store. Here are the fields to fill in when creating:

![Create a group](/img/next_gen/settings/store/groups/create_group.png)

**Name** | (text)<br />
The group name as it will appear in the store.

**Slug** | (text)<br />
The custom URL ending, allowing direct access to the group page.
(example: `vps-linux` will give a URL like: `clientxcms.com/store/vps-linux`)

**Parent Group** | (dropdown menu)<br />
If this group belongs to a higher category, you can attach it here. Useful for creating hierarchies (e.g.: `VPS` > `VPS Linux`).

**Status** | (dropdown menu)<br />
Defines the group's visibility in the store:
- **Active**: Available for purchase
- **Unlisted**: Accessible only via direct link
- **Hidden**: Unavailable for purchase

**Description** | (text area)<br />
A short explanatory text that will be visible on the group page, to help customers understand the overall offer.

**Image** | (files)<br />
Illustration displayed on the store. This makes the interface more visual and attractive.

**Sort Order** | (numeric field)<br />
Controls the group's position in the displayed list. The lower the number, the higher the group appears in the store.

**Pinned** | (checkbox)<br />
Enable this option to highlight the group — it will be displayed at the top of the list in your store.

**Use Image as Background** | (checkbox)<br />
Allows you to apply the selected image as the group's background on the store page. Ideal for creating an ambiance or strong visual landmark.

:::tip Tip
Take the time to write a clear and engaging name and description. This is often the first thing your customers will read before discovering your products, and it will improve your SEO.
:::

### Cloning a Group

You can clone an existing group from the administration interface by clicking the **"Clone"** button located to the right of the group in question, in your groups list.

Once this action is initiated, **two choices are available**:

* **Clone with products**:
  This option duplicates not only the group settings (name, description, visibility...), but also **all the products** it contains.
  The cloned products will have the same settings as the originals, saving you time if you want to offer a similar offer in another category.

* **Clone without products**:
  Here, only the group is duplicated, without any products.
  This is ideal if you want to start from a group template without duplicating its content.

---

**Screenshots:**

1. **Group list with the "Clone" button visible**
![Group list view with "clone" option in administration](/img/next_gen/settings/store/groups/view_feature_cloning_into_group_in_admin.png)

2. **Modal window with the two options "With products" / "Without products"**

![Group list view with "clone" option modal window in administration](/img/next_gen/settings/store/groups/view_feature_cloning_into_group_modal_in_admin.png)

3. **Final result: preview of the cloned group with or without products depending on the chosen option**

![Cloned group view without products in administration](/img/next_gen/settings/store/groups/view_after_cloning_without_product_into_group_in_admin.png)


### Editing a Group

To edit a group, click the "View" button in your groups list on the administration interface.<br />
![Group list view in administration](/img/next_gen/settings/store/groups/view_group_in_admin.png)

Modify the necessary information for the initiated edit, then save your changes with the "Update details" button.

![Edit a group in administration](/img/next_gen/settings/store/groups/edit_group_in_admin.png)

#### Group Status

The **status** determines the product's visibility and accessibility:

<div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}>

<div style={{ flex: 1 }}>

| Status           | Visibility                                                |
|------------------|-----------------------------------------------------------|
| **Active**       | Available for purchase                                    |
| **Unlisted**     | Accessible only via direct link                           |
| **Hidden**       | Unavailable for purchase                                  |

</div>

<div style={{ flex: 1 }}>
  <img src="/img/next_gen/settings/store/products/statut_product.png" alt="Product status" style={{ maxWidth: '100%' }} />
</div>

</div>

#### Translating a Group

CLIENTXCMS integrates a **complete translation system** allowing you to adapt each group to different languages, without compromising precision or user experience.

Each field (name, description, slug, etc.) is **fully customizable** according to the selected language. You can therefore refine each translation manually to ensure perfect consistency with your offer.

![Translate a group in administration](/img/next_gen/settings/store/groups/trad_group_in_admin.png)

Please refer to the section on [translations](../core/locales) for more information on this subject.

:::tip Tip
The quality of your translations can greatly improve the perception of your store by international users — take the time to adapt them carefully.
:::

### Deleting a Group
Group deletion is only possible if it contains no products.<br />
This restriction prevents accidental deletion of services visible in the store.

✅ **Steps to follow:**

1. Make sure the group in question contains **no active products**.
2. Once this condition is met, you can delete it from the group management page in your administration area.
3. Click this button: a **confirmation request** will appear to validate your action.
4. After confirmation, the group will be permanently deleted.

![Delete a group in administration](/img/next_gen/settings/store/groups/delete_group_in_admin.png)

:::danger Warning
Deletion is **permanent**: the group cannot be restored once deleted.
Make sure you have properly removed or moved linked products before proceeding, otherwise you will not be able to perform any group deletion action.
:::

### Hiding a Group
This option allows you to make a group invisible in the store with a single click.

When this box is checked:

* The **group** no longer appears in the public interface,
* And **none of the associated products** will be visible or available for purchase.

This is an ideal solution if you want to **temporarily disable a range of services** without deleting it.

✅ **How to do it?**<br />
Simply change the Status of your group **in the dropdown menu** located within your group edit.

![Hide a group in administration](/img/next_gen/settings/store/groups/cached_group_in_admin.png)

:::tip Tip
You can reactivate the group display at any time by selecting "Active".
This is a flexible way to manage seasonal products, offers under maintenance, or delayed launches.
:::

## Advanced Management
### Available Metadata

| Key                          | Value    | Description                            |
|------------------------------|----------|----------------------------------------|
| `use_image_as_background`    | `true`   | Link to add the product to cart        |
| `pinned_label`               | Text     | Product made on demand                 |
| `group_url`                  | Text     | Add to cart button title               |

:::tip Remember
Use metadata to refine product behavior without modifying its code or source module.
:::
