---
title: Install with a New Laravel App
description: Learn how to install DevDojo Auth with-in a new Laravel app
laravel: true
---

> In each of these installation steps we are assuming that you already have a local laravel development running on your machine.

## 1. Create a new Laravel app

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">laravel</span> <span class="text-green-400">new</span> <span class="text-yellow-400">project</span></div>

> For simplicity sake, go ahead and select `SQlite` as the database you would like to use. Otherwise, you'll need to create a new database an update the credentials in your .env

Be sure to change into the root directory of the project you just created `cd project`

## 2. Install the Package

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">composer</span> <span class="text-green-400">require</span> <span class="text-yellow-400">devdojo/auth</span></div>

## 3. Publish the Assets, Configs, CI Workflow, and Migrations

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:assets</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:config</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:ci</span>
<span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:migrations</span>
</div>

## 4. Run the new Database Migrations

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">migrate</span></div>

## 🎉 Installation Complete

You will now be able to visit all the Authentication Pages as well as the setup page, where you can modify the authentication functionality and appearance.
