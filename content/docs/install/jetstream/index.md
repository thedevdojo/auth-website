---
title: Installation with Jetstream
description: Learn how to install DevDojo Auth with Jetstream
prevTitle: 'Introduction'
prevURL: '/docs/getting-started'
prevSlug: 'getting-started'
slug: 'install'
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

You may also want to toggle the `Registration Include Name Field` from the `/auth/setup` settings page. This will allow the user to add their name upon registration.

That's it! DevDojo Auth is now working with Jetstream. You can enable 2FA in the Auth settings page and it will enable/disable 2FA and work with the current Jetstream implementation.
