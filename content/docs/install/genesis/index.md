---
title: Installation with Genesis
description: Learn how to install DevDojo Auth with Genesis
prevTitle: 'Introduction'
prevURL: '/docs/getting-started'
prevSlug: 'getting-started'
slug: 'install/genesis/index'
nextTitle: 'Authentication Pages'
nextURL: '/docs/authentication-pages'
nextSlug: 'authentication-pages'
genesis: true
---


> In each of these installation steps we are assuming that you already have a local Laravel development running on your machine.

## 1. Create a new Genesis app

Start by creating a new Laravel application:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">laravel</span> <span class="text-green-400">new</span> <span class="text-yellow-400">project</span></div>

> For simplicity sake, go ahead and select `SQlite` as the database you would like to use. Otherwise, you'll need to create a new database an update the credentials in your .env

Be sure to change into the root directory of the project you just created `cd project`.

After creating a new Laravel application you can install Genesis with the following commands:

```
composer require devdojo/genesis dev-main
php artisan ui genesis
```

Next, be sure to compile your assets:

```
npm install && npm run dev
```

## 2. Install the Package

<include src="docs/install/code/composer-require.html"></include>

## 3. Publish the Assets, Configs, CI Workflow, and Migrations

<include src="docs/install/code/publish.html"></include>

## 4. Run the new Database Migrations

<include src="docs/install/code/migrate.html"></include>

## 5. Extend the DevDojo User Model

<include src="docs/install/code/extend-model.html"></include>

## 6. Enable the Name Field for Registration

As Genesis depends on the `name` field for registration, you'll want to enable this option in the setup page.

You can do that by visiting the `/auth/setup` route, clicking on `Settings`, and enabling the `Registration Include Name Field` option.

## 🎉 Installation Complete

You will now be able to visit all the Authentication Pages as well as the setup page, where you can modify the authentication functionality and appearance.
