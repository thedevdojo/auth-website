---
title: Email Template
description: Learn how to edit the email template to add your own logo and style
nextTitle: 'Config Files'
nextURL: '/docs/config/files'
nextSlug: 'files'
slug: 'config/email'
prevTitle: 'Two-Factor Auth'
prevURL: '/docs/config/two-factor-auth'
prevSlug: 'two-factor-auth'
---

# Email Template Design

When an **Email Verification** or a **Password Reset Email** is sent to your users, you may want the branding of the email to show your logo. This is how you can do that.

## Publish the Laravel email templates

First step is to publish our email templates to our resources folder. We can do that by running:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=laravel-mail</span>
</div>

After, you run this command you'll have a few new files located inside of `resources/views/vendor/mail`.

## Add Your Logo

Inside of the file located at `resources/views/vendor/mail/html/header.blade.php`, you'll see a few lines that look like this:

```php
@if (trim($slot) === 'Laravel')
<img src="https://laravel.com/img/notification-logo.png" class="logo" alt="Laravel Logo">
@else
{{ $slot }}
@endif
```

You can replace this with an `<img>` to your logo, or you can add an `<svg>` of your logo in this place. Alternatively, you can use the same logo you've added in the Auth setup by replacing those lines with this:

```php
<x-auth::elements.logo
    :height="config('devdojo.auth.appearance.logo.height')"
    :isImage="(config('devdojo.auth.appearance.logo.type') == 'image')"
    :imageSrc="config('devdojo.auth.appearance.logo.image_src')"
    :svgString="config('devdojo.auth.appearance.logo.svg_string')"
/>
```

Now, when you change the logo in the Auth setup, it will also be updated across all your email views.

> **NOTE:** With Genesis, you will see the `resources/views/vendor/mail/html/header.blade.php` file has already been published. In this starter kit, you will replace the `<x-ui.logo></x-ui.logo>` component with the `<x-auth::elements.logo />` component from the code above.

## Additional customization

You can feel free to update any of the additional files inside of `resources/views/vendor/mail` to change the design of your emails. To preview your emails more easily, you might consider using the [Spatie Laravel Mail Preview Package](https://github.com/spatie/laravel-mail-preview).