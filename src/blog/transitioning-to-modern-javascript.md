---
layout: "layouts/blog.njk"
title: "Transitioning to Modern JavaScript"
date: 2021-01-05 17:00:00
description: ""
tags: ["blog", "tech"]
eleventyNavigation:
  key: "Transitioning to Modern JavaScript"
---

This is the title of a video from the December 2020 Chrome Dev Summit.
[https://www.youtube.com/watch?v=cLxNdLK--yI](https://www.youtube.com/watch?v=cLxNdLK--yI)

Below is a summary of the main points from the video.

"Modern" JavaScript is defined as JavaScript supported in modern browsers. Basically all but IE11.

## Problems

On average, 95% of users use a modern browser, so we should ship modern code, not legacy just because we have to support the 5%.

Most JavaScript code is transpiled so the code we write is not the same as the code we ship.

On average, the code we ship is 6x slower and 7x larger than the code we write. This is down to longer syntax and polyfills. This inefficiency means we create a much greater carbon footprint.

Most websites ship around 89% third party code, mainly NPM packages.

Examining the top 1000 modules on npm, the median version is ES5 (legacy, pre 2015).
Some packages offer modern and legacy versions but less than 25% offer anything above ES5.

So, we're working to the lowest common denominator and degrading performance for the majority.

## Solutions

ES2019 introduced the "exports" property in packages so we can use this for modern code and the traditional "main" property for legacy code, like this:

```
// package.json
{
  "name": "amaze-js",
  "exports": "./modern.js",
  "main": "./legacy.js"
}
```

ES2017 added modules so we can use this to separate modern and legacy scripts.

```
<!-- ES2017 (95% support) -->
<script type="module" src="modern.js"></script>

<!-- ES5 (+5% remaining) -->
<script nomodule src="legacy.js"></script>
```

Of the versions since ES5, ES2017 gives the best compromise between modern features and compatibility, giving us 95% support. Therefore, the advice of the Chrome team is to transpile twice, creating separate bundles for ES2017 and ES5.
