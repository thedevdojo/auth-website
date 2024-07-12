---
title: Authentication Pages
description: The features provided by DevDojo Auth
prevTitle: 'Installation'
prevURL: '/docs/install'
prevSlug: 'install'
slug: 'authentication-pages'
nextTitle: 'Setup & Customizations'
nextURL: '/docs/setup-customizations'
nextSlug: 'setup-customizations'
authenticationPages: true
---

DevDojo Auth contains many pages that provide functionality for the most common authentication use cases. Below is a preview and overview of all the available authentication pages.

## Login

The Login Page. Visit this page at **/auth/login**

<include src="docs/auth-page-image.html" page="login"></include><div class="p-5 rounded-b-lg border text-zinc-300 bg-zinc-900 border-zinc-700">
    The login page is where a user can enter their email address and password and be authenticated in your application. You may optionally choose to show social provider links on this page.
</div>

## Register

The Register Page. Visit this page at **/auth/register**

<include src="docs/auth-page-image.html" page="register"></include><div class="p-5 rounded-b-lg border text-zinc-300 bg-zinc-900 border-zinc-700">The registration page is where a user can sign up for a new account. Additionally, you can require users to provide their full name and allow them to register from any <a href="{ url('/docs/config/social-providers') }">Social Provider</a>.
</div>

## Verify Email

The Email Verification Page. Visit this page at **/auth/verify**

<include src="docs/auth-page-image.html" page="verify"></include><div class="p-5 rounded-b-lg border text-zinc-300 bg-zinc-900 border-zinc-700">By default users are not required to verify their email. Toggle the <strong>Registration Require Email Verification</strong> option in the settings to show this screen after account creation.</div>

## Password Confirmation

The Password Confirmation Page. Visit this page at **/auth/confirm**

<include src="docs/auth-page-image.html" page="confirm"></include><div class="p-5 rounded-b-lg border text-zinc-300 bg-zinc-900 border-zinc-700">Add the <strong>password.confirm</strong> middleware to any page, and users will be required to confirm their password before gaining access to the page.</div>

## Password Reset Request

The Password Reset Request Page. Visit this page at **/auth/password/reset**

<include src="docs/auth-page-image.html" page="password-reset-request"></include><div class="p-5 rounded-b-lg border text-zinc-300 bg-zinc-900 border-zinc-700">This page allows users to reset their password after clicking the reset link sent to their email.</div>

## Password Reset

The Password Reset Page. Visit this page at **/auth/password/ReAlLyLoNgToKeNhErE**

<include src="docs/auth-page-image.html" page="password-reset"></include><div class="p-5 rounded-b-lg border text-zinc-300 bg-zinc-900 border-zinc-700">This is the actual password reset page. When the user clicks a link from their email to reset their password, this is the page they will see, allowing them to reset their password.</div>

## Two-Factor Challenge

The Two-Factor Authentication Challenge Page. Visit this page at **/auth/two-factor-challenge**

<include src="docs/auth-page-image.html" page="two-factor"></include><div class="p-5 rounded-b-lg border text-zinc-300 bg-zinc-900 border-zinc-700">If you are using 2FA and the user has enabled 2FA for their account, this is the page they will see after attempting to log in. Learn more about <a href="{ url('/docs/config/two-factor-auth') }">Two-Factor Authentication here</a>.</div>

## Two-Factor Setup

If you are not utilizing Jetstream, you'll want a way for users to enable two-factor authentication. You can do this by directing users to `/user/two-factor-authentication` or you can iframe this page into your app.

## Logout

You may also visit the `/auth/logout` route to logout and clear the user session.

---

Next, lets dive into the customizations you can implement in your authentication pages.
