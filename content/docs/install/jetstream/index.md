---
title: Installation with Jetstream
description: Learn how to install DevDojo Auth with Jetstream
prevTitle: 'Introduction'
prevURL: '/docs/getting-started'
prevSlug: 'getting-started'
slug: 'install/jetstream/index'
nextTitle: 'Authentication Pages'
nextURL: '/docs/authentication-pages'
nextSlug: 'authentication-pages'
jetstream: true
---

In this installation page we'll show you the steps to install Auth with-in <a href="https://jetstream.laravel.com/installation.html" target="_blank">a new jetstream application</a>.

## Create a new Jetstream application

If you are using the Laravel installer, you may be prompted to install a starter kit. In this prompt you can select `Laravel Jetstream` to install the Jetstream starter kit. Alternatively, if you're in a new Laravel app you can install Jetstream by [following the installation steps here](https://jetstream.laravel.com/installation.html). 

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

## Publish the Fortify config

Jetstream utilizes <a href="https://laravel.com/docs/fortify" target="_blank">Fority</a> under the hood, so we need to publish the Fortify config and make a few changes:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=fortify-config</span></div>

Inside of this config, located at `config/fortify.php` you'll need to set `views` to `false`, like so:

```
'views' => false,
```

and you'll also need to comment out the `registration`, `resetPassword`, `emailVerification` and `twoFactorAuth` features since we will be relying on DevDojo Auth for this functionality:

```php
'features' => [
    //Features::registration(),
    //Features::resetPasswords(),
    // Features::emailVerification(),
    Features::updateProfileInformation(),
    Features::updatePasswords(),
    // Features::twoFactorAuthentication([
    //     'confirm' => true,
    //     'confirmPassword' => true,
    //     // 'window' => 0,
    // ]),
],
```

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


## Conditionally Enable 2FA

If you want to enable two-factor authentication on your site you can do that by visiting `/auth/setup` and clicking on the `settings` section. Then toggle the `Enable 2fa` option and you users will now see the ability to enable two-factor authentication from their edit profile page.

---

That's it! DevDojo Auth is now working with Jetstream. You can enable 2FA in the Auth settings page and it will enable/disable 2FA and work with the current Jetstream implementation.
