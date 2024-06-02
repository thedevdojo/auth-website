---
title: Two-Factor Authentication
description: Learn about Two-Factor Auth and how to enable it for your application.
prevTitle: 'Social Providers'
prevURL: '/docs/config/social-providers'
prevSlug: 'social-providers'
slug: 'two-factor-auth'
nextTitle: 'Email Template'
nextURL: '/docs/config/email'
nextSlug: 'email'


---

# Using Two-Factor Authentication (2FA)

## Introduction

Two-factor authentication (2FA) adds an extra layer of security to user accounts. The DevDojo Auth package provides built-in support for 2FA, allowing site creators to enhance the security of their application by requiring users to provide a second form of authentication.

## Site-Owner Enable/Disable

The site owner can choose to enable 2FA site-wide or keep it disabled. There is a toggle button in the Auth Setup page that will allow you to enable/disable site-wide. If it's disabled users will not be given the option to add 2FA; however, if it's enabled the user will be allowed to add 2FA to their account.

### User-Level Activation

If 2FA is activated site-wide, users will have the option to enable 2FA for their individual accounts. They can visit the `/user/two-factor-authentication` page to set up 2FA. This page will guide them through the process of setting up 2FA using an authenticator app like Google Authenticator.

<img src="{ url('/assets/images/2fa-setup.jpg') }" class="w-full h-auto rounded-md" />

If you are using Jetstream, the users will have the availability to enable/disable 2FA from their profile page.


### Logging In with 2FA

After 2FA is activated, users will be prompted to enter an authentication code after they log in. They can generate this code using their authenticator app.

