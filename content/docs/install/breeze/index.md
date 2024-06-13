---
title: Installation with Breeze
description: Learn how to install DevDojo Auth with Breeze
prevTitle: 'Introduction'
prevURL: '/docs/getting-started'
prevSlug: 'getting-started'
slug: 'install/breeze/index'
nextTitle: 'Authentication Pages'
nextURL: '/docs/authentication-pages'
nextSlug: 'authentication-pages'
breeze: true
---

In this installation page we'll show you the steps to install using the <a href="https://github.com/laravel/breeze" target="_blank">Breeze starter kit</a>.

## Create a new Breeze application

If you are using the Laravel installer, you may be prompted to install a starter kit. In this prompt you can select `Laravel Breeze` to install the Breeze starter kit. Alternatively, if you're in a new Laravel app you can install Breeze by [following the installation steps here](https://laravel.com/docs/11.x/starter-kits#laravel-breeze-installation). 

If you are using the Laravel installer you can select any of these stacks:

 - ✅ Blade with Alpine
 - ✅ Livewire (Volt Class API) with Alpine
 - ✅ Livewire (Volt Functional API) with Alpine
 - ✅ React with Inertia
 - ✅ Vue with Inertia

## Install the Auth Package

After you've created a new Jetstream app you'll want to require the auth package:

<include src="docs/install/code/composer-require.html"></include>

Next, you'll need to publish the assets, configs, ci workflow, and migrations:

<include src="docs/install/code/publish.html"></include>

Next, you'll want to run the new migrations:

<include src="docs/install/code/migrate.html"></include>

Finally, you need to extend the DevDojo `User` model.

<include src="docs/install/code/extend-model.html"></include>

Now that we have DevDojo Auth setup there are a handful of things that we need to update.

## Remove the Guest Authentication Routes

Inside of the `routes/auth.php` you'll need to remove all the guest authentication routes. Remove all content from this middleware group:

```php
Route::middleware('guest')->group(function () {
    // remove all these routes
});
```

> You can remove the whole middleware group as well

## Enable the Name Field for Registration

As Breeze depends on the `name` field for registration, you'll want to enable this option in the setup page.

You can do that by visiting the `/auth/setup` route, clicking on `Settings`, and enabling the `Registration Include Name Field` option.

## Remove the Breeze Auth Views & Controllers

Since we are now using the DevDojo Auth package we no longer need the Breeze views and controllers. 

Depending on the stack that you chose you may find the Breeze views in the assets folder or the views folder. These assets will have a parent folder called `auth` which you can remove. You'll want to remove the views and controllers that handle the Breeze authentication.

> You could always leave the views and controllers inside of your application and everything will still function correctly; however, for organization purposes and a cleaner structure you'll probably want to remove these unneccessary files.
