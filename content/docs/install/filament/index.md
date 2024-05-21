---
title: Installation with Filament
description: Learn how to install DevDojo Auth with Filament
prevTitle: 'Introduction'
prevURL: '/docs/getting-started'
prevSlug: 'getting-started'
slug: 'install'
nextTitle: 'Authentication Pages'
nextURL: '/docs/authentication-pages'
nextSlug: 'authentication-pages'
filament: true
---

In this installation page we'll show you the steps to install Auth inside of a new <a href="https://filamentphp.com" target="_blank">Filament application</a>.

## 1. Create a new Filament application

After creating a blank new Laravel application, you'll want to follow the [Filament install guides here](https://filamentphp.com/docs/3.x/panels/installation#installation). This will get you up and running with a default Filament application.

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