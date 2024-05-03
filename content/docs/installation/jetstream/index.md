---
title: Installation with Jetstream
description: Learn how to install DevDojo Auth with Jetstream
---

First you'll need to create a new jetstream application.

## Create a new Jetstream application

If you are using the Laravel installer, you may be prompted to install a starter kit. In this prompt you can select `Laravel Jetstream` to install the Jetstream starter kit. Alternatively, if you're in a new Laravel app you can install Jetstream by [following the installation steps here](https://jetstream.laravel.com/installation.html). 

## Install the Auth Package

After you've created a new Jetstream app you'll want to require the auth package by running:

```
composer require devdojo/auth
```

Next, you'll need to run the Auth migrations. Learn more about the [Auth Migrations here](/docs/migrations)

```
php artisan migrate
```

Finally, you'll want to publish the front-end assets for the DevDojo auth pages, by running the following command:

```
php artisan vendor:publish --tag=auth:assets
```

> Notice:
> If you are trying to override the assets you may need to add the `--force` flag. Running the following command will gauarantee that you have the latest assets:
>
> ```
> php artisan vendor:publish --tag=auth:assets --force
> ```

