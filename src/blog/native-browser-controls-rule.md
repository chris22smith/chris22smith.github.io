---
layout: "layouts/blog.njk"
title: "Native Browser Controls Rule"
date: 2017-11-10 18:00:46
description: "It's become very common for designers to replace the standard native browser controls with their own custom controls"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Native Browser Controls Rule"
wpid: "706"
---

It's become very common for designers to replace the standard native browser controls with their own custom controls. There are good reasons for this, consistent appearance across browsers and devices being the main one. However, there's a lot more to consider than just how it looks.

<h3>Form Controls</h3>
Let's think about something like a slider switch in place of a good old fashioned checkbox. It looks cool but...

Is it accessible?
How does it appear to a non screen user?

Does it have a disabled state?
And a read-only state?
And a focus state?
Do these states all also work for non visual users?

Can you tab to it?

Does it go back to its initial state using a form reset?

Does it work with touch gestures, e.g. swipe left to right?

<h3>Links</h3>
Now let's think about a simple link. It's pretty common to see icons used with an onclick event instead of links. But its not the same.

How would a user know that it's an interactive control? Maybe it has a hover state style change but this would not help a non screen user.

A link (a tag with href attribute) does other things. You can tab to it. On Windows, you can use Ctrl + click to open in a new tab, Shift + click to open in a new window, right click and "Save link as..." (or equivalent) to download the target file. Wrapping the icon in an <a> tag opens up a lot more possibilities.</a>

I'm not saying don't use your own controls but before replacing native controls think about what you might be sacrificing and make sure you've got it all covered.
