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

After you've created a new Breeze app you'll want to require the auth package:

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

## Modify Inertia Links

> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="inline size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg><span>Only applicable when using Inertia Stack</span>
  
By default your application `Welcome.vue` file located inside of `resources/js/Pages/Welcome.*` will have the following component links using the `Link` component:

```html
<Link
    :href="route('login')"
    class="..."
>
    Log in
</Link>

<Link
    v-if="canRegister"
    :href="route('register')"
    class="..."
>
    Register
</Link>
```

You will need to replace these `Link` elements with an `a` element, so that it looks like this instead:

```html
<a
    :href="route('login')"
    class="..."
>
    Log in
</a>

<a
    v-if="canRegister"
    :href="route('register')"
    class="..."
>
    Register
</a>
```

This is because when the application uses the `Link` element, Inertia will open these links via XHR requests, but we need them to perform their own request and function like normal links (the traditional `a` tags).

## Remove the Breeze Auth Views & Controllers

Since we are now using the DevDojo Auth package we no longer need the Breeze authentication views and controllers. 

Depending on the stack that you chose you may find the Breeze views in the assets folder or the views folder. These assets will have a parent folder called `auth` which you can remove. You'll want to remove the views and controllers that handle the Breeze authentication.

> You could always leave the views and controllers inside of your application and everything will still function correctly; however, for organization purposes and a cleaner structure you'll probably want to remove these unneccessary files.
