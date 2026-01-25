---
sidebar_position: 3
translated: true
---
# Functions & Settings

This page lists the functions and setting keys usable for themes.

## Functions

| Function                                                     | Description                                      |
|--------------------------------------------------------------|--------------------------------------------------|
| `{{ auth()->check() }}`                                      | Checks if the user is logged in                  |
| `{{ auth()->user() }}`                                       | Returns the logged-in user                       |
| `{!! app('seo')->head() !!}`                                 | Returns the metadata to add in the head          |
| `{!! app('seo')->favicon() !!}`                              | Returns the meta tag for the favicon             |
| `{!! app('seo')->foot() !!}`                                 | Returns the end-of-page scripts                  |
| `{{ setting(key, value) }}`                                  | Returns the value of a configuration setting     |
| `{{ basket(false) }}`                                        | Returns the basket model                         |
| `{{ basket()->total() }}`                                    | Returns the basket total                         |
| `{{ basket()->quantity() }}`                                 | Returns the number of items in the basket        |
| `{{ basket()->items() }}`                                    | Returns the basket items                         |
| `{{ is_darkmode() }}`                                        | Returns true if the page is in dark mode         |
| `{{ is_lightmode() }}`                                       | Returns true if the page is in light mode        |
| `{{ format_bytes($bytes, $precision = 2, $suffix = true) }}` | Returns the formatted byte size (KB, MB, GB, etc.) |
| `{{ currency() }}`                                           | Returns the current currency in ISO format       |
| `{{ currency_symbol(?$currency = null) }}`                   | Returns the current currency symbol              |
| `{{ currencies() }}`                                         | Returns an array containing all currencies       |
| `{{ tax_percent(?$iso = null) }}`                            | Returns the tax percentage for a country         |
| `{{ formatted_price($price, $currency = null) }}`            | Returns the formatted price with currency        |
| `module_path($module, $path)`                                | Returns the path of a file in a module           |
| `addon_path($module, $path)`                                 | Returns the path of a file in an addon           |
| `theme_manager()`                                            | Returns the theme manager instance               |
| `{{ is_subroute($route) }}`                                  | Returns true if the route is a sub-route         |
| `{{ is_route($route) }}`                                     | Returns true if the route is the current route   |
| `{{ ctx_version() }}`                                        | Returns the CLIENTXCMS version                   |
| `{{ theme_config($key, $default = null) }}`                  | Returns the theme configuration                  |

## Settings

You can retrieve them with the `{{ setting() }}` function.

| Key                        | Description                                        |
|----------------------------|----------------------------------------------------|
| `app_name`                  | Site name                                          |
| `app_url`                   | Site URL                                           |
| `app_timezone`              | Site timezone                                      |
| `app_address`               | Site address                                       |
| `app_logo`                  | Site logo                                          |
| `app_logo_text`             | Site text logo                                     |
| `app_favicon`               | Site favicon                                       |
| `app_debug`                 | Site debug mode                                    |
| `app_env`                   | Site environment                                   |
| `theme_header_logo`         | Display logo in site header                        |
| `theme_switch_mode`         | Theme type (both, light, dark)                     |
| `theme_footer_description`  | Footer description                                 |
| `theme_home_title_meta`     | Homepage meta title                                |
| `theme_home_image_meta`     | Homepage meta image                                |
| `seo_site_title`            | Site title (displayed next to page title)          |

You can retrieve them with the `{{ setting() }}` function or `{{ translated_setting() }}`.
