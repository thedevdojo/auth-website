---
title: Installation
description: The installation steps and process for adding DevDojo Auth package to your app.
install: true
---

This package is compatible with any new Laravel application and most of the available starter kits. Select one of the guides above to walk through a detailed installation guide for your use-case.

Below is the basic installation steps for most applications.

## 1. Install the Package

Install the package via composer

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">composer</span> <span class="text-green-400">require</span> <span class="text-yellow-400">devdojo/auth</span></div>

## 2. Publish the Files

Publish the assets, configs, ci workflow, and migrations:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:assets</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:config</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:ci</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:migrations</span>
</div>

## 3. Run Migrations

Run the database migrations:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">migrate</span></div>

## Ready-to-go

You're now ready to go! You can visit the auth setup route at `website.test/auth/setup` or any of the following authentication URL's:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]">- <span class="text-green-400">/auth/login</span>
- <span class="text-green-400">/auth/register</span>
- <span class="text-green-400">/auth/verify</span>
- <span class="text-green-400">/auth/two-factor-challenge</span>
- <span class="text-green-400">/auth/password/confirm</span>
- <span class="text-green-400">/auth/password/reset</span>
- <span class="text-green-400">/auth/password/ReAlLyLoNgToKeNhErE</span>
</div>

If 2FA is enabled, users will have access to the following route:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]">- <span class="text-green-400">/user/two-factor-authentication</span></div>