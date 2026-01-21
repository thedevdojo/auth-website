---
title: Social Providers
description: Allow users to authenticate with many Social Providers
prevTitle: 'Setup & Customizations'
prevURL: '/docs/setup-customizations'
prevSlug: 'setup-customizations'
slug: 'config/social-providers'
nextTitle: 'Two Factor Auth'
nextURL: '/docs/config/two-factor-auth'
nextSlug: 'two-factor-auth'
---


# Social Authentication Integration

## Introduction

Auth supports out-of-the-box social authentication. This will allows your users to login/register using their social media accounts.

## Included Providers

The following providers are included by default and ready-to-use (after adding credentials):

 - Facebook
 - Twitter
 - LinkedIn
 - Google
 - GitHub
 - GitLab
 - Bitbucket
 - Slack

These are all part of <a href="">Laravel Socialite</a>. If you want to use additional providers that are not listed above, you'll need to install another package called <a href="https://socialiteproviders.com/" target="_blank">Socialite Providers</a>.

## Socialite Providers Package

<a href="https://socialiteproviders.com/" target="_blank">Socialite Providers</a> is a third-party package available at <a href="https://socialiteproviders.com/" target="_blank">https://socialiteproviders.com/</a>. This package includes a ton of providers. You will need to install a package for each provider you want to include. For instance, if you want to use the <a href="https://socialiteproviders.com/Apple/" target="_blank">Apple Service provider</a>, you will need to <a href="https://socialiteproviders.com/Apple/" target="_blank">install the package here</a>.

After installing the socialite providers you want to use, you can then move on to the rest of the setup.


## Setting Up Social Providers

To setup a specific social auth provider, you will need to retrieve two keys for each. The `CLIENT_ID` and the `CLIENT_SECRET`. These credentials can be retrieved from each social network and each network has a different process for retrieving these keys. We will not go into detail on how to retrieve these keys; however, you can do a search for `Setting up oAuth with network` and you should find steps that will help you retrieve each of these.

## Add keys to your .env

When you have your `CLIENT_ID` and `CLIENT_SECRET` for each social provider, you will need to open your `.env` file and add those credentials, like so:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

FACEBOOK_CLIENT_ID=your-facebook-client-id
FACEBOOK_CLIENT_SECRET=your-facebook-client-secret
```

The example above is what it would look like to add your social authentication with `GOOGLE` and `FACEBOOK`.

## Add callback URL in your provider's dashboard

Combine your `app url` with the `callback uri`: `/auth/{driver}/callback`

Examples:
- `http://localhost:8000/auth/google/callback`
- `http://localhost:8000/auth/facebook/callback`
  
This will register the callback route as a valid route for your provider and will prevent errors like `redirect_uri is not associated with this application.`

### Visual Indicators

In the setup screen, you will see a list of social providers with key icons next to them:

<img src="{ url('/assets/images/social-providers-screen.jpg') }" class="w-full h-auto rounded-md" />

- **Green Key Icon:** Indicates that the `CLIENT_ID` and `CLIENT_SECRET` have been added.
- **Red Key Icon:** Indicates that the `CLIENT_ID` and `CLIENT_SECRET` are missing.

### Testing Out Social Authentication

After you add the `CLIENT_ID` and `CLIENT_SECRET` for the social providers you'll then be able to toggle that social provider and see it on the Login/Register pages.

If everything is setup correctly, you'll be able to click the Social Provider button and be authenticated with that user/network.

Remember that everything needs to be setup correctly. In the social network setup page you'll need to make sure your local URL's are included correctly, even and HTTPS/HTTP mis-match can break the social authentication functionality.

## Show Social Providers on Login:

Inside of your authentication setup page, you will see an option titled: **Login Show Social Providers**. If this is toggled off, the social provider buttons will not be visible by default. If a user then enters their email and it's associated with a social network, that network button will show up in place of the Email/Identifer input.
