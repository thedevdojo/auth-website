---
title: Config Files
description: Learn about how DevDojo Auth uses configuration files to change and customize the authentication functionality
prevTitle: 'Email Template'
prevURL: '/docs/config/email'
prevSlug: 'email'
slug: 'config/files'
nextTitle: 'Github Action'
nextURL: '/docs/config/github-action'
nextSlug: 'github-action'
---


# Configuration Files

## Introduction

Several configuration files are included in this package. They allow you to customize the authentication experience for your users. These configuration files are located in the `config/devdojo/auth` directory. When you visit the `/auth/setup` page, all the changes you make there will be reflected in these configuration files.

## Configuration Files Overview

### 1. appearance.php

This file allows you to customize the look and feel of the authentication pages. You may manually modify this file if you would like to make any updates, but it's easier to make those changes from the Auth Setup page.

### 2. language.php

This file contains the language copy that will be used throughout your authentication. You can modify the tone of your copy to sound more like you.

### 3. providers.php

This is a list of all the available providers you can include in your authentication. When you toggle the network on/off it will change the `active` value to true/false and will show/hide that network in your authentication.

If you see some additional providers available from the <a href="https://socialiteproviders.com/" target="_blank">Socialite Providers website</a>, but it's not listed in this config. You may manually add it to the array and it will show up in the Auth Setup page allowing you to enable/disable that social network.

### 4. settings.php

This file contains settings that will change the way your authenticaiton functions.

> You'll also notice a descriptions.php file, which is only used internally in the Auth Setup pages, so this file can be ignored on your part.

Remember, you can make modifications to these configs manually or via the Auth Setup, but it's probably best practice to modify it in the setup page to prevent any conflicts from future releases.


