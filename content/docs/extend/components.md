---
title: Custom Components
description: Learn how to override the authentication page components to take full control of how your authentication pages feel and function.
---

# Custom Components

## Introduction

The DevDojo Auth package allows you to customize its components by providing your own versions. This gives you the flexibility to tailor the authentication experience to fit your application's design and requirements. By adding your own Blade components, you can override the default components provided by the package.

## Creating Custom Components

### Step 1: Publish the Default Components

To start with the current components from the Auth package, you can publish them to your application's `resources/views/components/auth` directory.

```bash
php artisan vendor:publish --tag=auth:components
```

This command will publish the default components to `resources/views/components/app/elements`.

### Step 2: Create the Custom Component

Create a Blade file for your custom component in the `resources/views/components/app/elements` directory. For example, to customize the button component, create the following file:

```
resources/views/components/app/elements/button.blade.php
```

### Example Custom Button Component

```blade
<button {{ $attributes->merge(['class' => 'custom-button-class']) }}>
    {{ $slot }}
</button>
```

### Step 3: Register the Custom Component

To make sure your custom components are used instead of the default ones, you need to register the custom components in your `AppServiceProvider`.

#### Example `AppServiceProvider`:

```php
namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        //
    }

    public function boot()
    {
        Blade::component('components.app.elements.button', 'auth::elements.button');
        // Add more components as needed
    }
}
```

### Step 4: Use the Custom Component

In your Blade views, use the custom component as follows:

```blade
<x-auth::elements.button>
    Click Me
</x-auth::elements.button>
```

This will render the custom button component you created.

## Additional Information

### Customizing Other Components

You can follow the same process to customize other components provided by the DevDojo Auth package. Simply publish the components, create your custom versions, and register them in your `AppServiceProvider`.

### Example: Custom Input Component

1. **Publish the default input component:**

   ```bash
   php artisan vendor:publish --tag=auth:components
   ```

2. **Create a custom input component:**

   ```
   resources/views/components/app/elements/input.blade.php
   ```

3. **Example custom input component:**

   ```blade
   <input {{ $attributes->merge(['class' => 'custom-input-class']) }}>
   ```

4. **Register the custom input component in `AppServiceProvider`:**

   ```php
   Blade::component('components.app.elements.input', 'auth::elements.input');
   ```

5. **Use the custom input component:**

   ```blade
   <x-auth::elements.input type="text" name="username">
   ```

## Conclusion

By following these steps, you can easily customize the components of the DevDojo Auth package to fit your application's needs. This flexibility allows you to maintain a consistent design and user experience across your application.
