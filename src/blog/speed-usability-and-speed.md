---
layout: "layouts/blog.njk"
title: "Speed, Usability and Speed"
date: 2017-10-14 11:22:28
description: "When looking at making UX improvements to web apps, I tend to obsess about speed and performance"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Speed, Usability and Speed"
wpid: "667"
---

When looking at making UX improvements to web apps, I tend to obsess about speed and performance. For me a fast experience is a good experience.

I really think that speed outweighs all other factors. If you can keep all loading and waiting times very short, ideally under a second, it keeps the user engaged and efficient in what they're trying to achieve. As soon as anything takes longer than a couple of seconds it's easy to let your mind wander, switch context and then take longer to get back into what you were doing. If this is happening lots of times across a lengthy session it really adds up, not to mention the frustration it causes.

Usability is obviously important too. It needs to be obvious what screen elements you can interact with - is that an underlined heading or a link? It needs to be clear what an interaction with that element will do. Unexpected behaviour makes people feel uneasy and suspicious about other potential interactions. And it's always good if the user can see how the whole piece fits together, how you get from A to B, B to C, etc.

The usual causes of things being slow are not network issues but bad design. The most common problem is simply trying to send too much too soon. Requirements often ask for a high number of items to be displayed with a high level of detail against each. It's always worth asking if this can be broken down to show fewer items or less detail with more being available on demand.

If a screen lists 20 items with all their details and it's taking 5 seconds to load we still don't have to load it all at once. Rather than the user waiting for 5 seconds, why not just load the first 3 items quickly, so the user has something to see within a more acceptable time frame (before the mind wanders), and then load the other 17 in the background while the first 3 are keeping them occupied.

Even if your app is working at acceptable speeds if you haven't already done so you should still try to make it faster. Use a strategy for how you're going to load new data and use the usual performance tricks - caching, bundling, minification, pre-fetching - to really give the UX a boost.
