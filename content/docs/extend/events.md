---
title: Authentication Events
description: Learn how to tap into Login, Register, Verify, and PasswordReset events to customize and enhance your user authentication experience
prevTitle: 'Github Action'
prevURL: '/docs/config/github-action'
prevSlug: 'github-action'
slug: 'extend/events'
nextTitle: 'Custom Components'
nextURL: '/docs/extend/components'
nextSlug: 'components'
---


# Authentication Events

## Introduction

This package includes several events triggered during the authentication process. These events allow developers to integrate additional functionality when specific authentication-related activities occur.  If you are unfamiliar with events, be sure to checkout the official <a href="https://laravel.com/docs/11.x/events" target="_blank">Events Documentation</a>.

There are four events available, which include `Login`, `Register`, `Verify`, and `PasswordReset`.

## Available Events

### 1. Login

This event is fired when a user successfully logs in. This will be triggered in the main login page or from the Two-factor authentication page. Whenever a user is successfully logged in this event will fire.

```php
event(new Login(auth()->guard('web'), $user, true));
```

### 2. Register

This event is fired when a new user successfully registers.

```php
event(new Registered($user));
```

### 3. Verify

This event is fired when a user verifies their email address.

```php
event(new Verified($user));
```

### 4. PasswordReset

This event is fired when a user successfully resets their password.

```php
event(new PasswordReset($user));
```

## Creating Listeners

To create a listener for a specific event you can run the following artisan command:

```php
php artisan make:listener UserLoggedIn --event=Illuminate\\Auth\\Events\\Login
```

This will create a new file located at `app\Listeners\UserLoggedIn.php`, you can capture this event inside of the handle method. Here is an example below.

```php
<?php

namespace App\Listeners;

use Illuminate\Auth\Events\Login;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class UserLoggedIn
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(Login $event): void
    {
        $user = $event->user;
        // Perform any functionality to the user here...
    }
}
```

Here, you will be able to perform any type of functionality with the user before they are authenticated. You can do the same with the `Register`, `Verify` or `PasswordReset` functionality.

## Additional Events and Functionality

If you find yourself unable to add desired functionality to the authentication process, feel free to [Submit a PR](https://github.com/thedevdojo/auth/compare), or discuss it with us, and we'll help you find the best approach.