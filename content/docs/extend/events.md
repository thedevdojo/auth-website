---
title: Authentication Events
description: Learn how to tap into Login, Register, Verify, and PasswordReset events to customize and enhance your user authentication experience
---


# Authentication Events

## Introduction

The DevDojo Auth package provides several events that are fired during the authentication process. These events allow developers to tap into the functionality and perform additional actions when specific authentication-related activities occur. The events include `Login`, `Register`, `Verify`, and `PasswordReset`.

## Available Events

### 1. Login

This event is fired when a user successfully logs in.

### 2. Register

This event is fired when a new user successfully registers.

### 3. Verify

This event is fired when a user verifies their email address.

### 4. PasswordReset

This event is fired when a user resets their password.

## Using Events

To listen for these events and perform additional actions, you need to register event listeners in your application. You can do this in the `EventServiceProvider` of your Laravel application.

### Example: Adding a Default Role to New Users

Let's say you have added a new column called `role` to your `users` table, and you want to assign a default role of `editor` to all new users who register.

### Step 1: Create a Migration for the `role` Column

First, create a migration to add the `role` column to your `users` table.

```bash
php artisan make:migration add_role_to_users_table --table=users
```

In the generated migration file, add the `role` column:

```php
public function up()
{
    Schema::table('users', function (Blueprint $table) {
        $table->string('role')->default('editor');
    });
}
```

Run the migration:

```bash
php artisan migrate
```

### Step 2: Create an Event Listener

Next, create an event listener to assign the default role to new users. You can use the `php artisan make:listener` command to create a listener.

```bash
php artisan make:listener AssignDefaultRole
```

In the generated listener file, handle the `Register` event:

```php
namespace App\Listeners;

use DevDojo\Auth\Events\Register;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class AssignDefaultRole
{
    public function __construct()
    {
        //
    }

    public function handle(Register $event)
    {
        $user = $event->user;
        $user->role = 'editor';
        $user->save();
    }
}
```

### Step 3: Register the Event Listener

Finally, register the event listener in your `EventServiceProvider`.

```php
namespace App\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use DevDojo\Auth\Events\Register;
use App\Listeners\AssignDefaultRole;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        Register::class => [
            AssignDefaultRole::class,
        ],
    ];

    public function boot()
    {
        parent::boot();
    }
}
```

## Additional Information

### Listening for Other Events

You can follow a similar process to listen for the `Login`, `Verify`, and `PasswordReset` events. Just create appropriate listeners and register them in the `EventServiceProvider`.

### Example: Listening for Login Event

```php
php artisan make:listener LogSuccessfulLogin
```

In the generated listener file, handle the `Login` event:

```php
namespace App\Listeners;

use DevDojo\Auth\Events\Login;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class LogSuccessfulLogin
{
    public function __construct()
    {
        //
    }

    public function handle(Login $event)
    {
        \Log::info('User logged in: ', ['user' => $event->user]);
    }
}
```

Register the listener:

```php
protected $listen = [
    Login::class => [
        LogSuccessfulLogin::class,
    ],
];
```

### Conclusion

By utilizing the events provided by the DevDojo Auth package, you can easily extend the functionality of your authentication system and perform custom actions based on user activity. This flexibility allows you to tailor the authentication process to fit the specific needs of your application.

