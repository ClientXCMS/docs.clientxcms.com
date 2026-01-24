---
sidebar_position: 1
translated: true
---
# Themes
CLIENTXCMS offers a theme system to customize the appearance of your website. Themes are folders containing configuration files and template files. Themes are available from the administration interface via `Settings` > `Themes` > `Theme Settings`.

You can enable or disable a theme by clicking the `Enable` or `Disable` button corresponding to the theme.
![Themes](/img/next_gen/developpers/themes/themes.png)

## Installing a Theme
:::info Information
For cloud offers, you cannot install custom themes. You can only activate a theme from the available themes. We are working on a solution to allow custom theme installation.
:::
To install a theme, you must download the theme from the CLIENTXCMS website. You can then place it in the `resources/themes` folder of your installation. It will then be available in the theme list. You must then rerun the npm build for the theme to be taken into account. You can do this by running the following command in the terminal at the root of your installation:
```bash
npm run build
```
