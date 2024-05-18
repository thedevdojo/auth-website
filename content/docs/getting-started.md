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

## What is it?

DevDojo Auth is an open-source <a href="https://packagist.org/packages/devdojo/auth" target="_blank">composer package</a> that makes adding authentication to your Laravel app a breeze. Just drop it in, and you're ready to go!


<div class="flex items-center px-4 py-4 my-4 text-sm leading-[24px] border border-indigo-600 rounded-md">
<img class="!my-0 mr-3.5 w-auto h-12" src="{ url('/assets/images/docs/visual.png') }" />
<span>It provides all the essential functionality for the most common authentication features, and it also comes with a visual interface for modifying the appearance.</span>
</div>

## Why use it?

Below are a few problems and solutions that this package aims to offer.

<div x-data="{ 'showMore': true }" :class="{ 'border-red-600' : showMore, 'border-red-700' : !showMore }" class="mt-6 rounded-t-md border border-b-0 border-red-700 border-dashed bg-red-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-red-500' : showMore, '!text-red-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-red-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Problem: Broken Signup Process</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Ever written a line of code that breaks something else? It's even worse when you break the signup process, and users can't access your application.</p>
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
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">DevDojo Auth ships with a GitHub CI action that runs every time you push updates to your repo. This means you can gaurantee that the authentication process never breaks.</p>
        </div>
    </div>
</div>

<div x-data="{ 'showMore': false }" :class="{ 'border-red-600' : showMore, 'border-red-700' : !showMore }" class="mt-6 rounded-t-md border border-b-0 border-red-700 border-dashed bg-red-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-red-500' : showMore, '!text-red-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-red-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Problem: Time Consuming</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Making changes to your authentication process is time-consuming and takes away time that could have been spent building the actual application.</p>
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
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Install DevDojo Auth and you can easily make updates to your authentication in seconds. Add social providers, update the branding, and so much more.</p>
        </div>
    </div>
</div>

<div x-data="{ 'showMore': false }" :class="{ 'border-red-600' : showMore, 'border-red-700' : !showMore }" class="mt-6 rounded-t-md border border-b-0 border-red-700 border-dashed bg-red-950/30">
    <div class="flex items-start">
        <div class="relative w-full">
            <p x-on:click="showMore=!showMore" :class="{ '!text-red-500' : showMore, '!text-red-600' : !showMore }" class="!my-0 select-none cursor-pointer !px-5 !py-4 group text-base font-bold flex items-center">
            <svg :class="{ 'rotate-90' : showMore }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 scale-[0.98] group-hover:scale-100 ease-out duration-300 -translate-x-1 text-red-400"><path fill-rule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>
            <span>Problem: Poor User Experience</span></p>
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Authentication pages can tend to look very boring, or in some cases too busy, resulting in a poor user experience.</p>
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
            <p x-show="showMore" class="!my-0 p-5 pt-0 text-sm">Our package ships with beautiful and configurable authentication pages, which results in a great user experience.</p>
        </div>
    </div>
</div>

## How to use it?

DevDojo Auth works with any new Laravel application and it also works with the many available Laravel starter kits. Read-on to learn more about installing this package in your application.