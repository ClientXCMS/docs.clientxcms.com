---
translated: true
---

# Configurable Options
Configurable options are features that can be added to a service during order or afterward to further customize it. These have an additional cost and can be synchronized with the same billing cycle as the service or have a different expiration date.

## Available Option Types
- **Sliders**: Sliders allow you to define custom values based on a unit price.
- **Dropdown**: Dropdown menus allow you to define predefined values for resources with a price for each value.
- **Checkbox**: Checkboxes allow you to add additional features to a service at no extra cost.
- **Text Field**: Text fields allow customers to enter additional information during the order.
- **Radio**: Radio buttons allow you to select a single option among several.
- **Number Field**: Number fields allow you to enter a number during the order.
- **Text Area**: Text areas allow customers to enter additional information during the order.

## Option Configuration
To configure additional options, go to `Settings` > `Provisioning` > `Configurable Options`. You can add, modify, or delete options from this page.
![img](/img/next_gen/settings/provisioning/configoptions/index_admin.png)

### Creation
To add a new option, click the "Create" button at the top left of the page.
![img](/img/next_gen/settings/provisioning/configoptions/create_admin.png)

**Name**: Option name displayed during the order.

**Product**: Product to which the option will be linked.

**Key**: Option key (to be used in extensions).

**Type**: Option type (Slider, Dropdown, Checkbox, Text Field, Radio, Number Field, Text Area).

### Slider
**Minimum Value**: Minimum slider value.

**Maximum Value**: Maximum slider value.

**Step**: Slider step (e.g., increments of 10).

**Default Value**: Default slider value.

**Unit**: Slider unit.

**Validation Rules**: Laravel validation rules for the slider.

**Required**: Whether the slider is required or not.

### Dropdown or Radio
You can add options when editing the option.
Each option can have a different price with a name and value.
It is recommended to hide the option when adding options.
![img](/img/next_gen/settings/provisioning/configoptions/dropdown.png)
:::info
When you add an option, pending changes will not be saved. It is advisable to save changes with the `Save` button before adding a new option.
:::

### Text, Number, or Text Area
**Default Value**: Default field value.

**Validation Rules**: Laravel validation rules for the field.

**Minimum Value**: Minimum field value.

**Maximum Value**: Maximum field value.

**Required**: Whether the field is required or not.

### Localization
You can let customers choose the service location. For example, offer a location in France or Germany.
To do this, select the `Server/Location` key with a `Dropdown` type and add the values `France` and `Germany` with the CLIENTXCMS server ID as the value.
Each location can have a different price.
![img](/img/next_gen/settings/provisioning/configoptions/localization.png)

## Pricing
You can set a recurring or one-time price for each option.
![img](/img/next_gen/settings/store/products/create_pricing2.png)
:::info
We recommend setting a price for each recurrence for each option. This will avoid billing errors.
:::

Make sure the option is not hidden to be visible during the order.

## Adding an Option to a Service
To add an option to a service, go to the service page and click on the "Service Options" section.
