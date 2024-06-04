---
title: Installation
description: The installation steps and process for adding DevDojo Auth package to your app.
prevTitle: 'Introduction'
prevURL: '/docs/getting-started'
prevSlug: 'getting-started'
slug: 'install'
nextTitle: 'Authentication Pages'
nextURL: '/docs/authentication-pages'
nextSlug: 'authentication-pages'
install: true
---

This package is compatible with any Laravel application (10.x or greater) and all available starter kits. Choose a guide above for a detailed installation walkthrough for your use case.

Below is the basic installation steps for most applications.

## 1. Install the Package

Install the package via composer

<include src="docs/install/code/composer-require.html"></include>

## 2. Publish the Files

Publish the assets, configs, ci workflow, and migrations:

<include src="docs/install/code/publish.html"></include>

## 3. Run Migrations

Run the database migrations:

<include src="docs/install/code/migrate.html"></include>

## 4. Extend the DevDojo User Model

<include src="docs/install/code/extend-model.html"></include>

## 5. Installation Complete

Now that everything is installed you'll be able to visit the auth setup route at `website.test/auth/setup`. You'll also have access to all the new <a href="{ url('/docs/authentication-pages') }">Authentication Pages</a>.

## Installing in an Existing Application

As long as your application meets the minimum requirements (Laravel 10 or higher), you'll be able to install DevDojo Auth in your existing application. The steps will be the same as above. You'll also want to remove your existing Authentication from your application to remove duplicate functionality. 

> It's possible to keep your existing authentication functionality to ensure everything works correctly; however, having multiple authentication paths may confuse your users.
