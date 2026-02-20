---
translated: true
---

# Frequently Asked Questions

The **FAQ** addon for CLIENTXCMS allows you to easily create and organize **frequently asked questions** adapted to each context: global FAQs, FAQs linked to a specific product, or FAQs by groups.

![img](/img/next_gen/extensions/addons/faq/image.png)
## Basic Configuration
To configure the FAQ addon, go to customization settings then to the **FAQ** tab. You will find all frequently asked questions there.
![img](/img/next_gen/extensions/addons/faq/admin.png)

You can define whether you want to enable helpfulness votes. This allows users to vote if a question/answer was helpful to them or not.

### Adding a Question
To add a new question, click the **Create** button. Fill in the following fields:
- **Title**: The question title.
- **Group**: If the question should be associated with a specific group.
- **Product**: If the question should be linked to a particular product.
- **Content**: The answer to the question.
- **Order**: Allows you to define the display order of questions.

:::info
If the question is associated with a product, it will only appear on the corresponding product page. If it is associated with a group, it will only appear on the group page. Otherwise, it will be displayed in the global FAQ.
:::

## Site Display

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="General" label="General">

![img](/img/next_gen/extensions/addons/faq/image.png)

</TabItem>

<TabItem value="Produit" label="Product">

![img](/img/next_gen/extensions/addons/faq/product.png)

</TabItem>

<TabItem value="Groupe" label="Group">

![img](/img/next_gen/extensions/addons/faq/group.png)

</TabItem>

</Tabs>

### Theme Support
To support FAQ display on your theme, your theme must include this code in the `views/front/store/group.blade.php` file:
```blade
@includeWhen(app('extension')->extensionIsEnabled('faq'), 'faq::widget', ['group' => $group ?? null])
```
