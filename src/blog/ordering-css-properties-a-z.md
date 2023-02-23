---
layout: "layouts/blog.njk"
title: "Ordering CSS Properties A-Z"
date: "2016-04-20 21:32:39"
description: "How do you order your CSS properties? There are a few different possible ways that spring to mind:
<ol>
 	<li>Sort all properties alphabetically, listing them A-Z</li>
 	<li>Group properties by their meanings, e"
tags: ["blog","archive"]
eleventyNavigation:
  key: "Ordering CSS Properties A-Z"
wpid: "208"
---
How do you order your CSS properties? There are a few different possible ways that spring to mind:
<ol>
 	<li>Sort all properties alphabetically, listing them A-Z</li>
 	<li>Group properties by their meanings, e.g. typographical properties first, then sizing, then shadows, then animations, etc.</li>
 	<li>Random - just added as they occur to the developer.</li>
</ol>
I started off with them just logged randomly. Then, as I started writing longer style rules, I tried to bring similar items together. Gradually, over a long time, I've realised that the point of this grouping was to make the properties easier to find quickly. These days I always list them A-Z.
<h3>Going A-Z</h3>
At first it seems a bit obsessive-compulsive to order them in this way but it does make a real difference. I think things probably changed for me when I started working with JavaScript objects and JSON and the browser dev tools naturally ordered the object properties alphabetically. I got used to them being listed this way and learnt to scan these lists in a logical way. With CSS I'm convinced that in a list of 10 or more properties that being able to scan them in order and focus on the makes a huge difference when doing it every few minutes.
<h3>CSS Property Naming</h3>
Using A-Z ordering has made me realise how much of an opportunity has been missed with the property naming. For example, 'border-top-right-radius' would have been so much better as 'border-radius-top-right' as it would keep all of the 'border-radius' properties together in an alphabetical list. Also, some typographical properties being prefixed with 'font-' and others 'text-' means that they don't get naturally grouped and 'color' seems stranded out on its own. Hopefully, some future incarnation of CSS will allow some aliasing of property names.
<h3>Code Editor Property Sorting</h3>
I use different code editors for different projects but my main day-to-day one is Visual Studio. The <a href="https://www.jetbrains.com/resharper/" target="_blank">ReSharper</a> tool, a paid extension, offers some code clean-up options, one of which is to order all CSS properties A-Z. This enables me to go back to code I worked on pre-A-Z and quickly kick it into shape in a couple of clicks. I don't know of any other tools that do this but I'm sure they must exist, my guess would be as extensions/plugins rather than a core feature.