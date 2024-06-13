---
title: Installation with Filament
description: Learn how to install DevDojo Auth with Filament
prevTitle: 'Introduction'
prevURL: '/docs/getting-started'
prevSlug: 'getting-started'
slug: 'install/filament/index'
nextTitle: 'Authentication Pages'
nextURL: '/docs/authentication-pages'
nextSlug: 'authentication-pages'
filament: true
---

In this installation page we'll show you the steps to install Auth inside of a new <a href="https://filamentphp.com" target="_blank">Filament application</a>.

## 1. Create a new Filament application

After creating a new Laravel application, you'll want to follow the <a href="https://filamentphp.com/docs/3.x/panels/installation#installation" target="_blank">Filament install guides here</a>. This will get you up and running with a new Filament application.

After installing Filament we can go through the basic install steps:

## 2. Install the Package

Install the Auth package via composer

<include src="docs/install/code/composer-require.html"></include>

## 3. Publish the Files

Publish the assets, configs, ci workflow, and migrations:

<include src="docs/install/code/publish.html"></include>

## 4. Run Migrations

Run the database migrations:

<include src="docs/install/code/migrate.html"></include>

## 5. Extend the DevDojo User Model

<include src="docs/install/code/extend-model.html"></include>

## Enable the Name Field for Registration

The Filament admin panel utilizes the user `name` field, you'll want to enable this option in the setup page.

You can do that by visiting the `/auth/setup` route, clicking on `Settings`, and enabling the `Registration Include Name Field` option.

---

That's it! DevDojo Auth package is now successfully installed in your Filament application.