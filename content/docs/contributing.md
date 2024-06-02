---
title: Contributing
description: Want to make some contributions. Learn more here.
prevTitle: 'Custom Components'
prevURL: '/docs/extend/components'
prevSlug: 'components'
slug: 'contributing'
nextTitle: 'Troubleshooting'
nextURL: '/docs/troubleshooting'
nextSlug: 'troubleshooting'
---

# Contributing

We welcome all new contributions to this project. If you would like to contribute to this package it will probably be helpful to learn how to setup a local version for working on the DevDojo Auth package.

## Local Dev Version

To get a local development version of Devdojo Auth Package up and running, follow these steps:

- Create a new Laravel application
- Create a new folder at the root called `packages`
- Inisde the packages folder will be `devdojo/auth` where auth will be the contents of this repo
- Update your composer.json to include `devdojo/auth` inside the `repositories` key, and include `devdojo/auth` inside the `require` key, like so:

**composer.json example**

```
{
    ...
    "require": {
        ...
        "devdojo/auth": "*"
    }
    ...
    "repositories": [
        {
            "type" : "path",
            "url" : "./packages/devdojo/auth"
        }
    ],
    "minimum-stability": "dev"
}
```

> You'll also need to set the stability to `dev` in the composer.json

Then, run `composer update`. Next, we need to create two symlinks

### Create Symlinks

The first symlink is a symlink to get our tests working. From the root directory, delete the current `tests` folder and create the following symlink

```
ln -s packages/devdojo/auth/tests tests 
```

The second symlink will link our package public directory so we can see our CSS and JS changes.

```
cd public
ln -s ../packages/devdojo/auth/public auth
```

Finally, we need to install the package dependencies and start our asset watcher.

### Run Asset Watcher

From the `packages/devdojo/auth` directory you'll need to install the node dependencies by running:

```shell
npm install
```

Next, we want to watch for our changes while we are developing:

```shell
npm run dev
```

### Time to Build

That's it! You should now have a local development version of the DevDojo Auth package running on your machine.

--

## The Usual Etiquette

Keep in mind that this project is open source, and as such, the people who help build this project are giving their free time to build and maintain this package. It is made freely available in the hope that it will be of use to other developers. Please be considerate when raising issues or presenting pull requests. Let's show the world that developers are civilized and selfless people.