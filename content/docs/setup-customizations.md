---
title: Setup and Customizations
description: Learn about the Authentication Setup and Customization page
setup: true
---

## The Setup Page

DevDojo Auth comes with a simple Setup page to help you customize and configure your authentication.

<img src="{ url('/assets/images/setup-screen.jpg') }" class="w-full h-auto rounded-md" />

You can view this page by visiting the `/auth/setup` route of your application.

## About Setup

This setup page allows you to customize/configure the following aspects of your authentication.

- **Appearance** - Modify the logo, background, colors, and more.
- **Social Providers** - Enable/Disable the authenticatable Social Providers
- **Language** - Change/modify the Language copy throughout your authentication
- **Settings** - Common settings functionality for your authentication

We will go deeper into a few sections further in the documentation, for now it's good to just have an understanding of what each section is responsible for.


## How Does It Work

The setup page essentially adds and modifies the configuration files located at `config/devdojo/auth`. In this folder you will see confiruation files that correspond to each section in the setup page. Whenever you make a modification in the Setup screen it will automatically be reflect in the config. <a href="{ url('/docs/config/files') }">Learn more about config files here</a>.


## Authorization

If your application environment is `local` the `/auth/setup` route can be accessed. Alternatively, if you are on production and you want to access the Auth Setup, you can add the following `Authorization Gate`, to the `boot()` method inside your `AppServiceProvider`:

```php
use Illuminate\Support\Facades\Gate;

Gate::define('viewAuthSetup', function (\DevDojo\Auth\Models\User $user) {
    return in_array($user->email, [
        'tony@devdojo.com',
    ]);
});
```

> note: You may want to be cautious about making customizations and changes to your authentication when you are in a production environment. If you make changes, it will update the `config/devdojo/auth` files which will then need to be submitted to version control to prevent any conflicts and keep the code in sync.

