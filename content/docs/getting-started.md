---
title: Getting Started with Static
description: This is the introduction and getting started seciton of the Static documentation.
slug: 'getting-started'
nextTitle: 'Installation'
nextURL: '/docs/install'
nextSlug: 'install'
prevTitle: null
prevURL: null
home: true
---

DevDojo Auth is an open-source <a href="https://packagist.org/packages/devdojo/auth" target="_blank">composer package</a> that makes adding authentication to your Laravel app a breeze. Just drop it in, and you're ready to go!

## Quick Start

After [installation](/docs/install), visit **/auth/setup** to customize and modify your authentication.

<img src="{ url('/assets/images/setup-screen-bg.jpg') }" class="w-full h-auto rounded-md" />

After DevDojo Auth is installed you'll be able to visit these <a href="{ url('/docs/authentication-pages') }">Authentication Pages</a>.

## Why use it?

Below are a few problems and solutions that this package aims to offer.

<div x-data="{ 'showMore': true }" :class="{ 'border-red-600' : showMore, 'border-red-700' : !showMore }" class="mt-6 rounded-t-md border border-b-0 border-red-700 border-dashed bg-red-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-red-500' : showMore, '!text-red-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-red-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Problem: Broken Signup Process</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">You write code, it accidentially breaks the authetication and users cannot access your app.</p>
        </div>
    </div>
</div>
<div class="w-full h-px border-b border-dashed border-zinc-200/40"></div>
<div x-data="{ 'showMore': true }" :class="{ 'border-green-600' : showMore, 'border-green-700' : !showMore }" class="rounded-b-md border border-t-0 border-dashed -translate-y-px bg-green-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-green-500' : showMore, '!text-green-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold  flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-green-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Solution: Fully Tested Authentication</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">You write code, and our GitHub CI action runs ensuring authentication is fully functional.</p>
        </div>
    </div>
</div>

<div x-data="{ 'showMore': false }" :class="{ 'border-red-600' : showMore, 'border-red-700' : !showMore }" class="mt-6 rounded-t-md border border-b-0 border-red-700 border-dashed bg-red-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-red-500' : showMore, '!text-red-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-red-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Problem: Time Consuming</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Updating authentication functionality wastes valuable development time.</p>
        </div>
    </div>
</div>
<div class="w-full h-px border-b border-dashed border-zinc-200/40"></div>
<div x-data="{ 'showMore': false }" :class="{ 'border-green-600' : showMore, 'border-green-700' : !showMore }" class="rounded-b-md border border-t-0 border-dashed -translate-y-px bg-green-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-green-500' : showMore, '!text-green-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold  flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-green-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Solution: Time-Saving</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Use DevDojo Auth to easily make updates to your authentication in seconds.</p>
        </div>
    </div>
</div>

<div x-data="{ 'showMore': false }" :class="{ 'border-red-600' : showMore, 'border-red-700' : !showMore }" class="mt-6 rounded-t-md border border-b-0 border-red-700 border-dashed bg-red-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-red-500' : showMore, '!text-red-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-red-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Problem: Poor User Experience</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Authentication pages can be boring, or too busy, resulting in a poor user experience.</p>
        </div>
    </div>
</div>
<div class="w-full h-px border-b border-dashed border-zinc-200/40"></div>
<div x-data="{ 'showMore': false }" :class="{ 'border-green-600' : showMore, 'border-green-700' : !showMore }" class="rounded-b-md border border-t-0 border-dashed -translate-y-px bg-green-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-green-500' : showMore, '!text-green-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold  flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-green-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Solution: Beautiful User Experience</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Use DevDojo Auth to provde a beautiful and seamless authentication experience.</p>
        </div>
    </div>
</div>

## How to use it?

DevDojo Auth works with any new Laravel application and it also works with the many available Laravel starter kits. Read-on to learn more about installing this package in your application.