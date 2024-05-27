---
title: Social Providers
description: Allow users to authenticate with many Social Providers
---


# Social Authentication Integration

## Introduction

The DevDojo Auth package supports integration with various social authentication providers like Google, Facebook, and Twitter. This allows users to log in using their social media accounts, making the authentication process more convenient and secure.

## Setting Up Social Providers

To enable social authentication, follow these steps:

### 1. Retrieve Client Credentials

For each social provider you want to enable, you need to retrieve the `CLIENT_ID` and `CLIENT_SECRET`. These credentials are provided by the social platform when you register your application with them.

#### Example:

- **Google:**
  - Go to the [Google Developers Console](https://console.developers.google.com/).
  - Create a new project or select an existing project.
  - Navigate to the **Credentials** page.
  - Click on **Create Credentials** and select **OAuth 2.0 Client IDs**.
  - Follow the steps to configure the consent screen and application.
  - Retrieve your `CLIENT_ID` and `CLIENT_SECRET`.

- **Facebook:**
  - Go to the [Facebook Developers](https://developers.facebook.com/) site.
  - Create a new app or select an existing app.
  - Navigate to **Settings** > **Basic**.
  - Retrieve your `App ID` (CLIENT_ID) and `App Secret` (CLIENT_SECRET).

### 2. Configure Providers

Add your provider credentials to the `.env` file. The credentials will be retrieved from the environment variables and used in the `config/devdojo/auth/providers.php` file.

#### Example .env Configuration:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

### 3. Enable Providers in Setup Page

After adding the credentials to the `.env` file, you need to enable them in the setup page of your application. This will activate the social providers and make them available for user authentication.

### 4. Visual Indicators

In the setup screen, you will see a list of social providers with key icons next to them:

- **Green Key Icon:** Indicates that the `CLIENT_ID` and `CLIENT_SECRET` have been correctly configured for the provider.
- **Red Key Icon:** Indicates that the `CLIENT_ID` and `CLIENT_SECRET` are missing or incorrect.

Make sure to configure the credentials properly to ensure the icons turn green, indicating that the provider is correctly set up.

### 5. Update Routes

To handle social authentication routes, update your application's routes file to include the necessary routes for social authentication.

#### Example Routes:

```php
use DevDojo\Auth\Http\Controllers\SocialController;

Route::get('login/{provider}', [SocialController::class, 'redirect']);
Route::get('login/{provider}/callback', [SocialController::class, 'callback']);
```

### 6. Controller Methods

The `SocialController` contains methods to handle the redirection to the social provider and the callback after authentication.

#### Example Controller Methods:

```php
namespace DevDojo\Auth\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        $user = Socialite::driver($provider)->user();
        // Handle user information and login
    }
}
```

### 7. Handling User Information

Once the user is authenticated via a social provider, you can handle the user information returned by the provider. This typically involves creating a new user account or updating an existing account with the information provided.

#### Example Handling:

```php
public function callback($provider)
{
    $socialUser = Socialite::driver($provider)->user();

    $user = User::updateOrCreate(
        ['provider_id' => $socialUser->getId()],
        [
            'name' => $socialUser->getName(),
            'email' => $socialUser->getEmail(),
            'avatar' => $socialUser->getAvatar(),
            'provider' => $provider,
        ]
    );

    Auth::login($user, true);

    return redirect()->intended('/home');
}
```

### 8. Testing Social Authentication

After setting up and configuring your social providers, it's crucial to test the authentication process to ensure everything works correctly. Try logging in with each configured social provider and verify that the process completes successfully.

### Conclusion

By following these steps, you can enable social authentication in your application using the DevDojo Auth package. Properly configured social authentication provides a seamless login experience for your users and enhances the security of your application.


