---
title: Github Action Workflow
description: DevDojo Auth ships with a Github action that can help gaurantee that your authentication is fully functional.
nextTitle: 'Authentication Events'
nextURL: '/docs/extend/events'
nextSlug: 'events'
slug: 'config/github-action'
prevTitle: 'Config Files'
prevURL: '/docs/config/files'
prevSlug: 'files'
---


# GitHub Action Workflow for DevDojo Auth Package

## Introduction

This package includes a GitHub Action workflow that helps you ensure your authentication is fully functional. This action will run every time you make a new pull request to be merged into the `main` branch. If all the checks pass in the workflow you know that your authentication is fully operational.

## Publish the CI Workflow File

In order to get the Github Action published to your project you will need to run the following command:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:ci</span></div>

This will place a new file located inside your application at `.github/workflows/auth.yml`

## Workflow Errors

If you receive Authentication errors when pushing new code you may want to run the tests locally so that way you can debug what is going on. Run the following command:

```
./vendor/bin/pest ./vendor/devdojo/auth/tests
```

This will attempt to run your tests locally.

## Troubleshooting

If you find an error in the CI workflow you may open an Issue on Github; however, if the issue is related directly to your specific setup we may end up closing the issue as it might be out of scope for the support we'll provide.