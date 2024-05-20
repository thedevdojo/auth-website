---
title: Installation with Breeze
description: Learn how to install DevDojo Auth with Breeze
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

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">composer</span> <span class="text-green-400">require</span> <span class="text-yellow-400">devdojo/auth</span></div>

Next, you'll need to publish the assets, configs, ci workflow, and migrations:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:assets</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:config</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:ci</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:migrations</span>
</div>

Next, you'll want to run the new migrations:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">migrate</span></div>

Now that we have DevDojo Auth setup there are a handful of things that we need to update.

## Remove the Breeze Auth routes

Inside of your application `routes/web.php` you'll see a line that looks like this:

```php
require __DIR__.'/auth.php';
```

This is located near the end of the file. Go ahead and remove this from your application.

## Remove the Breeze Auth Views & Controllers

Since we are now using the DevDojo Auth package we no longer need the Breeze views and controllers. 

Depending on the stack that you chose you may find the Breeze views in the assets folder or the views folder. These assets will have a parent folder called `auth` which you can remove. You'll want to remove the views and controllers that handle the Breeze authentication.

> You could always leave the views and controllers inside of your application and everything will still function correctly; however, for organization purposes and a cleaner structure you'll probably want to remove these unneccessary files.