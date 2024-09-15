---
title: Troubleshooting
description: Troubleshooting Tips and Tricks
prevTitle: 'Contributing'
prevURL: '/docs/contributing'
prevSlug: 'contributing'
slug: 'troubleshooting'
---

# Troubleshooting

If you are trying to troubleshoot an issue or having problems getting something to function correctly, here are a few tips and tricks that might help you out.

## Force Publish the Configs

> This will overwrite your current configs

You may find yourself needing to reset the configurations for your Authentication, in that case you will probably want to force publish the configurations with the following command:

<div class="p-5 font-mono whitespace-break-spaces bg-white/[6%] rounded-xl border border-white/[8%]"><span class="text-pink-400">php</span> <span class="text-green-400">artisan</span> <span class="text-yellow-400">vendor:publish</span> <span class="text-[#b4fd4f]">--tag=auth:config</span> <span class="text-red-400">--force</span>
</div>

# Imagick Extension

In order to use the 2FA QR code image, you need to install the Imagick extension as well as install it via composer: `composer require ext-imagick`. This was originally added by default in <a href="https://github.com/thedevdojo/auth/pull/90" target="_blank">this PR</a>; however, it's best to only include it if needed.

