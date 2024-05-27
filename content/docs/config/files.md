---
title: Config Files
description: Learn about how DevDojo Auth uses configuration files to change and customize the authentication functionality
---


# Configuration Files

## Introduction

The DevDojo Auth package includes several configuration files that allow you to customize the authentication experience for your users. These configuration files are located in the `config/devdojo/auth` directory. When you visit the `/auth/setup` page, all the changes you make there will be reflected in these configuration files.

## Configuration Files Overview

### 1. appearance.php

This file allows you to customize the look and feel of the authentication pages.

#### Example Configuration:

```php
return [
    'logo' => '/path/to/logo.png',
    'background_color' => '#f8f9fa',
    'primary_color' => '#007bff',
    'font' => 'Roboto, sans-serif',
];
```

### 2. descriptions.php

This file contains descriptions used in the authentication process, allowing you to modify them as needed.

#### Example Configuration:

```php
return [
    'login' => 'Please enter your login credentials',
    'register' => 'Create a new account',
];
```

### 3. fields.php

Define custom fields for user registration and other forms in this configuration file.

#### Example Configuration:

```php
return [
    'registration' => [
        'username' => [
            'type' => 'text',
            'label' => 'Username',
            'required' => true,
        ],
        'phone' => [
            'type' => 'text',
            'label' => 'Phone Number',
            'required' => false,
        ],
    ],
];
```

### 4. language.php

Configure language settings and translations for your authentication pages.

#### Example Configuration:

```php
return [
    'default' => 'en',
    'available' => ['en', 'es', 'fr'],
];
```

### 5. pages.php

Manage the settings for the various authentication pages.

#### Example Configuration:

```php
return [
    'login' => [
        'title' => 'Login',
        'description' => 'Please login to your account',
    ],
    'register' => [
        'title' => 'Register',
        'description' => 'Create a new account',
    ],
];
```

### 6. providers.php

Set up third-party OAuth providers for social authentication.

#### Example Configuration:

```php
return [
    'google' => [
        'client_id' => env('GOOGLE_CLIENT_ID'),
        'client_secret' => env('GOOGLE_CLIENT_SECRET'),
    ],
    'facebook' => [
        'client_id' => env('FACEBOOK_CLIENT_ID'),
        'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
    ],
];
```

### 7. settings.php

General settings for the authentication package, including enabling features like two-factor authentication (2FA).

#### Example Configuration:

```php
return [
    '2fa' => [
        'enabled' => true,
        'secret_key_length' => 16,
    ],
];
```

## Making Changes via /auth/setup

When you visit the `/auth/setup` page, you can customize the various settings for the DevDojo Auth package. The changes you make on this page will be automatically reflected in the corresponding configuration files within the `config/devdojo/auth` directory.

### Example Workflow:

1. **Visit the `/auth/setup` Page:**
   Navigate to the `/auth/setup` page in your browser. Here, you will find options to customize the appearance, fields, language, and other settings for your authentication pages.

2. **Make Changes:**
   Adjust the settings according to your preferences. For example, you can change the logo, update the primary color, or enable additional registration fields.

3. **Save Changes:**
   Once you save your changes, they will be written to the corresponding configuration files in the `config/devdojo/auth` directory. For instance, if you update the primary color, this change will be reflected in the `appearance.php` file.

## Additional Information

### Environment Variables

For sensitive information such as API keys and client secrets, it is recommended to use environment variables. The DevDojo Auth package uses the `env` function to retrieve these values from your `.env` file.

### Example .env Configuration:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

### Customization Flexibility

The DevDojo Auth package provides a high level of customization flexibility through its configuration files. This allows you to tailor the authentication process to fit the specific needs of your application and users.

## Conclusion

By understanding and utilizing the configuration files provided by the DevDojo Auth package, you can easily customize and manage the authentication experience in your application. The `/auth/setup` page provides a user-friendly interface for making these changes, ensuring that your configurations are always up to date and reflecting your preferences.


