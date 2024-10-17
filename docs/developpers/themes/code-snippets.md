---
sidebar_position: 4
---
# Code d'exemple
Voici quelques exemples de code pour vous aider à personnaliser votre thème.
### Head
```blade
<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    {{-- ... --}}
    <title>@yield('title') {{ translated_setting('seo_site_title') }}</title>
    @yield('styles')
    @vite('resources/themes/yourtheme/css/app.scss')
    @vite('resources/themes/yourtheme/js/app.js')
    {!! app('seo')->head() !!}
    {!! app('seo')->favicon() !!}
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
</head>
```
### Header
```blade
<header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full py-2.5 sm:py-4 bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700 print:hidden">
    <nav class="max-w-7xl flex basis-full items-center mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div class="me-5 md:me-8">
            @if (setting('theme_header_logo', false))
                <a class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/" aria-label="{{ setting('app_name') }}">
                    <img class="mx-auto h-10 w-auto" src="{{ setting('app_logo_text', asset('images/logo.png')) }}" alt="{{ setting('app_name') }}">
                </a>
            @else
                <a class="flex-none text-xl font-semibold dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/" aria-label="{{ setting('app_name') }}">{{ setting('app_name') }}</a>
                @endif
        </div>
    </nav>
</header>
```
### Affichage d'un bouton de panier

Fichier `resources/themes/theme_name/views/shared/layouts/iconright.blade.php`
```blade
<a href="{{ route('front.store.basket.show') }}" class="btn-icon2" >
    <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1"/><circle cx="18" cy="20.5" r="1"/><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"/></svg>
    @if (basket(false) != null && basket()->quantity() > 0)
        <span class="absolute top-0 end-0 inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium transform -translate-y-1/2 translate-x-1/2 bg-red-500 text-white">{{ basket()->quantity() }}</span>
    @endif
    <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
</a>
```
### Switch de mode sombre
Fichier `resources/themes/theme_name/views/shared/layouts/iconright.blade.php`
```blade

@if (setting('theme_switch_mode') == 'both')
<button id="dark-mode-btn" class="w-9 h-9 relative inline-flex justify-center items-center text-sm font-semibold rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
    <svg class="@if (!is_darkmode()) hidden @endif flex-shrink-0 w-4 h-4" id="dark-mode-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
    <svg class="@if (is_darkmode()) hidden @endif flex-shrink-0 w-4 h-4" id="dark-mode-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</button>
@endif
```
### Afficher le menu de navigation client
Fichier `resources/themes/theme_name/views/layouts/client.blade.php`
```blade
@foreach(\App\Http\Navigation\ClientNavigationMenu::getItems() as $item)
    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="{{ route($item['route']) }}">
        <i class="{{ $item['icon'] }} w-4 h-4"></i>

        {{ $item['name'] }}
    </a>
@endforeach
```
### Afficher les réseaux sociaux
Ce menu est configurable depuis la page "Paramètres" > "Thèmes" > "Réseaux sociaux"

Fichier `resources/themes/theme_name/views/layouts/footer.blade.php`
```blade
@foreach (app('theme')->getSocialsNetworks() as $network)
    <a class="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-500 hover:text-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:hover:text-indigo-700" href="{{ $network->url }}">
        <i class="{{ $network->icon }}"></i>
    </a>
@endforeach
```
### Afficher le menu de bas de page
Ce menu est configurable depuis la page "Paramètres" > "Thèmes" > "Menu de bas de page"
Fichier `resources/themes/theme_name/views/layouts/footer.blade.php`
```blade
@foreach (app('theme')->getBottomLinks() as $link => $name)
    <li class="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-neutral-600">
        <a class="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-200" href="{{ $link }}">
            {{ $name }}
        </a>
    </li>
@endforeach
```
### Afficher le menu de navigation
Fichier `resources/themes/theme_name/views/layouts/client.blade.php`
Fichier `resources/themes/theme_name/views/layouts/front.blade.php`
```blade
@foreach (app('theme')->getFrontLinks() as $link => $data)
    <a class="font-medium sm:px-2 mr-3 {{ is_subroute($link) ? 'text-indigo-500 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-500' : 'text-gray-500 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500' }}" href="{{ $link }}">
        <i class="{{ $data['icon'] }} mr-1"></i> {{ $data['name'] }}
    </a>
@endforeach
```

### Afficher les groupes de produits
Fichier `resources/themes/theme_name/views/front/store/group.blade.php`
```blade

@foreach($groups->chunk(3) as $row)

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">

        @foreach($row as $group)
            @php($startPrice = $group->startPrice())
            <div class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                @if ($group->image)
                    <div class="h-52 flex flex-col justify-center items-center bg-indigo-600 rounded-t-xl">
                        <img src="{{ Storage::url($group->image) }}" class="{{ $group->useImageAsBackground() ? 'h-full w-full' : 'h-32 w-32' }}" alt="{{ $group->name }}">
                    </div>
                @endif
                <div class="p-4 md:p-6">
                    @if ($group->pinned)
                        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
              {{ __('store.pinned') }}
            </span>
                    @endif
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 dark:hover:text-white">
                        {{ $group->trans('name') }}
                    </h3>
                    <p class="mt-3 text-gray-500">
                        {{ $group->trans('description') }}
                    </p>
                </div>
                <div class="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                    <a href="{{ $group->route() }}" class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        @if ($startPrice->isFree())
                            {{ __('global.free') }}
                        @else
                            {{ __('store.from_price', ['price' => $startPrice->price, 'currency' => $startPrice->currency]) }}
                        @endif
                    </a>
                    <a href="{{ $group->route() }}" class="w-full py-3 px-4 inline-flex justify-center text-primary items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        {{ __('global.seemore') }} <span class="sr-only">{{ $group->name }}</span>
                        @include("shared.icons.array-right")
                    </a>
                </div>
            </div>
        @endforeach
```

### Afficher les produits
Fichier `resources/themes/theme_name/views/front/store/group.blade.php`
```blade

@foreach($products->chunk(3) as $row)
    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:items-center">
        @foreach($row as $product)
            @if($product->pinned)
                @include('shared.products.pinned')
            @else
                @include('shared.products.product')
            @endif
        @endforeach
    </div>
@endforeach
```