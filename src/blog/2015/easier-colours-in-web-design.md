---
layout: "layouts/blog.njk"
title: "Easier Colours in Web Design"
date: 2015-12-24 16:30:21
description: "In the last couple of years I've changed the way I work with colours in websites"
tags: ["blog", "archive", "tech"]
eleventyNavigation:
  key: "Easier Colours in Web Design"
wpid: "78"
---

In the last couple of years I've changed the way I work with colours in websites. I've realised that the number of colours available to us as designers or developers is actually kind of ridiculous and that we're making life harder than it needs to be.

Whether you use RGB(A) or Hexidecimal notation the number of colours available, if I've worked it out correctly, is:

<blockquote>256 * 256 * 256 = 16,777,216 colours</blockquote>
That's a lot of colours.

Whilst having so many colours available for display is brilliant for viewing high quality photos or creating super smooth gradients, we just don't need to work at that level when assigning colours in our day to day work.

I've moved to using short form Hex codes, e.g. #fff, for everything. It's not like this leaves you short of choice. In fact, there are still a cool 4,096 colours to pick from, which is more than enough to make my brain hurt.

<blockquote>16 x 16 x 16 = 4,096 colours</blockquote>
I've even gone a stage further and replaced old long form Hex colours with the my new found short form. It's just a case of rounding the values up or down to their nearest whole increment. Values 0-7 are rounded down, 8-f are rounded up. So, #5ba546 becomes #6a4. Can you tell the difference?
<div style="display: inline-block; inline-size: 30%; background-color: #5ba546; color: #fff; margin-inline-end: .5em; padding: .5em;">#5ba546</div>
<div style="display: inline-block; inline-size: 30%; background-color: #6a4; color: #fff; padding: .5em; margin-block-end: 1em;">#6a4</div>
Maybe you can tell the difference seeing them side by side. Would you feel confident you could tell me which one it was if I only showed you the one? Does it matter anyway?

I would argue that the colour specified and the colour actually seen are never an exact match. A device's display settings - brightness, number of colours, saturation, warmth, etc. can vary so much that is a true colour even really a thing any more? It's more the relationship to other colours that matters than the representation of a single colour on its own.

I wouldn't say there are major gains to be had by shortening the Hex codes but any removal of unnecessary complexity has to be a good thing, right? It's less characters to type - hardly a major victory - but, more importantly, quite a lot easier to remember each colour, which means that we type the right thing from memory more often and don't have to spend so much time referring back to style guides for commonly used colours.

So, which is it, #5ba546 or #6a4?

<div style="display: inline-block; inline-size: 30%; background-color: #6a4; color: #fff; padding: .5em; margin-block-end: 1em;">#?</div>
