---
title: Custom Components
description: Learn how to override the authentication page components to take full control of how your authentication pages feel and function.
nextTitle: 'Contributing'
nextURL: '/docs/contributing'
nextSlug: 'contributing'
slug: 'extend/components'
prevTitle: 'Authentication Events'
prevURL: '/docs/extend/events'
prevSlug: 'events'
---

# Custom Components

## Introduction

You can include additional customizations by adding your own Blade components, you can override the default components provided by the package.

## Creating Custom Components

### Step 1: Publish the Default Components

To start with the current components from the Auth package, you can publish them to your application's `resources/views/components/auth/elements` directory.

```bash
php artisan vendor:publish --tag=auth:components
```

This command will publish the default components to `resources/views/components/app/elements`. Any components in this folder can be used as opposed to the default components. This gives you ultimate flexibility in customizing the appearance and behavior of your authentication pages.

Next, you need to specify which component you want to override.

## Step 2: Override Component

To use your custom component instead of the default one, you need to register it in your `AppServiceProvider`.

```php
namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        Blade::component('components.auth.elements.button', 'auth::elements.button');
        // Add more components as needed
    }
}
```

For instance, the above code will now use the `button` component from your local `resources/views/components/auth/elements` folder.

### Step 3: Customize the component

You can now customize the Blade component as much as you would like. We are utilizing <a href="https://tailwindcss.com" target="_blank">Tailwind CSS</a> and <a href="https://alpinejs.dev" target="_blank">AlpineJS</a> within these components, so that is how you can customize styles or functionality.

## Step 4: Update the Assets

You may have added some additional Tailwind classes in your custom component that are not included by the default components. To do this, you can run the following command:

```bash
npx tailwindcss -c ./vendor/devdojo/auth/tailwind.config.js -o ./public/auth/build/assets/styles.css
```

You will now see your updated styles within your authentication pages. 

> Tip: if you are trying to override styles that are set by Auth itself, for instance the background color, you may have to use !important (ex: !bg-pink-500), although the best process for this would be just to use the `button color` settings in the authentication setup pages.

## Testing

It's probably best to have your CI setup to run through the authentication functionality whenever you make a new PR. This way if you broke something when adding your own custom component, you will be aware.
